webpackJsonp([15],{478:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(406),a=i.n(n),s=i(10),c=i.n(s),l=i(187),r=i.n(l),o=i(16),u=i.n(o),g=i(112),d=i.n(g),h=i(113),p=i.n(h),v=i(116),m=i.n(v),f=i(114),b=i.n(f),A=i(115),C=i.n(A),N=i(0),S=(i.n(N),i(53)),y=(i.n(S),i(52)),O=i(405),k=i(111),T=i(404),L=i.n(T),M=y.q.Content,_=y.q.Split,j=function(e){return{setting:e.setting}},H=c()(y.i,{id:"setting.message.error"}),V=c()("br",{}),q=c()("br",{}),w=function(e){function t(){var e,i,n;p()(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return b()(n,(i=n=b()(this,(e=t.__proto__||d()(t)).call.apply(e,[this].concat(s))),n.Setting=["lang","name","nameActive","img","imgActive","pureHps","graphHide","graphScale","graphTime","graphTimeActive","historyLength","uiScale","uiScaleActive","uiTrans","uiMini","uiAutoMini","uiAutoMiniActive"],n.state=u()({timekey:0},Object(k.a)(n.Setting,n.props.setting)),n.handleLangChange=function(e){n.setState({lang:e})},n.inputOnChange=function(e,t,i){var a=e.target.value;i&&(a=parseFloat(a)),a?n.setState(r()({},t,a)):y.m.error(H)},n.checkboxOnChange=function(e,t){var i=e.target.checked;n.setState(r()({},t,i))},i))}return C()(t,e),m()(t,[{key:"render",value:function(){var e=this,t=this.state,i=function(i,n,a){return c()(y.e,{title:c()(y.i,{id:"setting.basic.".concat(i)}),defaultChecked:t[i],onChange:function(t){return e.checkboxOnChange(t,i)}},void 0,n||a?c()(y.h,{defaultValue:t[n],placeholder:Object(y.j)(a),onChange:function(t){return e.inputOnChange(t,n)}}):null)};return[c()(M,{className:L.a.content},t.timekey,c()("div",{className:L.a.body},void 0,c()(_,{className:L.a.title,id:"setting.basic.split.lang"}),function(i){return c()("div",{className:L.a.listLang},void 0,c()("div",{className:L.a.listLangTitle},void 0,c()(y.i,{id:"setting.basic."+i})),c()(y.p,{defaultValue:t.lang,mode:!1,options:["cn","en"],onChange:e.handleLangChange}))}("lang"),c()(_,{className:L.a.title,id:"setting.basic.split.personal"}),i("nameActive","name","placeholder.you"),i("imgActive","img","placeholder.img"),V,c()(_,{className:L.a.title,id:"setting.basic.split.statistics"}),i("graphTimeActive","graphTime"),i("graphHide"),i("graphScale"),i("pureHps"),q,c()(_,{className:L.a.title,id:"setting.basic.split.gui"}),i("uiAutoMiniActive","uiAutoMini"),i("uiScaleActive","uiScale"),c()(_,{className:L.a.title,id:"setting.basic.split.history"}),function(i){return c()("div",{className:L.a.listItem},void 0,c()("span",{},void 0,c()("div",{className:L.a.listTitle},void 0,c()(y.i,{id:"setting.basic."+i})),c()("div",{className:L.a.listInput},void 0,c()(y.h,{defaultValue:t[i],onChange:function(t){return e.inputOnChange(t,i)}}))))}("historyLength")))].concat(a()(this.Footer))}}]),t}(O.b);t.default=Object(S.connect)(j)(w)}});