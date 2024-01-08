import SolveGrid from "../interfaces/SolveGrid";

export default class SudokuSolveGrid implements SolveGrid {
    cells: number[][][];

    constructor() {
        this.cells = [...Array(9)]
            .map(e => [...Array(9)]
            .map(e => [1,2,3,4,5,6,7,8,9]));
    }
}