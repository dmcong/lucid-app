(globalThis.webpackChunklucid=globalThis.webpackChunklucid||[]).push([[269],{19068:(e,t,r)=>{"use strict";r.d(t,{O:()=>n});r(92950);var n={"logo-telegram":r.p+"static/media/icon-telegram.2450489f40d03000fe65fc1c6f238d85.svg"}},578:(e,t,r)=>{"use strict";var n=r(61250);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},43091:(e,t,r)=>{e.exports=r(578)()},61250:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21111:e=>{var t="undefined"!==typeof Element,r="function"===typeof Map,n="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var u,c,s,f;if(Array.isArray(e)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(!i(e[c],a[c]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;for(f=e.entries();!(c=f.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(f=e.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((u=e.length)!=a.length)return!1;for(c=u;0!==c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((u=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=u;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(t&&e instanceof Element)return!1;for(c=u;0!==c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!e.$$typeof)&&!i(e[s[c]],a[s[c]]))return!1;return!0}return e!==e&&a!==a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},6863:(e,t,r)=>{"use strict";r.d(t,{q:()=>le});var n=r(43091),o=r.n(n),i=r(64100),a=r.n(i),u=r(21111),c=r.n(u),s=r(92950),f=r.n(s),l=r(25882),p=r.n(l),d="bodyAttributes",y="htmlAttributes",h="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},m=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",g="href",v="http-equiv",w="innerHTML",O="itemprop",A="name",C="property",S="rel",E="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},k="defaultTitle",x="defer",I="encodeSpecialCharacters",L="onChangeClientState",M="titleTemplate",R=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),_=[b.NOSCRIPT,b.SCRIPT,b.STYLE],N="data-react-helmet",D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},U=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=G(e,b.TITLE),r=G(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=G(e,k);return t||n||void 0},K=function(e){return G(e,L)||function(){}},W=function(e,t){return t.filter((function(t){return"undefined"!==typeof t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return"undefined"!==typeof e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||("undefined"!==typeof t[e]&&ee("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===t.indexOf(c)||r===S&&"canonical"===e[r].toLowerCase()||c===S&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(u)||u!==w&&u!==T&&u!==O||(r=u)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=p()({},n[u],o[u]);n[u]=c}return e}),[]).reverse()},G=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},J=function(){var e=Date.now();return function(t){var r=Date.now();r-e>16?(e=r,t(r)):setTimeout((function(){J(t)}),0)}}(),Q=function(e){return clearTimeout(e)},X="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,Z="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Q:r.g.cancelAnimationFrame||Q,ee=function(e){return console&&"function"===typeof console.warn&&console.warn(e)},te=null,re=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,l=e.title,p=e.titleAttributes;ie(b.BODY,n),ie(b.HTML,o),oe(l,p);var d={baseTag:ae(b.BASE,r),linkTags:ae(b.LINK,i),metaTags:ae(b.META,a),noscriptTags:ae(b.NOSCRIPT,u),scriptTags:ae(b.SCRIPT,s),styleTags:ae(b.STYLE,f)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),c(e,y,h)},ne=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){"undefined"!==typeof e&&document.title!==e&&(document.title=ne(e)),ie(b.TITLE,t)},ie=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(N),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var c=a[u],s=t[c]||"";r.getAttribute(c)!==s&&r.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)r.removeAttribute(i[l]);o.length===i.length?r.removeAttribute(N):r.getAttribute(N)!==a.join(",")&&r.setAttribute(N,a.join(","))}},ae=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===w)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var u="undefined"===typeof t[n]?"":t[n];r.setAttribute(n,u)}r.setAttribute(N,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n="undefined"!==typeof e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ce=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},se=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return function(e,t,r){var n,o=((n={key:t})[N]=!0,n),i=ce(r,o);return[f().createElement(b.TITLE,i,t)]}(0,t.title,t.titleAttributes)},toString:function(){return function(e,t,r,n){var o=ue(r),i=ne(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+U(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+U(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case d:case y:return{toComponent:function(){return ce(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[N]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===w||r===T){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),f().createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===w||e===T)})).reduce((function(e,t){var o="undefined"===typeof n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===_.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,f=e.title,l=void 0===f?"":f,p=e.titleAttributes;return{base:se(b.BASE,t,n),bodyAttributes:se(d,r,n),htmlAttributes:se(y,o,n),link:se(b.LINK,i,n),meta:se(b.META,a,n),noscript:se(b.NOSCRIPT,u,n),script:se(b.SCRIPT,c,n),style:se(b.STYLE,s,n),title:se(b.TITLE,{title:l,titleAttributes:p},n)}},le=function(e){var t,r;return r=t=function(t){function r(){return q(this,r),F(this,t.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,t),r.prototype.shouldComponentUpdate=function(e){return!c()(this.props,e)},r.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},r.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},o,this.mapNestedChildrenToProps(r,i))]),t))},r.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case b.TITLE:return H({},o,((t={})[n.type]=a,t.titleAttributes=H({},i),t));case b.BODY:return H({},o,{bodyAttributes:H({},i)});case b.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((r={})[n.type]=H({},i),r))},r.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},r.prototype.warnOnInvalidChildren=function(e,t){return!0},r.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return f().Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(Y(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},r.prototype.render=function(){var t=this.props,r=t.children,n=Y(t,["children"]),o=H({},n);return r&&(o=this.mapChildrenToProps(r,o)),f().createElement(e,o)},B(r,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),r}(f().Component),t.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},r}(a()((function(e){return{baseTag:V([g,j],e),bodyAttributes:W(d,e),defer:G(e,x),encode:G(e,I),htmlAttributes:W(y,e),linkTags:$(b.LINK,[S,g],e),metaTags:$(b.META,[A,m,v,C,O],e),noscriptTags:$(b.NOSCRIPT,[w],e),onChangeClientState:K(e),scriptTags:$(b.SCRIPT,[E,w],e),styleTags:$(b.STYLE,[T],e),title:z(e),titleAttributes:W(h,e)}}),(function(e){te&&Z(te),e.defer?te=X((function(){re(e,(function(){te=null}))})):(re(e),te=null)}),fe)((function(){return null})));le.renderStatic=le.rewind},64100:(e,t,r)=>{"use strict";var n,o=r(92950),i=(n=o)&&"object"===typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!==typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof r&&"function"!==typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!==typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=e(s.map((function(e){return e.props}))),l.canUseDOM?t(c):r&&(c=r(c))}var l=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(l,"canUseDOM",u),l}}}}]);
//# sourceMappingURL=269.49e57a68.chunk.js.map