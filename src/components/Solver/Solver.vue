<template>
    <div class="container">
        <GridContainer 
            @change-selected="(row, column) => selectedCell = [row, column]"
            @change-grid-cell-value="(value, row, column) => changeGridCellValue(value, row, column)"
            :grid="grid" 
            :selectedCell="selectedCell" 
            :gridErrors="gridErrors"
            :pencilMarkGrid="pencilMarkGrid"
        />
        <div class="button-container">
            <button @click="solveGrid()">Solve</button>
            <button @click="autopencil()">Auto Pencil</button>
        </div>
    </div>
</template>

<script setup>
import validateGrid from './../../helpers/validation';
import findSolution from './../../helpers/solve';
import pencilGrid, { cellChangePencil } from './../../helpers/pencil';
import { ref, watch } from 'vue';
import findBlock from './../../helpers/blockfinder';

// 2d array, Array[row][column]
const grid = ref([...Array(9)].map(e => Array(9)));
const gridErrors = ref([...Array(9)].map(e => Array(9)));
const selectedCell = ref();
const pencilMarkGrid = ref([...Array(9)]
    .map(e => [...Array(9)]
    .map(e => [...Array(9)])));
const solvingGrid = ref([...Array(9)]
    .map(e => [...Array(9)]
    .map(e => [1,2,3,4,5,6,7,8,9])));

const changeGridCellValue = (value, row, column) => {
    grid.value[row][column] = value;
    let block = findBlock(row, column);
    cellChangePencil(pencilMarkGrid.value, row, column, block, value);
}

const autopencil = () => {
    pencilMarkGrid.value = pencilGrid(grid.value);
    console.log(pencilMarkGrid.value);
}

const solveGrid = () => {
    findSolution(grid.value, solvingGrid.value);
}

watch(() => grid.value, (grid) => {
    gridErrors.value = validateGrid(grid);
    },
    { deep: true }
)

</script>

<style scoped>
.container {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.button-container {
    display: flex;
    margin-top: 1rem;
}

.button-container button {
    font-size: 1.1rem;
    border-radius: .5rem;
    margin: 0 1rem;
    padding: 1rem 1.5rem;
}
</style>