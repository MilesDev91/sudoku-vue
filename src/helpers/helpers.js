/*
*   Section for validation
*/

export default function validateGrid (grid) {
    // We have to validate every cell with this implementation. 
    // NOTE: There is potential
    // for optimization here, but it
    // is fairly premature. Notes at
    // bottom of file.

    console.log(grid);
    let gridErrors = [...Array(9)].map(e => Array(9));

    validateRow(grid, gridErrors);

    validateColumn(grid, gridErrors);

    validateBlock(grid, gridErrors);

    console.log(gridErrors);

    return gridErrors;
}

// Validate row
const validateRow = (grid, gridErrors) => {
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
const validateColumn = (grid, gridErrors) => {
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
const validateBlock = (grid, gridErrors) => {
    return
}





/* 

Notes on optimization:

We can potentially only check the indexes relevant to the changed value,
but this would require some refactoring. We could also mark multiple
relevant indexes in the gridErrors array. This is easier, but also
fairly minimal as far as benefits go.

*/