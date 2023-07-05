<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import {movieEndpoint, tvEndpoint} from './assets/data';
export default{
    components:{AppHeader,AppMain}
  
}
</script>

<template>
    <AppHeader/>
    <AppMain/>
</template>

<style>

</style>
