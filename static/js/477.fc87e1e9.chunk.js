"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[477],{725:function(e,t,n){n.d(t,{s:function(){return s}});var r=n(689),o=n(87),a=n(184),s=function(e){var t=e.films,n=(0,r.TH)();return(0,a.jsx)(a.Fragment,{children:t&&t.map((function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:n},children:(0,a.jsx)("h2",{children:e.title})})},e.id)}))})}},477:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(861),o=n(439),a=n(757),s=n.n(a),i=n(87),c=n(791);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(433);function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var v=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},g=["theme","type"],h=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},E=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},b=function(e){return E(e)||T(e)?e:null},O=function(e){return(0,c.isValidElement)(e)||E(e)||T(e)||y(e)};function C(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,s=void 0===a||a,i=e.collapseDuration,u=void 0===i?300:i;return function(e){var r=e.children,a=e.position,i=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,m=o?"".concat(t,"--").concat(a):t,v=o?"".concat(n,"--").concat(a):n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e,t=f.current,n=m.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===g.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,c.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(i?t():(g.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[d]),c.createElement(c.Fragment,null,r)}}function _(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},w=function(e){var t=e.theme,n=e.type,r=d(e,g);return c.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},x={info:function(e){return c.createElement(w,f({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(w,f({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(w,f({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(w,f({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function k(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,c.useState)([]),a=(0,o.Z)(r,2),s=a[0],i=a[1],u=(0,c.useRef)(null),l=(0,c.useRef)(new Map).current,m=function(e){return-1!==s.indexOf(e)},v=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:function(e){return l.get(e)}}).current;function g(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function C(e){i((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=v.queue.shift();L(e.toastContent,e.toastProps,e.staleId)}function k(e,t){var r=t.delay,o=t.staleId,a=d(t,h);if(O(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var s=a.toastId,i=a.updateId,p=a.data,m=v.props,g=function(){return C(s)},k=null==i;k&&v.count++;var N,P,R=f(f(f({},m),{},{style:m.toastStyle,key:v.toastKey++},a),{},{toastId:s,updateId:i,data:p,closeToast:g,isIn:!1,className:b(a.className||m.toastClassName),bodyClassName:b(a.bodyClassName||m.bodyClassName),progressClassName:b(a.progressClassName||m.progressClassName),autoClose:!a.isLoading&&(N=a.autoClose,P=m.autoClose,!1===N||y(N)&&N>0?N:P),deleteToast:function(){var e=_(l.get(s),"removed");l.delete(s),I.emit(4,e);var t=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==s?v.props.limit:1;if(1===t||1===r)v.displayedToast++,w();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)w()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,s={theme:t,type:n};return!1===o||(T(o)?a=o(s):(0,c.isValidElement)(o)?a=(0,c.cloneElement)(o,s):E(o)||y(o)?a=o:r?a=x.spinner():function(e){return e in x}(n)&&(a=x[n](s))),a}(R),T(a.onOpen)&&(R.onOpen=a.onOpen),T(a.onClose)&&(R.onClose=a.onClose),R.closeButton=m.closeButton,!1===a.closeButton||O(a.closeButton)?R.closeButton=a.closeButton:!0===a.closeButton&&(R.closeButton=!O(m.closeButton)||m.closeButton);var j=e;(0,c.isValidElement)(e)&&!E(e.type)?j=(0,c.cloneElement)(e,{closeToast:g,toastProps:R,data:p}):T(e)&&(j=e({closeToast:g,toastProps:R,data:p})),m.limit&&m.limit>0&&v.count>m.limit&&k?v.queue.push({toastContent:j,toastProps:R,staleId:o}):y(r)?setTimeout((function(){L(j,R,o)}),r):L(j,R,o)}}function L(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),i((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),I.emit(4,_(o,null==o.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return v.containerId=e.containerId,I.cancelEmit(3).on(0,k).on(1,(function(e){return u.current&&C(e)})).on(5,g).emit(2,v),function(){l.clear(),I.emit(3,v)}}),[]),(0,c.useEffect)((function(){v.props=e,v.isToastActive=m,v.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:m}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function P(e){var t=(0,c.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],s=(0,c.useState)(!1),i=(0,o.Z)(s,2),u=i[0],l=i[1],f=(0,c.useRef)(null),d=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function E(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",I),document.addEventListener("touchmove",_),document.addEventListener("touchend",I);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=L(t.nativeEvent),d.y=N(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function b(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=s&&d.y>=r&&d.y<=o?C():O()}}function O(){a(!0)}function C(){a(!1)}function _(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&C(),d.x=L(t),d.y=N(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function I(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",I),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",I);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),T(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",O),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:E,onTouchStart:E,onMouseUp:b,onTouchEnd:b};return m&&v&&(w.onMouseEnter=C,w.onMouseLeave=O),y&&(w.onClick=function(e){h&&h(e),d.canCloseOnClick&&g()}),{playToast:O,pauseToast:C,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:w}}function R(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function j(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=void 0===o?"default":o,s=e.hide,i=e.className,l=e.style,d=e.controlledProgress,p=e.progress,m=e.rtl,g=e.isIn,h=e.theme,y=s||d&&0===p,E=f(f({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(E.transform="scaleX(".concat(p,")"));var b=v("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(a),{"Toastify__progress-bar--rtl":m}),O=T(i)?i({rtl:m,type:a,defaultClassName:b}):v(b,i);return c.createElement("div",u({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:O,style:E},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){g&&r()}))}var M=function(e){var t=P(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,s=e.closeButton,i=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,m=e.closeToast,g=e.transition,h=e.position,y=e.className,E=e.style,b=e.bodyClassName,O=e.bodyStyle,C=e.progressClassName,_=e.progressStyle,I=e.updateId,w=e.role,x=e.progress,k=e.rtl,L=e.toastId,N=e.deleteToast,M=e.isIn,D=e.isLoading,B=e.iconOut,Z=e.closeOnClick,S=e.theme,A=v("Toastify__toast","Toastify__toast-theme--".concat(S),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":Z}),z=T(y)?y({rtl:k,position:h,type:d,defaultClassName:A}):v(A,y),F=!!x||!u,H={closeToast:m,type:d,theme:S},Q=null;return!1===s||(Q=T(s)?s(H):(0,c.isValidElement)(s)?(0,c.cloneElement)(s,H):R(H)),c.createElement(g,{isIn:M,done:N,position:h,preventExitTransition:r,nodeRef:o},c.createElement("div",f(f({id:L,onClick:l,className:z},a),{},{style:E,ref:o}),c.createElement("div",f(f({},M&&{role:w}),{},{className:T(b)?b({type:d}):v("Toastify__toast-body",b),style:O}),null!=B&&c.createElement("div",{className:v("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},B),c.createElement("div",null,i)),Q,c.createElement(j,f(f({},I&&!F?{key:"pb-".concat(I)}:{}),{},{rtl:k,theme:S,delay:u,isRunning:n,isIn:M,closeToast:m,hide:p,type:d,style:_,className:C,controlledProgress:F,progress:x||0}))))},D=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},B=C(D("bounce",!0)),Z=(C(D("slide",!0)),C(D("zoom")),C(D("flip")),(0,c.forwardRef)((function(e,t){var n=k(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,s=e.className,i=e.style,u=e.rtl,l=e.containerId;function d(e){var t=v("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return T(s)?s({position:e,rtl:u,defaultClassName:t}):v(t,b(s))}return(0,c.useEffect)((function(){t&&(t.current=o.current)}),[]),c.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?f({},i):f(f({},i),{},{pointerEvents:"none"});return c.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,o=e.props;return c.createElement(M,f(f({},o),{},{isIn:a(o.toastId),style:f(f({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),r)})))})))})));Z.displayName="ToastContainer",Z.defaultProps={position:"top-right",transition:B,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var S,A=new Map,z=[],F=1;function H(){return""+F++}function Q(e){return e&&(E(e.toastId)||y(e.toastId))?e.toastId:H()}function q(e,t){return A.size>0?I.emit(0,e,t):z.push({content:e,options:t}),t.toastId}function V(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:Q(t)})}function U(e){return function(t,n){return q(t,V(e,n))}}function G(e,t){return q(e,V("default",t))}G.loading=function(e,t){return q(e,V("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},G.promise=function(e,t,n){var r,o=t.pending,a=t.error,s=t.success;o&&(r=E(o)?G.loading(o,n):G.loading(o.render,f(f({},n),o)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=f(f(f({type:e},i),n),{},{data:o}),s=E(t)?{render:t}:t;return r?G.update(r,f(f({},a),s)):G(s.render,f(f({},a),s)),o}G.dismiss(r)},u=T(e)?e():e;return u.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",a,e)})),u},G.success=U("success"),G.info=U("info"),G.error=U("error"),G.warning=U("warning"),G.warn=G.warning,G.dark=function(e,t){return q(e,V("default",f({theme:"dark"},t)))},G.dismiss=function(e){A.size>0?I.emit(1,e):z=z.filter((function(t){return null!=e&&t.options.toastId!==e}))},G.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},G.isActive=function(e){var t=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},G.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=A.get(n||S);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=f(f(f({},r),t),{},{toastId:t.toastId||e,updateId:H()});a.toastId!==e&&(a.staleId=e);var s=a.render||o;delete a.render,q(s,a)}}),0)},G.done=function(e){G.update(e,{progress:1})},G.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},G.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},G.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(e){S=e.containerId||e,A.set(S,e),z.forEach((function(e){I.emit(0,e.content,e.options)})),z=[]})).on(3,(function(e){A.delete(e.containerId||e),0===A.size&&I.off(0).off(1).off(5)}));var W=n(184),X=function(){var e,t=(0,i.lr)(),n=(0,o.Z)(t,2),r=n[0],a=n[1],s=null!==(e=r.get("searchQuery"))&&void 0!==e?e:"";return(0,W.jsxs)("div",{children:[(0,W.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.searchQuery.value.trim();t?(a({searchQuery:t}),e.currentTarget.reset()):G.error("\ud83e\udd84 Please entry correct film name",{position:"top-center",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},children:[(0,W.jsx)("input",{type:"text",name:"searchQuery",defaultValue:s,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"}),(0,W.jsx)("button",{type:"submit",children:"Search"})]}),(0,W.jsx)(Z,{position:"top-right",autoClose:1e3,limit:1,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})},Y=n(691),K=n(725),J=function(){var e=(0,i.lr)(),t=(0,o.Z)(e,1)[0],n=(0,c.useState)([]),a=(0,o.Z)(n,2),u=a[0],l=a[1],f=t.get("searchQuery");return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Y.gH)(f);case 3:t=e.sent,l(t.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}f&&function(){e.apply(this,arguments)}()}),[f]),(0,W.jsxs)("div",{children:[(0,W.jsx)(X,{}),u&&(0,W.jsx)(K.s,{films:u})]})}},691:function(e,t,n){n.d(t,{Eb:function(){return f},SM:function(){return d},gH:function(){return l},nc:function(){return c},ts:function(){return u}});var r=n(861),o=n(757),a=n.n(o),s=n(243),i="7a32caca7156537126d1246055d1764e";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var e=(0,r.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day?api_key=".concat(i,"&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie?api_key=".concat(i,"&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=477.fc87e1e9.chunk.js.map