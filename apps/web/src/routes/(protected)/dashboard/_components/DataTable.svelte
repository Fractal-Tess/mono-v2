<script lang="ts" module>
  import * as m from '$lib/paraglide/messages.js';

  export const columns: ColumnDef<Schema>[] = [
    {
      id: 'drag',
      header: () => null,
      cell: ({ row }) => renderSnippet(DragHandle, { id: row.original.id })
    },
    {
      id: 'select',
      header: ({ table }) =>
        renderComponent(DataTableCheckbox, {
          checked: table.getIsAllPageRowsSelected(),
          indeterminate:
            table.getIsSomePageRowsSelected() &&
            !table.getIsAllPageRowsSelected(),
          onCheckedChange: value => table.toggleAllPageRowsSelected(!!value),
          'aria-label': m['dashboard.table.select_all']()
        }),
      cell: ({ row }) =>
        renderComponent(DataTableCheckbox, {
          checked: row.getIsSelected(),
          onCheckedChange: value => row.toggleSelected(!!value),
          'aria-label': m['dashboard.table.select_row']()
        }),
      enableSorting: false,
      enableHiding: false
    },
    {
      accessorKey: 'header',
      header: m['dashboard.table.header'](),
      cell: ({ row }) =>
        renderComponent(DataTableCellViewer, { item: row.original }),
      enableHiding: false
    },
    {
      accessorKey: 'type',
      header: m['dashboard.table.section_type'](),
      cell: ({ row }) => renderSnippet(DataTableType, { row })
    },
    {
      accessorKey: 'status',
      header: m['dashboard.table.status'](),
      cell: ({ row }) => renderSnippet(DataTableStatus, { row })
    },
    {
      accessorKey: 'target',
      header: () =>
        renderSnippet(
          createRawSnippet(() => ({
            render: () =>
              `<div class="w-full text-right">${m['dashboard.table.target']()}</div>`
          }))
        ),
      cell: ({ row }) => renderSnippet(DataTableTarget, { row })
    },
    {
      accessorKey: 'limit',
      header: () =>
        renderSnippet(
          createRawSnippet(() => ({
            render: () =>
              `<div class="w-full text-right">${m['dashboard.table.limit']()}</div>`
          }))
        ),
      cell: ({ row }) => renderSnippet(DataTableLimit, { row })
    },
    {
      accessorKey: 'reviewer',
      header: m['dashboard.table.reviewer'](),
      cell: ({ row }) => renderComponent(DataTableReviewer, { row })
    },
    {
      id: 'actions',
      cell: () => renderSnippet(DataTableActions)
    }
  ];
</script>

