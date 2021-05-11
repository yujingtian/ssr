<template>
    <div class="header">
        <div class="header_left"></div>
        <div class="header_right">{{$store.state.username}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    created(){
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
}
</style>