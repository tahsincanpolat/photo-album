<template>
    <div class="albums">
        <div class="album" v-for="(album,key) in albums" :key="key">
            <h6 class="album-header">{{album.title}}</h6>
            <div>
                <div class="album-slider">
                    <Photos :id="album.id" :photos="photos" />
                </div>
            </div>
        </div>
        <paginate
        :page-count="albums.length"
        :click-handler="changePage"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        >
        </paginate>
    </div>
</template>
<script>
import  axios  from 'axios'
import Photos from '../album/Photos.vue'

import Paginate from "vuejs-paginate-next";

export default {
    name: 'Album',
    components: {Photos,Paginate},
    data(){
        return {
            albums: [],
            allAlbums: [],
            photos: [],
            albumStartCount:1,
            albumEndCount:10,
        }
    },
    mounted(){
        this.getAlbums()
        this.getPhotos()
    },
    methods: {
        getAlbums(){
            axios.get("https://jsonplaceholder.typicode.com/albums").then((response)=>{
               this.allAlbums = response.data;
               this.albums = response.data.filter((album)=> album.id >= this.albumStartCount && album.id <= this.albumEndCount )
            })
        },
        getPhotos(){
            axios.get("https://jsonplaceholder.typicode.com/photos").then((response)=>{
               this.photos = response.data
            })
        },
        changePage(pageNum){
            let page= 1;
            if(pageNum == 1){
                page = 1;
            }
            else{
                page = ((pageNum * 10)+1)-10
            }
            this.albums = this.allAlbums.filter((album)=> album.id >= page && album.id <= page + 9 )
        }
    }
}
</script>
