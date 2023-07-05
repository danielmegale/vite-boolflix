<script>
export default{
    props:{
        store:Object
    }
}
</script>

<template>
    <div v-show="store.movies.length > 0 ">
        <div v-for="movie in store.movies">{{ movie.original_title }}</div>
        <h1>Tv Series</h1>
        <div v-for="tv in store.tvSeries">{{ tv.original_name }}</div>
    </div>
</template>

<style>

</style>
