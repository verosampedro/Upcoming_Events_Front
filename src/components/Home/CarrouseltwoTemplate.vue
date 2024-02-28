<template>
  <div class="carousel-container">
    <div class="slides">
      <div v-for="page in totalPages" :key="page" :class="{ 'active': currentPage === page }">
        <div class="slide" v-for="(photo, index) in getPhotosForPage(page)" :key="index">
          <img :src="photo" alt="Slide">
        </div>
      </div>
    </div>
    <div class="controls">
      <div class="arrow left" @click="previousPage">&#60;</div>
      <div class="arrow right" @click="nextPage">&#62;</div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  data() {
    return {
      photos: [
        '/src/assets/photo1.jpg',
        '/src/assets/photo2.jpg',
        '/src/assets/photo3.jpg',
        '/src/assets/photo4.jpg',
        '/src/assets/photo5.jpg',
        '/src/assets/photo6.jpg',
        '/src/assets/photo7.jpg',
        '/src/assets/photo8.jpg',
        '/src/assets/photo9.jpg',

      ],
      itemsPerPage: 9,
      currentPage: 1,
    };
  },
  methods: {
    getPhotosForPage(page) {
      const startIndex = (page - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.photos.slice(startIndex, endIndex);
    },
    previousPage() {
      this.currentPage = Math.max(this.currentPage - 1, 1);
    },
    nextPage() {
      this.currentPage = Math.min(this.currentPage + 1, this.totalPages);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.photos.length / this.itemsPerPage);
    },
  },
});
</script>

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

  .controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
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

  .arrow:hover {
    font-weight: bold;
  }
}
</style>