<template>
    <div class="photos">
        <carousel>
            <Slide :settings="settings" v-for="(photo,key) in albumPhotos" :key="key">
                <div>
                    <img :src="photo.url" class="img-fluid" />
                </div>
                <div class="title">
                    <p>{{photo.title}}</p>
                </div>
            </Slide>
            <template #addons>
                <Navigation />
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
    props: ['id','photos' ], 
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    date(){
            return{
            settings: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
        }
    },
    mounted(){
        console.log(this.albumPhotos.length);
    },
    computed: {
        albumPhotos(){
           return this.photos.filter((photo)=> photo.albumId == this.id)
        }
    }
   
}
</script>
