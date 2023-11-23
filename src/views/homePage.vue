
<template>
    <div>
        <div class="container mx-auto mt-8">
        <h1 class="text-4xl font-semibold mb-4">Vizyondaki filmler</h1>
        <div class="flex gap-8">
            <!-- Ürün Kartları -->
            <div class="bg-white p-4 rounded shadow-md">
                <img src="https://img.fruugo.com/product/9/32/14416329_max.jpg" alt="Ürün 1" class="w-full h-48 object-cover film-card transform transition-transform hover:scale-110">
                <h2 class="text-lg font-semibold mt-2">Spiderman</h2>
                <p class="text-gray-600">Fiyat: $20</p>
                <p class="text-gray-600">Şehir: İstanbul</p>
                <a href="#/spiderman" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full inline-block hover:bg-blue-600">Detaylar</a>
            </div>
            
            <div class="bg-white p-4 rounded shadow-md">
                <img src="https://cdn03.ciceksepeti.com/cicek/kcm84405206-1/XL/titanic-1997-35-cm-x-50-cm-afis-poster-pianomans-kcm84405206-1-966fecc22fed4d03b7c505804d308822.jpg" alt="Ürün 2" class="w-full h-48 object-cover transform transition-transform hover:scale-110">
                <h2 class="text-lg font-semibold mt-2">Titanic</h2>
                <p class="text-gray-600">Fiyat: $20</p>
                <p class="text-gray-600">Şehir: Ankara</p>
                <a href="#/titanic" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full inline-block hover:bg-blue-600">Detaylar</a>
            </div>
            
            <div class="bg-white p-4 rounded shadow-md ">
                <img src="https://upload.wikimedia.org/wikipedia/tr/a/a2/H%C4%B1zl%C4%B1_ve_%C3%96fkeli_8_Afi%C5%9F.jpg" alt="Ürün 3" class="w-full h-48 object-cover transform transition-transform hover:scale-110">
                <h2 class="text-lg font-semibold mt-2">Fast And Furious</h2>
                <p class="text-gray-600">Fiyat: $15</p>
                <p class="text-gray-600">Şehir: İzmir</p>
                <a href="#/faf" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full inline-block hover:bg-blue-600">Detaylar</a>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>