<script setup lang="ts">
import { SearchResult } from '../models/search-result.model';
import BaseResultCard from '../components/base/BaseResultCard.vue';


const props = defineProps<{
  results?: SearchResult[],
}>()

</script>

<template>
  <div class="result-container">
    <div v-if="!props.results || props.results?.length == 0">
      No results available
    </div>
    <BaseResultCard v-for="item in props.results" 
                    :item="item" />
  </div>
</template>

<style scoped>

.result-container {
  min-width: 100px; 
  background-color: var(--card-bg-color);
}
</style>
