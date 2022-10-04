<template>
    <div class="photos">
        <vue-slick-carousel v-if="photos" v-bind="slickOptions"  :arrows="false">
            <div v-for="(photo,key) in photos" :key="key">
                <a href="">{{photo.id}}</a>
            </div>
        </vue-slick-carousel>
    </div>
</template>
<script>
import  axios  from 'axios'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Photos',
    components: { VueSlickCarousel },
    data(){
        return {
            photos: [],
            slickOptions: {
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 300,
                autoplay: false,
                autoplaySpeed: 4000,
                prevArrow:false
            }
        }
    },
    mounted(){
        this.getAlbums()
    },
    methods: {
        getAlbums(){
            axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
               this.photos = response.data
            })
        }
    }
}
</script>
