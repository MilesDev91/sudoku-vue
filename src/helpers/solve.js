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
    // for penciling
    validateRow(grid, pencilMarkGrid, true);
    //validateColumn(grid, pencilMarkGrid, true);
    //validateBlock(grid, pencilMarkGrid, true);

    console.log(pencilMarkGrid);
}