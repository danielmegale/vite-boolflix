<script>
import { store } from '../assets/data/store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getImgLanguage(target) {
            const imgLanguage = new URL(`../assets/img/${target}.png`, import.meta.url);
            return imgLanguage.href
        },
    }

}
</script>

<template>
    <div v-show="store.movies.length > 0">
        <ul v-for="movie in store.movies">
            <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
            <li>{{ movie.original_title }}</li>
            <li>
                <img :src="getImgLanguage(movie.original_language)" alt="">
            </li>
        </ul>
        <h1>Tv Series</h1>
        <ul v-for="tv in store.tvSeries">
            <img :src="`https://image.tmdb.org/t/p/w342${tv.poster_path}`" alt="">
            <li>{{ tv.original_name }}</li>
            <li>
                <img :src="getImgLanguage(tv.original_language)" alt="">
            </li>
        </ul>
    </div>
</template>

<style></style>
