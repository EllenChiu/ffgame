webpackJsonp([1],{"/Uz8":function(t,a){},"4xit":function(t,a){},EXqp:function(t,a){},LmMx:function(t,a){},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),n={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"row topLine"},[a("div",{staticClass:"col-md-4"},[a("a",{staticClass:"top-link btn-link",on:{click:this.goIndex}},[a("img",{staticClass:"back-btn-img",attrs:{src:"static/img/back-index.png",alt:"回首頁"}})])]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"col-md-4 title-area"},[a("img",{staticClass:"title-img",attrs:{src:"static/img/quest-title.png"}})])}]};var i=s("VU/8")({name:"top-banner",props:{},methods:{goIndex:function(){this.$router.push("/")}}},n,!1,function(t){s("YNAw")},null,null).exports,o={name:"App",components:{topBanner:i}},l={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var r=s("VU/8")(o,l,!1,function(t){s("4xit"),s("/Uz8")},null,null).exports,c=s("/ocq"),d=s("Gu7T"),m=s.n(d),u=s("woOf"),p=s.n(u),g={name:"modal",props:{scroll:{type:Boolean,default:function(){return!1}},width:{type:String,default:function(){return"400px"}},height:{type:String,default:function(){return""}},bgColor:{type:String,default:function(){return"#fff"}},maxWidth:{type:String,default:function(){return""}},addClass:{type:Array,default:function(){return[]}}},computed:{styleObj:function(){var t={width:this.width,height:this.height};return this.maxWidth&&p()(t,{maxWidth:this.maxWidth}),t},classObj:function(){var t=[];return this.scroll&&t.push("scroll"),[].concat(t,m()(this.addClass))}}},v={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask",class:t.classObj,on:{click:function(a){if(a.target!==a.currentTarget)return null;t.$emit("maskClick")}}},[s("div",{staticClass:"modal-wrapper",on:{click:function(a){if(a.target!==a.currentTarget)return null;t.$emit("maskClick")}}},[s("div",{staticClass:"modal-container",style:t.styleObj},[t._t("container-top"),t._v(" "),s("div",{staticClass:"modal-body"},[t._t("body",[t._v("\n            default body\n          ")])],2)],2)])])])},staticRenderFns:[]};var f=s("VU/8")(g,v,!1,function(t){s("nzgx")},"data-v-b9b7749a",null).exports,h={name:"index-page",components:{topBanner:i,Modal:f},data:function(){return{showVideo:!1,videoSrc:"https://www.youtube.com/embed/QZgadYdWAmc"}},watch:{showVideo:function(){this.showVideo&&(this.videoSrc=this.videoSrc+"?autoplay=1&rel=0")}},filters:{},methods:{goAnswer:function(){this.$router.push("doanswer")}}},w={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[t._m(0),t._v(" "),s("div",{staticClass:"row btn-area"},[s("div",{staticClass:"col-lg-6 put-right"},[s("a",{staticClass:"btn-link",on:{click:function(a){t.showVideo=!0}}},[s("img",{attrs:{src:"static/img/btn-start.png",alt:"開始遊戲"}})])]),t._v(" "),s("div",{staticClass:"col-lg-6 "},[s("a",{staticClass:"btn-link",on:{click:t.goAnswer}},[s("img",{attrs:{src:"static/img/btn-finish.png",alt:"解謎完成"}})])])]),t._v(" "),t.showVideo?s("modal",{attrs:{width:"100%",height:"100%"},on:{maskClick:function(a){t.showVideo=!1}}},[s("div",{staticClass:"video",staticStyle:{height:"100%","text-align":"center"},attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"row ",staticStyle:{"text-align":"left","margin-bottom":"25px","margin-top":"15px"}},[s("div",{staticClass:"col-md-4"},[s("a",{staticClass:" btn-link",on:{click:function(a){t.showVideo=!1}}},[s("img",{staticClass:"back-btn-img",staticStyle:{width:"50%"},attrs:{src:"static/img/back-index.png",alt:"回首頁"}})])])]),t._v(" "),s("iframe",{staticStyle:{height:"85%"},attrs:{src:t.videoSrc,frameborder:"0",allowfullscreen:""}}),t._v(" "),s("div",{staticStyle:{"margin-bottom":"150px"}})])]):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"main",staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"static/img/banner.png"}})])}]};var b=s("VU/8")(h,w,!1,function(t){s("Sc3d")},null,null).exports,_={name:"open-video-page",components:{topBanner:i},data:function(){return{title:"WHAT'S YOUR NEXT STATION ?"}}},C={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"wrap-outer"},[a("top-banner")],1)},staticRenderFns:[]};var y=s("VU/8")(_,C,!1,function(t){s("EXqp")},null,null).exports,x=s("fZjL"),k=s.n(x),S=s("DAYN"),I={name:"do-answer-page",components:{topBanner:i,draggable:s.n(S).a,Modal:f},data:function(){return{foodItems1:[{name:"01",text:"粢粑",ans:"ym"},{name:"02",text:"湯圓",ans:null},{name:"03",text:"柿餅",ans:null},{name:"04",text:"粄粽",ans:"dw"}],foodItems2:[{name:"05",text:"新丁粄",ans:"yx"},{name:"06",text:"炸年糕",ans:"tc"},{name:"07",text:"封肉",ans:null},{name:"08",text:"粄條",ans:null}],foodItems3:[{name:"09",text:"擂茶",ans:null},{name:"10",text:"南瓜",ans:"moon"}],answer:{ym:[],tc:[],moon:[],zq:[],dw:[],yx:[]},corrected:!1,endVideo:!1,videoSrc:"https://www.youtube.com/embed/XSYzXtbdWvw",score:0}},watch:{score:function(){5===this.score&&(this.corrected=!0)},answer:{handler:function(t){var a=0;k()(t).map(function(s){(t[s].length>0?t[s][0].ans:"")===s&&(a+=1)}),this.score=a},deep:!0}},filters:{},methods:{showEndVideo:function(){this.corrected=!1,this.endVideo=!0,this.endVideo&&(this.videoSrc=this.videoSrc+"?autoplay=1&rel=0")},backIndex:function(){this.$router.push("/")},checked:function(t){t.length>1&&t.pop()},allow:function(t,a){if(t.draggedContext.element.ans!==a.target.id)return!1}}},V={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[s("top-banner"),t._v(" "),s("div",{staticClass:"put-center title"}),t._v(" "),s("div",{staticClass:" row ans-area-div"},[s("div",{staticClass:"left-div",staticStyle:{position:"relative"}},[s("div",{staticClass:"ansBlock",staticStyle:{top:"0%",left:"20%"}},[s("div",{staticClass:" ansTitle"},[t._v("\n              義民祭\n            ")]),t._v(" "),s("draggable",{staticClass:"a_circle",attrs:{options:{group:{name:"Orders",put:!0,pull:!1},animation:300}},model:{value:t.answer.ym,callback:function(a){t.$set(t.answer,"ym",a)},expression:"answer.ym"}},[s("div",{staticClass:"hiden_cicle",style:t.answer.ym.length>0?{backgroundImage:"url(static/img/"+t.answer.ym[0].name+".png)"}:"",attrs:{id:"ym"}})])],1),t._v(" "),s("div",{staticClass:"ansBlock",staticStyle:{top:"25%",left:"45%"}},[s("div",{staticClass:"ansTitle"},[t._v("\n              中秋節\n            ")]),t._v(" "),s("draggable",{staticClass:"a_circle",attrs:{options:{group:{name:"Orders",put:!0,pull:!1},animation:300}},model:{value:t.answer.moon,callback:function(a){t.$set(t.answer,"moon",a)},expression:"answer.moon"}},[s("div",{staticClass:"hiden_cicle",style:t.answer.moon.length>0?{backgroundImage:"url(static/img/"+t.answer.moon[0].name+".png)"}:"",attrs:{id:"moon"}})])],1),t._v(" "),s("div",{staticClass:"ansBlock",staticStyle:{top:"0%",left:"70%"}},[s("div",{staticClass:"ansTitle"},[t._v("\n              端午節\n            ")]),t._v(" "),s("draggable",{staticClass:"a_circle",attrs:{options:{group:{name:"Orders",put:!0,pull:!1},animation:300}},model:{value:t.answer.dw,callback:function(a){t.$set(t.answer,"dw",a)},expression:"answer.dw"}},[s("div",{staticClass:"hiden_cicle",style:t.answer.dw.length>0?{backgroundImage:"url(static/img/"+t.answer.dw[0].name+".png)"}:"",attrs:{id:"dw"}})])],1),t._v(" "),s("div",{staticClass:"ansBlock",staticStyle:{top:"48%",left:"20%"}},[s("div",{staticClass:"ansTitle"},[t._v("\n              天穿日\n            ")]),t._v(" "),s("draggable",{staticClass:"a_circle",attrs:{options:{group:{name:"Orders",put:!0,pull:!1},animation:300}},model:{value:t.answer.tc,callback:function(a){t.$set(t.answer,"tc",a)},expression:"answer.tc"}},[s("div",{staticClass:"hiden_cicle",style:t.answer.tc.length>0?{backgroundImage:"url(static/img/"+t.answer.tc[0].name+".png)"}:"",attrs:{id:"tc"}})])],1),t._v(" "),s("div",{staticClass:"ansBlock",staticStyle:{top:"48%",left:"70%"}},[s("div",{staticClass:"ansTitle"},[t._v("\n              元宵節\n            ")]),t._v(" "),s("draggable",{staticClass:"a_circle",attrs:{options:{group:{name:"Orders",put:!0,pull:!1},animation:300}},model:{value:t.answer.yx,callback:function(a){t.$set(t.answer,"yx",a)},expression:"answer.yx"}},[s("div",{staticClass:"hiden_cicle",style:t.answer.yx.length>0?{backgroundImage:"url(static/img/"+t.answer.yx[0].name+".png)"}:"",attrs:{id:"yx"}})])],1)]),t._v(" "),s("div",{staticClass:"right-div"},[s("div",{staticClass:"q_div"},[s("draggable",{attrs:{options:{group:{name:"Orders",pull:!0},ghostClass:"ghost",animation:300},move:t.allow},model:{value:t.foodItems1,callback:function(a){t.foodItems1=a},expression:"foodItems1"}},t._l(t.foodItems1,function(t,a){return s("div",{key:a,staticClass:"q_circle",style:{backgroundImage:"url(static/img/"+t.name+".png)"}})}))],1),t._v(" "),s("div",{staticClass:"q_div"},[s("draggable",{attrs:{options:{group:{name:"Orders",pull:!0},ghostClass:"ghost",animation:300},move:t.allow},model:{value:t.foodItems2,callback:function(a){t.foodItems2=a},expression:"foodItems2"}},t._l(t.foodItems2,function(t,a){return s("div",{key:a,staticClass:"q_circle",style:{backgroundImage:"url(static/img/"+t.name+".png)"}})}))],1),t._v(" "),s("div",{staticClass:"q_div mrleft"},[s("draggable",{attrs:{options:{group:{name:"Orders",pull:!0},ghostClass:"ghost",animation:300},move:t.allow},model:{value:t.foodItems3,callback:function(a){t.foodItems3=a},expression:"foodItems3"}},t._l(t.foodItems3,function(t,a){return s("div",{key:a,staticClass:"q_circle",style:{backgroundImage:"url(static/img/"+t.name+".png)"}})}))],1)])]),t._v(" "),t.corrected?s("modal",{attrs:{width:"800px"}},[s("div",{attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"end-modal-area"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-7 end-text"},[s("img",{attrs:{src:"static/img/popup-text.png",alt:""}})]),t._v(" "),s("div",{staticClass:"col-md-5 end-pic"},[s("img",{attrs:{src:"static/img/popup-grandpa.png"}})])]),t._v(" "),s("div",{staticClass:"put-center"},[s("a",{on:{click:t.showEndVideo}},[s("img",{staticClass:"back-btn-img",attrs:{src:"static/img/btn-story.png",alt:"看故事"}})])])])])]):t._e(),t._v(" "),t.endVideo?s("modal",{attrs:{width:"100%",height:"100%"}},[s("div",{staticClass:"video",staticStyle:{height:"100%","text-align":"center"},attrs:{slot:"body"},slot:"body"},[s("div",{staticClass:"row",staticStyle:{"text-align":"left","margin-bottom":"25px"}},[s("div",{staticClass:"col-md-4"},[s("a",{staticClass:" btn-link",on:{click:t.backIndex}},[s("img",{staticClass:"back-btn-img",staticStyle:{width:"50%"},attrs:{src:"static/img/back-index.png",alt:"回首頁"}})])])]),t._v(" "),s("iframe",{staticStyle:{height:"85%"},attrs:{src:t.videoSrc,frameborder:"0",allowfullscreen:""}}),t._v(" "),s("div",{staticStyle:{"margin-bottom":"100px"}})])]):t._e()],1)},staticRenderFns:[]};var $=s("VU/8")(I,V,!1,function(t){s("LmMx")},null,null).exports;e.a.use(c.a);var O=new c.a({mode:"history",routes:[{path:"/",name:"indexPage",component:b},{path:"/storybegin",name:"openVideo",component:y},{path:"/doanswer",name:"DoAnswer",component:$}]});s("SSNS"),s("K3J8");e.a.config.productionTip=!1,new e.a({el:"#app",router:O,components:{App:r},template:"<App/>"})},SSNS:function(t,a){},Sc3d:function(t,a){},YNAw:function(t,a){},nzgx:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.311ac5d4a66fe10d1ec7.js.map