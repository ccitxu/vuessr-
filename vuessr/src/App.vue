<template>
  <div id="app">
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

