// Not yet implemented

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

    console.log(pencilMarkGrid);
}