<script>
export default{
    props:{
        store:Object
    }
}
</script>

<template>
    <div v-for="movie in store.movies">{{ movie.original_title }}</div>
</template>

<style>

</style>
