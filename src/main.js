import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueMeta from 'vue-meta'
import "../src/scss/fonts.css"
import "../src/style/styles.css"
import 'animate.css';
// link echarts
import echarts from "./util/echarts";
Vue.prototype.$echarts = echarts;
Vue.use(VueMeta)
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
