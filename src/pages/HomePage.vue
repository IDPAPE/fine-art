<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { paintingsService } from '../services/PaintingsService.js';
import { AppState } from '../AppState.js';

const paintings = computed(()=>AppState.paintings)

onMounted(()=>{
  getPaintings()
})

async function getPaintings(){
try {
  await paintingsService.getPaintings()
}
catch (error){
  Pop.error(error);
}
}

async function changePage(pageNumber){
  try {
    await paintingsService.getPaintingsByPageNumber(pageNumber)
  }
  catch (error){
    Pop.error(error);
  }
}


</script>

<template>
  <!-- <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="home-card p-5 card align-items-center shadow rounded elevation-3">
      <img src="https://bcw.blob.core.windows.net/public/img/8600856373152463" alt="CodeWorks Logo"
        class="rounded-circle">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        Vue 3 Starter
      </h1>
    </div>
  </div> -->
  <section class="container-fluid">
    <div class="row">
      <div class="col-1">
        <button @click="changePage(AppState.currentPage - 1)" class="w-100 btn btn-primary">Previous Page </button>
      </div>
      <div class="col-1">
        <button @click="changePage(AppState.currentPage + 1)" class="w-100 btn btn-primary">Next Page</button>
      </div>
      
    </div>
    <div class="row">
      <div>
        <Painting v-for="painting in paintings" :key="painting.id" :painting="painting" class="col-3 p-1"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
