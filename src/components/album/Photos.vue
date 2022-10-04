<template>
    <div class="photos">
        <carousel>
            <Slide :items-to-show="1" v-for="(photo,key) in photos.slice(-10)" :key="key">
                <div>
                    <img :src="photo.url" />
                </div>
                <div class="title">
                    <p>{{photo.title}}</p>
                </div>
            </Slide>
            <template #addons>
                <Pagination />
            </template> 
        </carousel>
    </div>
</template>
<script>
import  axios  from 'axios'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: 'Photos',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data(){
        return {
            photos: [],
           
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
