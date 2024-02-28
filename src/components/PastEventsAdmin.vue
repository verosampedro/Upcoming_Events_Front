<script setup lang="ts">



</script>

<template>
  <div id="cards" class="card-container">
    <img src="/src/assets/img/Jornadas-de-la-Matanza-2024-FIT-Amieva.jpg" alt="" class="mainImage">
    <h2>JORNADAS DE LA MATANZA</h2>

    <div class="location">
      <img src="/src/assets/img/place-svgrepo-com.svg" alt="">
      <p>AMIEVA</p>
    </div>

    <div class="date">
      <img src="/src/assets/img/calendar-days-svgrepo-com.svg" alt="">
      <p>02/02/2024 ~ 04/02/24</p>
    </div>

    <div class="buttonContainer">

      <img src="/src/assets/img/star-svgrepo-com.svg" alt="">
      <button>EDITAR</button>
      <img src="/src/assets/img/trash-svgrepo-com.svg" alt="">

    </div>

  </div>

</template>

<style scoped lang="scss">

.card-container {
  position: relative; 
}

#cards {
  width: 60%;
  border: 2px solid #27a138;
  border-radius: 5%;
  padding: 10px;
  text-align: center;
  font-family: 'Raleway', sans-serif;

  .location,
  .date {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .mainImage {
    width: 60%;
    padding: 10px;
  }

  img {
    width: 10%;
  }

  h2 {
    font-weight: bold;
    padding: 5px;
  }

  p {
    color: #27a138;
    font-weight: bold;
    padding: 5px;
  }

  .buttonContainer {

    display: flex;
    justify-content: space-between;
    padding: 5px;

    img {
        width: 12%;
    }

    button {
    background-color: #27a138;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    padding: 10px;
    margin-top: 10px;
    }

    }


  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.5); 
    z-index: 1; 
    border-radius: 5%; 
}

}


@media only screen and (min-width: 768px) {

#cards {
  width: 15%;

  h2 {
    font-size: 1rem;
  }

  img {
    width: 10%;
  }

  .mainImage {
    width: 40%;
  }
}
}

</style>