<script lang="ts">
  import {
    closestCenter,
    DndContext,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors
  } from '@dnd-kit-svelte/core';
  import { restrictToVerticalAxis } from '@dnd-kit-svelte/modifiers';
  import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy
  } from '@dnd-kit-svelte/sortable';
  import { CSS } from '@dnd-kit-svelte/utilities';
  import ChevronDownIcon from '@tabler/icons-svelte/icons/chevron-down';
  import ChevronLeftIcon from '@tabler/icons-svelte/icons/chevron-left';
  import ChevronRightIcon from '@tabler/icons-svelte/icons/chevron-right';
  import ChevronsLeftIcon from '@tabler/icons-svelte/icons/chevrons-left';
  import ChevronsRightIcon from '@tabler/icons-svelte/icons/chevrons-right';
  import CircleCheckFilledIcon from '@tabler/icons-svelte/icons/circle-check-filled';
  import DotsVerticalIcon from '@tabler/icons-svelte/icons/dots-vertical';
  import GripVerticalIcon from '@tabler/icons-svelte/icons/grip-vertical';
  import LayoutColumnsIcon from '@tabler/icons-svelte/icons/layout-columns';
  import LoaderIcon from '@tabler/icons-svelte/icons/loader';
  import PlusIcon from '@tabler/icons-svelte/icons/plus';
  import {
    getCoreRowModel,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel
  } from '@tanstack/table-core';
  import { createRawSnippet } from 'svelte';
  import { toast } from 'svelte-sonner';
  import { Badge } from '@repo/ui/components/ui/badge/index.js';
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import { createSvelteTable } from '@repo/ui/components/ui/data-table/data-table.svelte.js';
  import {
    FlexRender,
    renderComponent,
    renderSnippet
  } from '@repo/ui/components/ui/data-table/index.js';
  import * as DropdownMenu from '@repo/ui/components/ui/dropdown-menu/index.js';
  import { Input } from '@repo/ui/components/ui/input/index.js';
  import { Label } from '@repo/ui/components/ui/label/index.js';
  import * as Select from '@repo/ui/components/ui/select/index.js';
  import * as Table from '@repo/ui/components/ui/table/index.js';
  import * as Tabs from '@repo/ui/components/ui/tabs/index.js';
  import type { Schema } from './schemas.js';
  import type { DragEndEvent, UniqueIdentifier } from '@dnd-kit-svelte/core';
  import type {
    ColumnDef,
    ColumnFiltersState,
    PaginationState,
    Row,
    RowSelectionState,
    SortingState,
    VisibilityState
  } from '@tanstack/table-core';
  import DataTableCellViewer from './DataTableCellViewer.svelte';
  import DataTableCheckbox from './DataTableCheckbox.svelte';
  import DataTableReviewer from './DataTableReviewer.svelte';

  let { data }: { data: Schema[] } = $props();
  let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);
  let rowSelection = $state<RowSelectionState>({});
  let columnVisibility = $state<VisibilityState>({});

  const sortableId = $props.id();

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  );

  const dataIds: UniqueIdentifier[] = $derived(data.map(item => item.id));

  const table = createSvelteTable({
    get data() {
      return data;
    },
    columns,
    state: {
      get pagination() {
        return pagination;
      },
      get sorting() {
        return sorting;
      },
      get columnVisibility() {
        return columnVisibility;
      },
      get rowSelection() {
        return rowSelection;
      },
      get columnFilters() {
        return columnFilters;
      }
    },
    getRowId: row => row.id.toString(),
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: updater => {
      if (typeof updater === 'function') {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    onSortingChange: updater => {
      if (typeof updater === 'function') {
        sorting = updater(sorting);
      } else {
        sorting = updater;
      }
    },
    onColumnFiltersChange: updater => {
      if (typeof updater === 'function') {
        columnFilters = updater(columnFilters);
      } else {
        columnFilters = updater;
      }
    },
    onColumnVisibilityChange: updater => {
      if (typeof updater === 'function') {
        columnVisibility = updater(columnVisibility);
      } else {
        columnVisibility = updater;
      }
    },
    onRowSelectionChange: updater => {
      if (typeof updater === 'function') {
        rowSelection = updater(rowSelection);
      } else {
        rowSelection = updater;
      }
    }
  });

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      const oldIndex = dataIds.indexOf(active.id);
      const newIndex = dataIds.indexOf(over.id);
      data = arrayMove(data, oldIndex, newIndex);
    }
  }

  let views = [
    {
      id: 'outline',
      label: 'Outline',
      badge: 0
    },
    {
      id: 'past-performance',
      label: 'Past Performance',
      badge: 3
    },
    {
      id: 'key-personnel',
      label: 'Key Personnel',
      badge: 2
    },
    {
      id: 'focus-documents',
      label: 'Focus Documents',
      badge: 0
    }
  ];

  let view = $state('outline');
  let viewLabel = $derived(
    views.find(v => view === v.id)?.label ?? 'Select a view'
  );
</script>

