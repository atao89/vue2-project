(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["I18n"],{"29bb":function(s,t,n){"use strict";n.r(t);var a=function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"i18n"},[n("article",{staticClass:"_2rhmJa"},[n("h3",[s._v("1.安装yarn add vue-i18n")]),n("br"),n("h3",[s._v("2.配置main.js文件")]),s._m(0),n("br"),n("h3",[s._v("3.增加lang文件，比如cn.js")]),s._m(1),n("br"),n("h3",[s._v("4.使用，任何一个组件里，直接格式化数据")]),n("div",{staticClass:"_2Uzcx_"},[n("pre",{staticClass:"line-numbers language-bash"},[n("code",{staticClass:"  language-bash"},[s._v("<div>"+s._s(s.$t("test"))+"</div>\n"),s._m(2)])])]),n("br"),n("h3",[s._v("5.后面即可更改main里面的locale，实现国际化语言变更")]),s._m(3),s._m(4)])])},e=[function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"_2Uzcx_"},[n("pre",{staticClass:"line-numbers language-jsx"},[n("code",{staticClass:"  language-jsx"},[n("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" VueI18n "),n("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'vue-i18n'")]),s._v("    "),n("span",{staticClass:"token comment"},[s._v("// 引入VueI18n ")]),s._v("\n\n"),n("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v(" cn "),n("span",{staticClass:"token punctuation"},[s._v("}")]),s._v(" "),n("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'./static/lang/cn'")]),s._v("    "),n("span",{staticClass:"token comment"},[s._v("// 引入lang文件")]),s._v("\n"),n("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v(" en "),n("span",{staticClass:"token punctuation"},[s._v("}")]),s._v(" "),n("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'./static/lang/en'")]),s._v("\n\n"),n("span",{staticClass:"token keyword"},[s._v("const")]),s._v(" i18n "),n("span",{staticClass:"token operator"},[s._v("=")]),s._v(" "),n("span",{staticClass:"token keyword"},[s._v("new")]),s._v(" "),n("span",{staticClass:"token class-name"},[s._v("VueI18n")]),n("span",{staticClass:"token punctuation"},[s._v("(")]),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v("\n  locale"),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'en'")]),n("span",{staticClass:"token punctuation"},[s._v(",")]),s._v("   "),n("span",{staticClass:"token comment"},[s._v("// 设置语言")]),s._v("\n  messages"),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v("\n    cn"),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v(" "),n("span",{staticClass:"token operator"},[s._v("...")]),s._v("cn "),n("span",{staticClass:"token punctuation"},[s._v("}")]),n("span",{staticClass:"token punctuation"},[s._v(",")]),s._v("\n    en"),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v(" "),n("span",{staticClass:"token operator"},[s._v("...")]),s._v("en "),n("span",{staticClass:"token punctuation"},[s._v("}")]),s._v("\n  "),n("span",{staticClass:"token punctuation"},[s._v("}")]),s._v("\n"),n("span",{staticClass:"token punctuation"},[s._v("}")]),n("span",{staticClass:"token punctuation"},[s._v(")")]),s._v("\n\nVue"),n("span",{staticClass:"token punctuation"},[s._v(".")]),n("span",{staticClass:"token function"},[s._v("use")]),n("span",{staticClass:"token punctuation"},[s._v("(")]),s._v("VueI18n"),n("span",{staticClass:"token punctuation"},[s._v(")")]),s._v("     "),n("span",{staticClass:"token comment"},[s._v("// 使用VueI18n")]),s._v("\n\n"),n("span",{staticClass:"token keyword"},[s._v("new")]),s._v(" "),n("span",{staticClass:"token class-name"},[s._v("Vue")]),n("span",{staticClass:"token punctuation"},[s._v("(")]),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v("\n  router"),n("span",{staticClass:"token punctuation"},[s._v(",")]),s._v("\n  store"),n("span",{staticClass:"token punctuation"},[s._v(",")]),s._v("\n  i18n"),n("span",{staticClass:"token punctuation"},[s._v(",")]),s._v("     "),n("span",{staticClass:"token comment"},[s._v("// 挂载")]),s._v("\n  "),n("span",{staticClass:"token function-variable function"},[s._v("render")]),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" "),n("span",{staticClass:"token parameter"},[s._v("h")]),s._v(" "),n("span",{staticClass:"token operator"},[s._v("=>")]),s._v(" "),n("span",{staticClass:"token function"},[s._v("h")]),n("span",{staticClass:"token punctuation"},[s._v("(")]),s._v("App"),n("span",{staticClass:"token punctuation"},[s._v(")")]),s._v("\n"),n("span",{staticClass:"token punctuation"},[s._v("}")]),n("span",{staticClass:"token punctuation"},[s._v(")")]),n("span",{staticClass:"token punctuation"},[s._v(".")]),n("span",{staticClass:"token function"},[s._v("$mount")]),n("span",{staticClass:"token punctuation"},[s._v("(")]),n("span",{staticClass:"token string"},[s._v("'#app'")]),n("span",{staticClass:"token punctuation"},[s._v(")")]),s._v("\n"),n("span",{staticClass:"line-numbers-rows",attrs:{"aria-hidden":"true"}},[n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span")])])])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"_2Uzcx_"},[n("pre",{staticClass:"line-numbers language-dart"},[n("code",{staticClass:"  language-dart"},[n("span",{staticClass:"token keyword"},[s._v("export")]),s._v(" "),n("span",{staticClass:"token keyword"},[s._v("const")]),s._v(" cn "),n("span",{staticClass:"token operator"},[s._v("=")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v("\n  test"),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'测试'")]),n("span",{staticClass:"token punctuation"},[s._v(",")]),s._v("\n  test1"),n("span",{staticClass:"token punctuation"},[s._v(":")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'测试1'")]),s._v("\n"),n("span",{staticClass:"token punctuation"},[s._v("}")]),s._v("\n"),n("span",{staticClass:"line-numbers-rows",attrs:{"aria-hidden":"true"}},[n("span"),n("span"),n("span"),n("span")])])])])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("span",{staticClass:"line-numbers-rows",attrs:{"aria-hidden":"true"}},[n("span")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("p",[s._v(" 每个组件都包含一个引用为 $i18n 属性的 VueI18n 实例，该实例也可用于更改语言环境"),n("br"),s._v(" 如中英切换的方法，方法执行，页面会跟着变更 ")])},function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"_2Uzcx_"},[n("pre",{staticClass:"line-numbers language-kotlin"},[n("code",{staticClass:"  language-kotlin"},[n("span",{staticClass:"token function"},[s._v("changeLang")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("(")]),n("span",{staticClass:"token punctuation"},[s._v(")")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v("\n      "),n("span",{staticClass:"token keyword"},[s._v("const")]),s._v(" temp "),n("span",{staticClass:"token operator"},[s._v("=")]),s._v(" "),n("span",{staticClass:"token keyword"},[s._v("this")]),n("span",{staticClass:"token punctuation"},[s._v(".")]),s._v("$i18n"),n("span",{staticClass:"token punctuation"},[s._v(".")]),s._v("locale\n      "),n("span",{staticClass:"token keyword"},[s._v("if")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("(")]),s._v("temp "),n("span",{staticClass:"token operator"},[s._v("===")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'cn'")]),n("span",{staticClass:"token punctuation"},[s._v(")")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v("\n        "),n("span",{staticClass:"token keyword"},[s._v("this")]),n("span",{staticClass:"token punctuation"},[s._v(".")]),s._v("$i18n"),n("span",{staticClass:"token punctuation"},[s._v(".")]),s._v("locale "),n("span",{staticClass:"token operator"},[s._v("=")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'en'")]),s._v("\n      "),n("span",{staticClass:"token punctuation"},[s._v("}")]),s._v(" "),n("span",{staticClass:"token keyword"},[s._v("else")]),s._v(" "),n("span",{staticClass:"token punctuation"},[s._v("{")]),s._v("\n        "),n("span",{staticClass:"token keyword"},[s._v("this")]),n("span",{staticClass:"token punctuation"},[s._v(".")]),s._v("$i18n"),n("span",{staticClass:"token punctuation"},[s._v(".")]),s._v("locale "),n("span",{staticClass:"token operator"},[s._v("=")]),s._v(" "),n("span",{staticClass:"token string"},[s._v("'cn'")]),s._v("\n      "),n("span",{staticClass:"token punctuation"},[s._v("}")]),s._v("\n    "),n("span",{staticClass:"token punctuation"},[s._v("}")]),s._v("\n"),n("span",{staticClass:"line-numbers-rows",attrs:{"aria-hidden":"true"}},[n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span"),n("span")])])])])}],i={name:"i18n"},o=i,c=(n("d361"),n("cba8")),p=Object(c["a"])(o,a,e,!1,null,"085aebea",null);t["default"]=p.exports},d361:function(s,t,n){"use strict";n("f036")},f036:function(s,t,n){}}]);
//# sourceMappingURL=I18n.132f4d7d.js.map