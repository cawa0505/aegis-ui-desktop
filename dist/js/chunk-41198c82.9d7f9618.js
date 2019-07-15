(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41198c82"],{"06cd":function(e,t,n){"use strict";var a=n("8fb7"),o=n.n(a);o.a},1806:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":e.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:e.title}})],1),e._m(0),n("demo1",{attrs:{id:"demo1"}})],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[e._v("示例代码")])])}],r=n("d225"),s=n("b0b4"),c=n("308d"),i=n("6bb5"),d=n("4e2b"),l=n("9ab4"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:e.code,markdown:e.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},h=[],m='<template>\n  <div>\n    <d-anchor :get-container="getContainer">\n      <d-anchor-link href="#a"\n                     title="Basic demo"/>\n      <d-anchor-link href="#b"\n                     title="Fixed demo"/>\n      <d-anchor-link href="#API"\n                     title="API">\n        <d-anchor-link href="#Anchor-Props"\n                       title="Anchor Props"/>\n        <d-anchor-link href="#Link-Props"\n                       title="Link Props"/>\n      </d-anchor-link>\n    </d-anchor>\n  </div>\n</template>\n<script lang="ts">\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n  import DAnchor from \'../../index\';\n\n  Vue.use(DAnchor);\n  @Component({\n    name: \'Demo1\'\n  })\n  export default class Demo1 extends Vue {\n    public getContainer() {\n      return document.getElementById(\'app-content\');\n    }\n  }\n<\/script>\n<style scoped lang="less">\n</style>\n',p=n("34c7"),f=n.n(p),b=n("8bbf"),v=n.n(b),w=n("65d9"),k=n.n(w),x=n("4f8a"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("d-anchor",{attrs:{"get-container":e.getContainer}},[n("d-anchor-link",{attrs:{href:"#a",title:"Basic demo"}}),n("d-anchor-link",{attrs:{href:"#b",title:"Fixed demo"}}),n("d-anchor-link",{attrs:{href:"#API",title:"API"}},[n("d-anchor-link",{attrs:{href:"#Anchor-Props",title:"Anchor Props"}}),n("d-anchor-link",{attrs:{href:"#Link-Props",title:"Link Props"}})],1)],1)],1)},j=[],O=n("847c");v.a.use(O["a"]);var y=function(e){function t(){return Object(r["a"])(this,t),Object(c["a"])(this,Object(i["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),t}(v.a);y=l["a"]([k()({name:"Demo1"})],y);var _=y,g=_,P=n("2877"),A=Object(P["a"])(g,C,j,!1,null,"58443a0f",null),D=A.exports,E=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(i["a"])(t).apply(this,arguments)),e.code=m,e.md=f.a,e}return Object(d["a"])(t,e),t}(v.a);E=l["a"]([k()({name:"Demo1",components:{CodeBox:x["a"],DemoComp:D}})],E);var N=E,B=N,I=Object(P["a"])(B,u,h,!1,null,null,null),$=I.exports,L=n("65ad"),S=n.n(L);v.a.use(O["a"]),v.a.use(O["a"]);var V=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(i["a"])(t).apply(this,arguments)),e.title=S.a,e}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),t}(v.a);V=l["a"]([k()({name:"ComponentDemo",components:{demo1:$}})],V);var F=V,J=F,q=(n("b324"),Object(P["a"])(J,a,o,!1,null,"ce142a4c",null));t["default"]=q.exports},"34c7":function(e,t){e.exports="<p>基本用法</p>\n"},"4f8a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[e._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:e.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[e._v("    "),n("ae-layout",[e._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),e._v("\n      "),n("code",{domProps:{textContent:e._s(e.code)}}),e._v("\n    ")],1),e._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(t){e.showCode=!e.showCode}}},[n("span",{domProps:{textContent:e._s(e.showCode?"隐藏代码":"显示代码")}})])],1)],1)},o=[],r=n("d225"),s=n("b0b4"),c=n("308d"),i=n("6bb5"),d=n("4e2b"),l=n("9ab4"),u=n("5365"),h=n("2f23"),m=n("e722"),p=n("8bbf"),f=n.n(p),b=n("65d9"),v=n.n(b),w=n("60a3");f.a.use(m["a"]),f.a.use(h["a"]),f.a.use(u["default"]);var k=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(i["a"])(t).apply(this,arguments)),e.showCode=!1,e}return Object(d["a"])(t,e),Object(s["a"])(t,[{key:"copied",value:function(){this.$message.success("已复制")}}]),t}(f.a);l["a"]([Object(w["d"])(String)],k.prototype,"code",void 0),l["a"]([Object(w["d"])(String)],k.prototype,"markdown",void 0),k=l["a"]([v()({name:"CodeBox"})],k);var x=k,C=x,j=(n("06cd"),n("2877")),O=Object(j["a"])(C,a,o,!1,null,null,null);t["a"]=O.exports},"65ad":function(e,t){e.exports='<h1 id="锚点--d-anchor">锚点  d-anchor</h1>\n'},"8f30":function(e,t,n){},"8fb7":function(e,t,n){},b324:function(e,t,n){"use strict";var a=n("8f30"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-41198c82.9d7f9618.js.map