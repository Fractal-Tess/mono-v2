<script lang="ts">
  import { useClerkContext, UserButton } from 'svelte-clerk/client';
  import * as Sidebar from '@repo/ui/components/ui/sidebar/index.js';

  const clerk = useClerkContext();
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <Sidebar.MenuButton
      size="lg"
      class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div class="grid flex-1 text-left text-sm leading-tight">
        <span class="truncate font-medium"
          >{clerk.user?.fullName || clerk.user?.firstName || 'User'}</span
        >
        <span class="text-muted-foreground truncate text-xs">
          {clerk.user?.primaryEmailAddress?.emailAddress || 'No email'}
        </span>
      </div>

      <UserButton
        afterSignOutUrl="/sign-in"
        appearance={{
          elements: {
            avatarBox: 'size-8 rounded-lg',
            userButtonPopoverCard: 'w-56 rounded-lg',
            userButtonPopoverActionButton: 'rounded-md',
            userButtonPopoverActionButtonText: 'text-sm',
            userButtonPopoverFooter: 'border-t',
            userButtonPopoverRootBox: 'w-full'
          }
        }}
      />
    </Sidebar.MenuButton>
  </Sidebar.MenuItem>
</Sidebar.Menu>
