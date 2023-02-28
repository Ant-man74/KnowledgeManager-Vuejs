<script setup lang="ts">
import { SearchResult } from '../models/search-result.model';


const props = defineProps<{
  results?: SearchResult[],
}>()

</script>

<template>
  <div class="filters-container">
    <div v-if="!props.results || props.results?.length == 0">
      No filters available
    </div>
  </div>
</template>

<style scoped>

.result-container {
  min-width: 100px;
  background-color: var(--card-bg-color);
}
</style>
