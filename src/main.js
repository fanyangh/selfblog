// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuex from 'vuex'   //组件通信
import store from './store'
import App from './App'
import router from './router'
import axios from 'axios'
import 'babel-polyfill'//兼容Ie

Vue.config.productionTip = false
//接口调用
Vue.prototype.$http = axios
// axios.defaults.baseURL = 'http://10.172.246.234:8095'


// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
