import GridBlock from "../interfaces/GridBlock";

const blocks: GridBlock[] = [
    { row: [0, 1, 2], column: [0, 1, 2], number: 1 }, 
    { row: [0, 1, 2], column: [3, 4, 5], number: 2 },
    { row: [0, 1, 2], column: [6, 7, 8], number: 3 },
    { row: [3, 4, 5], column: [0, 1, 2], number: 4 },
    { row: [3, 4, 5], column: [3, 4, 5], number: 5 },
    { row: [3, 4, 5], column: [6, 7, 8], number: 6 },
    { row: [6, 7, 8], column: [0, 1, 2], number: 7 },
    { row: [6, 7, 8], column: [3, 4, 5], number: 8 },
    { row: [6, 7, 8], column: [6, 7, 8], number: 9 }
]

export default function findBlock (cellRow: number, cellColumn: number): GridBlock {
    for(let block of blocks) {
        if(block.row.includes(cellRow) && block.column.includes(cellColumn)) {
            return block;
        }
    }
    
    return blocks[0];
}