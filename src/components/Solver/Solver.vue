<template>
    <div class="container">
        <GridContainer 
            @change-selected="(row, column) => selectedCell = [row, column]"
            @change-grid-cell-value="(value, row, column) => changeGridCellValue(value, row, column)"
            :grid="grid" 
            :selectedCell="selectedCell" 
            :gridErrors="gridErrors"
        />
    </div>
</template>

<script setup>
import validateGrid from './../../helpers/helpers';
import { ref, watch } from 'vue';

// 2d array, Array[row][column]
const grid = ref([...Array(9)].map(e => Array(9)));
const gridErrors = ref([...Array(9)].map(e => Array(9)));
const selectedCell = ref();

const changeGridCellValue = (value, row, column) => {
    grid._value[row][column] = value;
}

watch(() => grid.value, (grid) => {
    console.log("changed");
    gridErrors.value = validateGrid(grid);
    },
    { deep: true }
)

</script>

<style scoped>
.container {
    padding: 1rem;
}
</style>