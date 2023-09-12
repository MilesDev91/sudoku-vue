import { validateRow, validateColumn, validateBlock } from "./validation";

export default function solve(grid, pencilMarkGrid) {
    let solved = false;
    while(!solved) {
        // Start by tracking available numbers in the pencil mark grid
        pencilGrid(grid, pencilMarkGrid);
        solved = true;
    }
}

const pencilGrid = (grid, pencilMarkGrid) => {
    // We can reuse the logic from validation, passing a flag
    // for solving, then reverse the mark grid
    validateRow(grid, pencilMarkGrid, true);
    //validateColumn(grid, pencilMarkGrid, true);
    //validateBlock(grid, pencilMarkGrid, true);


    //reverse
    console.log(pencilMarkGrid);
    for(let row in pencilMarkGrid) {
        for(let column in pencilMarkGrid) {
            for(let x = 0; x < pencilMarkGrid.length; x++) {
                if(pencilMarkGrid[row][column][x]) {
                    pencilMarkGrid[row][column][x] = null
                } else {
                    pencilMarkGrid[row][column][x] = x + 1;
                }
            }
        }
    }
    console.log(pencilMarkGrid);
}