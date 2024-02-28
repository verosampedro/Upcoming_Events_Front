<script setup lang="ts">

  import { ref } from 'vue';

  const photos = [
    '/src/assets/img/11542_carteljornadas_thumb_468.jpg',
    '/src/assets/img/cartel_festival_angula2023-309879b3.jpeg',
    '/src/assets/img/festival_castaña.webp',
    '/src/assets/img/11542_carteljornadas_thumb_468.jpg',
    '/src/assets/img/cartel_festival_angula2023-309879b3.jpeg',
    '/src/assets/img/festival_castaña.webp',
    '/src/assets/img/11542_carteljornadas_thumb_468.jpg',
    '/src/assets/img/cartel_festival_angula2023-309879b3.jpeg',
    '/src/assets/img/festival_castaña.webp',
  ];

  const currentPage = ref(1);
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(photos.length / itemsPerPage);

  const getPhotosForPage = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return photos.slice(startIndex, endIndex);
  };

  const previousPage = () => {
    currentPage.value = Math.max(currentPage.value - 1, 1);
  };

  const nextPage = () => {
    currentPage.value = Math.min(currentPage.value + 1, totalSlides);
  };

</script>

<template>

  <div class="carousel-container">
    <div class="slides" :style="{ transform: `translateX(-${(currentPage - 1) * 100}%)` }">
      <div class="slide" v-for="(page, index) in totalSlides" :key="index">
        <div class="row">
          <div class="card" v-for="(photo, idx) in getPhotosForPage(page)" :key="idx">
            <img :src="photo" alt="Slide" class="photo">
          </div>
        </div>
      </div>
    </div>
    <div class="controls">
      <div class="arrow left" @click="previousPage">&#60;</div>
      <div class="arrow right" @click="nextPage">&#62;</div>
    </div>
  </div>

</template>

<style scoped lang="scss">

  .carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;

    .slides {
      display: flex;
      transition: transform 0.5s ease;
    }

    .slide {
      flex: 0 0 100%;
      display: inline-block;
      text-align: center;
    }

    .row {
      display: flex;
      justify-content: space-between;
      margin: 10px 5px;
      margin-left: 50px;
      margin-right: 50px;
    }

    .card {
      flex: 0 0 30%; 
      padding: 10px;
      border: 1px solid #ccc; 
      border-radius: 5px;
    }

    .photo {
      width: 100%; 
    }

    .controls {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      z-index: 1; 
    }

    .arrow {
      cursor: pointer;
      font-size: 24px;
      color: #27a138;
      background-color: rgba(255, 255, 255, 0.5);
      padding: 5px 10px;
      border-radius: 5px;
      margin: 0 10px;
    }

    .arrow.left {
      margin-right: auto;
    }

    .arrow.right {
      margin-left: auto; 
    }

    .arrow:hover {
      font-weight: bold;
    }
  }

</style>
