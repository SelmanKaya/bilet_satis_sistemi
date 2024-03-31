<template>
    <div class="bg-white p-4 rounded shadow-md">
        <img :src="image" alt="Ürün 1"
            class="w-full h-48 object-cover film-card transform transition-transform hover:scale-110">
        <h2 class="text-lg font-semibold mt-2">{{ title }}</h2>
        <p class="text-gray-600">Price: ${{ price }}</p>
        <p class="text-gray-600">City: {{ city }}</p>

        <button @click="showDetails(id)" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full inline-block hover:bg-blue-600">Details</button>

    </div>
</template>
  

<script setup>

import { defineProps, reactive } from "vue";
import axios from "axios";
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
    title: String,
    price: Number,
    city: String,
    image: String,
    movie: String,
    id: Number
});

const showDetails = async (id) => {
    try {
    const response = await axios.get("http://localhost:3000/movie/" + id);

    console.log(response.data); // Başarılı yanıtı konsola yazdırabilirsiniz.
    router.push({ name: 'Movie', params: { data: response.data[0] } });

    // İsteğe bağlı: Kullanıcıyı başka bir sayfaya yönlendirme, vb.
  } catch (error) {
    console.error("Hata:", error);
  }
}

</script>