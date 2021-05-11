<template>
  <form class="login-form" @submit="doSubmit">
    <h1>
      <span>性能监控错误日志上报系统</span>
      <div class="error-msg" v-show="errorMsg">{{errorMsg}}</div>
    </h1>
    <input
      type="text"
      class="login-input"
      placeholder="User Name"
      v-model="username"
    >
    <input
      type="password"
      class="login-input"
      placeholder="Password"
      autocomplete="new-password"
      v-model="password"
    >
    <button type="submit" class="login-btn">登 录</button>
  </form>
</template>

<script>
import { login, getSession } from "../../api"
export default {
  data () {
    return {
      username: '',
      password: '',
      errorMsg: ''
    }
  },
  mounted(){
    getSession().then(res => {
      if(res.code == 10000){
         this.$router.push("/main")
      }
    })
  },
  methods: {
    doSubmit (e) {
      e.preventDefault()
      login({
        account:this.username,
        password:this.password
      }).then(res => {
        this.$store.dispatch("changeUserName", res.data.username)
        this.$router.push("/main")
      }).catch(err => {
        this.errorMsg = err.message
      })
    },
    validate () {
      if (!this.username.trim()) {
        this.errorMsg = '姓名不能为空'
        return false
      }
      if (!this.password.trim()) {
        this.errorMsg = '密码不能为空'
        return false
      }
      this.errorMsg = ''
      return true
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-form
  display flex
  flex-direction column
  align-items flex-start
  width 350px
  margin 0 auto
  margin-top 20px
  padding 20px
  background-color #fff
  border 1px solid black
  h1
    font-weight 100
    color #3d3d3d
    font-size 20px
.login-input
  appearance none
  padding 0 10px
  line-height 30px
  margin-bottom 20px
  border 1px solid #aaa
  width 100%
  border-radius 0
  box-shadow 0 0 0
.login-btn
  appearance none
  width 100%
  line-height 30px
  text-align center
  background-color #0d60c7
  color #eaeaea
  cursor pointer
  border-color #0d60c7
  transition all .3s
  &:hover
    color #fff
    background-color darken(#0d60c7, 10)
.error-msg
  font-size 12px
  color red
</style>
