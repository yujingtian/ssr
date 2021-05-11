<template>
    <div class="errrPage">
        <div class="condition">
            <div class="inputItem">
                <label>异常信息:</label>
                <input type="text" name="errorMessage" v-model="foreachForm.errorMessage">
            </div>
            <div class="inputItem">
                <label>异常文件路径:</label>
                <input type="text" name="scriptURI" v-model="foreachForm.scriptURI">
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
                            <th>异常信息</th>
                            <th>异常文件路径</th>
                            <th>异常行号</th>
                            <th>异常列号</th>
                            <th>异常堆栈信息</th>
                            <th>环境</th>
                            <th>系统</th>
                            <th>创建时间</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in dataList" :key="item.id">
                           <td>{{item.errorMessage}}</td>
                           <td>{{item.scriptURI}}</td>
                           <td>{{item.lineNo}}</td>
                           <td>{{item.columnNo}}</td>
                           <td>{{item.error}}</td>
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
import { getErrmanage } from "../../api" 
export default {
    data(){
        return {
            foreachForm:{
                errorMessage:"",
                scriptURI:""
            },
            dataList:[]
        }
    },
    beforeMount(){
       this.search()
    },
    methods:{
        search(){
            getErrmanage(this.foreachForm).then(res => {
                if(res.code == 10000){
                    console.log(res.data)
                    this.dataList = res.data
                }
            })
        },
        reset(){
            this.foreachForm.errorMessage = ""
            this.foreachForm.scriptURI = ""
        }
    }
}
</script>
<style lang="stylus" scoped>
.errrPage{
    margin 15px
}
</style>