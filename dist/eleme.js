!function e(t,n,r){function i(a,u){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!u&&l)return l(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var s=n[a]={exports:{}};t[a][0].call(s.exports,function(e){var n=t[a][1][e];return i(n?n:e)},s,s.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){!function(e,t,n,r){"use strict";function i(e,t){for(var n=0,r=e.length;r>n;n++)v(e[n],t)}function o(e){for(var t=0,n=e.length,r;n>t;t++)r=e[t],me(r,T[u(r)])}function a(e){return function(t){X(t)&&(v(t,e),i(t.querySelectorAll(L),e))}}function u(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),r=q.call(V,t?k+t.toUpperCase():_+n);return t&&r>-1&&!l(n,t)?-1:r}function l(e,t){return-1<L.indexOf(e+'[is="'+t+'"]')}function c(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,i=e.target;ce&&(!i||i===t)&&t.attributeChangedCallback&&"style"!==r&e.prevValue!==e.newValue&&t.attributeChangedCallback(r,n===e[w]?null:e.prevValue,n===e[O]?null:e.newValue)}function s(e){var t=a(e);return function(e){ie.push(t,e.target)}}function f(e){le&&(le=!1,e.currentTarget.removeEventListener(A,f)),i((e.target||t).querySelectorAll(L),e.detail===E?E:y),K&&d()}function p(e,t){var n=this;Q.call(n,e,t),se.call(n,{target:n})}function h(e,t){z(e,t),he?he.observe(e,ne):(ue&&(e.setAttribute=p,e[g]=pe(e),e.addEventListener(x,se)),e.addEventListener(C,c)),e.createdCallback&&ce&&(e.created=!0,e.createdCallback(),e.created=!1)}function d(){for(var e,t=0,n=Y.length;n>t;t++)e=Y[t],S.contains(e)||(n--,Y.splice(t--,1),v(e,E))}function m(e){throw new Error("A "+e+" type is already registered")}function v(e,t){var n,r=u(e);r>-1&&(de(e,T[r]),r=0,t!==y||e[y]?t===E&&!e[E]&&(e[y]=!1,e[E]=!0,r=1):(e[E]=!1,e[y]=!0,r=1,K&&q.call(Y,e)<0&&Y.push(e)),r&&(n=e[t+"Callback"])&&n.call(e))}if(!(r in t)){var g="__"+r+(1e5*Math.random()>>0),y="attached",E="detached",b="extends",w="ADDITION",N="MODIFICATION",O="REMOVAL",C="DOMAttrModified",A="DOMContentLoaded",x="DOMSubtreeModified",_="<",k="=",M=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,D=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],V=[],T=[],L="",S=t.documentElement,q=V.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},F=n.prototype,P=F.hasOwnProperty,j=F.isPrototypeOf,R=n.defineProperty,I=n.getOwnPropertyDescriptor,H=n.getOwnPropertyNames,U=n.getPrototypeOf,G=n.setPrototypeOf,B=!!n.__proto__,W=n.create||function ve(e){return e?(ve.prototype=e,new ve):this},z=G||(B?function(e,t){return e.__proto__=t,e}:H&&I?function(){function e(e,t){for(var n,r=H(t),i=0,o=r.length;o>i;i++)n=r[i],P.call(e,n)||R(e,n,I(t,n))}return function(t,n){do e(t,n);while((n=U(n))&&!j.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Z=e.MutationObserver||e.WebKitMutationObserver,$=(e.HTMLElement||e.Element||e.Node).prototype,K=!j.call($,S),X=K?function(e){return 1===e.nodeType}:function(e){return j.call($,e)},Y=K&&[],J=$.cloneNode,Q=$.setAttribute,ee=$.removeAttribute,te=t.createElement,ne=Z&&{attributes:!0,characterData:!0,attributeOldValue:!0},re=Z||function(e){ue=!1,S.removeEventListener(C,re)},ie,oe=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)},ae=!1,ue=!0,le=!0,ce=!0,se,fe,pe,he,de,me;G||B?(de=function(e,t){j.call(t,e)||h(e,t)},me=h):(de=function(e,t){e[g]||(e[g]=n(!0),h(e,t))},me=de),K?(ue=!1,function(){var e=I($,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(C,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[O]=t.attrChange=2,ee.call(this,e),this.dispatchEvent(t)},r=function(e,t){var n=this.hasAttribute(e),r=n&&this.getAttribute(e),i=new CustomEvent(C,{bubbles:!0});Q.call(this,e,t),i.attrName=e,i.prevValue=n?r:null,i.newValue=t,n?i[N]=i.attrChange=1:i[w]=i.attrChange=0,this.dispatchEvent(i)},i=function(e){var t=e.currentTarget,n=t[g],r=e.propertyName,i;n.hasOwnProperty(r)&&(n=n[r],i=new CustomEvent(C,{bubbles:!0}),i.attrName=n.name,i.prevValue=n.value||null,i.newValue=n.value=t[r]||null,null==i.prevValue?i[w]=i.attrChange=0:i[N]=i.attrChange=1,t.dispatchEvent(i))};e.value=function(e,o,a){e===C&&this.attributeChangedCallback&&this.setAttribute!==r&&(this[g]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",i)),t.call(this,e,o,a)},R($,"addEventListener",e)}()):Z||(S.addEventListener(C,re),S.setAttribute(g,1),S.removeAttribute(g),ue&&(se=function(e){var t=this,n,r,i;if(t===e.target){n=t[g],t[g]=r=pe(t);for(i in r){if(!(i in n))return fe(0,t,i,n[i],r[i],w);if(r[i]!==n[i])return fe(1,t,i,n[i],r[i],N)}for(i in n)if(!(i in r))return fe(2,t,i,n[i],r[i],O)}},fe=function(e,t,n,r,i,o){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:i};a[o]=e,c(a)},pe=function(e){for(var t,n,r={},i=e.attributes,o=0,a=i.length;a>o;o++)t=i[o],n=t.name,"setAttribute"!==n&&(r[n]=t.value);return r})),t[r]=function(e,n){if(d=e.toUpperCase(),ae||(ae=!0,Z?(he=function(e,t){function n(e,t){for(var n=0,r=e.length;r>n;t(e[n++]));}return new Z(function(r){for(var i,o,a,u=0,l=r.length;l>u;u++)i=r[u],"childList"===i.type?(n(i.addedNodes,e),n(i.removedNodes,t)):(o=i.target,ce&&o.attributeChangedCallback&&"style"!==i.attributeName&&(a=o.getAttribute(i.attributeName),a!==i.oldValue&&o.attributeChangedCallback(i.attributeName,i.oldValue,a)))})}(a(y),a(E)),he.observe(t,{childList:!0,subtree:!0})):(ie=[],oe(function g(){for(;ie.length;)ie.shift().call(null,ie.shift());oe(g)}),t.addEventListener("DOMNodeInserted",s(y)),t.addEventListener("DOMNodeRemoved",s(E))),t.addEventListener(A,f),t.addEventListener("readystatechange",f),t.createElement=function(e,n){var r=te.apply(t,arguments),i=""+e,o=q.call(V,(n?k:_)+(n||i).toUpperCase()),a=o>-1;return n&&(r.setAttribute("is",n=n.toLowerCase()),a&&(a=l(i.toUpperCase(),n))),ce=!t.createElement.innerHTMLHelper,a&&me(r,T[o]),r},$.cloneNode=function(e){var t=J.call(this,!!e),n=u(t);return n>-1&&me(t,T[n]),e&&o(t.querySelectorAll(L)),t}),-2<q.call(V,k+d)+q.call(V,_+d)&&m(e),!M.test(d)||-1<q.call(D,d))throw new Error("The type "+e+" is invalid");var r=function(){return p?t.createElement(h,d):t.createElement(h)},c=n||F,p=P.call(c,b),h=p?n[b].toUpperCase():d,d,v;return p&&-1<q.call(V,_+h)&&m(h),v=V.push((p?k:_)+d)-1,L=L.concat(L.length?",":"",p?h+'[is="'+e.toLowerCase()+'"]':h),r.prototype=T[v]=P.call(c,"prototype")?c.prototype:W($),i(t.querySelectorAll(L),y),r}}}(window,document,Object,"registerElement")},{}],2:[function(e,t,n){!function(e){"use strict";function t(){return s.createDocumentFragment()}function n(e){return s.createElement(e)}function r(e){if(1===e.length)return i(e[0]);for(var n=t(),r=R.call(e),o=0;o<e.length;o++)n.appendChild(i(r[o]));return n}function i(e){return"string"==typeof e?s.createTextNode(e):e}for(var o,a,u,l,c,s=e.document,f=Object.defineProperty||function(e,t,n){e.__defineGetter__(t,n.get)},p=[].indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},h=function(e){if(!e)throw"SyntaxError";if(y.test(e))throw"InvalidCharacterError";return e},d=function(e){var t=e.className,n="object"==typeof t,r=(n?t.baseVal:t).replace(g,"");r.length&&j.push.apply(this,r.split(y)),this._isSVG=n,this._=e},m={get:function(){return new d(this)},set:function(){}},v="dom4-tmp-".concat(Math.random()*+new Date).replace(".","-"),g=/^\s+|\s+$/g,y=/\s+/,E=" ",b="classList",w=function(e,t){return this.contains(e)?t||this.remove(e):(void 0===t||t)&&(t=!0,this.add(e)),!!t},N=e.DocumentFragment,O=e.Node,C=(O||Element).prototype,A=e.CharacterData||O,x=A&&A.prototype,_=e.DocumentType,k=_&&_.prototype,M=(e.Element||O||e.HTMLElement).prototype,D=e.HTMLSelectElement||n("select").constructor,V=D.prototype.remove,T=e.ShadowRoot,L=e.SVGElement,S=/ /g,q="\\ ",F=function(e){var t="querySelectorAll"===e;return function(n){var r,i,o,a,u,l,c=this.parentNode;if(c){for(o=this.getAttribute("id")||v,a=o===v?o:o.replace(S,q),l=n.split(","),i=0;i<l.length;i++)l[i]="#"+a+" "+l[i];n=l.join(",")}if(o===v&&this.setAttribute("id",o),u=(c||this)[e](n),o===v&&this.removeAttribute("id"),t)for(i=u.length,r=new Array(i);i--;)r[i]=u[i];else r=u;return r}},P=(function(e){"query"in e||(e.query=M.query),"queryAll"in e||(e.queryAll=M.queryAll)}),j=["matches",M.matchesSelector||M.webkitMatchesSelector||M.khtmlMatchesSelector||M.mozMatchesSelector||M.msMatchesSelector||M.oMatchesSelector||function(e){var t=this.parentNode;return!!t&&-1<p.call(t.querySelectorAll(e),this)},"closest",function(e){for(var t=this,n;(n=t&&t.matches)&&!t.matches(e);)t=t.parentNode;return n?t:null},"prepend",function(){var e=this.firstChild,t=r(arguments);e?this.insertBefore(t,e):this.appendChild(t)},"append",function(){this.appendChild(r(arguments))},"before",function(){var e=this.parentNode;e&&e.insertBefore(r(arguments),this)},"after",function(){var e=this.parentNode,t=this.nextSibling,n=r(arguments);e&&(t?e.insertBefore(n,t):e.appendChild(n))},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var e=this.parentNode;e&&e.replaceChild(r(arguments),this)},"remove",function(){var e=this.parentNode;e&&e.removeChild(this)},"query",F("querySelector"),"queryAll",F("querySelectorAll")],R=j.slice,I=j.length;I;I-=2)a=j[I-2],a in M||(M[a]=j[I-1]),"remove"===a&&(D.prototype[a]=function(){return 0<arguments.length?V.apply(this,arguments):M.remove.call(this)}),/before|after|replace|remove/.test(a)&&(A&&!(a in x)&&(x[a]=j[I-1]),_&&!(a in k)&&(k[a]=j[I-1]));if(P(s),N)P(N.prototype);else try{P(t().constructor.prototype)}catch(H){}T&&P(T.prototype),n("a").matches("a")||(M[a]=function(e){return function(n){return e.call(this.parentNode?this:t().appendChild(this),n)}}(M[a])),d.prototype={length:0,add:function(){for(var e=0,t;e<arguments.length;e++)t=arguments[e],this.contains(t)||j.push.call(this,a);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(t){return I=e.call(this,a=h(t)),I>-1}}([].indexOf||function(e){for(I=this.length;I--&&this[I]!==e;);return I}),item:function(e){return this[e]||null},remove:function(){for(var e=0,t;e<arguments.length;e++)t=arguments[e],this.contains(t)&&j.splice.call(this,I,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:w,toString:function U(){return j.join.call(this,E)}},L&&!(b in L.prototype)&&f(L.prototype,b,m),b in s.documentElement?(l=n("div")[b],l.add("a","b","a"),"a b"!=l&&(u=l.constructor.prototype,"add"in u||(u=e.TemporaryTokenList.prototype),c=function(e){return function(){for(var t=0;t<arguments.length;)e.call(this,arguments[t++])}},u.add=c(u.add),u.remove=c(u.remove),u.toggle=w)):f(M,b,m),"contains"in C||f(C,"contains",{value:function(e){for(;e&&e!==this;)e=e.parentNode;return this===e}}),"head"in s||f(s,"head",{get:function(){return o||(o=s.getElementsByTagName("head")[0])}}),function(){for(var t,n=e.requestAnimationFrame,r=e.cancelAnimationFrame,i=["o","ms","moz","webkit"],o=i.length;!r&&o--;)n=n||e[i[o]+"RequestAnimationFrame"],r=e[i[o]+"CancelAnimationFrame"]||e[i[o]+"CancelRequestAnimationFrame"];r||(n?(t=n,n=function(e){var n=!0;return t(function(){n&&e.apply(this,arguments)}),function(){n=!1}},r=function(e){e()}):(n=function(e){return setTimeout(e,15,15)},r=function(e){clearTimeout(e)})),e.requestAnimationFrame=n,e.cancelAnimationFrame=r}();try{new e.CustomEvent("?")}catch(H){e.CustomEvent=function(e,t){function n(n,i){var o=s.createEvent(e);if("string"!=typeof n)throw new Error("An event name must be provided");return"Event"==e&&(o.initCustomEvent=r),null==i&&(i=t),o.initCustomEvent(n,i.bubbles,i.cancelable,i.detail),o}function r(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return n}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}}(window)},{}],3:[function(e,t,n){t.exports={parse:e("./lib/parse"),stringify:e("./lib/stringify")}},{"./lib/parse":5,"./lib/stringify":6}],4:[function(e,t,n){var r=/([\w-]+)|['"]{1}([^'"]*)['"]{1}/g,i=Object.create?Object.create(null):{};i.area=!0,i.base=!0,i.br=!0,i.col=!0,i.embed=!0,i.hr=!0,i.img=!0,i.input=!0,i.keygen=!0,i.link=!0,i.menuitem=!0,i.meta=!0,i.param=!0,i.source=!0,i.track=!0,i.wbr=!0,t.exports=function(e){var t=0,n,o={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,function(r){t%2?n=r:0===t?((i[r]||"/"===e.charAt(e.length-2))&&(o.voidElement=!0),o.name=r):o.attrs[n]=r.replace(/['"]/g,""),t++}),o}},{}],5:[function(e,t,n){var r=/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,i=e("./parse-tag"),o=Object.create?Object.create(null):{};t.exports=function a(e,t){t||(t={}),t.components||(t.components=o);var n=[],a,u=-1,l=[],c={},s=!1;return e.replace(r,function(r,o){if(s){if(r!=="</"+a.name+">")return;s=!1}var f="/"!==r.charAt(1),p=o+r.length,h=e.charAt(p),d;f&&(u++,a=i(r),"tag"===a.type&&t.components[a.name]&&(a.type="component",s=!0),a.voidElement||s||!h||"<"===h||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),c[a.tagName]=a,0===u&&n.push(a),d=l[u-1],d&&d.children.push(a),l[u]=a),(!f||a.voidElement)&&(u--,!s&&"<"!==h&&h&&l[u].children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}))}),n}},{"./parse-tag":4}],6:[function(e,t,n){function r(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}function i(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?r(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(i,"")+"</"+t.name+">"}}t.exports=function(e){return e.reduce(function(e,t){return e+i("",t)},"")}},{}],7:[function(e,t,n){(function(e){"use strict";function t(){this.created=n.notifications.nodesCreated&&[],this.deleted=n.notifications.nodesDeleted&&[]}function r(e,t){this.attrs=w(),this.attrsArr=[],this.newAttrs=w(),this.key=t,this.keyMap=null,this.keyMapValid=!0,this.nodeName=e,this.text=null}var i=!1,o=!1,a=function(e){if(!e)throw new Error("Cannot call currentElement() unless in patch")},u=function(e,t,n){if(e!==t)throw new Error('Was expecting node with key "'+n+'" to be a '+t+", not a "+e+".")},l=function(e,t){if(e!==t){for(var n=e,r=[];n&&n!==t;)r.push(n.nodeName.toLowerCase()),n=n.parentNode;throw new Error("One or more tags were not closed:\n"+r.join("\n"))}},c=function(e){if(i)throw new Error(e+"() may not be called between elementOpenStart() and elementOpenEnd().")},s=function(e){if(o)throw new Error(e+"() may not be called inside an element that has called skip().")},f=function(e){if(!i)throw new Error(e+"() must be called after elementOpenStart().")},p=function(){if(i)throw new Error("elementOpenEnd() must be called after calling elementOpenStart().")},h=function(e){if(!e)throw new Error("Placeholder elements must have a key specified.")},d=function(e,t){if(e!==t)throw new Error("Received a call to close "+t+" but "+e+" was open.")},m=function(e,t){if(null!==t)throw new Error(e+"() must come before any child declarations inside the current element.")},v=function(e){var t=i;return i=e,t},g=function(e){var t=o;return o=e,t};n.notifications={nodesCreated:null,nodesDeleted:null},t.prototype.markCreated=function(e){this.created&&this.created.push(e)},t.prototype.markDeleted=function(e){this.deleted&&this.deleted.push(e)},t.prototype.notifyChanges=function(){this.created&&this.created.length>0&&n.notifications.nodesCreated(this.created),this.deleted&&this.deleted.length>0&&n.notifications.nodesDeleted(this.deleted)};var y=Object.prototype.hasOwnProperty,E=Object.create,b=function(e,t){return y.call(e,t)},w=function(){return E(null)},N=function(e,t,n){var i=new r(t,n);return e.__incrementalDOMData=i,i},O=function(e){var t=e.__incrementalDOMData;if(!t){var n=e.nodeName.toLowerCase(),r=null;e instanceof Element&&(r=e.getAttribute("key")),t=N(e,n,r)}return t};n.symbols={"default":"__default",placeholder:"__placeholder"},n.applyAttr=function(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)},n.applyProp=function(e,t,n){e[t]=n};var C=function(e,t,n){if("string"==typeof n)e.style.cssText=n;else{e.style.cssText="";var r=e.style,i=n;for(var o in i)b(i,o)&&(r[o]=i[o])}},A=function(e,t,r){var i=typeof r;"object"===i||"function"===i?n.applyProp(e,t,r):n.applyAttr(e,t,r)},x=function(e,t,r){var i=O(e),o=i.attrs;if(o[t]!==r){var a=n.attributes[t]||n.attributes[n.symbols["default"]];a(e,t,r),o[t]=r}};n.attributes=w(),n.attributes[n.symbols["default"]]=A,n.attributes[n.symbols.placeholder]=function(){},n.attributes.style=C;var _=function(e,t){return"svg"===e?"http://www.w3.org/2000/svg":"foreignObject"===O(t).nodeName?null:t.namespaceURI},k=function(e,t,n,r,i){var o=_(n,t),a;if(a=o?e.createElementNS(o,n):e.createElement(n),N(a,n,r),i)for(var u=0;u<i.length;u+=2)x(a,i[u],i[u+1]);return a},M=function(e){var t=e.createTextNode("");return N(t,"#text",null),t},D=function(e){for(var t=w(),n=e.children,r=n.length,i=0;r>i;i+=1){var o=n[i],a=O(o).key;a&&(t[a]=o)}return t},V=function(e){var t=O(e);return t.keyMap||(t.keyMap=D(e)),t.keyMap},T=function(e,t){return t?V(e)[t]:null},L=function(e,t,n){V(e)[t]=n},S=null,q,F,P,j,R;n.patch=function(n,r,i){var o=S,a=j,u=R,c=q,s=F,f=P,h=!1,d=!1;S=new t,j=n,R=n.ownerDocument,q=n,F=null,P=null,"production"!==e.env.NODE_ENV&&(h=v(!1),d=g(!1)),G(),r(i),W(),"production"!==e.env.NODE_ENV&&(p(),l(P,n),v(h),g(d)),S.notifyChanges(),S=o,j=a,R=u,q=c,F=s,P=f};var I=function(e,t){var n=O(q);return e===n.nodeName&&t==n.key},H=function(t,n,r){if(!q||!I(t,n)){var i;n&&(i=T(F,n),i&&"production"!==e.env.NODE_ENV&&u(O(i).nodeName,t,n)),i||(i="#text"===t?M(R):k(R,F,t,n,r),n&&L(F,n,i),S.markCreated(i)),q&&O(q).key?(F.replaceChild(i,q),O(F).keyMapValid=!1):F.insertBefore(i,q),q=i}},U=function(){var e=F,t=O(e),r=t.keyMap,i=t.keyMapValid,o=e.lastChild,a;if(!(o===P&&i||t.attrs[n.symbols.placeholder]&&e!==j)){for(;o!==P;)e.removeChild(o),S.markDeleted(o),a=O(o).key,a&&delete r[a],o=e.lastChild;if(!i){for(a in r)o=r[a],o.parentNode!==e&&(S.markDeleted(o),delete r[a]);t.keyMapValid=!0}}},G=function(){F=q,q=q.firstChild,P=null},B=function(){P=q,q=q.nextSibling},W=function(){U(),P=F,q=F.nextSibling,F=F.parentNode},z=function(e,t,n){return H(e,t,n),G(),F},Z=function(){return"production"!==e.env.NODE_ENV&&g(!1),W(),P},$=function(){return H("#text",null,null),B(),P};n.currentElement=function(){return"production"!==e.env.NODE_ENV&&(a(S),c("currentElement")),F},n.skip=function(){"production"!==e.env.NODE_ENV&&(m("skip",P),g(!0)),P=F.lastChild};var K=3,X=[];n.elementOpen=function(t,n,r,i){"production"!==e.env.NODE_ENV&&(c("elementOpen"),s("elementOpen"));for(var o=z(t,n,r),a=O(o),u=a.attrsArr,l=a.newAttrs,f=!1,p=K,h=0;p<arguments.length;p+=1,h+=1)if(u[h]!==arguments[p]){f=!0;break}for(;p<arguments.length;p+=1,h+=1)u[h]=arguments[p];if(h<u.length&&(f=!0,u.length=h),f){for(p=K;p<arguments.length;p+=2)l[arguments[p]]=arguments[p+1];for(var d in l)x(o,d,l[d]),l[d]=void 0}return o},n.elementOpenStart=function(t,n,r){"production"!==e.env.NODE_ENV&&(c("elementOpenStart"),v(!0)),X[0]=t,X[1]=n,X[2]=r},n.attr=function(t,n){"production"!==e.env.NODE_ENV&&f("attr"),X.push(t,n)},n.elementOpenEnd=function(){"production"!==e.env.NODE_ENV&&(f("elementOpenEnd"),v(!1));var t=n.elementOpen.apply(null,X);return X.length=0,t},n.elementClose=function(t){"production"!==e.env.NODE_ENV&&c("elementClose");var n=Z();return"production"!==e.env.NODE_ENV&&d(O(n).nodeName,t),n},n.elementVoid=function(e,t,r,i){var o=n.elementOpen.apply(null,arguments);return n.elementClose.apply(null,arguments),o},n.elementPlaceholder=function(t,r,i,o){return"production"!==e.env.NODE_ENV&&h(r),n.elementOpen.apply(null,arguments),n.skip(),n.elementClose.apply(null,arguments)},n.text=function(t,n){"production"!==e.env.NODE_ENV&&(c("text"),s("text"));var r=$(),i=O(r);if(i.text!==t){i.text=t;for(var o=t,a=1;a<arguments.length;a+=1)o=arguments[a](o);r.data=o}return r}}).call(this,e("_process"))},{_process:8}],8:[function(e,t,n){function r(){c=!1,s.length?l=s.concat(l):f=-1,l.length&&i()}function i(){if(!c){var e=setTimeout(r);c=!0;for(var t=l.length;t;){for(s=l,l=[];++f<t;)s&&s[f].run();f=-1,t=l.length}s=null,c=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function a(){}var u=t.exports={},l=[],c=!1,s,f=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new o(e,t)),1!==l.length||c||setTimeout(i,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=a,u.addListener=a,u.once=a,u.off=a,u.removeListener=a,u.removeAllListeners=a,u.emit=a,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],9:[function(e,t,n){var r=function(e){var t,n;return n=document.registerElement(e.name,{prototype:Object.create(HTMLElement.prototype)}),t=eleme.query(e.name),t||(t=new n),t};t.exports=r},{}],10:[function(e,t,n){var r=function(e){var t;return t="#"===e.name[0]?document.body.query(e.name):e.name instanceof HTMLElement?e.name:document.createElement(e.name)};t.exports=r},{}],11:[function(e,t,n){var r=e("./create/native"),i=e("./create/custom"),o=e("./instance/clone"),a=e("./instance/init"),u=e("./instance/render"),l=e("./shortcuts"),c=function(e){var t;if("undefined"==typeof e.name)throw new Error("eleme needs a name");return t="#"===e.name[0]||e.name.indexOf("-")<0?r(e):i(e),e.render=u,e.clone=o(e),a(t,e)};l(c),t.exports=c},{"./create/custom":9,"./create/native":10,"./instance/clone":14,"./instance/init":15,"./instance/render":17,"./shortcuts":18}],12:[function(e,t,n){var r=function(e,t,n){for(var r in t)t.hasOwnProperty(r)&&("function"==typeof t[r]&&null!=n?e[r]=t[r].bind(n):e[r]=t[r]);return e};t.exports=r},{}],13:[function(e,t,n){e("dom4"),e("document-register-element"),window.eleme=e("./eleme")},{"./eleme":11,"document-register-element":1,dom4:2}],14:[function(e,t,n){var r=e("./init"),i=function(e){return function t(n){var i=document.createElement(this.tagName);return n&&(i.innerHTML=this.innerHTML),r(i,e),i}};t.exports=i},{"./init":15}],15:[function(e,t,n){var r=e("../extend"),i=function(e,t){return r(e,t,e),e.init&&e.init.apply(e),e};t.exports=i},{"../extend":12}],16:[function(e,t,n){var r=e("incremental-dom"),i=e("html-parse-stringify").parse,o=function(e){if("text"===e.type)return r.text(e.content);if("tag"===e.type){var t=[e.name,null,null];for(var n in e.attrs)t.push(n),t.push(e.attrs[n]);if(e.voidElement)return r.elementVoid.apply(null,t);r.elementOpen.apply(null,t),e.children.forEach(o),r.elementClose(e.name)}},a=function(e,t){if("undefined"!=typeof t){t="<div>"+t+"</div>";try{r.patch(e,function(){var e=i(t);null!=e[0]&&Array.isArray(e[0].children)&&e[0].children.forEach(o)})}catch(n){}}};t.exports=a},{"html-parse-stringify":3,"incremental-dom":7}],17:[function(e,t,n){var r=e("./html"),i=function(e){return r(this,e)};t.exports=i},{"./html":16}],18:[function(e,t,n){var r=e("../extend"),i=e("./shortcuts"),o=function(e){r(e,i,document.body),r(HTMLElement.prototype,i),e.extend=r,["query","queryAll","prepend","append"].forEach(function(t){e[t]=function(e){return document.body[t](e)}})};t.exports=o},{"../extend":12,"./shortcuts":19}],19:[function(e,t,n){var r={emit:function(e,t){var n=document.createEvent("Event");n.initEvent(e,1,1),n.detail=t,this.dispatchEvent(n)},on:function(){return this.addEventListener.apply(this,arguments),this},off:function(){return this.removeEventListener.apply(this,arguments),this},once:function(e,t,n){var r=function(){this.off(e,r,!!n),t.apply(this,arguments)};return this.on(e,r,!!n)}};t.exports=r},{}]},{},[13]);
