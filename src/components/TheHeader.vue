<script setup lang="ts">

import { ref } from 'vue'
import { mockSearchResult } from '../assets/mock-data/mock-search-result';
import { searchStore } from '../services/search.store';

const searchQuery = ref('')

const headerSearch = async () => {
    searchStore.results = mockSearchResult;
};

</script>

<template>
    <div class="header-container">
      <div class="search-container">
        <v-text-field label="Label" 
                      class="search-input" 
                      variant="solo"
                      density="compact"
                      hide-details>
        </v-text-field>
        <v-btn variant="outlined" 
               class="search-btn" 
               @click="headerSearch()">
          Search
        </v-btn>
      </div>
    </div>
</template>
  
<style scoped>
.header-container {
  background-color: var(--header-bg-color);
}
.search-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.search-input {
  color: var(--default-text-color);
  max-width: 700px;
}

.search-btn {
  color: var(--default-text-color);
}
</style>
