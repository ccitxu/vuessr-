<template>
  <div id="app">
    <img src="assets/logo.png">
     <router-link to='/a'>aaa</router-link>
     <router-link to='/b'>bbb</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    tourl(){
      console.log('asdasd');
    }
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
