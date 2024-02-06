<template>
    <div class="container">
        <GridContainer 
            @change-selected="(row, column) => selectedCell = [row, column]"
            @change-grid-cell-value="(value, row, column) => changeGridCellValue(value, row, column)"
            :grid="grid.data" 
            :selectedCell="selectedCell" 
            :gridErrors="gridErrors"
            :pencilMarkGrid="pencilMarkGrid.cells"
        />
        <div class="button-container">
            <button @click="solveGrid()" style="background-color: gray; cursor: not-allowed" disabled>Solve</button>
            <button @click="manualPencil()">Pencil</button>
        </div>
    </div>
</template>

<script setup>
import validateGrid from './../../helpers/validation';
import findSolution from './../../helpers/solve';
import pencilGrid, { cellChangePencil } from './../../helpers/pencil';
import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import findBlock from './../../helpers/blockfinder';

import SudokuGrid from '../../classes/SudokuGrid';
import SudokuPencilGrid from '../../classes/SudokuPencilGrid';
import SudokuSolveGrid from '../../classes/SudokuSolveGrid';
import SelectedCell from '../../interfaces/SelectedCell';

// 2d array, number[][]
const grid: Ref<SudokuGrid> = ref(new SudokuGrid());
const gridErrors: Ref<boolean[][]> = ref([...Array(9)].map(e => [...Array(9)].map(e => false)));
const selectedCell: Ref<SelectedCell> = ref({
    // Might be better to leave as [0,0]
    coordinate: [-1,-1]
});

// 3d array, Array[row][column][multiple values]
const pencilMarkGrid = ref(new Grid(true));
const solvingGrid = ref(new Grid(false, true));

const changeGridCellValue = (value, row, column) => {
    grid.value.data[row][column] = value;
    let block = findBlock(row, column);
    cellChangePencil(pencilMarkGrid.value, row, column, block, value);
}

const manualPencil = () => {
    pencilMarkGrid.value = pencilGrid(grid.value, pencilMarkGrid.value, true);
}

const solveGrid = () => {
    findSolution(grid.value.data, solvingGrid.value.data);
}

watch(() => grid.value.cells, (grid) => {
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