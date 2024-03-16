<template>
    <div class="toolbar-container">
        <button class="toolbar-option" v-for="(option, index) in tboptions" :key="index">
            {{ option }}
        </button>
    </div>
</template>

<script setup lang="ts">
import ToolbarOptions from '../../options/ToolbarOptions';

// TODO: Temporary
const tboptions = ["1", "Pencil", "Erase", "Clear Marks", "Clear Entries", "Lock", "Reset"]

interface Props {

}

const props = defineProps<Props>();
</script>

<style scoped>
@import '../../assets/base.css';
button {
  background-color: transparent;
  color: var(--vt-c-text-light-1);
}

.toolbar-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 1rem;
    border: 1px solid black;
    border-radius: 1rem;
    background-color: white;
}

.toolbar-option {
    flex-grow: 1;
    text-align: center;
    padding: 1rem;
    border-right: 1px solid black;
}

.toolbar-option:nth-last-child(1) {
    border: none;
}

</style>