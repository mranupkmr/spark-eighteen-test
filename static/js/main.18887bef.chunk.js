(this["webpackJsonpspark-eighteen-test"]=this["webpackJsonpspark-eighteen-test"]||[]).push([[0],{41:function(e,n,a){e.exports=a(56)},52:function(e,n,a){},56:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),r=a(8),o=a.n(r),l=a(23),i=a(11);var u=Object(i.b)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{countries:{Portugal:[{name:"Aasiya Jayavant",checked:!1},{name:"Luvleen Lawrence",checked:!1},{name:"Rey Mibourne",checked:!1},{name:"Cayla Brister",checked:!1}],Nicaragua:[{name:"Deveedaas Nandi",checked:!1},{name:"Obasey Chidy",checked:!1},{name:"Xenie",checked:!1},{name:"Ezequiel",checked:!1}],Marshall:[{name:"Aaron",checked:!1},{name:"Jelena",checked:!1}]}},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"HANDLE_CHANGE":return Object.assign({},e,{countries:n.payload});default:return e}}}),h=Object(i.c)(u),m=(a(51),a(52),a(32)),s=a(33),d=a(40),f=a(39),k=a(58),v=a(60),E=a(59);function p(){return c.a.createElement(v.a,{bg:"light",variant:"light",className:"full-width-nav"},c.a.createElement(v.a.Brand,{href:"#home"},"LOGO"),c.a.createElement(E.a,{className:"ml-auto"},c.a.createElement(E.a.Link,{href:"#home"},"Home"),c.a.createElement(E.a.Link,{href:"#portfolio"},"My Portfolio"),c.a.createElement(E.a.Link,{href:"#clients"},"Clients"),c.a.createElement(E.a.Link,{href:"#getintouch"},"Get in touch")))}var y=a(62);function g(e){return c.a.createElement("div",{className:"body-left col-md-6"},c.a.createElement(y.a,null,c.a.createElement(y.a.Body,null,function(){var n=e.countries,a=[];return Object.keys(n).forEach((function(t){a.push(c.a.createElement("ul",{key:t},t,function(n,a){var t=[];return n.forEach((function(n,r){t.push(c.a.createElement("li",{key:n.name},c.a.createElement("input",{type:"checkbox",name:a,value:n.name,checked:n.checked,onChange:function(n){return e.handleChange(n,r)}}),n.name))})),t}(n[t],t)))})),a}())))}var b=a(61);function C(e){return c.a.createElement("div",{className:"body-left col-md-6"},c.a.createElement(y.a,null,c.a.createElement(y.a.Body,null,function(){var n=e.countries,a=[],t=[];return Object.keys(n).forEach((function(r){a=[],n[r].forEach((function(n,t){n.checked&&a.push(c.a.createElement(b.a,{key:"".concat(n.name,"_").concat(t),variant:"dark",dismissible:!0,onClose:function(){return e.handleRemove({name:r,checked:!1},t)}},n.name))})),a.length>0&&t.push(c.a.createElement("ul",{key:r},r,a))})),t}())))}var w=function(e){Object(d.a)(a,e);var n=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var t=arguments.length,c=new Array(t),r=0;r<t;r++)c[r]=arguments[r];return(e=n.call.apply(n,[this].concat(c))).handleChange=function(n,a){var t=n.target,c=t.name,r=t.checked,o=e.props.Home.countries;o[c][a].checked=r,e.props.changeCountry(o)},e.handleRemove=function(n,a){var t=n.name,c=n.checked,r=e.props.Home.countries;console.log(t,c),r[t][a].checked=c,e.props.changeCountry(r)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.Home.countries;return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,null),c.a.createElement(k.a,null,c.a.createElement("div",{className:"home-body row"},c.a.createElement(g,{countries:e,handleChange:this.handleChange}),c.a.createElement(C,{countries:e,handleRemove:this.handleRemove}))))}}]),a}(c.a.Component),O=Object(l.b)((function(e){return{Home:e.home}}),(function(e){return{changeCountry:function(n){return e(function(e){return{type:"HANDLE_CHANGE",payload:e}}(n))}}}))(w);var N=function(){return c.a.createElement(O,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(l.a,{store:h},c.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.18887bef.chunk.js.map