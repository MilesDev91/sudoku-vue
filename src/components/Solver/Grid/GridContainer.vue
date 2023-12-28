<template>
    <div class="grid-container">
        <div 
            :class="calculateRowClass(row)" 
            v-for="(cell, row) in props.grid"
        >        
            <div 
                @click="$emit('changeSelected', row, column)"
                :class="calculateColumnClass(row, column)" 
                v-for="(cell, column) in props.grid[row]"
            >
                <GridCell  
                    @change-cell-value="(value, row, column) => $emit('changeGridCellValue', value, row, column)"
                    :isSelected="isSelected(row, column)"
                    :cellValue="grid[row][column]"
                    :cellRow="row"
                    :cellColumn="column"
                    :cellPencilMarks="pencilMarkGrid[row][column]"
                />
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['grid', 'gridErrors', 'selectedCell', 'pencilMarkGrid']);



const emits = defineEmits(["changeSelected","changeGridCellValue"]);

const isSelected = (row, column) => {
    if(props.selectedCell && props.selectedCell[0] == row && props.selectedCell[1] == column) {
        return true
    }
    return false;
}

const calculateRowClass = (row) => {
    let rowNumber = row + 1;

    let classArray = ["grid-row"];

    // add thick line to bottom if third or 6th row
    if(rowNumber % 3 == 0 && rowNumber % 9 != 0) {
        classArray.push("grid-item-3rd-6th-row");
    }

    //remove bottom border on 9th row
    if(rowNumber % 9 == 0) {
        classArray.push("grid-item-9th-row");
    }
    return classArray;
}

// Cell specific stuff goes here as well.
const calculateColumnClass = (row, column) => {
    let colNumber = column + 1;

    let classArray = ["grid-item"];

    // make a thick border on every third if it isn't divisible by 9 (right side)
    if(colNumber % 3 == 0 && colNumber % 9 != 0) {
        classArray.push("grid-item-3rd-6th-column");
    }

    //remove right border from 9th column
    if(colNumber % 9 == 0) {
        classArray.push("grid-item-9th-column");
    }

    // check selected
    if(isSelected(row, column)) {
        classArray.push("grid-item-selected");
    }
    
    // check for a match to the grid error array
    if(props.gridErrors[row][column]) {
        classArray.push("grid-item-error");
    }

    return classArray;
}

</script>

<style scoped>
.grid-container {
    color: black;
    display: flex;
    flex-direction: column;
    width: 720px;
    border: 2px solid black;
}

.grid-item {
    background-color: white;
    width: 80px;
    border-right: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    cursor: pointer;
}

.grid-row {
    display: flex;
    height: 80px;
    border-bottom: 1px solid black;
}



.grid-item-3rd-6th-row {
    border-bottom: 2px solid black;
}

.grid-item-9th-row {
    border-bottom: none;
}

.grid-item-3rd-6th-column {
    border-right: 2px solid black;
}

.grid-item-9th-column {
    border-right: none;
}

.grid-item-selected {
    background-color: rgb(162, 229, 231);
}

.grid-item-error {
    background-color: rgb(223, 145, 121)
}

</style>