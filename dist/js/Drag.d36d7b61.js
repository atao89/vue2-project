(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Drag"],{1338:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drag-list"},[a("el-card",{attrs:{header:"拖拽列表"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:5}},[a("el-card",{attrs:{header:"待办事项"}},[a("drag-list",t._b({on:{change:function(e){return t.handleChange(e,"left")}},model:{value:t.todolist,callback:function(e){t.todolist=e},expression:"todolist"}},"drag-list",t.dragOptions,!1),[a("transition-group",{staticClass:"drag-wrapper",attrs:{tag:"ul",name:"flip-list"}},t._l(t.todolist,(function(e){return a("li",{key:e.order,staticClass:"todo-item"},[a("div",[a("svg-icon",{attrs:{"class-name":"todo-icon","icon-class":e.fixed?"fixed":"drag"},on:{click:function(a){return t.fixed(e)}}}),t._v(" "+t._s(e.name)+" ")],1),a("div",[t._v(" "+t._s(e.order)+" ")])])})),0)],1)],1)],1),a("el-col",{attrs:{span:5}},[a("el-card",{attrs:{header:"已完成事项"}},[a("drag-list",t._b({on:{change:function(e){return t.handleChange(e,"right")}},model:{value:t.complate,callback:function(e){t.complate=e},expression:"complate"}},"drag-list",t.dragOptions,!1),[a("transition-group",{staticClass:"drag-wrapper",attrs:{tag:"ul",name:"no"}},t._l(t.complate,(function(e){return a("li",{key:e.order,staticClass:"todo-item"},[a("div",[a("svg-icon",{attrs:{"class-name":"todo-icon","icon-class":e.fixed?"fixed":"drag"},on:{click:function(a){return t.fixed(e)}}}),t._v(" "+t._s(e.name)+" ")],1),a("div",[t._v(" "+t._s(e.order)+" ")])])})),0)],1)],1)],1),a("el-col",{attrs:{span:4}},[a("el-card",{attrs:{header:"操作记录"}},t._l(t.history,(function(e,r){return a("div",{key:r},[t._v(" "+t._s(e)+" ")])})),0)],1),a("el-col",{attrs:{span:5}},[a("el-card",[a("pre",{staticStyle:{background:"#f5f5f5",padding:"10px","border-radius":"5px",color:"#333"},domProps:{innerHTML:t._s(t.todolist)}})])],1),a("el-col",{attrs:{span:5}},[a("el-card",[a("pre",{staticStyle:{background:"#f5f5f5",padding:"10px","border-radius":"5px",color:"#333"},domProps:{innerHTML:t._s(t.complate)}})])],1)],1)],1)],1)},n=[],o=(a("10dd"),a("4789"),{name:"Drag",data:function(){return{todolist:[{name:"vue.js",order:1,fixed:!1},{name:"element-ui",order:2,fixed:!1},{name:"draggable",order:3,fixed:!1},{name:"vuex",order:4,fixed:!1},{name:"vue-router",order:5,fixed:!1}],complate:[{name:"react",order:6,fixed:!1}],dragOptions:{group:"description",ghostClass:"ghost"},history:[]}},methods:{onMove:function(t){var e=t.relatedContext,a=t.draggedContext,r=e.element,n=a.element;return(!r||!r.fixed)&&!n.fixed},handleChange:function(t,e){var a=t.$event,r=(t.value,e),n="";n=a.from===a.to?e:"left"===e?"right":"left",this.history.push("".concat(r," => ").concat(n," ").concat(a.oldIndex," => ").concat(a.newIndex," "))},fixed:function(t){t.fixed=!t.fixed},handleEnd:function(t,e){var a=e,r="";r=t.from===t.to?e:"left"===e?"right":"left",this.history.push("".concat(a," => ").concat(r," ").concat(t.oldIndex," => ").concat(t.newIndex," "))}}}),d=o,i=(a("f4d5"),a("cba8")),s=Object(i["a"])(d,r,n,!1,null,"411d2be0",null);e["default"]=s.exports},c819:function(t,e,a){},f4d5:function(t,e,a){"use strict";a("c819")}}]);
//# sourceMappingURL=Drag.d36d7b61.js.map