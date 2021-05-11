<template>
    <div class="main">
        <Menu></Menu>
        <div class="body">
            <Header></Header>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { getSession } from "../../api"
import Header from "../../layout/header"
import Menu from "../../layout/menu"
export default {
    components:{
        Header,Menu
    },
    data() {
        return {
            
        }
    },
    beforeMount(){
        //纯客户端渲染数据预取
        // if(!window.__INITIAL_STATE__)
        // {
        //     let store = this.$store;
        //     store.dispatch('changeName',{newName:"hahaha"})
        // }
    },
    mounted(){
        getSession().then(res => {
            if(res.code == 10000){
                this.$store.dispatch("changeUserName", res.data.username)
            }
        })
    },
    asyncData({router, store}){
        
    },
    methods: {
         
    }
}
</script>

<style lang="stylus" scoped>
    .main{
        height 100%
        display flex 
        background rgba(240,243,253,1)
    }
    .body{
        width 100%
        height 100%
        display flex
        flex-direction column
    }
</style>


