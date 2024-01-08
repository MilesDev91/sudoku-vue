/**
 * 
 */
export default class Grid {
    constructor(pencilGrid = false, solveGrid = false) {
        if(pencilGrid) {
            this.data = [...Array(9)]
                .map(e => [...Array(9)]
                .map(e => [...Array(9)]))
        } else if(solveGrid) {
            this.data = [...Array(9)]
                .map(e => [...Array(9)]
                .map(e => [1,2,3,4,5,6,7,8,9]))
        } else {
            this.data = [...Array(9)]
                .map(e => Array(9))
        }
    }
}