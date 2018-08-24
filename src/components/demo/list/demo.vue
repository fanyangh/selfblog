<template>
  <el-dialog :visible.sync="$store.state.show">{{msg}}</el-dialog>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   mounted() {
    console.log("dddd");
    console.log(this.$store.state.show);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
