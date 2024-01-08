<template>
    <div v-if="cellValue">
        <p>{{ cellValue }}</p>
    </div>
    <div class="pencil-mark-cell" v-else>
        <div v-for="mark in cellPencilMarks">
            <p>{{ mark }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';

const props = defineProps(['cellValue', 'cellRow', 'cellColumn', 'cellPencilMarks', 'isSelected']);

const emit = defineEmits(['changeCellValue']);

const emitChangeCellValueEvent = function(e: KeyboardEvent) {
    if(parseInt(e.key) >= 1 && parseInt(e.key) <= 9) {
        emit('changeCellValue', e.key, props.cellRow, props.cellColumn);
    }
}



/* 
*  Add watcher to isSelected value.
*  If the cell becomes selected, then add listener for 
*  numeric keypresses to window.
*  Destroy listener after cell becomes unselected.
*/
watch(() => props.isSelected, (isSelected) => {
    if(isSelected) {
        window.addEventListener('keyup', emitChangeCellValueEvent);
    }
    else {
        window.removeEventListener('keyup', emitChangeCellValueEvent);
    }
})

</script>

<style scoped>
.pencil-mark-cell {
    display: flex;
    font-size: .8rem;
}
</style>