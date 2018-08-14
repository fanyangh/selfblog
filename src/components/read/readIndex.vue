<template>
  <div class="read">
    <div class="one" v-drag>拖拽one</div>
	  <!-- <div class="two" v-drag>拖拽two</div> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch:{
    


  },
  directives:{//局部注册自定义指令
    drag: {
      bind :function(el,binding){ //第一次绑定到元素时调用，进行一次性的初始化设置

      },
      inserted:function(el){//当被绑定的元素插入到 DOM 中时
          let elem = el; //el触发的DOM元素
          elem.onmousedown = function(e) {
            let l = e.clientX - elem.offsetLeft;
            let t = e.clientY - elem.offsetTop;
            document.onmousemove = function(e) {
              elem.style.left = e.clientX - l + 'px';
              elem.style.top = e.clientY - t + 'px';
            };
            elem.onmouseup = function() {
              document.onmousemove = null;
              elem.onmouseup = null;
            }
          }
      },
      update:function(el,binding){ //组件的 VNode 更新时调用
    
      },
      componentUpdated:function(el,binding){ //指令所在组件的 VNode 及其子VNode全部更新后调用。
    
      },
      unbind:function(el,binding){//只调用一次，指令与元素解绑时调用。
    	
      }

    }

  },
  mounted :{
    
  },
  created() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.read {
  height: 800px;
  margin: 0 auto;
  width: 100%;
  position: relative;
}
.one,.two{
  margin-top: 200px;
		height:100px;
		width:100px;
		border:1px solid #000;
		position: absolute;
		-webkit-user-select: none;
		-ms-user-select: none;
		-moz-user-select: -moz-none;
		cursor: pointer;
	}
	.two{
		left:200px;
	}

</style>
