// Because pencil marks don't care about duplicates, we are going to do penciling slightly different from validation.
// Instead of cycling through each row, column, and block, we are cycling through each cell until we hit a value, then
// we cycle through every row, column, and block that matches the cell.

export default function pencilGrid (grid, pencilGrid) {
    let newPencilGrid = [...Array(9)]
        .map(e => [...Array(9)]
        .map(e => [1,2,3,4,5,6,7,8,9]));

    for(let row in grid) {
        for(let column in grid[row]) {
            if(grid[row][column]) {
                let value = grid[row][column];
                let blockNumber = 0;
                for(let block of blocks) {
                    console.log(row, column, block.row, block.column, value);
                    // Once we find the block we can move forward with removing all of the necessary values that see the cell
                    if(block.row.includes(parseInt(row)) && block.column.includes(parseInt(column))) {
                        console.log(newPencilGrid);
                        pencilRow(newPencilGrid, row, value);
                        pencilColumn(newPencilGrid, column, value);
                        pencilBlock(newPencilGrid, block, value);
                        console.log(newPencilGrid);
                        break;
                    }
                    blockNumber += 1;
                }
            } 
        }
    }
    return newPencilGrid;
}

export function cellChangePencil (pencilGrid, row, column, block, value) {
    return;
}

function pencilRow (pencilGrid, row, value) {
    console.log("row");
    for(let column in pencilGrid[row]) {
        pencilGrid[row][column][value - 1] = null;
    }
    return;
}

function pencilColumn (pencilGrid, column, value) {
    console.log("column");
    for(let row in pencilGrid) {
        pencilGrid[row][column][value - 1] = null;
    }
    return;
}

function pencilBlock (pencilGrid, block, value) {
    console.log("block");
    for(let row of block.row) {
        for(let column of block.column) {
            pencilGrid[row][column][value - 1] = null;
        }
    }
    return;
}

// Define blocks

const blocks = [
    { row: [0, 1, 2], column: [0, 1, 2] }, 
    { row: [0, 1, 2], column: [3, 4, 5] },
    { row: [0, 1, 2], column: [6, 7, 8] },
    { row: [3, 4, 5], column: [0, 1, 2] },
    { row: [3, 4, 5], column: [3, 4, 5] },
    { row: [3, 4, 5], column: [6, 7, 8] },
    { row: [6, 7, 8], column: [0, 1, 2] },
    { row: [6, 7, 8], column: [3, 4, 5] },
    { row: [6, 7, 8], column: [6, 7, 8] }
]