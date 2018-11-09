<template>
  <div class="bar">
    <h1 @click="onHandleClick">Bar Component</h1>
    <h2>异步Ajax数据：</h2>
    <span>{{msg}}</span>
  </div>
</template>

<style>
.bar {
  background: bisque;
}
</style>
<script>
const fetchInitialData = ({store})=>{
  return store.dispatch('fetchBar')
}
export default {
  data(){
    return{

    }
  },
  asyncData:fetchInitialData,
  methods:{
    onHandleClick(){
      alert('bar')
    }
  },
  mounted(){
    let store = this.$store;
    fetchInitialData({store});
  },
  computed:{
    msg(){
      return this.$store.state.bar;
    }
  }
}
</script>
