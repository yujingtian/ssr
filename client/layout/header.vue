<template>
    <div class="header">
        <div class="header_left"></div>
        <div class="header_right">{{$store.state.username}}   
            <div @click="logout" style="margin-left:15px;cursor:pointer">退出</div>
        </div>
    </div>
</template>
<script>
import { logout } from "../api" 
export default {
    data(){
        return{

        }
    },
    created(){
    },
    methods:{
        logout(){
            logout().then(res => {
                if(res.code === 10000){
                    this.$router.push("/login")
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
.header{
    min-height 62px
    background #5589ff
    display flex
    align-items center 
    justify-content space-between
}
.header_right{
    padding-right 20px
    color white
    font-size 16px
    display flex
}
</style>