<Tabs.Root value="outline" class="w-full flex-col justify-start gap-6">
  <div class="flex items-center justify-between px-4 lg:px-6">
    <Label for="view-selector" class="sr-only">View</Label>
    <Select.Root type="single" bind:value={view}>
      <Select.Trigger
        class="@4xl/main:hidden flex w-fit"
        size="sm"
        id="view-selector"
      >
        {viewLabel}
      </Select.Trigger>
      <Select.Content>
        {#each views as view (view.id)}
          <Select.Item value={view.id}>{view.label}</Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
    <Tabs.List
      class="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 @4xl/main:flex hidden"
    >
      {#each views as view (view.id)}
        <Tabs.Trigger value={view.id}>
          {view.label}
          {#if view.badge > 0}
            <Badge variant="secondary">{view.badge}</Badge>
          {/if}
        </Tabs.Trigger>
      {/each}
    </Tabs.List>
    <div class="flex items-center gap-2">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button variant="outline" size="sm" {...props}>
              <LayoutColumnsIcon />
              <span class="hidden lg:inline">Customize Columns</span>
              <span class="lg:hidden">Columns</span>
              <ChevronDownIcon />
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end" class="w-56">
          {#each table
            .getAllColumns()
            .filter(col => typeof col.accessorFn !== 'undefined' && col.getCanHide()) as column (column.id)}
            <DropdownMenu.CheckboxItem
              class="capitalize"
              checked={column.getIsVisible()}
              onCheckedChange={value => column.toggleVisibility(!!value)}
            >
              {column.id}
            </DropdownMenu.CheckboxItem>
          {/each}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      <Button variant="outline" size="sm">
        <PlusIcon />
        <span class="hidden lg:inline">Add Section</span>
      </Button>
    </div>
  </div>
  <Tabs.Content
    value="outline"
    class="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
  >
    <div class="overflow-hidden rounded-lg border">
      <DndContext
        collisionDetection={closestCenter}
        modifiers={[restrictToVerticalAxis]}
        onDragEnd={handleDragEnd}
        {sensors}
        id={sortableId}
      >
        <Table.Root>
          <Table.Header class="bg-muted sticky top-0 z-10">
            {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
              <Table.Row>
                {#each headerGroup.headers as header (header.id)}
                  <Table.Head colspan={header.colSpan}>
                    {#if !header.isPlaceholder}
                      <FlexRender
                        content={header.column.columnDef.header}
                        context={header.getContext()}
                      />
                    {/if}
                  </Table.Head>
                {/each}
              </Table.Row>
            {/each}
          </Table.Header>
          <Table.Body class="**:data-[slot=table-cell]:first:w-8">
            {#if table.getRowModel().rows?.length}
              <SortableContext
                items={dataIds}
                strategy={verticalListSortingStrategy}
              >
                {#each table.getRowModel().rows as row (row.id)}
                  {@render DraggableRow({ row })}
                {/each}
              </SortableContext>
            {:else}
              <Table.Row>
                <Table.Cell colspan={columns.length} class="h-24 text-center">
                  No results.
                </Table.Cell>
              </Table.Row>
            {/if}
          </Table.Body>
        </Table.Root>
      </DndContext>
    </div>
    <div class="flex items-center justify-between px-4">
      <div class="text-muted-foreground hidden flex-1 text-sm lg:flex">
        {table.getFilteredSelectedRowModel().rows.length} of
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>
      <div class="flex w-full items-center gap-8 lg:w-fit">
        <div class="hidden items-center gap-2 lg:flex">
          <Label for="rows-per-page" class="text-sm font-medium"
            >Rows per page</Label
          >
          <Select.Root
            type="single"
            bind:value={
              () => `${table.getState().pagination.pageSize}`,
              v => table.setPageSize(Number(v))
            }
          >
            <Select.Trigger size="sm" class="w-20" id="rows-per-page">
              {table.getState().pagination.pageSize}
            </Select.Trigger>
            <Select.Content side="top">
              {#each [10, 20, 30, 40, 50] as pageSize (pageSize)}
                <Select.Item value={pageSize.toString()}>
                  {pageSize}
                </Select.Item>
              {/each}
            </Select.Content>
          </Select.Root>
        </div>
        <div class="flex w-fit items-center justify-center text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of
          {table.getPageCount()}
        </div>
        <div class="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            variant="outline"
            class="hidden h-8 w-8 p-0 lg:flex"
            onclick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span class="sr-only">Go to first page</span>
            <ChevronsLeftIcon />
          </Button>
          <Button
            variant="outline"
            class="size-8"
            size="icon"
            onclick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span class="sr-only">Go to previous page</span>
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outline"
            class="size-8"
            size="icon"
            onclick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span class="sr-only">Go to next page</span>
            <ChevronRightIcon />
          </Button>
          <Button
            variant="outline"
            class="hidden size-8 lg:flex"
            size="icon"
            onclick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span class="sr-only">Go to last page</span>
            <ChevronsRightIcon />
          </Button>
        </div>
      </div>
    </div>
  </Tabs.Content>
  <Tabs.Content value="past-performance" class="flex flex-col px-4 lg:px-6">
    <div
      class="aspect-video w-full flex-1 rounded-lg border border-dashed"
    ></div>
  </Tabs.Content>
  <Tabs.Content value="key-personnel" class="flex flex-col px-4 lg:px-6">
    <div
      class="aspect-video w-full flex-1 rounded-lg border border-dashed"
    ></div>
  </Tabs.Content>
  <Tabs.Content value="focus-documents" class="flex flex-col px-4 lg:px-6">
    <div
      class="aspect-video w-full flex-1 rounded-lg border border-dashed"
    ></div>
  </Tabs.Content>
</Tabs.Root>

{#snippet DataTableLimit({ row }: { row: Row<Schema> })}
  <form
    onsubmit={e => {
      e.preventDefault();
      toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
        loading: `Saving ${row.original.header}`,
        success: 'Done',
        error: 'Error'
      });
    }}
  >
    <Label for="{row.original.id}-limit" class="sr-only">Limit</Label>
    <Input
      class="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent"
      value={row.original.limit}
      id="{row.original.id}-limit"
    />
  </form>
{/snippet}

{#snippet DataTableTarget({ row }: { row: Row<Schema> })}
  <form
    onsubmit={e => {
      e.preventDefault();
      toast.promise(new Promise(resolve => setTimeout(resolve, 1000)), {
        loading: `Saving ${row.original.header}`,
        success: 'Done',
        error: 'Error'
      });
    }}
  >
    <Label for="{row.original.id}-target" class="sr-only">Target</Label>
    <Input
      class="hover:bg-input/30 focus-visible:bg-background dark:hover:bg-input/30 dark:focus-visible:bg-input/30 h-8 w-16 border-transparent bg-transparent text-right shadow-none focus-visible:border dark:bg-transparent"
      value={row.original.target}
      id="{row.original.id}-target"
    />
  </form>
{/snippet}

{#snippet DataTableType({ row }: { row: Row<Schema> })}
  <div class="w-32">
    <Badge variant="outline" class="text-muted-foreground px-1.5">
      {row.original.type}
    </Badge>
  </div>
{/snippet}

{#snippet DataTableStatus({ row }: { row: Row<Schema> })}
  <Badge variant="outline" class="text-muted-foreground px-1.5">
    {#if row.original.status === 'Done'}
      <CircleCheckFilledIcon class="fill-green-500 dark:fill-green-400" />
    {:else}
      <LoaderIcon />
    {/if}
    {row.original.status}
  </Badge>
{/snippet}

{#snippet DataTableActions()}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger
      class="data-[state=open]:bg-muted text-muted-foreground flex size-8"
    >
      {#snippet child({ props })}
        <Button variant="ghost" size="icon" {...props}>
          <DotsVerticalIcon />
          <span class="sr-only">Open menu</span>
        </Button>
      {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end" class="w-32">
      <DropdownMenu.Item>Edit</DropdownMenu.Item>
      <DropdownMenu.Item>Make a copy</DropdownMenu.Item>
      <DropdownMenu.Item>Favorite</DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item variant="destructive">Delete</DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
{/snippet}

{#snippet DraggableRow({ row }: { row: Row<Schema> })}
  {@const { transform, transition, node, isDragging } = useSortable({
    id: () => row.original.id
  })}

  <Table.Row
    data-state={row.getIsSelected() && 'selected'}
    data-dragging={isDragging.current}
    bind:ref={node.current}
    class="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
    style="transition: {transition.current}; transform: {CSS.Transform.toString(
      transform.current
    )}"
  >
    {#each row.getVisibleCells() as cell (cell.id)}
      <Table.Cell>
        <FlexRender
          content={cell.column.columnDef.cell}
          context={cell.getContext()}
        />
      </Table.Cell>
    {/each}
  </Table.Row>
{/snippet}

{#snippet DragHandle({ id }: { id: number })}
  {@const { attributes, listeners } = useSortable({ id: () => id })}

  <Button
    {...attributes.current}
    {...listeners.current}
    variant="ghost"
    size="icon"
    class="text-muted-foreground size-7 hover:bg-transparent"
  >
    <GripVerticalIcon class="text-muted-foreground size-3" />
    <span class="sr-only">Drag to reorder</span>
  </Button>
{/snippet}
