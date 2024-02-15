<script setup lang="ts">

</script>


<template>

  <Header>
    <div>
        <a class="navbar-brand" href="/"> <img src="/src/assets/img/layout_set_logo.png" width="299" height="107" class="asturias" alt="Logo Asturias Paraíso Natural"></a>
    </div>
    <div >
      <h1>Eventos Gastronómicos</h1>
    </div>
    <nav class="navbar navbar-expand-lg">
     <div class="container-fluid">
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link moove" aria-current="page" href="#"><p>Eventos</p></a>
            </li>
            <li class="nav-item">
              <a class="nav-link moove" href="#">Acceder | Registrarse</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </Header>

</template>
<style scoped lang="scss">

@font-face {
    font-family: 'MarckScript-Regular';
    src: url('../../assets/font/MarckScript-Regular.ttf');
}


  header {
    background-color: #006DB0;
    padding: 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 1;
    width: 100%;

    h1 {
      color: #FFE039;
      font-size: 3rem;
      font-family: 'MarckScript-Regular';
      margin-top: 0.9rem;
    }

    .navbar-brand {
      margin-left: 1rem;
    }

    .nav-link {
      color: #FFFFFF;
      display: flex;
      flex-direction: row;
    }

    .nav-link:hover {
      color: #FFE039; 
    } 

    .moove {
      margin-top: 1.4rem;
    }
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='%23FFE039' viewBox='0 0 16 16'%3E%3Cpath d='M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 3.5zM0 7a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5A.5.5 0 0 1 0 7zm0 4.5A.5.5 0 0 1 .5 11h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z'/%3E%3C/svg%3E");
  }

  .navbar-toggler {
    border-color: #FFE039 !important;
  }


  @media (max-width: 1024px) {
    .asturias {
    width: 199px; 
  }
  
  h1 {
   font-size: 2.7rem;
  }
  }

  @media (max-width: 840px) {
    .asturias {
    width: 119px; 
  }
  
  h1 {
   font-size: 2rem;
  }
  }


  @media (max-width: 540px) {

    header {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  .asturias {
    width: 109px; 
  
  }

  h1 {
   font-size: 1.5rem;
  }
  }

  @media (max-width: 480px) {

    header {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .asturias {
      width: 79px; 
    }

    h1 {
     font-size: 1.1rem;
    }
  }


  @media (max-width: 280px) {
   
    header {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .asturias {
      width: 69px; 
    }

    h1 {
      font-size: 0.7rem;
    }
  }

}

</style>