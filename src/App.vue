<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import {store} from './assets/data/store.js'
import {movieEndpoint, tvEndpoint} from './assets/data';
import axios from 'axios';
export default{
    components:{AppHeader,AppMain},
    data(){
      return{
        store,
        nameFilter:'',
      }
    },
    methods:{
        getMovies(url){
            axios.get(url).then((res)=>{
                const apiMovies=res.data.results;
                store.movies=apiMovies.map(movie=>{
                     const {title,original_title,original_language,vote_average}=movie;
                     return{title, original_title, original_language, vote_average};
                });
            });
        },
        getTvSeries(url){
            axios.get(url).then((res)=>{
                const apiTvSeries=res.data.results;
                store.tvSeries=apiTvSeries.map(tv=>{
                    const {original_language,original_name,name,vote_average}=tv;
                    return{original_language,original_name,name,vote_average}
                })                
            })
        },
        onChangeTerm(term){
            this.nameFilter=term;
        },
        searchMovies(){
            const filterEndpoint=`${movieEndpoint}&query=${this.nameFilter}`
            const tvSeriesEndpoint=`${tvEndpoint}&query=${this.nameFilter}`
            this.getMovies(filterEndpoint);
            this.getTvSeries(tvSeriesEndpoint)
        }
    }
  
}
</script>

<template>
    <AppHeader @change-term="onChangeTerm" @form-submit="searchMovies"/>
    <AppMain :store="store"/>
</template>

<style>

</style>
