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
        <div v-show="store.movies.length > 0" class="row flex-wrap ">
            <h1>MOVIES</h1>
            <ul v-for="movie in store.movies" class="list-unstyled col-3 p-1 text-white position-relative">
                <li class="poster">
                    <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" alt="">
                    <img v-else
                        src="https://w7.pngwing.com/pngs/280/326/png-transparent-logo-netflix-logos-and-brands-icon-thumbnail.png"
                        alt="">
                </li>
                <div class="position-absolute top-50 start-0 end-0 info-card text-center">
                    <h2>{{ movie.title }}</h2>
                    <h3>{{ movie.original_title }}</h3>
                    <div class="flag-container">
                        <img v-if="getImgLanguage(movie.original_language)" :src="getImgLanguage(movie.original_language)"
                            :alt="movie.original_language">
                        <span v-else>{{ (movie.original_language) }}</span>
                    </div>
                    <li>
                        <i v-for="star of getRating(movie.vote_average)" class="fa-solid fa-star"></i>
                        <i v-for="stars of (5 - getRating(movie.vote_average))" class="fa-regular fa-star"></i>
                    </li>
                </div>
            </ul>
            <h1>TV SERIES</h1>
            <ul v-for="tv in store.tvSeries" class="list-unstyled col-3 p-1 text-white position-relative">
                <li class="poster">
                    <img v-if="tv.poster_path" :src="`https://image.tmdb.org/t/p/w342${tv.poster_path}`" alt="">
                    <img v-else
                        src="https://w7.pngwing.com/pngs/280/326/png-transparent-logo-netflix-logos-and-brands-icon-thumbnail.png"
                        alt="">
                </li>
                <div class="position-absolute top-50 start-0 end-0 info-card text-center">
                    <h2>{{ tv.name }}</h2>
                    <h3>{{ tv.original_name }}</h3>
                    <div class="flag-container">
                        <img v-if="getImgLanguage(tv.original_language)" :src="getImgLanguage(tv.original_language)"
                            :alt="tv.original_language">
                        <span v-else>{{ tv.original_language }}</span>
                    </div>
                    <li>
                        <i v-for="star of getRating(tv.vote_average)" class="fa-solid fa-star"></i>
                        <i v-for="stars of (5 - getRating(tv.vote_average))" class="fa-regular fa-star"></i>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<style lang=scss scoped>
.flag-container {
    width: 50px;
    margin: 0 auto;

    // img {
    //     width: 50px;
    // }
}

.info-card {
    transform: translateY(-50%);
    display: none;
}

.poster {
    height: 100%;

    img {
        height: 100%;
    }
}



ul.list-unstyled:hover .poster {
    opacity: 0.5;
}

ul.list-unstyled:hover .info-card {
    display: block;
    opacity: 1;
}
</style>
