<script setup>
import { useRoute } from 'vue-router';
import { paintingsService} from '../services/PaintingsService.js';
import {AppState} from '../AppState.js';
import {computed, onMounted, onUnmounted} from 'vue';
import Pop from '../utils/Pop.js';

const route = useRoute()

const activePainting = computed(()=>AppState.activePainting)

async function getPaintingById(){
try {
    console.log(route.params.paintingId)
 await paintingsService.getPaintingById(route.params.paintingId)
}
catch (error){
    Pop.error(error);
    console.error('could not get painting by Id')
}
}
onMounted(()=>{
    getPaintingById()
})
</script>


<template>
    <div class="component container-fluid" v-if="activePainting">
        <div class="row">
            <div class="col d-flex justify-content-center">
                <img :src="activePainting.fullImg" alt="" class="img-format">
            </div>
        </div>
        <div class="row">
            <h5>{{ activePainting.description }}</h5>
            <h3>{{ activePainting.attribution }}</h3>

        </div>
            
    </div>
</template>


<style lang="scss" scoped>

.img-format{
    max-height: 80dvh;
    max-width: 100%;
}
</style>