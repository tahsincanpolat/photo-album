<template>
    <div class="albums">
        <div class="album" v-for="(album,key) in albums" :key="key">
            <h6 class="album-header">{{album.title}}</h6>
            <div>
                <div class="album-slider">
                    <Photos />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import  axios  from 'axios'
import Photos from '../album/Photos.vue'
export default {
    name: 'Album',
    components: {Photos},
    data(){
        return {
            albums: []
        }
    },
    mounted(){
        this.getAlbums()
    },
    methods: {
        getAlbums(){
            axios.get("https://jsonplaceholder.typicode.com/albums").then((response)=>{
               this.albums = response.data
            })
        }
    }
}
</script>
