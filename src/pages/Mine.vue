<template>
    <div class="mines">
        <Xheader></Xheader>
        <Xmine></Xmine>
    </div>
</template>


<script>
import Xheader from "../components/Xheader.vue";
import Xmine from "../components/Xmine.vue";

export default {
    components : {
        Xheader,
        Xmine
    },
    data(){
        return{
            mine:true
        }
    }
    
}
</script>
<style lang="scss" scope>
    .mines{
        overflow: hidden;
    }
    .user{
        margin-top:100px;
    }
</style>
