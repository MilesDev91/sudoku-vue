<template>
    This is a grid, can't you see
    <div class="grid-container">
        <p class="grid-item" v-for="cell in grid">1</p>
    </div>
</template>

<script setup>
const grid = new Array(81);
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

</style>