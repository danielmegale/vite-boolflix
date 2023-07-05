<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import {store} from './assets/data/store.js'
import {movieEndpoint, tvEndpoint} from './assets/data';
import axios from 'axios';
export default{
    components:{AppHeader,AppMain},
    created(){
        this.getMovies()
    },
    data(){
      return{
        store,
      }
    },
    methods:{
        getMovies(){
            axios.get(`${movieEndpoint}&query=lord`).then((res)=>{
                const apiMovies=res.data.results;
                store.movies=apiMovies.map(movie=>{
                    const {title,original_title,original_language,vote_average}=movie;
                    return{title, original_title, original_language, vote_average};
                })
                
            })
        }
    }
  
}
</script>

<template>
    <AppHeader/>
    <AppMain :store="store"/>
</template>

<style>

</style>
