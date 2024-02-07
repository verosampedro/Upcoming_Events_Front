<script setup lang="ts">


import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


// const store = useAuthStore()

 const username = ref('')
 const password = ref('')
 const isLoading = ref(false);

// const route = useRoute ()
// const router = useRouter()

// function login (){
//     if(username.value === store.user.username && password.value === store.user.password){
//         store.user.isAuthenticated = true;
//         const redirectPath = route.query.redirec || 'homeview'
//         router.push(redirectPath);
//     }
// }

</script>


<template>
    <body>
        <div id="container">
            <div class="form">
                <img src="/src/assets/img/layout_set_logo.png" alt="">
                    <form @submit.prevent="console.log('Hola')">
                        <label for="correoelectronico">Correo electrónico</label>
                        <input class="input-field" type="text" v-model="username" required>
                        <label for="contrasena">Contraseña</label>
                        <input class="=input-field" type="text" v-model="password" required>
                        <p>¿Todavía no estás registrado?</p>
                        <p>¿Has olvidado tu contraseña?</p>
                        <button type="submit" :disabled="isLoading" class="btn btn-primary btn-lg">
                            {{ isLoading ? 'Logging in...' : 'LOGIN' }}
                        </button>
                    </form>
            </div>
                    
        </div>

    </body>
</template>
<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

#container {
    background-image: url(src/assets/img/fondo_login.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 100rem;
   
    
.form {
    background-color: #006DB0;
    background-position: center;
    height: 40rem;
    width: 40rem;
    opacity: 70%;
    border-radius: 1.5rem;
    text-align: center;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-size: 38px;
    align-items: center;

}

button {
    background-color: #27a138;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-size: 38px;
    width: 15rem;
    height: 5rem;
    border-radius: 1.5rem;
    margin: 5%;
}

input {
    border-radius: 1rem;
    background-color: #FAFAF9;
    border-color: #ffffff;
    margin: 3%;
}

img {
    margin: 3%;
   
}
}


</style>


