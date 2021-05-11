<template>
    <div class="performacePage">
        <div class="condition">
            <div class="inputItem">
                <label>性能类型:</label>
                <select type="text" name="renderType" v-model="foreachForm.renderType">
                    <option value="">请选择</option>
                    <option value="1">首屏渲染</option>
                </select>
            </div>
            <div class="buttonGroup">
                <div class="button-search" @click="search">查询</div>
                <div class="button-reset" @click="reset">清除查询条件</div>
            </div>
        </div>
        <div class="tableList">
            <div class="tableContainer">
                <table class="tablestyle">
                    <thead>
                        <tr>
                            <th>性能类型</th>
                            <th>渲染花费时间</th>
                            <th>渲染文件路径</th>
                            <th>环境</th>
                            <th>系统</th>
                            <th>创建时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in dataList" :key="item.id">
                           <td>{{item.renderName}}</td>
                           <td>{{item.renderTime}}</td>
                           <td>{{item.filePath}}</td>
                           <td>{{item.environment}}</td>
                           <td>{{item.systemcode}}</td>
                           <td>{{item.createtime}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="nodata" v-if="dataList.length <= 0 ">
                    没有查询到数据
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getPerformance } from "../../api" 
export default {
    data(){
        return {
            foreachForm:{
                renderType:"",
            },
            dataList:[]
        }
    },
    beforeMount(){
       this.search()
    },
    methods:{
        search(){
            getPerformance(this.foreachForm).then(res => {
                if(res.code == 10000){
                    console.log(res.data)
                    this.dataList = res.data
                }
            })
        },
        reset(){
            this.foreachForm.renderType = ""
        }
    }
}
</script>
<style lang="stylus" scoped>
.performacePage{
    margin 15px
}
</style>