(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{394:function(e,t,n){},395:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},396:function(e,t,n){var r=n(34),s="["+n(395)+"]",i=RegExp("^"+s+s+"*"),a=RegExp(s+s+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},397:function(e,t,n){var r=n(8),s=n(132);e.exports=function(e,t,n){var i,a;return s&&"function"==typeof(i=t.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&s(e,a),e}},399:function(e,t,n){},400:function(e,t,n){},401:function(e,t,n){},406:function(e,t,n){"use strict";var r=n(394);n.n(r).a},407:function(e,t,n){"use strict";var r=n(3),s=n(396).trim;r({target:"String",proto:!0,forced:n(414)("trim")},{trim:function(){return s(this)}})},409:function(e,t,n){"use strict";n(100);var r=n(43),s=n(2),i={name:"NewsletterForm",setup:function(e,t){var n=t.root,i=t.refs,a=Object(s.l)(null),o=Object(s.l)({}),l="email-".concat(Math.floor(1e3*Math.random()));function u(){return(u=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i.emailField.validity.valid){e.next=3;break}throw new Error(i.emailField.validationMessage);case 3:i.newsletterForm.submit(),e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),i.emailField.focus(),n.$announcer.assertive(e.t0.message),o.value={result:"error",msg:e.t0.message};case 11:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(s.n)(a,(function(e){""===e&&(o.value={})})),{email:a,message:o,emailLabel:l,submitNewsletter:function(){return u.apply(this,arguments)}}}},a=(n(406),n(24)),o=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{ref:"newsletterForm",staticClass:"flex flex-wrap newsletter-form",attrs:{novalidate:"",method:"POST",action:e.$themeConfig.mailchimp},on:{submit:function(t){return t.preventDefault(),e.submitNewsletter(t)}}},[n("label",{staticClass:"flex flex-wrap flex-1",attrs:{for:e.emailLabel}},[n("span",{staticClass:"block w-full pb-2 text-base font-bold"},[e._v(e._s(e.$themeLocaleConfig.newsletter.label))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],ref:"emailField",staticClass:"w-full p-3 text-xl border border-solid rounded-md outline-none bg-main newsletter-form-input c-border-color hover:border-accent-primary focus:border-accent-primary",attrs:{id:e.emailLabel,name:"EMAIL",type:"email",required:"",autocomplete:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),e._t("button",[n("button",{staticClass:"self-end -ml-2 text-black btn btn-accent newsletter-form-btn",attrs:{type:"submit"}},[e._v("\n      "+e._s(e.$themeLocaleConfig.newsletter.textButton)+"\n    ")])]),e._v(" "),n("span",{staticClass:"inline-block w-full mt-4 text-sm form-msg",class:{"form-msg-success":"success"===e.message.result,"form-msg-error":"error"===e.message.result}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.message.result,expression:"message.result"}],domProps:{textContent:e._s(e.message.msg)}})])],2)}),[],!1,null,null,null);t.a=o.exports},412:function(e,t,n){"use strict";var r=n(399);n.n(r).a},413:function(e,t,n){"use strict";var r=n(228),s=n(15),i=n(25),a=n(34),o=n(229),l=n(230);r("match",1,(function(e,t,n){return[function(t){var n=a(this),r=null==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var a=s(e),u=String(this);if(!a.global)return l(a,u);var c=a.unicode;a.lastIndex=0;for(var f,h=[],d=0;null!==(f=l(a,u));){var p=String(f[0]);h[d]=p,""===p&&(a.lastIndex=o(u,i(a.lastIndex),c)),d++}return 0===d?null:h}]}))},414:function(e,t,n){var r=n(4),s=n(395);e.exports=function(e){return r((function(){return!!s[e]()||"​᠎"!="​᠎"[e]()||s[e].name!==e}))}},415:function(e,t,n){var r=n(9),s=n(6),i=n(224),a=n(397),o=n(13).f,l=n(97).f,u=n(226),c=n(137),f=n(232),h=n(29),d=n(4),p=n(72).set,m=n(416),g=n(5)("match"),v=s.RegExp,b=v.prototype,x=/a/g,y=/a/g,w=new v(x)!==x,_=f.UNSUPPORTED_Y;if(r&&i("RegExp",!w||_||d((function(){return y[g]=!1,v(x)!=x||v(y)==y||"/a/i"!=v(x,"i")})))){for(var C=function(e,t){var n,r=this instanceof C,s=u(e),i=void 0===t;if(!r&&s&&e.constructor===C&&i)return e;w?s&&!i&&(e=e.source):e instanceof C&&(i&&(t=c.call(e)),e=e.source),_&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=a(w?new v(e,t):v(e,t),r?this:b,C);return _&&n&&p(o,{sticky:n}),o},k=function(e){e in C||o(C,e,{configurable:!0,get:function(){return v[e]},set:function(t){v[e]=t}})},S=l(v),$=0;S.length>$;)k(S[$++]);b.constructor=C,C.prototype=b,h(s,"RegExp",C)}m("RegExp")},416:function(e,t,n){"use strict";var r=n(49),s=n(13),i=n(5),a=n(9),o=i("species");e.exports=function(e){var t=r(e),n=s.f;a&&t&&!t[o]&&n(t,o,{configurable:!0,get:function(){return this}})}},417:function(e,t,n){"use strict";var r,s=n(3),i=n(35).f,a=n(25),o=n(135),l=n(34),u=n(136),c=n(48),f="".endsWith,h=Math.min,d=u("endsWith");s({target:"String",proto:!0,forced:!!(c||d||(r=i(String.prototype,"endsWith"),!r||r.writable))&&!d},{endsWith:function(e){var t=String(l(this));o(e);var n=arguments.length>1?arguments[1]:void 0,r=a(t.length),s=void 0===n?r:h(a(n),r),i=String(e);return f?f.call(t,i,s):t.slice(s-i.length,s)===i}})},418:function(e,t,n){"use strict";var r=n(228),s=n(226),i=n(15),a=n(34),o=n(419),l=n(229),u=n(25),c=n(230),f=n(101),h=n(4),d=[].push,p=Math.min,m=!h((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!s(e))return t.call(r,e,i);for(var o,l,u,c=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=new RegExp(e.source,h+"g");(o=f.call(m,r))&&!((l=m.lastIndex)>p&&(c.push(r.slice(p,o.index)),o.length>1&&o.index<r.length&&d.apply(c,o.slice(1)),u=o[0].length,p=l,c.length>=i));)m.lastIndex===o.index&&m.lastIndex++;return p===r.length?!u&&m.test("")||c.push(""):c.push(r.slice(p)),c.length>i?c.slice(0,i):c}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var s=a(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,s,n):r.call(String(s),t,n)},function(e,s){var a=n(r,e,this,s,r!==t);if(a.done)return a.value;var f=i(e),h=String(this),d=o(f,RegExp),g=f.unicode,v=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(m?"y":"g"),b=new d(m?f:"^(?:"+f.source+")",v),x=void 0===s?4294967295:s>>>0;if(0===x)return[];if(0===h.length)return null===c(b,h)?[h]:[];for(var y=0,w=0,_=[];w<h.length;){b.lastIndex=m?w:0;var C,k=c(b,m?h:h.slice(w));if(null===k||(C=p(u(b.lastIndex+(m?0:w)),h.length))===y)w=l(h,w,g);else{if(_.push(h.slice(y,w)),_.length===x)return _;for(var S=1;S<=k.length-1;S++)if(_.push(k[S]),_.length===x)return _;w=y=C}}return _.push(h.slice(y)),_}]}),!m)},419:function(e,t,n){var r=n(15),s=n(50),i=n(5)("species");e.exports=function(e,t){var n,a=r(e).constructor;return void 0===a||null==(n=r(a)[i])?t:s(n)}},420:function(e,t,n){"use strict";var r=n(400);n.n(r).a},421:function(e,t,n){"use strict";var r=n(401);n.n(r).a},447:function(e,t,n){"use strict";var r=n(2),s={name:"Logo"},i=n(24),a=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("RouterLink",{staticClass:"inline-flex p-3 pt-2 logo bg-main",attrs:{to:this.$localePath}},[t("img",{attrs:{src:"/vue-a11y-logo.svg",alt:"Vue A11y logo"}}),this._v(" "),t("span",{staticClass:"font-bold sr-only text-22 lg:ml-2 lg:not-sr-only "},[this._v("Vue A11y")])])}),[],!1,null,null,null).exports,o={name:"TheNavigation"},l=(n(412),Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"the-nav",attrs:{"aria-label":e.$themeLocaleConfig.a11y.landmarks.nav.main}},[n("ul",{staticClass:"flex items-center"},[e._l(e.$themeLocaleConfig.nav,(function(t){return n("li",{key:t.text,staticClass:"mr-1"},[n("RouterLink",{attrs:{to:t.link},scopedSlots:e._u([{key:"default",fn:function(r){var s=r.href,i=(r.route,r.navigate),a=r.isActive;return[n("a",{staticClass:"px-3 py-3 border-b-4 border-transparent border-solid the-nav-link hover:border-accent-primary",class:{"active border-accent-primary":a&&0===e.$route.path.indexOf(t.link)},attrs:{href:s,"aria-current":a&&0===e.$route.path.indexOf(t.link)?"page":null},on:{click:i}},[e._v("\n          "+e._s(t.text)+"\n        ")])]}}],null,!0)})],1)})),e._v(" "),n("li",[n("ExternalLink",{staticClass:"px-3 py-3 border-b-4 border-transparent border-solid the-nav-link hover:border-accent-primary",attrs:{href:"https://github.com/vue-a11y",label:"Github"}})],1)],2)])}),[],!1,null,null,null).exports),u={name:"TheHeader",components:{Logo:a,SearchBox:n(449).a,TheNavigation:l},props:{bgSidebar:{type:Boolean,default:!1},hasSidebar:{type:Boolean,default:!1},isSidebarOpen:{type:Boolean,default:!1}},setup:function(e,t){var n=t.root,s=t.emit,i=n.$themeLocaleConfig.a11y.labels,a=i.menuButton?Object(r.a)((function(){return e.isSidebarOpen?i.menuButton.close:i.menuButton.open})):"Menu sidebar button";return Object(r.n)((function(){return n.$route.fullPath}),(function(){return e.isSidebarOpen&&s("toggle-sidebar")})),{menuButtonAriaLabel:a}}},c=(n(421),Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"relative z-10 w-full border-b header c-border-color",attrs:{itemscope:"",itemtype:"https://schema.org/Organization"}},[n("meta",{attrs:{itemprop:"name",content:e.$siteTitle}}),e._v(" "),e._l(e.$themeConfig.social,(function(e){return n("meta",{key:"meta-rich-"+e.name,attrs:{itemprop:"sameAs",content:e.link}})})),e._v(" "),n("div",{staticClass:"flex flex-wrap w-full px-0"},[n("div",{staticClass:"flex items-center justify-end w-1/5 h-16 md:pl-0 md:w-1/12 lg:w-3/12",class:{"header-logo--bg":e.bgSidebar,"container-layout-pl lg:w-2/7":e.hasSidebar}},[n("div",{staticClass:"w-full"},[n("Logo")],1)]),e._v(" "),n("div",{staticClass:"flex items-center flex-grow-0 w-3/5 h-16 md:pl-4 lg:pl-0 md:pr-0 md:w-auto md:flex-grow",class:{"w-4/5":!e.hasSidebar}},[n("form",{staticClass:"relative w-full lg:pl-10"},[n("vp-icon",{staticClass:"absolute z-20 ml-3 pin-c-y",attrs:{name:"search"}}),e._v(" "),n("SearchBox",{staticClass:"w-full",attrs:{role:"search"}})],1)]),e._v(" "),e.hasSidebar?n("div",{staticClass:"flex items-center justify-end w-1/5 md:hidden"},[n("button",{staticClass:"flex px-4 py-3 mr-1 md:hidden",attrs:{type:"button","aria-controls":"s-sidebar-wrapper","aria-label":e.menuButtonAriaLabel,"aria-expanded":e.isSidebarOpen.toString()},on:{click:function(t){return e.$emit("toggle-sidebar")}}},[n("vp-icon",{attrs:{name:e.isSidebarOpen?"close":"menu",size:"23"}})],1)]):e._e(),e._v(" "),n("div",{staticClass:"flex items-center h-16 header-nav md:justify-end md:flex-grow",class:{"container-layout-pr":e.hasSidebar}},[n("TheNavigation")],1)])],2)}),[],!1,null,null,null));t.a=c.exports},449:function(e,t,n){"use strict";n(28),n(227),n(225),n(98),n(69),n(231),n(413),n(407),n(233),n(68),n(244),n(415),n(138),n(417),n(96),n(418);var r=n(241),s=n.n(r),i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=s()(t,"title","");return s()(t,"frontmatter.tags")&&(r+=" ".concat(t.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),a(e,r)},a=function(e,t){var n=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=new RegExp("[^\0-]"),s=e.split(/\s+/g).map((function(e){return e.trim()})).filter((function(e){return!!e}));if(r.test(e))return s.some((function(e){return t.toLowerCase().indexOf(e)>-1}));var i=e.endsWith(" ");return new RegExp(s.map((function(e,t){return s.length!==t+1||i?"(?=.*\\b".concat(n(e),"\\b)"):"(?=.*\\b".concat(n(e),")")})).join("")+".+","gi").test(t)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var e=this.query.trim().toLowerCase();if(e){for(var t=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||10,r=this.$localePath,s=[],a=0;a<t.length&&!(s.length>=n);a++){var o=t[a];if(this.getPageLocalePath(o)===r&&this.isSearchable(o))if(i(e,o))s.push(o);else if(o.headers)for(var l=0;l<o.headers.length&&!(s.length>=n);l++){var u=o.headers[l];u.title&&i(e,o,u.title)&&s.push(Object.assign({},o,{path:o.path+"#"+u.slug,header:u}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(e){for(var t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable:function(e){var t=null;return null===t||(t=Array.isArray(t)?t:new Array(t)).filter((function(t){return e.path.match(t)})).length>0},onHotkey:function(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus:function(e){this.focusIndex=e},unfocus:function(){this.focusIndex=-1}}},l=(n(420),n(24)),u=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown(t)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===e.focusIndex},on:{mousedown:function(t){return e.go(r)},mouseenter:function(t){return e.focus(r)}}},[n("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[n("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?n("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.a=u.exports},450:function(e,t,n){"use strict";var r={name:"TheMain"},s=n(24),i=Object(s.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{attrs:{id:"main"}},[t("span",{attrs:{id:"page-top"}}),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);t.a=i.exports},477:function(e,t,n){"use strict";n.r(t);var r={name:"TheFooter",components:{NewsletterForm:n(409).a}},s=n(24),i=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"relative z-10 footer"},[n("div",{staticClass:"flex justify-center w-full px-4 py-24 border border-solid lg:py-32 bg-primary c-border-color"},[n("div",{staticClass:"max-w-md"},[n("div",{staticClass:"flex justify-center"},[n("vp-icon",{attrs:{name:"send",size:"1.6rem"}}),e._v(" "),n("span",{staticClass:"ml-2 text-3xl font-bold leading-7"},[e._v(e._s(e.$themeLocaleConfig.newsletter.title))])],1),e._v(" "),n("p",{staticClass:"mt-2 text-center",attrs:{id:"a-newsletter-description"}},[e._v("\n        "+e._s(e.$themeLocaleConfig.newsletter.description)+"\n      ")]),e._v(" "),n("NewsletterForm",{staticClass:"mt-6"}),e._v(" "),n("ul",{staticClass:"flex justify-center mt-16"},e._l(e.$themeConfig.social,(function(t){return n("li",{key:"footer-sn-"+t.icon,staticClass:"last:ml-4"},[n("a",{staticClass:"block p-5 border border-solid rounded-full c-border-color bg-main hover:border-accent-primary",attrs:{href:t.link,target:"_blank",rel:"me noopener","aria-label":t.name+" Vue A11y ("+e.$themeLocaleConfig.externalLinkText+")"}},[n("vp-icon",{staticStyle:{color:"var(--color-social-icons)"},attrs:{name:t.icon,size:"1.5rem"}})],1)])})),0)],1)]),e._v(" "),e._m(0)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"w-full py-6 text-center"},[t("span",{staticClass:"text-sm"},[this._v("MIT Licensed | Copyright © 2020")])])}],!1,null,null,null).exports,a=n(447),o=n(450),l={name:"Full",components:{TheFooter:i,TheHeader:a.a,TheMain:o.a}},u=Object(s.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"full-layout"},[t("TheHeader"),this._v(" "),t("TheMain",[this._t("default",[t(this.$frontmatter.view||"Home",{tag:"component"})])],2),this._v(" "),t("TheFooter")],1)}),[],!1,null,null,null);t.default=u.exports}}]);