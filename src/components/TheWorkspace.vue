<script setup lang="ts">
import TheWorkspaceDocuments from './TheWorkspaceDocuments.vue';
import TheWorkspaceSidebar from './TheWorkspaceSidebar.vue';




</script>

<template>
    <div class="workspace-container">
        <TheWorkspaceSidebar/>
        <TheWorkspaceDocuments/>
    </div>
</template>

<style scoped>
.workspace-container {
    padding: 5px;
    display: flex;
}
</style>
