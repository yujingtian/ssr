<template>
    <div class="menu">
        <div class="menu_title">性能监控错误上报系统</div>
        <div class="tree">
            <div class="tree_item" v-for="item in menuList" @click="moveTo(item)" :class="{'checked':item.checked}">
                <div>{{item.name}}</div>
                <div class="arrow">></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            menuList:[
                {
                    name:"数据总览",
                    path:"/main",
                    checked: false
                },
                {
                    name:"错误日志管理",
                    path:"/main/errManage",
                    checked: false
                },
                {
                    name:"性能监控管理",
                    path:"/main/performance",
                    checked: false
                }
            ]
        }
    },
    methods:{
        moveTo(item){
            this.menuList.forEach(item => {
                item.checked = false
            });
            item.checked = true
            if(location.pathname != item.path)
            this.$router.push(item.path)
        }
    }
}
</script>
<style lang="stylus" scoped>
    .menu{
        width 250px
        height 100%
        background white
    }
    .menu_title{
        height 62px
        background #4878E6
        display flex
        align-items center
        justify-content center
        color white
        font-size 16px
        white-space 1px
    }
    .tree{
        margin-top 30px
    }
    .tree_item{
        cursor pointer
        height 48px
        font-size 15px
        font-weight 600
        display flex 
        align-items center 
        padding-left 30px
        padding-right 20px
        justify-content space-between
    }
    .tree_item.checked{
        border-left 3px solid #5589ff
    }
    .arrow{
        font-weight 100
        font-size 12px
    }
</style>