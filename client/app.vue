<template>
    <div id="app">
        <h1>{{fullname}}</h1>
        <div id="cover"></div>
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'

import {
    mapGetters,
    mapState
} from "vuex"
export default {
    components: {
        Header,
        Footer,
    },
    computed:{
        ...mapGetters(['fullname'])
    },
    beforeCreate(){
        console.log("app beforeCreate")
    },
    created(){
        console.log("app created")
    },
    methods: {
    },
}
</script>

<style lang="stylus" scoped>
#app
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    #cover
        position absolute
        left 0
        right 0
        top 0
        bottom 0   
        background-color #999 
        opacity 0.2
        z-index -1

</style>
