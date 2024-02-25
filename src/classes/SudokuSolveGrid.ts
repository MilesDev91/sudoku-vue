import SolvingGrid from "../interfaces/SolvingGrid";

export default class SudokuSolveGrid implements SolvingGrid {
    cells: number[][][];

    constructor() {
        this.cells = [...Array(9)]
            .map(e => [...Array(9)]
            .map(e => [1,2,3,4,5,6,7,8,9]));
    }
}