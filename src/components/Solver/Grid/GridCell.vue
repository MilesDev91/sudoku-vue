<template>
    <p>{{ cellValue }}</p>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps(['cellValue', 'isSelected', 'cellIndex']);

const emit = defineEmits(['changeCellValue']);

const emitChangeCellValueEvent = function(e) {
    if(e.key >= 1 && e.key <= 9) {
        emit('changeCellValue', e.key, props.cellIndex);
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
</style>