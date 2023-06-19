<template>
    <p>{{ cell + 1 }}</p>
</template>

<script setup>
const props = defineProps(['cell', 'grid']);
</script>