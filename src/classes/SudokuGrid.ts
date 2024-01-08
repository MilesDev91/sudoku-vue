import Grid from "../interfaces/Grid";

export default class SudokuGrid implements Grid {
    cells: number[][];

    constructor() {
        this.cells = [...Array(9)]
            .map(e => Array(9))
    }
}