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
    for(let i in grid) {
    let alreadySeen = {}
        for(let y in grid[i]) {
            if(alreadySeen[grid[i][y]]) {
                // There is probably a better way to do this,
                // but we need to loop back through the row to get
                // the previous location.
                for(let x in grid[i]) {
                    if(grid[i][y] == grid[i][x]) {
                        gridErrors[i][x] = true;
                    }
                }
            }
            else {
                alreadySeen[grid[i][y]] = true;
            }
        }
    }
}

// Validate column
const validateColumn = (grid, gridErrors) => {
    return
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