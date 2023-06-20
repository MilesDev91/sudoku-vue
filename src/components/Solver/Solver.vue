<template>
    <div class="container">
        <GridContainer 
            @change-selected="(index) => selectedCell = index"
            @change-grid-cell-value="(value, index) => changeGridCellValue(value, index)"
            :grid="grid" 
            :selectedCell="selectedCell" 
        />
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
const grid = reactive(new Array(81));
const selectedCell = ref();

const changeGridCellValue = (value, index) => {
    grid[index] = value;
}

</script>

<style scoped>
.container {
    padding: 1rem;
}
</style>