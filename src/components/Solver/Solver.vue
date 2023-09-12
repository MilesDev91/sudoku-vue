<template>
    <div class="container">
        <GridContainer 
            @change-selected="(row, column) => selectedCell = [row, column]"
            @change-grid-cell-value="(value, row, column) => changeGridCellValue(value, row, column)"
            :grid="grid" 
            :selectedCell="selectedCell" 
            :gridErrors="gridErrors"
        />
        <button @click="solveGrid()">Solve</button>
    </div>
</template>

<script setup>
import validateGrid from './../../helpers/validation';
import findSolution from './../../helpers/solve';
import { ref, watch } from 'vue';

// 2d array, Array[row][column]
const grid = ref([...Array(9)].map(e => Array(9)));
const gridErrors = ref([...Array(9)].map(e => Array(9)));
const selectedCell = ref();
// const pencilMarkGrid = ref([...Array(9)].map(e => Array(9)));
const pencilMarkGridSolve = ref([...Array(9)]
    .map(e => [...Array(9)]
    .map(e => Array())));

const changeGridCellValue = (value, row, column) => {
    grid._value[row][column] = value;
}

const solveGrid = () => {
    findSolution(grid.value, pencilMarkGridSolve.value);
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