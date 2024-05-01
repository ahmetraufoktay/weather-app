(()=>{"use strict";var n,e,t,r,i,o,a,c,s,d,p,l,u,h,f={208:(n,e,t)=>{t.d(e,{A:()=>v});var r=t(601),i=t.n(r),o=t(314),a=t.n(o),c=t(417),s=t.n(c),d=new URL(t(633),t.b),p=new URL(t(532),t.b),l=new URL(t(939),t.b),u=new URL(t(226),t.b),h=new URL(t(111),t.b),f=a()(i()),g=s()(d),m=s()(p),x=s()(l),b=s()(u),w=s()(h);f.push([n.id,`@font-face {\n  font-family: "Mollen";\n  src: url(${g});\n}\n:root {\n  font-size: 16px;\n  padding: 0;\n  margin: 0;\n  font-family: "Mollen";\n}\nbody {\n  background-image: linear-gradient(\n    to bottom,\n    rgb(144, 196, 59),\n    rgb(96, 123, 25)\n  );\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: black;\n}\n\nnav {\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n#sitename {\n  font-weight: bolder;\n}\n#search {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#searchinput {\n  display: flex;\n  align-items: center;\n  background-color: rgb(250, 235, 235);\n  box-sizing: border-box;\n  border: none;\n  transition: 0.05s;\n  font-size: 1.5rem;\n  outline: none;\n}\n#searchinput:focus {\n  border: 2px black solid;\n}\n#searchimg {\n  position: relative;\n  background: url(${m});\n  background-size: cover;\n  cursor: pointer;\n}\n\n#units {\n  display: flex;\n}\n#selectc,\n#selectf {\n  border-style: none;\n  font-weight: bold;\n  background-color: rgb(28, 28, 28);\n  cursor: pointer;\n  transition: 0.05s;\n  color: white;\n}\n#selectc:focus,\n#selectf:focus {\n  border: 2px white solid;\n}\n\nmain {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n}\n#mainlocation {\n  text-align: center;\n}\n#province,\n#country {\n  font-weight: bolder;\n}\n#degree {\n  color: #ffffff80;\n}\n\n#mainweather {\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: repeat(3, auto);\n  grid-template-rows: repeat(2, auto);\n  grid-template-areas: "left weather right" "date date date";\n  font-size: 2rem;\n}\n#dayleft,\n#dayright {\n  cursor: pointer;\n}\n#dayleft {\n  background-image: url(${x});\n  background-size: cover;\n  grid-area: left;\n}\n#dayright {\n  background-image: url(${b});\n  background-size: cover;\n  grid-area: right;\n}\n#iconweather {\n  background-image: url(${w});\n  background-size: cover;\n  grid-area: weather;\n}\n#date {\n  grid-area: date;\n  display: flex;\n  justify-content: center;\n  color: rgba(30, 22, 142, 0.5);\n  font-weight: bolder;\n}\n\n.randomicon {\n  background-image: url(${w});\n  background-size: cover;\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    overflow-x: hidden;\n    min-height: 100vh;\n    gap: 20px;\n  }\n  nav {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr;\n    min-height: 20vh;\n    width: 100%;\n  }\n  #sitename {\n    font-size: 10vw;\n  }\n  #search {\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n  #searchinput {\n    width: clamp(200px, 300px, 50vw);\n    height: clamp(20px, 40px, 4vh);\n    padding: 0px 20px;\n    border-radius: 50px;\n    font-size: 1rem;\n    border: 4px;\n  }\n  #searchimg {\n    width: 20px;\n    height: 20px;\n    right: 30px;\n  }\n  #selectc,\n  #selectf {\n    width: 75px;\n    height: 30px;\n    border-radius: 20px;\n    font-size: 0.75rem;\n  }\n  #units {\n    gap: 5px;\n  }\n  main {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, minmax(min-content, max-content));\n    justify-content: center;\n    gap: 20px;\n  }\n\n  #mainlocation {\n    grid-row: 1/2;\n  }\n\n  #mainweather {\n    font-size: 2rem;\n  }\n  #dayleft,\n  #dayright {\n    width: 70px;\n    height: 75px;\n  }\n  #iconweather {\n    width: 150px;\n    height: 150px;\n  }\n  #date {\n    font-size: clamp(2vh, 1.5rem, 2rem);\n    text-align: center;\n  }\n\n  #province,\n  #country {\n    font-size: 10vw;\n  }\n  #degree {\n    font-size: 15vw;\n  }\n\n  #mainhourly {\n    width: 200px;\n    height: 450px;\n    display: grid;\n    justify-self: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(24, auto);\n    overflow-x: scroll;\n  }\n  .hour {\n    width: 180px;\n    height: 150px;\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    grid-template-columns: 100px auto;\n    grid-template-rows: auto auto;\n    grid-template-areas: "text weather" "temp weather";\n  }\n  .randomicon {\n    grid-area: weather;\n    width: 100px;\n    height: 100px;\n  }\n  .hourtext,\n  .hourtemp {\n    font-size: 1.5rem;\n    text-align: center;\n  }\n  .hourtext {\n    grid-area: text;\n  }\n  .hourtemp {\n    grid-area: temp;\n  }\n}\n\n@media only screen and (min-width: 601px) and (max-width: 1050px) {\n  /* scrollbar style */\n  ::-webkit-scrollbar {\n    height: 5px;\n  }\n  ::-webkit-scrollbar-track {\n    background: #ffffff;\n    box-shadow: 0 0 5px 3px #fff;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #1f9c09;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #187907;\n  }\n  body {\n    gap: 50px;\n    min-height: 100vh;\n  }\n  nav {\n    grid-template-columns: auto auto auto;\n    height: 20vh;\n    width: 90vw;\n  }\n  #sitename {\n    font-size: 2.5rem;\n    text-align: center;\n  }\n  #searchinput {\n    width: clamp(250px, 350px, 40vw);\n    height: 40px;\n    padding: 0px 30px;\n    border-radius: 50px;\n    border: 4px;\n  }\n  #searchimg {\n    width: 25px;\n    height: 25px;\n    right: 45px;\n  }\n  #selectc,\n  #selectf {\n    width: 60px;\n    height: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n  }\n  #units {\n    gap: 5px;\n  }\n\n  main {\n    width: 90vw;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n\n  #province,\n  #country {\n    font-size: 3rem;\n  }\n\n  #mainweather {\n    font-size: 2rem;\n  }\n  #dayleft,\n  #dayright {\n    width: 90px;\n    height: 100px;\n  }\n  #iconweather {\n    width: 200px;\n    height: 200px;\n  }\n  #date {\n    font-size: 1.5rem;\n  }\n  #degree {\n    font-size: 8rem;\n  }\n\n  #mainhourly {\n    width: 90vw;\n    height: 180px;\n    display: grid;\n    justify-self: center;\n    grid-template-rows: 1fr;\n    grid-template-columns: repeat(24, auto);\n    overflow-x: scroll;\n    grid-column: 1/3;\n  }\n  .hour {\n    width: 15vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .randomicon {\n    width: 100px;\n    height: 100px;\n  }\n  .hourtext,\n  .hourtemp {\n    font-size: 1.5rem;\n  }\n}\n\n@media only screen and (min-width: 1051px) {\n  /* scrollbar style */\n  ::-webkit-scrollbar {\n    height: 10px;\n  }\n  ::-webkit-scrollbar-track {\n    background: #ffffff;\n    box-shadow: 0 0 5px 3px #fff;\n    border-radius: 10px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: #1f9c09;\n    border-radius: 10px;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: #187907;\n  }\n\n  body {\n    overflow: hidden;\n    gap: 50px;\n    height: 100vh;\n    width: 100vw;\n  }\n  nav {\n    grid-template-columns: 2fr 3fr 1fr;\n    height: 15%;\n    width: 1000px;\n  }\n  #sitename {\n    font-size: 2.5rem;\n  }\n  #searchinput {\n    width: 350px;\n    height: 40px;\n    padding: 0px 30px;\n    border-radius: 50px;\n    border: 4px;\n  }\n  #searchimg {\n    width: 25px;\n    height: 25px;\n    right: 45px;\n  }\n  #selectc,\n  #selectf {\n    width: 75px;\n    height: 40px;\n    border-radius: 20px;\n    font-size: 1rem;\n  }\n  #units {\n    gap: 20px;\n  }\n\n  main {\n    width: 1030px;\n    gap: 50px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n  }\n\n  #province,\n  #country {\n    font-size: 3rem;\n  }\n\n  #mainweather {\n    font-size: 2rem;\n  }\n  #dayleft,\n  #dayright {\n    width: 90px;\n    height: 100px;\n  }\n  #iconweather {\n    width: 200px;\n    height: 200px;\n  }\n  #date {\n    font-size: 1.5rem;\n  }\n  #degree {\n    font-size: 8rem;\n  }\n\n  #mainhourly {\n    width: 1000px;\n    height: 180px;\n    display: grid;\n    justify-self: center;\n    grid-template-rows: 1fr;\n    grid-template-columns: repeat(24, auto);\n    overflow-x: scroll;\n    grid-column: 1/3;\n  }\n  .hour {\n    width: 125px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .randomicon {\n    width: 100px;\n    height: 100px;\n  }\n  .hourtext,\n  .hourtemp {\n    font-size: 1.5rem;\n  }\n}\n`,""]);const v=f},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),i&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=i):p[4]="".concat(i)),e.push(p))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=t(l),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var f=i(h,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var o=r(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=t(o[a]);e[c].references--}for(var s=r(n,i),d=0;d<o.length;d++){var p=t(o[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,i&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},633:(n,e,t)=>{n.exports=t.p+"a56147acc3d35dffdea7.otf"},939:(n,e,t)=>{n.exports=t.p+"2a641251392400799919.svg"},226:(n,e,t)=>{n.exports=t.p+"a5fe1d675bb10a0822b4.svg"},532:(n,e,t)=>{n.exports=t.p+"b5a171f86efd5d132f60.svg"},111:(n,e,t)=>{n.exports=t.p+"9d550f3bc9f3770c464d.svg"}},g={};function m(n){var e=g[n];if(void 0!==e)return e.exports;var t=g[n]={id:n,exports:{}};return f[n](t,t.exports,m),t.exports}m.m=f,m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;m.g.importScripts&&(n=m.g.location+"");var e=m.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),m.p=n})(),m.b=document.baseURI||self.location.href,m.nc=void 0,n=m(72),e=m.n(n),t=m(825),r=m.n(t),i=m(659),o=m.n(i),a=m(56),c=m.n(a),s=m(540),d=m.n(s),p=m(113),l=m.n(p),u=m(208),(h={}).styleTagTransform=l(),h.setAttributes=c(),h.insert=o().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),e()(u.A,h),u.A&&u.A.locals&&u.A.locals})();