<template>
    <div class="container">
        <GridContainer 
            @change-selected="(row, column) => selectedCell = [row, column]"
            @change-grid-cell-value="(value, row, column) => changeGridCellValue(value, row, column)"
            :grid="grid.data" 
            :selectedCell="selectedCell" 
            :gridErrors="gridErrors.data"
            :pencilMarkGrid="pencilMarkGrid.data"
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
import Grid from '../../models/Grid';

// 2d array, Array[row][column]
const grid = ref(new Grid());
const gridErrors = ref(new Grid());
const selectedCell = ref();

// 3d array, Array[row][column][multiple values]
const pencilMarkGrid = ref(new Grid(true));
const solvingGrid = ref(new Grid(false, true));

const changeGridCellValue = (value, row, column) => {
    grid.value.data[row][column] = value;
    let block = findBlock(row, column);
    cellChangePencil(pencilMarkGrid.value.data, row, column, block, value);
}

const autopencil = () => {
    pencilMarkGrid.value.data = pencilGrid(grid.value.data);
}

const solveGrid = () => {
    findSolution(grid.value.data, solvingGrid.value.data);
}

watch(() => grid.value.data, (grid) => {
    gridErrors.value.data = validateGrid(grid);
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