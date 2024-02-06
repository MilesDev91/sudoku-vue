import PencilGrid from "../interfaces/PencilGrid";

export default class SudokuPencilGrid implements PencilGrid {
    cells: number[][][];

    constructor() {
        this.cells = [...Array(9)]
            .map(e => [...Array(9)]
            .map(e => Array(9).fill(0)));
    }

    manualFill() {
        this.cells = [...Array(9)]
        .map(e => [...Array(9)]
        .map(e => [1,2,3,4,5,6,7,8,9]));
    }
}