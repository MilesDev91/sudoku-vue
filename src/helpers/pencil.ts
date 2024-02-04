// Because pencil marks don't care about duplicates, we are going to do penciling slightly different from validation.
// Instead of cycling through each row, column, and block, we are cycling through each cell until we hit a value, then
// we cycle through every row, column, and block that matches the cell.
import SudokuGrid from "../classes/SudokuGrid";
import SudokuPencilGrid from "../classes/SudokuPencilGrid";
import Block from "../interfaces/Block";
import findBlock from "./blockfinder";

// TODO: Implement the second parameter to prevent addition of previously removed values
export default function pencilGrid (grid: SudokuGrid, pencilGrid: SudokuPencilGrid) {
    let newPencilGrid = new SudokuPencilGrid();

    for(let row = 0; row < 9; row++) {
        for(let column = 0; column < 9; column++) {
            if(grid.cells[row][column]) {
                let value: number = grid.cells[row][column] + 1;
                let block = findBlock(row, column);
                cellChangePencil(newPencilGrid, row, column, block, value);
            } 
        }
    }
    return newPencilGrid;
}

export function cellChangePencil (pencilGrid: SudokuPencilGrid, row: number, column: number, block: Block, value: number) {
    pencilRow(pencilGrid, row, value);
    pencilColumn(pencilGrid, column, value);
    pencilBlock(pencilGrid, block, value);
    return;
}

function pencilRow (pencilGrid: SudokuPencilGrid, row: number, value: number) {
    for(let column = 0; column < 9; column++) {
        pencilGrid.cells[row][column][value - 1] = 0;
    }
    return;
}

function pencilColumn (pencilGrid: SudokuPencilGrid, column: number, value: number) {
    for(let row = 0; row < 9; row++) {
        pencilGrid.cells[row][column][value - 1] = 0;
    }
    return;
}

function pencilBlock (pencilGrid: SudokuPencilGrid, block: Block, value: number) {
    for(let row of block.row) {
        for(let column of block.column) {
            pencilGrid.cells[row][column][value - 1] = 0;
        }
    }
    return;
}