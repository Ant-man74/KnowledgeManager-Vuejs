<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'

interface TabsState {
  tabs: {id: number, title: string}[]
}

const state: TabsState = reactive({ tabs: [] })

onMounted(() => {
  state.tabs = [
    { id: 1, title: 'My journey with Vue' },
    { id: 2, title: 'Blogging with Vue' },
    { id: 3, title: 'Why Vue is so fun' },
    { id: 4, title: 'Blogging with Vue' },
    { id: 5, title: 'Why Vue is so fun' }
  ];
})

const closeTab = async (id: number) => {
  const indexToDelete = state.tabs.findIndex(tab => tab.id === id);
  console.log(indexToDelete)
  state.tabs = state.tabs.splice(indexToDelete, 1);
  console.log(state.tabs[0])
};

</script>

<template>
    <div class="workspace-documents-container">
        <v-card>
          <v-tabs v-model="state.tabs">
            <v-tab v-for="tab in state.tabs"
                   :key="tab.id"
                   :value="tab.title">
                <span>
                  <span>{{ tab.title }}</span>
                  <v-btn variant="outlined" 
                         class="search-btn" 
                         @click="closeTab(tab.id)">
                    close {{ tab.id }}
                  </v-btn>
                </span> 
            </v-tab>
          </v-tabs>
          <v-card-text class="text-center">
          
          </v-card-text>
        </v-card>
    </div>
</template>

<style scoped>
.workspace-documents-container {
    background-color: var(--main-bg-color);
    flex: 4;
}
</style>
