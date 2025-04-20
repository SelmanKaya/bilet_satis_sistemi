<template>
    <movies :wallpaper="data.walpaper" :title="data.title" :description="data.description" :makers="data.makers"></movies>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup(props, { params }) {
    const data = ref({
        walpaper: '',
        title: '',
        description: '',
        makers: '',
    });

    onMounted(() => {
      console.log(params)
      data.value = params.data;
      console.log('Movie Infos:', data.value);
    });

    return {
      data,
    };
  },
};
</script>




// import movies from "../components/movies.vue"
import { useRoute } from 'vue-router';
import { defineProps, reactive } from "vue";

const route = useRoute();

console.log(route.params)
const film = reactive([]);

// const fetchData = async () => {
//     try {
//         await axios.get('http://localhost:3000/movies/' + router.params).then((response) => {

//             const { film_id,
//                 walpaper,
//                 title,
//                 description,
//                 maker } = response.value;

//             film.value = {
//                 film_id,
//                 walpaper,
//                 title,
//                 description,
//                 maker

//             }

//         }).catch(err => {
//             console.log(err);
//         })
//     } catch (error) {
//         console.error(error);
//     }
// };

// onMounted(() => {
//     fetchData();
// });




</script> -->
