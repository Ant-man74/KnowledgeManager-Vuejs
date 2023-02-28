<script setup lang="ts">
import { SearchResult } from '../models/search-result.model';
import { searchStore } from '../services/search.store';
import TheWorkspaceSidebarFilters from './TheWorkspaceSidebarFilters.vue';
import TheWorkspaceSidebarResult from './TheWorkspaceSidebarResult.vue';

</script>

<template>
  <div class="sidebar-container">
    <TheWorkspaceSidebarFilters />
    <TheWorkspaceSidebarResult :results="searchStore.results"/>
  </div>
</template>

<style scoped>
.sidebar-container {
  background-color: var(--main-bg-color);
  max-width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr ;
}
</style>
