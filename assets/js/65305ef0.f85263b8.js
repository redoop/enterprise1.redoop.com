"use strict";(self.webpackChunkmy_website_03=self.webpackChunkmy_website_03||[]).push([[484],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6814:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"setup-001",title:"\u90e8\u7f72HDFS\u7ec4\u4ef6"},u="\u90e8\u7f72HDFS",c={unversionedId:"03 \u5b89\u88c5\u7ec4\u4ef6/setup-001",id:"03 \u5b89\u88c5\u7ec4\u4ef6/setup-001",title:"\u90e8\u7f72HDFS\u7ec4\u4ef6",description:"1 \u9009\u62e9HDFS\u670d\u52a1",source:"@site/docs\\03 \u5b89\u88c5\u7ec4\u4ef6\\01 hdfs\u5b89\u88c5.md",sourceDirName:"03 \u5b89\u88c5\u7ec4\u4ef6",slug:"/03 \u5b89\u88c5\u7ec4\u4ef6/setup-001",permalink:"/03 \u5b89\u88c5\u7ec4\u4ef6/setup-001",draft:!1,tags:[],version:"current",frontMatter:{id:"setup-001",title:"\u90e8\u7f72HDFS\u7ec4\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u6dfb\u52a0\u96c6\u7fa4\u4e3b\u673a",permalink:"/02 \u5b89\u88c5\u7ba1\u7406\u7a0b\u5e8f/8"},next:{title:"\u90e8\u7f72ZooKeeper\u7ec4\u4ef6",permalink:"/03 \u5b89\u88c5\u7ec4\u4ef6/setup-002"}},s={},p=[{value:"1 \u9009\u62e9HDFS\u670d\u52a1",id:"1-\u9009\u62e9hdfs\u670d\u52a1",level:2},{value:"2 \u5206\u914d\u4e3b\u4ece\u670d\u52a1",id:"2-\u5206\u914d\u4e3b\u4ece\u670d\u52a1",level:2},{value:"3 \u5206\u914d\u4ece\u670d\u52a1\u548c\u5ba2\u6237\u7aef",id:"3-\u5206\u914d\u4ece\u670d\u52a1\u548c\u5ba2\u6237\u7aef",level:2},{value:"4 \u5206\u914dnamenode\uff0csnamenode\uff0c datanode\u76ee\u5f55",id:"4-\u5206\u914dnamenodesnamenode-datanode\u76ee\u5f55",level:2},{value:"5 \u8bbe\u7f6e\u7528\u6237\u7ec4",id:"5-\u8bbe\u7f6e\u7528\u6237\u7ec4",level:2},{value:"6 \u5206\u914d\u5185\u5b58",id:"6-\u5206\u914d\u5185\u5b58",level:2},{value:"7 \u4e00\u952e\u90e8\u7f72",id:"7-\u4e00\u952e\u90e8\u7f72",level:2},{value:"8 \u5b8c\u6210",id:"8-\u5b8c\u6210",level:2}],d={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u90e8\u7f72hdfs"},"\u90e8\u7f72HDFS"),(0,i.kt)("h2",{id:"1-\u9009\u62e9hdfs\u670d\u52a1"},"1 \u9009\u62e9HDFS\u670d\u52a1"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220623114448194",src:n(2900).Z,width:"1902",height:"405"})),(0,i.kt)("h2",{id:"2-\u5206\u914d\u4e3b\u4ece\u670d\u52a1"},"2 \u5206\u914d\u4e3b\u4ece\u670d\u52a1"),(0,i.kt)("p",null,"\u7528\u6237\u6309\u9700\u9009\u62e9HDFS\u7ec4\u4ef6\u5b89\u88c5\u7684\u4f4d\u7f6e\u5373\u53ef\uff0c\u4e0b\u4e00\u6b65"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220623114626095",src:n(5555).Z,width:"1887",height:"596"})),(0,i.kt)("h2",{id:"3-\u5206\u914d\u4ece\u670d\u52a1\u548c\u5ba2\u6237\u7aef"},"3 \u5206\u914d\u4ece\u670d\u52a1\u548c\u5ba2\u6237\u7aef"),(0,i.kt)("p",null,"\u5c06\u4ece\u670d\u52a1\u548c\u5ba2\u6237\u7aef\u7ec4\u4ef6\u5206\u914d\u7ed9\u60a8\u8981\u8fd0\u884c\u5b83\u4eec\u7684\u4e3b\u673a\u3002\n\u663e\u793a\u5206\u914d\u4e3b\u7ec4\u4ef6\u7684\u4e3b\u673a\u663e\u793a",(0,i.kt)("em",{parentName:"p"},"\u2735"),'. \u5373\u5c06\u5b89\u88c5\n"\u5ba2\u6237\u7aef" HDFS Client'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220623114658104",src:n(4296).Z,width:"1869",height:"387"})),(0,i.kt)("h2",{id:"4-\u5206\u914dnamenodesnamenode-datanode\u76ee\u5f55"},"4 \u5206\u914dnamenode\uff0csnamenode\uff0c datanode\u76ee\u5f55"),(0,i.kt)("p",null,"\u6309\u9700\u5206\u914d namenode\uff0csnamenode\uff0c datanode\uff0c\u6240\u5728\u76ee\u5f55\uff0c\u4e0b\u4e00\u6b65"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220622171021494",src:n(7966).Z,width:"1253",height:"584"})),(0,i.kt)("h2",{id:"5-\u8bbe\u7f6e\u7528\u6237\u7ec4"},"5 \u8bbe\u7f6e\u7528\u6237\u7ec4"),(0,i.kt)("p",null,"\u7528\u6237\u7ec4\u6309\u9700\u8bbe\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220622171035511",src:n(7705).Z,width:"1304",height:"437"})),(0,i.kt)("h2",{id:"6-\u5206\u914d\u5185\u5b58"},"6 \u5206\u914d\u5185\u5b58"),(0,i.kt)("p",null,"\u5185\u5b58\u914d\u7f6e\u6309\u9700\u6c42\u914d\u7f6e\u5373\u53ef"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220622171056530",src:n(4997).Z,width:"1301",height:"701"})),(0,i.kt)("h2",{id:"7-\u4e00\u952e\u90e8\u7f72"},"7 \u4e00\u952e\u90e8\u7f72"),(0,i.kt)("p",null,"\u786e\u8ba4\u914d\u7f6e\u65e0\u8bef\u540e\uff0c\u4e00\u952e\u90e8\u7f72\u5373\u53ef"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220623114925861",src:n(607).Z,width:"1893",height:"588"})),(0,i.kt)("h2",{id:"8-\u5b8c\u6210"},"8 \u5b8c\u6210"),(0,i.kt)("p",null,"\u4e0b\u4e00\u6b65\uff0c\u7b49\u5f85\u5b89\u88c5\u5b8c\u6210\u5373\u53ef"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220623115027662",src:n(2201).Z,width:"1906",height:"547"})),(0,i.kt)("p",null,"\u5b89\u88c5\u5b8c\u6210"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220623115235550",src:n(8826).Z,width:"1895",height:"854"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220623115245933",src:n(268).Z,width:"1884",height:"453"})),(0,i.kt)("p",null,"\u5b8c\u6210\u4ee5\u540e\u53ef\u4ee5\u5728\u9762\u677f\u67e5\u770b\u7ec4\u4ef6\u8fd0\u884c\u60c5\u51b5\u3001\u4e5f\u53ef\u4ee5\u8fdb\u884c\u914d\u7f6e\u3001\u5220\u9664\u7b49\u64cd\u4f5c"))}m.isMDXComponent=!0},7966:function(e,t,n){t.Z=n.p+"assets/images/image-20220622171021494-33c5980f37b0c22154569787cfef607e.png"},7705:function(e,t,n){t.Z=n.p+"assets/images/image-20220622171035511-dbea94a5223650fd44ab2929127efb41.png"},4997:function(e,t,n){t.Z=n.p+"assets/images/image-20220622171056530-96e690da702a5a144fa64a4a8d6bb2d0.png"},2900:function(e,t,n){t.Z=n.p+"assets/images/image-20220623114448194-454ff1f1683c0ffc64d16e0a89afdba1.png"},5555:function(e,t,n){t.Z=n.p+"assets/images/image-20220623114626095-7dafe0b2de737780a402910377f510e4.png"},4296:function(e,t,n){t.Z=n.p+"assets/images/image-20220623114658104-d754c2146579ebeeaede0d75595010b8.png"},607:function(e,t,n){t.Z=n.p+"assets/images/image-20220623114925861-5bd8dfc9a9bbec27877900cd53e2d1f9.png"},2201:function(e,t,n){t.Z=n.p+"assets/images/image-20220623115027662-45abc6ba582df463a1a99079d9e70a6c.png"},8826:function(e,t,n){t.Z=n.p+"assets/images/image-20220623115235550-d889263515a7bcaa6854da9d553864e2.png"},268:function(e,t,n){t.Z=n.p+"assets/images/image-20220623115245933-15987bcd6186379224ae3528226f0d86.png"}}]);