import App from '@/views/app.vue';
import 'babel-polyfill';
import 'highlight.js/styles/atelier-cave-dark.css';
import Vue from 'vue';
import AegisUI from './packages/index';
import './packages/moment-zh_CN';
import router from './router';
import store from './store';

Vue.use(AegisUI);
/**
 * 注册全局指令，hljs在router跳转时被清除
 */
Vue.directive('hljs', el => {
  const blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
if (location.pathname === '/') {
  router.push('/install');
}
