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
            if (target === 'en' || target === 'it') {
                return imgLanguage.href;
            } else {
                return;
            };
        },
        getRating(target) {
            const stars = Math.ceil(target / 2);
            return stars
        },
    }

}
</script>

<template>
    <div class="container">
        <div v-show="store.movies.length > 0" class="row flex-wrap">
            <ul v-for="movie in store.movies" class="list-unstyled col-3 p-1 text-white">
                <li>
                    <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
                    <img v-else
                        src="https://w7.pngwing.com/pngs/280/326/png-transparent-logo-netflix-logos-and-brands-icon-thumbnail.png"
                        alt="">
                </li>
                <div>
                    <li>{{ movie.title }}</li>
                    <li>{{ movie.original_title }}</li>
                </div>
                <li>
                    <img v-if="getImgLanguage(movie.original_language)" :src="getImgLanguage(movie.original_language)"
                        :alt="movie.original_language">
                    <span v-else>{{ movie.original_language }}</span>
                </li>
                <li>
                    <i v-for="star of getRating(movie.vote_average)" class="fa-solid fa-star"></i>
                    <i v-for="stars of (5 - getRating(movie.vote_average))" class="fa-regular fa-star"></i>
                </li>
            </ul>
            <h1>Tv Series</h1>
            <ul v-for="tv in store.tvSeries" class="list-unstyled col-3">
                <img :src="`https://image.tmdb.org/t/p/w342${tv.poster_path}`" alt="">
                <li>{{ tv.original_name }}</li>
                <li>
                    <img v-if="getImgLanguage(tv.original_language)" :src="getImgLanguage(tv.original_language)"
                        :alt="tv.original_language">
                    <span v-else>{{ tv.original_language }}</span>
                </li>
                <li>
                    <i v-for="star of getRating(tv.vote_average)" class="fa-solid fa-star"></i>
                    <i v-for="stars of (5 - getRating(tv.vote_average))" class="fa-regular fa-star"></i>
                </li>
            </ul>
        </div>
    </div>
</template>

<style></style>
<!-- <li><i class="fa-solid fa-star"></i></li>
    <i class="fa-regular fa-star"></i> -->