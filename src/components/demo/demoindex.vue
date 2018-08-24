<template>
  <div class="">
     <a href="javascript:;" @click="handleClick()">点击</a>
    <dema></dema>
  </div>
  <!-- <div>
    <p v-for="item in items" :key="item.id">
        {{item.message}}
        <input type="text" :value="item.id"/>
        <input type="text" v-model="item.id"/>
        <span>{{item.id}}这里是双向绑定</span>
    </p>
    <button class="btn" @click="btn2Click()" value="测试" ref="input">动态赋值</button><br/><br/>
    <button class="btn" @click="btn3Click()" value="难受">为data新增属性</button>
    <button class="btn" @click="btn4Click()" value="哈哈哈">删除属性</button>
    <button class="btn" @click="add()" value="哈哈哈">添加value属性</button>
    <button class="btn" @click="addset()" value="哈哈哈">get-setdemo</button>
  </div> -->
</template>

<script>
import demo from './list/demo'
export default {
  mounted() {
    console.log("aaaa");
    console.log(this.$store.state.show);
  },
  methods: {
    handleClick() {
      console.log("bbb");
      console.log(this.$store.state.show);
      this.$store.state.show = !this.$store.state.show;
       console.log("ccc");
      console.log(this.$store.state.show);
    }
    
  },
  components:{
    "dema":demo
  },
  created(){
    // this.handleClick();

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
