<template>
    <div class="container homepage">
       <div class="row">
            <div class="col-md-3">
                <Comments />
            </div>
            <div class="col-md-6">
                <Album />
            </div>
            <div class="col-md-3">
                <Trends />
            </div>
       </div>
    </div>
</template>
<script>
import Album from "../components/album/Album.vue"
import Comments from "../components/comments/Comments.vue"
import Trends from "../components/trends/Trends.vue"

export default {
    name: 'Home',
    components: {Album,Comments,Trends}

}
</script>
<style lang="">
    
</style>