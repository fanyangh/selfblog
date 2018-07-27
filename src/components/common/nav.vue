<template>
  <div>
    <header> 
  <!--menu begin-->
  <div class="menu">
    <nav class="nav" id="topnav">
      <h1 class="logo"><a href="http://www.yangqq.com">博客</a></h1>

      <li v-for="(item,index) in configNav" :key="index">
        <a class="buy-now" @click="judgeBinding(item,index)">{{item.name}}</a>
        <ul class="sub-nav" style="display:none;">
          <li v-for="(item,inde) in item.subItems" :key="inde">
            <router-link :to="{path:item.link}">
              {{item.text}}
            </router-link>
          </li>
        </ul>
      </li>
      
      <!-- 逻辑：循环一级列表--》 判断subITems是否存在 --》 渲染二级菜单 -->

      <!--search begin-->
      <div id="search_bar" class="search_bar">
        <form  id="searchform" action="[!--news.url--]e/search/index.php" method="post" name="searchform">
          <input class="input" placeholder="想搜点什么呢..." type="text" name="keyboard" id="keyboard">
          <input type="hidden" name="show" value="title" />
          <input type="hidden" name="tempid" value="1" />
          <input type="hidden" name="tbname" value="news">
          <input type="hidden" name="Submit" value="搜索" />
          <span class="search_ico"></span>
        </form>
      </div>
      <!--search end--> 
    </nav>
  </div>
  <!--menu end--> 
  <!--mnav begin-->
  <div id="mnav">
    <h2><a href="http://www.yangqq.com" class="mlogo">博客</a><span class="navicon"></span></h2>
    <dl class="list_dl">
      <dt class="list_dt"> <a href="index.html">网站首页</a> </dt>
      <dt class="list_dt"> <a href="about.html">关于我</a> </dt>
      <dt class="list_dt"> <a href="#">模板分享</a> </dt>
      <dd class="list_dd">
        <ul>
          <li><a href="share.html">个人博客模板</a></li>
          <li><a href="share.html">国外Html5模板</a></li>
          <li><a href="share.html">企业网站模板</a></li>
        </ul>
      </dd>
      <dt class="list_dt"> <a href="#">学无止境</a> </dt>
      <dd class="list_dd">
        <ul>
          <li><a href="list.html">心得笔记</a></li>
          <li><a href="list.html">CSS3|Html5</a></li>
          <li><a href="list.html">网站建设</a></li>
          <li><a href="list.html">推荐工具</a></li>
          <li><a href="list.html">JS实例索引</a></li>
        </ul>
      </dd>
      <dt class="list_dt"> <a href="#">慢生活</a> </dt>
      <dd class="list_dd">
        <ul>
          <li><a href="life.html">日记</a></li>
          <li><a href="life.html">欣赏</a></li>
          <li><a href="life.html">程序人生</a></li>
          <li><a href="life.html">经典语录</a></li>
        </ul>
      </dd>
      <dt class="list_dt"> <a href="time.html">时间轴</a> </dt>
      <dt class="list_dt"> <a href="gbook.html">留言</a> </dt>
    </dl>
  </div>
  <!--mnav end--> 
</header>
<!-- <ul>
  <li class="treeNav" v-for="(item,index) in configNav">
        <a href="javascript:void(0)" @click="showToggle(index)">{{item.name}}</a>
        <ul :class="{'active' :index===isShow}">
            <li v-for = "nav in item.subItems">
                <a :href="nav.link"
                :class="{'active':nav.link == linkClick}"
                @click = "treeNavSwitch(nav)">
                {{nav.text}}</a>
            </li>
        </ul>
</li>
</ul> -->

  </div>
</template>

<script>
export default {
  name: 'topnav',
  data () {
    return {
      configNav:[
                    { 
                        name:'关于我',
                        link:'#/callSource',
                    },
                    { 
                        name:'交换&路由',
                        link:'#/callSource',
                        subItems:[
                            { link:'#/callSource',text: '呼叫源',click:true },
                            { link:'#/cancld',text: '号码分析' },
                            { link:'#/route',text: '出局路由' }
                        ]
                    },
                    { 
                        name:'交换&路由',
                        link:'#/callSource',
                        subItems:[
                            { link:'#/callSource',text: '呼叫源',click:true },
                            { link:'#/cancld',text: '号码分析' },
                            { link:'#/route',text: '出局路由' }
                        ]
                    },
                    { 
                        name:'组织&资源',
                        subItems:[
                            { link:'#/org',text: '组织' },
                            { link:'#/term',text: '终端' },
                        ]
                    }                   
                ],
      arr:""  
    }
  },
  methods:{
     getSecMenu() {//接口测试
      this.$http
        .get(
          "api"
        )
        .then(res => {
          if (res.data.code === 1) {
            this.configNav=res.data.data.configNav;
            // res.data.data.configNav.forEach(element => {
            // console.log(element.name);
            // for(let j in element){
            //   for(let prop in element[j]){
            //       if(prop!=''||element[j][prop]!=''){
            //           element=newArr.push(element[j]);
            //       }
            //   }
            // };
            //   if (element.subItems.length === 0) {
            //     element = element
            //     // console.log(data);
            //     this.list = data;
            //   }
            // });
          }
          
        });
    },
    judgeBinding (item,index) {//渲染并判断
      console.log(item);
      console.log(index);
      if (this.item.subItems==''||this.item.subItems==null) {
        this.$router.push(this.item.link);
      }else{
        this.$router.push('/');
      }

    },
    changeHover () {//hover变化

    },

    
    showToggle:function(index){  
                this.isShow = index;  
            },
    treeNavSwitch:function(nav){
                this.linkClick = nav.link;
            }
  },
  created(){
    this.getSecMenu();
    // this.getSecXinlang();

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
