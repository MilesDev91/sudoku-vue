import SudokuGrid from "../classes/SudokuGrid";

/**
 * 
 * @param {*} grid 
 * @returns 
 */
export default function validateGrid (grid: number[][]) {
    let gridErrors: boolean[][] = [...Array(9)].map(e => Array(9));

    validateRow(grid, gridErrors);

    validateColumn(grid, gridErrors);

    validateBlock(grid, gridErrors);

    return gridErrors;
}

// TODO: Is there a good way to combine the Row, Column, and Block since we are already cycling through every cell on each one, or a way to simplify?

// Validate row
export const validateRow = (grid: number[][], gridErrors: boolean[][]) => {
    // Check for duplicates in each row by adding a key:value to 
    // alreadyseen, then checking on each subsequent loop.
    // If a match is found, then add the 2d location to gridErrors
    for(let row in grid) {
        let alreadySeen = {}
        for(let column in grid) {
            if(alreadySeen[grid[row][column]]) {
                // There is probably a better way to do this,
                // but we need to loop back through the row to get
                // the previous location.
                for(let x in grid) {
                    if(grid[row][x] && grid[row][column] == grid[row][x]) {
                        gridErrors[row][x] = true;
                    }
                }
            }
            else {
                alreadySeen[grid[row][column]] = true;
            }
        }
    }
}

// Validate column
export const validateColumn = (grid: number[][], gridErrors: boolean[][]) => {
    // Use a similar method as above, just with different looping.
    // Used different syntax as well, but does the same thing.
    for(let column = 0; column < 9; column++) {
        let alreadySeen = {}
        for(let row = 0; row < 9; row++) {
            if(alreadySeen[grid[row][column]]) {
                // loop back through to find all locations of duplicates
                for(let x = 0; x < 9; x++) {
                    if(grid[x][column] && grid[row][column] == grid[x][column]) {
                        gridErrors[x][column] = true;
                    }
                }
            }

            else {
                alreadySeen[grid[row][column]] = true;
            }
        }
    }
}

// Validate block
export const validateBlock = (grid: number[][], gridErrors: boolean[][]) => {
    for(let block in blocks) {
        let alreadySeen = {};
        let blockRows = blocks[block].row
        let blockColumns = blocks[block].column
        for(let row in blockRows) {
            for(let column in blockColumns) {
                if(alreadySeen[grid[blockRows[row]][blockColumns[column]]]) {
                    // loop back through to find all locations of duplicates
                    for(let x in blockRows) {
                        for(let y in blockColumns) {
                            if(grid[blockRows[x]][blockColumns[y]] && grid[blockRows[x]][blockColumns[y]] == grid[blockRows[row]][blockColumns[column]]) {
                                gridErrors[blockRows[x]][blockColumns[y]] = true;
                            }
                        }
                    }
                }
    
                else {
                    alreadySeen[grid[blockRows[row]][blockColumns[column]]] = true;
                }
            }
        }
    }
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





/* 

Notes on optimization:

We can potentially only check the indexes relevant to the changed value,
but this would require some refactoring. We could also mark multiple
relevant indexes in the gridErrors array. This is easier, but also
fairly minimal as far as benefits go.

*/