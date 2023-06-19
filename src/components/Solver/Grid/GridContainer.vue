<template>
    This is a grid, can't you see
    <div class="grid-container">
        <div :class="calculateClass(index + 1)" v-for="(cell, index) in props.grid">
            <GridCell :cell="index" :grid="props.grid" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['grid']);

const calculateClass = (i) => {
    let classArray = ["grid-item"];
    // remove border on right side
    if(i % 9 == 0) {
        classArray.push("grid-item-9th");
    }
    // make a thick border on every third if it isn't divisible by 9 (right side)
    else if(i % 3 == 0) {
        classArray.push("grid-item-3rd-6th-column");
    }
    // add thick line to bottom if from 19-27 or 46-54 
    if((i >= 19 && i <= 27) || (i >= 46 && i <= 54)) {
        classArray.push("grid-item-3rd-6th-row");
    }
    return classArray;
}
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

</style>