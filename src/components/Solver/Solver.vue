<template>
    <div class="container">
        <GridContainer :grid="grid" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
const grid = ref(new Array(81));
</script>

<style scoped>
.container {
    padding: 1rem;
}
</style>