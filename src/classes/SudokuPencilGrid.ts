import PencilGrid from "../interfaces/PencilGrid";

export default class SudokuPencilGrid implements PencilGrid {
    cells: number[][][];

    constructor() {
        this.cells = [...Array(9)]
            .map(e => [...Array(9)]
            .map(e => Array(9)));
    }
}