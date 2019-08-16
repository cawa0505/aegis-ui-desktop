import Codemirror from './src/index.vue';

const Plugin: any = Codemirror;

Plugin.install = (Vue) => {
  Vue.component('AeCodemirrorEditor', Codemirror);
  Vue.component('DCodemirrorEditor', Codemirror);
};

export default Plugin;
