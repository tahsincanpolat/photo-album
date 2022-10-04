<template>
    <div class="comments">
        <h6>Comments</h6>
        <div class="box" v-for="(comment,key) in lastComments" :key="key">
            <div>
                <div class="box-header">
                    <img class="image" src='../../assets/img/avatar.svg' />
                    <p class="name">{{getName(comment.email)}}</p>
                    <span class="time">14 Min</span>
                </div>
                <div class="box-text">
                    <p>{{comment.body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import  axios  from 'axios'

export default {
    name: 'Comments',
    data(){
        return {
            comments: []
        }
    },
    mounted(){
        this.getComments()
    },
    methods: {
        getComments(){
            axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
               this.comments = response.data
            })
        },
        getName(name){
           let emailArray = name.split("@");
           return emailArray[0]
        }
    },
    computed:{
        lastComments(){
            return this.comments.slice(-10)
        }
    }
}
</script>
