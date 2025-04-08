/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:l,getOwnPropertyNames:p,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,g=globalThis,f=g.trustedTypes,_=f?f.emptyScript:"",m=g.reactiveElementPolyfillSupport,b=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!c(t,e),y={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...p(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??v)(s?o:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[b("elementProperties")]=new Map,A[b("finalized")]=new Map,m?.({ReactiveElement:A}),(g.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S=globalThis,w=S.trustedTypes,E=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,C="?"+P,R=`<${C}>`,T=document,O=()=>T.createComment(""),I=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,k="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,H=/>/g,W=RegExp(`>|${k}(?:([^\\s"'>=/]+)(${k}*=${k}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,j=/^(?:script|style|textarea|title)$/i,z=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),K=new WeakMap,q=T.createTreeWalker(T,129);function J(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const Y=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,l=0;for(;l<i.length&&(r.lastIndex=l,c=r.exec(i),null!==c);)l=r.lastIndex,r===N?"!--"===c[1]?r=M:void 0!==c[1]?r=H:void 0!==c[2]?(j.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=W):void 0!==c[3]&&(r=W):r===W?">"===c[0]?(r=o??N,h=-1):void 0===c[1]?h=-2:(h=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?W:'"'===c[3]?L:D):r===L||r===D?r=W:r===M||r===H?r=N:(r=W,o=void 0);const p=r===W&&t[e+1].startsWith("/>")?" ":"";n+=r===N?i+R:h>=0?(s.push(a),i.slice(0,h)+x+i.slice(h)+P+p):i+P+(-2===h?e:p)}return[J(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,h]=Y(t,e);if(this.el=F.createElement(c,i),q.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(x)){const e=h[n++],i=s.getAttribute(t).split(P),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(P)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),q.nextNode(),a.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)a.push({type:7,index:o}),t+=P.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function G(t,e,i=t,s){if(e===B)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=I(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=G(t,o._$AS(t,e.values),o,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);q.currentNode=s;let o=q.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Z(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=q.nextNode(),n++)}return q.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),I(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&I(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=F.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=K.get(t.strings);return void 0===e&&K.set(t.strings,e=new F(t)),e}T(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Z(this.k(O()),this.k(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=G(this,t,e,0),n=!I(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=G(this,s[i+r],e,r),a===B&&(a=this._$AH[r]),n||=!I(a)||a!==this._$AH[r],a===V?t=V:t!==V&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.O(t)}O(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===V?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class it extends Q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=G(this,t,e,0)??V)===B)return;const i=this._$AH,s=t===V&&i!==V||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==V&&(i===V||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}}(0,S.litHtmlPolyfillSupport)?.(F,Z),(S.litHtmlVersions??=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ot extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Z(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});(0,globalThis.litElementPolyfillSupport)?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,rt={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:v},at=(t=rt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function ct(t){return(e,i)=>"object"==typeof i?at(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*! js-cookie v3.0.5 | MIT */
function ht(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)t[s]=i[s]}return t}var lt=function t(e,i){function s(t,s,o){if("undefined"!=typeof document){"number"==typeof(o=ht({},i,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var n="";for(var r in o)o[r]&&(n+="; "+r,!0!==o[r]&&(n+="="+o[r].split(";")[0]));return document.cookie=t+"="+e.write(s,t)+n}}return Object.create({set:s,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var i=document.cookie?document.cookie.split("; "):[],s={},o=0;o<i.length;o++){var n=i[o].split("="),r=n.slice(1).join("=");try{var a=decodeURIComponent(n[0]);if(s[a]=e.read(r,a),t===a)break}catch(t){}}return t?s[t]:s}},remove:function(t,e){s(t,"",ht({},e,{expires:-1}))},withAttributes:function(e){return t(this.converter,ht({},this.attributes,e))},withConverter:function(e){return t(ht({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(e)}})}({read:function(t){return'"'===t[0]&&(t=t.slice(1,-1)),t.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(t){return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});const pt={API_URL:"http://localhost:8000",WEB_PUSH_PUBLIC_KEY:"BEzgX5gGp9fL36bY66kSDd8XTpqlZ2UHvrSKmB26h_Zg4w5lt0r87mB7PnptgrA06FG45KMi3PI7BIrdHK3XXX8",SERVICE_WORKER_HOST_URL:"https://localhost:8001",SERVICE_WORKER_URL:"/service-worker.js",SERVICE_WORKER_MESSAGE_TYPE:"PASS_OMNITAG_CLIENT_DATA"};let dt=class extends ot{render(){return z`
      <svg
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="bell"
        width="22px"
        height="22px"
        aria-hidden="true"
        fill="#00000073"
      >
        <path
          d="M816 768h-24V428c0-141.1-104.3-257.8-240-277.2V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.8C336.3 170.2 232 286.9 232 428v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48z"
        ></path>
      </svg>
    `}};dt.styles=r`
    :host {
      margin-right: 14px;
      float: left;
    }
  `,dt=t([nt("bell-icon")],dt);let ut=class extends ot{constructor(){super(...arguments),this.description="",this.okText="Ok",this.noText="No"}onAccept(){this.dispatchEvent(new CustomEvent("accept"))}onCancel(){this.dispatchEvent(new CustomEvent("cancel"))}connectedCallback(){var t;super.connectedCallback(),null===(t=null===window||void 0===window?void 0:window.i13n)||void 0===t||t.dispatch("action",{I13N:{category:"WebPush",action:"WebPushDialogImpression"}})}render(){return z`
      <dialog open>
        <bell-icon></bell-icon>
        <span class="title">${this.title}</span>
        <div class="content">${this.description}</div>
        <div class="footer">
          <button class="cancel" @click="${this.onCancel}">
            ${this.noText}
          </button>
          <button class="confirm" @click="${this.onAccept}">
            ${this.okText}
          </button>
        </div>
      </dialog>
    `}};function gt(t){let e=t.split(".");return e.length<=2?t:(e=e.slice(-3),["co","com"].indexOf(e[1])>-1?e.join("."):e.slice(-2).join("."))}var ft;ut.styles=r`
    :host {
      position: fixed;
      top: 0px;
      left: 0;
      right: 0;
      z-index: 100000000; // QDM Navbar is 99999999，should be greater than that
      margin: 12px;
    }

    dialog {
      animation: slideIn 0.3s ease-in;
      background-color: #fff;
      background-clip: padding-box;
      border: 0;
      border-radius: 4px;
      box-shadow: 0px 9px 28px 8px rgba(0, 0, 0, 0.05),
        0px 6px 16px 0px rgba(0, 0, 0, 0.08),
        0px 3px 6px -4px rgba(0, 0, 0, 0.12);
      pointer-events: auto;
      max-width: 400px;
      padding: 32px 32px 24px;
      margin: 0 auto;
    }

    .title {
      color: #000000d9;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.4;
      display: block;
      overflow: hidden;
    }

    .content {
      margin-left: 36px;
      margin-top: 8px;
      font-size: 14px;
      word-break: break-all;
      white-space: pre-line;
    }

    .footer {
      margin-top: 24px;
      text-align: right;
    }

    button {
      line-height: 1.5715;
      display: inline-block;
      font-weight: 400;
      white-space: nowrap;
      text-align: center;
      border: 1px solid transparent;
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      height: 32px;
      padding: 4px 15px;
      font-size: 14px;
      border-radius: 4px;
      border-color: #d9d9d9;
    }

    button.cancel {
      color: #000000;
      background: #fff;
    }

    button.confirm {
      color: #fff;
      background: #2189f8;
    }

    button.cancel:hover {
      border-color: #2997ff;
      color: #2997ff;
    }

    button.confirm:hover {
      background: #2997ff;
    }

    button.cancel:active {
      border-color: #0062d9;
      color: #0062d9;
    }

    button.confirm:active {
      background: #0062d9;
    }

    @keyframes slideIn {
      from {
        margin-top: -180px;
      }

      to {
        margin-top: 0%;
      }
    }
  `,t([ct()],ut.prototype,"description",void 0),t([ct()],ut.prototype,"okText",void 0),t([ct()],ut.prototype,"noText",void 0),ut=t([nt("omni-dialog")],ut);let _t=ft=class extends ot{constructor(){super(...arguments),this.title="",this.delaySeconds=0,this.resubscribeIntervalDays=1,this.subpath="/",this.rootPath="",this.channelLang="zh-hant",this.open=!1}async subscribeWebPush(){const t=new URL(`${pt.SERVICE_WORKER_HOST_URL}${e=this.tagId,"OA-19d81cd1"===e?"/cdn/shop/files/omni-service-worker.js":`/omni-service-worker.js?SERVICE_WORKER_URL=${pt.SERVICE_WORKER_HOST_URL}${pt.SERVICE_WORKER_URL}`}`);var e;t.searchParams.append("serviceWorkerMessageType",pt.SERVICE_WORKER_MESSAGE_TYPE),"OA-4aa13903"===this.tagId&&(this.rootPath="/apps/64016a8f5a8c335f99fe31e8_TEST",this.subpath=`${this.rootPath}/`);const i=`${this.rootPath}${t.pathname}${t.search}`;console.log("registration start"),navigator.serviceWorker.register(i,{scope:this.subpath}).then((t=>{console.log("registration update success"),t.update()})).catch((t=>{console.error(`registration failed with ${t}`)})),Notification.requestPermission((async t=>{var e;if("granted"===t){const t=await fetch(`${pt.API_URL}/ma_web_push_notification/get-org-application-server-key/?tid=${this.tagId}`),{PAYLOAD:{applicationServerKey:s}}=await t.json(),o=(await navigator.serviceWorker.getRegistrations()).find((t=>{var e;return(null===(e=t.active)||void 0===e?void 0:e.scriptURL.includes(i))&&t.scope.endsWith(this.subpath)}));if(!o)return;null===(e=o.active)||void 0===e||e.postMessage({type:pt.SERVICE_WORKER_MESSAGE_TYPE,payload:{cid:this.clientId}});let n=!0;const r=await o.pushManager.getSubscription(),a=localStorage.getItem("webPushSubscription");if(a){const t=JSON.parse(a);if(t.timestamp){(Date.now()-t.timestamp)/1e3/60/60<168&&r&&(n=!1)}}if(n){r&&await r.unsubscribe();const t=await o.pushManager.subscribe({applicationServerKey:s,userVisibleOnly:!0}),{endpoint:e,keys:i,expirationTime:n}=t.toJSON(),a=JSON.stringify({endpoint:e,auth:i.auth,p256dh:i.p256dh,expirationTime:n,tid:this.tagId,cid:this.clientId,uid:this.userId});await fetch(`${pt.API_URL}/ma_web_push_notification/add-web-push-subscribe-data/`,{method:"POST",headers:{"content-type":"application/json"},body:a});const c=JSON.stringify({...JSON.parse(a),timestamp:Date.now(),dateTime:new Intl.DateTimeFormat(void 0,{dateStyle:"long",timeStyle:"long"}).format(Date.now())});localStorage.setItem("webPushSubscription",c),lt.set("_omnitag_wp_subscribed","true",{domain:gt(window.location.hostname),expires:365})}}}))}static async unsubscribeWebPush(){const t=JSON.parse(localStorage.getItem("webPushSubscription"));try{await fetch(`${pt.API_URL}/ma_web_push_notification/add-web-push-subscribe-data/`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({...t,is_subscribe:!1})}),localStorage.removeItem("webPushSubscription"),lt.remove("_omnitag_wp_subscribed",{domain:gt(window.location.hostname)})}catch(t){console.error("Error unsubscribing from web push:",t)}}static hasSubscription(){return null!==localStorage.getItem("webPushSubscription")}static isPushNotificationSupported(){return"PushManager"in window&&"serviceWorker"in navigator&&"Notification"in window}handleAccept(){var t;console.log("subscribeWebPush on accept"),this.subscribeWebPush(),this.open=!1,null===(t=null===window||void 0===window?void 0:window.i13n)||void 0===t||t.dispatch("action",{I13N:{category:"WebPush",action:"WebPushDialogSubscribeClick"}})}handleCancel(){var t;const e=new Date,i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+this.resubscribeIntervalDays,e.getHours(),e.getMinutes());localStorage.setItem("notificationRequestExpiredTime",`${i.getTime()}`),lt.set("_omnitag_wp_dialog_canceled","true",{domain:gt(window.location.hostname),expires:i}),null===(t=null===window||void 0===window?void 0:window.i13n)||void 0===t||t.dispatch("action",{I13N:{category:"WebPush",action:"WebPushDialogCancelClick"}}),this.open=!1}async connectedCallback(){if(ft.isPushNotificationSupported()){if("granted"===Notification.permission)console.log("subscribeWebPush on permission granted when element connected"),await this.subscribeWebPush();else if("denied"===Notification.permission&&ft.hasSubscription())await ft.unsubscribeWebPush();else if("default"===Notification.permission){const t=null!==localStorage.getItem("notificationRequestExpiredTime")||"true"===lt.get("_omnitag_wp_dialog_canceled"),e=t&&new Date>new Date(parseInt(localStorage.getItem("notificationRequestExpiredTime"),10)),i=lt.get("_omnitag_wp_subscribed");e&&localStorage.removeItem("notificationRequestExpiredTime"),ft.hasSubscription()&&await ft.unsubscribeWebPush(),t&&!e||i||!this.isActive||setTimeout((()=>{this.open=!0}),1e3*this.delaySeconds)}super.connectedCallback()}}render(){return this.open?z`
        <omni-dialog
          title=${this.title}
          description=${this.content}
          okText=${this.confirmText}
          noText=${this.cancelText}
          lang=${this.channelLang}
          @accept="${this.handleAccept}"
          @cancel="${this.handleCancel}"
        >
        </omni-dialog>
      `:z``}};async function mt(t){const e=document.createElement("omnitag-app");Object.entries(t).forEach((([t,i])=>{null==i||Number.isNaN(i)||e.setAttribute(t,i)})),document.body.appendChild(e),"serviceWorker"in navigator&&navigator.serviceWorker.addEventListener("message",(t=>{var e;const{type:i,payload:s}=null!==(e=t.data)&&void 0!==e?e:{};"omnitag-error"===i&&window.dispatchEvent(new CustomEvent("omnitag-error",{detail:{error:null==s?void 0:s.error}}))}))}t([ct({type:String})],_t.prototype,"tagId",void 0),t([ct({type:String})],_t.prototype,"clientId",void 0),t([ct({type:String})],_t.prototype,"userId",void 0),t([ct({type:String})],_t.prototype,"title",void 0),t([ct({type:String})],_t.prototype,"content",void 0),t([ct({type:String})],_t.prototype,"cancelText",void 0),t([ct({type:String})],_t.prototype,"confirmText",void 0),t([ct({type:Number})],_t.prototype,"delaySeconds",void 0),t([ct({type:Number})],_t.prototype,"resubscribeIntervalDays",void 0),t([ct({type:Boolean})],_t.prototype,"isActive",void 0),t([ct({type:String})],_t.prototype,"subpath",void 0),t([ct({type:String})],_t.prototype,"rootPath",void 0),t([ct({type:String})],_t.prototype,"channelLang",void 0),t([function(t){return ct({...t,state:!0,attribute:!1})}()],_t.prototype,"open",void 0),_t=ft=t([nt("omnitag-app")],_t);export{mt as default};
