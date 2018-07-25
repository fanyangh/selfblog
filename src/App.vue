<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <topnav></topnav>
    <router-view/>
    <topfooter></topfooter>
  </div>
</template>

<script>
import topnav from '@/components/common/nav'
import topfooter from '@/components/common/footer'
export default {
  name: 'App',
  components:{
    topnav,
    topfooter
  }
}
</script>

<style>
 @import './assets/css/base.css';
 @import './assets/css/index.css';
 @import './assets/css/m.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
