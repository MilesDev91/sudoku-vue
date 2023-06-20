<template>
    This is a grid, can't you see
    <div class="grid-container">
        <div 
            @click="$emit('changeSelected', index)"
            :class="calculateClass(index)" 
            v-for="(cell, index) in props.grid"
        >
            <GridCell  
                @change-cell-value="(value, index) => $emit('changeGridCellValue', value, index)"
                :isSelected="isSelected(index)"
                :cellValue="grid[index]"
                :cellIndex="index"
            />
        </div>
    </div>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps(['grid', 'selectedCell']);



const emits = defineEmits(["changeSelected","changeGridCellValue"]);

const isSelected = (index) => {
    return true ? props.selectedCell == index : false;
}

const calculateClass = (index) => {
    // cellNumber is for grid styling, index for cell specific
    let cellNumber = index + 1;

    let classArray = ["grid-item"];

    // remove border on right side
    if(cellNumber % 9 == 0) {
        classArray.push("grid-item-9th");
    }
    // make a thick border on every third if it isn't divisible by 9 (right side)
    else if(cellNumber % 3 == 0) {
        classArray.push("grid-item-3rd-6th-column");
    }
    // add thick line to bottom if from 19-27 or 46-54 
    if((cellNumber >= 19 && cellNumber <= 27) || (cellNumber >= 46 && cellNumber <= 54)) {
        classArray.push("grid-item-3rd-6th-row");
    }
    // selected cell styling
    if(isSelected(index)) {
        classArray.push("grid-item-selected");
    }
    return classArray;
}

// Watch for selected cell change to trigger style change
watch(() => props.selectedCell, () => {
    console.log(props.selectedCell);
})

</script>

<style scoped>
.grid-container {
    background-color: rgb(233, 233, 233);
    color: black;
    display: grid;
    grid-template: repeat(9, 1fr) / repeat(9, 1fr);
    justify-items: center;
    align-items: center;
    width: 600px;
    height: 600px;
    place-items: stretch;
}

.grid-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    cursor: pointer;
}

.grid-item-9th {
    border-right: none;
}

.grid-item-3rd-6th-row {
    border-bottom: 2px solid black;
}

.grid-item-3rd-6th-column {
    border-right: 2px solid black;
}

.grid-item-selected {
    background-color: rgb(162, 229, 231);
}

</style>