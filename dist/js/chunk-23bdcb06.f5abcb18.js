(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23bdcb06"],{"06cd":function(e,t,n){"use strict";var a=n("8fb7"),o=n.n(a);o.a},"079c":function(e,t,n){"use strict";var a=n("9afb"),o=n.n(a);o.a},"2ead":function(e,t){e.exports='<h1 id="time指令">time指令</h1>\n<h2 id="何时使用">何时使用</h2>\n<p>当需要显示一个时间对象时</p>\n'},"3f4d":function(e,t){e.exports="<p>格式化输出</p>\n"},"4f8a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[e._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:e.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:e.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[e._v("    "),n("ae-layout",[e._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),e._v("\n      "),n("code",{domProps:{textContent:e._s(e.code)}}),e._v("\n    ")],1),e._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(t){e.showCode=!e.showCode}}},[n("span",{domProps:{textContent:e._s(e.showCode?"隐藏代码":"显示代码")}})])],1)],1)},o=[],s=n("d225"),i=n("b0b4"),r=n("308d"),c=n("6bb5"),m=n("4e2b"),l=n("9ab4"),d=n("5365"),p=n("2f23"),u=n("e722"),v=n("8bbf"),b=n.n(v),f=n("65d9"),h=n.n(f),w=n("60a3");b.a.use(u["a"]),b.a.use(p["a"]),b.a.use(d["default"]);var x=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.showCode=!1,e}return Object(m["a"])(t,e),Object(i["a"])(t,[{key:"copied",value:function(){this.$message.success("已复制")}}]),t}(b.a);l["a"]([Object(w["d"])(String)],x.prototype,"code",void 0),l["a"]([Object(w["d"])(String)],x.prototype,"markdown",void 0),x=l["a"]([h()({name:"CodeBox"})],x);var j=x,O=j,C=(n("06cd"),n("2877")),y=Object(C["a"])(O,a,o,!1,null,null,null);t["a"]=y.exports},"8fb7":function(e,t,n){},"9afb":function(e,t,n){},a376:function(e,t){e.exports="<p>基本用法</p>\n"},c9ee:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":e.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{attrs:{href:"#demo2",title:"格式化输出"}}),n("d-anchor-link",{attrs:{href:"#demo3",title:"更好的可读性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:e.title}})],1),e._m(0),n("demo1",{attrs:{id:"demo1"}}),n("demo2",{attrs:{id:"demo2"}}),n("demo3",{attrs:{id:"demo3"}})],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[e._v("示例代码")])])}],s=n("d225"),i=n("b0b4"),r=n("308d"),c=n("6bb5"),m=n("4e2b"),l=n("9ab4"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:e.code,markdown:e.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},p=[],u="<template>\n  <div class=\"demo\">\n    <span v-time=\"time\"></span>\n  </div>\n</template>\n<script lang=\"ts\">\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n\n  @Component({\n    name: 'Demo1'\n  })\n  export default class Demo1 extends Vue {\n    public time = new Date();\n  }\n<\/script>\n",v=n("a376"),b=n.n(v),f=n("8bbf"),h=n.n(f),w=n("65d9"),x=n.n(w),j=n("4f8a"),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("span",{directives:[{name:"time",rawName:"v-time",value:e.time,expression:"time"}]})])},C=[],y=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.time=new Date,e}return Object(m["a"])(t,e),t}(h.a);y=l["a"]([x()({name:"Demo1"})],y);var D=y,_=D,k=n("2877"),g=Object(k["a"])(_,O,C,!1,null,null,null),N=g.exports,E=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.code=u,e.md=b.a,e}return Object(m["a"])(t,e),t}(h.a);E=l["a"]([x()({name:"Demo1",components:{CodeBox:j["a"],DemoComp:N}})],E);var $=E,Y=$,T=Object(k["a"])(Y,d,p,!1,null,null,null),V=T.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:e.code,markdown:e.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},H=[],M='<template>\n  <div class="demo">\n    <span format="YYYY年MM月DD日 HH时mm分"\n          v-time="time"></span>\n  </div>\n</template>\n<script lang="ts">\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n\n  @Component({\n    name: \'Demo1\'\n  })\n  export default class Demo1 extends Vue {\n    public time = new Date();\n  }\n<\/script>\n',S=n("3f4d"),q=n.n(S),J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("span",{directives:[{name:"time",rawName:"v-time",value:e.time,expression:"time"}],attrs:{format:"YYYY年MM月DD日 HH时mm分"}})])},P=[],I=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.time=new Date,e}return Object(m["a"])(t,e),t}(h.a);I=l["a"]([x()({name:"Demo1"})],I);var z=I,A=z,F=Object(k["a"])(A,J,P,!1,null,null,null),G=F.exports,K=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.code=M,e.md=q.a,e}return Object(m["a"])(t,e),t}(h.a);K=l["a"]([x()({name:"Demo2",components:{CodeBox:j["a"],DemoComp:G}})],K);var L=K,Q=L,R=Object(k["a"])(Q,B,H,!1,null,null,null),U=R.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:e.code,markdown:e.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},X=[],Z='<template>\n  <div class="demo">\n    <div v-time.pretty="time1"\n         class="m-t-b">\n    </div>\n    <div v-time.pretty="time2"\n         class="m-t-b">\n    </div>\n    <div v-time.pretty="time3"\n         class="m-t-b">\n    </div>\n  </div>\n</template>\n<script lang="ts">\n  import Vue from \'vue\';\n  import Component from \'vue-class-component\';\n\n  @Component({\n    name: \'Demo1\'\n  })\n  export default class Demo1 extends Vue {\n    public time1 = new Date().getTime() - 60 * 12 * 1000;\n    public time2 = new Date().getTime() - 60 * 65 * 1000;\n    public time3 = new Date().getTime() - 60 * 60 * 1000 * 24 * 365;\n  }\n<\/script>\n',ee=n("ea69"),te=n.n(ee),ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("div",{directives:[{name:"time",rawName:"v-time.pretty",value:e.time1,expression:"time1",modifiers:{pretty:!0}}],staticClass:"m-t-b"}),n("div",{directives:[{name:"time",rawName:"v-time.pretty",value:e.time2,expression:"time2",modifiers:{pretty:!0}}],staticClass:"m-t-b"}),n("div",{directives:[{name:"time",rawName:"v-time.pretty",value:e.time3,expression:"time3",modifiers:{pretty:!0}}],staticClass:"m-t-b"})])},ae=[],oe=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.time1=(new Date).getTime()-72e4,e.time2=(new Date).getTime()-39e5,e.time3=(new Date).getTime()-31536e6,e}return Object(m["a"])(t,e),t}(h.a);oe=l["a"]([x()({name:"Demo1"})],oe);var se=oe,ie=se,re=Object(k["a"])(ie,ne,ae,!1,null,null,null),ce=re.exports,me=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.code=Z,e.md=te.a,e}return Object(m["a"])(t,e),t}(h.a);me=l["a"]([x()({name:"Demo3",components:{CodeBox:j["a"],DemoComp:ce}})],me);var le=me,de=le,pe=Object(k["a"])(de,W,X,!1,null,null,null),ue=pe.exports,ve=n("847c"),be=n("c98f"),fe=n("2ead"),he=n.n(fe);h.a.use(ve["a"]),h.a.use(be["a"]);var we=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(r["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.title=he.a,e}return Object(m["a"])(t,e),Object(i["a"])(t,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),t}(h.a);we=l["a"]([x()({name:"ComponentDemo",components:{demo1:V,demo2:U,demo3:ue}})],we);var xe=we,je=xe,Oe=(n("079c"),Object(k["a"])(je,a,o,!1,null,"2ec5515e",null));t["default"]=Oe.exports},ea69:function(e,t){e.exports="<p>更好的可读性</p>\n<blockquote>\n<p>使用指令修饰符<code>pretty</code>可以让时间显示的更具可读性</p>\n</blockquote>\n<p>要显示的时间与当前时间比较：</p>\n<ol>\n<li>今年的时间省略年份的显示</li>\n<li>1秒以内的时间会显示为 刚刚</li>\n<li>1分钟以内的时间显示为 xx秒以前</li>\n<li>1小时以内的时间显示为 xx分钟以前</li>\n</ol>\n"}}]);
//# sourceMappingURL=chunk-23bdcb06.f5abcb18.js.map