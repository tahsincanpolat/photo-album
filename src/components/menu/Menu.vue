<template>
    <div class="menu">
        <ul>
            <li :class="path === '/' ? 'active' : ''"><img src="../../assets/img/news-feed-icon.svg" /><a href="#">News Feed</a></li>
            <li><img src="../../assets/img/market.svg" /><a href="#">Market Place</a></li>
            <li><img src="../../assets/img/gallery.svg" /><a href="#">Gallery</a></li>
        </ul>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
    name :'Menu',
    data(){
        return{
            path:''
        }
    },  
    mounted(){
        const router = useRouter()
        let route = router; 
        this.path = route.currentRoute.value.path
    }
}
</script>
<style lang="">
    
</style>