
<template>
    <div>
        <div class="container mx-auto mt-8">
        <h1 class="text-4xl font-semibold mb-4">Vizyondaki filmler</h1>
        <div class="flex gap-8">
            <!-- Ürün Kartları -->
            <film_card v-for="(film, index) in films" :key="index" :title="film.title" :price="film.price" :city="film.city" :image="film.image" :movie="film.movie" :id="film.id"/>
            

        </div>
        <!-- <ul>
            <li v-for="item in films" :key="item.id" >{{ item.id }}</li>
        </ul> -->
    </div>
    </div>
</template>
<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import film_card from '../components/film_card.vue';
// import axios from 'axios';
const router = useRouter()


import { ref, onMounted } from 'vue';

const data = ref([]);

const fetchData = async () => {
  try {
    axios.get('http://localhost:3000/movie').then((response) => {
        console.log(response)
        data.value = (response.data);
    }).catch(err => {
        console.log(err);
    })
  } catch (error) {
    console.error(error);
  }
};

// onMounted(() => {
// //   fetchData();
// });


const films = reactive([
    {
        title: "Spiderman",
        price: 20,
        city: "İstanbul",
        image: "https://img.fruugo.com/product/9/32/14416329_max.jpg",
        movie : "Spiderman",
        id : 1

    },
    {
        title: "Titanic",
        price: 30,
        city: "İzmir",
        image: "https://i.pinimg.com/originals/0e/49/83/0e4983143a9d388a493c6bb58e9e2351.jpg",
        movie : "Titanic",
        id : 2
        
    },
    {
        title: "Fast And Furious",
        price: 10,
        city: "İstanbul",
        image: "https://m.media-amazon.com/images/I/71FtQA0+fiL._AC_UF1000,1000_QL80_.jpg",
        movie : "faf" ,
        id : 3
        
    },
    {
        title: "Interstellar",
        price: 20,
        city: "İstanbul",
        image: "https://cdn03.ciceksepeti.com/cicek/kcm53273256-1/XL/interstellar-2014-35-cm-x-50-cm-afis-poster-crewforde-kcm53273256-1-15ac9549bb4747a68f976c3a55c1756b.jpg",
        movie : "Interstellar",
        id : 4

    },
    {
        title: "Avengers:Infinity War",
        price: 30,
        city: "İzmir",
        image: "https://tr.web.img4.acsta.net/img/de/24/de24c825038e8c15130e28957fd5a833.jpg",
        movie : "Avengers",
        id : 5
    },
    {
        title: "The Green Mile",
        price: 10,
        city: "İstanbul",
        image: "https://tr.web.img3.acsta.net/pictures/bzp/01/22779.jpg",
        movie : "Green",
        id : 6
    },
])
</script>