<template>
    <div class="bg-slate-400 relative">
      <div>
        <img class="w-screen" style="height: 600px; object-fit: cover;" :src="wallpaper"
          alt="hızlı ve öfkeli" />
        <div
          style="position: absolute; top: 0; left: 0; height: 100%; width: 100%; background: linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent);">
        </div>
      </div>
      <div class="flex justify-end items-end absolute transform " style="top: 15px; right: 15px;">
        <button style="background-color: #06f4c0;" class="px-4 py-2 font-bold rounded ">GİRİS YAP</button>
      </div>
      <div class="absolute top-1/2 left-28 transform -translate-y-1/2 text-white">
        <p class="font-bold text-6xl mb-8">{{ title }}</p>
        <p class="text-lg mb-4 max-w-lg">
          {{ description }}
        </p>
        <p class="text-sm">
          Yaratıcılar: {{ makers }}
        </p>
        <p class="text-sm mb-4">Oyuncular: Tobey Maguire, Kirsten Dunst</p>
        <button class=" py-2 px-6 rounded-full mt-2 font-medium text-white text-lg" style="background: #468B97;">Bilet
          Al</button>
        <a target="_blank" href="https://tr.wikipedia.org/wiki/%C3%96r%C3%BCmcek_Adam"
          class="text-white font-bold py-2 px-4 rounded">Daha Fazla Bilgi</a>
  
      </div>
    </div>
  </template>
  <script setup>
import { reactive,defineProps } from 'vue';



import { ref, onMounted } from 'vue';
import axios from 'axios';


const data = ref([]);

// const fetchData = async () => {
//   try {
//     const response = await axios.get('http://localhost:3000/users').then((response) => {
//         data.value = (response.data);

//     }).catch(err => {
//         console.log(err);
//     })
//   } catch (error) {
//     console.error(error);
//   }
// };

// onMounted(() => {
//   fetchData();
// });


const props = defineProps({
    wallpaper : String,
    title : String,
    description : String,
    makers : String,

})
</script>
    