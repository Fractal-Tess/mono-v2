import Content from './pagination-content.svelte';
import Ellipsis from './pagination-ellipsis.svelte';
import Item from './pagination-item.svelte';
import Link from './pagination-link.svelte';
import NextButton from './pagination-next-button.svelte';
import PrevButton from './pagination-prev-button.svelte';
import Root from './pagination.svelte';

export {
  Root,
  Content,
  Item,
  Link,
  PrevButton,
  NextButton,
  Ellipsis,
  //
  Root as Pagination,
  Content as PaginationContent,
  Item as PaginationItem,
  Link as PaginationLink,
  PrevButton as PaginationPrevButton,
  NextButton as PaginationNextButton,
  Ellipsis as PaginationEllipsis
};
