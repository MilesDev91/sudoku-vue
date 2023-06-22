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
    let gridErrors = new Array(81);

    validateRow(grid, gridErrors);

    validateColumn(grid, gridErrors);

    validateBlock(grid, gridErrors);

    return gridErrors;
}

// Validate row
const validateRow = (grid, gridErrors) => {
    // Check for duplicates in each row
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