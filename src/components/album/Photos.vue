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

import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    name: 'Photos',
    props: ['id','photos' ], 
    components: {
        Carousel,
        Slide,
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
        // console.log(this.albumPhotos.length);
    },
    computed: {
        albumPhotos(){
           return this.photos.filter((photo)=> photo.albumId == this.id)
        }
    }
   
}
</script>
