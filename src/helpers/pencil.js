// Because pencil marks don't care about duplicates, we are going to do penciling slightly different from validation.
// Instead of cycling through each row, column, and block, we are cycling through each cell until we hit a value, then
// we cycle through every row, column, and block that matches the cell.
import findBlock from "./blockfinder";

export default function pencilGrid (grid, pencilGrid) {
    let newPencilGrid = [...Array(9)]
        .map(e => [...Array(9)]
        .map(e => [1,2,3,4,5,6,7,8,9]));

    for(let row in grid) {
        for(let column in grid[row]) {
            if(grid[row][column]) {
                let value = grid[row][column];
                let block = findBlock(row, column);
                cellChangePencil(newPencilGrid, row, column, block, value);
            } 
        }
    }
    return newPencilGrid;
}

export function cellChangePencil (pencilGrid, row, column, block, value) {
    pencilRow(pencilGrid, row, value);
    pencilColumn(pencilGrid, column, value);
    pencilBlock(pencilGrid, block, value);
    return;
}

function pencilRow (pencilGrid, row, value) {
    for(let column in pencilGrid[row]) {
        pencilGrid[row][column][value - 1] = null;
    }
    return;
}

function pencilColumn (pencilGrid, column, value) {
    for(let row in pencilGrid) {
        pencilGrid[row][column][value - 1] = null;
    }
    return;
}

function pencilBlock (pencilGrid, block, value) {
    for(let row of block.row) {
        for(let column of block.column) {
            pencilGrid[row][column][value - 1] = null;
        }
    }
    return;
}

// Define blocks

