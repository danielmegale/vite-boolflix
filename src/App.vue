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
      }
    },
    methods:{
        getMovies(){
            axios.get(`${movieEndpoint}&query=signore`).then((res)=>{
                store.movies=res.data.results;
                console.log(store.movies)
            })
        }
    }
  
}
</script>

<template>
    <AppHeader/>
    <AppMain/>
</template>

<style>

</style>
