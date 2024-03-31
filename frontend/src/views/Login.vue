<template>
  <div>
    <div class="container" id="container" :class="{ active: isActive }">
      <div class="form-container sign-up">
        <form @submit.prevent="registerUser">
          <h1>Create Account</h1>
          <div class="social-icons">
            <a href="#" class="icon"
              ><i><font-awesome-icon icon="fa-brands fa-facebook-f" /></i>
            </a>
            <a href="#" class="icon"
              ><i><font-awesome-icon icon="fa-brands fa-linkedin-in" /></i>
            </a>
            <a href="#" class="icon"
              ><i><font-awesome-icon icon="fa-brands fa-twitter" /></i>
            </a>
          </div>
          <span>or use your email for registeration</span>
          <input type="text" placeholder="Name" v-model="name" />
          <input type="email" placeholder="Email" v-model="mail" />
          <input type="password" placeholder="Password" v-model="password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div class="social-icons">
            <a href="#" class="icon"
              ><i><font-awesome-icon icon="fa-brands fa-facebook-f" /></i>
            </a>
            <a href="#" class="icon"
              ><i><font-awesome-icon icon="fa-brands fa-linkedin-in" /></i>
            </a>
            <a href="#" class="icon"
              ><i><font-awesome-icon icon="fa-brands fa-twitter" /></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="text" placeholder="Kullanici Adı" v-model="kullanici" />
          <input type="password" placeholder="Password" v-model="sifre" />
          <a href="#">Forget Your Password?</a>
          <button @click.prevent="routeHome()">Sign In</button>
        </form>
      </div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button id="login" @click="deactivateContainer()">Sign In</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button id="register" @click="activeContainer()">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';

const router = useRouter();
// import server from '..../backend/server.js'

import "../assets/style.css";

const isActive = ref(false);

const routeHome = () => {
  signIn();
};

const activeContainer = () => {
  isActive.value = true;
};

const deactivateContainer = () => {
  isActive.value = false;
};

const name = ref("");
const mail = ref("");
const password = ref("");

const registerUser = async () => {
  try {
    const response = await axios.post("http://localhost:3000/userAdd", {
      kullanici_adi: name.value,
      email: mail.value,
      sifre: password.value,
    });

    console.log(response.data); // Başarılı yanıtı konsola yazdırabilirsiniz.

    // İsteğe bağlı: Kullanıcıyı başka bir sayfaya yönlendirme, vb.
  } catch (error) {
    console.error("Hata:", error);
  }
};
const kullanici = ref("");
const sifre = ref("");
const signIn = async () => {
  try {
    const response = await axios.post("http://localhost:3000/login", {
      kullanici_adi: kullanici.value,
      email: mail.value,
      sifre: sifre.value,
    });

    console.log(response.data); // Başarılı yanıtı konsola yazdırabilirsiniz.
    if(response.data === 'Success') {
      router.push('/')
    }

    // İsteğe bağlı: Kullanıcıyı başka bir sayfaya yönlendirme, vb.
  } catch (error) {
    console.error("Hata:", error);
  }
};
</script>
