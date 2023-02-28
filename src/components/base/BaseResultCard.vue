<script setup lang="ts">
import { SearchResult } from '../../models/search-result.model';


const props = defineProps<{
  item?: SearchResult,
}>()

</script>

<template>
    <div class="result-container">
      <v-card width="400">
        <template v-slot:title>
          {{ props.item?.title }}
        </template>
        <template v-slot:text>
          {{ props.item?.content }}
        </template>
      </v-card>
    </div>
</template>
  
<style scoped>
.result-container {
  background-color: lightsalmon;
  overflow: hidden;
  height: 100px;
  margin: 5px;
}
</style>
