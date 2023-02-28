<script setup lang="ts">
import TheHeader from './TheHeader.vue';
import TheWorkspace from './TheWorkspace.vue';



</script>

<template>
   <div class="app-container">
      <TheHeader/>
      <TheWorkspace/>
   </div>
   
</template>
  
<style scoped>
  .app-container {
   display: flex;
   flex-direction: column;
}
</style>
  