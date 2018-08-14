<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
   data: function () {
         return {
           items:[{message:"Test one",id:"1"},
                {message:"Test two",id:"2"},
                {message:"Test three",id:"3"},
                {message:"Test three",id:"3"},
                {message:"Test three",id:"3"},
                {message:"Test three",id:"3"},
                {message:"Test three",id:"3"},
                {message:"Test three",id:"3"},
                {message:"Test three",id:"3"},
                {message:"Test three",id:"3"},
                {message:"Test three",id:"3"},],
           seeValue:[],//value值
           books: [], 
         }   
                
        },
  methods:{
            
            add:function(){ //添加value值
                let see=this.$refs.input.value; // $refs
                console.log("see");
                console.log(see);
                this.seeValue=see;
                console.log(this.seeValue+'a');
                // console.log(Books.name);//测试作用域
                
            },
            addset:function(){ //defineProperty对象set、get方法小demo
                let Book = [];
                let Books= {};
                Books.name='';
                let name = '';
                for (const a of this.items) {
                  // Book.push(a.message);
                  // console.log(Book);
                  // console.log(a.message);
                  


                  Object.defineProperty(Books, 'name', {//set、get方法设置
                    set: function (value) {
                      console.log(1);
                      console.log(value);
                      name = value;
                      console.log('你取了一个书名叫做' + value);
                    },
                    get: function () {
                      return '《' + name + '》'
                    }
                  })

                  Books.name = a.message;
                  console.log(2);
                  console.log(Books.name);
                  this.books.push(Books.name);
                  JSON.stringify(this.books)
                 console.log(this.books);
                 
                  
                }
                
                
            },
            btn2Click:function(){//指定位置添加选项 
              
                //Vue methods中的this 指向的是Vue的实例，这里可以直接在this中找到items
                this.$set(this.items,4,{message:"Change Test",id:'10'})
            },
            btn3Click:function(){//对象末尾添加
                var itemLen=this.items.length;
                this.$set(this.items,itemLen,{message:"Test add attr",id:itemLen}); //自定义菜单列表 自动挂载至导航
                console.log(this.items);
            },
            btn4Click:function(){//删除末尾选项
                console.log(this.items.length);
                var itemLen=this.items.length-1;
                this.$delete(this.items,itemLen,{message:"Test add attr",id:itemLen}); //自定义菜单列表 自动挂载至导航
                console.log(this.items);
            }
        },
  watch: {
    
  }            
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
