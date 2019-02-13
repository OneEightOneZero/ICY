<template>
    <div class="user">
        <p class="userId">{{userId}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userId:"11111"
        }
    },
    methods:{
        getUserid(){
            let id = location.href.replace("http://localhost:8080/#/app/mine?","")
            this.userId ="id：" + id
            console.log(id)
        }
    },
    mounted(){
        this.getUserid();
    }
    
}
</script>
<style lang="scss" scope>
    .userId{

        text-align: center;
        line-height:100px;
    }
</style>