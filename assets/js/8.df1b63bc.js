(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{322:function(t,e,a){},334:function(t,e,a){"use strict";var s=a(322);a.n(s).a},337:function(t,e,a){"use strict";a(86);var s=a(37),n=a(2),r={name:"NewsletterForm",setup:function(t,e){var a=e.root,r=e.refs,i=Object(n.k)(null),l=Object(n.k)({}),o="email-".concat(Math.floor(1e3*Math.random()));function c(){return(c=Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,r.emailField.validity.valid){t.next=3;break}throw new Error(r.emailField.validationMessage);case 3:r.newsletterForm.submit(),t.next=11;break;case 6:t.prev=6,t.t0=t.catch(0),r.emailField.focus(),a.$announcer.assertive(t.t0.message),l.value={result:"error",msg:t.t0.message};case 11:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}return Object(n.l)(i,(function(t){""===t&&(l.value={})})),{email:i,message:l,emailLabel:o,submitNewsletter:function(){return c.apply(this,arguments)}}}},i=(a(334),a(21)),l=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{ref:"newsletterForm",staticClass:"flex flex-wrap newsletter-form",attrs:{novalidate:"",method:"POST",action:t.$themeConfig.mailchimp},on:{submit:function(e){return e.preventDefault(),t.submitNewsletter(e)}}},[a("label",{staticClass:"flex flex-1",attrs:{for:t.emailLabel}},[a("span",{staticClass:"sr-only"},[t._v(t._s(t.$themeLocaleConfig.a11y.newsletter.placeholder))]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],ref:"emailField",staticClass:"w-full p-4 border border-solid rounded-md outline-none newsletter-form-input c-border-color hover:border-accent focus:border-accent",attrs:{id:t.emailLabel,name:"EMAIL",type:"email",required:"",autocomplete:"email",placeholder:t.$themeLocaleConfig.a11y.newsletter.placeholder},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),t._t("button",[a("button",{staticClass:"-ml-2 text-black btn btn-accent newsletter-form-btn",attrs:{type:"submit"}},[t._v("\n      "+t._s(t.$themeLocaleConfig.newsletter.textButton)+"\n    ")])]),t._v(" "),a("span",{staticClass:"inline-block w-full mt-4 text-sm form-msg",class:{"form-msg-success":"success"===t.message.result,"form-msg-error":"error"===t.message.result}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.message.result,expression:"message.result"}],domProps:{textContent:t._s(t.message.msg)}})])],2)}),[],!1,null,null,null);e.a=l.exports},338:function(t,e,a){"use strict";a(56),a(57),a(82);var s=a(2),n=a(111),r=a(26),i={name:"TableOfContents",props:{title:{type:String,default:"On this page"},titleTag:{type:String,default:"h2"}},setup:function(t,e){var a=e.root,i=Object(n.b)(".header-anchor").targetIntercepted,l=Object(s.a)((function(){return a.$page.headers?a.$page.headers.map((function(t){return{title:t.title,hash:t.slug}})):[]}));return Object(s.h)((function(){if(a.$route.hash){var t=document.getElementById(a.$route.hash.substring(1));t&&Object(r.c)(t)}})),Object(s.l)(i,(function(t){a.$route.hash&&a.$route.hash===t.hash||(a.$vuepress.$set("disableScrollBehavior",!0),a.$router.replace({path:a.$route.path,hash:t.hash},(function(){a.$nextTick((function(){return a.$vuepress.$set("disableScrollBehavior",!1)}))})))})),{headers:l}}},l=a(21),o=Object(l.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{directives:[{name:"show",rawName:"v-show",value:t.headers.length,expression:"headers.length"}],staticClass:"toc",attrs:{"aria-label":t.title}},[a(t.titleTag,{tag:"component",staticClass:"toc-title",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("ul",{staticClass:"toc-list"},t._l(t.headers,(function(e){return a("li",{key:e.slug,staticClass:"toc-list-item"},[a("RouterLink",{attrs:{to:{path:t.$route.path,hash:e.hash}},scopedSlots:t._u([{key:"default",fn:function(s){var n=s.href,r=(s.route,s.isExactActive);return[a("a",{class:{active:r},attrs:{href:n}},[t._v("\n          "+t._s(e.title)+"\n        ")])]}}],null,!0)})],1)})),0)],1)}),[],!1,null,null,null);e.a=o.exports},370:function(t,e,a){},379:function(t,e,a){"use strict";var s=a(337),n=a(338),r={name:"RightNavigation",components:{NewsletterForm:s.a,TableOfContents:n.a}},i=a(21),l=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sticky top-0 flex hidden h-full"},[t._t("top"),t._v(" "),0!==t.$frontmatter.toc?a("TableOfContents",{key:t.$route.path,staticClass:"pt-12",attrs:{title:t.$themeLocaleConfig.toc.title,"title-tag":"span"}}):t._e(),t._v(" "),t._t("default"),t._v(" "),a("div",{staticClass:"pl-4 mt-16"},[a("span",{staticClass:"block mb-2 text-lg font-bold"},[t._v("Newsletter")]),t._v(" "),a("NewsletterForm",[a("button",{staticClass:"flex items-center justify-center w-12 px-2 ml-2",attrs:{slot:"button",type:"submit"},slot:"button"},[a("span",{staticClass:"sr-only"},[t._v(t._s(t.$themeLocaleConfig.newsletter.textButton))]),t._v(" "),a("vp-icon",{attrs:{name:"send",size:"30"}})],1)])],1),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.a=l.exports},390:function(t,e,a){var s=a(3),n=a(391);s({target:"Date",proto:!0,forced:Date.prototype.toISOString!==n},{toISOString:n})},391:function(t,e,a){"use strict";var s=a(4),n=a(392).start,r=Math.abs,i=Date.prototype,l=i.getTime,o=i.toISOString;t.exports=s((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-50000000000001))}))||!s((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(l.call(this)))throw RangeError("Invalid time value");var t=this.getUTCFullYear(),e=this.getUTCMilliseconds(),a=t<0?"-":t>9999?"+":"";return a+n(r(t),a?6:4,0)+"-"+n(this.getUTCMonth()+1,2,0)+"-"+n(this.getUTCDate(),2,0)+"T"+n(this.getUTCHours(),2,0)+":"+n(this.getUTCMinutes(),2,0)+":"+n(this.getUTCSeconds(),2,0)+"."+n(e,3,0)+"Z"}:o},392:function(t,e,a){var s=a(18),n=a(393),r=a(32),i=Math.ceil,l=function(t){return function(e,a,l){var o,c,u=String(r(e)),m=u.length,f=void 0===l?" ":String(l),p=s(a);return p<=m||""==f?u:(o=p-m,(c=n.call(f,i(o/f.length))).length>o&&(c=c.slice(0,o)),t?u+c:c+u)}};t.exports={start:l(!1),end:l(!0)}},393:function(t,e,a){"use strict";var s=a(61),n=a(32);t.exports="".repeat||function(t){var e=String(n(this)),a="",r=s(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(a+=e);return a}},394:function(t,e,a){"use strict";var s=a(370);a.n(s).a},407:function(t,e,a){"use strict";a.r(e);a(126),a(390),a(59);var s=a(2),n={name:"PageEdit",setup:function(t,e){var a=e.root,n=Object(s.a)((function(){return"https://github.com/".concat(a.$themeConfig.repo,"/edit/").concat(a.$themeConfig.docsBranch||"master","/").concat(a.$themeConfig.docsDir||"docs","/").concat(a.$page.relativePath)}));return{datetime:new Date(a.$page.lastUpdated).toISOString(),editLink:n}}},r=a(21),i={name:"Page",components:{PageEdit:Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-edit",attrs:{"aria-label":"page"}},[t.$themeConfig.editLinks?a("ExternalLink",{staticClass:"mb-4 border-b-2 border-accent",attrs:{href:t.editLink,label:t.$themeLocaleConfig.editLinkText}}):t._e(),t._v(" "),t.$themeConfig.lastUpdated?a("div",{staticClass:"last-update"},[a("span",{staticClass:"font-bold"},[t._v("\n      "+t._s(t.$themeLocaleConfig.lastUpdatedText||"Last update")+":\n    ")]),t._v(" "),a("p",{staticClass:"inline-block uc-first"},[a("time",{staticClass:"uc-first",attrs:{datetime:t.datetime}},[t._v("\n        "+t._s(t.$page.lastUpdated)+"\n      ")])])]):t._e()],1)}),[],!1,null,null,null).exports,RightNavigation:a(379).a}},l=(a(394),Object(r.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full"},[e("article",{staticClass:"flex justify-between w-full px-6 pt-6 md:mt-4 lg:px-10 xl:pr-0"},[e("div",{staticClass:"page-content"},[e("Content"),this._v(" "),e("PageEdit",{staticClass:"flex flex-wrap justify-between w-full py-6 pb-24 border-t c-border-color md:mt-4"})],1),this._v(" "),e("RightNavigation",{staticClass:"page-float-toc xl:block"})],1)])}),[],!1,null,null,null));e.default=l.exports}}]);