<script setup>
import { computed, onMounted } from 'vue';
import {AppState} from '../AppState.js'
import {Painting} from '../models/Painting.js'

defineProps({painting : Painting})

</script>


<template>
    <RouterLink :to="{name: 'PaintingInfo', params: {paintingId : painting.id}}" class="selectable">
    <img :src="painting.smallImg" :alt="painting.slug">
    </RouterLink>
</template>


<style lang="scss" scoped>

</style>