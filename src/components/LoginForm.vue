<script setup lang="ts">

import { useAuthStore } from '@/stores/authStore';
import { ref,type Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { IAuthUser } from '@/models/IAuthUser';
import AuthService from '@/services/AuthService';




const store = useAuthStore()
const service = new AuthService()

const input_email: Ref<string> = ref('')
const input_password: Ref<string> = ref('')

const route = useRoute()
const router = useRouter()

const login = async () => {

  store.user.email = input_email.value

  const data: IAuthUser = {
    email: input_email.value,
    password: input_password.value
  }

  const responseData = await service.login(data)

  if (input_email.value == store.user.email) {
    store.user.isAuthenticated = responseData.isAuthenticated
    store.user.roles = responseData.roles
    const redirectPath = '/'
    router.push(redirectPath)
  }

}

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
            <div></div>
            <div class="form">
                <img src="/src/assets/img/layout_set_logo.png" alt="">
                    <form @submit.prevent="login()">
                        <label for="correoelectronico">Correo electrónico</label>
                        <input class="input-field" type="text" v-model="input_email" required>
                        <label for="contrasena">Contraseña</label>
                        <input class="=input-field" type="password" v-model="input_password" required>
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

body {
    max-width: 100vw;
}

#container {
    background-image: url(src/assets/img/fondo_login.png);
    background-size:cover;
    background-repeat: no-repeat;
    height: 100vh;
    padding: 15% 3% 3% 3%;
    
    
.form {
    background-color: rgba(0, 109, 176, 0.75);
    background-position: center;
    height: 60vh;
    width: 30vw;
    // opacity: 70%;
    border-radius: 1.5rem;
    text-align: center;
    color: #FFFFFF;
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    align-items: center;
    margin: 0 auto;
    
}

p {
    margin: 4%;
    font-size: 10px;
    
}

button {
    background-color: #27a138;
    color: #FFFFFF;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    width: 25%;
    height: 20%;
    border-radius: 0.5rem;
    margin: 1.5%;
}

label {
    margin: 0%;
    font-size: 18px;
}

input {
    border-radius: 1rem;
    background-color: #FAFAF9;
    border-color: #ffffff;
    margin: 1.5%;
    width: 50%;
    height: 20%;
}

img {
    margin: 5%;
   
}
}


</style>


