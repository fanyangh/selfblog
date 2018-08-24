<template>
  <div class="read">
    <keep-alive exclude="Detail">  
      <!-- 当项目使用keep-alive时，可搭配组件name进行缓存过滤 -->
      <router-view/>
      
    </keep-alive>
    <div>
          <div v-for="(item,index) of list" :key="index">
              <div>
                  <span class="item-title-icon"></span>
                  {{item.title}}
              </div>
              <div v-if="item.children" >
                <detail-list :list="item.children"></detail-list>
              </div>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  data () {//etail.vue组件里有个list.vue子组件，递归迭代时需要调用自身name
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[{
          "title": "A",
          
        }, {
          "title": "B",
        }, {
          "title": "C"
        }, {
          "title": "D",
          "children": [{
            "title": "A-A",
            "children": [{
              "title": "A-A-A"
            }]
          },{
                "title": "A-B"
          }]
        }]
    }
  },
  mounted(){
   this.getInfo();
   console.log(this.list[3].children);
  },
  methods:{
   getInfo(){
          axios.get('/xx/detail.json',{
              params:{
                id:this.$route.params.id  
              }
          }).then(this.getInfoSucc)
     }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
