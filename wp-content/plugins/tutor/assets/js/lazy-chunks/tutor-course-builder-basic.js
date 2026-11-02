"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["639"],{79017:function(e,t,r){r.d(t,{Aw:()=>i,L4:()=>l,bO:()=>s});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);const o={display:"none"};function i(e){let{id:t,value:r}=e;return a().createElement("div",{id:t,style:o},r)}function l(e){let{id:t,announcement:r,ariaLiveType:n="assertive"}=e;// Hide element visually but keep it readable by screen readers
const o={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return a().createElement("div",{id:t,style:o,role:"status","aria-live":n,"aria-atomic":true},r)}function s(){const[e,t]=(0,n.useState)("");const r=(0,n.useCallback)(e=>{if(e!=null){t(e)}},[]);return{announce:r,announcement:e}}//# sourceMappingURL=accessibility.esm.js.map
},7697:function(e,t,r){r.d(t,{AN:()=>eA,FR:()=>b,Hd:()=>tT,MS:()=>m,Mp:()=>tc,PM:()=>tv,Pf:()=>eN,Sj:()=>R,Vy:()=>k,fF:()=>th,fp:()=>D,sl:()=>j,uN:()=>eb,vL:()=>eh,y$:()=>C,zM:()=>tb});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(75206);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(37893);/* import */var s=r(79017);const d=/*#__PURE__*/(0,n.createContext)(null);function c(e){const t=(0,n.useContext)(d);(0,n.useEffect)(()=>{if(!t){throw new Error("useDndMonitor must be used within a children of <DndContext>")}const r=t(e);return r},[e,t])}function u(){const[e]=(0,n.useState)(()=>new Set);const t=(0,n.useCallback)(t=>{e.add(t);return()=>e.delete(t)},[e]);const r=(0,n.useCallback)(t=>{let{type:r,event:n}=t;e.forEach(e=>{var t;return(t=e[r])==null?void 0:t.call(e,n)})},[e]);return[r,t]}const f={draggable:"\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  "};const p={onDragStart(e){let{active:t}=e;return"Picked up draggable item "+t.id+"."},onDragOver(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was moved over droppable area "+r.id+"."}return"Draggable item "+t.id+" is no longer over a droppable area."},onDragEnd(e){let{active:t,over:r}=e;if(r){return"Draggable item "+t.id+" was dropped over droppable area "+r.id}return"Draggable item "+t.id+" was dropped."},onDragCancel(e){let{active:t}=e;return"Dragging was cancelled. Draggable item "+t.id+" was dropped."}};function v(e){let{announcements:t=p,container:r,hiddenTextDescribedById:i,screenReaderInstructions:d=f}=e;const{announce:u,announcement:v}=(0,s/* .useAnnouncement */.bO)();const h=(0,l/* .useUniqueId */.YG)("DndLiveRegion");const[g,m]=(0,n.useState)(false);(0,n.useEffect)(()=>{m(true)},[]);c((0,n.useMemo)(()=>({onDragStart(e){let{active:r}=e;u(t.onDragStart({active:r}))},onDragMove(e){let{active:r,over:n}=e;if(t.onDragMove){u(t.onDragMove({active:r,over:n}))}},onDragOver(e){let{active:r,over:n}=e;u(t.onDragOver({active:r,over:n}))},onDragEnd(e){let{active:r,over:n}=e;u(t.onDragEnd({active:r,over:n}))},onDragCancel(e){let{active:r,over:n}=e;u(t.onDragCancel({active:r,over:n}))}}),[u,t]));if(!g){return null}const b=a().createElement(a().Fragment,null,a().createElement(s/* .HiddenText */.Aw,{id:i,value:d.draggable}),a().createElement(s/* .LiveRegion */.L4,{id:h,announcement:v}));return r?(0,o.createPortal)(b,r):b}var h;(function(e){e["DragStart"]="dragStart";e["DragMove"]="dragMove";e["DragEnd"]="dragEnd";e["DragCancel"]="dragCancel";e["DragOver"]="dragOver";e["RegisterDroppable"]="registerDroppable";e["SetDroppableDisabled"]="setDroppableDisabled";e["UnregisterDroppable"]="unregisterDroppable"})(h||(h={}));function g(){}function m(e,t){return(0,n.useMemo)(()=>({sensor:e,options:t!=null?t:{}}),[e,t])}function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,n.useMemo)(()=>[...t].filter(e=>e!=null),[...t])}const _=/*#__PURE__*/Object.freeze({x:0,y:0});/**
 * Returns the distance between two points
 */function y(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function w(e,t){const r=(0,l/* .getEventCoordinates */.e_)(e);if(!r){return"0 0"}const n={x:(r.x-t.left)/t.width*100,y:(r.y-t.top)/t.height*100};return n.x+"% "+n.y+"%"}/**
 * Sort collisions from smallest to greatest value
 */function x(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return r-n}/**
 * Sort collisions from greatest to smallest value
 */function A(e,t){let{data:{value:r}}=e;let{data:{value:n}}=t;return n-r}/**
 * Returns the coordinates of the corners of a given rectangle:
 * [TopLeft {x, y}, TopRight {x, y}, BottomLeft {x, y}, BottomRight {x, y}]
 */function Y(e){let{left:t,top:r,height:n,width:a}=e;return[{x:t,y:r},{x:t+a,y:r},{x:t,y:r+n},{x:t+a,y:r+n}]}function k(e,t){if(!e||e.length===0){return null}const[r]=e;return t?r[t]:r}/**
 * Returns the coordinates of the center of a given ClientRect
 */function I(e,t,r){if(t===void 0){t=e.left}if(r===void 0){r=e.top}return{x:t+e.width*.5,y:r+e.height*.5}}/**
 * Returns the closest rectangles from an array of rectangles to the center of a given
 * rectangle.
 */const D=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=I(t,t.left,t.top);const o=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=y(I(n),a);o.push({id:t,data:{droppableContainer:e,value:r}})}}return o.sort(x)};/**
 * Returns the closest rectangles from an array of rectangles to the corners of
 * another rectangle.
 */const C=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=Y(t);const o=[];for(const e of n){const{id:t}=e;const n=r.get(t);if(n){const r=Y(n);const i=a.reduce((e,t,n)=>{return e+y(r[n],t)},0);const l=Number((i/4).toFixed(4));o.push({id:t,data:{droppableContainer:e,value:l}})}}return o.sort(x)};/**
 * Returns the intersecting rectangle area between two rectangles
 */function S(e,t){const r=Math.max(t.top,e.top);const n=Math.max(t.left,e.left);const a=Math.min(t.left+t.width,e.left+e.width);const o=Math.min(t.top+t.height,e.top+e.height);const i=a-n;const l=o-r;if(n<a&&r<o){const r=t.width*t.height;const n=e.width*e.height;const a=i*l;const o=a/(r+n-a);return Number(o.toFixed(4))}// Rectangles do not overlap, or overlap has an area of zero (edge/corner overlap)
return 0}/**
 * Returns the rectangles that has the greatest intersection area with a given
 * rectangle in an array of rectangles.
 */const M=e=>{let{collisionRect:t,droppableRects:r,droppableContainers:n}=e;const a=[];for(const e of n){const{id:n}=e;const o=r.get(n);if(o){const r=S(o,t);if(r>0){a.push({id:n,data:{droppableContainer:e,value:r}})}}}return a.sort(A)};/**
 * Check if a given point is contained within a bounding rectangle
 */function E(e,t){const{top:r,left:n,bottom:a,right:o}=t;return r<=e.y&&e.y<=a&&n<=e.x&&e.x<=o}/**
 * Returns the rectangles that the pointer is hovering over
 */const T=e=>{let{droppableContainers:t,droppableRects:r,pointerCoordinates:n}=e;if(!n){return[]}const a=[];for(const e of t){const{id:t}=e;const o=r.get(t);if(o&&E(n,o)){/* There may be more than a single rectangle intersecting
       * with the pointer coordinates. In order to sort the
       * colliding rectangles, we measure the distance between
       * the pointer and the corners of the intersecting rectangle
       */const r=Y(o);const i=r.reduce((e,t)=>{return e+y(n,t)},0);const l=Number((i/4).toFixed(4));a.push({id:t,data:{droppableContainer:e,value:l}})}}return a.sort(x)};function H(e,t,r){return{...e,scaleX:t&&r?t.width/r.width:1,scaleY:t&&r?t.height/r.height:1}}function F(e,t){return e&&t?{x:e.left-t.left,y:e.top-t.top}:_}function K(e){return function t(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++){n[a-1]=arguments[a]}return n.reduce((t,r)=>({...t,top:t.top+e*r.y,bottom:t.bottom+e*r.y,left:t.left+e*r.x,right:t.right+e*r.x}),{...t})}}const N=/*#__PURE__*/K(1);function O(e){if(e.startsWith("matrix3d(")){const t=e.slice(9,-1).split(/, /);return{x:+t[12],y:+t[13],scaleX:+t[0],scaleY:+t[5]}}else if(e.startsWith("matrix(")){const t=e.slice(7,-1).split(/, /);return{x:+t[4],y:+t[5],scaleX:+t[0],scaleY:+t[3]}}return null}function P(e,t,r){const n=O(t);if(!n){return e}const{scaleX:a,scaleY:o,x:i,y:l}=n;const s=e.left-i-(1-a)*parseFloat(r);const d=e.top-l-(1-o)*parseFloat(r.slice(r.indexOf(" ")+1));const c=a?e.width/a:e.width;const u=o?e.height/o:e.height;return{width:c,height:u,top:d,right:s+c,bottom:d+u,left:s}}const L={ignoreTransform:false};/**
 * Returns the bounding client rect of an element relative to the viewport.
 */function R(e,t){if(t===void 0){t=L}let r=e.getBoundingClientRect();if(t.ignoreTransform){const{transform:t,transformOrigin:n}=(0,l/* .getWindow */.zk)(e).getComputedStyle(e);if(t){r=P(r,t,n)}}const{top:n,left:a,width:o,height:i,bottom:s,right:d}=r;return{top:n,left:a,width:o,height:i,bottom:s,right:d}}/**
 * Returns the bounding client rect of an element relative to the viewport.
 *
 * @remarks
 * The ClientRect returned by this method does not take into account transforms
 * applied to the element it measures.
 *
 */function W(e){return R(e,{ignoreTransform:true})}function B(e){const t=e.innerWidth;const r=e.innerHeight;return{top:0,left:0,right:t,bottom:r,width:t,height:r}}function z(e,t){if(t===void 0){t=(0,l/* .getWindow */.zk)(e).getComputedStyle(e)}return t.position==="fixed"}function U(e,t){if(t===void 0){t=(0,l/* .getWindow */.zk)(e).getComputedStyle(e)}const r=/(auto|scroll|overlay)/;const n=["overflow","overflowX","overflowY"];return n.some(e=>{const n=t[e];return typeof n==="string"?r.test(n):false})}function j(e,t){const r=[];function n(a){if(t!=null&&r.length>=t){return r}if(!a){return r}if((0,l/* .isDocument */.wz)(a)&&a.scrollingElement!=null&&!r.includes(a.scrollingElement)){r.push(a.scrollingElement);return r}if(!(0,l/* .isHTMLElement */.sb)(a)||(0,l/* .isSVGElement */.xZ)(a)){return r}if(r.includes(a)){return r}const o=(0,l/* .getWindow */.zk)(e).getComputedStyle(a);if(a!==e){if(U(a,o)){r.push(a)}}if(z(a,o)){return r}return n(a.parentNode)}if(!e){return r}return n(e)}function q(e){const[t]=j(e,1);return t!=null?t:null}function V(e){if(!l/* .canUseDOM */.Sw||!e){return null}if((0,l/* .isWindow */.l6)(e)){return e}if(!(0,l/* .isNode */.Ll)(e)){return null}if((0,l/* .isDocument */.wz)(e)||e===(0,l/* .getOwnerDocument */.TW)(e).scrollingElement){return window}if((0,l/* .isHTMLElement */.sb)(e)){return e}return null}function G(e){if((0,l/* .isWindow */.l6)(e)){return e.scrollX}return e.scrollLeft}function Q(e){if((0,l/* .isWindow */.l6)(e)){return e.scrollY}return e.scrollTop}function $(e){return{x:G(e),y:Q(e)}}var Z;(function(e){e[e["Forward"]=1]="Forward";e[e["Backward"]=-1]="Backward"})(Z||(Z={}));function X(e){if(!l/* .canUseDOM */.Sw||!e){return false}return e===document.scrollingElement}function J(e){const t={x:0,y:0};const r=X(e)?{height:window.innerHeight,width:window.innerWidth}:{height:e.clientHeight,width:e.clientWidth};const n={x:e.scrollWidth-r.width,y:e.scrollHeight-r.height};const a=e.scrollTop<=t.y;const o=e.scrollLeft<=t.x;const i=e.scrollTop>=n.y;const l=e.scrollLeft>=n.x;return{isTop:a,isLeft:o,isBottom:i,isRight:l,maxScroll:n,minScroll:t}}const ee={x:.2,y:.2};function et(e,t,r,n,a){let{top:o,left:i,right:l,bottom:s}=r;if(n===void 0){n=10}if(a===void 0){a=ee}const{isTop:d,isBottom:c,isLeft:u,isRight:f}=J(e);const p={x:0,y:0};const v={x:0,y:0};const h={height:t.height*a.y,width:t.width*a.x};if(!d&&o<=t.top+h.height){// Scroll Up
p.y=Z.Backward;v.y=n*Math.abs((t.top+h.height-o)/h.height)}else if(!c&&s>=t.bottom-h.height){// Scroll Down
p.y=Z.Forward;v.y=n*Math.abs((t.bottom-h.height-s)/h.height)}if(!f&&l>=t.right-h.width){// Scroll Right
p.x=Z.Forward;v.x=n*Math.abs((t.right-h.width-l)/h.width)}else if(!u&&i<=t.left+h.width){// Scroll Left
p.x=Z.Backward;v.x=n*Math.abs((t.left+h.width-i)/h.width)}return{direction:p,speed:v}}function er(e){if(e===document.scrollingElement){const{innerWidth:e,innerHeight:t}=window;return{top:0,left:0,right:e,bottom:t,width:e,height:t}}const{top:t,left:r,right:n,bottom:a}=e.getBoundingClientRect();return{top:t,left:r,right:n,bottom:a,width:e.clientWidth,height:e.clientHeight}}function en(e){return e.reduce((e,t)=>{return(0,l/* .add */.WQ)(e,$(t))},_)}function ea(e){return e.reduce((e,t)=>{return e+G(t)},0)}function eo(e){return e.reduce((e,t)=>{return e+Q(t)},0)}function ei(e,t){if(t===void 0){t=R}if(!e){return}const{top:r,left:n,bottom:a,right:o}=t(e);const i=q(e);if(!i){return}if(a<=0||o<=0||r>=window.innerHeight||n>=window.innerWidth){e.scrollIntoView({block:"center",inline:"center"})}}const el=[["x",["left","right"],ea],["y",["top","bottom"],eo]];class es{constructor(e,t){this.rect=void 0;this.width=void 0;this.height=void 0;this.top=void 0;this.bottom=void 0;this.right=void 0;this.left=void 0;const r=j(t);const n=en(r);this.rect={...e};this.width=e.width;this.height=e.height;for(const[e,t,a]of el){for(const o of t){Object.defineProperty(this,o,{get:()=>{const t=a(r);const i=n[e]-t;return this.rect[o]+i},enumerable:true})}}Object.defineProperty(this,"rect",{enumerable:false})}}class ed{constructor(e){this.target=void 0;this.listeners=[];this.removeAll=()=>{this.listeners.forEach(e=>{var t;return(t=this.target)==null?void 0:t.removeEventListener(...e)})};this.target=e}add(e,t,r){var n;(n=this.target)==null?void 0:n.addEventListener(e,t,r);this.listeners.push([e,t,r])}}function ec(e){// If the `event.target` element is removed from the document events will still be targeted
// at it, and hence won't always bubble up to the window or document anymore.
// If there is any risk of an element being removed while it is being dragged,
// the best practice is to attach the event listeners directly to the target.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
const{EventTarget:t}=(0,l/* .getWindow */.zk)(e);return e instanceof t?e:(0,l/* .getOwnerDocument */.TW)(e)}function eu(e,t){const r=Math.abs(e.x);const n=Math.abs(e.y);if(typeof t==="number"){return Math.sqrt(r**2+n**2)>t}if("x"in t&&"y"in t){return r>t.x&&n>t.y}if("x"in t){return r>t.x}if("y"in t){return n>t.y}return false}var ef;(function(e){e["Click"]="click";e["DragStart"]="dragstart";e["Keydown"]="keydown";e["ContextMenu"]="contextmenu";e["Resize"]="resize";e["SelectionChange"]="selectionchange";e["VisibilityChange"]="visibilitychange"})(ef||(ef={}));function ep(e){e.preventDefault()}function ev(e){e.stopPropagation()}var eh;(function(e){e["Space"]="Space";e["Down"]="ArrowDown";e["Right"]="ArrowRight";e["Left"]="ArrowLeft";e["Up"]="ArrowUp";e["Esc"]="Escape";e["Enter"]="Enter";e["Tab"]="Tab"})(eh||(eh={}));const eg={start:[eh.Space,eh.Enter],cancel:[eh.Esc],end:[eh.Space,eh.Enter,eh.Tab]};const em=(e,t)=>{let{currentCoordinates:r}=t;switch(e.code){case eh.Right:return{...r,x:r.x+25};case eh.Left:return{...r,x:r.x-25};case eh.Down:return{...r,y:r.y+25};case eh.Up:return{...r,y:r.y-25}}return undefined};class eb{constructor(e){this.props=void 0;this.autoScrollEnabled=false;this.referenceCoordinates=void 0;this.listeners=void 0;this.windowListeners=void 0;this.props=e;const{event:{target:t}}=e;this.props=e;this.listeners=new ed((0,l/* .getOwnerDocument */.TW)(t));this.windowListeners=new ed((0,l/* .getWindow */.zk)(t));this.handleKeyDown=this.handleKeyDown.bind(this);this.handleCancel=this.handleCancel.bind(this);this.attach()}attach(){this.handleStart();this.windowListeners.add(ef.Resize,this.handleCancel);this.windowListeners.add(ef.VisibilityChange,this.handleCancel);setTimeout(()=>this.listeners.add(ef.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:t}=this.props;const r=e.node.current;if(r){ei(r)}t(_)}handleKeyDown(e){if((0,l/* .isKeyboardEvent */.kx)(e)){const{active:t,context:r,options:n}=this.props;const{keyboardCodes:a=eg,coordinateGetter:o=em,scrollBehavior:i="smooth"}=n;const{code:s}=e;if(a.end.includes(s)){this.handleEnd(e);return}if(a.cancel.includes(s)){this.handleCancel(e);return}const{collisionRect:d}=r.current;const c=d?{x:d.left,y:d.top}:_;if(!this.referenceCoordinates){this.referenceCoordinates=c}const u=o(e,{active:t,context:r.current,currentCoordinates:c});if(u){const t=(0,l/* .subtract */.Re)(u,c);const n={x:0,y:0};const{scrollableAncestors:a}=r.current;for(const r of a){const a=e.code;const{isTop:o,isRight:l,isLeft:s,isBottom:d,maxScroll:c,minScroll:f}=J(r);const p=er(r);const v={x:Math.min(a===eh.Right?p.right-p.width/2:p.right,Math.max(a===eh.Right?p.left:p.left+p.width/2,u.x)),y:Math.min(a===eh.Down?p.bottom-p.height/2:p.bottom,Math.max(a===eh.Down?p.top:p.top+p.height/2,u.y))};const h=a===eh.Right&&!l||a===eh.Left&&!s;const g=a===eh.Down&&!d||a===eh.Up&&!o;if(h&&v.x!==u.x){const e=r.scrollLeft+t.x;const o=a===eh.Right&&e<=c.x||a===eh.Left&&e>=f.x;if(o&&!t.y){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({left:e,behavior:i});return}if(o){n.x=r.scrollLeft-e}else{n.x=a===eh.Right?r.scrollLeft-c.x:r.scrollLeft-f.x}if(n.x){r.scrollBy({left:-n.x,behavior:i})}break}else if(g&&v.y!==u.y){const e=r.scrollTop+t.y;const o=a===eh.Down&&e<=c.y||a===eh.Up&&e>=f.y;if(o&&!t.x){// We don't need to update coordinates, the scroll adjustment alone will trigger
// logic to auto-detect the new container we are over
r.scrollTo({top:e,behavior:i});return}if(o){n.y=r.scrollTop-e}else{n.y=a===eh.Down?r.scrollTop-c.y:r.scrollTop-f.y}if(n.y){r.scrollBy({top:-n.y,behavior:i})}break}}this.handleMove(e,(0,l/* .add */.WQ)((0,l/* .subtract */.Re)(u,this.referenceCoordinates),n))}}}handleMove(e,t){const{onMove:r}=this.props;e.preventDefault();r(t)}handleEnd(e){const{onEnd:t}=this.props;e.preventDefault();this.detach();t()}handleCancel(e){const{onCancel:t}=this.props;e.preventDefault();this.detach();t()}detach(){this.listeners.removeAll();this.windowListeners.removeAll()}}eb.activators=[{eventName:"onKeyDown",handler:(e,t,r)=>{let{keyboardCodes:n=eg,onActivation:a}=t;let{active:o}=r;const{code:i}=e.nativeEvent;if(n.start.includes(i)){const t=o.activatorNode.current;if(t&&e.target!==t){return false}e.preventDefault();a==null?void 0:a({event:e.nativeEvent});return true}return false}}];function e_(e){return Boolean(e&&"distance"in e)}function ey(e){return Boolean(e&&"delay"in e)}class ew{constructor(e,t,r){var n;if(r===void 0){r=ec(e.event.target)}this.props=void 0;this.events=void 0;this.autoScrollEnabled=true;this.document=void 0;this.activated=false;this.initialCoordinates=void 0;this.timeoutId=null;this.listeners=void 0;this.documentListeners=void 0;this.windowListeners=void 0;this.props=e;this.events=t;const{event:a}=e;const{target:o}=a;this.props=e;this.events=t;this.document=(0,l/* .getOwnerDocument */.TW)(o);this.documentListeners=new ed(this.document);this.listeners=new ed(r);this.windowListeners=new ed((0,l/* .getWindow */.zk)(o));this.initialCoordinates=(n=(0,l/* .getEventCoordinates */.e_)(a))!=null?n:_;this.handleStart=this.handleStart.bind(this);this.handleMove=this.handleMove.bind(this);this.handleEnd=this.handleEnd.bind(this);this.handleCancel=this.handleCancel.bind(this);this.handleKeydown=this.handleKeydown.bind(this);this.removeTextSelection=this.removeTextSelection.bind(this);this.attach()}attach(){const{events:e,props:{options:{activationConstraint:t,bypassActivationConstraint:r}}}=this;this.listeners.add(e.move.name,this.handleMove,{passive:false});this.listeners.add(e.end.name,this.handleEnd);if(e.cancel){this.listeners.add(e.cancel.name,this.handleCancel)}this.windowListeners.add(ef.Resize,this.handleCancel);this.windowListeners.add(ef.DragStart,ep);this.windowListeners.add(ef.VisibilityChange,this.handleCancel);this.windowListeners.add(ef.ContextMenu,ep);this.documentListeners.add(ef.Keydown,this.handleKeydown);if(t){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options})){return this.handleStart()}if(ey(t)){this.timeoutId=setTimeout(this.handleStart,t.delay);this.handlePending(t);return}if(e_(t)){this.handlePending(t);return}}this.handleStart()}detach(){this.listeners.removeAll();this.windowListeners.removeAll();// Wait until the next event loop before removing document listeners
// This is necessary because we listen for `click` and `selection` events on the document
setTimeout(this.documentListeners.removeAll,50);if(this.timeoutId!==null){clearTimeout(this.timeoutId);this.timeoutId=null}}handlePending(e,t){const{active:r,onPending:n}=this.props;n(r,e,this.initialCoordinates,t)}handleStart(){const{initialCoordinates:e}=this;const{onStart:t}=this.props;if(e){this.activated=true;// Stop propagation of click events once activation constraints are met
this.documentListeners.add(ef.Click,ev,{capture:true});// Remove any text selection from the document
this.removeTextSelection();// Prevent further text selection while dragging
this.documentListeners.add(ef.SelectionChange,this.removeTextSelection);t(e)}}handleMove(e){var t;const{activated:r,initialCoordinates:n,props:a}=this;const{onMove:o,options:{activationConstraint:i}}=a;if(!n){return}const s=(t=(0,l/* .getEventCoordinates */.e_)(e))!=null?t:_;const d=(0,l/* .subtract */.Re)(n,s);// Constraint validation
if(!r&&i){if(e_(i)){if(i.tolerance!=null&&eu(d,i.tolerance)){return this.handleCancel()}if(eu(d,i.distance)){return this.handleStart()}}if(ey(i)){if(eu(d,i.tolerance)){return this.handleCancel()}}this.handlePending(i,d);return}if(e.cancelable){e.preventDefault()}o(s)}handleEnd(){const{onAbort:e,onEnd:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleCancel(){const{onAbort:e,onCancel:t}=this.props;this.detach();if(!this.activated){e(this.props.active)}t()}handleKeydown(e){if(e.code===eh.Esc){this.handleCancel()}}removeTextSelection(){var e;(e=this.document.getSelection())==null?void 0:e.removeAllRanges()}}const ex={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class eA extends ew{constructor(e){const{event:t}=e;// Pointer events stop firing if the target is unmounted while dragging
// Therefore we attach listeners to the owner document instead
const r=(0,l/* .getOwnerDocument */.TW)(t.target);super(e,ex,r)}}eA.activators=[{eventName:"onPointerDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(!r.isPrimary||r.button!==0){return false}n==null?void 0:n({event:r});return true}}];const eY={move:{name:"mousemove"},end:{name:"mouseup"}};var ek;(function(e){e[e["RightClick"]=2]="RightClick"})(ek||(ek={}));class eI extends ew{constructor(e){super(e,eY,(0,l/* .getOwnerDocument */.TW)(e.event.target))}}eI.activators=[{eventName:"onMouseDown",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;if(r.button===ek.RightClick){return false}n==null?void 0:n({event:r});return true}}];const eD={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class eC extends ew{constructor(e){super(e,eD)}static setup(){// Adding a non-capture and non-passive `touchmove` listener in order
// to force `event.preventDefault()` calls to work in dynamically added
// touchmove event handlers. This is required for iOS Safari.
window.addEventListener(eD.move.name,e,{capture:false,passive:false});return function t(){window.removeEventListener(eD.move.name,e)};// We create a new handler because the teardown function of another sensor
// could remove our event listener if we use a referentially equal listener.
function e(){}}}eC.activators=[{eventName:"onTouchStart",handler:(e,t)=>{let{nativeEvent:r}=e;let{onActivation:n}=t;const{touches:a}=r;if(a.length>1){return false}n==null?void 0:n({event:r});return true}}];var eS;(function(e){e[e["Pointer"]=0]="Pointer";e[e["DraggableRect"]=1]="DraggableRect"})(eS||(eS={}));var eM;(function(e){e[e["TreeOrder"]=0]="TreeOrder";e[e["ReversedTreeOrder"]=1]="ReversedTreeOrder"})(eM||(eM={}));function eE(e){let{acceleration:t,activator:r=eS.Pointer,canScroll:a,draggingRect:o,enabled:i,interval:s=5,order:d=eM.TreeOrder,pointerCoordinates:c,scrollableAncestors:u,scrollableAncestorRects:f,delta:p,threshold:v}=e;const h=eH({delta:p,disabled:!i});const[g,m]=(0,l/* .useInterval */.$$)();const b=(0,n.useRef)({x:0,y:0});const _=(0,n.useRef)({x:0,y:0});const y=(0,n.useMemo)(()=>{switch(r){case eS.Pointer:return c?{top:c.y,bottom:c.y,left:c.x,right:c.x}:null;case eS.DraggableRect:return o}},[r,o,c]);const w=(0,n.useRef)(null);const x=(0,n.useCallback)(()=>{const e=w.current;if(!e){return}const t=b.current.x*_.current.x;const r=b.current.y*_.current.y;e.scrollBy(t,r)},[]);const A=(0,n.useMemo)(()=>d===eM.TreeOrder?[...u].reverse():u,[d,u]);(0,n.useEffect)(()=>{if(!i||!u.length||!y){m();return}for(const e of A){if((a==null?void 0:a(e))===false){continue}const r=u.indexOf(e);const n=f[r];if(!n){continue}const{direction:o,speed:i}=et(e,n,y,t,v);for(const e of["x","y"]){if(!h[e][o[e]]){i[e]=0;o[e]=0}}if(i.x>0||i.y>0){m();w.current=e;g(x,s);b.current=i;_.current=o;return}}b.current={x:0,y:0};_.current={x:0,y:0};m()},[t,x,a,m,i,s,JSON.stringify(y),JSON.stringify(h),g,u,A,f,JSON.stringify(v)])}const eT={x:{[Z.Backward]:false,[Z.Forward]:false},y:{[Z.Backward]:false,[Z.Forward]:false}};function eH(e){let{delta:t,disabled:r}=e;const n=(0,l/* .usePrevious */.ZC)(t);return(0,l/* .useLazyMemo */.KG)(e=>{if(r||!n||!e){// Reset scroll intent tracking when auto-scrolling is disabled
return eT}const a={x:Math.sign(t.x-n.x),y:Math.sign(t.y-n.y)};// Keep track of the user intent to scroll in each direction for both axis
return{x:{[Z.Backward]:e.x[Z.Backward]||a.x===-1,[Z.Forward]:e.x[Z.Forward]||a.x===1},y:{[Z.Backward]:e.y[Z.Backward]||a.y===-1,[Z.Forward]:e.y[Z.Forward]||a.y===1}}},[r,t,n])}function eF(e,t){const r=t!=null?e.get(t):undefined;const n=r?r.node.current:null;return(0,l/* .useLazyMemo */.KG)(e=>{var r;if(t==null){return null}// In some cases, the draggable node can unmount while dragging
// This is the case for virtualized lists. In those situations,
// we fall back to the last known value for that node.
return(r=n!=null?n:e)!=null?r:null},[n,t])}function eK(e,t){return(0,n.useMemo)(()=>e.reduce((e,r)=>{const{sensor:n}=r;const a=n.activators.map(e=>({eventName:e.eventName,handler:t(e.handler,r)}));return[...e,...a]},[]),[e,t])}var eN;(function(e){e[e["Always"]=0]="Always";e[e["BeforeDragging"]=1]="BeforeDragging";e[e["WhileDragging"]=2]="WhileDragging"})(eN||(eN={}));var eO;(function(e){e["Optimized"]="optimized"})(eO||(eO={}));const eP=/*#__PURE__*/new Map;function eL(e,t){let{dragging:r,dependencies:a,config:o}=t;const[i,s]=(0,n.useState)(null);const{frequency:d,measure:c,strategy:u}=o;const f=(0,n.useRef)(e);const p=b();const v=(0,l/* .useLatestValue */.YN)(p);const h=(0,n.useCallback)(function(e){if(e===void 0){e=[]}if(v.current){return}s(t=>{if(t===null){return e}return t.concat(e.filter(e=>!t.includes(e)))})},[v]);const g=(0,n.useRef)(null);const m=(0,l/* .useLazyMemo */.KG)(t=>{if(p&&!r){return eP}if(!t||t===eP||f.current!==e||i!=null){const t=new Map;for(let r of e){if(!r){continue}if(i&&i.length>0&&!i.includes(r.id)&&r.rect.current){// This container does not need to be re-measured
t.set(r.id,r.rect.current);continue}const e=r.node.current;const n=e?new es(c(e),e):null;r.rect.current=n;if(n){t.set(r.id,n)}}return t}return t},[e,i,r,p,c]);(0,n.useEffect)(()=>{f.current=e},[e]);(0,n.useEffect)(()=>{if(p){return}h()},[r,p]);(0,n.useEffect)(()=>{if(i&&i.length>0){s(null)}},[JSON.stringify(i)]);(0,n.useEffect)(()=>{if(p||typeof d!=="number"||g.current!==null){return}g.current=setTimeout(()=>{h();g.current=null},d)},[d,p,h,...a]);return{droppableRects:m,measureDroppableContainers:h,measuringScheduled:i!=null};function b(){switch(u){case eN.Always:return false;case eN.BeforeDragging:return r;default:return!r}}}function eR(e,t){return(0,l/* .useLazyMemo */.KG)(r=>{if(!e){return null}if(r){return r}return typeof t==="function"?t(e):e},[t,e])}function eW(e,t){return eR(e,t)}/**
 * Returns a new MutationObserver instance.
 * If `MutationObserver` is undefined in the execution environment, returns `undefined`.
 */function eB(e){let{callback:t,disabled:r}=e;const a=(0,l/* .useEvent */._q)(t);const o=(0,n.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.MutationObserver==="undefined"){return undefined}const{MutationObserver:e}=window;return new e(a)},[a,r]);(0,n.useEffect)(()=>{return()=>o==null?void 0:o.disconnect()},[o]);return o}/**
 * Returns a new ResizeObserver instance bound to the `onResize` callback.
 * If `ResizeObserver` is undefined in the execution environment, returns `undefined`.
 */function ez(e){let{callback:t,disabled:r}=e;const a=(0,l/* .useEvent */._q)(t);const o=(0,n.useMemo)(()=>{if(r||typeof window==="undefined"||typeof window.ResizeObserver==="undefined"){return undefined}const{ResizeObserver:e}=window;return new e(a)},[r]);(0,n.useEffect)(()=>{return()=>o==null?void 0:o.disconnect()},[o]);return o}function eU(e){return new es(R(e),e)}function ej(e,t,r){if(t===void 0){t=eU}const[a,o]=(0,n.useState)(null);function i(){o(n=>{if(!e){return null}if(e.isConnected===false){var a;// Fall back to last rect we measured if the element is
// no longer connected to the DOM.
return(a=n!=null?n:r)!=null?a:null}const o=t(e);if(JSON.stringify(n)===JSON.stringify(o)){return n}return o})}const s=eB({callback(t){if(!e){return}for(const r of t){const{type:t,target:n}=r;if(t==="childList"&&n instanceof HTMLElement&&n.contains(e)){i();break}}}});const d=ez({callback:i});(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{i();if(e){d==null?void 0:d.observe(e);s==null?void 0:s.observe(document.body,{childList:true,subtree:true})}else{d==null?void 0:d.disconnect();s==null?void 0:s.disconnect()}},[e]);return a}function eq(e){const t=eR(e);return F(e,t)}const eV=[];function eG(e){const t=(0,n.useRef)(e);const r=(0,l/* .useLazyMemo */.KG)(r=>{if(!e){return eV}if(r&&r!==eV&&e&&t.current&&e.parentNode===t.current.parentNode){return r}return j(e)},[e]);(0,n.useEffect)(()=>{t.current=e},[e]);return r}function eQ(e){const[t,r]=(0,n.useState)(null);const a=(0,n.useRef)(e);// To-do: Throttle the handleScroll callback
const o=(0,n.useCallback)(e=>{const t=V(e.target);if(!t){return}r(e=>{if(!e){return null}e.set(t,$(t));return new Map(e)})},[]);(0,n.useEffect)(()=>{const t=a.current;if(e!==t){n(t);const i=e.map(e=>{const t=V(e);if(t){t.addEventListener("scroll",o,{passive:true});return[t,$(t)]}return null}).filter(e=>e!=null);r(i.length?new Map(i):null);a.current=e}return()=>{n(e);n(t)};function n(e){e.forEach(e=>{const t=V(e);t==null?void 0:t.removeEventListener("scroll",o)})}},[o,e]);return(0,n.useMemo)(()=>{if(e.length){return t?Array.from(t.values()).reduce((e,t)=>(0,l/* .add */.WQ)(e,t),_):en(e)}return _},[e,t])}function e$(e,t){if(t===void 0){t=[]}const r=(0,n.useRef)(null);(0,n.useEffect)(()=>{r.current=null},t);(0,n.useEffect)(()=>{const t=e!==_;if(t&&!r.current){r.current=e}if(!t&&r.current){r.current=null}},[e]);return r.current?(0,l/* .subtract */.Re)(e,r.current):_}function eZ(e){(0,n.useEffect)(()=>{if(!l/* .canUseDOM */.Sw){return}const t=e.map(e=>{let{sensor:t}=e;return t.setup==null?void 0:t.setup()});return()=>{for(const e of t){e==null?void 0:e()}}},// eslint-disable-next-line react-hooks/exhaustive-deps
e.map(e=>{let{sensor:t}=e;return t}))}function eX(e,t){return(0,n.useMemo)(()=>{return e.reduce((e,r)=>{let{eventName:n,handler:a}=r;e[n]=e=>{a(e,t)};return e},{})},[e,t])}function eJ(e){return(0,n.useMemo)(()=>e?B(e):null,[e])}const e0=[];function e1(e,t){if(t===void 0){t=R}const[r]=e;const a=eJ(r?(0,l/* .getWindow */.zk)(r):null);const[o,i]=(0,n.useState)(e0);function s(){i(()=>{if(!e.length){return e0}return e.map(e=>X(e)?a:new es(t(e),e))})}const d=ez({callback:s});(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{d==null?void 0:d.disconnect();s();e.forEach(e=>d==null?void 0:d.observe(e))},[e]);return o}function e4(e){if(!e){return null}if(e.children.length>1){return e}const t=e.children[0];return(0,l/* .isHTMLElement */.sb)(t)?t:e}function e2(e){let{measure:t}=e;const[r,a]=(0,n.useState)(null);const o=(0,n.useCallback)(e=>{for(const{target:r}of e){if((0,l/* .isHTMLElement */.sb)(r)){a(e=>{const n=t(r);return e?{...e,width:n.width,height:n.height}:n});break}}},[t]);const i=ez({callback:o});const s=(0,n.useCallback)(e=>{const r=e4(e);i==null?void 0:i.disconnect();if(r){i==null?void 0:i.observe(r)}a(r?t(r):null)},[t,i]);const[d,c]=(0,l/* .useNodeRef */.lk)(s);return(0,n.useMemo)(()=>({nodeRef:d,rect:r,setRef:c}),[r,d,c])}const e6=[{sensor:eA,options:{}},{sensor:eb,options:{}}];const e5={current:{}};const e3={draggable:{measure:W},droppable:{measure:W,strategy:eN.WhileDragging,frequency:eO.Optimized},dragOverlay:{measure:R}};class e9 extends Map{get(e){var t;return e!=null?(t=super.get(e))!=null?t:undefined:undefined}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:t}=e;return!t})}getNodeFor(e){var t,r;return(t=(r=this.get(e))==null?void 0:r.node.current)!=null?t:undefined}}const e8={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:/*#__PURE__*/new Map,droppableRects:/*#__PURE__*/new Map,droppableContainers:/*#__PURE__*/new e9,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:g},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:e3,measureDroppableContainers:g,windowRect:null,measuringScheduled:false};const e7={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:g,draggableNodes:/*#__PURE__*/new Map,over:null,measureDroppableContainers:g};const te=/*#__PURE__*/(0,n.createContext)(e7);const tt=/*#__PURE__*/(0,n.createContext)(e8);function tr(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new e9}}}function tn(e,t){switch(t.type){case h.DragStart:return{...e,draggable:{...e.draggable,initialCoordinates:t.initialCoordinates,active:t.active}};case h.DragMove:if(e.draggable.active==null){return e}return{...e,draggable:{...e.draggable,translate:{x:t.coordinates.x-e.draggable.initialCoordinates.x,y:t.coordinates.y-e.draggable.initialCoordinates.y}}};case h.DragEnd:case h.DragCancel:return{...e,draggable:{...e.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case h.RegisterDroppable:{const{element:r}=t;const{id:n}=r;const a=new e9(e.droppable.containers);a.set(n,r);return{...e,droppable:{...e.droppable,containers:a}}}case h.SetDroppableDisabled:{const{id:r,key:n,disabled:a}=t;const o=e.droppable.containers.get(r);if(!o||n!==o.key){return e}const i=new e9(e.droppable.containers);i.set(r,{...o,disabled:a});return{...e,droppable:{...e.droppable,containers:i}}}case h.UnregisterDroppable:{const{id:r,key:n}=t;const a=e.droppable.containers.get(r);if(!a||n!==a.key){return e}const o=new e9(e.droppable.containers);o.delete(r);return{...e,droppable:{...e.droppable,containers:o}}}default:{return e}}}function ta(e){let{disabled:t}=e;const{active:r,activatorEvent:a,draggableNodes:o}=(0,n.useContext)(te);const i=(0,l/* .usePrevious */.ZC)(a);const s=(0,l/* .usePrevious */.ZC)(r==null?void 0:r.id);// Restore keyboard focus on the activator node
(0,n.useEffect)(()=>{if(t){return}if(!a&&i&&s!=null){if(!(0,l/* .isKeyboardEvent */.kx)(i)){return}if(document.activeElement===i.target){// No need to restore focus
return}const e=o.get(s);if(!e){return}const{activatorNode:t,node:r}=e;if(!t.current&&!r.current){return}requestAnimationFrame(()=>{for(const e of[t.current,r.current]){if(!e){continue}const t=(0,l/* .findFirstFocusableNode */.ag)(e);if(t){t.focus();break}}})}},[a,t,o,s,i]);return null}function to(e,t){let{transform:r,...n}=t;return e!=null&&e.length?e.reduce((e,t)=>{return t({transform:e,...n})},r):r}function ti(e){return(0,n.useMemo)(()=>({draggable:{...e3.draggable,...e==null?void 0:e.draggable},droppable:{...e3.droppable,...e==null?void 0:e.droppable},dragOverlay:{...e3.dragOverlay,...e==null?void 0:e.dragOverlay}}),[e==null?void 0:e.draggable,e==null?void 0:e.droppable,e==null?void 0:e.dragOverlay])}function tl(e){let{activeNode:t,measure:r,initialRect:a,config:o=true}=e;const i=(0,n.useRef)(false);const{x:s,y:d}=typeof o==="boolean"?{x:o,y:o}:o;(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{const e=!s&&!d;if(e||!t){i.current=false;return}if(i.current||!a){// Return early if layout shift scroll compensation was already attempted
// or if there is no initialRect to compare to.
return}// Get the most up to date node ref for the active draggable
const n=t==null?void 0:t.node.current;if(!n||n.isConnected===false){// Return early if there is no attached node ref or if the node is
// disconnected from the document.
return}const o=r(n);const l=F(o,a);if(!s){l.x=0}if(!d){l.y=0}// Only perform layout shift scroll compensation once
i.current=true;if(Math.abs(l.x)>0||Math.abs(l.y)>0){const e=q(n);if(e){e.scrollBy({top:l.y,left:l.x})}}},[t,s,d,a,r])}const ts=/*#__PURE__*/(0,n.createContext)({..._,scaleX:1,scaleY:1});var td;(function(e){e[e["Uninitialized"]=0]="Uninitialized";e[e["Initializing"]=1]="Initializing";e[e["Initialized"]=2]="Initialized"})(td||(td={}));const tc=/*#__PURE__*/(0,n.memo)(function e(e){var t,r,i,s;let{id:c,accessibility:f,autoScroll:p=true,children:g,sensors:m=e6,collisionDetection:b=M,measuring:_,modifiers:y,...w}=e;const x=(0,n.useReducer)(tn,undefined,tr);const[A,Y]=x;const[I,D]=u();const[C,S]=(0,n.useState)(td.Uninitialized);const E=C===td.Initialized;const{draggable:{active:T,nodes:F,translate:K},droppable:{containers:O}}=A;const P=T!=null?F.get(T):null;const L=(0,n.useRef)({initial:null,translated:null});const R=(0,n.useMemo)(()=>{var e;return T!=null?{id:T,// It's possible for the active node to unmount while dragging
data:(e=P==null?void 0:P.data)!=null?e:e5,rect:L}:null},[T,P]);const W=(0,n.useRef)(null);const[B,z]=(0,n.useState)(null);const[U,j]=(0,n.useState)(null);const q=(0,l/* .useLatestValue */.YN)(w,Object.values(w));const V=(0,l/* .useUniqueId */.YG)("DndDescribedBy",c);const G=(0,n.useMemo)(()=>O.getEnabled(),[O]);const Q=ti(_);const{droppableRects:$,measureDroppableContainers:Z,measuringScheduled:X}=eL(G,{dragging:E,dependencies:[K.x,K.y],config:Q.droppable});const J=eF(F,T);const ee=(0,n.useMemo)(()=>U?(0,l/* .getEventCoordinates */.e_)(U):null,[U]);const et=eO();const er=eW(J,Q.draggable.measure);tl({activeNode:T!=null?F.get(T):null,config:et.layoutShiftCompensation,initialRect:er,measure:Q.draggable.measure});const en=ej(J,Q.draggable.measure,er);const ea=ej(J?J.parentElement:null);const eo=(0,n.useRef)({activatorEvent:null,active:null,activeNode:J,collisionRect:null,collisions:null,droppableRects:$,draggableNodes:F,draggingNode:null,draggingNodeRect:null,droppableContainers:O,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null});const ei=O.getNodeFor((t=eo.current.over)==null?void 0:t.id);const el=e2({measure:Q.dragOverlay.measure});// Use the rect of the drag overlay if it is mounted
const es=(r=el.nodeRef.current)!=null?r:J;const ed=E?(i=el.rect)!=null?i:en:null;const ec=Boolean(el.nodeRef.current&&el.rect);// The delta between the previous and new position of the draggable node
// is only relevant when there is no drag overlay
const eu=eq(ec?null:en);// Get the window rect of the dragging node
const ef=eJ(es?(0,l/* .getWindow */.zk)(es):null);// Get scrollable ancestors of the dragging node
const ep=eG(E?ei!=null?ei:J:null);const ev=e1(ep);// Apply modifiers
const eh=to(y,{transform:{x:K.x-eu.x,y:K.y-eu.y,scaleX:1,scaleY:1},activatorEvent:U,active:R,activeNodeRect:en,containerNodeRect:ea,draggingNodeRect:ed,over:eo.current.over,overlayNodeRect:el.rect,scrollableAncestors:ep,scrollableAncestorRects:ev,windowRect:ef});const eg=ee?(0,l/* .add */.WQ)(ee,K):null;const em=eQ(ep);// Represents the scroll delta since dragging was initiated
const eb=e$(em);// Represents the scroll delta since the last time the active node rect was measured
const e_=e$(em,[en]);const ey=(0,l/* .add */.WQ)(eh,eb);const ew=ed?N(ed,eh):null;const ex=R&&ew?b({active:R,collisionRect:ew,droppableRects:$,droppableContainers:G,pointerCoordinates:eg}):null;const eA=k(ex,"id");const[eY,ek]=(0,n.useState)(null);// When there is no drag overlay used, we need to account for the
// window scroll delta
const eI=ec?eh:(0,l/* .add */.WQ)(eh,e_);const eD=H(eI,(s=eY==null?void 0:eY.rect)!=null?s:null,en);const eC=(0,n.useRef)(null);const eS=(0,n.useCallback)((e,t)=>{let{sensor:r,options:n}=t;if(W.current==null){return}const a=F.get(W.current);if(!a){return}const i=e.nativeEvent;const l=new r({active:W.current,activeNode:a,event:i,options:n,// Sensors need to be instantiated with refs for arguments that change over time
// otherwise they are frozen in time with the stale arguments
context:eo,onAbort(e){const t=F.get(e);if(!t){return}const{onDragAbort:r}=q.current;const n={id:e};r==null?void 0:r(n);I({type:"onDragAbort",event:n})},onPending(e,t,r,n){const a=F.get(e);if(!a){return}const{onDragPending:o}=q.current;const i={id:e,constraint:t,initialCoordinates:r,offset:n};o==null?void 0:o(i);I({type:"onDragPending",event:i})},onStart(e){const t=W.current;if(t==null){return}const r=F.get(t);if(!r){return}const{onDragStart:n}=q.current;const a={activatorEvent:i,active:{id:t,data:r.data,rect:L}};(0,o.unstable_batchedUpdates)(()=>{n==null?void 0:n(a);S(td.Initializing);Y({type:h.DragStart,initialCoordinates:e,active:t});I({type:"onDragStart",event:a});z(eC.current);j(i)})},onMove(e){Y({type:h.DragMove,coordinates:e})},onEnd:s(h.DragEnd),onCancel:s(h.DragCancel)});eC.current=l;function s(e){return async function t(){const{active:t,collisions:r,over:n,scrollAdjustedTranslate:a}=eo.current;let l=null;if(t&&a){const{cancelDrop:o}=q.current;l={activatorEvent:i,active:t,collisions:r,delta:a,over:n};if(e===h.DragEnd&&typeof o==="function"){const t=await Promise.resolve(o(l));if(t){e=h.DragCancel}}}W.current=null;(0,o.unstable_batchedUpdates)(()=>{Y({type:e});S(td.Uninitialized);ek(null);z(null);j(null);eC.current=null;const t=e===h.DragEnd?"onDragEnd":"onDragCancel";if(l){const e=q.current[t];e==null?void 0:e(l);I({type:t,event:l})}})}}},[F]);const eM=(0,n.useCallback)((e,t)=>{return(r,n)=>{const a=r.nativeEvent;const o=F.get(n);if(W.current!==null||// No active draggable
!o||// Event has already been captured
a.dndKit||a.defaultPrevented){return}const i={active:o};const l=e(r,t.options,i);if(l===true){a.dndKit={capturedBy:t.sensor};W.current=n;eS(r,t)}}},[F,eS]);const eT=eK(m,eM);eZ(m);(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{if(en&&C===td.Initializing){S(td.Initialized)}},[en,C]);(0,n.useEffect)(()=>{const{onDragMove:e}=q.current;const{active:t,activatorEvent:r,collisions:n,over:a}=eo.current;if(!t||!r){return}const i={active:t,activatorEvent:r,collisions:n,delta:{x:ey.x,y:ey.y},over:a};(0,o.unstable_batchedUpdates)(()=>{e==null?void 0:e(i);I({type:"onDragMove",event:i})})},[ey.x,ey.y]);(0,n.useEffect)(()=>{const{active:e,activatorEvent:t,collisions:r,droppableContainers:n,scrollAdjustedTranslate:a}=eo.current;if(!e||W.current==null||!t||!a){return}const{onDragOver:i}=q.current;const l=n.get(eA);const s=l&&l.rect.current?{id:l.id,rect:l.rect.current,data:l.data,disabled:l.disabled}:null;const d={active:e,activatorEvent:t,collisions:r,delta:{x:a.x,y:a.y},over:s};(0,o.unstable_batchedUpdates)(()=>{ek(s);i==null?void 0:i(d);I({type:"onDragOver",event:d})})},[eA]);(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{eo.current={activatorEvent:U,active:R,activeNode:J,collisionRect:ew,collisions:ex,droppableRects:$,draggableNodes:F,draggingNode:es,draggingNodeRect:ed,droppableContainers:O,over:eY,scrollableAncestors:ep,scrollAdjustedTranslate:ey};L.current={initial:ed,translated:ew}},[R,J,ex,ew,F,es,ed,$,O,eY,ep,ey]);eE({...et,delta:K,draggingRect:ew,pointerCoordinates:eg,scrollableAncestors:ep,scrollableAncestorRects:ev});const eH=(0,n.useMemo)(()=>{const e={active:R,activeNode:J,activeNodeRect:en,activatorEvent:U,collisions:ex,containerNodeRect:ea,dragOverlay:el,draggableNodes:F,droppableContainers:O,droppableRects:$,over:eY,measureDroppableContainers:Z,scrollableAncestors:ep,scrollableAncestorRects:ev,measuringConfiguration:Q,measuringScheduled:X,windowRect:ef};return e},[R,J,en,U,ex,ea,el,F,O,$,eY,Z,ep,ev,Q,X,ef]);const eN=(0,n.useMemo)(()=>{const e={activatorEvent:U,activators:eT,active:R,activeNodeRect:en,ariaDescribedById:{draggable:V},dispatch:Y,draggableNodes:F,over:eY,measureDroppableContainers:Z};return e},[U,eT,R,en,Y,V,F,eY,Z]);return a().createElement(d.Provider,{value:D},a().createElement(te.Provider,{value:eN},a().createElement(tt.Provider,{value:eH},a().createElement(ts.Provider,{value:eD},g)),a().createElement(ta,{disabled:(f==null?void 0:f.restoreFocus)===false})),a().createElement(v,{...f,hiddenTextDescribedById:V}));function eO(){const e=(B==null?void 0:B.autoScrollEnabled)===false;const t=typeof p==="object"?p.enabled===false:p===false;const r=E&&!e&&!t;if(typeof p==="object"){return{...p,enabled:r}}return{enabled:r}}});const tu=/*#__PURE__*/(0,n.createContext)(null);const tf="button";const tp="Draggable";function tv(e){let{id:t,data:r,disabled:a=false,attributes:o}=e;const i=(0,l/* .useUniqueId */.YG)(tp);const{activators:s,activatorEvent:d,active:c,activeNodeRect:u,ariaDescribedById:f,draggableNodes:p,over:v}=(0,n.useContext)(te);const{role:h=tf,roleDescription:g="draggable",tabIndex:m=0}=o!=null?o:{};const b=(c==null?void 0:c.id)===t;const _=(0,n.useContext)(b?ts:tu);const[y,w]=(0,l/* .useNodeRef */.lk)();const[x,A]=(0,l/* .useNodeRef */.lk)();const Y=eX(s,t);const k=(0,l/* .useLatestValue */.YN)(r);(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{p.set(t,{id:t,key:i,node:y,activatorNode:x,data:k});return()=>{const e=p.get(t);if(e&&e.key===i){p.delete(t)}}},[p,t]);const I=(0,n.useMemo)(()=>({role:h,tabIndex:m,"aria-disabled":a,"aria-pressed":b&&h===tf?true:undefined,"aria-roledescription":g,"aria-describedby":f.draggable}),[a,h,m,b,g,f.draggable]);return{active:c,activatorEvent:d,activeNodeRect:u,attributes:I,isDragging:b,listeners:a?undefined:Y,node:y,over:v,setNodeRef:w,setActivatorNodeRef:A,transform:_}}function th(){return(0,n.useContext)(tt)}const tg="Droppable";const tm={timeout:25};function tb(e){let{data:t,disabled:r=false,id:a,resizeObserverConfig:o}=e;const i=(0,l/* .useUniqueId */.YG)(tg);const{active:s,dispatch:d,over:c,measureDroppableContainers:u}=(0,n.useContext)(te);const f=(0,n.useRef)({disabled:r});const p=(0,n.useRef)(false);const v=(0,n.useRef)(null);const g=(0,n.useRef)(null);const{disabled:m,updateMeasurementsFor:b,timeout:_}={...tm,...o};const y=(0,l/* .useLatestValue */.YN)(b!=null?b:a);const w=(0,n.useCallback)(()=>{if(!p.current){// ResizeObserver invokes the `handleResize` callback as soon as `observe` is called,
// assuming the element is rendered and displayed.
p.current=true;return}if(g.current!=null){clearTimeout(g.current)}g.current=setTimeout(()=>{u(Array.isArray(y.current)?y.current:[y.current]);g.current=null},_)},[_]);const x=ez({callback:w,disabled:m||!s});const A=(0,n.useCallback)((e,t)=>{if(!x){return}if(t){x.unobserve(t);p.current=false}if(e){x.observe(e)}},[x]);const[Y,k]=(0,l/* .useNodeRef */.lk)(A);const I=(0,l/* .useLatestValue */.YN)(t);(0,n.useEffect)(()=>{if(!x||!Y.current){return}x.disconnect();p.current=false;x.observe(Y.current)},[Y,x]);(0,n.useEffect)(()=>{d({type:h.RegisterDroppable,element:{id:a,key:i,disabled:r,node:Y,rect:v,data:I}});return()=>d({type:h.UnregisterDroppable,key:i,id:a})},[a]);(0,n.useEffect)(()=>{if(r!==f.current.disabled){d({type:h.SetDroppableDisabled,id:a,key:i,disabled:r});f.current.disabled=r}},[a,i,r,d]);return{active:s,rect:v,isOver:(c==null?void 0:c.id)===a,node:Y,over:c,setNodeRef:k}}function t_(e){let{animation:t,children:r}=e;const[o,i]=(0,n.useState)(null);const[s,d]=(0,n.useState)(null);const c=(0,l/* .usePrevious */.ZC)(r);if(!r&&!o&&c){i(c)}(0,l/* .useIsomorphicLayoutEffect */.Es)(()=>{if(!s){return}const e=o==null?void 0:o.key;const r=o==null?void 0:o.props.id;if(e==null||r==null){i(null);return}Promise.resolve(t(r,s)).then(()=>{i(null)})},[t,o,s]);return a().createElement(a().Fragment,null,r,o?(0,n.cloneElement)(o,{ref:d}):null)}const ty={x:0,y:0,scaleX:1,scaleY:1};function tw(e){let{children:t}=e;return a().createElement(te.Provider,{value:e7},a().createElement(ts.Provider,{value:ty},t))}const tx={position:"fixed",touchAction:"none"};const tA=e=>{const t=(0,l/* .isKeyboardEvent */.kx)(e);return t?"transform 250ms ease":undefined};const tY=/*#__PURE__*/(0,n.forwardRef)((e,t)=>{let{as:r,activatorEvent:n,adjustScale:o,children:i,className:s,rect:d,style:c,transform:u,transition:f=tA}=e;if(!d){return null}const p=o?u:{...u,scaleX:1,scaleY:1};const v={...tx,width:d.width,height:d.height,top:d.top,left:d.left,transform:l/* .CSS.Transform.toString */.Ks.Transform.toString(p),transformOrigin:o&&n?w(n,d):undefined,transition:typeof f==="function"?f(n):f,...c};return a().createElement(r,{className:s,style:v,ref:t},i)});const tk=e=>t=>{let{active:r,dragOverlay:n}=t;const a={};const{styles:o,className:i}=e;if(o!=null&&o.active){for(const[e,t]of Object.entries(o.active)){if(t===undefined){continue}a[e]=r.node.style.getPropertyValue(e);r.node.style.setProperty(e,t)}}if(o!=null&&o.dragOverlay){for(const[e,t]of Object.entries(o.dragOverlay)){if(t===undefined){continue}n.node.style.setProperty(e,t)}}if(i!=null&&i.active){r.node.classList.add(i.active)}if(i!=null&&i.dragOverlay){n.node.classList.add(i.dragOverlay)}return function e(){for(const[e,t]of Object.entries(a)){r.node.style.setProperty(e,t)}if(i!=null&&i.active){r.node.classList.remove(i.active)}}};const tI=e=>{let{transform:{initial:t,final:r}}=e;return[{transform:l/* .CSS.Transform.toString */.Ks.Transform.toString(t)},{transform:l/* .CSS.Transform.toString */.Ks.Transform.toString(r)}]};const tD={duration:250,easing:"ease",keyframes:tI,sideEffects:/*#__PURE__*/tk({styles:{active:{opacity:"0"}}})};function tC(e){let{config:t,draggableNodes:r,droppableContainers:n,measuringConfiguration:a}=e;return(0,l/* .useEvent */._q)((e,o)=>{if(t===null){return}const i=r.get(e);if(!i){return}const s=i.node.current;if(!s){return}const d=e4(o);if(!d){return}const{transform:c}=(0,l/* .getWindow */.zk)(o).getComputedStyle(o);const u=O(c);if(!u){return}const f=typeof t==="function"?t:tS(t);ei(s,a.draggable.measure);return f({active:{id:e,data:i.data,node:s,rect:a.draggable.measure(s)},draggableNodes:r,dragOverlay:{node:o,rect:a.dragOverlay.measure(d)},droppableContainers:n,measuringConfiguration:a,transform:u})})}function tS(e){const{duration:t,easing:r,sideEffects:n,keyframes:a}={...tD,...e};return e=>{let{active:o,dragOverlay:i,transform:l,...s}=e;if(!t){// Do not animate if animation duration is zero.
return}const d={x:i.rect.left-o.rect.left,y:i.rect.top-o.rect.top};const c={scaleX:l.scaleX!==1?o.rect.width*l.scaleX/i.rect.width:1,scaleY:l.scaleY!==1?o.rect.height*l.scaleY/i.rect.height:1};const u={x:l.x-d.x,y:l.y-d.y,...c};const f=a({...s,active:o,dragOverlay:i,transform:{initial:l,final:u}});const[p]=f;const v=f[f.length-1];if(JSON.stringify(p)===JSON.stringify(v)){// The start and end keyframes are the same, infer that there is no animation needed.
return}const h=n==null?void 0:n({active:o,dragOverlay:i,...s});const g=i.node.animate(f,{duration:t,easing:r,fill:"forwards"});return new Promise(e=>{g.onfinish=()=>{h==null?void 0:h();e()}})}}let tM=0;function tE(e){return(0,n.useMemo)(()=>{if(e==null){return}tM++;return tM},[e])}const tT=/*#__PURE__*/a().memo(e=>{let{adjustScale:t=false,children:r,dropAnimation:o,style:i,transition:l,modifiers:s,wrapperElement:d="div",className:c,zIndex:u=999}=e;const{activatorEvent:f,active:p,activeNodeRect:v,containerNodeRect:h,draggableNodes:g,droppableContainers:m,dragOverlay:b,over:_,measuringConfiguration:y,scrollableAncestors:w,scrollableAncestorRects:x,windowRect:A}=th();const Y=(0,n.useContext)(ts);const k=tE(p==null?void 0:p.id);const I=to(s,{activatorEvent:f,active:p,activeNodeRect:v,containerNodeRect:h,draggingNodeRect:b.rect,over:_,overlayNodeRect:b.rect,scrollableAncestors:w,scrollableAncestorRects:x,transform:Y,windowRect:A});const D=eR(v);const C=tC({config:o,draggableNodes:g,droppableContainers:m,measuringConfiguration:y});// We need to wait for the active node to be measured before connecting the drag overlay ref
// otherwise collisions can be computed against a mispositioned drag overlay
const S=D?b.setRef:undefined;return a().createElement(tw,null,a().createElement(t_,{animation:C},p&&k?a().createElement(tY,{key:k,id:p.id,ref:S,as:d,activatorEvent:f,adjustScale:t,className:c,transition:l,rect:D,style:{zIndex:u,...i},transform:I},r):null))});//# sourceMappingURL=core.esm.js.map
},97313:function(e,t,r){r.d(t,{Q_:()=>c});/* import */var n=r(37893);function a(e){return t=>{let{transform:r}=t;return{...r,x:Math.ceil(r.x/e)*e,y:Math.ceil(r.y/e)*e}}}const o=e=>{let{transform:t}=e;return{...t,y:0}};function i(e,t,r){const n={...e};if(t.top+e.y<=r.top){n.y=r.top-t.top}else if(t.bottom+e.y>=r.top+r.height){n.y=r.top+r.height-t.bottom}if(t.left+e.x<=r.left){n.x=r.left-t.left}else if(t.right+e.x>=r.left+r.width){n.x=r.left+r.width-t.right}return n}const l=e=>{let{containerNodeRect:t,draggingNodeRect:r,transform:n}=e;if(!r||!t){return n}return i(n,r,t)};const s=e=>{let{draggingNodeRect:t,transform:r,scrollableAncestorRects:n}=e;const a=n[0];if(!t||!a){return r}return i(r,t,a)};const d=e=>{let{transform:t}=e;return{...t,x:0}};const c=e=>{let{transform:t,draggingNodeRect:r,windowRect:n}=e;if(!r||!n){return t}return i(t,r,n)};const u=e=>{let{activatorEvent:t,draggingNodeRect:r,transform:n}=e;if(r&&t){const e=getEventCoordinates(t);if(!e){return n}const a=e.x-r.left;const o=e.y-r.top;return{...n,x:n.x+a-r.width/2,y:n.y+o-r.height/2}}return n};//# sourceMappingURL=modifiers.esm.js.map
},905:function(e,t,r){r.d(t,{JR:()=>K,_G:()=>_,gB:()=>A,gl:()=>E,uU:()=>k});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(7697);/* import */var i=r(37893);/**
 * Move an array item to a different position. Returns a new array with the item moved to the new position.
 */function l(e,t,r){const n=e.slice();n.splice(r<0?n.length+r:r,0,n.splice(t,1)[0]);return n}/**
 * Swap an array item to a different position. Returns a new array with the item swapped to the new position.
 */function s(e,t,r){const n=e.slice();n[t]=e[r];n[r]=e[t];return n}function d(e,t){return e.reduce((e,r,n)=>{const a=t.get(r);if(a){e[n]=a}return e},Array(e.length))}function c(e){return e!==null&&e>=0}function u(e,t){if(e===t){return true}if(e.length!==t.length){return false}for(let r=0;r<e.length;r++){if(e[r]!==t[r]){return false}}return true}function f(e){if(typeof e==="boolean"){return{draggable:e,droppable:e}}return e}// To-do: We should be calculating scale transformation
const p=/* unused pure expression or super */null&&{scaleX:1,scaleY:1};const v=e=>{var t;let{rects:r,activeNodeRect:n,activeIndex:a,overIndex:o,index:i}=e;const l=(t=r[a])!=null?t:n;if(!l){return null}const s=h(r,i,a);if(i===a){const e=r[o];if(!e){return null}return{x:a<o?e.left+e.width-(l.left+l.width):e.left-l.left,y:0,...p}}if(i>a&&i<=o){return{x:-l.width-s,y:0,...p}}if(i<a&&i>=o){return{x:l.width+s,y:0,...p}}return{x:0,y:0,...p}};function h(e,t,r){const n=e[t];const a=e[t-1];const o=e[t+1];if(!n||!a&&!o){return 0}if(r<t){return a?n.left-(a.left+a.width):o.left-(n.left+n.width)}return o?o.left-(n.left+n.width):n.left-(a.left+a.width)}const g=e=>{let{rects:t,activeIndex:r,overIndex:n,index:a}=e;const o=l(t,n,r);const i=t[a];const s=o[a];if(!s||!i){return null}return{x:s.left-i.left,y:s.top-i.top,scaleX:s.width/i.width,scaleY:s.height/i.height}};const m=e=>{let{activeIndex:t,index:r,rects:n,overIndex:a}=e;let o;let i;if(r===t){o=n[r];i=n[a]}if(r===a){o=n[r];i=n[t]}if(!i||!o){return null}return{x:i.left-o.left,y:i.top-o.top,scaleX:i.width/o.width,scaleY:i.height/o.height}};// To-do: We should be calculating scale transformation
const b={scaleX:1,scaleY:1};const _=e=>{var t;let{activeIndex:r,activeNodeRect:n,index:a,rects:o,overIndex:i}=e;const l=(t=o[r])!=null?t:n;if(!l){return null}if(a===r){const e=o[i];if(!e){return null}return{x:0,y:r<i?e.top+e.height-(l.top+l.height):e.top-l.top,...b}}const s=y(o,a,r);if(a>r&&a<=i){return{x:0,y:-l.height-s,...b}}if(a<r&&a>=i){return{x:0,y:l.height+s,...b}}return{x:0,y:0,...b}};function y(e,t,r){const n=e[t];const a=e[t-1];const o=e[t+1];if(!n){return 0}if(r<t){return a?n.top-(a.top+a.height):o?o.top-(n.top+n.height):0}return o?o.top-(n.top+n.height):a?n.top-(a.top+a.height):0}const w="Sortable";const x=/*#__PURE__*/a().createContext({activeIndex:-1,containerId:w,disableTransforms:false,items:[],overIndex:-1,useDragOverlay:false,sortedRects:[],strategy:g,disabled:{draggable:false,droppable:false}});function A(e){let{children:t,id:r,items:l,strategy:s=g,disabled:c=false}=e;const{active:p,dragOverlay:v,droppableRects:h,over:m,measureDroppableContainers:b}=(0,o/* .useDndContext */.fF)();const _=(0,i/* .useUniqueId */.YG)(w,r);const y=Boolean(v.rect!==null);const A=(0,n.useMemo)(()=>l.map(e=>typeof e==="object"&&"id"in e?e.id:e),[l]);const Y=p!=null;const k=p?A.indexOf(p.id):-1;const I=m?A.indexOf(m.id):-1;const D=(0,n.useRef)(A);const C=!u(A,D.current);const S=I!==-1&&k===-1||C;const M=f(c);(0,i/* .useIsomorphicLayoutEffect */.Es)(()=>{if(C&&Y){b(A)}},[C,A,Y,b]);(0,n.useEffect)(()=>{D.current=A},[A]);const E=(0,n.useMemo)(()=>({activeIndex:k,containerId:_,disabled:M,disableTransforms:S,items:A,overIndex:I,useDragOverlay:y,sortedRects:d(A,h),strategy:s}),[k,_,M.draggable,M.droppable,S,A,I,h,y,s]);return a().createElement(x.Provider,{value:E},t)}const Y=e=>{let{id:t,items:r,activeIndex:n,overIndex:a}=e;return l(r,n,a).indexOf(t)};const k=e=>{let{containerId:t,isSorting:r,wasDragging:n,index:a,items:o,newIndex:i,previousItems:l,previousContainerId:s,transition:d}=e;if(!d||!n){return false}if(l!==o&&a===i){return false}if(r){return true}return i!==a&&t===s};const I={duration:200,easing:"ease"};const D="transform";const C=/*#__PURE__*/i/* .CSS.Transition.toString */.Ks.Transition.toString({property:D,duration:0,easing:"linear"});const S={roleDescription:"sortable"};/*
 * When the index of an item changes while sorting,
 * we need to temporarily disable the transforms
 */function M(e){let{disabled:t,index:r,node:a,rect:l}=e;const[s,d]=(0,n.useState)(null);const c=(0,n.useRef)(r);(0,i/* .useIsomorphicLayoutEffect */.Es)(()=>{if(!t&&r!==c.current&&a.current){const e=l.current;if(e){const t=(0,o/* .getClientRect */.Sj)(a.current,{ignoreTransform:true});const r={x:e.left-t.left,y:e.top-t.top,scaleX:e.width/t.width,scaleY:e.height/t.height};if(r.x||r.y){d(r)}}}if(r!==c.current){c.current=r}},[t,r,a,l]);(0,n.useEffect)(()=>{if(s){d(null)}},[s]);return s}function E(e){let{animateLayoutChanges:t=k,attributes:r,disabled:a,data:l,getNewIndex:s=Y,id:d,strategy:u,resizeObserverConfig:f,transition:p=I}=e;const{items:v,containerId:h,activeIndex:g,disabled:m,disableTransforms:b,sortedRects:_,overIndex:y,useDragOverlay:w,strategy:A}=(0,n.useContext)(x);const E=T(a,m);const H=v.indexOf(d);const F=(0,n.useMemo)(()=>({sortable:{containerId:h,index:H,items:v},...l}),[h,l,H,v]);const K=(0,n.useMemo)(()=>v.slice(v.indexOf(d)),[v,d]);const{rect:N,node:O,isOver:P,setNodeRef:L}=(0,o/* .useDroppable */.zM)({id:d,data:F,disabled:E.droppable,resizeObserverConfig:{updateMeasurementsFor:K,...f}});const{active:R,activatorEvent:W,activeNodeRect:B,attributes:z,setNodeRef:U,listeners:j,isDragging:q,over:V,setActivatorNodeRef:G,transform:Q}=(0,o/* .useDraggable */.PM)({id:d,data:F,attributes:{...S,...r},disabled:E.draggable});const $=(0,i/* .useCombinedRefs */.jn)(L,U);const Z=Boolean(R);const X=Z&&!b&&c(g)&&c(y);const J=!w&&q;const ee=J&&X?Q:null;const et=u!=null?u:A;const er=X?ee!=null?ee:et({rects:_,activeNodeRect:B,activeIndex:g,overIndex:y,index:H}):null;const en=c(g)&&c(y)?s({id:d,items:v,activeIndex:g,overIndex:y}):H;const ea=R==null?void 0:R.id;const eo=(0,n.useRef)({activeId:ea,items:v,newIndex:en,containerId:h});const ei=v!==eo.current.items;const el=t({active:R,containerId:h,isDragging:q,isSorting:Z,id:d,index:H,items:v,newIndex:eo.current.newIndex,previousItems:eo.current.items,previousContainerId:eo.current.containerId,transition:p,wasDragging:eo.current.activeId!=null});const es=M({disabled:!el,index:H,node:O,rect:N});(0,n.useEffect)(()=>{if(Z&&eo.current.newIndex!==en){eo.current.newIndex=en}if(h!==eo.current.containerId){eo.current.containerId=h}if(v!==eo.current.items){eo.current.items=v}},[Z,en,h,v]);(0,n.useEffect)(()=>{if(ea===eo.current.activeId){return}if(ea!=null&&eo.current.activeId==null){eo.current.activeId=ea;return}const e=setTimeout(()=>{eo.current.activeId=ea},50);return()=>clearTimeout(e)},[ea]);return{active:R,activeIndex:g,attributes:z,data:F,rect:N,index:H,newIndex:en,items:v,isOver:P,isSorting:Z,isDragging:q,listeners:j,node:O,overIndex:y,over:V,setNodeRef:$,setActivatorNodeRef:G,setDroppableNodeRef:L,setDraggableNodeRef:U,transform:es!=null?es:er,transition:ed()};function ed(){if(es||// Or to prevent items jumping to back to their "new" position when items change
ei&&eo.current.newIndex===H){return C}if(J&&!(0,i/* .isKeyboardEvent */.kx)(W)||!p){return undefined}if(Z||el){return i/* .CSS.Transition.toString */.Ks.Transition.toString({...p,property:D})}return undefined}}function T(e,t){var r,n;if(typeof e==="boolean"){return{draggable:e,// Backwards compatibility
droppable:false}}return{draggable:(r=e==null?void 0:e.draggable)!=null?r:t.draggable,droppable:(n=e==null?void 0:e.droppable)!=null?n:t.droppable}}function H(e){if(!e){return false}const t=e.data.current;if(t&&"sortable"in t&&typeof t.sortable==="object"&&"containerId"in t.sortable&&"items"in t.sortable&&"index"in t.sortable){return true}return false}const F=[o/* .KeyboardCode.Down */.vL.Down,o/* .KeyboardCode.Right */.vL.Right,o/* .KeyboardCode.Up */.vL.Up,o/* .KeyboardCode.Left */.vL.Left];const K=(e,t)=>{let{context:{active:r,collisionRect:n,droppableRects:a,droppableContainers:l,over:s,scrollableAncestors:d}}=t;if(F.includes(e.code)){e.preventDefault();if(!r||!n){return}const t=[];l.getEnabled().forEach(r=>{if(!r||r!=null&&r.disabled){return}const i=a.get(r.id);if(!i){return}switch(e.code){case o/* .KeyboardCode.Down */.vL.Down:if(n.top<i.top){t.push(r)}break;case o/* .KeyboardCode.Up */.vL.Up:if(n.top>i.top){t.push(r)}break;case o/* .KeyboardCode.Left */.vL.Left:if(n.left>i.left){t.push(r)}break;case o/* .KeyboardCode.Right */.vL.Right:if(n.left<i.left){t.push(r)}break}});const c=(0,o/* .closestCorners */.y$)({active:r,collisionRect:n,droppableRects:a,droppableContainers:t,pointerCoordinates:null});let u=(0,o/* .getFirstCollision */.Vy)(c,"id");if(u===(s==null?void 0:s.id)&&c.length>1){u=c[1].id}if(u!=null){const e=l.get(r.id);const t=l.get(u);const s=t?a.get(t.id):null;const c=t==null?void 0:t.node.current;if(c&&s&&e&&t){const r=(0,o/* .getScrollableAncestors */.sl)(c);const a=r.some((e,t)=>d[t]!==e);const l=N(e,t);const u=O(e,t);const f=a||!l?{x:0,y:0}:{x:u?n.width-s.width:0,y:u?n.height-s.height:0};const p={x:s.left,y:s.top};const v=f.x&&f.y?p:(0,i/* .subtract */.Re)(p,f);return v}}}return undefined};function N(e,t){if(!H(e)||!H(t)){return false}return e.data.current.sortable.containerId===t.data.current.sortable.containerId}function O(e,t){if(!H(e)||!H(t)){return false}if(!N(e,t)){return false}return e.data.current.sortable.index<t.data.current.sortable.index}//# sourceMappingURL=sortable.esm.js.map
},37893:function(e,t,r){r.d(t,{$$:()=>g,Es:()=>v,KG:()=>b,Ks:()=>M,Ll:()=>s,Re:()=>k,Sw:()=>i,TW:()=>p,WQ:()=>Y,YG:()=>x,YN:()=>m,ZC:()=>y,_q:()=>h,ag:()=>T,e_:()=>S,jn:()=>o,kx:()=>D,l6:()=>l,lk:()=>_,sb:()=>u,wz:()=>c,xZ:()=>f,zk:()=>d});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);function o(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return(0,n.useMemo)(()=>e=>{t.forEach(t=>t(e))},t)}// https://github.com/facebook/react/blob/master/packages/shared/ExecutionEnvironment.js
const i=typeof window!=="undefined"&&typeof window.document!=="undefined"&&typeof window.document.createElement!=="undefined";function l(e){const t=Object.prototype.toString.call(e);return t==="[object Window]"||// In Electron context the Window object serializes to [object global]
t==="[object global]"}function s(e){return"nodeType"in e}function d(e){var t,r;if(!e){return window}if(l(e)){return e}if(!s(e)){return window}return(t=(r=e.ownerDocument)==null?void 0:r.defaultView)!=null?t:window}function c(e){const{Document:t}=d(e);return e instanceof t}function u(e){if(l(e)){return false}return e instanceof d(e).HTMLElement}function f(e){return e instanceof d(e).SVGElement}function p(e){if(!e){return document}if(l(e)){return e.document}if(!s(e)){return document}if(c(e)){return e}if(u(e)||f(e)){return e.ownerDocument}return document}/**
 * A hook that resolves to useEffect on the server and useLayoutEffect on the client
 * @param callback {function} Callback function that is invoked when the dependencies of the hook change
 */const v=i?n.useLayoutEffect:n.useEffect;function h(e){const t=(0,n.useRef)(e);v(()=>{t.current=e});return(0,n.useCallback)(function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++){r[n]=arguments[n]}return t.current==null?void 0:t.current(...r)},[])}function g(){const e=(0,n.useRef)(null);const t=(0,n.useCallback)((t,r)=>{e.current=setInterval(t,r)},[]);const r=(0,n.useCallback)(()=>{if(e.current!==null){clearInterval(e.current);e.current=null}},[]);return[t,r]}function m(e,t){if(t===void 0){t=[e]}const r=(0,n.useRef)(e);v(()=>{if(r.current!==e){r.current=e}},t);return r}function b(e,t){const r=(0,n.useRef)();return(0,n.useMemo)(()=>{const t=e(r.current);r.current=t;return t},[...t])}function _(e){const t=h(e);const r=(0,n.useRef)(null);const a=(0,n.useCallback)(e=>{if(e!==r.current){t==null?void 0:t(e,r.current)}r.current=e},[]);return[r,a]}function y(e){const t=(0,n.useRef)();(0,n.useEffect)(()=>{t.current=e},[e]);return t.current}let w={};function x(e,t){return(0,n.useMemo)(()=>{if(t){return t}const r=w[e]==null?0:w[e]+1;w[e]=r;return e+"-"+r},[e,t])}function A(e){return function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++){n[a-1]=arguments[a]}return n.reduce((t,r)=>{const n=Object.entries(r);for(const[r,a]of n){const n=t[r];if(n!=null){t[r]=n+e*a}}return t},{...t})}}const Y=/*#__PURE__*/A(1);const k=/*#__PURE__*/A(-1);function I(e){return"clientX"in e&&"clientY"in e}function D(e){if(!e){return false}const{KeyboardEvent:t}=d(e.target);return t&&e instanceof t}function C(e){if(!e){return false}const{TouchEvent:t}=d(e.target);return t&&e instanceof t}/**
 * Returns the normalized x and y coordinates for mouse and touch events.
 */function S(e){if(C(e)){if(e.touches&&e.touches.length){const{clientX:t,clientY:r}=e.touches[0];return{x:t,y:r}}else if(e.changedTouches&&e.changedTouches.length){const{clientX:t,clientY:r}=e.changedTouches[0];return{x:t,y:r}}}if(I(e)){return{x:e.clientX,y:e.clientY}}return null}const M=/*#__PURE__*/Object.freeze({Translate:{toString(e){if(!e){return}const{x:t,y:r}=e;return"translate3d("+(t?Math.round(t):0)+"px, "+(r?Math.round(r):0)+"px, 0)"}},Scale:{toString(e){if(!e){return}const{scaleX:t,scaleY:r}=e;return"scaleX("+t+") scaleY("+r+")"}},Transform:{toString(e){if(!e){return}return[M.Translate.toString(e),M.Scale.toString(e)].join(" ")}},Transition:{toString(e){let{property:t,duration:r,easing:n}=e;return t+" "+r+"ms "+n}}});const E="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function T(e){if(e.matches(E)){return e}return e.querySelector(E)}//# sourceMappingURL=utilities.esm.js.map
},44996:function(e,t,r){r.d(t,{A:()=>s});/* import */var n=r(7656);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(38761);/* import */var i=/*#__PURE__*/r.n(o);// Imports
var l=i()(a());// Module
l.push([e.id,`/* Variables declaration */
.rdp-root {
  --rdp-accent-color: blue; /* The accent color used for selected days and UI elements. */
  --rdp-accent-background-color: #f0f0ff; /* The accent background color used for selected days and UI elements. */

  --rdp-day-height: 44px; /* The height of the day cells. */
  --rdp-day-width: 44px; /* The width of the day cells. */

  --rdp-day_button-border-radius: 100%; /* The border radius of the day cells. */
  --rdp-day_button-border: 2px solid transparent; /* The border of the day cells. */
  --rdp-day_button-height: 42px; /* The height of the day cells. */
  --rdp-day_button-width: 42px; /* The width of the day cells. */

  --rdp-selected-border: 2px solid var(--rdp-accent-color); /* The border of the selected days. */
  --rdp-disabled-opacity: 0.5; /* The opacity of the disabled days. */
  --rdp-outside-opacity: 0.75; /* The opacity of the days outside the current month. */
  --rdp-today-color: var(--rdp-accent-color); /* The color of the today's date. */

  --rdp-dropdown-gap: 0.5rem; /* The gap between the dropdowns used in the month captons. */

  --rdp-months-gap: 2rem; /* The gap between the months in the multi-month view. */

  --rdp-nav_button-disabled-opacity: 0.5; /* The opacity of the disabled navigation buttons. */
  --rdp-nav_button-height: 2.25rem; /* The height of the navigation buttons. */
  --rdp-nav_button-width: 2.25rem; /* The width of the navigation buttons. */
  --rdp-nav-height: 2.75rem; /* The height of the navigation bar. */

  --rdp-range_middle-background-color: var(--rdp-accent-background-color); /* The color of the background for days in the middle of a range. */
  --rdp-range_middle-color: inherit; /* The color of the range text. */

  --rdp-range_start-color: white; /* The color of the range text. */
  --rdp-range_start-background: linear-gradient(
    var(--rdp-gradient-direction),
    transparent 50%,
    var(--rdp-range_middle-background-color) 50%
  ); /* Used for the background of the start of the selected range. */
  --rdp-range_start-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the start of the selected range. */

  --rdp-range_end-background: linear-gradient(
    var(--rdp-gradient-direction),
    var(--rdp-range_middle-background-color) 50%,
    transparent 50%
  ); /* Used for the background of the end of the selected range. */
  --rdp-range_end-color: white; /* The color of the range text. */
  --rdp-range_end-date-background-color: var(--rdp-accent-color); /* The background color of the date when at the end of the selected range. */

  --rdp-week_number-border-radius: 100%; /* The border radius of the week number. */
  --rdp-week_number-border: 2px solid transparent; /* The border of the week number. */

  --rdp-week_number-height: var(--rdp-day-height); /* The height of the week number cells. */
  --rdp-week_number-opacity: 0.75; /* The opacity of the week number. */
  --rdp-week_number-width: var(--rdp-day-width); /* The width of the week number cells. */
  --rdp-weeknumber-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-weekday-opacity: 0.75; /* The opacity of the weekday. */
  --rdp-weekday-padding: 0.5rem 0rem; /* The padding of the weekday. */
  --rdp-weekday-text-align: center; /* The text alignment of the weekday cells. */

  --rdp-gradient-direction: 90deg;

  --rdp-animation_duration: 0.3s;
  --rdp-animation_timing: cubic-bezier(0.4, 0, 0.2, 1);
}

.rdp-root[dir="rtl"] {
  --rdp-gradient-direction: -90deg;
}

.rdp-root[data-broadcast-calendar="true"] {
  --rdp-outside-opacity: unset;
}

/* Root of the component. */
.rdp-root {
  position: relative; /* Required to position the navigation toolbar. */
  box-sizing: border-box;
}

.rdp-root * {
  box-sizing: border-box;
}

.rdp-day {
  width: var(--rdp-day-width);
  height: var(--rdp-day-height);
  text-align: center;
}

.rdp-day_button {
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  justify-content: center;
  align-items: center;
  display: flex;

  width: var(--rdp-day_button-width);
  height: var(--rdp-day_button-height);
  border: var(--rdp-day_button-border);
  border-radius: var(--rdp-day_button-border-radius);
}

.rdp-day_button:disabled {
  cursor: revert;
}

.rdp-caption_label {
  z-index: 1;

  position: relative;
  display: inline-flex;
  align-items: center;

  white-space: nowrap;
  border: 0;
}

.rdp-dropdown:focus-visible ~ .rdp-caption_label {
  outline: 5px auto Highlight;
  /* biome-ignore lint/suspicious/noDuplicateProperties: backward compatibility */
  outline: 5px auto -webkit-focus-ring-color;
}

.rdp-button_next,
.rdp-button_previous {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  -moz-appearance: none;
  -webkit-appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  appearance: none;

  width: var(--rdp-nav_button-width);
  height: var(--rdp-nav_button-height);
}

.rdp-button_next:disabled,
.rdp-button_next[aria-disabled="true"],
.rdp-button_previous:disabled,
.rdp-button_previous[aria-disabled="true"] {
  cursor: revert;

  opacity: var(--rdp-nav_button-disabled-opacity);
}

.rdp-chevron {
  display: inline-block;
  fill: var(--rdp-accent-color);
}

.rdp-root[dir="rtl"] .rdp-nav .rdp-chevron {
  transform: rotate(180deg);
  transform-origin: 50%;
}

.rdp-dropdowns {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--rdp-dropdown-gap);
}
.rdp-dropdown {
  z-index: 2;

  /* Reset */
  opacity: 0;
  appearance: none;
  position: absolute;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  cursor: inherit;
  border: none;
  line-height: inherit;
}

.rdp-dropdown_root {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.rdp-dropdown_root[data-disabled="true"] .rdp-chevron {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-month_caption {
  display: flex;
  align-content: center;
  height: var(--rdp-nav-height);
  font-weight: bold;
  font-size: large;
}

.rdp-root[data-nav-layout="around"] .rdp-month,
.rdp-root[data-nav-layout="after"] .rdp-month {
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-month_caption {
  justify-content: center;
  margin-inline-start: var(--rdp-nav_button-width);
  margin-inline-end: var(--rdp-nav_button-width);
  position: relative;
}

.rdp-root[data-nav-layout="around"] .rdp-button_previous {
  position: absolute;
  inset-inline-start: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
}

.rdp-root[data-nav-layout="around"] .rdp-button_next {
  position: absolute;
  inset-inline-end: 0;
  top: 0;
  height: var(--rdp-nav-height);
  display: inline-flex;
  justify-content: center;
}

.rdp-months {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: var(--rdp-months-gap);
  max-width: fit-content;
}

.rdp-month_grid {
  border-collapse: collapse;
}

.rdp-nav {
  position: absolute;
  inset-block-start: 0;
  inset-inline-end: 0;

  display: flex;
  align-items: center;

  height: var(--rdp-nav-height);
}

.rdp-weekday {
  opacity: var(--rdp-weekday-opacity);
  padding: var(--rdp-weekday-padding);
  font-weight: 500;
  font-size: smaller;
  text-align: var(--rdp-weekday-text-align);
  text-transform: var(--rdp-weekday-text-transform);
}

.rdp-week_number {
  opacity: var(--rdp-week_number-opacity);
  font-weight: 400;
  font-size: small;
  height: var(--rdp-week_number-height);
  width: var(--rdp-week_number-width);
  border: var(--rdp-week_number-border);
  border-radius: var(--rdp-week_number-border-radius);
  text-align: var(--rdp-weeknumber-text-align);
}

/* DAY MODIFIERS */
.rdp-today:not(.rdp-outside) {
  color: var(--rdp-today-color);
}

.rdp-selected {
  font-weight: bold;
  font-size: large;
}

.rdp-selected .rdp-day_button {
  border: var(--rdp-selected-border);
}

.rdp-outside {
  opacity: var(--rdp-outside-opacity);
}

.rdp-disabled:not(.rdp-selected) {
  opacity: var(--rdp-disabled-opacity);
}

.rdp-hidden {
  visibility: hidden;
  color: var(--rdp-range_start-color);
}

.rdp-range_start {
  background: var(--rdp-range_start-background);
}

.rdp-range_start .rdp-day_button {
  background-color: var(--rdp-range_start-date-background-color);
  color: var(--rdp-range_start-color);
}

.rdp-range_middle {
  background-color: var(--rdp-range_middle-background-color);
}

.rdp-range_middle .rdp-day_button {
  border: unset;
  border-radius: unset;
  color: var(--rdp-range_middle-color);
}

.rdp-range_end {
  background: var(--rdp-range_end-background);
  color: var(--rdp-range_end-color);
}

.rdp-range_end .rdp-day_button {
  color: var(--rdp-range_start-color);
  background-color: var(--rdp-range_end-date-background-color);
}

.rdp-range_start.rdp-range_end {
  background: revert;
}

.rdp-focusable {
  cursor: pointer;
}

@keyframes rdp-slide_in_left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_in_right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes rdp-slide_out_left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes rdp-slide_out_right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}

.rdp-weeks_before_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_before_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-weeks_after_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_enter {
  animation: rdp-slide_in_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_exit {
  animation: rdp-slide_out_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_before_enter {
  animation: rdp-slide_in_right var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-root[dir="rtl"] .rdp-weeks_after_exit {
  animation: rdp-slide_out_left var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

@keyframes rdp-fade_in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes rdp-fade_out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.rdp-caption_after_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_after_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_enter {
  animation: rdp-fade_in var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}

.rdp-caption_before_exit {
  animation: rdp-fade_out var(--rdp-animation_duration)
    var(--rdp-animation_timing) forwards;
}
`,""]);// Exports
/* export default */const s=l},38761:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,a,o){if(typeof e==="string"){e=[[null,e,undefined]]}var i={};if(n){for(var l=0;l<this.length;l++){var s=this[l][0];if(s!=null){i[s]=true}}}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);if(n&&i[c[0]]){continue}if(typeof o!=="undefined"){if(typeof c[5]==="undefined"){c[5]=o}else{c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}");c[5]=o}}if(r){if(!c[2]){c[2]=r}else{c[1]="@media ".concat(c[2]," {").concat(c[1],"}");c[2]=r}}if(a){if(!c[4]){c[4]="".concat(a)}else{c[1]="@supports (".concat(c[4],") {").concat(c[1],"}");c[4]=a}}t.push(c)}};return t}},7656:function(e){e.exports=function(e){return e[1]}},55042:function(e,t,r){t.__esModule=true;t["default"]=h;var n=i(r(65734));var a=i(r(19340));var o=i(r(32108));function i(e){return e&&e.__esModule?e:{"default":e}}var l=/^#[a-fA-F0-9]{6}$/;var s=/^#[a-fA-F0-9]{8}$/;var d=/^#[a-fA-F0-9]{3}$/;var c=/^#[a-fA-F0-9]{4}$/;var u=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;var f=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;var p=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;var v=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */function h(e){if(typeof e!=="string"){throw new o["default"](3)}var t=(0,a["default"])(e);if(t.match(l)){return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)}}if(t.match(s)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(d)){return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)}}if(t.match(c)){var i=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:i}}var h=u.exec(t);if(h){return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var g=f.exec(t.substring(0,50));if(g){return{red:parseInt(""+g[1],10),green:parseInt(""+g[2],10),blue:parseInt(""+g[3],10),alpha:parseFloat(""+g[4])>1?parseFloat(""+g[4])/100:parseFloat(""+g[4])}}var m=p.exec(t);if(m){var b=parseInt(""+m[1],10);var _=parseInt(""+m[2],10)/100;var y=parseInt(""+m[3],10)/100;var w="rgb("+(0,n["default"])(b,_,y)+")";var x=u.exec(w);if(!x){throw new o["default"](4,t,w)}return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10)}}var A=v.exec(t.substring(0,50));if(A){var Y=parseInt(""+A[1],10);var k=parseInt(""+A[2],10)/100;var I=parseInt(""+A[3],10)/100;var D="rgb("+(0,n["default"])(Y,k,I)+")";var C=u.exec(D);if(!C){throw new o["default"](4,t,D)}return{red:parseInt(""+C[1],10),green:parseInt(""+C[2],10),blue:parseInt(""+C[3],10),alpha:parseFloat(""+A[4])>1?parseFloat(""+A[4])/100:parseFloat(""+A[4])}}throw new o["default"](5)}e.exports=t["default"]},63292:function(e,t,r){t.__esModule=true;t["default"]=l;var n=i(r(155));var a=i(r(92590));var o=i(r(32108));function i(e){return e&&e.__esModule?e:{"default":e}}/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */function l(e,t,r){if(typeof e==="number"&&typeof t==="number"&&typeof r==="number"){return(0,n["default"])("#"+(0,a["default"])(e)+(0,a["default"])(t)+(0,a["default"])(r))}else if(typeof e==="object"&&t===undefined&&r===undefined){return(0,n["default"])("#"+(0,a["default"])(e.red)+(0,a["default"])(e.green)+(0,a["default"])(e.blue))}throw new o["default"](6)}e.exports=t["default"]},18853:function(e,t,r){t.__esModule=true;t["default"]=l;var n=i(r(55042));var a=i(r(63292));var o=i(r(32108));function i(e){return e&&e.__esModule?e:{"default":e}}/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */function l(e,t,r,i){if(typeof e==="string"&&typeof t==="number"){var l=(0,n["default"])(e);return"rgba("+l.red+","+l.green+","+l.blue+","+t+")"}else if(typeof e==="number"&&typeof t==="number"&&typeof r==="number"&&typeof i==="number"){return i>=1?(0,a["default"])(e,t,r):"rgba("+e+","+t+","+r+","+i+")"}else if(typeof e==="object"&&t===undefined&&r===undefined&&i===undefined){return e.alpha>=1?(0,a["default"])(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new o["default"](7)}e.exports=t["default"]},32108:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function n(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;s(e,t)}function a(e){var t=typeof Map==="function"?new Map:undefined;a=function e(e){if(e===null||!l(e))return e;if(typeof e!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof t!=="undefined"){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return o(e,arguments,d(this).constructor)}r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}});return s(r,e)};return a(e)}function o(e,t,r){if(i())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var a=new(e.bind.apply(e,n));return r&&s(a,r.prototype),a}function i(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(i=function t(){return!!e})()}function l(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch(t){return typeof e==="function"}}function s(e,t){s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(e,t){e.__proto__=t;return e};return s(e,t)}function d(e){d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(e){return e.__proto__||Object.getPrototypeOf(e)};return d(e)}// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js
/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */var c=/* unused pure expression or super */null&&{"1":"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n","2":"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n","3":"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n","4":"Couldn't generate valid rgb string from %s, it returned %s.\n\n","5":"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n","6":"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n","7":"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n","8":"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n","9":"Please provide a number of steps to the modularScale helper.\n\n","10":"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n","11":'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',"12":'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',"13":'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',"14":'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',"15":'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',"16":"You must provide a template to this method.\n\n","17":"You passed an unsupported selector state to this method.\n\n","18":"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n","19":"fromSize and toSize must be provided as stringified numbers with the same units.\n\n","20":"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n","21":"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n","22":"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n","23":"fontFace expects a name of a font-family.\n\n","24":"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n","25":"fontFace expects localFonts to be an array.\n\n","26":"fontFace expects fileFormats to be an array.\n\n","27":"radialGradient requries at least 2 color-stops to properly render.\n\n","28":"Please supply a filename to retinaImage() as the first argument.\n\n","29":"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n","30":"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n","31":"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n","32":"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n","33":"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n","34":"borderRadius expects a radius value as a string or number as the second argument.\n\n","35":'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',"36":"Property must be a string value.\n\n","37":"Syntax Error at %s.\n\n","38":"Formula contains a function that needs parentheses at %s.\n\n","39":"Formula is missing closing parenthesis at %s.\n\n","40":"Formula has too many closing parentheses at %s.\n\n","41":"All values in a formula must have the same unit or be unitless.\n\n","42":"Please provide a number of steps to the modularScale helper.\n\n","43":"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n","44":"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n","45":"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n","46":"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n","47":"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n","48":"fromSize and toSize must be provided as stringified numbers with the same units.\n\n","49":"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n","50":"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n","51":"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n","52":"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n","53":"fontFace expects localFonts to be an array.\n\n","54":"fontFace expects fileFormats to be an array.\n\n","55":"fontFace expects a name of a font-family.\n\n","56":"linearGradient requries at least 2 color-stops to properly render.\n\n","57":"radialGradient requries at least 2 color-stops to properly render.\n\n","58":"Please supply a filename to retinaImage() as the first argument.\n\n","59":"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n","60":"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n","61":"Property must be a string value.\n\n","62":"borderRadius expects a radius value as a string or number as the second argument.\n\n","63":'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',"64":"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n","65":"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n","66":"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n","67":"You must provide a template to this method.\n\n","68":"You passed an unsupported selector state to this method.\n\n","69":'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',"70":'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',"71":'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',"72":'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',"73":"Please provide a valid CSS variable.\n\n","74":"CSS variable not found and no default was provided.\n\n","75":"important requires a valid style object, got a %s instead.\n\n","76":"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n","77":'remToPx expects a value in "rem" but you provided it in "%s".\n\n',"78":'base must be set in "px" or "%" but you set it in "%s".\n'};/**
 * super basic version of sprintf
 * @private
 */function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=t[0];var a=[];var o;for(o=1;o<t.length;o+=1){a.push(t[o])}a.forEach(function(e){n=n.replace(/%[a-z]/,e)});return n}/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */var f=t["default"]=/*#__PURE__*/function(e){n(t,e);function t(t){var n;if(true){n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this}else{var a,o,i}return r(n)}return t}(/*#__PURE__*/a(Error));e.exports=t["default"]},65734:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){return Math.round(e*255)}function n(e,t,n){return r(e)+","+r(t)+","+r(n)}function a(e,t,r,a){if(a===void 0){a=n}if(t===0){// achromatic
return a(r,r,r)}// formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
var o=(e%360+360)%360/60;var i=(1-Math.abs(2*r-1))*t;var l=i*(1-Math.abs(o%2-1));var s=0;var d=0;var c=0;if(o>=0&&o<1){s=i;d=l}else if(o>=1&&o<2){s=l;d=i}else if(o>=2&&o<3){d=i;c=l}else if(o>=3&&o<4){d=l;c=i}else if(o>=4&&o<5){s=l;c=i}else if(o>=5&&o<6){s=i;c=l}var u=r-i/2;var f=s+u;var p=d+u;var v=c+u;return a(f,p,v)}var o=t["default"]=a;e.exports=t["default"]},19340:function(e,t){t.__esModule=true;t["default"]=void 0;var r={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */function n(e){if(typeof e!=="string")return e;var t=e.toLowerCase();return r[t]?"#"+r[t]:e}var a=t["default"]=n;e.exports=t["default"]},92590:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){var t=e.toString(16);return t.length===1?"0"+t:t}var n=t["default"]=r;e.exports=t["default"]},155:function(e,t){t.__esModule=true;t["default"]=void 0;/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */var r=function e(e){if(e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]){return"#"+e[1]+e[3]+e[5]}return e};var n=t["default"]=r;e.exports=t["default"]},30779:function(e,t,r){/* import */var n=r(33392);/* import */var a=/*#__PURE__*/r.n(n);/* import */var o=r(66017);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(26011);/* import */var s=/*#__PURE__*/r.n(l);/* import */var d=r(33936);/* import */var c=/*#__PURE__*/r.n(d);/* import */var u=r(50188);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(16825);/* import */var v=/*#__PURE__*/r.n(p);/* import */var h=r(44996);var g={};g.styleTagTransform=v();g.setAttributes=c();g.insert=s().bind(null,"head");g.domAPI=i();g.insertStyleElement=f();var m=a()(h/* ["default"] */.A,g);/* unused export default */var b=h/* ["default"] */.A&&h/* ["default"].locals */.A.locals?h/* ["default"].locals */.A.locals:undefined},33392:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var o={};var i=[];for(var l=0;l<e.length;l++){var s=e[l];var d=n.base?s[0]+n.base:s[0];var c=o[d]||0;var u="".concat(d," ").concat(c);o[d]=c+1;var f=r(u);var p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(f!==-1){t[f].references++;t[f].updater(p)}else{var v=a(p,n);n.byIndex=l;t.splice(l,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function a(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,a){a=a||{};e=e||[];var o=n(e,a);return function e(e){e=e||[];for(var i=0;i<o.length;i++){var l=o[i];var s=r(l);t[s].references--}var d=n(e,a);for(var c=0;c<o.length;c++){var u=o[c];var f=r(u);if(t[f].references===0){t[f].updater();t.splice(f,1)}}o=d}}},26011:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},50188:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},33936:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},66017:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var a=typeof r.layer!=="undefined";if(a){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(a){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var o=r.sourceMap;if(o&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},16825:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},13190:function(e,t,r){e.exports=r.p+"js/images/3d-d74232c4.png"},22286:function(e,t,r){e.exports=r.p+"js/images/black-and-white-a1d197c0.png"},43623:function(e,t,r){e.exports=r.p+"js/images/concept-ad427b25.png"},71801:function(e,t,r){e.exports=r.p+"js/images/dreamy-72eab497.png"},64613:function(e,t,r){e.exports=r.p+"js/images/filmic-91db8802.png"},36265:function(e,t,r){e.exports=r.p+"js/images/illustration-19074f05.png"},47035:function(e,t,r){e.exports=r.p+"js/images/neon-bfde2ac7.png"},50861:function(e,t,r){e.exports=r.p+"js/images/none-2088b52b.jpg"},92895:function(e,t,r){e.exports=r.p+"js/images/painting-db63dd8a.png"},47719:function(e,t,r){e.exports=r.p+"js/images/photo-7d69e05e.png"},26371:function(e,t,r){e.exports=r.p+"js/images/retro-bcc8eda3.png"},8031:function(e,t,r){e.exports=r.p+"js/images/sketch-319bbedf.png"},67290:function(e,t,r){e.exports=r.p+"js/images/generate-image-2x-7d387dcf.webp"},34837:function(e,t,r){e.exports=r.p+"js/images/generate-image-3e5f50a6.webp"},89041:function(e,t,r){// EXPORTS
r.d(t,{A:()=>/* binding */M});// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
var n=r(41147);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(14206);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var o=r(52639);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var i=r(79100);// EXTERNAL MODULE: external "React"
var l=r(41594);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_define_property.js
var s=r(38125);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Alert.tsx
var d=r(47918);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/ComponentErrorBoundary.tsx
class c extends l.Component{static getDerivedStateFromError(e){return{hasError:true,error:e}}componentDidCatch(e,t){var r,n;// eslint-disable-next-line no-console
console.error("Error rendering ".concat(this.props.componentName,":"),e,t);(r=(n=this.props).onError)===null||r===void 0?void 0:r.call(n,e,t)}render(){var{children:e,fallback:t,showError:r}=this.props;var{hasError:n,error:a}=this.state;if(n){if(t){return t}return r?/*#__PURE__*/(0,o/* .jsxs */.FD)(d/* ["default"] */.A,{type:"danger",children:["Error rendering ",this.props.componentName,": ",(a===null||a===void 0?void 0:a.message)||(a===null||a===void 0?void 0:a.toString())]}):null}return e}constructor(...e){super(...e),(0,s._)(this,"state",{hasError:false,error:null})}}(0,s._)(c,"defaultProps",{showError:true,componentName:"Component"});/* export default */const u=c;// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/ContentRenderer.tsx
var f=e=>{var{component:t}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(u,{componentName:"content",children:t})};/* export default */const p=f;// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var v=r(78346);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormCheckbox.tsx
var h=r(95377);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormDateInput.tsx
var g=r(26036);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormFileUploader.tsx
var m=r(46062);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormImageInput.tsx
var b=r(75031);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormInput.tsx
var _=r(91224);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormRadioGroup.tsx
var y=r(33552);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormSelectInput.tsx
var w=r(99864);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormSwitch.tsx
var x=r(9694);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormTextareaInput.tsx
var A=r(74054);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormTimeInput.tsx
var Y=r(87797);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var k=r(94232);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormWPEditor.tsx
var I=r(15004);// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/FieldRenderer.tsx
var D=e=>{var{name:t,label:r,buttonText:i,helpText:l,infoText:s,placeholder:c,type:f,options:p,defaultValue:D,rules:C,form:S}=e;// eslint-disable-next-line @typescript-eslint/no-explicit-any
var M=e=>{var v=(()=>{switch(f){case"text":return/*#__PURE__*/(0,o/* .jsx */.Y)(_/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:l}));case"number":return/*#__PURE__*/(0,o/* .jsx */.Y)(_/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"number",label:r,placeholder:c,helpText:l}));case"password":return/*#__PURE__*/(0,o/* .jsx */.Y)(_/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"password",label:r,placeholder:c,helpText:l}));case"textarea":return/*#__PURE__*/(0,o/* .jsx */.Y)(A/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:l}));case"select":return/*#__PURE__*/(0,o/* .jsx */.Y)(w/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,options:p||[],placeholder:c,helpText:l}));case"radio":return/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,options:p||[]}));case"checkbox":return/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r}));case"switch":return/*#__PURE__*/(0,o/* .jsx */.Y)(x/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,helpText:l}));case"date":return/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:l}));case"time":return/*#__PURE__*/(0,o/* .jsx */.Y)(Y/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:l}));case"image":return/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l,infoText:s}));case"video":return/*#__PURE__*/(0,o/* .jsx */.Y)(k/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l,infoText:s}));case"uploader":return/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:i,helpText:l}));case"WPEditor":return/*#__PURE__*/(0,o/* .jsx */.Y)(I/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:l}));default:return/*#__PURE__*/(0,o/* .jsxs */.FD)(d/* ["default"] */.A,{type:"danger",children:["Unsupported field type: ",f]})}})();return/*#__PURE__*/(0,o/* .jsx */.Y)(u,{componentName:"field ".concat(t),onError:(e,r)=>{// eslint-disable-next-line no-console
console.warn("Field ".concat(t," failed to render:"),{error:e,errorInfo:r})},children:v})};return/*#__PURE__*/(0,o/* .jsx */.Y)(v/* .Controller */.xI,{name:t,control:S.control,defaultValue:D!==null&&D!==void 0?D:"",rules:C,render:e=>M(e)})};/* export default */const C=D;// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/CourseBuilderSlot.tsx
var S=e=>{var{section:t,namePrefix:r,form:l}=e;var{fields:s,contents:d}=(0,i/* .useCourseBuilderSlot */._)();var c=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=s;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};var u=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=d;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};return/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[c().map(e=>/*#__PURE__*/(0,o/* .jsx */.Y)(C,(0,a._)((0,n._)({form:l},e),{name:r?"".concat(r).concat(e.name):e.name}),e.name)),u().map((e,t)=>{var{component:r}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(p,{component:r},t)})]})};/* export default */const M=S},45934:function(e,t,r){r.d(t,{A:()=>y});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(52639);/* import */var i=r(78346);/* import */var l=r(75688);/* import */var s=r(42771);/* import */var d=r(12470);/* import */var c=/*#__PURE__*/r.n(d);/* import */var u=r(25074);/* import */var f=r(46225);/* import */var p=r(19393);/* import */var v=r(13448);/* import */var h=r(59189);/* import */var g=r(73755);/* import */var m=r(36068);/* import */var b=r(43414);var _=e=>{var{styleModifier:t}=e;var{steps:r,setSteps:c}=(0,b/* .useCourseNavigator */._)();var _=(0,l/* .useNavigate */.Zp)();var y=(0,g/* .useCurrentPath */.G)(m/* ["default"] */.A);var x=(0,i/* .useFormContext */.xW)();var A=r.findIndex(e=>e.path===y);var Y=Math.max(-1,A-1);var k=Math.min(r.length,A+1);var I=r[Y];var D=r[k];var C=x.watch("post_title");var S=()=>{c(e=>{return e.map((e,t)=>{if(t===A){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===Y){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(I.path)};var M=()=>{c(e=>{return e.map((e,t)=>{if(t===A){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===k){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(D.path)};return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:[w.wrapper,t],children:[/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{when:A>0,children:/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,{variant:"tertiary",iconPosition:"right",size:"small",onClick:S,buttonCss:/*#__PURE__*/(0,s/* .css */.AH)("padding:",v/* .spacing["4"] */.YK["4"],";svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:Y<0,children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:!p/* .isRTL */.V8?"chevronLeft":"chevronRight",height:24,width:24})})}),/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{when:A<r.length-1&&C,children:/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,{variant:"tertiary",icon:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:!p/* .isRTL */.V8?"chevronRight":"chevronLeft",height:24,width:24}),iconPosition:"right",size:"small",onClick:M,buttonCss:/*#__PURE__*/(0,s/* .css */.AH)("padding:",v/* .spacing["4"] */.YK["4"]," ",v/* .spacing["4"] */.YK["4"]," ",v/* .spacing["4"] */.YK["4"]," ",v/* .spacing["12"] */.YK["12"],";svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:!C||k>=r.length,children:(0,d.__)("Next","tutor")})})]})};/* export default */const y=_;var w={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;justify-content:end;height:32px;align-items:center;gap:",v/* .spacing["16"] */.YK["16"],";")}},57770:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */rT});// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(93640);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
var a=r(41147);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var o=r(14206);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(60599);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var l=r(52639);// EXTERNAL MODULE: external "React"
var s=r(41594);var d=/*#__PURE__*/r.n(s);// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var c=r(78346);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var u=r(42771);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var f=r(92965);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var p=r(93908);// EXTERNAL MODULE: external "wp.i18n"
var v=r(12470);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Button.tsx
var h=r(25074);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/SVGIcon.tsx
var g=r(46225);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/styles.ts
var m=r(13448);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/typography.ts
var b=r(81547);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/style-utils.ts
var _=r(52874);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/util.ts + 4 modules
var y=r(33231);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormFieldWrapper.tsx
var w=r(42263);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormEditableAlias.tsx
var x=e=>{var{field:t,fieldState:r,label:n="",baseURL:i,onChange:d}=e;var{value:c=""}=t;var u="".concat(i,"/").concat(c);var[f,p]=(0,s.useState)(false);var[m,b]=(0,s.useState)(u);var _="".concat(i,"/");var[x,Y]=(0,s.useState)(c);(0,s.useEffect)(()=>{if(i){b("".concat(i,"/").concat(c))}if(c){Y(c)}},[i,c]);return/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{field:t,fieldState:r,children:e=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:A.aliasWrapper,children:[n&&/*#__PURE__*/(0,l/* .jsxs */.FD)("label",{css:A.label,children:[n,": "]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:A.linkWrapper,children:!f?/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("a",{"data-cy":"course-slug",href:m,target:"_blank",css:A.link,title:m,rel:"noreferrer",children:m}),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{css:A.iconWrapper,type:"button",onClick:()=>p(e=>!e),children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"edit",width:24,height:24,style:A.editIcon})})]}):/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:A.prefix,title:_,children:_}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:A.editWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},e),{className:"tutor-input-field",css:A.editable,type:"text",value:x,onChange:e=>Y(e.target.value),autoComplete:"off"})),/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"secondary",isOutlined:true,size:"small",buttonCss:A.saveBtn,onClick:()=>{p(false);t.onChange((0,y/* .convertToSlug */.qz)(x.replace(i,"")));d===null||d===void 0?void 0:d((0,y/* .convertToSlug */.qz)(x.replace(i,"")))},children:(0,v.__)("Save","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{buttonContentCss:A.cancelButton,variant:"text",size:"small",onClick:()=>{p(false);Y(c)},children:(0,v.__)("Cancel","tutor")})]})]})})]})}})};var A={aliasWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;min-height:32px;align-items:center;gap:",m/* .spacing["4"] */.YK["4"],";",m/* .Breakpoint.smallMobile */.EA.smallMobile,"{flex-direction:column;gap:",m/* .spacing["4"] */.YK["4"],";align-items:flex-start;}"),label:/*#__PURE__*/(0,u/* .css */.AH)("flex-shrink:0;",b/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";margin:0px;"),linkWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:center;width:fit-content;font-size:",m/* .fontSize["14"] */.J["14"],";",m/* .Breakpoint.smallMobile */.EA.smallMobile,"{gap:",m/* .spacing["4"] */.YK["4"],";flex-wrap:wrap;}"),link:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";text-decoration:none;",_/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    max-width:fit-content;word-break:break-all;"),iconWrapper:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,"    margin-left:",m/* .spacing["8"] */.YK["8"],";height:24px;width:24px;background-color:",m/* .colorTokens.background.white */.I6.background.white,";border-radius:",m/* .borderRadius["4"] */.Vq["4"],";:focus{",_/* .styleUtils.inputFocus */.x.inputFocus,"}"),editIcon:/*#__PURE__*/(0,u/* .css */.AH)("color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";:hover{color:",m/* .colorTokens.icon.brand */.I6.icon.brand,";}"),prefix:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),"    color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";",_/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    word-break:break-all;max-width:fit-content;"),editWrapper:/*#__PURE__*/(0,u/* .css */.AH)("margin-left:",m/* .spacing["2"] */.YK["2"],";display:flex;align-items:center;width:fit-content;"),editable:/*#__PURE__*/(0,u/* .css */.AH)("&.tutor-input-field{",b/* .typography.caption */.I.caption(),"      background:",m/* .colorTokens.background.white */.I6.background.white,";width:208px;height:32px;border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["12"] */.YK["12"],";border-radius:",m/* .borderRadius.input */.Vq.input,";margin-right:",m/* .spacing["8"] */.YK["8"],";outline:none;&:focus{border-color:",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";box-shadow:none;outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}"),saveBtn:/*#__PURE__*/(0,u/* .css */.AH)("flex-shrink:0;margin-right:",m/* .spacing["8"] */.YK["8"],";"),cancelButton:/*#__PURE__*/(0,u/* .css */.AH)("color:",m/* .colorTokens.text.brand */.I6.text.brand,";")};/* export default */const Y=x;// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormInput.tsx
var k=r(91224);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormWPEditor.tsx
var I=r(15004);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/config.ts
var D=r(74412);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/constants.ts
var C=r(19393);// EXTERNAL MODULE: ./assets/src/js/v3/shared/controls/Show.tsx
var S=r(59189);// EXTERNAL MODULE: ./assets/src/js/v3/shared/services/course.ts
var M=r(68677);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/validation.ts
var E=r(18528);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js
var T=r(1896);// EXTERNAL MODULE: ./node_modules/.pnpm/immer@10.2.0/node_modules/immer/dist/immer.mjs
var H=r(78595);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/CheckBox.tsx
var F=r(81253);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/LoadingSpinner.tsx
var K=r(56705);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hoc/withVisibilityControl.tsx
var N=r(57587);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useDebounce.ts
var O=r(44486);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useFormWithGlobalError.ts
var P=r(34092);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useIsScrolling.ts
var L=r(43642);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/usePortalPopover.tsx
var R=r(84206);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var W=r(37586);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js
var B=r(32047);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Toast.tsx
var z=r(40925);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/api.ts
var U=r(77239);// EXTERNAL MODULE: ./assets/core/ts/utils/endpoints.ts
var j=r(94812);// CONCATENATED MODULE: ./assets/src/js/v3/shared/services/category.ts
var q=e=>{return U/* .wpAuthApiInstance.get */.v.get(j/* ["default"].CATEGORIES */.A.CATEGORIES,e?{params:{per_page:100,search:e}}:{params:{per_page:100}})};var V=e=>{return(0,W/* .useQuery */.I)({queryKey:["CategoryList",e],queryFn:()=>q(e).then(e=>e.data)})};var G=e=>{return U/* .wpAuthApiInstance.post */.v.post(j/* ["default"].CATEGORIES */.A.CATEGORIES,e)};var Q=()=>{var e=(0,f/* .useQueryClient */.jE)();var{showToast:t}=(0,z/* .useToast */.d)();return(0,B/* .useMutation */.n)({mutationFn:G,onSuccess:()=>{e.invalidateQueries({queryKey:["CategoryList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,y/* .convertToErrorMessage */.EL)(e)})}})};// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useAnimation.tsx
var $=r(31569);// EXTERNAL MODULE: ./assets/src/js/v3/shared/molecules/Popover.tsx
var Z=r(21678);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormMultiLevelSelect.tsx
function X(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);X=function t(){return e};return e}var J=e=>{var{label:t,field:r,fieldState:n,disabled:i,loading:d,placeholder:c,helpText:u,isInlineLabel:f,clearable:p,listItemsLabel:m,optionsWrapperStyle:b}=e;var _=(0,s.useRef)(null);var[x,A]=(0,s.useState)(false);var[Y,k]=(0,s.useState)("");var I=(0,O/* .useDebounce */.d)(Y,300);var D=V(I);var C;var M=(0,y/* .generateTree */.ww)((C=D.data)!==null&&C!==void 0?C:[]);(0,s.useEffect)(()=>{if(!x){k("")}},[x]);return/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{label:t,field:r,fieldState:n,disabled:i||M.length===0,loading:d,placeholder:c,helpText:u,isInlineLabel:f,children:e=>{var t,n;return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:er.inputWrapper,ref:_,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},e),{type:"text",onClick:e=>{e.stopPropagation();A(true)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();A(true)}if(e.key==="Tab"){A(false)}},autoComplete:"off",readOnly:true,disabled:i||M.length===0,value:r.value?(n=D.data)===null||n===void 0?void 0:(t=n.find(e=>e.id===r.value))===null||t===void 0?void 0:t.name:"",placeholder:c})),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{tabIndex:-1,type:"button",disabled:i||M.length===0,"aria-label":(0,v.__)("Toggle options","tutor"),css:er.toggleIcon(x),onClick:()=>{A(e=>!e)},children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"chevronDown",width:20,height:20})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(Z/* ["default"] */.A,{triggerRef:_,isOpen:x,closePopover:()=>A(false),dependencies:[M.length],animationType:$/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:er.categoryWrapper,children:[!!m&&/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:er.listItemLabel,children:m}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:er.searchInput,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:er.searchIcon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",{type:"text",placeholder:(0,v.__)("Search","tutor"),value:Y,onChange:e=>{k(e.target.value)}})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:M.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:er.notFound,children:(0,v.__)("No categories found.","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[er.options,b],children:M.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)(et,{option:e,onChange:e=>{r.onChange(e);A(false)}},e.id))})}),p&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:er.clearButton,children:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"text",onClick:()=>{r.onChange(null);A(false)},children:(0,v.__)("Clear selection","tutor")})})]})})]})}})};/* export default */const ee=J;var et=e=>{var{option:t,onChange:r,level:n=0}=e;var a=t.children.length>0;var o=()=>{if(!a){return null}return t.children.map(e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(et,{option:e,onChange:r,level:n+1},e.id)})};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:er.branchItem(n),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",onClick:()=>r(t.id),title:t.name,children:(0,y/* .decodeHtmlEntities */.jT)(t.name)}),o()]})};var er={categoryWrapper:/*#__PURE__*/(0,u/* .css */.AH)("background-color:",m/* .colorTokens.background.white */.I6.background.white,";box-shadow:",m/* .shadow.popover */.r7.popover,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",m/* .colorTokens.stroke.border */.I6.stroke.border,";padding:",m/* .spacing["8"] */.YK["8"]," 0;min-width:275px;"),options:/*#__PURE__*/(0,u/* .css */.AH)("max-height:455px;",_/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),notFound:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;",b/* .typography.caption */.I.caption("regular"),";padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["16"] */.YK["16"],";color:",m/* .colorTokens.text.hints */.I6.text.hints,";"),searchInput:/*#__PURE__*/(0,u/* .css */.AH)("position:sticky;top:0;padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["16"] */.YK["16"],";input{",b/* .typography.body */.I.body("regular"),";width:100%;border-radius:",m/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["16"] */.YK["16"]," ",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["32"] */.YK["32"],";color:",m/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;:focus{",_/* .styleUtils.inputFocus */.x.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,u/* .css */.AH)("position:absolute;left:",m/* .spacing["24"] */.YK["24"],";top:50%;transform:translateY(-50%);color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),branchItem:e=>/*#__PURE__*/(0,u/* .css */.AH)("position:relative;z-index:",m/* .zIndex.positive */.fE.positive,";button{",_/* .styleUtils.resetButton */.x.resetButton,";",b/* .typography.body */.I.body("regular"),";",_/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";color:",m/* .colorTokens.text.title */.I6.text.title,";padding-left:calc(",m/* .spacing["24"] */.YK["24"]," + ",m/* .spacing["24"] */.YK["24"]," * ",e,");line-height:",m/* .lineHeight["36"] */.K_["36"],";padding-right:",m/* .spacing["16"] */.YK["16"],";width:100%;&:hover,&:focus,&:active{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";color:",m/* .colorTokens.text.title */.I6.text.title,";}}"),toggleIcon:e=>/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";position:absolute;top:",m/* .spacing["4"] */.YK["4"],";right:",m/* .spacing["4"] */.YK["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";padding:",m/* .spacing["6"] */.YK["6"],";&:focus,&:active,&:hover{background:none;color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";}",e&&(0,u/* .css */.AH)(X())),inputWrapper:/*#__PURE__*/(0,u/* .css */.AH)("position:relative;input:read-only{background-color:inherit;}"),clearButton:/*#__PURE__*/(0,u/* .css */.AH)("padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["24"] */.YK["24"],";box-shadow:",m/* .shadow.dividerTop */.r7.dividerTop,";& > button{padding:0;}"),listItemLabel:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";font-weight:",m/* .fontWeight.medium */.Wy.medium,";background-color:",m/* .colorTokens.background.white */.I6.background.white,";color:",m/* .colorTokens.text.hints */.I6.text.hints,";padding:",m/* .spacing["10"] */.YK["10"]," ",m/* .spacing["16"] */.YK["16"],";"),radioLabel:/*#__PURE__*/(0,u/* .css */.AH)("line-height:",m/* .lineHeight["32"] */.K_["32"],";padding-left:",m/* .spacing["2"] */.YK["2"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormCategoriesInput.tsx
function en(){var e=(0,i._)(["\n      &:before {\n        content: '';\n        position: absolute;\n        height: 1px;\n        width: 10px;\n        left: -10px;\n        top: ",";\n\n        background-color: ",";\n        z-index: ",";\n      }\n    "]);en=function t(){return e};return e}function ea(){var e=(0,i._)(["\n      box-shadow: ",";\n    "]);ea=function t(){return e};return e}var eo=e=>{var{label:t,field:r,fieldState:n,disabled:i,loading:d,placeholder:u,helpText:f,optionsWrapperStyle:p}=e;var m=(0,P/* .useFormWithGlobalError */.p)({shouldFocusError:true});var b=m.watch("search");var _=(0,O/* .useDebounce */.d)(b,300);var x=V(_);var A=Q();var[Y,I]=(0,s.useState)(false);var[D,C]=(0,s.useState)(false);var{ref:M,isScrolling:E}=(0,L/* .useIsScrolling */.$)();(0,s.useEffect)(()=>{if(!x.isLoading&&(x.data||[]).length>0){C(true)}},[x.isLoading,x.data]);(0,s.useEffect)(()=>{if(Y){var e=setTimeout(()=>{m.setFocus("name")},250);return()=>{clearTimeout(e)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[Y]);var{triggerRef:T,position:F,popoverRef:N}=(0,R/* .usePortalPopover */.tP)({isOpen:Y});var W;var B=(0,y/* .generateTree */.ww)((W=x.data)!==null&&W!==void 0?W:[]);var z=()=>{I(false);m.reset({name:"",parent:null,search:b})};var U=e=>{if(e.name){A.mutate((0,a._)({name:e.name},e.parent&&{parent:e.parent}));z()}};return/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{label:t,field:r,fieldState:n,loading:d,placeholder:u,helpText:f,children:()=>{return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[ed.options,p],children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ed.categoryListWrapper,ref:M,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!i&&(D||_),children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"search",control:m.control,render:e=>/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ed.searchInput,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ed.searchIcon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",{type:"text",placeholder:(0,v.__)("Search","tutor"),value:b,disabled:i||d,onChange:t=>{e.field.onChange(t.target.value)}})]})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!x.isLoading&&!d,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)(K/* .LoadingSection */.YE,{}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:B.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:ed.notFound,children:(0,v.__)("No categories found.","tutor")}),children:B.map((e,t)=>/*#__PURE__*/(0,l/* .jsx */.Y)(es,{disabled:i,option:e,value:r.value||[],isLastChild:t===B.length-1,onChange:e=>{r.onChange((0,H/* .produce */.jM)(r.value||[],t=>{if(Array.isArray(t)){return t.includes(e)?t.filter(t=>t!==e):[...t,e]}return[e]}))}},e.id))})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!i,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{ref:T,css:ed.addButtonWrapper({isActive:E,hasCategories:x.isLoading||B.length>0}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{disabled:i||d,type:"button",css:ed.addNewButton,onClick:()=>I(true),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{width:24,height:24,name:"plus"})," ",(0,v.__)("Add","tutor")]})})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(R/* .Portal */.ZL,{isOpen:Y,onClickOutside:z,onEscape:z,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ed.categoryFormWrapper,style:{left:F.left,top:F.top},ref:N,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"name",control:m.control,rules:{required:(0,v.__)("Category name is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(k/* ["default"] */.A,(0,o._)((0,a._)({},e),{placeholder:(0,v.__)("Category name","tutor"),selectOnFocus:true}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"parent",control:m.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ee,(0,o._)((0,a._)({},e),{placeholder:(0,v.__)("Select parent","tutor"),clearable:!!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ed.categoryFormButtons,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"text",size:"small",onClick:z,children:(0,v.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"secondary",size:"small",loading:A.isPending,onClick:m.handleSubmit(U),children:(0,v.__)("Ok","tutor")})]})]})})]})}})};/* export default */const ei=(0,N/* .withVisibilityControl */.M)(eo);var el=e=>{return e.children.reduce((e,t)=>e+el(t),e.children.length)};var es=e=>{var{option:t,value:r,onChange:n,isLastChild:a,disabled:o}=e;var i=el(t);var s=i>0;var d=(0,y/* .getCategoryLeftBarHeight */.oj)(a,i);var c=()=>{if(!s){return null}return t.children.map((e,a)=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(es,{option:e,value:r,onChange:n,isLastChild:a===t.children.length-1,disabled:o},e.id)})};return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ed.branchItem({leftBarHeight:d,hasParent:t.parent!==0}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{checked:Array.isArray(r)?r.includes(t.id):r===t.id,label:(0,y/* .decodeHtmlEntities */.jT)(t.name),onChange:()=>{n(t.id)},labelCss:ed.checkboxLabel,disabled:o}),c()]})};var ed={options:/*#__PURE__*/(0,u/* .css */.AH)("border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius["8"] */.Vq["8"],";padding:",m/* .spacing["8"] */.YK["8"]," 0;background-color:",m/* .colorTokens.bg.white */.I6.bg.white,";"),categoryListWrapper:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.overflowYAuto */.x.overflowYAuto,";max-height:208px;"),notFound:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;",b/* .typography.caption */.I.caption("regular"),";padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["16"] */.YK["16"],";color:",m/* .colorTokens.text.hints */.I6.text.hints,";"),searchInput:/*#__PURE__*/(0,u/* .css */.AH)("position:sticky;top:0;padding:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["16"] */.YK["16"],";background-color:",m/* .colorTokens.background.white */.I6.background.white,";z-index:",m/* .zIndex.dropdown */.fE.dropdown,";input{",b/* .typography.body */.I.body("regular"),";width:100%;border-radius:",m/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["16"] */.YK["16"]," ",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["32"] */.YK["32"],";color:",m/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;:focus{",_/* .styleUtils.inputFocus */.x.inputFocus,";}}"),searchIcon:/*#__PURE__*/(0,u/* .css */.AH)("position:absolute;left:",m/* .spacing["24"] */.YK["24"],";top:50%;transform:translateY(-50%);color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),checkboxLabel:/*#__PURE__*/(0,u/* .css */.AH)("line-height:1.88rem !important;span:last-of-type{",_/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"}"),branchItem:e=>{var{leftBarHeight:t,hasParent:r}=e;return/*#__PURE__*/(0,u/* .css */.AH)("line-height:",m/* .spacing["32"] */.YK["32"],";position:relative;z-index:",m/* .zIndex.positive */.fE.positive,";margin-inline:",m/* .spacing["20"] */.YK["20"]," ",m/* .spacing["16"] */.YK["16"],";&:after{content:'';position:absolute;height:",t,";width:1px;left:9px;top:25px;background-color:",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";z-index:",m/* .zIndex.level */.fE.level,";}",r&&(0,u/* .css */.AH)(en(),m/* .spacing["16"] */.YK["16"],m/* .colorTokens.stroke.divider */.I6.stroke.divider,m/* .zIndex.level */.fE.level))},addNewButton:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";",b/* .typography.small */.I.small("medium"),";color:",m/* .colorTokens.brand.blue */.I6.brand.blue,";padding:0 ",m/* .spacing["8"] */.YK["8"],";display:flex;align-items:center;border-radius:",m/* .borderRadius["2"] */.Vq["2"],";&:focus,&:active,&:hover{background:none;color:",m/* .colorTokens.brand.blue */.I6.brand.blue,";}&:focus-visible{outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{color:",m/* .colorTokens.text.disable */.I6.text.disable,";}"),categoryFormWrapper:/*#__PURE__*/(0,u/* .css */.AH)("position:absolute;background-color:",m/* .colorTokens.background.white */.I6.background.white,";box-shadow:",m/* .shadow.popover */.r7.popover,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",m/* .colorTokens.stroke.border */.I6.stroke.border,";padding:",m/* .spacing["16"] */.YK["16"],";min-width:306px;display:flex;flex-direction:column;gap:",m/* .spacing["12"] */.YK["12"],";"),categoryFormButtons:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;justify-content:end;gap:",m/* .spacing["8"] */.YK["8"],";"),addButtonWrapper:e=>{var{isActive:t=false,hasCategories:r=false}=e;return/*#__PURE__*/(0,u/* .css */.AH)("transition:box-shadow 0.3s ease-in-out;padding-inline:",m/* .spacing["8"] */.YK["8"],";padding-block:",r?m/* .spacing["4"] */.YK["4"]:"0px",";",t&&(0,u/* .css */.AH)(ea(),m/* .shadow.scrollable */.r7.scrollable))}};// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormImageInput.tsx
var ec=r(75031);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormSelectInput.tsx
var eu=r(99864);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var ef=r(17900);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useSelectKeyboardNavigation.ts
var ep=r(27630);// CONCATENATED MODULE: ./assets/src/js/v3/public/images/profile-photo.png
const ev=r.p+"js/images/profile-photo-92d02228.png";// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormSelectUser.tsx
function eh(){var e=(0,i._)(["\n      border-color: ",";\n      cursor: pointer;\n    "]);eh=function t(){return e};return e}function eg(){var e=(0,i._)(["\n      transform: rotate(180deg);\n    "]);eg=function t(){return e};return e}var em={id:0,name:(0,v.__)("Click to select user","tutor"),email:"example@example.com",avatar_url:"https://gravatar.com/avatar"};var eb=D/* .tutorConfig.current_user */.P.current_user;var e_=e=>{var{field:t,fieldState:r,options:n,onChange:i=y/* .noop */.lQ,handleSearchOnChange:d,isMultiSelect:c=false,label:u,placeholder:f="",disabled:p,readOnly:h,loading:m,isSearchable:b=false,helpText:_,emptyStateText:x=(0,v.__)("No user selected","tutor"),isInstructorMode:A=false,postAuthor:Y}=e;var k;var I;var D=(I=t.value)!==null&&I!==void 0?I:c?[]:em;var M=Array.isArray(D)?D.map(e=>String(e.id)):[String(D.id)];var E=(k=eb.roles)===null||k===void 0?void 0:k.includes(C/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var T=String(eb.data.id)===String((Y===null||Y===void 0?void 0:Y.ID)||"");var H=(0,s.useRef)(null);var[F,K]=(0,s.useState)(false);var[N,P]=(0,s.useState)("");var L=(0,O/* .useDebounce */.d)(N);var R=n.filter(e=>{var t,r;var n=((t=e.name)===null||t===void 0?void 0:t.toLowerCase().includes(N.toLowerCase()))||((r=e.email)===null||r===void 0?void 0:r.toLowerCase().includes(N.toLowerCase()));var a=!M.includes(String(e.id));return n&&a})||[];(0,s.useEffect)(()=>{if(d){d(L)}else{// Handle local filter
}},[L,d]);var{activeIndex:W,setActiveIndex:B}=(0,ep/* .useSelectKeyboardNavigation */.v)({options:R.map(e=>({label:e.name,value:e})),isOpen:F,onSelect:e=>{z(e.value)},onClose:()=>{K(false);P("")},selectedValue:Array.isArray(D)?null:D});var z=e=>{var r=A?(0,o._)((0,a._)({},e),{isRemoveAble:true}):e;var n=Array.isArray(D)?[...D,r]:r;t.onChange(n);P("");i(n);K(false)};var U=e=>{if(Array.isArray(D)){var r=D.filter(t=>t.id!==e);t.onChange(r);i(r)}};var j=(0,s.useRef)(null);(0,s.useEffect)(()=>{if(F&&W>=0&&j.current){j.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[F,W]);return/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{fieldState:r,field:t,label:u,disabled:p,readOnly:h,loading:m,helpText:_,children:e=>{var{css:r}=e,n=(0,ef._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ew.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{ref:H,children:[!c&&!Array.isArray(D)&&/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:ew.instructorItem({isDefaultItem:true}),onClick:()=>K(e=>!e),disabled:h||p||R.length===0,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ew.instructorInfo,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:D.avatar_url?D.avatar_url:ev,alt:D.name,css:ew.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.instructorName,children:D.name}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.instructorEmail,children:D.email})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!m,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.toggleIcon({isOpen:F}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"chevronDown",width:20,height:20})})})]}),c&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ew.inputWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.leftIcon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},n),{onClick:e=>{e.stopPropagation();K(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();K(e=>!e)}if(e.key==="Tab"){K(false)}},className:"tutor-input-field",css:[r,ew.input],autoComplete:"off",readOnly:h||!b,placeholder:f,value:N,onChange:e=>{P(e.target.value)}}))]})]}),c&&Array.isArray(D)&&(D.length>0?/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.instructorList,children:D.map(e=>/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ew.instructorItem({isDefaultItem:false}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ew.instructorInfo,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:e.avatar_url?e.avatar_url:ev,alt:e.name,css:ew.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.instructorName,children:e.name}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.instructorEmail,children:e.email})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:A,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",onClick:()=>U(e.id),css:ew.instructorDeleteButton,"data-instructor-delete-button":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"cross",width:32,height:32})}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:E||T||e.isRemoveAble,children:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",onClick:()=>U(e.id),css:ew.instructorDeleteButton,"data-instructor-delete-button":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"cross",width:32,height:32})})})})]},e.id))}):/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.emptyState,children:/*#__PURE__*/(0,l/* .jsx */.Y)("p",{children:x})})),/*#__PURE__*/(0,l/* .jsx */.Y)(Z/* ["default"] */.A,{triggerRef:H,isOpen:F,dependencies:[R.length],animationType:$/* .AnimationType.slideDown */.J6.slideDown,closePopover:()=>{K(false);P("")},children:/*#__PURE__*/(0,l/* .jsxs */.FD)("ul",{css:[ew.options],children:[!c&&/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:ew.inputWrapperListItem,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[ew.inputWrapper,ew.portalInputWrapper],children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.leftIcon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},n),{autoFocus:true,className:"tutor-input-field",css:[r,ew.input],autoComplete:"off",readOnly:h||!b,placeholder:f,value:N,onChange:e=>{P(e.target.value)}}))]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:R.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:ew.noUserFound,children:/*#__PURE__*/(0,l/* .jsx */.Y)("p",{children:(0,v.__)("No user found","tutor")})}),children:R.map((e,r)=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:ew.optionItem,"data-active":W===r,onMouseOver:()=>B(r),onMouseLeave:()=>r!==W&&B(-1),ref:W===r?j:null,onFocus:()=>B(r),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:ew.label,onClick:()=>{var r=A?(0,o._)((0,a._)({},e),{isRemoveAble:true}):e;var n=Array.isArray(D)?[...D,r]:r;t.onChange(n);P("");i(n);K(false)},"aria-selected":W===r,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("img",{src:e.avatar_url?e.avatar_url:ev,alt:e.name,css:ew.instructorAvatar}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.instructorName,children:e.name}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ew.instructorEmail,children:e.email})]})]})},String(e.id)))})]})})]})}})};/* export default */const ey=(0,N/* .withVisibilityControl */.M)(e_);var ew={mainWrapper:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;"),inputWrapper:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),portalInputWrapper:/*#__PURE__*/(0,u/* .css */.AH)("padding:",m/* .spacing["8"] */.YK["8"],";"),inputWrapperListItem:/*#__PURE__*/(0,u/* .css */.AH)("position:sticky;top:0px;padding:0px;background-color:inherit;"),leftIcon:/*#__PURE__*/(0,u/* .css */.AH)("position:absolute;left:",m/* .spacing["12"] */.YK["12"],";top:50%;transform:translateY(-50%);color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),input:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.body */.I.body(),";width:100%;padding-right:",m/* .spacing["32"] */.YK["32"],";padding-left:",m/* .spacing["36"] */.YK["36"],";",_/* .styleUtils.textEllipsis */.x.textEllipsis,";border-color:transparent;:focus{outline:none;box-shadow:none;}&.tutor-input-field{padding-right:",m/* .spacing["32"] */.YK["32"],";padding-left:",m/* .spacing["36"] */.YK["36"],";}"),instructorList:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["8"] */.YK["8"],";margin-top:",m/* .spacing["8"] */.YK["8"],";"),instructorItem:e=>{var{isDefaultItem:t=false}=e;return/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";position:relative;width:100%;display:flex;align-items:center;justify-content:space-between;padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["16"] */.YK["16"]," ",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["12"] */.YK["12"],";border:1px solid transparent;border-radius:",m/* .borderRadius.input */.Vq.input,";background-color:",m/* .colorTokens.bg.white */.I6.bg.white,";&:hover,&:focus,&:active{background-color:",m/* .colorTokens.bg.white */.I6.bg.white,";}&:focus{outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}",t&&(0,u/* .css */.AH)(eh(),m/* .colorTokens.stroke["default"] */.I6.stroke["default"]),"    &:hover{border-color:",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";[data-instructor-delete-button]{opacity:1;}}",m/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-instructor-delete-button]{opacity:1;}}")},instructorInfo:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:center;gap:",m/* .spacing["10"] */.YK["10"],";"),instructorAvatar:/*#__PURE__*/(0,u/* .css */.AH)("height:40px;width:40px;border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius.circle */.Vq.circle,";"),instructorName:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";display:flex;align-items:center;gap:",m/* .spacing["4"] */.YK["4"],";"),instructorEmail:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";"),optionsWrapper:/*#__PURE__*/(0,u/* .css */.AH)("position:absolute;width:100%;"),instructorDeleteButton:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.crossButton */.x.crossButton,";color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";opacity:0;transition:none;&:hover,&:focus,&:active{background-color:",m/* .colorTokens.bg.white */.I6.bg.white,";}&:focus{box-shadow:",m/* .shadow.focus */.r7.focus,";}:focus-visible{opacity:1;}"),options:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.ulReset */.x.ulReset,";z-index:",m/* .zIndex.dropdown */.fE.dropdown,";background-color:",m/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",m/* .shadow.popover */.r7.popover,";margin:",m/* .spacing["4"] */.YK["4"]," 0;max-height:400px;border:1px solid ",m/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";",_/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;min-width:200px;"),optionItem:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&[data-active='true']{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}&:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}"),label:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";width:100%;height:100%;display:flex;gap:",m/* .spacing["8"] */.YK["8"],";padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["12"] */.YK["12"],";text-align:left;line-height:",m/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background:none;}&:focus-visible{outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-2px;border-radius:",m/* .borderRadius["6"] */.Vq["6"],";}"),optionsContainer:/*#__PURE__*/(0,u/* .css */.AH)("position:absolute;overflow:hidden auto;min-width:16px;min-height:16px;max-width:calc(100% - 32px);max-height:calc(100% - 32px);"),toggleIcon:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,u/* .css */.AH)("position:absolute;top:0;bottom:0;right:",m/* .spacing["8"] */.YK["8"],";",_/* .styleUtils.flexCenter */.x.flexCenter(),";color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:transform 0.3s ease-in-out;",t&&(0,u/* .css */.AH)(eg()))},noUserFound:/*#__PURE__*/(0,u/* .css */.AH)("padding:",m/* .spacing["8"] */.YK["8"],";text-align:center;"),emptyState:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.flexCenter */.x.flexCenter(),";",b/* .typography.caption */.I.caption(),";margin-top:",m/* .spacing["8"] */.YK["8"],";padding:",m/* .spacing["8"] */.YK["8"],";background-color:",m/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",m/* .borderRadius["4"] */.Vq["4"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/Chip.tsx
function ex(){var e=(0,i._)(["\n      cursor: inherit;\n    "]);ex=function t(){return e};return e}function eA(){var e=(0,i._)(["\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      gap: ",";\n      padding: "," "," "," ",";\n    "]);eA=function t(){return e};return e}var eY=e=>{var{label:t,onClick:r=y/* .noop */.lQ,showIcon:n=true,icon:a=/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"cross",width:20,height:20}),isClickable:o}=e;if(o){return/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:eI.wrapper({hasIcon:n,isClickable:true}),onClick:r,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eI.label,children:t}),n&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eI.iconWrapper,"data-icon-wrapper":true,children:a})]})}return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:eI.wrapper({hasIcon:n,isClickable:false}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eI.label,children:t}),n&&/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:eI.iconWrapper,onClick:r,"data-icon-wrapper":true,children:a})]})};/* export default */const ek=eY;var eI={wrapper:e=>{var{hasIcon:t=false,isClickable:r}=e;return/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";background-color:#e4e5e7;border-radius:",m/* .borderRadius["24"] */.Vq["24"],";padding:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["8"] */.YK["8"],";min-height:24px;transition:background-color 0.3s ease;",!r&&(0,u/* .css */.AH)(ex())," ",t&&(0,u/* .css */.AH)(eA(),m/* .spacing["2"] */.YK["2"],m/* .spacing["4"] */.YK["4"],m/* .spacing["8"] */.YK["8"],m/* .spacing["4"] */.YK["4"],m/* .spacing["12"] */.YK["12"]),":hover{[data-icon-wrapper]{> svg{color:",m/* .colorTokens.icon.hover */.I6.icon.hover,";}}}")},label:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption()),iconWrapper:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";border-radius:",m/* .borderRadius.circle */.Vq.circle,";transition:background-color 0.3s ease;height:20px;width:20px;text-align:center;&:focus,&:active,&:hover{background:none;}svg{color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease;}")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/services/tags.ts
var eD=e=>{return U/* .wpAuthApiInstance.get */.v.get(j/* ["default"].TAGS */.A.TAGS,{params:e})};var eC=e=>{return(0,W/* .useQuery */.I)({queryKey:["TagList",e],queryFn:()=>eD(e).then(e=>e.data)})};var eS=e=>{return U/* .wpAuthApiInstance.post */.v.post(j/* ["default"].TAGS */.A.TAGS,e)};var eM=()=>{var e=(0,f/* .useQueryClient */.jE)();var{showToast:t}=(0,z/* .useToast */.d)();return(0,B/* .useMutation */.n)({mutationFn:eS,onSuccess:()=>{e.invalidateQueries({queryKey:["TagList"]})},onError:e=>{// @TODO: Need to add proper type definition for wp rest api errors
t({type:"danger",message:(0,y/* .convertToErrorMessage */.EL)(e)})}})};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormTagsInput.tsx
function eE(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);eE=function t(){return e};return e}var eT=e=>{var{field:t,fieldState:r,label:i,placeholder:d="",disabled:c,readOnly:u,loading:f,helpText:p,removeOptionsMinWidth:h=false}=e;var m;var b=(m=t.value)!==null&&m!==void 0?m:[];var[_,x]=(0,s.useState)("");var A=(0,O/* .useDebounce */.d)(_);var Y=(0,s.useRef)(null);var[k,I]=(0,s.useState)(false);var D=eC({search:A});var C=eM();var M;var E=(M=D.data)!==null&&M!==void 0?M:[];var T=(e,r)=>{if(e){t.onChange([...b,r])}else{t.onChange(b.filter(e=>e.id!==r.id))}};var H=()=>(0,n._)(function*(){if(_.length){var e=yield C.mutateAsync({name:_});t.onChange([...b,e.data]);I(false);x("")}})();return/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{fieldState:r,field:t,label:i,disabled:c,readOnly:u,loading:f,helpText:p,children:e=>{var t;var{css:r}=e,n=(0,ef._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:eF.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eF.inputWrapper,ref:Y,children:/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},n),{css:[r,eF.input],onClick:e=>{e.stopPropagation();I(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();I(e=>!e)}if(e.key==="Tab"){I(false)}},autoComplete:"off",readOnly:u,placeholder:d,value:_,onChange:e=>{x(e.target.value)}}))}),b.length>0&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eF.tagsWrapper,children:b.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ek,{label:(0,y/* .decodeHtmlEntities */.jT)(e.name),onClick:()=>T(false,e)},e.id))}),/*#__PURE__*/(0,l/* .jsx */.Y)(Z/* ["default"] */.A,{triggerRef:Y,isOpen:k,closePopover:()=>I(false),dependencies:[(t=D.data)===null||t===void 0?void 0:t.length],animationType:$/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("ul",{css:[eF.options(h)],children:[_.length>0&&/*#__PURE__*/(0,l/* .jsx */.Y)("li",{children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:eF.addTag,onClick:H,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"plus",width:24,height:24}),/*#__PURE__*/(0,l/* .jsx */.Y)("strong",{children:(0,v.__)("Add","tutor")})," ",_]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:E.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:eF.notTag,children:(0,v.__)("No tag created yet.","tutor")}),children:E.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:eF.optionItem,children:/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{label:(0,y/* .decodeHtmlEntities */.jT)(e.name),checked:!!b.find(t=>t.id===e.id),onChange:t=>T(t,e)})},String(e.id)))})]})})]})}})};/* export default */const eH=(0,N/* .withVisibilityControl */.M)(eT);var eF={mainWrapper:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;"),notTag:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";min-height:80px;display:flex;justify-content:center;align-items:center;color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";"),inputWrapper:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),input:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.body */.I.body(),";width:100%;",_/* .styleUtils.textEllipsis */.x.textEllipsis,";:focus{outline:none;box-shadow:",m/* .shadow.focus */.r7.focus,";}"),tagsWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-wrap:wrap;align-items:center;gap:",m/* .spacing["4"] */.YK["4"],";margin-top:",m/* .spacing["8"] */.YK["8"],";"),options:e=>/*#__PURE__*/(0,u/* .css */.AH)("z-index:",m/* .zIndex.dropdown */.fE.dropdown,";background-color:",m/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",m/* .shadow.popover */.r7.popover,";padding:",m/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:400px;border:1px solid ",m/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";",_/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,u/* .css */.AH)(eE())),optionItem:/*#__PURE__*/(0,u/* .css */.AH)("min-height:40px;height:100%;width:100%;display:flex;align-items:center;padding:",m/* .spacing["8"] */.YK["8"],";transition:background-color 0.3s ease-in-out;label{width:100%;}&:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}"),addTag:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";",b/* .typography.body */.I.body(),"    line-height:",m/* .lineHeight["24"] */.K_["24"],";display:flex;align-items:center;gap:",m/* .spacing["4"] */.YK["4"],";width:100%;padding:",m/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";color:",m/* .colorTokens.text.primary */.I6.text.primary,";}")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var eK=r(94232);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/modals/ConfirmationModal.tsx
var eN=r(56949);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/modals/Modal.tsx
var eO=r(17944);// CONCATENATED MODULE: ./assets/src/js/v3/shared/services/users.ts
var eP=e=>{return U/* .wpAjaxInstance.get */.b.get(j/* ["default"].USERS_LIST */.A.USERS_LIST,{params:{filter:{search:e,role:[C/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR,C/* .TutorRoles.TUTOR_INSTRUCTOR */.gt.TUTOR_INSTRUCTOR]}}})};var eL=e=>{return(0,W/* .useQuery */.I)({queryKey:["UserList",e],queryFn:()=>eP(e).then(e=>e.data.results.map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url})))})};var eR=e=>{return U/* .wpAjaxInstance.get */.b.get(j/* ["default"].TUTOR_INSTRUCTOR_SEARCH */.A.TUTOR_INSTRUCTOR_SEARCH,{params:{course_id:e}}).then(e=>e.data)};var eW=(e,t)=>{return(0,W/* .useQuery */.I)({queryKey:["InstructorList",e],queryFn:()=>eR(e).then(e=>{return e.map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url}))}),enabled:t})};// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
var eB=r(5054);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var ez=r(84350);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMilliseconds.js
/**
 * The {@link addMilliseconds} function options.
 *//**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of milliseconds to be added.
 * @param options - The options object
 *
 * @returns The new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */function eU(e,t,r){return(0,eB/* .constructFrom */.w)(r?.in||e,+(0,ez/* .toDate */.a)(e)+t)}// Fallback for modularized imports:
/* export default */const ej=/* unused pure expression or super */null&&eU;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constants.js
var eq=r(25830);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addHours.js
/**
 * The {@link addHours} function options.
 *//**
 * @name addHours
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of hours to be added
 * @param options - An object with options
 *
 * @returns The new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * const result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */function eV(e,t,r){return eU(e,t*eq/* .millisecondsInHour */.s0,r)}// Fallback for modularized imports:
/* export default */const eG=/* unused pure expression or super */null&&eV;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
var eQ=r(76845);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isBefore.js
var e$=r(61736);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/parseISO.js
var eZ=r(66219);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
var eX=r(5758);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMinute.js
/**
 * The {@link startOfMinute} function options.
 *//**
 * @name startOfMinute
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * const result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */function eJ(e,t){const r=(0,ez/* .toDate */.a)(e,t?.in);r.setSeconds(0,0);return r}// Fallback for modularized imports:
/* export default */const e0=/* unused pure expression or super */null&&eJ;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameMinute.js
/**
 * @name isSameMinute
 * @category Minute Helpers
 * @summary Are the given dates in the same minute (and hour and day)?
 *
 * @description
 * Are the given dates in the same minute (and hour and day)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 *
 * @returns The dates are in the same minute (and hour and day)
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 5 September 2014 06:30:00 in the same minute?
 * const result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 5, 6, 30)
 * )
 * //=> false
 */function e1(e,t){return+eJ(e)===+eJ(t)}// Fallback for modularized imports:
/* export default */const e4=/* unused pure expression or super */null&&e1;// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/ImageInput.tsx
var e2=r(12427);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/ProBadge.tsx
var e6=r(84492);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormCheckbox.tsx
var e5=r(95377);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormDateInput.tsx
var e3=r(26036);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormSwitch.tsx
var e9=r(9694);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormTimeInput.tsx
var e8=r(87797);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/utils/utils.ts
var e7=r(60297);// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/course-basic/ScheduleOptions.tsx
var te=!!D/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var tt=(0,e7/* .getCourseId */.p)();var tr=()=>{var e=(0,c/* .useFormContext */.xW)();var t=(0,c/* .useWatch */.FH)({name:"post_date"});var r;var n=(r=(0,c/* .useWatch */.FH)({name:"schedule_date"}))!==null&&r!==void 0?r:"";var i;var d=(i=(0,c/* .useWatch */.FH)({name:"schedule_time"}))!==null&&i!==void 0?i:(0,T/* .format */.GP)(eV(new Date,1),C/* .DateFormats.hoursMinutes */.UA.hoursMinutes);var u;var f=(u=(0,c/* .useWatch */.FH)({name:"isScheduleEnabled"}))!==null&&u!==void 0?u:false;var m;var b=(m=(0,c/* .useWatch */.FH)({name:"showScheduleForm"}))!==null&&m!==void 0?m:false;var w;var x=(w=(0,c/* .useWatch */.FH)({name:"enable_coming_soon"}))!==null&&w!==void 0?w:false;var A;var Y=(A=(0,c/* .useWatch */.FH)({name:"course_enrollment_period"}))!==null&&A!==void 0?A:false;var k;var I=(k=(0,c/* .useWatch */.FH)({name:"enrollment_starts_date"}))!==null&&k!==void 0?k:"";var M;var H=(M=(0,c/* .useWatch */.FH)({name:"enrollment_starts_time"}))!==null&&M!==void 0?M:"";var F=(0,c/* .useWatch */.FH)({name:"coming_soon_thumbnail"});var K=(0,p/* .useIsFetching */.C)({queryKey:["CourseDetails",tt]});var[N,O]=(0,s.useState)(n&&d&&(0,eQ/* .isValid */.f)(new Date("".concat(n," ").concat(d)))?(0,T/* .format */.GP)(new Date("".concat(n," ").concat(d)),C/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H):"");var P=new Date("".concat(I," ").concat(H));var L=()=>{e.setValue("schedule_date","",{shouldDirty:true});e.setValue("schedule_time","",{shouldDirty:true});e.setValue("showScheduleForm",true,{shouldDirty:true})};var R=()=>{var r=(0,e$/* .isBefore */.Y)(new Date(t),new Date);e.setValue("schedule_date",r&&N?(0,T/* .format */.GP)((0,eZ/* .parseISO */.H)(N),C/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",{shouldDirty:true});e.setValue("schedule_time",r&&N?(0,T/* .format */.GP)((0,eZ/* .parseISO */.H)(N),C/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",{shouldDirty:true})};var W=()=>{if(!n||!d){return}e.setValue("showScheduleForm",false,{shouldDirty:true});O((0,T/* .format */.GP)(new Date("".concat(n," ").concat(d)),C/* .DateFormats.yearMonthDayHourMinuteSecond24H */.UA.yearMonthDayHourMinuteSecond24H))};(0,s.useEffect)(()=>{if(f&&b){e.setFocus("schedule_date")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[b,f]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ta.scheduleOptions,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"isScheduleEnabled",control:e.control,rules:{deps:["enrollment_starts_date","enrollment_starts_time"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.Y)(e9/* ["default"] */.A,(0,o._)((0,a._)({},t),{loading:!!K,label:(0,v.__)("Schedule","tutor"),onChange:t=>{if(!t&&n&&d){e.setValue("showScheduleForm",false,{shouldDirty:true})}}}))}),f&&b&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ta.formWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:_/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"schedule_date",control:e.control,rules:{required:(0,v.__)("Schedule date is required.","tutor"),validate:{invalidDateRule:E/* .invalidDateRule */.Kh,futureDate:e=>{if((0,e$/* .isBefore */.Y)(new Date("".concat(e," +T00:00:00")),(0,eX/* .startOfDay */.o)(new Date))){return(0,v.__)("Schedule date should be in the future.","tutor")}return true},isBeforeEnrollmentStartDate:e=>{if(Y&&(0,e$/* .isBefore */.Y)(P,new Date("".concat(e," ").concat(d)))){return(0,v.__)("Schedule date should be before enrollment start date.","tutor")}return true}},deps:["enrollment_starts_date","enrollment_starts_time","schedule_time"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},t),{isClearable:false,placeholder:(0,v.__)("Select date","tutor"),disabledBefore:(0,T/* .format */.GP)(new Date,C/* .DateFormats.yearMonthDay */.UA.yearMonthDay),onChange:()=>{e.setFocus("schedule_time")},dateFormat:C/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"schedule_time",control:e.control,rules:{required:(0,v.__)("Schedule time is required.","tutor"),validate:{invalidTimeRule:E/* .invalidTimeRule */.XA,futureDate:e=>{if((0,e$/* .isBefore */.Y)(new Date("".concat(n," ").concat(e)),new Date)){return(0,v.__)("Schedule time should be in the future.","tutor")}return true},isBeforeEnrollmentStartDate:e=>{if(Y&&(0,e$/* .isBefore */.Y)(P,new Date("".concat(n," ").concat(e)))){return(0,v.__)("Schedule time should be before enrollment start date.","tutor")}return true}},deps:["schedule_date","enrollment_starts_date","enrollment_starts_time"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e8/* ["default"] */.A,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enable_coming_soon",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[(0,v.__)("Show coming soon in course list & details page","tutor"),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!te,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{"data-pro-badge":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)(e6/* ["default"] */.A,{content:(0,v.__)("Pro","tutor"),size:"small"})})})]}),disabled:!te,labelCss:ta.checkboxStartAlign}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:te,children:/*#__PURE__*/(0,l/* .jsxs */.FD)(S/* ["default"] */.A,{when:x,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"coming_soon_thumbnail",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ec/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Coming Soon Thumbnail","tutor"),buttonText:(0,v.__)("Upload Thumbnail","tutor"),infoText:/* translators: %s is the maximum allowed upload file size (e.g., "2MB") */(0,v.sprintf)((0,v.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor"),(0,y/* .formatBytes */.z3)(Number((D/* .tutorConfig */.P===null||D/* .tutorConfig */.P===void 0?void 0:D/* .tutorConfig.max_upload_size */.P.max_upload_size)||0)))}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enable_curriculum_preview",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Preview Course Curriculum","tutor")}))})]})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ta.scheduleButtonsWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"tertiary",size:"small",onClick:R,disabled:!n&&!d||(0,eQ/* .isValid */.f)(new Date("".concat(n," ").concat(d)))&&e1(new Date("".concat(n," ").concat(d)),new Date(N)),children:(0,v.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"secondary",size:"small",onClick:e.handleSubmit(W),disabled:!n||!d,children:(0,v.__)("Ok","tutor")})]})]}),f&&!b&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ta.scheduleInfoWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ta.scheduledFor,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ta.scheduleLabel,children:!x?(0,v.__)("Scheduled for","tutor"):(0,v.__)("Scheduled with coming soon","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ta.scheduleInfoButtons,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:_/* .styleUtils.actionButton */.x.actionButton,onClick:L,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"delete",width:24,height:24})}),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:_/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{e.setValue("showScheduleForm",true,{shouldDirty:true})},children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"edit",width:24,height:24})})]})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)(S/* ["default"] */.A,{when:n&&d&&(0,eQ/* .isValid */.f)(new Date("".concat(n," ").concat(d))),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ta.scheduleInfo,children:/* translators: %1$s is the date and %2$s is the time */(0,v.sprintf)((0,v.__)("%1$s at %2$s","tutor"),(0,T/* .format */.GP)((0,eZ/* .parseISO */.H)(n),C/* .DateFormats.monthDayYear */.UA.monthDayYear),d)}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:F===null||F===void 0?void 0:F.url,children:/*#__PURE__*/(0,l/* .jsx */.Y)(e2/* ["default"] */.A,{value:F,uploadHandler:y/* .noop */.lQ,clearHandler:y/* .noop */.lQ,disabled:true})})]})]})]})};/* export default */const tn=(0,N/* .withVisibilityControl */.M)(tr);var ta={scheduleOptions:/*#__PURE__*/(0,u/* .css */.AH)("padding:",m/* .spacing["12"] */.YK["12"],";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius["8"] */.Vq["8"],";gap:",m/* .spacing["8"] */.YK["8"],";background-color:",m/* .colorTokens.bg.white */.I6.bg.white,";"),formWrapper:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["8"] */.YK["8"],";margin-top:",m/* .spacing["16"] */.YK["16"],";"),scheduleButtonsWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;gap:",m/* .spacing["12"] */.YK["12"],";margin-top:",m/* .spacing["8"] */.YK["8"],";button{width:100%;span{justify-content:center;}}"),scheduleInfoWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["8"] */.YK["8"],";margin-top:",m/* .spacing["12"] */.YK["12"],";"),scheduledFor:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),scheduleLabel:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";"),scheduleInfoButtons:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:center;gap:",m/* .spacing["8"] */.YK["8"],";"),scheduleInfo:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";background-color:",m/* .colorTokens.background.status.processing */.I6.background.status.processing,";padding:",m/* .spacing["8"] */.YK["8"],";border-radius:",m/* .borderRadius["4"] */.Vq["4"],";text-align:center;"),checkboxStartAlign:/*#__PURE__*/(0,u/* .css */.AH)("span:first-of-type{gap:",m/* .spacing["4"] */.YK["4"],";align-self:flex-start;margin-top:",m/* .spacing["4"] */.YK["4"],";}[data-pro-badge]{display:inline-flex;vertical-align:middle;padding-left:",m/* .spacing["4"] */.YK["4"],";}")};// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.30.2_react@18.3.1/node_modules/react-router/dist/index.js
var to=r(75688);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormInputWithContent.tsx
var ti=r(6977);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormRadioGroup.tsx
var tl=r(33552);// EXTERNAL MODULE: external "ReactDOM"
var ts=r(75206);// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/core/dist/core.esm.js
var td=r(7697);// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+modifiers@9.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var tc=r(97313);// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+sortable@10.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var tu=r(905);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/modals/ModalWrapper.tsx
var tf=r(37547);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormInputWithPresets.tsx
var tp=r(15402);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/subscription/OfferSalePrice.tsx
var{tutor_currency:tv}=D/* .tutorConfig */.P;function th(){var e=(0,c/* .useFormContext */.xW)();var t=e.watch("offer_sale_price");var r=e.watch("regular_price");var n=!!e.watch("schedule_sale_price");return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tg.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"offer_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e9/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Offer sale price","tutor")}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tg.inputWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"sale_price",rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:e=>{if(e&&r&&Number(e)>=Number(r)){return(0,v.__)("Sale price should be less than regular price","tutor")}if(e&&r&&Number(e)<=0){return(0,v.__)("Sale price should be greater than 0","tutor")}return undefined}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ti/* ["default"] */.A,(0,o._)((0,a._)({},e),{type:"number",label:(0,v.__)("Sale Price","tutor"),content:(tv===null||tv===void 0?void 0:tv.symbol)||"$",selectOnFocus:true,contentCss:_/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"schedule_sale_price",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Schedule the sale price","tutor")}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)(S/* ["default"] */.A,{when:n,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tg.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,v.__)("Sale starts from","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:_/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"sale_price_from_date",control:e.control,rules:{required:(0,v.__)("Schedule date is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},e),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"sale_price_from_time",control:e.control,rules:{required:(0,v.__)("Schedule time is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e8/* ["default"] */.A,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tg.datetimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,v.__)("Sale ends to","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:_/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"sale_price_to_date",control:e.control,rules:{required:(0,v.__)("Schedule date is required","tutor"),validate:{checkEndDate:t=>{var r=e.watch("sale_price_from_date");var n=t;if(r&&n){return new Date(r)>new Date(n)?(0,v.__)("Sales End date should be greater than start date","tutor"):undefined}return undefined}},deps:["sale_price_from_date"]},render:t=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},t),{isClearable:false,placeholder:"yyyy-mm-dd",disabledBefore:e.watch("sale_price_from_date")||undefined}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"sale_price_to_time",control:e.control,rules:{required:(0,v.__)("Schedule time is required","tutor"),validate:{checkEndTime:t=>{var r=e.watch("sale_price_from_date");var n=e.watch("sale_price_from_time");var a=e.watch("sale_price_to_date");var o=t;if(r&&a&&n&&o){return new Date("".concat(r," ").concat(n))>new Date("".concat(a," ").concat(o))?(0,v.__)("Sales End time should be greater than start time","tutor"):undefined}return undefined}},deps:["sale_price_from_date","sale_price_from_time","sale_price_to_date"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e8/* ["default"] */.A,(0,o._)((0,a._)({},e),{interval:60,isClearable:false,placeholder:"hh:mm A"}))})]})]})]})]})})]})}var tg={wrapper:/*#__PURE__*/(0,u/* .css */.AH)("background-color:",m/* .colorTokens.background.white */.I6.background.white,";padding:",m/* .spacing["12"] */.YK["12"],";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius["8"] */.Vq["8"],";display:flex;flex-direction:column;gap:",m/* .spacing["20"] */.YK["20"],";"),inputWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["12"] */.YK["12"],";padding:",m/* .spacing["4"] */.YK["4"],";margin:-",m/* .spacing["4"] */.YK["4"],";"),datetimeWrapper:/*#__PURE__*/(0,u/* .css */.AH)("label{",b/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.title */.I6.text.title,";}")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/services/subscription.ts
var tm=[3,6,9,12];var tb={untilCancelled:(0,v.__)("Until cancelled","tutor"),noRenewal:(0,v.__)("No Renewal","tutor")};var t_={id:"0",payment_type:"recurring",plan_type:"course",assign_id:"0",plan_name:"",plan_order:"0",recurring_value:"1",recurring_interval:"month",is_featured:false,is_enabled:true,regular_price:"0",sale_price:"0",sale_price_from_date:"",sale_price_from_time:"",sale_price_to_date:"",sale_price_to_time:"",recurring_limit:(0,v.__)("Until cancelled","tutor"),do_not_provide_certificate:false,enrollment_fee:"0",trial_value:"1",trial_interval:"day",charge_enrollment_fee:false,enable_free_trial:false,offer_sale_price:false,schedule_sale_price:false};var ty=e=>{var t=()=>{if(e.recurring_limit==="0"){return tb.untilCancelled}if(e.recurring_limit==="-1"){return tb.noRenewal}return e.recurring_limit||""};var r,n,a,o,i,l,s,d,c,u,f;return{id:e.id,payment_type:(r=e.payment_type)!==null&&r!==void 0?r:"recurring",plan_type:(n=e.plan_type)!==null&&n!==void 0?n:"course",assign_id:e.assign_id,plan_name:(a=e.plan_name)!==null&&a!==void 0?a:"",plan_order:(o=e.plan_order)!==null&&o!==void 0?o:"0",recurring_value:(i=e.recurring_value)!==null&&i!==void 0?i:"0",recurring_interval:(l=e.recurring_interval)!==null&&l!==void 0?l:"month",is_featured:!!Number(e.is_featured),is_enabled:!!Number(e.is_enabled),regular_price:(s=e.regular_price)!==null&&s!==void 0?s:"0",recurring_limit:t(),enrollment_fee:(d=e.enrollment_fee)!==null&&d!==void 0?d:"0",trial_value:(c=e.trial_value)!==null&&c!==void 0?c:"0",trial_interval:(u=e.trial_interval)!==null&&u!==void 0?u:"day",sale_price:(f=e.sale_price)!==null&&f!==void 0?f:"0",charge_enrollment_fee:!!Number(e.enrollment_fee),enable_free_trial:!!Number(e.trial_value),offer_sale_price:!!Number(e.sale_price),schedule_sale_price:!!e.sale_price_from,do_not_provide_certificate:!Number(e.provide_certificate),sale_price_from_date:e.sale_price_from?(0,T/* .format */.GP)((0,y/* .convertGMTtoLocalDate */.g1)(e.sale_price_from),C/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",sale_price_from_time:e.sale_price_from?(0,T/* .format */.GP)((0,y/* .convertGMTtoLocalDate */.g1)(e.sale_price_from),C/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",sale_price_to_date:e.sale_price_to?(0,T/* .format */.GP)((0,y/* .convertGMTtoLocalDate */.g1)(e.sale_price_to),C/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",sale_price_to_time:e.sale_price_to?(0,T/* .format */.GP)((0,y/* .convertGMTtoLocalDate */.g1)(e.sale_price_to),C/* .DateFormats.hoursMinutes */.UA.hoursMinutes):""}};var tw=e=>{var t=()=>{if(e.recurring_limit===tb.untilCancelled){return"0"}if(e.recurring_limit===tb.noRenewal){return"-1"}return e.recurring_limit};return(0,o._)((0,a._)((0,o._)((0,a._)((0,o._)((0,a._)((0,o._)((0,a._)({},e.id&&String(e.id)!=="0"&&{id:e.id}),{payment_type:e.payment_type,plan_type:e.plan_type,assign_id:e.assign_id,plan_name:e.plan_name}),e.id&&String(e.id)==="0"&&{plan_order:e.plan_order},e.payment_type==="recurring"&&{recurring_value:e.recurring_value,recurring_interval:e.recurring_interval}),{regular_price:e.regular_price,recurring_limit:t(),is_featured:e.is_featured?"1":"0",is_enabled:e.is_enabled?"1":"0"}),e.charge_enrollment_fee&&{enrollment_fee:e.enrollment_fee},e.enable_free_trial&&{trial_value:e.trial_value,trial_interval:e.trial_interval}),{sale_price:e.offer_sale_price?e.sale_price:"0"}),e.schedule_sale_price&&{sale_price_from:(0,y/* .convertToGMT */.dn)(new Date("".concat(e.sale_price_from_date," ").concat(e.sale_price_from_time))),sale_price_to:(0,y/* .convertToGMT */.dn)(new Date("".concat(e.sale_price_to_date," ").concat(e.sale_price_to_time)))}),{provide_certificate:e.do_not_provide_certificate?"0":"1"})};var tx=e=>{return U/* .wpAjaxInstance.post */.b.post(j/* ["default"].GET_SUBSCRIPTIONS_LIST */.A.GET_SUBSCRIPTIONS_LIST,{object_id:e})};var tA=e=>{return(0,W/* .useQuery */.I)({queryKey:["SubscriptionsList",e],queryFn:()=>tx(e).then(e=>e.data)})};var tY=(e,t)=>{return U/* .wpAjaxInstance.post */.b.post(j/* ["default"].SAVE_SUBSCRIPTION */.A.SAVE_SUBSCRIPTION,(0,a._)({object_id:e},t.id&&{id:t.id},t))};var tk=e=>{var t=(0,f/* .useQueryClient */.jE)();var{showToast:r}=(0,z/* .useToast */.d)();return(0,B/* .useMutation */.n)({mutationFn:t=>tY(e,t),onSuccess:n=>{if(n.status_code===200||n.status_code===201){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,y/* .convertToErrorMessage */.EL)(e)})}})};var tI=(e,t)=>{return U/* .wpAjaxInstance.post */.b.post(j/* ["default"].DELETE_SUBSCRIPTION */.A.DELETE_SUBSCRIPTION,{object_id:e,id:t})};var tD=e=>{var t=(0,f/* .useQueryClient */.jE)();var{showToast:r}=(0,z/* .useToast */.d)();return(0,B/* .useMutation */.n)({mutationFn:t=>tI(e,t),onSuccess:(n,a)=>{if(n.status_code===200){r({message:n.message,type:"success"});t.setQueryData(["SubscriptionsList",e],e=>{return e.filter(e=>e.id!==String(a))})}},onError:e=>{r({type:"danger",message:(0,y/* .convertToErrorMessage */.EL)(e)})}})};var tC=(e,t)=>{return U/* .wpAjaxInstance.post */.b.post(j/* ["default"].DUPLICATE_SUBSCRIPTION */.A.DUPLICATE_SUBSCRIPTION,{object_id:e,id:t})};var tS=e=>{var t=(0,f/* .useQueryClient */.jE)();var{showToast:r}=(0,z/* .useToast */.d)();return(0,B/* .useMutation */.n)({mutationFn:t=>tC(e,t),onSuccess:n=>{if(n.data){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:(0,y/* .convertToErrorMessage */.EL)(e)})}})};var tM=(e,t)=>{return U/* .wpAjaxInstance.post */.b.post(j/* ["default"].SORT_SUBSCRIPTION */.A.SORT_SUBSCRIPTION,{object_id:e,plan_ids:t})};var tE=e=>{var t=(0,f/* .useQueryClient */.jE)();var{showToast:r}=(0,z/* .useToast */.d)();return(0,B/* .useMutation */.n)({mutationFn:t=>tM(e,t),onSuccess:(r,n)=>{if(r.status_code===200){t.setQueryData(["SubscriptionsList",e],e=>{var t=n.map(e=>String(e));return e.sort((e,r)=>t.indexOf(e.id)-t.indexOf(r.id))});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:n=>{r({type:"danger",message:(0,y/* .convertToErrorMessage */.EL)(n)});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}})};var tT=()=>{return wpAjaxInstance.get(endpoints.GET_MEMBERSHIP_PLANS).then(e=>e.data)};var tH=()=>{return useQuery({queryKey:["MembershipPlans"],queryFn:tT})};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/subscription/SubscriptionItem.tsx
var tF=250;// this is hack to fix layout shifting while animating.
var{tutor_currency:tK}=D/* .tutorConfig */.P;function tN(){var e=(0,c/* .useFormContext */.xW)();(0,s.useEffect)(()=>{var t=setTimeout(()=>{e.setFocus("plan_name")},tF);return()=>{clearTimeout(t)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);var t=e.watch("charge_enrollment_fee");// @TODO: Will be added after confirmation
// const enableTrial = form.watch(`subscriptions.${index}.enable_free_trial` as `subscriptions.0.enable_free_trial`);
var r=Object.values(tb);var n=[...tm.map(e=>({/* translators: %s: number of times. */label:(0,v.sprintf)((0,v.__)("%s times","tutor"),e.toString()),value:String(e)})),...r.map(e=>({label:e,value:e}))];return/*#__PURE__*/(0,l/* .jsx */.Y)("form",{css:tO.subscription,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:_/* .styleUtils.display.flex */.x.display.flex("column"),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tO.subscriptionContent,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"plan_name",rules:(0,E/* .requiredRule */.WN)(),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(k/* ["default"] */.A,(0,o._)((0,a._)({},e),{placeholder:(0,v.__)("Enter plan name","tutor"),label:(0,v.__)("Plan Name","tutor")}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:tO.inputGroup,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"regular_price",rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:e=>{if(Number(e)<=0){return(0,v.__)("Price must be greater than 0","tutor")}}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ti/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Price","tutor"),content:(tK===null||tK===void 0?void 0:tK.symbol)||"$",placeholder:(0,v.__)("Plan price","tutor"),selectOnFocus:true,contentCss:_/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"recurring_value",rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:e=>{if(Number(e)<1){return(0,v.__)("This value must be equal to or greater than 1","tutor")}}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(k/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Billing Interval","tutor"),placeholder:(0,v.__)("12","tutor"),selectOnFocus:true,type:"number"}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"recurring_interval",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eu/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:" "}),options:[{label:(0,v.__)("Day(s)","tutor"),value:"day"},{label:(0,v.__)("Week(s)","tutor"),value:"week"},{label:(0,v.__)("Month(s)","tutor"),value:"month"},{label:(0,v.__)("Year(s)","tutor"),value:"year"}],removeOptionsMinWidth:true}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"recurring_limit",rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:e=>{if(r.includes(e)){return true}if(Number(e)<=0){return(0,v.__)("Renew plan must be greater than 0","tutor")}return true}}),render:e=>{var t;return/*#__PURE__*/(0,l/* .jsx */.Y)(tp/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Billing Cycles","tutor"),placeholder:(0,v.__)("Select or type times to renewing the plan","tutor"),content:!r.includes((t=e.field.value)!==null&&t!==void 0?t:"")&&(0,v.__)("Times","tutor"),contentPosition:"right",type:"number",presetOptions:n,selectOnFocus:true}))}})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"charge_enrollment_fee",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Charge enrollment fee","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"enrollment_fee",rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:e=>{if(Number(e)<=0){return(0,v.__)("Enrollment fee must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ti/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Enrollment fee","tutor"),content:(tK===null||tK===void 0?void 0:tK.symbol)||"$",placeholder:(0,v.__)("Enter enrollment fee","tutor"),selectOnFocus:true,contentCss:_/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle,type:"number"}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"do_not_provide_certificate",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Do not provide certificate","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{control:e.control,name:"is_featured",render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Mark as featured","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(th,{})]})})})}var tO={trialWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:grid;grid-template-columns:1fr 1fr;align-items:start;gap:",m/* .spacing["8"] */.YK["8"],";"),subscription:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius.card */.Vq.card,";overflow:hidden;transition:border-color 0.3s ease;"),subscriptionContent:/*#__PURE__*/(0,u/* .css */.AH)("padding:",m/* .spacing["16"] */.YK["16"],";display:flex;flex-direction:column;gap:",m/* .spacing["12"] */.YK["12"],";"),inputGroup:/*#__PURE__*/(0,u/* .css */.AH)("display:grid;grid-template-columns:1fr 0.7fr 1fr 1fr;align-items:start;gap:",m/* .spacing["8"] */.YK["8"],";",m/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-template-columns:1fr;}")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/modals/SubscriptionModal.tsx
function tP(e){var{courseId:t,isBundle:r=false,icon:i,closeModal:s,subscription:d}=e;var u=(0,P/* .useFormWithGlobalError */.p)({defaultValues:d||t_,mode:"onChange"});var f=tk(t);var p=u.formState.isDirty;var m=d.isSaved;var b=e=>(0,n._)(function*(){var n=tw((0,o._)((0,a._)({},e),{id:e.isSaved?e.id:"0",assign_id:String(t),plan_type:r?"bundle":"course"}));var i=yield f.mutateAsync(n);if(i.status_code===200||i.status_code===201){s({action:"CONFIRM"})}})();return/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .FormProvider */.Op,(0,o._)((0,a._)({},u),{children:/*#__PURE__*/(0,l/* .jsx */.Y)(tf/* ["default"] */.A,{onClose:()=>s({action:"CLOSE"}),icon:p?/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"warning",width:24,height:24}):i,title:p?C/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?(0,v.__)("Unsaved Changes","tutor"):"":(0,v.__)("Subscription Plan","tutor"),subtitle:d.isSaved?(0,v.__)("Update plan","tutor"):(0,v.__)("Create plan","tutor"),maxWidth:1218,actions:p&&/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>m?u.reset():s({action:"CLOSE"}),children:m?(0,v.__)("Discard Changes","tutor"):(0,v.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{"data-cy":"save-subscription",loading:f.isPending,variant:"primary",size:"small",onClick:u.handleSubmit(b),children:m?(0,v.__)("Update","tutor"):(0,v.__)("Save","tutor")})]}),children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:tL.wrapper,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:tL.container,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:tL.content,children:/*#__PURE__*/(0,l/* .jsx */.Y)(tN,{},d.id)})})})})}))}var tL={wrapper:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;height:100%;"),container:/*#__PURE__*/(0,u/* .css */.AH)("max-width:640px;width:100%;padding-block:",m/* .spacing["40"] */.YK["40"],";margin-inline:auto;display:flex;flex-direction:column;gap:",m/* .spacing["32"] */.YK["32"],";",m/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-block:",m/* .spacing["24"] */.YK["24"],";padding-inline:",m/* .spacing["8"] */.YK["8"],";}"),content:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["16"] */.YK["16"],";")};// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@18.3.1/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var tR=r(37893);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Switch.tsx
var tW=r(80546);// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/TutorBadge.tsx
var tB={default:{background:m/* .colorTokens.background.status.drip */.I6.background.status.drip,foreground:m/* .colorTokens.text.status.primary */.I6.text.status.primary,border:m/* .colorTokens.stroke.neutral */.I6.stroke.neutral},secondary:{background:m/* .colorTokens.background.status.cancelled */.I6.background.status.cancelled,foreground:m/* .colorTokens.text.status.cancelled */.I6.text.status.cancelled,border:m/* .colorTokens.stroke.status.cancelled */.I6.stroke.status.cancelled},critical:{background:m/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail,foreground:m/* .colorTokens.text.status.failed */.I6.text.status.failed,border:m/* .colorTokens.stroke.status.fail */.I6.stroke.status.fail},warning:{background:m/* .colorTokens.background.status.warning */.I6.background.status.warning,foreground:m/* .colorTokens.text.status.pending */.I6.text.status.pending,border:m/* .colorTokens.stroke.status.warning */.I6.stroke.status.warning},success:{background:m/* .colorTokens.background.status.success */.I6.background.status.success,foreground:m/* .colorTokens.text.status.completed */.I6.text.status.completed,border:m/* .colorTokens.stroke.status.success */.I6.stroke.status.success},outline:{background:m/* .colorTokens.background.white */.I6.background.white,foreground:m/* .colorTokens.text.status.cancelled */.I6.text.status.cancelled,border:m/* .colorTokens.stroke.status.cancelled */.I6.stroke.status.cancelled}};var tz=/*#__PURE__*/d().forwardRef((e,t)=>{var{className:r,children:n,variant:a="default"}=e;return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{ref:t,className:r,css:tU.badge(a),children:n})});tz.displayName="TutorBadge";var tU={badge:e=>/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.small */.I.small("medium"),";display:inline-flex;align-items:center;border-radius:",m/* .borderRadius["30"] */.Vq["30"],";padding:",m/* .spacing["4"] */.YK["4"]," ",m/* .spacing["8"] */.YK["8"],";max-height:24px;",_/* .styleUtils.textEllipsis */.x.textEllipsis,";border:1px solid ",tB[e].border,";background-color:",tB[e].background,";color:",tB[e].foreground,";")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/molecules/ThreeDots.tsx
var tj=r(98005);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/dndkit.ts
var tq=r(66317);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/subscription/PreviewItem.tsx
function tV(){var e=(0,i._)(["\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-width: 100%;\n        min-width: 0;\n      "]);tV=function t(){return e};return e}function tG(){var e=(0,i._)(["\n          overflow: unset;\n          text-overflow: unset;\n          animation: marquee-slide ","s ease-out forwards;\n          will-change: transform;\n\n          @keyframes marquee-slide {\n            0% {\n              transform: translateX(0);\n            }\n            100% {\n              transform: translateX(-","px);\n            }\n          }\n        "]);tG=function t(){return e};return e}function tQ(){var e=(0,i._)(["\n      border-radius: ",";\n      box-shadow: ",";\n\n      [data-grabber] {\n        cursor: grabbing;\n      }\n    "]);tQ=function t(){return e};return e}function t$(){var e=(0,i._)(["\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 100%;\n      min-width: 0;\n    "]);t$=function t(){return e};return e}var tZ=60;var tX=(e,t)=>{switch(e){case"hour":return t>1?(0,v.__)("Hours","tutor"):(0,v.__)("Hour","tutor");case"day":return t>1?(0,v.__)("Days","tutor"):(0,v.__)("Day","tutor");case"week":return t>1?(0,v.__)("Weeks","tutor"):(0,v.__)("Week","tutor");case"month":return t>1?(0,v.__)("Months","tutor"):(0,v.__)("Month","tutor");case"year":return t>1?(0,v.__)("Years","tutor"):(0,v.__)("Year","tutor");case"until_cancellation":return(0,v.__)("Until Cancellation","tutor")}};var tJ=e=>{var{subscription:t,courseId:r,isBundle:i,isOverlay:d}=e;var c;var[u,f]=(0,s.useState)(false);var[p,h]=(0,s.useState)(0);var[b,_]=(0,s.useState)(0);var{showModal:y,updateModal:w,closeModal:x}=(0,eO/* .useModal */.h)();var A=tk(r);var Y=tD(r);var k=tS(r);var I=(0,s.useRef)(null);var D=(0,s.useRef)(null);var{attributes:C,listeners:M,setNodeRef:E,transform:T,transition:H,isDragging:F}=(0,tu/* .useSortable */.gl)({id:t.id||"",animateLayoutChanges:tq/* .animateLayoutChanges */.J});var N={transform:tR/* .CSS.Transform.toString */.Ks.Transform.toString(T),transition:H,opacity:F?.3:undefined,background:F?m/* .colorTokens.stroke.hover */.I6.stroke.hover:undefined};var O=(0,s.useMemo)(()=>{var e="".concat(t.recurring_limit.toString().padStart(2,"0")," ").concat((0,v.__)("Billing Cycles","tutor"));if(t.recurring_limit===tb.untilCancelled){e=(0,v.__)("Until Cancellation","tutor")}if(t.recurring_limit===tb.noRenewal){e=(0,v.__)("No Renewal","tutor")}return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:"•"}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e})]})},[t.recurring_limit]);var P=(0,s.useMemo)(()=>/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:t.payment_type==="recurring",fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:(0,v.__)("Lifetime","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:t.recurring_limit!==tb.noRenewal,fallback:"".concat(t.recurring_value.toString().padStart(2,"0")," ").concat(tX(t.recurring_interval,Number(t.recurring_value))),children:(0,v.sprintf)((0,v.__)("Renew every %1$s %2$s","tutor"),t.recurring_value.toString().padStart(2,"0"),tX(t.recurring_interval,Number(t.recurring_value)))})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:t.payment_type!=="onetime",children:O})]}),[t.payment_type,t.recurring_limit,t.recurring_interval,t.recurring_value,O]);var L=(0,s.useCallback)(e=>{var r=tw(t);A.mutate((0,o._)((0,a._)({},r),{is_enabled:e?"1":"0"}))},[t,A]);var R=(0,s.useCallback)(()=>{var e=(0,o._)((0,a._)({},t),{isSaved:true});y({component:tP,props:{icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),subscription:e,courseId:r,isBundle:i}});f(false)},[t,y,r,i]);var W=(0,s.useCallback)(()=>(0,n._)(function*(){w("subscription-delete-modal",{isLoading:true});var e=yield Y.mutateAsync(Number(t.id));if(e.status_code===200){x()}})(),[w,Y,t.id,x]);var B=(0,s.useCallback)(()=>(0,n._)(function*(){var e=yield k.mutateAsync(Number(t.id));if(e.data){f(false)}})(),[k,t.id]);var z=(0,s.useCallback)(e=>{if(e.key==="Enter"||e.key===" "){R()}},[R]);var U=(0,s.useCallback)(()=>{f(false);y({id:"subscription-delete-modal",component:eN/* ["default"] */.A,props:{title:(0,v.sprintf)((0,v.__)('Delete "%s"',"tutor"),t.plan_name),description:(0,v.__)("Are you sure you want to delete this plan? This cannot be undone.","tutor"),onConfirm:W,confirmButtonVariant:"danger"}})},[y,t.plan_name,W]);(0,s.useEffect)(()=>{var e=I.current;var t=D.current;if(!e||!t){return}var r=t.scrollWidth>e.clientWidth;if(r){var n=t.scrollWidth-e.clientWidth;_(n);h(n/tZ)}},[t.plan_name,t.payment_type,t.recurring_value,t.recurring_interval,t.recurring_limit]);var j;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{"data-cy":"subscription-preview-item",css:t0.wrapper({isActionButtonVisible:u||A.isPending,isOverlay:d,marqueeDuration:p,marqueeDistance:b}),style:N,ref:E,"aria-label":(0,v.__)("Subscription plan item","tutor"),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,(0,o._)((0,a._)({},M,C),{"data-grabber":true,name:"threeDotsVerticalDouble",width:20,height:20})),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:t0.item,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:t0.header,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("p",{css:t0.title,onClick:R,onKeyDown:z,tabIndex:0,"aria-label":(0,v.__)("Edit subscription plan","tutor"),children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{"data-plan-name":true,title:t.plan_name,children:t.plan_name}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:t.is_featured,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{style:t0.featuredIcon,name:"starFill",height:16,width:16})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!t.is_enabled,children:/*#__PURE__*/(0,l/* .jsx */.Y)(tz,{css:t0.badge,variant:"secondary",title:(0,v.__)("Inactive","tutor"),children:(0,v.__)("Inactive","tutor")})})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:t0.actionButtons,"data-action-buttons":true,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(tW/* ["default"] */.A,{checked:t.is_enabled,onChange:L,loading:A.isPending,size:"small"}),/*#__PURE__*/(0,l/* .jsxs */.FD)(tj/* ["default"] */.A,{isOpen:u,closePopover:()=>f(false),onClick:()=>f(!u),dotsOrientation:"vertical",size:"small",arrow:true,"data-three-dot":true,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(tj/* ["default"].Option */.A.Option,{icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"edit",width:16,height:16}),text:(0,v.__)("Edit","tutor"),"data-cy":"edit-subscription",onClick:R}),/*#__PURE__*/(0,l/* .jsx */.Y)(tj/* ["default"].Option */.A.Option,{icon:k.isPending?/*#__PURE__*/(0,l/* .jsx */.Y)(K/* ["default"] */.Ay,{size:16}):/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"duplicate",width:16,height:16}),text:(0,v.__)("Duplicate","tutor"),onClick:B}),/*#__PURE__*/(0,l/* .jsx */.Y)(tj/* ["default"].Option */.A.Option,{icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"delete",width:16,height:16}),text:(0,v.__)("Delete","tutor"),isTrash:true,onClick:U})]})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:t0.information,ref:I,"aria-label":(0,v.__)("Subscription plan details","tutor"),title:(j=(c=I.current)===null||c===void 0?void 0:c.textContent)!==null&&j!==void 0?j:undefined,children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{css:t0.marqueeSlide,ref:D,"data-marquee-content":true,children:/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:P})})})]})]})};var t0={wrapper:e=>{var{isActionButtonVisible:t=false,isOverlay:r=false,marqueeDuration:n=0,marqueeDistance:a=0}=e;return/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex(),";gap:",m/* .spacing["4"] */.YK["4"],";background-color:",m/* .colorTokens.background.white */.I6.background.white,";padding:",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["12"] */.YK["12"]," ",m/* .spacing["8"] */.YK["8"]," ",m/* .spacing["4"] */.YK["4"],";min-width:0;[data-grabber]{align-self:flex-start;margin-top:",m/* .spacing["2"] */.YK["2"],";color:",m/* .colorTokens.icon["default"] */.I6.icon["default"],";flex-shrink:0;cursor:grab;&:focus-visible{border-radius:",m/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";}}[data-three-dot]{height:20px;width:20px;svg{height:24px;width:24px;flex-shrink:0;}}[data-action-buttons]{opacity:",t?1:0,";background-color:inherit;}[data-marquee-content]{",a>0&&(0,u/* .css */.AH)(tV()),"}&:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";[data-action-buttons]{opacity:1;}[data-marquee-content]{",a>0&&(0,u/* .css */.AH)(tG(),n,a),"}}&:not(:last-of-type){border-bottom:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";}&:focus-within{[data-action-buttons]{opacity:1;}}",r&&(0,u/* .css */.AH)(tQ(),m/* .borderRadius.card */.Vq.card,m/* .shadow.drag */.r7.drag))},item:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;min-height:48px;",_/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:center;gap:",m/* .spacing["4"] */.YK["4"],";min-width:0;"),header:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;gap:",m/* .spacing["8"] */.YK["8"],";min-width:0;"),title:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption("medium"),";color:",m/* .colorTokens.text.primary */.I6.text.primary,";display:flex;align-items:center;cursor:pointer;[data-plan-name]{",_/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";}&:focus-visible{border-radius:",m/* .borderRadius["4"] */.Vq["4"],";outline:2px solid ",m/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),information:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;max-width:100%;min-width:0;",b/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.hints */.I6.text.hints,";display:flex;align-items:center;flex-grow:1;overflow:hidden;position:relative;white-space:nowrap;"),marqueeContent:e=>{var{shouldEllipsis:t=false}=e;return/*#__PURE__*/(0,u/* .css */.AH)("display:inline-block;white-space:nowrap;vertical-align:middle;min-width:100%;span{margin-right:",m/* .spacing["4"] */.YK["4"],";white-space:nowrap;&:last-child{margin-right:0;}}",t&&(0,u/* .css */.AH)(t$()))},marqueeSlide:/*#__PURE__*/(0,u/* .css */.AH)("display:inline-block;white-space:nowrap;vertical-align:middle;min-width:100%;span{margin-right:",m/* .spacing["4"] */.YK["4"],";white-space:nowrap;&:last-child{margin-right:0;}}"),featuredIcon:/*#__PURE__*/(0,u/* .css */.AH)("flex-shrink:0;color:",m/* .colorTokens.icon.brand */.I6.icon.brand,";"),actionButtons:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex(),";height:100%;align-items:center;gap:",m/* .spacing["8"] */.YK["8"],";"),badge:/*#__PURE__*/(0,u/* .css */.AH)("flex-shrink:0;margin-left:",m/* .spacing["8"] */.YK["8"],";font-size:",m/* .fontSize["11"] */.J["11"],";padding:0 ",m/* .spacing["6"] */.YK["6"],";")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/controls/For.tsx
var t1=r(3013);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/subscription/SubscriptionPreview.tsx
function t4(){var e=(0,i._)(["\n      border: none;\n    "]);t4=function t(){return e};return e}var t2=e=>{var{courseId:t,isBundle:r=false}=e;var i=tA(t);var d=tE(t);var{showModal:u}=(0,eO/* .useModal */.h)();var[f,p]=(0,s.useState)(null);var m=(0,td/* .useSensors */.FR)((0,td/* .useSensor */.MS)(td/* .PointerSensor */.AN,{activationConstraint:{distance:10}}),(0,td/* .useSensor */.MS)(td/* .KeyboardSensor */.uN,{coordinateGetter:tu/* .sortableKeyboardCoordinates */.JR}));var b=(0,P/* .useFormWithGlobalError */.p)({defaultValues:{subscriptions:[]},mode:"onChange"});var{move:_,fields:w}=(0,c/* .useFieldArray */.jz)({control:b.control,name:"subscriptions",keyName:"_id"});var x=i.data;(0,s.useEffect)(()=>{if(!x){return}if(w.length===0){return b.reset({subscriptions:x.map(e=>(0,o._)((0,a._)({},ty(e)),{isSaved:true}))})}var e=x.map(e=>{var t=w.find(t=>t.id===e.id);if(t){return(0,a._)({},t,(0,o._)((0,a._)({},ty(e)),{isSaved:true}))}return(0,o._)((0,a._)({},ty(e)),{isSaved:true})});b.reset({subscriptions:e});// eslint-disable-next-line react-hooks/exhaustive-deps
},[x,i.isLoading]);if(i.isLoading){return/*#__PURE__*/(0,l/* .jsx */.Y)(K/* .LoadingSection */.YE,{})}if(!i.data){return null}return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:t5.outer,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:w.length>0,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:t5.header,children:(0,v.__)("Subscriptions","tutor")})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:t5.inner({hasSubscriptions:w.length>0}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)(td/* .DndContext */.Mp,{sensors:m,collisionDetection:td/* .closestCenter */.fp,measuring:tq/* .droppableMeasuringStrategy */.s,modifiers:[tc/* .restrictToWindowEdges */.Q_],onDragStart:e=>{p(e.active.id)},onDragEnd:e=>(0,n._)(function*(){var{active:t,over:r}=e;if(!r){p(null);return}if(t.id!==r.id){var n=w.findIndex(e=>e.id===t.id);var a=w.findIndex(e=>e.id===r.id);var o=(0,y/* .moveTo */.tw)(w,n,a);_(n,a);d.mutateAsync(o.map(e=>Number(e.id)))}p(null)})(),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(tu/* .SortableContext */.gB,{items:w,strategy:tu/* .verticalListSortingStrategy */._G,children:/*#__PURE__*/(0,l/* .jsx */.Y)(t1/* ["default"] */.A,{each:w,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(tJ,{subscription:e,courseId:t,isBundle:r},e.id)})}),/*#__PURE__*/(0,ts.createPortal)(/*#__PURE__*/(0,l/* .jsx */.Y)(td/* .DragOverlay */.Hd,{children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:f,children:e=>{var n=w.find(t=>t.id===e);if(!n){return null}return/*#__PURE__*/(0,l/* .jsx */.Y)(tJ,{subscription:n,courseId:t,isBundle:r,isOverlay:true},e)}})}),document.body)]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:t5.emptyState({hasSubscriptions:w.length>0}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{"data-cy":"add-subscription",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),onClick:()=>{u({component:tP,props:{title:(0,v.__)("Manage Subscription Plans","tutor"),icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"dollarRecurring",width:24,height:24}),subscription:(0,o._)((0,a._)({},t_),{plan_order:String(w.length+1),isSaved:false}),courseId:t,isBundle:r}})},children:(0,v.__)("Add Subscription","tutor")})})]})]})};/* export default */const t6=t2;var t5={outer:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;display:flex;flex-direction:column;gap:",m/* .spacing["8"] */.YK["8"],";"),inner:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,u/* .css */.AH)("background:",m/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius.card */.Vq.card,";width:100%;overflow:hidden;",!t&&(0,u/* .css */.AH)(t4()))},header:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;",b/* .typography.body */.I.body(),";color:",m/* .colorTokens.text.title */.I6.text.title,";"),emptyState:e=>{var{hasSubscriptions:t}=e;return/*#__PURE__*/(0,u/* .css */.AH)("padding:",t?"".concat(m/* .spacing["8"] */.YK["8"]," ").concat(m/* .spacing["12"] */.YK["12"]):0,";width:100%;& > button{width:100%;}")}};// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/types.ts
var t3=r(49842);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/config/route-configs.ts + 1 modules
var t9=r(76168);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/services/course.ts
var t8=r(23334);// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/course-basic/CoursePricing.tsx
var t7=(0,e7/* .getCourseId */.p)();var re=()=>{var e,t,r,n;var i=(0,c/* .useFormContext */.xW)();var d=(0,f/* .useQueryClient */.jE)();var u=(0,p/* .useIsFetching */.C)({queryKey:["CourseDetails",t7]});var h=(0,to/* .useNavigate */.Zp)();var{state:g}=(0,to/* .useLocation */.zy)();var m=(0,c/* .useWatch */.FH)({control:i.control,name:"course_price_type"});var b=(0,c/* .useWatch */.FH)({control:i.control,name:"course_product_id"});var w=(0,c/* .useWatch */.FH)({control:i.control,name:"course_selling_option"});var x=(0,c/* .useWatch */.FH)({control:i.control,name:"is_public_course"});var A=d.getQueryData(["CourseDetails",t7]);var{tutor_currency:Y}=D/* .tutorConfig */.P;var k=!!D/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var I=!!((e=D/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.enable_tax);var M=!!((t=D/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.enable_individual_tax_control);var T=!!((r=D/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.is_tax_included_in_price);var H=(n=D/* .tutorConfig.settings */.P.settings)===null||n===void 0?void 0:n.monetize_by;// prettier-ignore
var F=(0,v.__)("You have unchecked the Tax Collection option. Please review your pricing, as your tax settings currently indicate that prices are inclusive of tax.","tutor");var K=["wc","tutor","edd"].includes(H||"")?[{label:(0,v.__)("Free","tutor"),value:"free"},{label:(0,v.__)("Paid","tutor"),value:"paid"}]:[{label:(0,v.__)("Free","tutor"),value:"free"}];var N=[{label:(0,v.__)("One-time purchase only","tutor"),value:"one_time"},{label:(0,v.__)("Subscription only","tutor"),value:"subscription"},{label:(0,v.__)("Subscription & one-time purchase","tutor"),value:"both"},{label:(0,v.__)("Membership only","tutor"),value:"membership"},{label:(0,v.__)("All","tutor"),value:"all"}];var O=(0,t8/* .useGetWcProductsQuery */.Wn)(H,t7?String(t7):"");var P=(0,t8/* .useWcProductDetailsQuery */.b8)(b,String(t7),m,k?H:undefined);var L=e=>{if(!e||!e.length){return[]}var{course_pricing:t}=A||{};var r=(t===null||t===void 0?void 0:t.product_id)&&t.product_id!=="0"&&t.product_name?{label:t.product_name||"",value:String(t.product_id)}:null;var n;var a=(n=e.map(e=>{var{post_title:t,ID:r}=e;return{label:t,value:String(r)}}))!==null&&n!==void 0?n:[];var o=[r,...a].filter(t3/* .isDefined */.O9);var i=Array.from(new Map(o.map(e=>[e.value,e])).values());return i};(0,s.useEffect)(()=>{if(O.isSuccess&&O.data){var{course_pricing:e}=A||{};if(H==="wc"&&(e===null||e===void 0?void 0:e.product_id)&&e.product_id!=="0"&&!L(O.data).find(t=>{var{value:r}=t;return String(r)===String(e.product_id)})){i.setValue("course_product_id","",{shouldValidate:true})}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[O.data]);(0,s.useEffect)(()=>{if(!D/* .tutorConfig.edd_products */.P.edd_products||!D/* .tutorConfig.edd_products.length */.P.edd_products.length){return}var{course_pricing:e}=A||{};if(H==="edd"&&(e===null||e===void 0?void 0:e.product_id)&&e.product_id!=="0"&&!D/* .tutorConfig.edd_products.find */.P.edd_products.find(t=>{var{ID:r}=t;return String(r)===String(e.product_id)})){i.setValue("course_product_id","",{shouldValidate:true})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[D/* .tutorConfig.edd_products */.P.edd_products]);(0,s.useEffect)(()=>{if(H!=="wc"){return}if(P.isSuccess&&P.data){if(g===null||g===void 0?void 0:g.isError){h(t9/* .CourseBuilderRouteConfigs.CourseBasics.buildLink */.P.CourseBasics.buildLink(),{state:{isError:false}});return}i.setValue("course_price",P.data.regular_price||"0",{shouldValidate:true});i.setValue("course_sale_price",P.data.sale_price||"0",{shouldValidate:true});return}var e=i.formState.dirtyFields.course_price;var t=i.formState.dirtyFields.course_sale_price;if(!e){i.setValue("course_price","0")}if(!t){i.setValue("course_sale_price","0")}// eslint-disable-next-line react-hooks/exhaustive-deps
},[P.data]);return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_price_type",control:i.control,rules:{validate:e=>{if(e==="paid"&&x){return(0,v.__)("Public courses cannot be paid.","tutor")}return true},deps:["is_public_course"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(tl/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Pricing Model","tutor"),options:K,wrapperCss:rr.priceRadioGroup,onSelect:e=>{if(e.value==="paid"&&x){i.setError("course_price_type",{type:"validate",message:(0,v.__)("Public courses cannot be paid.","tutor")});i.setValue("course_price_type","free")}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:(0,y/* .isAddonEnabled */.GR)(C/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&H==="tutor"&&m==="paid",children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_selling_option",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eu/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Purchase Options","tutor"),options:N}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:m==="paid"&&H==="wc",children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_product_id",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eu/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Select product","tutor"),placeholder:(0,v.__)("Select a product","tutor"),options:[{label:(0,v.__)("Select a product","tutor"),value:"-1"},...L(O.data)],helpText:k?(0,v.__)("You can select an existing WooCommerce product, alternatively, a new WooCommerce product will be created for you.","tutor"):(0,v.__)("You can select an existing WooCommerce product.","tutor"),isSearchable:true,loading:O.isLoading&&!e.field.value,isClearable:true}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:m==="paid"&&H==="edd",children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_product_id",control:i.control,rules:(0,a._)({},(0,E/* .requiredRule */.WN)()),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eu/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Select product","tutor"),placeholder:(0,v.__)("Select a product","tutor"),options:D/* .tutorConfig.edd_products */.P.edd_products?D/* .tutorConfig.edd_products.map */.P.edd_products.map(e=>({label:e.post_title,value:String(e.ID)})):[],helpText:(0,v.__)("Sell your product, process by EDD","tutor"),isSearchable:true,loading:!!u&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:m==="paid"&&!["subscription","membership"].includes(w)&&(H==="tutor"||k&&H==="wc"&&b!=="-1"),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rr.coursePriceWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_price",control:i.control,rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:e=>{if(Number(e)<=0){return(0,v.__)("Price must be greater than 0","tutor")}return true}}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ti/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Regular Price","tutor"),content:(Y===null||Y===void 0?void 0:Y.symbol)||"$",placeholder:(0,v.__)("0","tutor"),type:"number",loading:!!u&&!e.field.value,selectOnFocus:true,contentCss:_/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_sale_price",control:i.control,rules:{validate:e=>{if(!e){return true}var t=i.getValues("course_price");if(Number(e)>=Number(t)){return(0,v.__)("Sale price must be less than regular price","tutor")}return true}},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ti/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Sale Price","tutor"),content:(Y===null||Y===void 0?void 0:Y.symbol)||"$",placeholder:(0,v.__)("0","tutor"),type:"number",loading:!!u&&!e.field.value,selectOnFocus:true,contentCss:_/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))})]})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:(0,y/* .isAddonEnabled */.GR)(C/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&H==="tutor"&&m==="paid",children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!["one_time","membership"].includes(w),children:/*#__PURE__*/(0,l/* .jsx */.Y)(t6,{courseId:t7})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:m==="paid"&&H==="tutor"&&I&&M&&w!=="membership",children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rr.taxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:(0,v.__)("Tax Collection","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rr.checkboxWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:["one_time","both","all"].includes(w),children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"tax_on_single",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Charge tax on one-time purchase ","tutor"),helpText:T&&!e.field.value?F:""}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:(0,y/* .isAddonEnabled */.GR)(C/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&["subscription","both","all"].includes(w),children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"tax_on_subscription",control:i.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Charge tax on subscription","tutor"),helpText:T&&!e.field.value?F:""}))})})]})]})})]})};/* export default */const rt=(0,N/* .withVisibilityControl */.M)(re);var rr={priceRadioGroup:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:center;gap:",m/* .spacing["36"] */.YK["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:flex-start;gap:",m/* .spacing["16"] */.YK["16"],";"),taxWrapper:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",m/* .spacing["4"] */.YK["4"],";label{",b/* .typography.body */.I.body(),"      color:",m/* .colorTokens.text.title */.I6.text.title,";}"),checkboxWrapper:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",m/* .spacing["4"] */.YK["4"],";"),taxAlert:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",m/* .spacing["8"] */.YK["8"],";margin-top:",m/* .spacing["8"] */.YK["8"],";padding:",m/* .spacing["12"] */.YK["12"],";background-color:",m/* .colorTokens.color.warning["40"] */.I6.color.warning["40"],";border:1px solid ",m/* .colorTokens.color.warning["50"] */.I6.color.warning["50"],";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";"),alertTitle:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex(),"    gap:",m/* .spacing["4"] */.YK["4"],";align-items:center;",b/* .typography.caption */.I.caption("medium"),";color:",m/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";svg{color:",m/* .colorTokens.design.warning */.I6.design.warning,";flex-shrink:0;}"),alertDescription:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),"    color:",m/* .colorTokens.color.warning["100"] */.I6.color.warning["100"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/course-basic/CourseBasicSidebar.tsx
var rn=(0,e7/* .getCourseId */.p)();var ra=()=>{var e,t,r,i;var d=(0,c/* .useFormContext */.xW)();var u=(0,f/* .useQueryClient */.jE)();var h=(0,p/* .useIsFetching */.C)({queryKey:["CourseDetails",rn]});var[m,b]=(0,s.useState)("");var{showModal:_}=(0,eO/* .useModal */.h)();var w=u.getQueryData(["CourseDetails",rn]);var x=D/* .tutorConfig.current_user */.P.current_user;var A=(0,y/* .isAddonEnabled */.GR)(C/* .Addons.TUTOR_MULTI_INSTRUCTORS */.oW.TUTOR_MULTI_INSTRUCTORS);var Y=!!D/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var I=((e=D/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var M=((t=D/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.instructor_can_change_course_author)!=="off";var E=((r=D/* .tutorConfig.settings */.P.settings)===null||r===void 0?void 0:r.instructor_can_manage_co_instructors)!=="off";var H=String(x.data.id)===String((w===null||w===void 0?void 0:w.post_author.ID)||"");var F=x.roles.includes(C/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var K=((w===null||w===void 0?void 0:w.course_instructors)||[]).find(e=>String(e.id)===String(x.data.id));var N=(0,y/* .isAddonEnabled */.GR)(C/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&((i=D/* .tutorConfig.settings */.P.settings)===null||i===void 0?void 0:i.membership_only_mode);var O=d.watch("post_author");var P=Y&&A&&(F||K&&E);var L=F||H&&M;var R=(0,c/* .useWatch */.FH)({control:d.control,name:"visibility"});var W=[{label:(0,v.__)("Public","tutor"),value:"publish"},{label:(0,v.__)("Password Protected","tutor"),value:"password_protected"},{label:(0,v.__)("Private","tutor"),value:"private"}];var B=eL(m);var z=eW(String(rn),A);var U=((w===null||w===void 0?void 0:w.course_instructors)||[]).map(e=>({id:e.id,name:e.display_name,email:e.user_email,avatar_url:e.avatar_url}));var j=[...U,...z.data||[]].filter(e=>String(e.id)!==String(O===null||O===void 0?void 0:O.id));var q=()=>(0,n._)(function*(){var e=w===null||w===void 0?void 0:w.post_author;var t={id:Number(e===null||e===void 0?void 0:e.ID),name:e===null||e===void 0?void 0:e.display_name,email:e===null||e===void 0?void 0:e.user_email,avatar_url:e===null||e===void 0?void 0:e.tutor_profile_photo_url};var{action:r}=yield _({component:eN/* ["default"] */.A,props:{title:(0,v.__)("Are you sure?","tutor"),description:(0,v.__)("Changing the course author will assign all the updates and course data to the selected author.","tutor"),confirmButtonText:(0,v.__)("Yes, change author","tutor")}});if(r!=="CONFIRM"){d.setValue("post_author",t);return}t.isRemoveAble=String(e===null||e===void 0?void 0:e.ID)!==String(x.data.id);var n=d.getValues("course_instructors");var a=!!n.find(t=>String(t.id)===String(e===null||e===void 0?void 0:e.ID));var o=a?n:[...n,t];d.setValue("course_instructors",o)})();return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ri.sidebar,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ri.statusAndDate,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"visibility",control:d.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eu/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Visibility","tutor"),placeholder:(0,v.__)("Select visibility status","tutor"),options:W,leftIcon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"eye",width:32,height:32}),loading:!!h&&!e.field.value,onChange:()=>{d.setValue("post_password","")}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:w===null||w===void 0?void 0:w.post_modified,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:ri.updatedOn,children:/* translators: %s is the last updated date */(0,v.sprintf)((0,v.__)("Last updated on %s","tutor"),(0,T/* .format */.GP)(new Date(e),C/* .DateFormats.dayMonthYear */.UA.dayMonthYear)||"")})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:R==="password_protected",children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"post_password",control:d.control,rules:{required:(0,v.__)("Password is required","tutor")},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(k/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Password","tutor"),placeholder:(0,v.__)("Enter password","tutor"),type:"password",isPassword:true,loading:!!h&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsx */.Y)(tn,{visibilityKey:C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.SCHEDULING_OPTIONS */.qP.COURSE_BUILDER.BASICS.SCHEDULING_OPTIONS}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"thumbnail",control:d.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ec/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Featured Image","tutor"),buttonText:(0,v.__)("Upload Thumbnail","tutor"),infoText:(0,v.sprintf)((0,v.__)("JPEG, PNG, GIF, and WebP formats, up to %s","tutor"),(0,y/* .formatBytes */.z3)(Number((D/* .tutorConfig */.P===null||D/* .tutorConfig */.P===void 0?void 0:D/* .tutorConfig.max_upload_size */.P.max_upload_size)||0))),generateWithAi:!Y||I,loading:!!h&&!e.field.value,visibilityKey:C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.FEATURED_IMAGE */.qP.COURSE_BUILDER.BASICS.FEATURED_IMAGE}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"video",control:d.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eK/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Intro Video","tutor"),buttonText:(0,v.__)("Upload Video","tutor"),infoText:(0,v.sprintf)((0,v.__)("MP4, and WebM formats, up to %s","tutor"),(0,y/* .formatBytes */.z3)(Number((D/* .tutorConfig */.P===null||D/* .tutorConfig */.P===void 0?void 0:D/* .tutorConfig.max_upload_size */.P.max_upload_size)||0))),loading:!!h&&!e.field.value,visibilityKey:C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.INTRO_VIDEO */.qP.COURSE_BUILDER.BASICS.INTRO_VIDEO}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!N,children:/*#__PURE__*/(0,l/* .jsx */.Y)(rt,{visibilityKey:C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.PRICING_OPTIONS */.qP.COURSE_BUILDER.BASICS.PRICING_OPTIONS})}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_categories",control:d.control,defaultValue:[],render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ei,(0,o._)((0,a._)({},e),{label:(0,v.__)("Categories","tutor"),visibilityKey:C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.CATEGORIES */.qP.COURSE_BUILDER.BASICS.CATEGORIES}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_tags",control:d.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eH,(0,o._)((0,a._)({},e),{label:(0,v.__)("Tags","tutor"),placeholder:(0,v.__)("Add tags","tutor"),visibilityKey:C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.TAGS */.qP.COURSE_BUILDER.BASICS.TAGS}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"post_author",control:d.control,render:e=>{var t;var r;return/*#__PURE__*/(0,l/* .jsx */.Y)(ey,(0,o._)((0,a._)({},e),{label:(0,v.__)("Author","tutor"),options:(r=(t=B.data)===null||t===void 0?void 0:t.map(e=>({id:e.id,name:e.name||"",email:e.email||"",avatar_url:e.avatar_url||""})))!==null&&r!==void 0?r:[],placeholder:(0,v.__)("Search to add author","tutor"),isSearchable:true,disabled:!L,loading:B.isLoading,onChange:q,handleSearchOnChange:e=>{b(e)},visibilityKey:C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.AUTHOR */.qP.COURSE_BUILDER.BASICS.AUTHOR}))}}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:P,children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_instructors",control:d.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ey,(0,o._)((0,a._)({},e),{label:(0,v.__)("Instructors","tutor"),options:j,placeholder:(0,v.__)("Search to add instructor","tutor"),isSearchable:true,isMultiSelect:true,loading:z.isLoading&&!e.field.value,emptyStateText:(0,v.__)("No instructors added.","tutor"),isInstructorMode:true,visibilityKey:C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.INSTRUCTORS */.qP.COURSE_BUILDER.BASICS.INSTRUCTORS,postAuthor:w===null||w===void 0?void 0:w.post_author}))})})]})};/* export default */const ro=ra;var ri={sidebar:/*#__PURE__*/(0,u/* .css */.AH)("border-left:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";min-height:calc(100vh - ",m/* .headerHeight */.$A,"px);padding-left:",m/* .spacing["32"] */.YK["32"],";padding-block:",m/* .spacing["24"] */.YK["24"],";display:flex;flex-direction:column;gap:",m/* .spacing["16"] */.YK["16"],";",m/* .Breakpoint.smallTablet */.EA.smallTablet,"{border-left:none;border-top:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding-block:",m/* .spacing["16"] */.YK["16"],";padding-left:0;}"),statusAndDate:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["4"] */.YK["4"],";"),updatedOn:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.hints */.I6.text.hints,";"),priceRadioGroup:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:center;gap:",m/* .spacing["36"] */.YK["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:flex-start;gap:",m/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormMultiSelectInput.tsx
function rl(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);rl=function t(){return e};return e}var rs=e=>{var{field:t,fieldState:r,label:n,placeholder:i="",disabled:d,readOnly:c,loading:u,helpText:f,removeOptionsMinWidth:p=false,options:h}=e;var g=t.value||[];var m=h.filter(e=>g.includes(e.value));var[b,_]=(0,s.useState)("");var y=(0,O/* .useDebounce */.d)(b);var x=h.filter(e=>e.label.toLowerCase().includes(y.toLowerCase()));var[A,Y]=(0,s.useState)(false);var k=(0,s.useRef)(null);var I=(e,r)=>{if(e){t.onChange([...g,r])}else{t.onChange(g.filter(e=>e!==r))}};return/*#__PURE__*/(0,l/* .jsx */.Y)(w/* ["default"] */.A,{fieldState:r,field:t,label:n,disabled:d,readOnly:c,loading:u,helpText:f,children:e=>{var{css:t}=e,r=(0,ef._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rc.mainWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rc.inputWrapper,ref:k,children:/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,o._)((0,a._)({},r),{css:[t,rc.input],onClick:()=>Y(true),autoComplete:"off",readOnly:c,placeholder:i,value:b,onChange:e=>{_(e.target.value)}}))}),g.length>0&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rc.selectedOptionsWrapper,children:m.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)(ek,{label:e.label,onClick:()=>I(false,e.value)},e.value))}),/*#__PURE__*/(0,l/* .jsx */.Y)(Z/* ["default"] */.A,{triggerRef:k,isOpen:A,closePopover:()=>Y(false),animationType:$/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)("ul",{css:[rc.options(p)],children:/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:x.length>0,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:rc.notTag,children:(0,v.__)("No option available.","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(t1/* ["default"] */.A,{each:x,children:e=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:rc.optionItem,children:/*#__PURE__*/(0,l/* .jsx */.Y)(F/* ["default"] */.A,{label:e.label,checked:!!g.find(t=>t===e.value),onChange:t=>I(t,e.value)})},e.value)})})})})]})}})};/* export default */const rd=rs;var rc={mainWrapper:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;"),notTag:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";min-height:80px;display:flex;justify-content:center;align-items:center;color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";"),inputWrapper:/*#__PURE__*/(0,u/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),input:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.body */.I.body(),";width:100%;",_/* .styleUtils.textEllipsis */.x.textEllipsis,";:focus{outline:none;box-shadow:",m/* .shadow.focus */.r7.focus,";}"),selectedOptionsWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-wrap:wrap;align-items:center;gap:",m/* .spacing["4"] */.YK["4"],";margin-top:",m/* .spacing["8"] */.YK["8"],";"),options:e=>/*#__PURE__*/(0,u/* .css */.AH)("z-index:",m/* .zIndex.dropdown */.fE.dropdown,";background-color:",m/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",m/* .shadow.popover */.r7.popover,";padding:",m/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:400px;border-radius:",m/* .borderRadius["6"] */.Vq["6"],";",_/* .styleUtils.overflowYAuto */.x.overflowYAuto,";",!e&&(0,u/* .css */.AH)(rl())),optionItem:/*#__PURE__*/(0,u/* .css */.AH)("min-height:40px;height:100%;width:100%;display:flex;align-items:center;padding:",m/* .spacing["8"] */.YK["8"],";transition:background-color 0.3s ease-in-out;label{width:100%;}&:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}"),addTag:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.resetButton */.x.resetButton,";",b/* .typography.body */.I.body(),"    line-height:",m/* .lineHeight["24"] */.K_["24"],";display:flex;align-items:center;gap:",m/* .spacing["4"] */.YK["4"],";width:100%;padding:",m/* .spacing["8"] */.YK["8"],";&:hover{background-color:",m/* .colorTokens.background.hover */.I6.background.hover,";}")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useVisibilityControl.tsx
var ru=r(78988);// EXTERNAL MODULE: ./assets/src/js/v3/shared/molecules/Tabs.tsx
var rf=r(88893);// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/course-basic/ContentDripSettings.tsx
var rp=()=>{var e=(0,c/* .useFormContext */.xW)();var t=[{label:(0,v.__)("Schedule course content by date","tutor"),value:"unlock_by_date"},{label:(0,v.__)("Content available after X days from enrollment","tutor"),value:"specific_days"},{label:(0,v.__)("Course content available sequentially","tutor"),value:"unlock_sequentially"},{label:(0,v.__)("Course content unlocked after finishing prerequisites","tutor"),value:"after_finishing_prerequisites",labelCss:/*#__PURE__*/(0,u/* .css */.AH)("align-items:start;span{top:3px;}")},{label:(0,v.__)("None","tutor"),value:""}];if(!D/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url){return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rh.dripNoProWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"crown",width:72,height:72}),/*#__PURE__*/(0,l/* .jsx */.Y)("h6",{css:b/* .typography.body */.I.body("medium"),children:(0,v.__)("Content Drip is a pro feature","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:rh.dripNoProDescription,children:(0,v.__)("You can schedule your course content using  content drip options","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"crown",width:24,height:24}),onClick:()=>{window.open(D/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener")},children:(0,v.__)("Get Tutor LMS Pro","tutor")})]})}if(!(0,y/* .isAddonEnabled */.GR)(C/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)){return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rh.dripNoProWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"contentDrip",width:72,height:72,style:rh.dripIcon}),/*#__PURE__*/(0,l/* .jsx */.Y)("h6",{css:b/* .typography.body */.I.body("medium"),children:(0,v.__)("Activate the “Content Drip” addon to use this feature.","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:rh.dripNoProDescription,children:(0,v.__)("Control when students can access lessons and quizzes using the Content Drip feature.","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"linkExternal",width:24,height:24}),onClick:()=>{window.open(D/* ["default"].TUTOR_ADDONS_PAGE */.A.TUTOR_ADDONS_PAGE,"_blank","noopener")},children:(0,v.__)("Enable Content Drip Addon","tutor")})]})}return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rh.dripWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("h6",{css:rh.dripTitle,children:(0,v.__)("Content Drip Type","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:rh.dripSubTitle,children:(0,v.__)("You can schedule your course content using one of the following Content Drip options","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"contentDripType",control:e.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(tl/* ["default"] */.A,(0,o._)((0,a._)({},e),{options:t,wrapperCss:rh.radioWrapper}))})]})};/* export default */const rv=rp;var rh={dripWrapper:/*#__PURE__*/(0,u/* .css */.AH)("background-color:",m/* .colorTokens.background.white */.I6.background.white,";padding:",m/* .spacing["16"] */.YK["16"]," ",m/* .spacing["24"] */.YK["24"]," ",m/* .spacing["32"] */.YK["32"]," ",m/* .spacing["32"] */.YK["32"],";min-height:400px;",m/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding:",m/* .spacing["16"] */.YK["16"],";}"),dripTitle:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.body */.I.body("medium"),";margin-bottom:",m/* .spacing["4"] */.YK["4"],";"),dripSubTitle:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.small */.I.small(),";color:",m/* .colorTokens.text.hints */.I6.text.hints,";margin-bottom:",m/* .spacing["16"] */.YK["16"],";"),radioWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["8"] */.YK["8"],";"),dripNoProWrapper:/*#__PURE__*/(0,u/* .css */.AH)("min-height:400px;background:",m/* .colorTokens.background.white */.I6.background.white,";display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",m/* .spacing["4"] */.YK["4"],";padding:",m/* .spacing["24"] */.YK["24"],";text-align:center;"),dripNoProDescription:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.subdued */.I6.text.subdued,";max-width:320px;margin:0 auto ",m/* .spacing["12"] */.YK["12"],";"),dripIcon:/*#__PURE__*/(0,u/* .css */.AH)("color:",m/* .colorTokens.icon.brand */.I6.icon.brand,";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/course-basic/EnrollmentSettings.tsx
function rg(){var e=(0,i._)(["\n      padding-bottom: ",";\n    "]);rg=function t(){return e};return e}var rm=(0,e7/* .getCourseId */.p)();var rb=()=>{var e,t;var r=!!D/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var n=(0,c/* .useFormContext */.xW)();var i=(0,p/* .useIsFetching */.C)({queryKey:["CourseDetails",rm]});var d=(0,c/* .useWatch */.FH)({control:n.control,name:"course_enrollment_period"});var u=(0,c/* .useWatch */.FH)({control:n.control,name:"enrollment_starts_date"});var f=(0,c/* .useWatch */.FH)({control:n.control,name:"enrollment_starts_time"});var g=(0,c/* .useWatch */.FH)({control:n.control,name:"enrollment_ends_date"});var m=(0,c/* .useWatch */.FH)({control:n.control,name:"isScheduleEnabled"});var b=(0,c/* .useWatch */.FH)({control:n.control,name:"schedule_date"});var w=(0,c/* .useWatch */.FH)({control:n.control,name:"schedule_time"});var[x,A]=(0,s.useState)(false);var Y=(0,y/* .isAddonEnabled */.GR)(C/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION)&&((e=D/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.membership_only_mode);var I=(0,y/* .isAddonEnabled */.GR)(C/* .Addons.ENROLLMENT */.oW.ENROLLMENT);var M=new Date("".concat(b," ").concat(w));return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ry.wrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"maximum_students",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(k/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Maximum Student","tutor"),helpText:(0,v.__)("Number of students that can enrol in this course. Set 0 for no limits.","tutor"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!i&&!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)(S/* ["default"] */.A,{when:r&&I,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!Y&&((t=D/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.enrollment_expiry_enabled)==="on",children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enrollment_expiry",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(k/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Enrollment Expiration","tutor"),helpText:(0,v.__)("Student's enrollment will be removed after this number of days. Set 0 for lifetime enrollment.","tutor"),placeholder:"0",type:"number",isClearable:true,selectOnFocus:true,loading:!!i&&!e.field.value}))})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ry.enrollmentPeriod({isEnabled:d}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_enrollment_period",control:n.control,rules:{deps:["schedule_date","schedule_time",...u?["enrollment_starts_date"]:[],...f?["enrollment_starts_time"]:[],"enrollment_ends_date","enrollment_ends_time"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e9/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Course Enrollment Period","tutor"),loading:!!i&&!e.field.value,onChange:e=>{if(!e){n.clearErrors(["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"])}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:d,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ry.enrollmentDateWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ry.enrollmentDate,children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{htmlFor:"enrollment_starts_at",children:(0,v.__)("Start Date","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{id:"enrollment_starts_at",css:_/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enrollment_starts_date",control:n.control,rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:{invalidDate:E/* .invalidDateRule */.Kh,isAfterScheduleDate:e=>{if(m&&M&&(0,e$/* .isBefore */.Y)((0,eX/* .startOfDay */.o)(new Date(e)),(0,eX/* .startOfDay */.o)(new Date(b)))){return(0,v.__)("Start date should be after the schedule date","tutor")}}},deps:["schedule_date","schedule_time","enrollment_starts_time","enrollment_ends_date","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,v.__)("Start Date","tutor"),dateFormat:C/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enrollment_starts_time",control:n.control,rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:{invalidTime:E/* .invalidTimeRule */.XA,isAfterScheduleTime:e=>{if(m&&M&&(0,e$/* .isBefore */.Y)(new Date("".concat(u," ").concat(e)),M)){return(0,v.__)("Start time should be after the schedule time","tutor")}}},deps:["schedule_date","schedule_time","enrollment_starts_date","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e8/* ["default"] */.A,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,v.__)("hh:mm a","tutor")}))})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:x||g,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"secondary",size:"small",onClick:()=>A(true),disabled:!!i||!u||!f,children:(0,v.__)("Add End Date","tutor")})}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:ry.enrollmentDate,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("label",{htmlFor:"enrollment_ends_at",children:[/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:(0,v.__)("End Date","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>{A(false);n.setValue("enrollment_ends_date","");n.setValue("enrollment_ends_time","")},css:ry.removeButton,children:(0,v.__)("Remove","tutor")})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{id:"enrollment_ends_at",css:_/* .styleUtils.dateAndTimeWrapper */.x.dateAndTimeWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enrollment_ends_date",control:n.control,rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:{invalidDate:E/* .invalidDateRule */.Kh,checkEndDate:e=>{if((0,e$/* .isBefore */.Y)((0,eX/* .startOfDay */.o)(new Date(e)),(0,eX/* .startOfDay */.o)(new Date(u)))){return(0,v.__)("End date should be after the start date","tutor")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_time"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e3/* ["default"] */.A,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,v.__)("End Date","tutor"),disabledBefore:u,dateFormat:C/* .DateFormats.monthDayYear */.UA.monthDayYear}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enrollment_ends_time",control:n.control,rules:(0,o._)((0,a._)({},(0,E/* .requiredRule */.WN)()),{validate:{invalidTime:E/* .invalidTimeRule */.XA,checkEndTime:e=>{if(u&&g&&f&&!(0,e$/* .isBefore */.Y)(new Date("".concat(u," ").concat(f)),new Date("".concat(g," ").concat(e)))){return(0,v.__)("End time should be after the start time","tutor")}}},deps:["enrollment_starts_date","enrollment_starts_time","enrollment_ends_date"]}),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e8/* ["default"] */.A,(0,o._)((0,a._)({},e),{loading:!!i&&!e.field.value,placeholder:(0,v.__)("hh:mm a","tutor")}))})]})]})})]})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"pause_enrollment",control:n.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Pause Enrollment","tutor"),description:(0,v.__)("If you pause enrolment, students will no longer be able to enroll in the course.","tutor")}))})]})]})};/* export default */const r_=rb;var ry={wrapper:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["16"] */.YK["16"],";background-color:",m/* .colorTokens.background.white */.I6.background.white,";padding:",m/* .spacing["16"] */.YK["16"]," ",m/* .spacing["24"] */.YK["24"]," ",m/* .spacing["32"] */.YK["32"]," ",m/* .spacing["32"] */.YK["32"],";min-height:400px;",m/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding:",m/* .spacing["16"] */.YK["16"],";}"),enrollmentPeriod:e=>{var{isEnabled:t=false}=e;return/*#__PURE__*/(0,u/* .css */.AH)("padding:",m/* .spacing["12"] */.YK["12"],";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius["8"] */.Vq["8"],";background-color:",m/* .colorTokens.bg.white */.I6.bg.white,";",t&&(0,u/* .css */.AH)(rg(),m/* .spacing["16"] */.YK["16"]))},enrollmentDateWrapper:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["8"] */.YK["8"],";margin-top:",m/* .spacing["16"] */.YK["16"],";"),enrollmentDate:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["4"] */.YK["4"],";label{",_/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;justify-content:space-between;",b/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.title */.I6.text.title,";}"),removeButton:/*#__PURE__*/(0,u/* .css */.AH)("margin-left:auto;padding:0;")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/course-basic/CourseSettings.tsx
var rw=(0,e7/* .getCourseId */.p)();var rx=()=>{var e,t;var r=(0,c/* .useFormContext */.xW)();var n=(0,p/* .useIsFetching */.C)({queryKey:["CourseDetails",rw]});var i=(0,ru/* ["default"] */.A)(C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.GENERAL */.qP.COURSE_BUILDER.BASICS.OPTIONS.GENERAL);var d=(0,ru/* ["default"] */.A)(C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.CONTENT_DRIP */.qP.COURSE_BUILDER.BASICS.OPTIONS.CONTENT_DRIP);var f=(0,ru/* ["default"] */.A)(C/* .VisibilityControlKeys.COURSE_BUILDER.BASICS.OPTIONS.ENROLLMENT */.qP.COURSE_BUILDER.BASICS.OPTIONS.ENROLLMENT);var h=r.watch("contentDripType");var _=r.watch("enable_tutor_bp");var w=r.watch("course_price_type")==="paid";var x=[i&&{label:(0,v.__)("General","tutor"),value:"general",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"settings",width:24,height:24})},d&&{label:(0,v.__)("Content Drip","tutor"),value:"content_drip",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"contentDrip",width:24,height:24}),activeBadge:!!h},f&&{label:(0,v.__)("Enrollment","tutor"),value:"enrollment",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"update",width:24,height:24})},(0,y/* .isAddonEnabled */.GR)(C/* .Addons.BUDDYPRESS */.oW.BUDDYPRESS)&&{label:(0,v.__)("BuddyPress","tutor"),value:"buddyPress",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{name:"buddyPress",width:24,height:24}),activeBadge:_}].filter(Boolean);var[A,Y]=(0,s.useState)(((e=x[0])===null||e===void 0?void 0:e.value)||"general");if(!x.length){return null}var k=C/* .CURRENT_VIEWPORT.isAboveSmallMobile */.vN.isAboveSmallMobile?x:x.map(e=>(0,o._)((0,a._)({},e),{label:A===e.value?e.label:""}));var I=(D/* .tutorConfig.difficulty_levels */.P.difficulty_levels||[]).map(e=>({label:e.label,value:e.value}));return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("label",{css:b/* .typography.caption */.I.caption(),children:(0,v.__)("Options","tutor")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{"data-cy":"course-settings",css:rY.courseSettings,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(rf/* ["default"] */.A,{tabList:k,activeTab:A,onChange:Y,orientation:!C/* .CURRENT_VIEWPORT.isAboveSmallMobile */.vN.isAboveSmallMobile?"horizontal":"vertical",wrapperCss:/*#__PURE__*/(0,u/* .css */.AH)("button{min-width:auto;}")}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:{borderLeft:"1px solid ".concat(m/* .colorTokens.stroke.divider */.I6.stroke.divider)},children:[A==="general"&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rY.settingsOptions,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"course_level",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(eu/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Difficulty Level","tutor"),placeholder:(0,v.__)("Select Difficulty Level","tutor"),helpText:(0,v.__)("Course difficulty level","tutor"),options:I,isClearable:false,loading:!!n&&!e.field.value}))}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rY.courseAndQna,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"is_public_course",control:r.control,rules:{validate:e=>{if(e&&w){return(0,v.__)("Paid courses cannot be public.","tutor")}return true},deps:["course_price_type"]},render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e9/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Public Course","tutor"),helpText:(0,v.__)("Make This Course Public. No Enrollment Required.","tutor"),loading:!!n&&!e.field.value,onChange:e=>{if(w&&e){r.setValue("is_public_course",false);r.setError("is_public_course",{type:"validate",message:(0,v.__)("Paid courses cannot be public.","tutor")})}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:((t=D/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.enable_q_and_a_on_course)==="on",children:/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enable_qna",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e9/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Q&A","tutor"),helpText:(0,v.__)("Enable Q&A section for your course","tutor"),loading:!!n&&!e.field.value}))})})]})]}),A==="content_drip"&&/*#__PURE__*/(0,l/* .jsx */.Y)(rv,{}),A==="enrollment"&&/*#__PURE__*/(0,l/* .jsx */.Y)(r_,{}),A==="buddyPress"&&/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rY.settingsOptions,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"enable_tutor_bp",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(e5/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Enable BuddyPress group activity feeds","tutor")}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"bp_attached_group_ids",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(rd,(0,o._)((0,a._)({},e),{label:(0,v.__)("BuddyPress Groups","tutor"),helpText:(0,v.__)("Assign this course to BuddyPress Groups","tutor"),placeholder:(0,v.__)("Search BuddyPress Groups","tutor"),options:(D/* .tutorConfig.bp_groups */.P.bp_groups||[]).map(e=>({label:e.name,value:String(e.id)})),loading:!!n&&!e.field.value}))})]})]})]})]})};/* export default */const rA=rx;var rY={courseSettings:/*#__PURE__*/(0,u/* .css */.AH)("display:grid;grid-template-columns:200px 1fr;margin-top:",m/* .spacing["12"] */.YK["12"],";border:1px solid ",m/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",m/* .borderRadius["6"] */.Vq["6"],";background-color:",m/* .colorTokens.background["default"] */.I6.background["default"],";overflow:hidden;",m/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-template-columns:1fr;}"),settingsOptions:/*#__PURE__*/(0,u/* .css */.AH)("min-height:400px;display:flex;flex-direction:column;gap:",m/* .spacing["12"] */.YK["12"],";padding:",m/* .spacing["16"] */.YK["16"]," ",m/* .spacing["32"] */.YK["32"]," ",m/* .spacing["48"] */.YK["48"]," ",m/* .spacing["32"] */.YK["32"],";background-color:",m/* .colorTokens.background.white */.I6.background.white,";",m/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding:",m/* .spacing["16"] */.YK["16"],";}"),courseAndQna:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["32"] */.YK["32"],";margin-top:",m/* .spacing["12"] */.YK["12"],";")};// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/components/CourseBuilderSlot.tsx + 3 modules
var rk=r(89041);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/components/layouts/Navigator.tsx
var rI=r(45934);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var rD=r(79100);// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/pages/CourseBasic.tsx
function rC(){var e=(0,i._)(["\n      z-index: ",";\n    "]);rC=function t(){return e};return e}var rS=(0,e7/* .getCourseId */.p)();var rM=false;var rE=()=>{var e;var{fields:t}=(0,rD/* .useCourseBuilderSlot */._)();var r=(0,c/* .useFormContext */.xW)();var i=(0,f/* .useQueryClient */.jE)();var d=(0,p/* .useIsFetching */.C)({queryKey:["CourseDetails",rS]});var u=(0,t8/* .useUpdateCourseMutation */.VD)();var h=(0,M/* .useUnlinkPageBuilderMutation */.gr)();var[g,m]=(0,s.useState)(false);var b=i.getQueryData(["CourseDetails",rS]);var _=!!D/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var w=((e=D/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.chatgpt_enable)==="on";var x=r.watch("post_status");var A=r.watch("editor_used");return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rH.wrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rH.mainForm({isWpEditorFullScreen:g}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rH.fieldsWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:rH.titleAndSlug,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"post_title",control:r.control,rules:(0,a._)({},(0,E/* .requiredRule */.WN)(),(0,E/* .maxLimitRule */.wA)(255)),render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(k/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Title","tutor"),placeholder:(0,v.__)("ex. Learn Photoshop CS6 from scratch","tutor"),isClearable:true,generateWithAi:!_||w,loading:!!d&&!e.field.value,onChange:e=>{if(x==="draft"&&!rM){r.setValue("post_name",(0,y/* .convertToSlug */.qz)(String(e)),{shouldValidate:true,shouldDirty:true})}}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"post_name",control:r.control,render:e=>{var t;return/*#__PURE__*/(0,l/* .jsx */.Y)(Y,(0,o._)((0,a._)({},e),{label:(0,v.__)("Course URL","tutor"),baseURL:"".concat(D/* .tutorConfig.home_url */.P.home_url,"/").concat((t=D/* .tutorConfig.settings */.P.settings)===null||t===void 0?void 0:t.course_permalink_base),onChange:()=>{rM=true}}))}})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(c/* .Controller */.xI,{name:"post_content",control:r.control,render:e=>/*#__PURE__*/(0,l/* .jsx */.Y)(I/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,v.__)("Description","tutor"),loading:!!d&&!e.field.value,max_height:280,generateWithAi:!_||w,hasCustomEditorSupport:true,editorUsed:A,editors:b===null||b===void 0?void 0:b.editors,onCustomEditorButtonClick:()=>{return r.handleSubmit(e=>{var n=(0,t8/* .convertCourseDataToPayload */.Qw)(e,(0,y/* .findSlotFields */.DE)({fields:t.Basic},{fields:t.Additional}));return u.mutateAsync((0,o._)((0,a._)({course_id:rS},n),{post_status:(0,y/* .determinePostStatus */.q9)(r.getValues("post_status"),r.getValues("visibility"))}))})()},onBackToWPEditorClick:e=>(0,n._)(function*(){return h.mutateAsync({courseId:rS,builder:e}).then(e=>{r.setValue("editor_used",{name:"classic",label:(0,v.__)("Classic Editor","tutor"),link:""});return e})})(),onFullScreenChange:e=>{m(e)}}))}),/*#__PURE__*/(0,l/* .jsx */.Y)(rk/* ["default"] */.A,{section:"Basic.after_description",form:r}),/*#__PURE__*/(0,l/* .jsx */.Y)(rA,{}),/*#__PURE__*/(0,l/* .jsx */.Y)(rk/* ["default"] */.A,{section:"Basic.after_settings",form:r})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:C/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,l/* .jsx */.Y)(rI/* ["default"] */.A,{styleModifier:rH.navigator})})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(ro,{}),/*#__PURE__*/(0,l/* .jsx */.Y)(S/* ["default"] */.A,{when:!C/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,l/* .jsx */.Y)(rI/* ["default"] */.A,{styleModifier:rH.navigator})})]})};/* export default */const rT=rE;var rH={wrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:grid;grid-template-columns:1fr 338px;gap:",m/* .spacing["32"] */.YK["32"],";width:100%;",m/* .Breakpoint.smallTablet */.EA.smallTablet,"{grid-template-columns:1fr;gap:0;}"),mainForm:e=>{var{isWpEditorFullScreen:t}=e;return/*#__PURE__*/(0,u/* .css */.AH)("padding-block:",m/* .spacing["32"] */.YK["32"]," ",m/* .spacing["24"] */.YK["24"],";align-self:start;top:",m/* .headerHeight */.$A,"px;position:sticky;",t&&(0,u/* .css */.AH)(rC(),m/* .zIndex.header */.fE.header+1)," ",m/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding-top:",m/* .spacing["16"] */.YK["16"],";position:unset;}")},fieldsWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["24"] */.YK["24"],";"),titleAndSlug:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;flex-direction:column;gap:",m/* .spacing["8"] */.YK["8"],";"),sidebar:/*#__PURE__*/(0,u/* .css */.AH)("border-left:1px solid ",m/* .colorTokens.stroke.divider */.I6.stroke.divider,";min-height:calc(100vh - ",m/* .headerHeight */.$A,"px);padding-left:",m/* .spacing["32"] */.YK["32"],";padding-block:",m/* .spacing["24"] */.YK["24"],";display:flex;flex-direction:column;gap:",m/* .spacing["16"] */.YK["16"],";"),priceRadioGroup:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:center;gap:",m/* .spacing["36"] */.YK["36"],";"),coursePriceWrapper:/*#__PURE__*/(0,u/* .css */.AH)("display:flex;align-items:flex-start;gap:",m/* .spacing["16"] */.YK["16"],";"),navigator:/*#__PURE__*/(0,u/* .css */.AH)("margin-top:",m/* .spacing["40"] */.YK["40"],";",m/* .Breakpoint.smallTablet */.EA.smallTablet,"{margin-top:0;}"),statusAndDate:/*#__PURE__*/(0,u/* .css */.AH)(_/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",m/* .spacing["4"] */.YK["4"],";"),updatedOn:/*#__PURE__*/(0,u/* .css */.AH)(b/* .typography.caption */.I.caption(),";color:",m/* .colorTokens.text.hints */.I6.text.hints,";")}},81253:function(e,t,r){r.d(t,{A:()=>w});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(60599);/* import */var i=r(52639);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);/* import */var d=r(42771);/* import */var c=r(13448);/* import */var u=r(81547);/* import */var f=r(33231);function p(){var e=(0,o._)(["\n      cursor: not-allowed;\n    "]);p=function t(){return e};return e}function v(){var e=(0,o._)(["\n      color: ",";\n    "]);v=function t(){return e};return e}function h(){var e=(0,o._)(["\n        margin-right: ",";\n      "]);h=function t(){return e};return e}function g(){var e=(0,o._)(["\n        background-color: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,o._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);m=function t(){return e};return e}function b(){var e=(0,o._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);b=function t(){return e};return e}var _=/*#__PURE__*/s().forwardRef((e,t)=>{var{id:r=(0,f/* .nanoid */.Ak)(),name:o,labelCss:l,inputCss:d,label:c="",checked:u,value:p,disabled:v=false,onChange:h,onBlur:g,isIndeterminate:m=false}=e;var b=e=>{h===null||h===void 0?void 0:h(!m?e.target.checked:true,e)};var _=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/s().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,i/* .jsxs */.FD)("label",{htmlFor:r,css:[y.container({disabled:v}),l],children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,a._)((0,n._)({},e),{ref:t,id:r,name:o,type:"checkbox",value:p,checked:!!u,disabled:v,"aria-invalid":e["aria-invalid"],onChange:b,onBlur:g,css:[d,y.checkbox({label:!!c,isIndeterminate:m,disabled:v})]})),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:[y.label({isDisabled:v}),l],title:_(c),children:c})]})});var y={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,d/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",c/* .colorTokens.text.title */.I6.text.title,";",t&&(0,d/* .css */.AH)(p()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,d/* .css */.AH)(u/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.title */.I6.text.title,";",t&&(0,d/* .css */.AH)(v(),c/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;display:none !important;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,d/* .css */.AH)(h(),c/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",c/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",c/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",c/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",c/* .borderRadius["4"] */.Vq["4"],";",n&&(0,d/* .css */.AH)(g(),c/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,d/* .css */.AH)(m(),c/* .colorTokens.brand.blue */.I6.brand.blue,c/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,d/* .css */.AH)(b(),c/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",c/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const w=_},12427:function(e,t,r){r.d(t,{A:()=>y});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var o=r(42771);/* import */var i=r(12470);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(18853);/* import */var d=/*#__PURE__*/r.n(s);/* import */var c=r(25074);/* import */var u=r(46225);/* import */var f=r(13448);/* import */var p=r(81547);/* import */var v=r(59189);/* import */var h=r(56705);function g(){var e=(0,n._)(["\n      width: 168px;\n    "]);g=function t(){return e};return e}function m(){var e=(0,n._)(["\n      width: 168px;\n    "]);m=function t(){return e};return e}var b={large:"regular",regular:"small",small:"small"};var _=e=>{var{buttonText:t=(0,i.__)("Upload Media","tutor"),infoText:r,size:n="regular",value:l,uploadHandler:s,clearHandler:d,emptyImageCss:p,previewImageCss:g,overlayCss:m,replaceButtonText:_,loading:y,disabled:x=false,isClearAble:A=true}=e;return/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:!y,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:w.emptyMedia({size:n,isDisabled:x}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(h/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:l===null||l===void 0?void 0:l.url,fallback:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{"aria-disabled":x,css:[w.emptyMedia({size:n,isDisabled:x}),p],onClick:e=>{e.stopPropagation();if(x){return}s()},onKeyDown:e=>{if(!x&&e.key==="Enter"){e.preventDefault();s()}},children:[/*#__PURE__*/(0,a/* .jsx */.Y)(u/* ["default"] */.A,{name:"addImage",width:32,height:32}),/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,size:b[n],variant:"secondary",buttonContentCss:w.buttonText,"data-cy":"upload-media",children:t}),/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:w.infoTexts,children:r})})]}),children:e=>{return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.previewWrapper({size:n,isDisabled:x}),g],"data-cy":"media-preview",children:[/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:e,alt:l===null||l===void 0?void 0:l.title,css:w.imagePreview}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.hoverPreview,m],"data-hover-buttons-wrapper":true,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,variant:"secondary",size:b[n],buttonCss:/*#__PURE__*/(0,o/* .css */.AH)("margin-top:",A&&f/* .spacing["16"] */.YK["16"],";"),onClick:e=>{e.stopPropagation();s()},"data-cy":"replace-media",children:_||(0,i.__)("Replace Image","tutor")}),/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:A,children:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,variant:"text",size:b[n],onClick:e=>{e.stopPropagation();d()},"data-cy":"clear-media",children:(0,i.__)("Remove","tutor")})})]})]})}})})};/* export default */const y=_;var w={emptyMedia:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:168px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",f/* .spacing["8"] */.YK["8"],";border:1px dashed ",f/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",f/* .borderRadius["8"] */.Vq["8"],";background-color:",f/* .colorTokens.bg.white */.I6.bg.white,";overflow:hidden;cursor:",r?"not-allowed":"pointer",";",t==="small"&&(0,o/* .css */.AH)(g()),"    svg{color:",f/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover svg{color:",!r&&f/* .colorTokens.brand.blue */.I6.brand.blue,";}")},buttonText:/*#__PURE__*/(0,o/* .css */.AH)("color:",f/* .colorTokens.text.brand */.I6.text.brand,";"),infoTexts:/*#__PURE__*/(0,o/* .css */.AH)(p/* .typography.tiny */.I.tiny(),";color:",f/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;"),previewWrapper:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,o/* .css */.AH)("width:100%;height:168px;border:1px solid ",f/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",f/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;position:relative;background-color:",f/* .colorTokens.bg.white */.I6.bg.white,";",t==="small"&&(0,o/* .css */.AH)(m()),"    &:hover{[data-hover-buttons-wrapper]{display:",r?"none":"flex",";opacity:",r?0:1,";}}")},imagePreview:/*#__PURE__*/(0,o/* .css */.AH)("height:100%;width:100%;object-fit:contain;"),hoverPreview:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",f/* .spacing["8"] */.YK["8"],";opacity:0;position:absolute;inset:0;background-color:",d()(f/* .colorTokens.color.black.main */.I6.color.black.main,.6),";button:first-of-type{box-shadow:",f/* .shadow.button */.r7.button,";}button:last-of-type:not(:only-of-type){color:",f/* .colorTokens.text.white */.I6.text.white,";box-shadow:none;}")}},84492:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var o=r(42771);/* import */var i=r(13448);/* import */var l=r(59189);/* import */var s=r(49842);/* import */var d=r(46225);function c(){var e=(0,n._)(["\n      height: ",";\n      display: inline-flex;\n      border-radius: ",";\n      align-items: center;\n      gap: ",";\n      overflow: hidden;\n      background: linear-gradient(88.9deg, #d65702 6.26%, #e5803c 91.4%);\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n        padding: 0;\n        padding-inline: ",";\n        margin: 0;\n      "]);u=function t(){return e};return e}function f(){var e=(0,n._)(["\n      display: inline-flex;\n      position: static;\n      transform: none;\n      padding: ",";\n      color: ",";\n      margin-right: ",";\n      font-size: ",";\n      line-height: ",";\n\n      ","\n    "]);f=function t(){return e};return e}function p(){var e=(0,n._)(["\n      position: static;\n      transform: none;\n      display: inline-flex;\n    "]);p=function t(){return e};return e}var v=e=>{var{children:t,content:r,size:n="regular",textOnly:o}=e;var i=(0,s/* .isDefined */.O9)(t);var c=!i&&!(0,s/* .isDefined */.O9)(r);var u=/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:i?n==="tiny"?g[n].iconSize:16:g[n].iconSize,height:i?undefined:g[n].iconSize});return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:m.wrapper({hasChildren:i,iconOnly:c,size:n}),children:[t,/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{when:!i&&!o&&!c,children:u}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:m.content({hasChildren:i,iconOnly:c,size:n,textOnly:o}),children:i||c?u:r})]})};/* export default */const h=v;var g={tiny:{borderRadius:i/* .spacing["10"] */.YK["10"],height:i/* .spacing["10"] */.YK["10"],gap:i/* .spacing["2"] */.YK["2"],iconSize:10,fontSize:"0.5rem",lineHeight:"0.625rem"},small:{borderRadius:i/* .spacing["16"] */.YK["16"],height:i/* .spacing["16"] */.YK["16"],gap:i/* .spacing["4"] */.YK["4"],iconSize:16,fontSize:i/* .fontSize["10"] */.J["10"],lineHeight:i/* .lineHeight["16"] */.K_["16"]},regular:{borderRadius:"22px",height:"22px",gap:"5px",iconSize:22,fontSize:i/* .fontSize["14"] */.J["14"],lineHeight:i/* .lineHeight["18"] */.K_["18"]},large:{borderRadius:"26px",height:"26px",gap:i/* .spacing["6"] */.YK["6"],iconSize:26,fontSize:i/* .fontSize["16"] */.J["16"],lineHeight:i/* .lineHeight["26"] */.K_["26"]}};var m={wrapper:e=>{var{hasChildren:t,iconOnly:r,size:n="regular"}=e;return/*#__PURE__*/(0,o/* .css */.AH)("position:relative;svg{flex-shrink:0;}",!t&&!r&&(0,o/* .css */.AH)(c(),g[n].height,g[n].borderRadius,g[n].gap))},content:e=>{var{hasChildren:t,iconOnly:r,size:n="regular",textOnly:a}=e;return/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;top:0;right:0;display:flex;flex-shrink:0;transform:translateX(50%) translateY(-50%);",!t&&!r&&(0,o/* .css */.AH)(f(),i/* .spacing["2"] */.YK["2"],i/* .colorTokens.icon.white */.I6.icon.white,g[n].gap,g[n].fontSize,g[n].lineHeight,a&&(0,o/* .css */.AH)(u(),i/* .spacing["6"] */.YK["6"]))," ",r&&(0,o/* .css */.AH)(p()))}}},19897:function(e,t,r){r.d(t,{A:()=>g});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var o=r(41594);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(42771);/* import */var s=r(13448);/* import */var d=r(81547);/* import */var c=r(52874);/* import */var u=r(33231);function f(){var e=(0,n._)(["\n      color: ",";\n    "]);f=function t(){return e};return e}function p(){var e=(0,n._)(["\n        margin-right: ",";\n      "]);p=function t(){return e};return e}var v=/*#__PURE__*/i().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:o,disabled:i=false,labelCss:l,label:s,icon:d,value:c,onChange:f,onBlur:p,description:v}=e;var g=(0,u/* .nanoid */.Ak)();return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:h.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("label",{htmlFor:g,css:[h.container(i),l],children:[/*#__PURE__*/(0,a/* .jsx */.Y)("input",{ref:t,id:g,name:r,type:"radio",checked:n,readOnly:o,value:c,disabled:i,onChange:f,onBlur:p,css:[h.radio(s)]}),/*#__PURE__*/(0,a/* .jsx */.Y)("span",{}),d,s]}),v&&/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:h.description,children:v})]})});var h={wrapper:/*#__PURE__*/(0,l/* .css */.AH)(c/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",s/* .spacing["8"] */.YK["8"],";"),container:e=>/*#__PURE__*/(0,l/* .css */.AH)(d/* .typography.caption */.I.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,l/* .css */.AH)(f(),s/* .colorTokens.text.disable */.I6.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,l/* .css */.AH)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",s/* .colorTokens.background.white */.I6.background.white,";border:2px solid ",s/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:100%;",e&&(0,l/* .css */.AH)(p(),s/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",s/* .colorTokens.background.white */.I6.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",s/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:checked + span::before{background-color:",s/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",s/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,l/* .css */.AH)(d/* .typography.small */.I.small(),";color:",s/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;")};/* export default */const g=v},94361:function(e,t,r){r.d(t,{w:()=>d});/* import */var n=r(52639);/* import */var a=r(41594);/* import */var o=/*#__PURE__*/r.n(a);/* import */var i=r(42771);/* import */var l=r(13448);/* import */var s=r(78931);var d=/*#__PURE__*/o().forwardRef((e,t)=>{var{className:r,variant:a}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{className:r,ref:t,css:u({variant:a})})});d.displayName="Separator";var c={horizontal:/*#__PURE__*/(0,i/* .css */.AH)("height:1px;width:100%;"),vertical:/*#__PURE__*/(0,i/* .css */.AH)("height:100%;width:1px;"),base:/*#__PURE__*/(0,i/* .css */.AH)("flex-shrink:0;background-color:",l/* .colorTokens.stroke.divider */.I6.stroke.divider,";")};var u=(0,s/* .createVariation */.s)({variants:{variant:{horizontal:c.horizontal,vertical:c.vertical}},defaultVariants:{variant:"horizontal"}},c.base)},54184:function(e,t,r){r.d(t,{A:()=>x});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(60599);/* import */var i=r(52639);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);/* import */var d=r(42771);/* import */var c=r(74412);/* import */var u=r(19393);/* import */var f=r(13448);/* import */var p=r(52874);/* import */var v=r(33231);function h(){var e=(0,o._)(["\n        ","\n      "]);h=function t(){return e};return e}function g(){var e=(0,o._)(["\n        border-top-right-radius: ",";\n      "]);g=function t(){return e};return e}function m(){var e=(0,o._)(["\n          ","\n        "]);m=function t(){return e};return e}function b(){var e=(0,o._)(["\n      .mce-tinymce.mce-container {\n        border: ",";\n        border-radius: ",";\n\n        ","\n      }\n    "]);b=function t(){return e};return e}var _=!!c/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;// Without getDefaultSettings function editor does not initiate
if(!window.wp.editor.getDefaultSettings){window.wp.editor.getDefaultSettings=()=>({})}function y(e,t,r,n,a,o,i,l,s,d,u,f,p){var v=f!==null&&f!==void 0?f:n?"bold italic underline | image | ".concat(_?"codesample":""):"formatselect bold italic underline | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more ".concat(_?" codesample":""," | wp_adv");var h=p!==null&&p!==void 0?p:"strikethrough hr | forecolor pastetext removeformat | charmap | outdent indent | undo redo | wp_help | fullscreen";v=u?v:v.replaceAll(" | "," ");return{tinymce:{wpautop:true,menubar:false,autoresize_min_height:s||200,autoresize_max_height:d||500,wp_autoresize_on:true,browser_spellcheck:!l,convert_urls:false,end_container_on_empty_block:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",fix_list_elements:true,indent:false,relative_urls:0,remove_script_host:0,plugins:"charmap,colorpicker,hr,lists,image,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview".concat(_?",codesample":""),skin:"light",skin_url:"".concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light"),submit_patch:true,link_context_toolbar:false,theme:"modern",toolbar:!l,toolbar1:v,toolbar2:n?false:h,content_css:"".concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-includes/css/dashicons.min.css,").concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-includes/js/tinymce/skins/wordpress/wp-content.css,").concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light/content.min.css"),statusbar:!l,branding:false,// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:n=>{n.on("init",()=>{if(e&&!l){n.getBody().focus()}if(l){n.setMode("readonly");var t=n.contentDocument.querySelector(".mce-content-body");t.style.backgroundColor="transparent";setTimeout(()=>{var e=t.scrollHeight;if(e){n.iframeElement.style.height="".concat(e,"px")}},500)}});n.on("change keyup paste",()=>{t(n.getContent())});n.on("focus",()=>{r(true)});n.on("blur",()=>r(false));n.on("FullscreenStateChanged",e=>{var t=document.getElementById("tutor-course-builder");var r=document.getElementById("tutor-course-bundle-builder-root");var n=t||r;if(n){if(e.state){n.style.position="relative";n.style.zIndex="100000"}else{n.removeAttribute("style")}}i===null||i===void 0?void 0:i(e.state)})},wp_keep_scroll_position:false,wpeditimage_html5_captions:true},mediaButtons:!a&&!n&&!l,drag_drop_upload:true,quicktags:o||n||l?false:{buttons:["strong","em","block","del","ins","img","ul","ol","li","code","more","close"]}}}var w=e=>{var{value:t="",onChange:r,isMinimal:o,hideMediaButtons:s,hideQuickTags:d,autoFocus:c=false,onFullScreenChange:f,readonly:p=false,min_height:h,max_height:g,toolbar1:m,toolbar2:b}=e;var _=(0,l.useRef)(null);var{current:w}=(0,l.useRef)((0,v/* .nanoid */.Ak)());var[x,Y]=(0,l.useState)(c);var k=e=>{var t=e.target;r(t.value)};var I=(0,l.useCallback)(e=>{var{tinymce:t}=window;if(!t||x){return}var r=window.tinymce.get(w);if(r){if(e!==r.getContent()){r.setContent(e)}}},[w,x]);(0,l.useEffect)(()=>{I(t);// eslint-disable-next-line react-hooks/exhaustive-deps
},[t]);(0,l.useEffect)(()=>{var e=_.current;if(typeof window.wp!=="undefined"&&window.wp.editor){var i=y(x,r,Y,o,s,d,f,p,h,g,u/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile,m,b);// When rendered inside an iframe (e.g., via createPortal),
// wp.editor.initialize() fails because it uses document.getElementById()
// which only searches the parent document. Additionally, standard TinyMCE
// mode creates a content iframe internally using parent document DOM APIs,
// causing editor.getBody() to return undefined in cross-document contexts.
// Using inline mode with the `target` option avoids both issues:
// TinyMCE renders directly into the target element without a content iframe.
var l=e&&e.ownerDocument!==document;if(l){var c,v;var A=window.tinymce.get(w);if(A){A.remove()}// TinyMCE inline mode requires a block-level element (not textarea).
// Create a div in the iframe's document to serve as the inline editor target.
var I=e.ownerDocument;var D=I.createElement("div");D.id=w;D.innerHTML=t;// Hide textarea and transfer its id to the div (TinyMCE uses element id for registration)
e.removeAttribute("id");e.style.display="none";(c=e.parentNode)===null||c===void 0?void 0:c.insertBefore(D,e.nextSibling);// Filter out plugins that require TinyMCE's content iframe (unavailable in inline mode)
var C=["wpautoresize","fullscreen","tabfocus"];var S=(v=i.tinymce.plugins)===null||v===void 0?void 0:v.split(",").map(e=>e.trim()).filter(e=>!C.includes(e)).join(",");window.tinymce.init((0,a._)((0,n._)({},i.tinymce),{target:D,inline:true,plugins:S,// Simplified setup: inline mode has no iframeElement or contentDocument
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:e=>{e.on("init",()=>{if(p){e.setMode("readonly")}var t=e.getBody();if(t){t.style.backgroundColor="transparent"}if(x&&!p){t===null||t===void 0?void 0:t.focus()}});e.on("change keyup paste",()=>{r(e.getContent())});e.on("focus",()=>Y(true));e.on("blur",()=>Y(false))}}));return()=>{var t=window.tinymce.get(w);if(t){t.remove()}D.remove();// Restore textarea
if(e){e.id=w;e.style.display=""}}}window.wp.editor.remove(w);window.wp.editor.initialize(w,i);e===null||e===void 0?void 0:e.addEventListener("change",k);e===null||e===void 0?void 0:e.addEventListener("input",k);return()=>{window.wp.editor.remove(w);e===null||e===void 0?void 0:e.removeEventListener("change",k);e===null||e===void 0?void 0:e.removeEventListener("input",k)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[p]);return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:A.wrapper({hideQuickTags:d,isMinimal:o,isFocused:x,isReadOnly:p}),children:/*#__PURE__*/(0,i/* .jsx */.Y)("textarea",{"data-cy":"tutor-tinymce",ref:_,id:w,defaultValue:t})})};/* export default */const x=w;var A={wrapper:e=>{var{hideQuickTags:t,isMinimal:r,isFocused:n,isReadOnly:a}=e;return/*#__PURE__*/(0,d/* .css */.AH)("flex:1;.wp-editor-tools{z-index:auto;}.wp-editor-container{border-top-left-radius:",f/* .borderRadius["6"] */.Vq["6"],";border-bottom-left-radius:",f/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",f/* .borderRadius["6"] */.Vq["6"],";",n&&!a&&(0,d/* .css */.AH)(h(),p/* .styleUtils.inputFocus */.x.inputFocus),":focus-within{",!a&&p/* .styleUtils.inputFocus */.x.inputFocus,"}}.wp-switch-editor{height:auto;border:1px solid #dcdcde;border-radius:0px;border-top-left-radius:",f/* .borderRadius["4"] */.Vq["4"],";border-top-right-radius:",f/* .borderRadius["4"] */.Vq["4"],";top:2px;padding:3px 8px 4px;font-size:13px;color:#646970;&:focus,&:active,&:hover{background:#f0f0f1;color:#646970;}}.mce-btn button{&:focus,&:active,&:hover{background:none;color:#50575e;}}.mce-toolbar-grp,.quicktags-toolbar{border-top-left-radius:",f/* .borderRadius["6"] */.Vq["6"],";",(t||r)&&(0,d/* .css */.AH)(g(),f/* .borderRadius["6"] */.Vq["6"]),"}.mce-top-part::before{display:none;}.mce-statusbar{border-bottom-left-radius:",f/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",f/* .borderRadius["6"] */.Vq["6"],";}.mce-tinymce{box-shadow:none;background-color:transparent;}.mce-edit-area{background-color:unset;}",(t||r)&&(0,d/* .css */.AH)(b(),!a?"1px solid ".concat(f/* .colorTokens.stroke["default"] */.I6.stroke["default"]):"none",f/* .borderRadius["6"] */.Vq["6"],n&&!a&&(0,d/* .css */.AH)(m(),p/* .styleUtils.inputFocus */.x.inputFocus)),"    textarea{visibility:visible !important;width:100%;resize:none;border:none;outline:none;padding:",f/* .spacing["10"] */.YK["10"],";}")}}},95377:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(17900);/* import */var i=r(52639);/* import */var l=r(42771);/* import */var s=r(81253);/* import */var d=r(46225);/* import */var c=r(90453);/* import */var u=r(13448);/* import */var f=r(81547);/* import */var p=r(42263);var v=e=>{var{field:t,fieldState:r,disabled:l,value:u,onChange:f,label:v,description:h,helpText:m,isHidden:b,labelCss:_}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{field:t,fieldState:r,isHidden:b,children:e=>{var{css:r}=e,p=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:g.wrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,(0,a._)((0,n._)({},t,p),{inputCss:r,labelCss:_,value:u,disabled:l,checked:t.value,label:v,onChange:()=>{t.onChange(!t.value);if(f){f(!t.value)}}})),m&&/*#__PURE__*/(0,i/* .jsx */.Y)(c/* ["default"] */.A,{content:m,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* ["default"] */.A,{name:"info",width:20,height:20})})]}),h&&/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:g.description,children:h})]})}})};/* export default */const h=v;var g={wrapper:/*#__PURE__*/(0,l/* .css */.AH)("display:flex;align-items:center;gap:",u/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,l/* .css */.AH)(f/* .typography.small */.I.small(),"    color:",u/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",u/* .spacing["6"] */.YK["6"],";")}},26036:function(e,t,r){r.d(t,{A:()=>C});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(17900);/* import */var i=r(52639);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);/* import */var d=r(94906);/* import */var c=r(42771);/* import */var u=r(12470);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(76845);/* import */var v=r(1896);/* import */var h=r(25074);/* import */var g=r(46225);/* import */var m=r(19393);/* import */var b=r(13448);/* import */var _=r(81547);/* import */var y=r(84206);/* import */var w=r(87752);/* import */var x=r(52874);/* import */var A=r(42263);/* import */var Y=r(30779);// Create DayPicker formatters based on WordPress locale
var k=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var I=e=>{if(!e)return undefined;return(0,p/* .isValid */.f)(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var D=e=>{var{label:t,field:r,fieldState:s,disabled:c,disabledBefore:f,disabledAfter:p,loading:b,placeholder:_,helpText:Y,isClearable:D=true,onChange:C,dateFormat:M=m/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var E=(0,w/* .usePrefersReducedMotion */.j)();var T=(0,l.useRef)(null);var[H,F]=(0,l.useState)(false);var K=I(r.value);var N=typeof window!=="undefined"&&window.wp&&window.wp.date;var O=K?N?window.wp.date.format("F j, Y",K):(0,v/* .format */.GP)(K,M):"";var{triggerRef:P,position:L,popoverRef:R}=(0,y/* .usePortalPopover */.tP)({isOpen:H,placement:y/* .POPOVER_PLACEMENTS.BOTTOM_LEFT */.zA.BOTTOM_LEFT});var W=()=>{var e;F(false);(e=T.current)===null||e===void 0?void 0:e.focus()};var B=I(f);var z=I(p);return/*#__PURE__*/(0,i/* .jsx */.Y)(A/* ["default"] */.A,{label:t,field:r,fieldState:s,disabled:c,loading:b,placeholder:_,helpText:Y,children:e=>{var{css:t}=e,l=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:S.wrapper,ref:P,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,a._)((0,n._)({},l),{css:[t,S.input],title:O,ref:e=>{r.ref(e);// @ts-ignore
T.current=e},type:"text",value:O,onClick:e=>{e.stopPropagation();F(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();F(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:S.icon}),D&&r.value&&/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,u.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:x/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(y/* .Portal */.ZL,{isOpen:H,onClickOutside:W,onEscape:W,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:S.pickerWrapper,style:{left:L.left,top:L.top},ref:R,children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .DayPicker */.h,{dir:m/* .isRTL */.V8?"rtl":"ltr",animate:!E,mode:"single",formatters:k(),disabled:[!!B&&{before:B},!!z&&{after:z}],selected:K,onSelect:e=>{if(e){var t=(0,v/* .format */.GP)(e,m/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);W();if(C){C(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:K||new Date,startMonth:B||new Date(new Date().getFullYear()-10,0),endMonth:z||new Date(new Date().getFullYear()+10,11),weekStartsOn:N?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const C=D;var S={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,c/* .css */.AH)("&[data-input]{padding-left:",b/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:50%;left:",b/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",b/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body("regular"),";position:absolute;background-color:",b/* .colorTokens.background.white */.I6.background.white,";box-shadow:",b/* .shadow.popover */.r7.popover,";border-radius:",b/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",b/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",b/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",b/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",b/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",b/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",b/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",b/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",b/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",b/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",b/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",b/* .colorTokens.text.white */.I6.text.white,";background-color:",b/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",b/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",b/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",b/* .borderRadius.circle */.Vq.circle,";font-weight:",b/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")}},46062:function(e,t,r){r.d(t,{A:()=>A});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var o=r(42771);/* import */var i=r(12470);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(25074);/* import */var d=r(46225);/* import */var c=r(42263);/* import */var u=r(13448);/* import */var f=r(81547);/* import */var p=r(3013);/* import */var v=r(59189);/* import */var h=r(57587);/* import */var g=r(75532);/* import */var m=r(52874);function b(){var e=(0,n._)(["\n      background-color: ",";\n      padding: "," 0 "," ",";\n      border: 1px solid ",";\n      border-radius: ",";\n      gap: ",";\n    "]);b=function t(){return e};return e}function _(){var e=(0,n._)(["\n      margin-right: ",";\n    "]);_=function t(){return e};return e}var y={iso:["iso"],dwg:["dwg"],pdf:["pdf"],doc:["doc","docx"],csv:["csv"],xls:["xls","xlsx"],ppt:["ppt","pptx"],zip:["zip"],archive:["rar","7z","tar","gz"],txt:["txt"],rtf:["rtf"],text:["log"],jpg:["jpg"],png:["png"],image:["jpeg","gif","webp","avif"],mp3:["mp3"],fla:["fla"],audio:["ogg","wav","wma"],mp4:["mp4"],avi:["avi"],ai:["ai"],videoFile:["mkv","mpeg","flv","mov","wmv"],svg:["svg"],css:["css"],javascript:["js"],xml:["xml"],html:["html"],exe:["exe"],psd:["psd"],jsonFile:["json"],dbf:["dbf"]};var w=e=>{for(var[t,r]of Object.entries(y)){if(r.includes(e)){return t}}return"file"};var x=e=>{var{field:t,fieldState:r,label:n,helpText:o,buttonText:l=(0,i.__)("Upload Media","tutor"),selectMultiple:u=false,onChange:f,maxFileSize:h,maxFiles:b}=e;var _=t.value;var{openMediaLibrary:y,resetFiles:x}=(0,g/* ["default"] */.A)({options:{multiple:u,maxFiles:b,maxFileSize:h},onChange:e=>{t.onChange(e);if(f){f(e)}},initialFiles:_?Array.isArray(_)?_:[_]:[]});var A=()=>{y()};var k=e=>{x();if(u){var r=(Array.isArray(_)?_:_?[_]:[]).filter(t=>t.id!==e);t.onChange(r.length>0?r:null);if(f){f(r.length>0?r:null)}}else{t.onChange(null);if(f){f(null)}}};return/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{label:n,field:t,fieldState:r,helpText:o,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.Y)(v/* ["default"] */.A,{when:_,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)(s/* ["default"] */.A,{buttonCss:Y.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{name:"attach",height:24,width:24}),variant:"secondary",onClick:A,children:l}),children:e=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.wrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.attachmentsWrapper,children:/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{each:Array.isArray(e)?e:[e],children:e=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardWrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCard,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{style:Y.fileIcon,name:w(e.ext||"file"),height:40,width:40}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardBody,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardTitle,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{title:e.title,css:m/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),children:e.title}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.fileExtension,children:".".concat(e.ext)})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.attachmentCardSubtitle,children:/*#__PURE__*/(0,a/* .jsx */.Y)("span",{children:"".concat((0,i.__)("Size","tutor"),": ").concat(e.size)})})]})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("button",{type:"button",css:Y.removeButton,onClick:()=>{k(e.id)},children:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{name:"cross",height:24,width:24})})]},e.id)})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.uploadButtonWrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(s/* ["default"] */.A,{buttonCss:Y.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{name:"attach",height:24,width:24}),variant:"secondary",onClick:A,"data-cy":"upload-media",children:l})})]})})}})};/* export default */const A=(0,h/* .withVisibilityControl */.M)(x);var Y={wrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("display:flex;flex-direction:column;position:relative;",t&&(0,o/* .css */.AH)(b(),u/* .colorTokens.background.white */.I6.background.white,u/* .spacing["16"] */.YK["16"],u/* .spacing["16"] */.YK["16"],u/* .spacing["16"] */.YK["16"],u/* .colorTokens.stroke["default"] */.I6.stroke["default"],u/* .borderRadius.card */.Vq.card,u/* .spacing["8"] */.YK["8"]))},attachmentsWrapper:/*#__PURE__*/(0,o/* .css */.AH)("max-height:260px;padding-right:",u/* .spacing["16"] */.YK["16"],";",m/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),attachmentCardWrapper:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;gap:",u/* .spacing["20"] */.YK["20"],";padding:",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["12"] */.YK["12"]," ",u/* .spacing["4"] */.YK["4"]," 0;border-radius:",u/* .borderRadius["6"] */.Vq["6"],";button{opacity:0;}&:hover,&:focus-within{background:",u/* .colorTokens.background.hover */.I6.background.hover,";button{opacity:1;}}",u/* .Breakpoint.smallTablet */.EA.smallTablet,"{button{opacity:1;}}"),attachmentCard:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.YK["8"],";overflow:hidden;"),attachmentCardBody:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",u/* .spacing["4"] */.YK["4"],";"),attachmentCardTitle:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.display.flex */.x.display.flex(),";",f/* .typography.caption */.I.caption("medium"),"    word-break:break-all;"),fileExtension:/*#__PURE__*/(0,o/* .css */.AH)("flex-shrink:0;"),attachmentCardSubtitle:/*#__PURE__*/(0,o/* .css */.AH)(f/* .typography.tiny */.I.tiny("regular")," ",m/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.YK["8"],";color:",u/* .colorTokens.text.hints */.I6.text.hints,";svg{color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),uploadButtonWrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)(t&&(0,o/* .css */.AH)(_(),u/* .spacing["16"] */.YK["16"]))},uploadButton:/*#__PURE__*/(0,o/* .css */.AH)("width:100%;"),fileIcon:/*#__PURE__*/(0,o/* .css */.AH)("flex-shrink:0;color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";"),removeButton:/*#__PURE__*/(0,o/* .css */.AH)(m/* .styleUtils.crossButton */.x.crossButton,";background:none;transition:none;flex-shrink:0;")}},75031:function(e,t,r){r.d(t,{A:()=>x});/* import */var n=r(52639);/* import */var a=r(12470);/* import */var o=/*#__PURE__*/r.n(a);/* import */var i=r(12427);/* import */var l=r(46225);/* import */var s=r(76023);/* import */var d=r(17944);/* import */var c=r(19448);/* import */var u=r(3311);/* import */var f=r(74412);/* import */var p=r(57587);/* import */var v=r(75532);/* import */var h=r(34837);/* import */var g=r(67290);/* import */var m=r(42263);var b;var _=!!f/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var y=(b=f/* .tutorConfig.settings */.P.settings)===null||b===void 0?void 0:b.chatgpt_key_exist;var w=e=>{var{field:t,fieldState:r,label:o,size:f,helpText:p,buttonText:b=(0,a.__)("Upload Media","tutor"),infoText:w,onChange:x,generateWithAi:A=false,previewImageCss:Y,loading:k,onClickAiButton:I}=e;var{showModal:D}=(0,d/* .useModal */.h)();var{openMediaLibrary:C,resetFiles:S}=(0,v/* ["default"] */.A)({options:{type:"image",multiple:false},onChange:e=>{if(e&&!Array.isArray(e)){var{id:r,url:n,title:a}=e;t.onChange({id:r,url:n,title:a});if(x){x({id:r,url:n,title:a})}}},initialFiles:t.value});var M;var E=(M=t.value)!==null&&M!==void 0?M:null;var T=()=>{C()};var H=()=>{S();t.onChange(null);if(x){x(null)}};var F=()=>{if(!_){D({component:c/* ["default"] */.A,props:{image:h,image2x:g}})}else if(!y){D({component:u/* ["default"] */.A,props:{image:h,image2x:g}})}else{D({component:s/* ["default"] */.A,isMagicAi:true,props:{title:(0,a.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,n/* .jsx */.Y)(l/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),field:t,fieldState:r}});I===null||I===void 0?void 0:I()}};return/*#__PURE__*/(0,n/* .jsx */.Y)(m/* ["default"] */.A,{label:o,field:t,fieldState:r,helpText:p,onClickAiButton:F,generateWithAi:A,children:()=>{return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,n/* .jsx */.Y)(i/* ["default"] */.A,{size:f,value:E,uploadHandler:T,clearHandler:H,buttonText:b,infoText:w,previewImageCss:Y,loading:k})})}})};/* export default */const x=(0,p/* .withVisibilityControl */.M)(w)},89665:function(e,t,r){r.d(t,{A:()=>p});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var o=r(42771);/* import */var i=r(13448);/* import */var l=r(81547);/* import */var s=r(52874);/* import */var d=r(42263);function c(){var e=(0,n._)(["\n        img {\n          border-color: ",";\n        }\n      "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n        outline-color: ",";\n      "]);u=function t(){return e};return e}var f=e=>{var{field:t,fieldState:r,label:n,options:o=[],disabled:i}=e;return/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{field:t,fieldState:r,label:n,disabled:i,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:v.wrapper,children:o.map((e,r)=>/*#__PURE__*/(0,a/* .jsxs */.FD)("button",{type:"button",css:v.item(t.value===e.value),onClick:()=>{t.onChange(e.value)},disabled:i,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:e.image,alt:e.label,width:64,height:64}),/*#__PURE__*/(0,a/* .jsx */.Y)("p",{children:e.label})]},r))})}})};/* export default */const p=f;var v={wrapper:/*#__PURE__*/(0,o/* .css */.AH)("display:grid;grid-template-columns:repeat(4,minmax(64px,1fr));gap:",i/* .spacing["12"] */.YK["12"],";margin-top:",i/* .spacing["4"] */.YK["4"],";"),item:e=>/*#__PURE__*/(0,o/* .css */.AH)(s/* .styleUtils.resetButton */.x.resetButton,";display:flex;flex-direction:column;gap:",i/* .spacing["4"] */.YK["4"],";align-items:center;width:100%;cursor:pointer;input{appearance:none;}p{",l/* .typography.small */.I.small(),";width:100%;",s/* .styleUtils.textEllipsis */.x.textEllipsis,";color:",i/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;}&:hover,&:focus-visible{",!e&&(0,o/* .css */.AH)(c(),i/* .colorTokens.stroke.hover */.I6.stroke.hover),"}img{border-radius:",i/* .borderRadius["6"] */.Vq["6"],";border:2px solid ",i/* .colorTokens.stroke.border */.I6.stroke.border,";outline:2px solid transparent;outline-offset:2px;transition:border-color 0.3s ease;",e&&(0,o/* .css */.AH)(u(),i/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi),"}")}},6977:function(e,t,r){r.d(t,{A:()=>E});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(17900);/* import */var i=r(60599);/* import */var l=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var c=r(42771);/* import */var u=r(13448);/* import */var f=r(81547);/* import */var p=r(57587);/* import */var v=r(52874);/* import */var h=r(42263);function g(){var e=(0,i._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);g=function t(){return e};return e}function m(){var e=(0,i._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);m=function t(){return e};return e}function b(){var e=(0,i._)(["\n        border-color: ",";\n      "]);b=function t(){return e};return e}function _(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);_=function t(){return e};return e}function y(){var e=(0,i._)(["\n            padding-",": ",";\n          "]);y=function t(){return e};return e}function w(){var e=(0,i._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n            padding-",": ",";\n          "]);x=function t(){return e};return e}function A(){var e=(0,i._)(["\n          font-size: ",";\n          height: 32px;\n          ",";\n        "]);A=function t(){return e};return e}function Y(){var e=(0,i._)(["\n      ","\n    "]);Y=function t(){return e};return e}function k(){var e=(0,i._)(["\n      min-width: 32px;\n      height: 32px;\n      padding-inline: ",";\n    "]);k=function t(){return e};return e}function I(){var e=(0,i._)(["\n      border-right: 1px solid ",";\n    "]);I=function t(){return e};return e}function D(){var e=(0,i._)(["\n      ","\n    "]);D=function t(){return e};return e}function C(){var e=(0,i._)(["\n      height: 32px;\n      min-width: 32px;\n      padding-inline: ",";\n    "]);C=function t(){return e};return e}function S(){var e=(0,i._)(["\n      border-left: 1px solid ",";\n    "]);S=function t(){return e};return e}var M=e=>{var{label:t,content:r,contentPosition:i="left",showVerticalBar:d=true,size:c="regular",type:u="text",field:f,fieldState:p,disabled:v,readOnly:g,loading:m,placeholder:b,helpText:_,onChange:y,onKeyDown:w,isHidden:x,wrapperCss:A,contentCss:Y,removeBorder:k=false,selectOnFocus:I=false,isInlineLabel:D=false}=e;var C=(0,s.useRef)(null);return/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{label:t,field:f,fieldState:p,disabled:v,readOnly:g,loading:m,placeholder:b,helpText:_,isHidden:x,removeBorder:k,isInlineLabel:D,children:e=>{var{css:t}=e,s=(0,o._)(e,["css"]);var v;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[T.inputWrapper(!!p.error,k),A],children:[i==="left"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[T.inputLeftContent(d,c),Y],children:r}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,a._)((0,n._)({},f,s),{type:"text",value:(v=f.value)!==null&&v!==void 0?v:"",onChange:e=>{var t=u==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;f.onChange(t);if(y){y(t)}},onKeyDown:e=>w===null||w===void 0?void 0:w(e.key),css:[t,T.input(i,d,c)],autoComplete:"off",ref:e=>{f.ref(e);// @ts-ignore
C.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!I||!C.current){return}C.current.select()},"data-input":true})),i==="right"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[T.inputRightContent(d,c),Y],children:r})]})}})};/* export default */const E=(0,p/* .withVisibilityControl */.M)(M);var T={inputWrapper:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;",!t&&(0,c/* .css */.AH)(g(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"],u/* .borderRadius["6"] */.Vq["6"],u/* .shadow.input */.r7.input,u/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,c/* .css */.AH)(m(),u/* .colorTokens.stroke.danger */.I6.stroke.danger,u/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",v/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,c/* .css */.AH)(b(),u/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field:not(textarea){",f/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,c/* .css */.AH)(_(),e,u/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,c/* .css */.AH)(w(),u/* .fontSize["24"] */.J["24"],u/* .fontWeight.medium */.Wy.medium,t&&(0,c/* .css */.AH)(y(),e,u/* .spacing["12"] */.YK["12"]))," ",r==="small"&&(0,c/* .css */.AH)(A(),u/* .fontSize["16"] */.J["16"],t&&(0,c/* .css */.AH)(x(),e,u/* .spacing["4"] */.YK["4"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(f/* .typography.small */.I.small()," ",v/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",u/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(Y(),f/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(k(),u/* .spacing["4"] */.YK["4"])," ",e&&(0,c/* .css */.AH)(I(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(f/* .typography.small */.I.small()," ",v/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",u/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(D(),f/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(C(),u/* .spacing["4"] */.YK["4"])," ",e&&(0,c/* .css */.AH)(S(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"]))}},15402:function(e,t,r){r.d(t,{A:()=>N});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(17900);/* import */var i=r(60599);/* import */var l=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var c=r(42771);/* import */var u=r(46225);/* import */var f=r(13448);/* import */var p=r(81547);/* import */var v=r(59189);/* import */var h=r(31569);/* import */var g=r(21678);/* import */var m=r(52874);/* import */var b=r(42263);function _(){var e=(0,i._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);_=function t(){return e};return e}function y(){var e=(0,i._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);y=function t(){return e};return e}function w(){var e=(0,i._)(["\n        border-color: ",";\n      "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);x=function t(){return e};return e}function A(){var e=(0,i._)(["\n              padding-",": ",";\n            "]);A=function t(){return e};return e}function Y(){var e=(0,i._)(["\n        font-size: ",";\n        font-weight: ",";\n        height: 34px;\n        ",";\n      "]);Y=function t(){return e};return e}function k(){var e=(0,i._)(["\n          padding-",": ",";\n        "]);k=function t(){return e};return e}function I(){var e=(0,i._)(["\n        height: 32px;\n        ",";\n      "]);I=function t(){return e};return e}function D(){var e=(0,i._)(["\n      min-width: 200px;\n    "]);D=function t(){return e};return e}function C(){var e=(0,i._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);C=function t(){return e};return e}function S(){var e=(0,i._)(["\n      ","\n    "]);S=function t(){return e};return e}function M(){var e=(0,i._)(["\n      min-width: 40px;\n      height: 32px;\n      padding-inline: ",";\n    "]);M=function t(){return e};return e}function E(){var e=(0,i._)(["\n      border-right: 1px solid ",";\n    "]);E=function t(){return e};return e}function T(){var e=(0,i._)(["\n      ","\n    "]);T=function t(){return e};return e}function H(){var e=(0,i._)(["\n      min-width: 40px;\n      height: 32px;\n      padding-inline: ",";\n    "]);H=function t(){return e};return e}function F(){var e=(0,i._)(["\n      border-left: 1px solid ",";\n    "]);F=function t(){return e};return e}var K=e=>{var{field:t,fieldState:r,content:i,contentPosition:d="left",showVerticalBar:c=true,type:f="text",size:p="regular",label:m,placeholder:_="",disabled:y,readOnly:w,loading:x,helpText:A,removeOptionsMinWidth:Y=true,onChange:k,presetOptions:I=[],selectOnFocus:D=false,wrapperCss:C,contentCss:S,formFieldWrapperCss:M,removeBorder:E=false}=e;var T;var H=(T=t.value)!==null&&T!==void 0?T:"";var F=(0,s.useRef)(null);var K=(0,s.useRef)(null);var[N,P]=(0,s.useState)(false);return/*#__PURE__*/(0,l/* .jsx */.Y)(b/* ["default"] */.A,{fieldState:r,field:t,label:m,disabled:y,readOnly:w,loading:x,helpText:A,removeBorder:E,wrapperCss:M,placeholder:_,children:e=>{var{css:s}=e,m=(0,o._)(e,["css"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:[O.inputWrapper(!!r.error,E),C],ref:K,children:[i&&d==="left"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:[O.inputLeftContent(c,p),S],children:i}),/*#__PURE__*/(0,l/* .jsx */.Y)("input",(0,a._)((0,n._)({},m),{css:[s,O.input(d,c,p)],onClick:()=>P(true),autoComplete:"off",readOnly:w,ref:e=>{t.ref(e);// @ts-ignore
F.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!D||!F.current){return}F.current.select()},value:H,onChange:e=>{var r=f==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;t.onChange(r);if(k){k(r)}},"data-input":true})),i&&d==="right"&&/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:O.inputRightContent(c,p),children:i})]}),/*#__PURE__*/(0,l/* .jsx */.Y)(v/* ["default"] */.A,{when:I.length>0,children:/*#__PURE__*/(0,l/* .jsx */.Y)(g/* ["default"] */.A,{triggerRef:K,isOpen:N,closePopover:()=>P(false),animationType:h/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,l/* .jsx */.Y)("ul",{css:[O.options(Y)],children:I.map(e=>/*#__PURE__*/(0,l/* .jsx */.Y)("li",{css:O.optionItem({isSelected:e.value===t.value}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("button",{type:"button",css:O.label,onClick:()=>{t.onChange(e.value);k===null||k===void 0?void 0:k(e.value);P(false)},children:[/*#__PURE__*/(0,l/* .jsx */.Y)(v/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,l/* .jsx */.Y)(u/* ["default"] */.A,{name:e.icon,width:32,height:32})}),/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))})})})]})}})};/* export default */const N=K;var O={mainWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),inputWrapper:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;",!t&&(0,c/* .css */.AH)(_(),f/* .colorTokens.stroke["default"] */.I6.stroke["default"],f/* .borderRadius["6"] */.Vq["6"],f/* .shadow.input */.r7.input,f/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,c/* .css */.AH)(y(),f/* .colorTokens.stroke.danger */.I6.stroke.danger,f/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",m/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,c/* .css */.AH)(w(),f/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field:not(textarea){",p/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;","padding-".concat(e),":0;",t&&(0,c/* .css */.AH)(x(),e,f/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,c/* .css */.AH)(Y(),f/* .fontSize["24"] */.J["24"],f/* .fontWeight.medium */.Wy.medium,t&&(0,c/* .css */.AH)(A(),e,f/* .spacing["12"] */.YK["12"]))," ",r==="small"&&(0,c/* .css */.AH)(I(),t&&(0,c/* .css */.AH)(k(),e,f/* .spacing["4"] */.YK["4"])),"      &:focus{box-shadow:none;outline:none;}}"),label:/*#__PURE__*/(0,c/* .css */.AH)(m/* .styleUtils.resetButton */.x.resetButton,";width:100%;height:100%;display:flex;align-items:center;gap:",f/* .spacing["8"] */.YK["8"],";margin:0 ",f/* .spacing["12"] */.YK["12"],";padding:",f/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",f/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;span{flex-shrink:0;}"),options:e=>/*#__PURE__*/(0,c/* .css */.AH)("z-index:",f/* .zIndex.dropdown */.fE.dropdown,";background-color:",f/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",f/* .shadow.popover */.r7.popover,";padding:",f/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",f/* .borderRadius["6"] */.Vq["6"],";",m/* .styleUtils.overflowYAuto */.x.overflowYAuto,";",!e&&(0,c/* .css */.AH)(D())),optionItem:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(p/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:pointer;&:hover{background-color:",f/* .colorTokens.background.hover */.I6.background.hover,";}",t&&(0,c/* .css */.AH)(C(),f/* .colorTokens.background.active */.I6.background.active,f/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],f/* .borderRadius["6"] */.Vq["6"],f/* .borderRadius["6"] */.Vq["6"]))},inputLeftContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(p/* .typography.small */.I.small()," ",m/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",f/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",f/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(S(),p/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(M(),f/* .spacing["6"] */.YK["6"])," ",e&&(0,c/* .css */.AH)(E(),f/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(p/* .typography.small */.I.small()," ",m/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",f/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",f/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(T(),p/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(H(),f/* .spacing["6"] */.YK["6"])," ",e&&(0,c/* .css */.AH)(F(),f/* .colorTokens.stroke["default"] */.I6.stroke["default"]))}},33552:function(e,t,r){r.d(t,{A:()=>p});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(17900);/* import */var i=r(52639);/* import */var l=r(42771);/* import */var s=r(19897);/* import */var d=r(13448);/* import */var c=r(81547);/* import */var u=r(42263);var f=e=>{var{field:t,fieldState:r,label:l,options:d=[],disabled:c,wrapperCss:f,onSelect:p,onSelectRender:h}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(u/* ["default"] */.A,{field:t,fieldState:r,label:l,disabled:c,children:e=>{var{css:r}=e,l=(0,o._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:f,children:d.map((e,o)=>/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsx */.Y)(s/* ["default"] */.A,(0,a._)((0,n._)({},l),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||c,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(p){p(e)}}})),h&&t.value===e.value&&h(e),e.legend&&/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:v.radioLegend,children:e.legend})]},o))})}})};/* export default */const p=f;var v={radioLegend:/*#__PURE__*/(0,l/* .css */.AH)("margin-left:",d/* .spacing["28"] */.YK["28"],";",c/* .typography.body */.I.body(),";color:",d/* .colorTokens.text.subdued */.I6.text.subdued,";")}},15314:function(e,t,r){r.d(t,{A:()=>b});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var o=r(41594);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(42771);/* import */var s=r(13448);/* import */var d=r(81547);/* import */var c=r(44486);/* import */var u=r(52874);/* import */var f=r(33231);/* import */var p=r(42263);function v(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      padding: "," "," "," ",";\n    "]);v=function t(){return e};return e}function h(){var e=(0,n._)(["\n      background: ",";\n    "]);h=function t(){return e};return e}function g(e,t,r,n){if(!t.current){return 0}var a=t.current.getBoundingClientRect();var o=a.width;var i=e-a.left;var l=Math.max(0,Math.min(i,o));var s=l/o*100;var d=Math.floor(r+s/100*(n-r));return d}var m=e=>{var{field:t,fieldState:r,label:n,min:i=0,max:l=100,isMagicAi:s=false,hasBorder:d=false}=e;var u=(0,o.useRef)(null);var v;var[h,m]=(0,o.useState)((v=t.value)!==null&&v!==void 0?v:0);var b=(0,o.useRef)(null);var y=(0,o.useRef)(null);var w=(0,c/* .useDebounce */.d)(h);(0,o.useEffect)(()=>{t.onChange(w);// eslint-disable-next-line react-hooks/exhaustive-deps
},[w,t.onChange]);(0,o.useEffect)(()=>{var e=false;var t=t=>{if(t.target!==y.current){return}e=true;document.body.style.userSelect="none"};var r=t=>{if(!e||!b.current){return}m(g(t.clientX,b,i,l))};var n=()=>{e=false;document.body.style.userSelect="auto"};window.addEventListener("mousedown",t);window.addEventListener("mousemove",r);window.addEventListener("mouseup",n);return()=>{window.removeEventListener("mousedown",t);window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",n)}},[i,l]);var x=(0,o.useMemo)(()=>{return Math.floor((h-i)/(l-i)*100)},[h,i,l]);return/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{field:t,fieldState:r,label:n,isMagicAi:s,children:()=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.wrapper(d),children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.track,ref:b,onKeyDown:f/* .noop */.lQ,onClick:e=>{m(g(e.clientX,b,i,l))},children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.fill,style:{width:"".concat(x,"%")}}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.thumb(s),style:{left:"".concat(x,"%")},ref:y})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("input",{type:"text",css:_.input,value:String(h),onChange:e=>{m(Number(e.target.value))},ref:u,onFocus:()=>{var e;(e=u.current)===null||e===void 0?void 0:e.select()}})]})})};/* export default */const b=m;var _={wrapper:e=>/*#__PURE__*/(0,l/* .css */.AH)("display:grid;grid-template-columns:1fr 45px;gap:",s/* .spacing["20"] */.YK["20"],";align-items:center;",e&&(0,l/* .css */.AH)(v(),s/* .colorTokens.stroke.disable */.I6.stroke.disable,s/* .borderRadius["6"] */.Vq["6"],s/* .spacing["12"] */.YK["12"],s/* .spacing["10"] */.YK["10"],s/* .spacing["12"] */.YK["12"],s/* .spacing["16"] */.YK["16"])),track:/*#__PURE__*/(0,l/* .css */.AH)("position:relative;height:4px;background-color:",s/* .colorTokens.bg.gray20 */.I6.bg.gray20,";border-radius:",s/* .borderRadius["50"] */.Vq["50"],";width:100%;flex-shrink:0;cursor:pointer;"),fill:/*#__PURE__*/(0,l/* .css */.AH)("position:absolute;left:0;top:0;height:100%;background:",s/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";width:50%;border-radius:",s/* .borderRadius["50"] */.Vq["50"],";"),thumb:e=>/*#__PURE__*/(0,l/* .css */.AH)("position:absolute;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:",s/* .borderRadius.circle */.Vq.circle,";&::before{content:'';position:absolute;top:50%;left:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:",s/* .borderRadius.circle */.Vq.circle,";background-color:",s/* .colorTokens.background.white */.I6.background.white,";cursor:pointer;}",e&&(0,l/* .css */.AH)(h(),s/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1)),input:/*#__PURE__*/(0,l/* .css */.AH)(d/* .typography.caption */.I.caption("medium"),";height:32px;border:1px solid ",s/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",s/* .borderRadius["6"] */.Vq["6"],";text-align:center;color:",s/* .colorTokens.text.primary */.I6.text.primary,";&:focus-visible{",u/* .styleUtils.inputFocus */.x.inputFocus,";}")}},87797:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(17900);/* import */var i=r(52639);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);/* import */var d=r(42771);/* import */var c=r(12470);/* import */var u=/*#__PURE__*/r.n(c);/* import */var f=r(98898);/* import */var p=r(69580);/* import */var v=r(50178);/* import */var h=r(1896);/* import */var g=r(25074);/* import */var m=r(46225);/* import */var b=r(19393);/* import */var _=r(13448);/* import */var y=r(81547);/* import */var w=r(31569);/* import */var x=r(27630);/* import */var A=r(21678);/* import */var Y=r(52874);/* import */var k=r(42263);var I=e=>{var{label:t,field:r,fieldState:s,interval:d=30,disabled:u,loading:_,placeholder:y,helpText:I,isClearable:D=true}=e;var[S,M]=(0,l.useState)(false);var E=(0,l.useRef)(null);var T=(0,l.useRef)(null);var H=(0,l.useMemo)(()=>{var e=(0,f/* .setMinutes */.g)((0,p/* .setHours */.a)(new Date,0),0);var t=(0,f/* .setMinutes */.g)((0,p/* .setHours */.a)(new Date,23),59);var r=(0,v/* .eachMinuteOfInterval */.G)({start:e,end:t},{step:d});return r.map(e=>(0,h/* .format */.GP)(e,b/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[d]);var{activeIndex:F,setActiveIndex:K}=(0,x/* .useSelectKeyboardNavigation */.v)({options:H.map(e=>({label:e,value:e})),isOpen:S,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);M(false)},onClose:()=>M(false)});(0,l.useEffect)(()=>{if(S&&F>=0&&T.current){T.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[S,F]);return/*#__PURE__*/(0,i/* .jsx */.Y)(k/* ["default"] */.A,{label:t,field:r,fieldState:s,disabled:u,loading:_,placeholder:y,helpText:I,children:e=>{var{css:t}=e,l=(0,o._)(e,["css"]);var s;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:C.wrapper,ref:E,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,a._)((0,n._)({},l),{ref:r.ref,css:[t,C.input],type:"text",onClick:e=>{e.stopPropagation();M(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();M(e=>!e)}if(e.key==="Tab"){M(false)}},value:(s=r.value)!==null&&s!==void 0?s:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:"clock",width:32,height:32,style:C.icon}),D&&r.value&&/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,c.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:Y/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(A/* ["default"] */.A,{triggerRef:E,isOpen:S,closePopover:()=>M(false),animationType:w/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,i/* .jsx */.Y)("ul",{css:C.list,children:H.map((e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("li",{css:C.listItem,ref:F===t?T:null,"data-active":F===t,children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:C.itemButton,onClick:()=>{r.onChange(e);M(false)},onMouseOver:()=>K(t),onMouseLeave:()=>t!==F&&K(-1),onFocus:()=>K(t),children:e})},t)})})})]})}})};/* export default */const D=I;var C={wrapper:/*#__PURE__*/(0,d/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,d/* .css */.AH)("&[data-input]{padding-left:",_/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;top:50%;left:",_/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",_/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,d/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",Y/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,d/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",_/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",_/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,d/* .css */.AH)(Y/* .styleUtils.resetButton */.x.resetButton,";",y/* .typography.body */.I.body(),";margin:",_/* .spacing["4"] */.YK["4"]," ",_/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",_/* .colorTokens.text.primary */.I6.text.primary,";}")}},94232:function(e,t,r){// EXPORTS
r.d(t,{A:()=>/* binding */ee});// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(93640);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
var a=r(41147);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var o=r(14206);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var i=r(60599);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var l=r(52639);// EXTERNAL MODULE: external "React"
var s=r(41594);// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var d=r(78346);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var c=r(42771);// EXTERNAL MODULE: external "wp.i18n"
var u=r(12470);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Button.tsx
var f=r(25074);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/ImageInput.tsx
var p=r(12427);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/LoadingSpinner.tsx
var v=r(56705);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/SVGIcon.tsx
var h=r(46225);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/config.ts
var g=r(74412);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/constants.ts
var m=r(19393);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/styles.ts
var b=r(13448);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/typography.ts
var _=r(81547);// EXTERNAL MODULE: ./assets/src/js/v3/shared/controls/Show.tsx
var y=r(59189);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hoc/withVisibilityControl.tsx
var w=r(57587);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useAnimation.tsx
var x=r(31569);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useFormWithGlobalError.ts
var A=r(34092);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/usePortalPopover.tsx
var Y=r(84206);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useWpMedia.ts
var k=r(75532);// EXTERNAL MODULE: ./assets/src/js/v3/shared/molecules/Popover.tsx
var I=r(21678);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js
var D=r(32047);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/api.ts
var C=r(77239);// EXTERNAL MODULE: ./assets/core/ts/utils/endpoints.ts
var S=r(94812);// CONCATENATED MODULE: ./assets/src/js/v3/shared/services/video.ts
var M=e=>{return C/* .wpAjaxInstance.post */.b.post(S/* ["default"].TUTOR_YOUTUBE_VIDEO_DURATION */.A.TUTOR_YOUTUBE_VIDEO_DURATION,{video_id:e})};var E=()=>{return(0,D/* .useMutation */.n)({mutationFn:M})};// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/style-utils.ts
var T=r(52874);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/util.ts + 4 modules
var H=r(33231);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/validation.ts
var F=r(18528);// CONCATENATED MODULE: ./assets/src/js/v3/shared/utils/video.ts
function K(e){return(0,n._)(function*(){var t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;var r=e.match(t);var n=r?r[5]:null;var a="https://vimeo.com/api/v2/video/".concat(n,".xml");try{var o=yield fetch(a);if(!o.ok){throw new Error((0,u.__)("Failed to fetch the video data","tutor"))}var i=yield o.text();var l=new DOMParser;var s=l.parseFromString(i,"application/xml");var d=s.getElementsByTagName("duration")[0];if(!d||!d.textContent){return null}var c=Number.parseInt(d.textContent,10);return c;// in seconds
}catch(e){// eslint-disable-next-line no-console
console.error("Error fetching video duration:",e);return null}})()}var N=e=>(0,n._)(function*(){var t=document.createElement("video");t.src=e;t.preload="metadata";return new Promise(e=>{t.onloadedmetadata=()=>{e(t.duration)}})})();var O=e=>{var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);if(!t){return 0}var r=t[1]?Number(t[1].replace("H","")):0;var n=t[2]?Number(t[2].replace("M","")):0;var a=t[3]?Number(t[3].replace("S","")):0;return r*3600+n*60+a};/**
 * Generates a thumbnail from different video sources
 * @param {string} source - Video source type ('youtube', 'vimeo', 'external_url', 'html5')
 * @param {string} url - Video URL
 * @returns {Promise<string>} - Base64 encoded thumbnail image
 */var P=(e,t)=>(0,n._)(function*(){if(e==="youtube"){var r=t.match(m/* .VideoRegex.YOUTUBE */.j8.YOUTUBE);var n=r&&r[7].length===11?r[7]:"";return"https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg")}if(e==="vimeo"){try{var a=t.split("/").pop();var o=yield fetch("https://vimeo.com/api/v2/video/".concat(a,".json"));var i=yield o.json();return i[0].thumbnail_large}catch(e){throw new Error("Failed to get Vimeo thumbnail. Error: ".concat(e))}}if(e==="external_url"||e==="html5"){return new Promise((e,r)=>{try{// Create video element
    var n=document.createElement("video");n.muted=true;n.style.cssText="position: fixed; left: 0; top: 0; width: 1px; height: 1px; object-fit: contain; z-index: -1;";n.crossOrigin="Anonymous";// Create canvas element
    var a=document.createElement("canvas");// Track loading states
    var o=false;var i=false;var l=false;var s=false;var d=()=>{n.src="";n.remove();a.remove();clearTimeout(f)};var c=()=>{if(o&&i&&l&&s){try{a.height=n.videoHeight;a.width=n.videoWidth;var t=a.getContext("2d");if(!t){throw new Error((0,u.__)("Failed to get canvas context","tutor"))}t.drawImage(n,0,0);var c=a.toDataURL("image/png");d();e(c)}catch(e){d();var f=e instanceof Error?e.message:(0,u.__)("Unknown error occurred","tutor");r(new Error("Thumbnail generation failed: ".concat(f)))}}};// Setup event listeners
    n.addEventListener("loadedmetadata",()=>{o=true;if(!n.currentTime||n.currentTime<2){n.currentTime=2;// Take snapshot at 2 seconds
    }});n.addEventListener("loadeddata",()=>{i=true;c()});n.addEventListener("suspend",()=>{l=true;c()});n.addEventListener("seeked",()=>{s=true;c()});n.addEventListener("error",e=>{d();r(new Error("Video loading failed: ".concat(e.message)))});// Set timeout
    // 30 seconds is a reasonable maximum time to wait for video metadata and frame capture
    var f=setTimeout(()=>{d();r(new Error((0,u.__)("Thumbnail generation timed out","tutor")))},3e4);// Add elements to DOM
    document.body.appendChild(n);document.body.appendChild(a);// Start loading the video
    n.src=t}catch(e){var p=e instanceof Error?e.message:"Unknown error occurred";r(new Error("Thumbnail generation failed: ".concat(p)))}})}throw new Error((0,u.__)("Unsupported video source","tutor"))})();// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormFieldWrapper.tsx
var L=r(42263);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormSelectInput.tsx
var R=r(99864);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormTextareaInput.tsx
var W=r(74054);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormVideoInput.tsx
function B(){var e=(0,i._)(["\n      background-color: ",";\n    "]);B=function t(){return e};return e}function z(){var e=(0,i._)(["\n      ",";\n    "]);z=function t(){return e};return e}var U=g/* .tutorConfig.supported_video_sources */.P.supported_video_sources||[];var j=U.filter(e=>e.value!=="html5");var q=U.map(e=>e.value);var V=["vimeo","youtube","html5"];var G={youtube:(0,u.__)("Paste YouTube Video URL","tutor"),vimeo:(0,u.__)("Paste Vimeo Video URL","tutor"),external_url:(0,u.__)("Paste External Video URL","tutor"),shortcode:(0,u.__)("Paste Video Shortcode","tutor"),embedded:(0,u.__)("Paste Embedded Video Code","tutor")};var Q={youtube:"youtube",vimeo:"vimeo",shortcode:"shortcode",embedded:"coding"};var $=(e,t)=>{var r={source:"",source_video_id:"",poster:"",poster_url:"",source_html5:"",source_external_url:"",source_shortcode:"",source_youtube:"",source_vimeo:"",source_embedded:""};return e?(0,a._)({},e,t):(0,a._)({},r,t)};var Z={youtube:e=>{var t=e.match(m/* .VideoRegex.YOUTUBE */.j8.YOUTUBE);return t&&t[7].length===11?t[7]:null},vimeo:e=>{var t=e.match(m/* .VideoRegex.VIMEO */.j8.VIMEO);return(t===null||t===void 0?void 0:t[5])||null},shortcode:e=>{return e.match(m/* .VideoRegex.SHORTCODE */.j8.SHORTCODE)?e:null},url:e=>{return e.match(m/* .VideoRegex.EXTERNAL_URL */.j8.EXTERNAL_URL)?e:null}};var X=e=>{var{source:t,url:r,getYouTubeVideoDurationMutation:a}=e;return(0,n._)(function*(){try{var e=0;switch(t){case"vimeo":var n;e=(n=yield K(r))!==null&&n!==void 0?n:0;break;case"html5":case"external_url":var o;e=(o=yield N(r))!==null&&o!==void 0?o:0;break;case"youtube":{var i=Z.youtube(r);if(i){var l=yield a.mutateAsync(i);e=O(l.data.duration)}break}}if(e){var s=(0,H/* .covertSecondsToHMS */.uu)(Math.floor(e));return s}return null}catch(e){// eslint-disable-next-line no-console
console.error("Error getting video duration:",e);return null}})()};var J=e=>{var{field:t,fieldState:r,label:i,helpText:m,buttonText:b=(0,u.__)("Upload Media","tutor"),infoText:_,onChange:w,supportedFormats:D,loading:C,onGetDuration:S}=e;var M,B,z;var J=(0,A/* .useFormWithGlobalError */.p)({defaultValues:{videoSource:((M=j[0])===null||M===void 0?void 0:M.value)||"",videoUrl:""}});var ee=E();var[er,en]=(0,s.useState)(false);var[ea,eo]=(0,s.useState)({hours:0,minutes:0,seconds:0});var[ei,el]=(0,s.useState)("");var[es,ed]=(0,s.useState)(false);var ec=(0,s.useRef)(null);var eu=e=>(0,n._)(function*(){if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={source:"html5",source_video_id:r.id.toString(),source_html5:r.url};var a;t.onChange($((a=t.value)!==null&&a!==void 0?a:null,n));var o;w===null||w===void 0?void 0:w($((o=t.value)!==null&&o!==void 0?o:null,n));try{en(true);eh();var i=yield P("external_url",r.url);var l=yield N(r.url);if(!l){return}eo((0,H/* .covertSecondsToHMS */.uu)(Math.floor(l)));if(S){S((0,H/* .covertSecondsToHMS */.uu)(Math.floor(l)))}if(i){el(i)}}finally{en(false)}})();var{openMediaLibrary:ef,resetFiles:ep}=(0,k/* ["default"] */.A)({options:{type:(D===null||D===void 0?void 0:D.length)?D.map(e=>"video/".concat(e)).join(","):"video"},onChange:eu});var{openMediaLibrary:ev,resetFiles:eh}=(0,k/* ["default"] */.A)({options:{type:"image"},onChange:e=>{if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={poster:r.id.toString(),poster_url:r.url};var a;t.onChange($((a=t.value)!==null&&a!==void 0?a:null,n));var o;w===null||w===void 0?void 0:w($((o=t.value)!==null&&o!==void 0?o:null,n))},initialFiles:((B=t.value)===null||B===void 0?void 0:B.poster)?{id:Number(t.value.poster),url:t.value.poster_url,title:""}:null});var eg=J.watch("videoSource")||"";var em=t.value;(0,s.useEffect)(()=>{var e;if(!em){return}if(!em.source){var r,n;J.setValue("videoSource",(r=j[0])===null||r===void 0?void 0:r.value);J.setValue("videoUrl",em["source_".concat((n=j[0])===null||n===void 0?void 0:n.value)]||"");return}var a=q.includes(em.source);if(!a){t.onChange($(em,{source:""}));return}J.setValue("videoSource",em.source);J.setValue("videoUrl",em["source_".concat(em.source)]||"");if(!em.poster_url&&V.includes(em.source)){var o=em.source;en(true);P(o,em["source_".concat(o)]||"").then(e=>{en(false);el(e)}).finally(()=>{en(false)})}if(Object.values(ea).some(e=>e>0)){return}if(em.source==="vimeo"){K(em["source_vimeo"]||"").then(e=>{if(!e){return}eo((0,H/* .covertSecondsToHMS */.uu)(Math.floor(e)));if(S){S((0,H/* .covertSecondsToHMS */.uu)(Math.floor(e)))}})}if(["external_url","html5"].includes(em.source)){N(em["source_".concat(em.source)]||"").then(e=>{if(!e){return}eo((0,H/* .covertSecondsToHMS */.uu)(Math.floor(e)));if(S){S((0,H/* .covertSecondsToHMS */.uu)(Math.floor(e)))}})}if(em.source==="youtube"&&((e=g/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.youtube_api_key_exist)){var i;var l=(i=Z.youtube(em["source_youtube"]||""))!==null&&i!==void 0?i:"";ee.mutateAsync(l).then(e=>{var t=e.data.duration;if(!t){return}var r=O(t);eo((0,H/* .covertSecondsToHMS */.uu)(Math.floor(r)));if(S){S((0,H/* .covertSecondsToHMS */.uu)(Math.floor(r)))}})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[em]);if(!q.length){return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.emptyMediaWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:i,children:/*#__PURE__*/(0,l/* .jsx */.Y)("label",{children:i})}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.emptyMedia({hasVideoSource:false}),children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("p",{css:et.warningText,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"info",height:20,width:20}),(0,u.__)("No video source selected","tutor")]}),/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{buttonCss:et.selectFromSettingsButton,variant:"secondary",size:"small",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"linkExternal",height:24,width:24}),onClick:()=>{window.open(g/* ["default"].VIDEO_SOURCES_SETTINGS_URL */.A.VIDEO_SOURCES_SETTINGS_URL,"_blank","noopener")},children:(0,u.__)("Select from settings","tutor")})]})]})}var eb=e=>{if(e==="video"){ef();return}ev()};var e_=e=>{var r=e==="video"?{source:"",source_video_id:"",poster:"",poster_url:""}:{poster:"",poster_url:""};var n=$(em!==null&&em!==void 0?em:null,r);if(e==="video"){ep()}else{eh()}t.onChange(n);el("");eo({hours:0,minutes:0,seconds:0});if(w){w(n)}};var ey=()=>{if(!(em===null||em===void 0?void 0:em.source)||!q.includes(em.source)){return false}var e=em===null||em===void 0?void 0:em.source;var t="source_".concat(e);return em&&em[t]!==""};var ew=e=>(0,n._)(function*(){en(true);try{var{videoSource:r,videoUrl:n}=e;var a={source:r,["source_".concat(r)]:n};t.onChange($(em!==null&&em!==void 0?em:null,a));w===null||w===void 0?void 0:w($(em!==null&&em!==void 0?em:null,a));ed(false);var[o,i]=yield Promise.all([X({source:r,url:n,getYouTubeVideoDurationMutation:ee}),V.includes(r)?P(r,n):null]);if(o){eo(o);S===null||S===void 0?void 0:S(o)}if(i){el(i)}}finally{en(false)}})();var ex=e=>{var t=e.trim();if(eg==="embedded")return true;if(eg==="shortcode"){return Z.shortcode(t)?true:(0,u.__)("Invalid Shortcode","tutor")}if(!Z.url(t)){return(0,u.__)("Invalid URL","tutor")}if(eg==="youtube"&&!Z.youtube(t)){return(0,u.__)("Invalid YouTube URL","tutor")}if(eg==="vimeo"&&!Z.vimeo(t)){return(0,u.__)("Invalid Vimeo URL","tutor")}return true};return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)(L/* ["default"] */.A,{label:i,field:t,fieldState:r,helpText:m,children:()=>{return/*#__PURE__*/(0,l/* .jsx */.Y)("div",{ref:ec,children:/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:!C,fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.emptyMedia({hasVideoSource:true}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(v/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:ey(),fallback:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.emptyMedia({hasVideoSource:true}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:q.includes("html5"),children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{"data-cy":"upload-media",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"monitorPlay",height:24,width:24}),onClick:()=>{eb("video")},children:b})}),/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:q.filter(e=>e!=="html5").length>0,children:/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:!q.includes("html5"),fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{"data-cy":"add-from-url",type:"button",css:et.urlButton,onClick:()=>{ed(e=>!e)},children:(0,u.__)("Add from URL","tutor")}),children:/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{"data-cy":"add-from-url",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"plusSquareBrand",height:24,width:24}),onClick:()=>{ed(e=>!e)},children:(0,u.__)("Add from URL","tutor")})})}),/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:q.includes("html5"),children:/*#__PURE__*/(0,l/* .jsx */.Y)("p",{css:et.infoTexts,children:_})})]}),children:()=>{var e;return/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.previewWrapper,"data-cy":"media-preview",children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.videoInfoWrapper,children:[/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.videoInfoCard,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:Q[em===null||em===void 0?void 0:em.source]||"video",height:36,width:36}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.videoInfo,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.videoInfoTitle,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:T/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),children:V.includes((em===null||em===void 0?void 0:em.source)||"")?em===null||em===void 0?void 0:em["source_".concat(em.source)]:(e=U.find(e=>e.value===(em===null||em===void 0?void 0:em.source)))===null||e===void 0?void 0:e.label})})})]}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.actionButtons,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:eg!=="html5",children:/*#__PURE__*/(0,l/* .jsx */.Y)("button",{type:"button",css:T/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{ed(true)},children:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"edit",height:24,width:24})})}),/*#__PURE__*/(0,l/* .jsx */.Y)("button",{"data-cy":"remove-video",type:"button",css:T/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{e_("video")},children:/*#__PURE__*/(0,l/* .jsx */.Y)(h/* ["default"] */.A,{name:"cross",height:24,width:24})})]})]}),/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.imagePreview({hasImageInput:V.includes((em===null||em===void 0?void 0:em.source)||"")}),children:/*#__PURE__*/(0,l/* .jsxs */.FD)(y/* ["default"] */.A,{when:V.includes((em===null||em===void 0?void 0:em.source)||""),fallback:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:et.urlData,children:J.watch("videoUrl")}),children:[/*#__PURE__*/(0,l/* .jsx */.Y)(p/* ["default"] */.A,{value:em?{id:Number(em.poster)||0,url:em.poster_url||ei,title:""}:null,loading:er,isClearAble:!!(em===null||em===void 0?void 0:em.poster),disabled:["vimeo","youtube"].includes((em===null||em===void 0?void 0:em.source)||""),uploadHandler:()=>eb("poster"),clearHandler:()=>e_("poster"),buttonText:(0,u.__)("Upload Thumbnail","tutor"),infoText:(0,u.__)("Upload a thumbnail image for your video","tutor"),emptyImageCss:et.thumbImage,previewImageCss:et.thumbImage,overlayCss:et.thumbImage,replaceButtonText:(0,u.__)("Replace Thumbnail","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(y/* ["default"] */.A,{when:ea.hours>0||ea.minutes>0||ea.seconds>0,children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.duration,children:[ea.hours>0&&"".concat(ea.hours,"h")," ",ea.minutes,"m ",ea.seconds,"s"]})})]})})]})}})})})}}),/*#__PURE__*/(0,l/* .jsx */.Y)(I/* ["default"] */.A,{triggerRef:ec,isOpen:es,placement:Y/* .POPOVER_PLACEMENTS.MIDDLE */.zA.MIDDLE,animationType:x/* .AnimationType.fadeIn */.J6.fadeIn,closePopover:()=>ed(false),positionModifier:{top:17,left:0},maxWidth:"".concat(((z=ec.current)===null||z===void 0?void 0:z.offsetWidth)||300,"px"),children:/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.popoverContent,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:J.control,name:"videoSource",rules:(0,a._)({},(0,F/* .requiredRule */.WN)()),render:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(R/* ["default"] */.A,(0,o._)((0,a._)({},e),{options:j,disabled:U.length<=1,placeholder:(0,u.__)("Select source","tutor"),hideCaret:U.length<=1}))}}),/*#__PURE__*/(0,l/* .jsx */.Y)(d/* .Controller */.xI,{control:J.control,name:"videoUrl",rules:(0,o._)((0,a._)({},(0,F/* .requiredRule */.WN)()),{validate:ex}),render:e=>{return/*#__PURE__*/(0,l/* .jsx */.Y)(W/* ["default"] */.A,(0,o._)((0,a._)({},e),{inputCss:/*#__PURE__*/(0,c/* .css */.AH)("border-style:dashed;"),rows:2,placeholder:G[eg]||(0,u.__)("Paste Here","tutor")}))}}),/*#__PURE__*/(0,l/* .jsxs */.FD)("div",{css:et.popoverButtonWrapper,children:[/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>{ed(false)},children:(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,l/* .jsx */.Y)(f/* ["default"] */.A,{"data-cy":"submit-url",variant:"secondary",size:"small",onClick:J.handleSubmit(ew),children:(0,u.__)("Ok","tutor")})]})]})})]})};/* export default */const ee=(0,w/* .withVisibilityControl */.M)(J);var et={emptyMediaWrapper:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",b/* .spacing["4"] */.YK["4"],";label{",_/* .typography.caption */.I.caption(),";color:",b/* .colorTokens.text.title */.I6.text.title,";}"),emptyMedia:e=>{var{hasVideoSource:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:164px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",b/* .spacing["8"] */.YK["8"],";border:1px dashed ",b/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",b/* .borderRadius["8"] */.Vq["8"],";background-color:",b/* .colorTokens.background.status.warning */.I6.background.status.warning,";",t&&(0,c/* .css */.AH)(B(),b/* .colorTokens.bg.white */.I6.bg.white))},infoTexts:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.tiny */.I.tiny(),";color:",b/* .colorTokens.text.subdued */.I6.text.subdued,";"),warningText:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",b/* .spacing["4"] */.YK["4"],";",_/* .typography.caption */.I.caption(),";color:",b/* .colorTokens.text.warning */.I6.text.warning,";"),selectFromSettingsButton:/*#__PURE__*/(0,c/* .css */.AH)("background:",b/* .colorTokens.bg.white */.I6.bg.white,";"),urlData:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";",T/* .styleUtils.display.flex */.x.display.flex("column"),";padding:",b/* .spacing["8"] */.YK["8"]," ",b/* .spacing["12"] */.YK["12"],";gap:",b/* .spacing["8"] */.YK["8"],";word-break:break-all;"),previewWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:100%;border:1px solid ",b/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",b/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;background-color:",b/* .colorTokens.bg.white */.I6.bg.white,";"),videoInfoWrapper:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;gap:",b/* .spacing["20"] */.YK["20"],";padding:",b/* .spacing["8"] */.YK["8"]," ",b/* .spacing["12"] */.YK["12"],";"),videoInfoCard:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",b/* .spacing["8"] */.YK["8"],";svg{flex-shrink:0;color:",b/* .colorTokens.icon.hover */.I6.icon.hover,";}"),videoInfo:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",b/* .spacing["4"] */.YK["4"],";"),videoInfoTitle:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";",_/* .typography.caption */.I.caption("medium"),"    word-break:break-all;"),imagePreview:e=>{var{hasImageInput:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("width:100%;max-height:168px;position:relative;overflow:hidden;background-color:",b/* .colorTokens.background["default"] */.I6.background["default"],";",!t&&(0,c/* .css */.AH)(z(),T/* .styleUtils.overflowYAuto */.x.overflowYAuto),";scrollbar-gutter:auto;&:hover{[data-hover-buttons-wrapper]{opacity:1;}}")},duration:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.tiny */.I.tiny(),";position:absolute;bottom:",b/* .spacing["12"] */.YK["12"],";right:",b/* .spacing["12"] */.YK["12"],";background-color:rgba(0,0,0,0.5);color:",b/* .colorTokens.text.white */.I6.text.white,";padding:",b/* .spacing["4"] */.YK["4"]," ",b/* .spacing["8"] */.YK["8"],";border-radius:",b/* .borderRadius["6"] */.Vq["6"],";pointer-events:none;"),thumbImage:/*#__PURE__*/(0,c/* .css */.AH)("border-radius:0;border:none;"),urlButton:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.small */.I.small("medium"),";color:",b/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",b/* .borderRadius["2"] */.Vq["2"],";padding:0 ",b/* .spacing["4"] */.YK["4"],";margin-bottom:",b/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background:none;color:",b/* .colorTokens.text.brand */.I6.text.brand,";}&:focus-visible{outline:2px solid ",b/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),actionButtons:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";gap:",b/* .spacing["4"] */.YK["4"],";"),popover:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;width:100%;z-index:",b/* .zIndex.dropdown */.fE.dropdown,";background-color:",b/* .colorTokens.bg.white */.I6.bg.white,";border-radius:",b/* .borderRadius.card */.Vq.card,";box-shadow:",b/* .shadow.popover */.r7.popover,";"),popoverContent:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",b/* .spacing["12"] */.YK["12"],";padding:",b/* .spacing["16"] */.YK["16"],";"),popoverButtonWrapper:/*#__PURE__*/(0,c/* .css */.AH)(T/* .styleUtils.display.flex */.x.display.flex(),";gap:",b/* .spacing["8"] */.YK["8"],";justify-content:flex-end;")}},15004:function(e,t,r){r.d(t,{A:()=>R});/* import */var n=r(93640);/* import */var a=r(60599);/* import */var o=r(52639);/* import */var i=r(41594);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(42771);/* import */var d=r(12470);/* import */var c=/*#__PURE__*/r.n(d);/* import */var u=r(18853);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(47918);/* import */var v=r(25074);/* import */var h=r(56705);/* import */var g=r(46225);/* import */var m=r(90453);/* import */var b=r(54184);/* import */var _=r(88325);/* import */var y=r(56949);/* import */var w=r(17944);/* import */var x=r(19448);/* import */var A=r(3311);/* import */var Y=r(74412);/* import */var k=r(19393);/* import */var I=r(13448);/* import */var D=r(3013);/* import */var C=r(59189);/* import */var S=r(52874);/* import */var M=r(55051);/* import */var E=r(17064);/* import */var T=r(42263);function H(){var e=(0,a._)(["\n      overflow: hidden;\n      border-radius: ",";\n    "]);H=function t(){return e};return e}var F;var K={droip:"droipColorized",elementor:"elementorColorized",gutenberg:"gutenbergColorized",divi:"diviColorized"};var N=!!Y/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var O=(F=Y/* .tutorConfig.settings */.P.settings)===null||F===void 0?void 0:F.chatgpt_key_exist;var P=e=>{var{editorUsed:t,onBackToWPEditorClick:r,onCustomEditorButtonClick:a}=e;var{showModal:l}=(0,w/* .useModal */.h)();var[s,c]=(0,i.useState)("");return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:W.editorOverlay,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(C/* ["default"] */.A,{when:t.name!=="gutenberg",children:/*#__PURE__*/(0,o/* .jsx */.Y)(v/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:W.editWithButton,icon:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"arrowLeft",height:24,width:24}),loading:s==="back_to",onClick:()=>(0,n._)(function*(){var{action:e}=yield l({component:y/* ["default"] */.A,props:{title:(0,d.__)("Back to WordPress Editor","tutor"),description:/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{type:"warning",icon:"warning",children:(0,d.__)("Warning: Switching to the WordPress default editor may cause issues with your current layout, design, and content.","tutor")}),confirmButtonText:(0,d.__)("Confirm","tutor"),confirmButtonVariant:"primary"},depthIndex:I/* .zIndex.highest */.fE.highest});if(e==="CONFIRM"){try{c("back_to");yield r===null||r===void 0?void 0:r(t.name)}finally{c("")}}})(),children:(0,d.__)("Back to WordPress Editor","tutor")})}),/*#__PURE__*/(0,o/* .jsx */.Y)(v/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:W.editWithButton,loading:s==="edit_with",icon:K[t.name]&&/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:K[t.name],height:24,width:24}),onClick:()=>(0,n._)(function*(){try{c("edit_with");yield a===null||a===void 0?void 0:a(t);window.location.href=t.link}finally{c("")}})(),children:/* translators: %s is the editor name */(0,d.sprintf)((0,d.__)("Edit with %s","tutor"),t===null||t===void 0?void 0:t.label)})]})};var L=e=>{var{label:t,field:r,fieldState:a,disabled:l,readOnly:s,loading:c,placeholder:u,helpText:f,onChange:p,generateWithAi:v=false,onClickAiButton:y,hasCustomEditorSupport:H=false,isMinimal:F=false,hideMediaButtons:L=false,hideQuickTags:R=false,editors:B=[],editorUsed:z={name:"classic",label:"Classic Editor",link:""},isMagicAi:U=false,autoFocus:j=false,onCustomEditorButtonClick:q,onBackToWPEditorClick:V,onFullScreenChange:G,min_height:Q,max_height:$,toolbar1:Z,toolbar2:X}=e;var J,ee,et,er,en;var{showModal:ea}=(0,w/* .useModal */.h)();var eo=((J=Y/* .tutorConfig.settings */.P.settings)===null||J===void 0?void 0:J.hide_admin_bar_for_users)==="off";var ei=(et=Y/* .tutorConfig.current_user */.P.current_user)===null||et===void 0?void 0:(ee=et.roles)===null||ee===void 0?void 0:ee.includes(k/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var el=(en=Y/* .tutorConfig.current_user */.P.current_user)===null||en===void 0?void 0:(er=en.roles)===null||er===void 0?void 0:er.includes(k/* .TutorRoles.TUTOR_INSTRUCTOR */.gt.TUTOR_INSTRUCTOR);var[es,ed]=(0,i.useState)(null);var ec=B.filter(e=>ei||el&&eo||e.name==="droip");var eu=H&&ec.length>0;var ef=eu&&z.name!=="classic";var ep=()=>{if(!N){ea({component:x/* ["default"] */.A,props:{image:M,image2x:E}})}else if(!O){ea({component:A/* ["default"] */.A,props:{image:M,image2x:E}})}else{ea({component:_/* ["default"] */.A,isMagicAi:true,props:{title:(0,d.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:1e3,field:r,fieldState:a,is_html:true}});y===null||y===void 0?void 0:y()}};var ev=/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:W.editorLabel,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("span",{css:W.labelWithAi,children:[t,/*#__PURE__*/(0,o/* .jsx */.Y)(C/* ["default"] */.A,{when:v,children:/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:W.aiButton,onClick:ep,children:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"magicAiColorize",width:32,height:32})})})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:W.editorsButtonWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:(0,d.__)("Edit with","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:W.customEditorButtons,children:/*#__PURE__*/(0,o/* .jsx */.Y)(D/* ["default"] */.A,{each:ec,children:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{content:e.label,delay:200,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:W.customEditorButton,disabled:es===e.name,onClick:()=>(0,n._)(function*(){try{ed(e.name);yield q===null||q===void 0?void 0:q(e);window.location.href=e.link}finally{ed(null)}})(),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(C/* ["default"] */.A,{when:es===e.name,children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* .LoadingOverlay */.p8,{})}),/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:K[e.name],height:24,width:24})]})},e.name)})})]})]});return/*#__PURE__*/(0,o/* .jsx */.Y)(T/* ["default"] */.A,{label:eu?ev:t,field:r,fieldState:a,disabled:l,readOnly:s,placeholder:u,helpText:f,isMagicAi:U,generateWithAi:!eu&&v,onClickAiButton:ep,replaceEntireLabel:eu,children:()=>{if(c){return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:S/* .styleUtils.flexCenter */.x.flexCenter(),children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.Ay,{size:20,color:I/* .colorTokens.icon["default"] */.I6.icon["default"]})})}var e;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:W.wrapper({isOverlayVisible:ef}),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(C/* ["default"] */.A,{when:ef,children:/*#__PURE__*/(0,o/* .jsx */.Y)(P,{editorUsed:z,onBackToWPEditorClick:V,onCustomEditorButtonClick:q})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{value:(e=r.value)!==null&&e!==void 0?e:"",onChange:e=>{r.onChange(e);if(p){p(e)}},isMinimal:F,hideMediaButtons:L,hideQuickTags:R,autoFocus:j,onFullScreenChange:G,readonly:s,min_height:Q,max_height:$,toolbar1:Z,toolbar2:X})]})}})};/* export default */const R=L;var W={wrapper:e=>{var{isOverlayVisible:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("position:relative;",t&&(0,s/* .css */.AH)(H(),I/* .borderRadius["6"] */.Vq["6"]))},editorLabel:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;width:100%;align-items:center;justify-content:space-between;"),aiButton:/*#__PURE__*/(0,s/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",S/* .styleUtils.flexCenter */.x.flexCenter(),";width:32px;height:32px;border-radius:",I/* .borderRadius["4"] */.Vq["4"],";:disabled{cursor:not-allowed;}&:focus-visible{outline:2px solid ",I/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),labelWithAi:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["4"] */.YK["4"],";"),editorsButtonWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["8"] */.YK["8"],";color:",I/* .colorTokens.text.hints */.I6.text.hints,";"),customEditorButtons:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["4"] */.YK["4"],";"),customEditorButton:/*#__PURE__*/(0,s/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,"    display:flex;align-items:center;justify-content:center;position:relative;border-radius:",I/* .borderRadius.circle */.Vq.circle,";&:focus-visible{outline:2px solid ",I/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),editorOverlay:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;height:100%;width:100%;",S/* .styleUtils.flexCenter */.x.flexCenter(),";gap:",I/* .spacing["8"] */.YK["8"],";background-color:",f()(I/* .colorTokens.background.modal */.I6.background.modal,.6),";border-radius:",I/* .borderRadius["6"] */.Vq["6"],";z-index:",I/* .zIndex.positive */.fE.positive,";backdrop-filter:blur(8px);"),editWithButton:/*#__PURE__*/(0,s/* .css */.AH)("background:",I/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",I/* .colorTokens.text.primary */.I6.text.primary,";box-shadow:inset 0 -1px 0 0 ",f()("#1112133D",.24),",0 1px 0 0 ",f()("#1112133D",.8),";")}},21055:function(e,t,r){r.d(t,{f:()=>d});/* import */var n=r(52639);/* import */var a=r(41594);/* import */var o=/*#__PURE__*/r.n(a);/* import */var i=r(42771);/* import */var l=r(13448);/* import */var s=r(67035);var d=/*#__PURE__*/o().forwardRef((e,t)=>{var{src:r,width:o,height:i,brushSize:l,trackStack:d,pointer:u,setTrackStack:f,setPointer:p}=e;var[v,h]=(0,a.useState)(false);var[g,m]=(0,a.useState)({x:0,y:0});var b=(0,a.useRef)(null);var _=e=>{var{canvas:r,context:n}=(0,s/* .getCanvas */.dX)(t);if(!r||!n){return}var a=r.getBoundingClientRect();var o=(e.clientX-a.left)*(r.width/a.width);var i=(e.clientY-a.top)*(r.height/a.height);n.globalCompositeOperation="destination-out";n.beginPath();n.moveTo(o,i);h(true);m({x:o,y:i})};var y=e=>{var{canvas:r,context:n}=(0,s/* .getCanvas */.dX)(t);if(!r||!n||!b.current){return}var a=r.getBoundingClientRect();var o={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};if(v){(0,s/* .drawPath */.kd)(n,o)}b.current.style.left="".concat(o.x,"px");b.current.style.top="".concat(o.y,"px")};var w=e=>{var{canvas:r,context:n}=(0,s/* .getCanvas */.dX)(t);if(!n||!r){return}h(false);n.closePath();var a=r.getBoundingClientRect();var o={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};// Check if the mouse is just clicked but not drag for drawing a path, then draw a circle
if((0,s/* .calculateCartesianDistance */.KG)(g,o)===0){(0,s/* .drawPath */.kd)(n,{x:o.x+1,y:o.y+1})}f(e=>{var t=e.slice(0,u);return[...t,n.getImageData(0,0,1024,1024)]});p(e=>e+1)};var x=()=>{var{canvas:e,context:n}=(0,s/* .getCanvas */.dX)(t);if(!e||!n){return}var a=new Image;a.src=r;a.onload=()=>{n.clearRect(0,0,e.width,e.height);var t=a.width/a.height;var r=e.width/e.height;var o;var i;if(r>t){i=e.height;o=e.height*t}else{o=e.width;i=e.width/t}var l=(e.width-o)/2;var s=(e.height-i)/2;n.drawImage(a,l,s,o,i);if(d.length===0){f([n.getImageData(0,0,e.width,e.height)])}};n.lineJoin="round";n.lineCap="round"};var A=()=>{if(!b.current){return}document.body.style.cursor="none";b.current.style.display="block"};var Y=()=>{if(!b.current){return}document.body.style.cursor="auto";b.current.style.display="none"};(0,a.useEffect)(()=>{x();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:c.wrapper,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("canvas",{ref:t,width:o,height:i,onMouseDown:_,onMouseMove:y,onMouseUp:w,onMouseEnter:A,onMouseLeave:Y}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{ref:b,css:c.customCursor(l)})]})});var c={wrapper:/*#__PURE__*/(0,i/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",l/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",l/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",l/* .zIndex.highest */.fE.highest,";display:none;")}},54449:function(e,t,r){r.d(t,{A6:()=>v,co:()=>h,i3:()=>f});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(52639);/* import */var i=r(41594);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(78346);/* import */var d=r(12470);/* import */var c=/*#__PURE__*/r.n(d);/* import */var u=r(34092);var f=[(0,d.__)("A serene classroom setting with books and a chalkboard","tutor"),(0,d.__)("An abstract representation of innovation and creativity","tutor"),(0,d.__)("A vibrant workspace with a laptop and coffee cup","tutor"),(0,d.__)("A modern design with digital learning icons","tutor"),(0,d.__)("A futuristic cityscape with a glowing pathway","tutor"),(0,d.__)("A peaceful nature scene with soft colors","tutor"),(0,d.__)("A professional boardroom with sleek visuals","tutor"),(0,d.__)("A stack of books with warm, inviting lighting","tutor"),(0,d.__)("A dynamic collage of technology and education themes","tutor"),(0,d.__)("A bold and minimalistic design with striking colors","tutor")];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var p=/*#__PURE__*/l().createContext(null);var v=()=>{var e=(0,i.useContext)(p);if(!e){throw new Error("useMagicImageGeneration must be used within MagicImageGenerationProvider.")}return e};var h=e=>{var{children:t,field:r,fieldState:l,onCloseModal:d}=e;var c=(0,u/* .useFormWithGlobalError */.p)({defaultValues:{prompt:"",style:"none"}});var[f,v]=(0,i.useState)("generation");var[h,g]=(0,i.useState)("");var[m,b]=(0,i.useState)([null,null,null,null]);var _=(0,i.useCallback)(e=>{v(e)},[]);return/*#__PURE__*/(0,o/* .jsx */.Y)(p.Provider,{value:{state:f,onDropdownMenuChange:_,images:m,setImages:b,currentImage:h,setCurrentImage:g,field:r,fieldState:l,onCloseModal:d},children:/*#__PURE__*/(0,o/* .jsx */.Y)(s/* .FormProvider */.Op,(0,a._)((0,n._)({},c),{children:t}))})}},15296:function(e,t,r){r.d(t,{u:()=>W});/* import */var n=r(93640);/* import */var a=r(41147);/* import */var o=r(14206);/* import */var i=r(52639);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);/* import */var d=r(78346);/* import */var c=r(42771);/* import */var u=r(12470);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(78353);/* import */var v=r(46225);/* import */var h=r(40925);/* import */var g=r(89665);/* import */var m=r(74054);/* import */var b=r(13448);/* import */var _=r(81547);/* import */var y=r(3013);/* import */var w=r(59189);/* import */var x=r(97200);/* import */var A=r(52874);/* import */var Y=r(49842);/* import */var k=r(13190);/* import */var I=r(22286);/* import */var D=r(43623);/* import */var C=r(71801);/* import */var S=r(64613);/* import */var M=r(36265);/* import */var E=r(47035);/* import */var T=r(50861);/* import */var H=r(92895);/* import */var F=r(47719);/* import */var K=r(26371);/* import */var N=r(8031);/* import */var O=r(54449);/* import */var P=r(9815);/* import */var L=r(76657);var R=[{label:(0,u.__)("None","tutor"),value:"none",image:T},{label:(0,u.__)("Photo","tutor"),value:"photo",image:F},{label:(0,u.__)("Neon","tutor"),value:"neon",image:E},{label:(0,u.__)("3D","tutor"),value:"3d",image:k},{label:(0,u.__)("Painting","tutor"),value:"painting",image:H},{label:(0,u.__)("Sketch","tutor"),value:"sketch",image:N},{label:(0,u.__)("Concept","tutor"),value:"concept_art",image:D},{label:(0,u.__)("Illustration","tutor"),value:"illustration",image:M},{label:(0,u.__)("Dreamy","tutor"),value:"dreamy",image:C},{label:(0,u.__)("Filmic","tutor"),value:"filmic",image:S},{label:(0,u.__)("Retro","tutor"),value:"retrowave",image:K},{label:(0,u.__)("Black & White","tutor"),value:"black-and-white",image:I}];var W=()=>{var e=(0,d/* .useForm */.mN)({defaultValues:{style:"none",prompt:""}});var{images:t,setImages:r}=(0,O/* .useMagicImageGeneration */.A6)();var s=(0,x/* .useMagicImageGenerationMutation */.R8)();var{showToast:c}=(0,h/* .useToast */.d)();var[f,b]=(0,l.useState)(t.every(e=>e===null));var[_,A]=(0,l.useState)([false,false,false,false]);var k=e.watch("style");var I=e.watch("prompt");var D=!k||!I;var C=t.some(Y/* .isDefined */.O9);(0,l.useEffect)(()=>{if(s.isError){c({type:"danger",message:s.error.response.data.message})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[s.isError]);(0,l.useEffect)(()=>{e.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("form",{css:L/* .magicAIStyles.wrapper */.C.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){A([true,true,true,true]);b(false);try{yield Promise.all(Array.from({length:4}).map((t,n)=>{return s.mutateAsync(e).then(e=>{r(t=>{var r,a;var o=[...t];var i;o[n]=(i=(a=e.data.data)===null||a===void 0?void 0:(r=a[0])===null||r===void 0?void 0:r.b64_json)!==null&&i!==void 0?i:null;return o});A(e=>{var t=[...e];t[n]=false;return t})}).catch(e=>{A(e=>{var t=[...e];t[n]=false;return t});throw e})}))}catch(e){A([false,false,false,false]);b(true)}})()),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:L/* .magicAIStyles.left */.C.left,children:/*#__PURE__*/(0,i/* .jsx */.Y)(w/* ["default"] */.A,{when:!f,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"magicAiPlaceholder",width:72,height:72}),children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:B.images,children:/*#__PURE__*/(0,i/* .jsx */.Y)(y/* ["default"] */.A,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,i/* .jsx */.Y)(P/* .AiImageItem */.z,{src:e,loading:_[t],index:t},t)}})})})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:L/* .magicAIStyles.right */.C.right,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:B.fields,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:B.promptWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Visualize Your Course","tutor"),placeholder:(0,u.__)("Describe the image you want for your course thumbnail","tutor"),rows:4,isMagicAi:true,disabled:s.isPending,enableResize:false}))}),/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:B.inspireButton,onClick:()=>{var t=O/* .inspirationPrompts.length */.i3.length;var r=Math.floor(Math.random()*t);e.reset((0,o._)((0,a._)({},e.getValues()),{prompt:O/* .inspirationPrompts */.i3[r]}))},disabled:s.isPending,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"bulbLine"}),(0,u.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{control:e.control,name:"style",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Styles","tutor"),options:R,disabled:s.isPending}))})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:L/* .magicAIStyles.rightFooter */.C.rightFooter,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(p/* ["default"] */.A,{type:"submit",disabled:s.isPending||D,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:C?"reload":"magicAi",width:24,height:24}),C?(0,u.__)("Generate Again","tutor"):(0,u.__)("Generate Now","tutor")]})})]})]})};var B={images:/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-template-rows:repeat(2,minmax(150px,1fr));gap:",b/* .spacing["12"] */.YK["12"],";align-self:start;padding:",b/* .spacing["24"] */.YK["24"],";width:100%;height:100%;> div{aspect-ratio:1 / 1;}"),fields:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",b/* .spacing["12"] */.YK["12"],";"),promptWrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;textarea{padding-bottom:",b/* .spacing["40"] */.YK["40"]," !important;}"),inspireButton:/*#__PURE__*/(0,c/* .css */.AH)(A/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",b/* .spacing["12"] */.YK["12"],";left:",b/* .spacing["12"] */.YK["12"],";border:1px solid ",b/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",b/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",b/* .spacing["4"] */.YK["4"],";color:",b/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",b/* .spacing["12"] */.YK["12"],";background-color:",b/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",b/* .colorTokens.background.brand */.I6.background.brand,";color:",b/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",b/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",b/* .colorTokens.background.disable */.I6.background.disable,";color:",b/* .colorTokens.text.disable */.I6.text.disable,";}")}},9815:function(e,t,r){r.d(t,{z:()=>S});/* import */var n=r(93640);/* import */var a=r(60599);/* import */var o=r(52639);/* import */var i=r(41594);/* import */var l=/*#__PURE__*/r.n(i);/* import */var s=r(42771);/* import */var d=r(12470);/* import */var c=/*#__PURE__*/r.n(d);/* import */var u=r(78353);/* import */var f=r(46225);/* import */var p=r(13448);/* import */var v=r(81547);/* import */var h=r(3013);/* import */var g=r(31569);/* import */var m=r(21678);/* import */var b=r(97200);/* import */var _=r(67035);/* import */var y=r(52874);/* import */var w=r(33231);/* import */var x=r(54449);function A(){var e=(0,a._)(["\n      background-position: top left;\n    "]);A=function t(){return e};return e}function Y(){var e=(0,a._)(["\n      background-position: top right;\n      animation-delay: 0.5s;\n    "]);Y=function t(){return e};return e}function k(){var e=(0,a._)(["\n      background-position: bottom left;\n      animation-delay: 1.5s;\n    "]);k=function t(){return e};return e}function I(){var e=(0,a._)(["\n      background-position: bottom right;\n      animation-delay: 1s;\n    "]);I=function t(){return e};return e}function D(){var e=(0,a._)(["\n      outline-color: ",";\n\n      [data-actions] {\n        opacity: 1;\n      }\n    "]);D=function t(){return e};return e}var C=[{label:(0,d.__)("Magic Fill","tutor"),value:"magic-fill",icon:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"magicWand",width:24,height:24})},// @TODO: will be implemented in the future
// {
//   label: __('Object eraser', __TUTOR_TEXT_DOMAIN__),
//   value: 'magic-erase',
//   icon: <SVGIcon name="eraser" width={24} height={24} />,
// },
// {
//   label: __('Variations', __TUTOR_TEXT_DOMAIN__),
//   value: 'variations',
//   icon: <SVGIcon name="reload" width={24} height={24} />,
// },
{label:(0,d.__)("Download","tutor"),value:"download",icon:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"download",width:24,height:24})}];var S=e=>{var{src:t,loading:r,index:a}=e;var l=(0,i.useRef)(null);var[s,c]=(0,i.useState)(false);var{onDropdownMenuChange:p,setCurrentImage:v,onCloseModal:y,field:A}=(0,x/* .useMagicImageGeneration */.A6)();var Y=(0,b/* .useStoreAIGeneratedImageMutation */.ah)();if(r||!t){return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:E.loader(a+1)})}return/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:E.image({isActive:Y.isPending}),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("img",{src:t,alt:(0,d.__)("Generated Image","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{"data-actions":true,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:E.useButton,children:/*#__PURE__*/(0,o/* .jsxs */.FD)(u/* ["default"] */.A,{variant:"primary",disabled:Y.isPending,onClick:()=>(0,n._)(function*(){if(!t){return}var e=yield Y.mutateAsync({image:t});if(e.data){A.onChange(e.data);y()}})(),loading:Y.isPending,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"download",width:24,height:24}),(0,d.__)("Use This","tutor")]})}),/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,{variant:"primary",size:"icon",css:E.threeDots,ref:l,onClick:()=>c(true),children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"threeDotsVertical",width:24,height:24})})]})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{triggerRef:l,isOpen:s,arrow:true,closePopover:()=>{c(false)},animationType:g/* .AnimationType.slideDown */.J6.slideDown,maxWidth:"160px",children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:E.dropdownOptions,children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{each:C,children:(e,r)=>/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:E.dropdownItem,onClick:()=>{switch(e.value){case"magic-fill":{v(t);p(e.value);break}case"download":{var r="".concat((0,w/* .nanoid */.Ak)(),".png");(0,_/* .downloadBase64Image */.JD)(t,r);break}default:break}c(false)},children:[e.icon,e.label]},r)})})})]})};var M=/*#__PURE__*/(0,s/* .keyframes */.i7)("		0%{opacity:0.3;}25%{opacity:0.5;}50%{opacity:0.7;}75%{opacity:0.5;}100%{opacity:0.3;}");var E={loader:e=>/*#__PURE__*/(0,s/* .css */.AH)("border-radius:",p/* .borderRadius["12"] */.Vq["12"],";background:linear-gradient(\n      73.09deg,#ff9645 18.05%,#ff6471 30.25%,#cf6ebd 55.42%,#a477d1 71.66%,#3e64de 97.9%\n    );position:relative;width:100%;height:100%;background-size:612px 612px;opacity:0.3;transition:opacity 0.5s ease;animation:",M," 2s linear infinite;",e===1&&(0,s/* .css */.AH)(A())," ",e===2&&(0,s/* .css */.AH)(Y()),"		",e===3&&(0,s/* .css */.AH)(k()),"		",e===4&&(0,s/* .css */.AH)(I())),image:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("width:100%;height:100%;overflow:hidden;border-radius:",p/* .borderRadius["12"] */.Vq["12"],";position:relative;outline:2px solid transparent;outline-offset:2px;transition:border-radius 0.3s ease;[data-actions]{opacity:0;transition:opacity 0.3s ease;}img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}",t&&(0,s/* .css */.AH)(D(),p/* .colorTokens.stroke.brand */.I6.stroke.brand),"    &:hover,&:focus-within{outline-color:",p/* .colorTokens.stroke.brand */.I6.stroke.brand,";[data-actions]{opacity:1;}}")},threeDots:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;top:",p/* .spacing["8"] */.YK["8"],";right:",p/* .spacing["8"] */.YK["8"],";border-radius:",p/* .borderRadius["4"] */.Vq["4"],";"),useButton:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;left:50%;bottom:",p/* .spacing["12"] */.YK["12"],";transform:translateX(-50%);button{display:inline-flex;align-items:center;gap:",p/* .spacing["4"] */.YK["4"],";}"),dropdownOptions:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;padding-block:",p/* .spacing["8"] */.YK["8"],";"),dropdownItem:/*#__PURE__*/(0,s/* .css */.AH)(v/* .typography.small */.I.small(),";",y/* .styleUtils.resetButton */.x.resetButton,";height:40px;display:flex;gap:",p/* .spacing["10"] */.YK["10"],";align-items:center;transition:background-color 0.3s ease;color:",p/* .colorTokens.text.title */.I6.text.title,";padding-inline:",p/* .spacing["8"] */.YK["8"],";cursor:pointer;svg{color:",p/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background-color:",p/* .colorTokens.background.hover */.I6.background.hover,";}")}},72283:function(e,t,r){r.d(t,{A:()=>H});/* import */var n=r(93640);/* import */var a=r(41147);/* import */var o=r(14206);/* import */var i=r(52639);/* import */var l=r(41594);/* import */var s=/*#__PURE__*/r.n(l);/* import */var d=r(78346);/* import */var c=r(42771);/* import */var u=r(12470);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(78353);/* import */var v=r(94361);/* import */var h=r(46225);/* import */var g=r(15314);/* import */var m=r(74054);/* import */var b=r(13448);/* import */var _=r(81547);/* import */var y=r(59189);/* import */var w=r(44486);/* import */var x=r(34092);/* import */var A=r(97200);/* import */var Y=r(67035);/* import */var k=r(52874);/* import */var I=r(33231);/* import */var D=r(21055);/* import */var C=r(54449);/* import */var S=r(76657);var M=620;var E=620;var T=()=>{var e=(0,x/* .useFormWithGlobalError */.p)({defaultValues:{brush_size:40,prompt:""}});var t=(0,A/* .useMagicFillImageMutation */.wt)();var r=(0,l.useRef)(null);var{onDropdownMenuChange:s,currentImage:f,field:b,onCloseModal:_}=(0,C/* .useMagicImageGeneration */.A6)();var k=(0,A/* .useStoreAIGeneratedImageMutation */.ah)();var T=(0,w/* .useDebounce */.d)(e.watch("brush_size",40));var[H,F]=(0,l.useState)([]);var[N,O]=(0,l.useState)(1);var P=(0,l.useCallback)((e,t)=>{var n;var a=(n=r.current)===null||n===void 0?void 0:n.getContext("2d");if(!a){return}for(var o of t.slice(0,e)){a.putImageData(o,0,0)}},[]);(0,l.useEffect)(()=>{var e;var t=(e=r.current)===null||e===void 0?void 0:e.getContext("2d");if(!t){return}t.lineWidth=T},[T]);(0,l.useEffect)(()=>{var e=e=>{if(e.metaKey){if(e.shiftKey&&e.key.toUpperCase()==="Z"){P(N+1,H);O(e=>Math.min(e+1,H.length));return}if(e.key.toUpperCase()==="Z"){P(N-1,H);O(e=>Math.max(e-1,1));return}}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)}},[N,H,P]);if(!f){return null}return/*#__PURE__*/(0,i/* .jsxs */.FD)("form",{css:S/* .magicAIStyles.wrapper */.C.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){var n=r.current;var a=n===null||n===void 0?void 0:n.getContext("2d");if(!n||!a){return}var o={prompt:e.prompt,image:(0,Y/* .getImageData */.M5)(n)};var i=yield t.mutateAsync(o);if(i){var l=new Image;l.onload=()=>{n.width=M;n.height=E;a.drawImage(l,0,0,n.width,n.height);a.lineWidth=T;a.lineJoin="round";a.lineCap="round"};l.src=i}})()),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:S/* .magicAIStyles.left */.C.left,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:K.leftWrapper,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:K.actionBar,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:K.backButtonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:K.backButton,onClick:()=>s("generation"),children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"arrowLeft"})}),(0,u.__)("Magic Fill","tutor")]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:K.actions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{variant:"ghost",disabled:H.length===0,onClick:()=>{P(1,H);F(H.slice(0,1));O(1)},children:(0,u.__)("Revert to Original","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(v/* .Separator */.w,{variant:"vertical",css:/*#__PURE__*/(0,c/* .css */.AH)("min-height:16px;")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:K.undoRedo,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{variant:"ghost",size:"icon",disabled:N<=1,onClick:()=>{P(N-1,H);O(e=>Math.max(e-1,1))},children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"undo",width:20,height:20})}),/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{variant:"ghost",size:"icon",disabled:N===H.length,onClick:()=>{P(N+1,H);O(e=>Math.min(e+1,H.length))},children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"redo",width:20,height:20})})]})]})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:K.canvasAndLoading,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(D/* .DrawingCanvas */.f,{ref:r,width:M,height:E,src:f,brushSize:T,trackStack:H,pointer:N,setTrackStack:F,setPointer:O}),/*#__PURE__*/(0,i/* .jsx */.Y)(y/* ["default"] */.A,{when:t.isPending,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:K.loading})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:K.footerActions,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:K.footerActionsLeft,children:/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{variant:"secondary",onClick:()=>{var e="".concat((0,I/* .nanoid */.Ak)(),".png");var{canvas:t}=(0,Y/* .getCanvas */.dX)(r);if(!t)return;(0,Y/* .downloadBase64Image */.JD)((0,Y/* .getImageData */.M5)(t),e)},children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"download",width:24,height:24})})})})]})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:S/* .magicAIStyles.right */.C.right,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:K.fields,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{control:e.control,name:"brush_size",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:"Brush Size",min:1,max:100,isMagicAi:true,hasBorder:true}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,(0,o._)((0,a._)({},e),{label:(0,u.__)("Describe the Fill","tutor"),placeholder:(0,u.__)("Write 5 words to describe...","tutor"),rows:4,isMagicAi:true}))})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:[S/* .magicAIStyles.rightFooter */.C.rightFooter,/*#__PURE__*/(0,c/* .css */.AH)("margin-top:auto;")],children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:K.footerButtons,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)(p/* ["default"] */.A,{type:"submit",disabled:t.isPending||!e.watch("prompt"),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,u.__)("Generative Erase","tutor")]}),/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{variant:"primary_outline",disabled:t.isPending,loading:k.isPending,onClick:()=>(0,n._)(function*(){var{canvas:e}=(0,Y/* .getCanvas */.dX)(r);if(!e)return;var t=yield k.mutateAsync({image:(0,Y/* .getImageData */.M5)(e)});if(t.data){b.onChange(t.data);_()}})(),children:(0,u.__)("Use Image","tutor")})]})})]})]})};/* export default */const H=T;var F={loading:/*#__PURE__*/(0,c/* .keyframes */.i7)("0%{opacity:0;}50%{opacity:0.6;}100%{opacity:0;}"),walker:/*#__PURE__*/(0,c/* .keyframes */.i7)("0%{left:0%;}100%{left:100%;}")};var K={canvasAndLoading:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;z-index:",b/* .zIndex.positive */.fE.positive,";"),loading:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:0;left:0;width:100%;height:100%;background:",b/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";opacity:0.6;transition:0.5s ease opacity;animation:",F.loading," 1s linear infinite;z-index:0;&::before{content:'';position:absolute;top:0;left:0;width:200px;height:100%;background:linear-gradient(\n        270deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 51.13%,rgba(255,255,255,0) 100%\n      );animation:",F.walker," 1s linear infinite;}"),actionBar:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),fields:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",b/* .spacing["12"] */.YK["12"],";"),leftWrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",b/* .spacing["8"] */.YK["8"],";padding-block:",b/* .spacing["16"] */.YK["16"],";"),footerButtons:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",b/* .spacing["8"] */.YK["8"],";"),footerActions:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;justify-content:space-between;"),footerActionsLeft:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",b/* .spacing["12"] */.YK["12"],";"),actions:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",b/* .spacing["16"] */.YK["16"],";"),undoRedo:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",b/* .spacing["12"] */.YK["12"],";"),backButtonWrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",b/* .spacing["8"] */.YK["8"],";",_/* .typography.body */.I.body("medium"),";color:",b/* .colorTokens.text.title */.I6.text.title,";"),backButton:/*#__PURE__*/(0,c/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";width:24px;height:24px;border-radius:",b/* .borderRadius["4"] */.Vq["4"],";border:1px solid ",b/* .colorTokens.stroke["default"] */.I6.stroke["default"],";display:flex;align-items:center;justify-content:center;"),image:/*#__PURE__*/(0,c/* .css */.AH)("width:492px;height:498px;position:relative;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}"),canvasWrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",b/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",b/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",b/* .zIndex.highest */.fE.highest,";display:none;")}},76657:function(e,t,r){r.d(t,{C:()=>o});/* import */var n=r(42771);/* import */var a=r(13448);var o={wrapper:/*#__PURE__*/(0,n/* .css */.AH)("min-width:1000px;display:grid;grid-template-columns:1fr 330px;",a/* .Breakpoint.tablet */.EA.tablet,"{min-width:auto;grid-template-columns:1fr;width:100%;}"),left:/*#__PURE__*/(0,n/* .css */.AH)("display:flex;justify-content:center;align-items:center;background-color:#f7f7f7;z-index:",a/* .zIndex.level */.fE.level,";"),right:/*#__PURE__*/(0,n/* .css */.AH)("padding:",a/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;align-items:space-between;z-index:",a/* .zIndex.positive */.fE.positive,";"),rightFooter:/*#__PURE__*/(0,n/* .css */.AH)("display:flex;flex-direction:column;gap:",a/* .spacing["8"] */.YK["8"],";margin-top:auto;padding-top:80px;")}},76023:function(e,t,r){r.d(t,{A:()=>c});/* import */var n=r(52639);/* import */var a=r(54449);/* import */var o=r(15296);/* import */var i=r(72283);/* import */var l=r(4429);function s(){var{state:e}=(0,a/* .useMagicImageGeneration */.A6)();switch(e){case"generation":return/*#__PURE__*/(0,n/* .jsx */.Y)(o/* .ImageGeneration */.u,{});case"magic-fill":return/*#__PURE__*/(0,n/* .jsx */.Y)(i/* ["default"] */.A,{});default:return null}}var d=e=>{var{title:t,icon:r,closeModal:o,field:i,fieldState:d}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)(l/* ["default"] */.A,{onClose:o,title:t,icon:r,maxWidth:1e3,children:/*#__PURE__*/(0,n/* .jsx */.Y)(a/* .MagicImageGenerationProvider */.co,{field:i,fieldState:d,onCloseModal:o,children:/*#__PURE__*/(0,n/* .jsx */.Y)(s,{})})})};/* export default */const c=d},37547:function(e,t,r){r.d(t,{A:()=>b});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var o=r(42771);/* import */var i=r(46225);/* import */var l=r(27246);/* import */var s=r(75823);/* import */var d=r(19393);/* import */var c=r(13448);/* import */var u=r(81547);/* import */var f=r(59189);/* import */var p=r(5387);/* import */var v=r(52874);function h(){var e=(0,n._)(["\n      max-width: 100vw;\n      width: 100vw;\n      height: 100vh;\n      margin-top: ",";\n    "]);h=function t(){return e};return e}function g(){var e=(0,n._)(["\n      height: calc(100% - ","px);\n    "]);g=function t(){return e};return e}var m=e=>{var{children:t,onClose:r,title:n,subtitle:o,icon:d,headerChildren:c,entireHeader:u,actions:v,maxWidth:h=1218,blurTriggerElement:g=true,fullScreen:m=false}=e;(0,p/* .useScrollLock */.K$)();return/*#__PURE__*/(0,a/* .jsx */.Y)(s/* ["default"] */.A,{blurPrevious:g,children:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.container({maxWidth:h,isFullScreen:m}),children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.header({hasHeaderChildren:!!c}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:u,fallback:/*#__PURE__*/(0,a/* .jsxs */.FD)(a/* .Fragment */.FK,{children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.headerContent,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.iconWithTitle,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:d,children:d}),/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,a/* .jsx */.Y)("h6",{css:_.title,title:typeof n==="string"?n:"",children:n})})]}),/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:_.subtitle,children:o})})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.headerChildren,children:/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:c,children:c})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.actionsWrapper,children:/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:v,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)("button",{type:"button",css:_.closeButton,onClick:r,children:/*#__PURE__*/(0,a/* .jsx */.Y)(i/* ["default"] */.A,{name:"times",width:14,height:14})}),children:v})})]}),children:u})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.content({isFullScreen:m}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{children:t})})]})})};/* export default */const b=m;var _={container:e=>{var{maxWidth:t,isFullScreen:r}=e;return/*#__PURE__*/(0,o/* .css */.AH)("position:relative;background:",c/* .colorTokens.background.white */.I6.background.white,";margin:",d/* .modal.MARGIN_TOP */.yl.MARGIN_TOP,"px auto ",c/* .spacing["24"] */.YK["24"],";height:100%;max-width:",t,"px;box-shadow:",c/* .shadow.modal */.r7.modal,";border-radius:",c/* .borderRadius["10"] */.Vq["10"],";overflow:hidden;bottom:0;z-index:",c/* .zIndex.modal */.fE.modal,";width:100%;",r&&(0,o/* .css */.AH)(h(),d/* .WP_ADMIN_BAR_HEIGHT */.I4)," ",c/* .Breakpoint.smallTablet */.EA.smallTablet,"{width:90%;}")},header:e=>{var{hasHeaderChildren:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("display:grid;grid-template-columns:",t?"1fr auto 1fr":"1fr auto auto",";gap:",c/* .spacing["8"] */.YK["8"],";align-items:center;width:100%;height:",d/* .modal.HEADER_HEIGHT */.yl.HEADER_HEIGHT,"px;background:",c/* .colorTokens.background.white */.I6.background.white,";border-bottom:1px solid ",c/* .colorTokens.stroke.divider */.I6.stroke.divider,";position:sticky;")},headerContent:/*#__PURE__*/(0,o/* .css */.AH)("place-self:center start;display:inline-flex;align-items:center;gap:",c/* .spacing["12"] */.YK["12"],";padding-left:",c/* .spacing["24"] */.YK["24"],";",c/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-left:",c/* .spacing["16"] */.YK["16"],";}"),headerChildren:/*#__PURE__*/(0,o/* .css */.AH)("place-self:center center;"),iconWithTitle:/*#__PURE__*/(0,o/* .css */.AH)("display:inline-flex;align-items:center;gap:",c/* .spacing["4"] */.YK["4"],";flex-shrink:0;color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";"),title:/*#__PURE__*/(0,o/* .css */.AH)(u/* .typography.heading6 */.I.heading6("medium"),";color:",c/* .colorTokens.text.title */.I6.text.title,";text-transform:none;letter-spacing:normal;"),subtitle:/*#__PURE__*/(0,o/* .css */.AH)(v/* .styleUtils.text.ellipsis */.x.text.ellipsis(1)," ",u/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";padding-left:",c/* .spacing["12"] */.YK["12"],";border-left:1px solid ",c/* .colorTokens.icon.hints */.I6.icon.hints,";"),actionsWrapper:/*#__PURE__*/(0,o/* .css */.AH)("place-self:center end;display:inline-flex;gap:",c/* .spacing["16"] */.YK["16"],";padding-right:",c/* .spacing["24"] */.YK["24"],";",c/* .Breakpoint.smallMobile */.EA.smallMobile,"{padding-right:",c/* .spacing["16"] */.YK["16"],";}"),closeButton:/*#__PURE__*/(0,o/* .css */.AH)(v/* .styleUtils.resetButton */.x.resetButton,";display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",c/* .borderRadius.circle */.Vq.circle,";background:",c/* .colorTokens.background.white */.I6.background.white,";&:focus,&:active,&:hover{background:",c/* .colorTokens.background.white */.I6.background.white,";}svg{color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",c/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",c/* .shadow.focus */.r7.focus,";}"),content:e=>{var{isFullScreen:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("height:calc(100% - ",d/* .modal.HEADER_HEIGHT */.yl.HEADER_HEIGHT+d/* .modal.MARGIN_TOP */.yl.MARGIN_TOP,"px);background-color:",c/* .colorTokens.surface.courseBuilder */.I6.surface.courseBuilder,";overflow-x:hidden;",v/* .styleUtils.overflowYAuto */.x.overflowYAuto," ",t&&(0,o/* .css */.AH)(g(),d/* .modal.HEADER_HEIGHT */.yl.HEADER_HEIGHT))}}},44486:function(e,t,r){r.d(t,{d:()=>o});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);var o=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,a]=(0,n.useState)(e);(0,n.useEffect)(()=>{var r=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r}},43642:function(e,t,r){r.d(t,{$:()=>s});/* import */var n=r(41147);/* import */var a=r(41594);/* import */var o=/*#__PURE__*/r.n(a);/* import */var i=r(49842);var l={defaultValue:false};var s=e=>{var t=(0,a.useRef)(null);var r=(0,n._)({},l,e);var[o,s]=(0,a.useState)(r.defaultValue);(0,a.useEffect)(()=>{if(!(0,i/* .isDefined */.O9)(t.current)){return}if(t.current.scrollHeight<=t.current.clientHeight){s(false);return}var e=e=>{var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight){s(false);return}s(t.scrollTop>=0)};t.current.addEventListener("scroll",e);return()=>{var r;(r=t.current)===null||r===void 0?void 0:r.removeEventListener("scroll",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.current]);return{ref:t,isScrolling:o}}},87752:function(e,t,r){r.d(t,{j:()=>d});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);var o="data-tutor-motion";var i=()=>{if(typeof document==="undefined"){return null}return document.documentElement.getAttribute(o)};var l=()=>{if(typeof window==="undefined"||!window.matchMedia){return false}return window.matchMedia("(prefers-reduced-motion: reduce)").matches};var s=()=>{var e=i();// Explicit override always wins.
if(e==="reduce")return true;// 'auto' (or unset) defers to the OS/browser setting.
return l()};/**
 * Resolves whether motion should be reduced, honoring:
 * - data-tutor-motion="reduce" on <html>  -> always reduce
 * - data-tutor-motion="auto" (or absent)  -> defer to prefers-reduced-motion
 */var d=()=>{var[e,t]=(0,n.useState)(s);(0,n.useEffect)(()=>{if(typeof window==="undefined"||!window.matchMedia){return}var e=window.matchMedia("(prefers-reduced-motion: reduce)");var r=()=>t(s());r();e.addEventListener("change",r);// In case data-tutor-motion is toggled at runtime (e.g. a settings panel)
var n=new MutationObserver(r);n.observe(document.documentElement,{attributes:true,attributeFilter:[o]});return()=>{e.removeEventListener("change",r);n.disconnect()}},[]);return e}},75532:function(e,t,r){r.d(t,{A:()=>u});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(41594);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(12470);/* import */var s=/*#__PURE__*/r.n(l);/* import */var d=r(40925);var c=e=>{var{options:t={},onChange:r,initialFiles:i}=e;var{showToast:s}=(0,d/* .useToast */.d)();var c=(0,o.useMemo)(()=>i?Array.isArray(i)?i:[i]:[],[i]);var u=(0,o.useMemo)(()=>(0,a._)((0,n._)({},t,t.type?{library:{type:t.type}}:{}),{multiple:t.multiple?t.multiple===true?"add":t.multiple:false}),[t]);var[f,p]=(0,o.useState)(c);(0,o.useEffect)(()=>{if(c&&!f.length){p(c)}},[f,c]);var v=(0,o.useCallback)(()=>{var e;if(!((e=window.wp)===null||e===void 0?void 0:e.media)){// eslint-disable-next-line no-console
console.error("WordPress media library is not available");return}var t=window.wp.media(u);t.on("close",()=>{if(t.$el){t.$el.parent().parent().remove()}});t.on("open",()=>{var e=t.state().get("selection");t.$el.attr("data-focus-trap","true");e.reset();f.forEach(t=>{var r=window.wp.media.attachment(t.id);if(r){r.fetch();e.add(r)}})});t.on("select",()=>{var e=t.state().get("selection").toJSON();var n=new Set(e.map(e=>e.id));var a=f.filter(e=>n.has(e.id));var o=e.reduce((e,t)=>{if(a.some(e=>e.id===t.id)){return e}if(u.maxFileSize&&t.filesizeInBytes>u.maxFileSize){s({// translators: %s is the file title
message:(0,l.sprintf)((0,l.__)("%s size exceeds the maximum allowed size","tutor"),t.title),type:"danger"});return e}var r={id:t.id,title:t.title,url:t.url,name:t.title,size:t.filesizeHumanReadable,size_bytes:t.filesizeInBytes,ext:t.filename.split(".").pop()||""};e.push(r);return e},[]);var i=u.multiple?[...a,...o]:o.slice(0,1);if(u.maxFiles&&i.length>u.maxFiles){s({// translators: %d is the maximum number of files allowed.
message:(0,l.sprintf)((0,l.__)("Cannot select more than %d files","tutor"),u.maxFiles),type:"warning"});return}p(i);r===null||r===void 0?void 0:r(u.multiple?i:i[0]||null);t.close()});t.open()},[u,r,f,s]);var h=(0,o.useCallback)(()=>{p([]);r===null||r===void 0?void 0:r(u.multiple?[]:null)},[u.multiple,r]);return{openMediaLibrary:v,existingFiles:f,resetFiles:h}};/* export default */const u=c},88893:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var o=r(41594);/* import */var i=/*#__PURE__*/r.n(o);/* import */var l=r(42771);/* import */var s=r(13448);/* import */var d=r(52874);function c(){var e=(0,n._)(["\n      flex-direction: column;\n      align-items: start;\n      box-shadow: none;\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n      width: 3px;\n      height: ","px;\n      top: ","px;\n      bottom: auto;\n      border-radius: 0 "," "," 0;\n    "]);u=function t(){return e};return e}function f(){var e=(0,n._)(["\n      width: 100%;\n      border-bottom: 1px solid ",";\n      justify-content: flex-start;\n\n      &:hover,\n      &:focus,\n      &:active {\n        border-bottom: 1px solid ",";\n      }\n    "]);f=function t(){return e};return e}function p(){var e=(0,n._)(["\n      &,\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n\n      & > span {\n        color: ",";\n      }\n\n      & > svg {\n        color: ",";\n      }\n    "]);p=function t(){return e};return e}var v=e=>{var{activeTab:t,onChange:r,tabList:n,orientation:i="horizontal",disabled:l=false,wrapperCss:s}=e;var d=(0,o.useRef)(n.map(()=>/*#__PURE__*/(0,o.createRef)()));var[c,u]=(0,o.useState)();(0,o.useEffect)(()=>{var e=n.reduce((e,t,r)=>{var n,a,o,i;var l=d.current[r];var s={width:((n=l.current)===null||n===void 0?void 0:n.offsetWidth)||0,height:((a=l.current)===null||a===void 0?void 0:a.offsetHeight)||0,left:((o=l.current)===null||o===void 0?void 0:o.offsetLeft)||0,top:((i=l.current)===null||i===void 0?void 0:i.offsetTop)||0};e[t.value]=s;return e},{});u(e)},[n]);return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.container,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:[g.wrapper(i),s],role:"tablist",children:n.map((e,n)=>{return/*#__PURE__*/(0,a/* .jsxs */.FD)("button",{onClick:()=>{r(e.value)},css:g.tabButton({isActive:t===e.value,orientation:i}),disabled:l||e.disabled,type:"button",role:"tab","aria-selected":t===e.value?"true":"false",ref:d.current[n],children:[e.icon,e.label,e.count!==undefined&&/*#__PURE__*/(0,a/* .jsxs */.FD)("span",{children:[" (",e.count<10&&e.count>0?"0".concat(e.count):e.count,")"]}),e.activeBadge&&/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:g.activeBadge})]},n)})}),/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:g.indicator((c===null||c===void 0?void 0:c[t])||{width:0,height:0,left:0,top:0},i)})]})};/* export default */const h=v;var g={container:/*#__PURE__*/(0,l/* .css */.AH)("position:relative;width:100%;"),wrapper:e=>/*#__PURE__*/(0,l/* .css */.AH)("width:100%;display:flex;justify-items:left;align-items:center;flex-wrap:wrap;box-shadow:",s/* .shadow.tabs */.r7.tabs,";",e==="vertical"&&(0,l/* .css */.AH)(c())),indicator:(e,t)=>/*#__PURE__*/(0,l/* .css */.AH)("width:",e.width,"px;height:3px;position:absolute;left:",e.left,"px;bottom:0;background:",s/* .colorTokens.brand.blue */.I6.brand.blue,";border-radius:",s/* .borderRadius["4"] */.Vq["4"]," ",s/* .borderRadius["4"] */.Vq["4"]," 0 0;transition:all 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;:dir(rtl){left:auto;right:",e.left,"px;}",t==="vertical"&&(0,l/* .css */.AH)(u(),e.height,e.top,s/* .borderRadius["4"] */.Vq["4"],s/* .borderRadius["4"] */.Vq["4"])),tabButton:e=>{var{isActive:t,orientation:r}=e;return/*#__PURE__*/(0,l/* .css */.AH)(d/* .styleUtils.resetButton */.x.resetButton,";font-size:",s/* .fontSize["15"] */.J["15"],";line-height:",s/* .lineHeight["20"] */.K_["20"],";display:flex;justify-content:center;align-items:center;gap:",s/* .spacing["6"] */.YK["6"],";padding:",s/* .spacing["12"] */.YK["12"]," ",s/* .spacing["20"] */.YK["20"],";color:",s/* .colorTokens.text.subdued */.I6.text.subdued,";min-width:130px;position:relative;transition:color 0.3s ease-in-out;border-radius:0px;&:hover,&:focus,&:active{background-color:transparent;color:",s/* .colorTokens.text.subdued */.I6.text.subdued,";box-shadow:none;}& > svg{color:",s/* .colorTokens.icon["default"] */.I6.icon["default"],";}",r==="vertical"&&(0,l/* .css */.AH)(f(),s/* .colorTokens.stroke.border */.I6.stroke.border,s/* .colorTokens.stroke.border */.I6.stroke.border)," ",t&&(0,l/* .css */.AH)(p(),s/* .colorTokens.background.white */.I6.background.white,s/* .colorTokens.text.primary */.I6.text.primary,s/* .colorTokens.text.subdued */.I6.text.subdued,s/* .colorTokens.icon.brand */.I6.icon.brand),"    &:disabled{color:",s/* .colorTokens.text.disable */.I6.text.disable,";&::before{background:",s/* .colorTokens.text.disable */.I6.text.disable,";}}&:focus-visible{outline:2px solid ",s/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-2px;border-radius:",s/* .borderRadius["4"] */.Vq["4"],";}")},activeBadge:/*#__PURE__*/(0,l/* .css */.AH)("display:inline-block;height:8px;width:8px;border-radius:",s/* .borderRadius.circle */.Vq.circle,";background-color:",s/* .colorTokens.color.success["80"] */.I6.color.success["80"],";")}},98005:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(17900);/* import */var i=r(60599);/* import */var l=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var c=r(42771);/* import */var u=r(18853);/* import */var f=/*#__PURE__*/r.n(u);/* import */var p=r(46225);/* import */var v=r(13448);/* import */var h=r(81547);/* import */var g=r(31569);/* import */var m=r(84206);/* import */var b=r(52874);/* import */var _=r(21678);function y(){var e=(0,i._)(["\n      padding-block: ",";\n    "]);y=function t(){return e};return e}function w(){var e=(0,i._)(["\n      padding: "," ",";\n      ",";\n    "]);w=function t(){return e};return e}function x(){var e=(0,i._)(["\n      color: ",";\n      svg {\n        color: ",";\n      }\n\n      &:hover:not(:disabled) {\n        color: ",";\n        background-color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n\n      &:active {\n        color: ",";\n        background-color: ",";\n\n        svg {\n          color: ",";\n        }\n      }\n    "]);x=function t(){return e};return e}function A(){var e=(0,i._)(["\n      background-color: ",";\n      svg {\n        color: ",";\n      }\n    "]);A=function t(){return e};return e}function Y(){var e=(0,i._)(["\n      background-color: ",";\n      :hover {\n        background-color: ",";\n        svg {\n          color: ",";\n        }\n      }\n    "]);Y=function t(){return e};return e}var k=e=>{var{text:t,icon:r,onClick:i,onClosePopover:s,isTrash:d=false,size:c="medium",buttonCss:u,disabled:f}=e,p=(0,o._)(e,["text","icon","onClick","onClosePopover","isTrash","size","buttonCss","disabled"]);return/*#__PURE__*/(0,l/* .jsxs */.FD)("button",(0,a._)((0,n._)({type:"button",css:[C.option({isTrash:d,size:c}),u],onClick:e=>{if(i){i(e)}if(s){s()}},disabled:f},p),{children:[r&&r,/*#__PURE__*/(0,l/* .jsx */.Y)("span",{children:t})]}))};var I=e=>{var{onClick:t,isOpen:r,disabled:i=false,closePopover:c,placement:u=m/* .POPOVER_PLACEMENTS.BOTTOM_RIGHT */.zA.BOTTOM_RIGHT,children:f,animationType:v=g/* .AnimationType.slideLeft */.J6.slideLeft,dotsOrientation:h="horizontal",maxWidth:b="148px",isInverse:y=false,arrow:w=false,size:x="medium",closeOnEscape:A=true,wrapperCss:Y}=e,k=(0,o._)(e,["onClick","isOpen","disabled","closePopover","placement","children","animationType","dotsOrientation","maxWidth","isInverse","arrow","size","closeOnEscape","wrapperCss"]);var I=(0,s.useRef)(null);return/*#__PURE__*/(0,l/* .jsxs */.FD)(l/* .Fragment */.FK,{children:[/*#__PURE__*/(0,l/* .jsx */.Y)("button",(0,a._)((0,n._)({type:"button",ref:I,onClick:t,css:[C.button({isOpen:r,isInverse:y,isDisabled:i}),Y],disabled:i},k),{children:/*#__PURE__*/(0,l/* .jsx */.Y)(p/* ["default"] */.A,{name:h==="horizontal"?"threeDots":"threeDotsVertical",width:32,height:32})})),/*#__PURE__*/(0,l/* .jsx */.Y)(_/* ["default"] */.A,{gap:13,maxWidth:b,placement:u,triggerRef:I,isOpen:r,closePopover:c,animationType:v,arrow:w,closeOnEscape:A,children:/*#__PURE__*/(0,l/* .jsx */.Y)("div",{css:C.wrapper({size:x}),children:d().Children.map(f,e=>{if(/*#__PURE__*/d().isValidElement(e)){var t={size:x};return /*#__PURE__*/d().cloneElement(e,t)}return e})})})]})};I.Option=k;/* export default */const D=I;var C={wrapper:e=>{var{size:t="medium"}=e;return/*#__PURE__*/(0,c/* .css */.AH)("padding-block:",v/* .spacing["8"] */.YK["8"],";position:relative;",t==="small"&&(0,c/* .css */.AH)(y(),v/* .spacing["4"] */.YK["4"]))},option:e=>{var{isTrash:t=false,size:r="medium"}=e;return/*#__PURE__*/(0,c/* .css */.AH)(b/* .styleUtils.resetButton */.x.resetButton,";",h/* .typography.body */.I.body(),";width:100%;padding:",v/* .spacing["10"] */.YK["10"]," ",v/* .spacing["20"] */.YK["20"],";transition:background-color 0.3s ease-in-out;cursor:pointer;display:flex;align-items:center;gap:",v/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background:none;color:",v/* .colorTokens.text.primary */.I6.text.primary,";}svg{flex-shrink:0;color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}",r==="small"&&(0,c/* .css */.AH)(w(),v/* .spacing["8"] */.YK["8"],v/* .spacing["16"] */.YK["16"],h/* .typography.small */.I.small("medium")),":hover:not(:disabled){background-color:",v/* .colorTokens.background.hover */.I6.background.hover,";color:",v/* .colorTokens.text.title */.I6.text.title,";svg{color:",v/* .colorTokens.icon.hover */.I6.icon.hover,";filter:grayscale(0%);}}:disabled{cursor:not-allowed;color:",v/* .colorTokens.text.disable */.I6.text.disable,";svg{color:",v/* .colorTokens.icon.disable.background */.I6.icon.disable.background,";}}",t&&(0,c/* .css */.AH)(x(),v/* .colorTokens.text.error */.I6.text.error,v/* .colorTokens.icon.error */.I6.icon.error,v/* .colorTokens.text.error */.I6.text.error,f()(v/* .colorTokens.bg.error */.I6.bg.error,.1),v/* .colorTokens.icon.error */.I6.icon.error,v/* .colorTokens.text.error */.I6.text.error,v/* .colorTokens.color.danger["40"] */.I6.color.danger["40"],v/* .colorTokens.icon.error */.I6.icon.error),":focus-visible{outline:2px solid ",v/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-4px;border-radius:",v/* .borderRadius.input */.Vq.input,";}")},button:e=>{var{isOpen:t=false,isInverse:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(b/* .styleUtils.resetButton */.x.resetButton,";width:32px;height:32px;border-radius:",v/* .borderRadius.circle */.Vq.circle,";display:flex;justify-content:center;align-items:center;transition:background-color 0.3s ease-in-out;svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";flex-shrink:0;}:hover{background-color:",v/* .colorTokens.background.hover */.I6.background.hover,";svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}}&:focus,&:active{background:none;}&:focus-visible{outline:2px solid ",v/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}",t&&(0,c/* .css */.AH)(A(),v/* .colorTokens.background.hover */.I6.background.hover,v/* .colorTokens.icon.brand */.I6.icon.brand)," ",r&&(0,c/* .css */.AH)(Y(),v/* .colorTokens.background.white */.I6.background.white,v/* .colorTokens.background.white */.I6.background.white,!n&&v/* .colorTokens.icon.brand */.I6.icon.brand),":disabled{cursor:not-allowed;}")}}},68677:function(e,t,r){r.d(t,{TM:()=>c,gr:()=>f});/* import */var n=r(41147);/* import */var a=r(37586);/* import */var o=r(19005);/* import */var i=r(32047);/* import */var l=r(77239);/* import */var s=r(94812);var d=e=>{return l/* .wpAjaxInstance.get */.b.get(s/* ["default"].GET_COURSE_LIST */.A.GET_COURSE_LIST,{params:e})};var c=e=>{var{params:t,isEnabled:r}=e;return(0,a/* .useQuery */.I)({queryKey:["PrerequisiteCourses",t],queryFn:()=>d((0,n._)({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:o/* .keepPreviousData */.rX,enabled:r})};var u=e=>{var{courseId:t,builder:r}=e;return l/* .wpAjaxInstance.post */.b.post(s/* ["default"].TUTOR_UNLINK_PAGE_BUILDER */.A.TUTOR_UNLINK_PAGE_BUILDER,{course_id:t,builder:r})};var f=()=>{return(0,i/* .useMutation */.n)({mutationFn:u})};var p=e=>{return wpAjaxInstance.get(endpoints.BUNDLE_LIST,{params:e})};var v=e=>{var{params:t,isEnabled:r}=e;return useQuery({queryKey:["PrerequisiteCourses",t],queryFn:()=>p(_object_spread({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:keepPreviousData,enabled:r})}},66317:function(e,t,r){r.d(t,{J:()=>l,s:()=>s});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var o=r(7697);/* import */var i=r(905);var l=e=>(0,i/* .defaultAnimateLayoutChanges */.uU)((0,a._)((0,n._)({},e),{wasDragging:true}));var s={droppable:{strategy:o/* .MeasuringStrategy.Always */.Pf.Always}}},67035:function(e,t,r){r.d(t,{JD:()=>i,KG:()=>a,M5:()=>d,dX:()=>s,kd:()=>n});function n(e,t){e.lineTo(t.x,t.y);e.stroke()}function a(e,t){var r=t.x-e.x;var n=t.y-e.y;return Math.sqrt(r*r+n*n)}function o(e){var t=atob(e.split(",")[1]);var r=e.split(",")[0].split(":")[1].split(";")[0];var n=new ArrayBuffer(t.length);var a=new Uint8Array(n);for(var o=0;o<t.length;o++){a[o]=t.charCodeAt(o)}return new Blob([n],{type:r})}function i(e,t){var r=o(e);var n=document.createElement("a");n.href=URL.createObjectURL(r);n.download=t;document.body.appendChild(n);n.click();document.body.removeChild(n)}function l(e,t){var r=document.createElement("canvas");r.width=1024;r.height=1024;var n=r.getContext("2d");n===null||n===void 0?void 0:n.putImageData(e,0,0);n===null||n===void 0?void 0:n.drawImage(r,0,0,1024,1024);return new Promise(e=>{r.toBlob(r=>{if(!r){e(null);return}e(new File([r],t,{type:"image/png"}))})})}var s=e=>{if(e&&typeof e!=="function"&&e.current){var t=e.current;var r=t.getContext("2d");return{canvas:t,context:r}}return{canvas:null,context:null}};var d=e=>{return e.toDataURL("image/png")}},73454:function(){/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const e=Symbol.for("constructDateFrom")},30617:function(e,t,r){r.d(t,{B:()=>o});/* import */var n=r(87816);/* import */var a=r(78118);class o extends a/* .TZDateMini */.q{//#region static
static tz(e,...t){return t.length?new o(...t,e):new o(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,a]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${a} (${(0,n/* .tzName */.K)(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new o(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new o(+new Date(e),this.timeZone)}}},78118:function(e,t,r){r.d(t,{q:()=>a});/* import */var n=r(33008);class a extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN((0,n/* .tzOffset */.Y)(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));s(this,NaN);i(this)}}}static tz(e,...t){return t.length?new a(...t,e):new a(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new a(+this,e)}getTimezoneOffset(){const e=-(0,n/* .tzOffset */.Y)(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);i(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new a(+new Date(e),this.timeZone)}}// Assign getters and setters
const o=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!o.test(e))return;const t=e.replace(o,"$1UTC");// Filter out methods without UTC counterparts
if(!a.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
a.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
a.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);l(this);return+this};// Assign UTC setter
a.prototype[t]=function(){Date.prototype[t].apply(this,arguments);i(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function i(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-(0,n/* .tzOffset */.Y)(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function l(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
s(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function s(e){// Save the time zone offset before all the adjustments
const t=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);//#region System DST adjustment
// The biggest problem with using the system time zone is that when we create
// a date from internal values stored in UTC, the system time zone might end
// up on the DST hour:
//
//   $ TZ=America/New_York node
//   > new Date(2020, 2, 8, 1).toString()
//   'Sun Mar 08 2020 01:00:00 GMT-0500 (Eastern Standard Time)'
//   > new Date(2020, 2, 8, 2).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 3).toString()
//   'Sun Mar 08 2020 03:00:00 GMT-0400 (Eastern Daylight Time)'
//   > new Date(2020, 2, 8, 4).toString()
//   'Sun Mar 08 2020 04:00:00 GMT-0400 (Eastern Daylight Time)'
//
// Here we get the same hour for both 2 and 3, because the system time zone
// has DST beginning at 8 March 2020, 2 a.m. and jumps to 3 a.m. So we have
// to adjust the internal date to reflect that.
//
// However we want to adjust only if that's the DST hour the change happenes,
// not the hour where DST moves to.
// We calculate the previous hour to see if the time zone offset has changed
// and we have landed on the DST hour.
const a=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
a.setUTCHours(a.getUTCHours()-1);// Calculate if we are on the system DST hour.
const o=-new Date(+e).getTimezoneOffset();const i=-new Date(+a).getTimezoneOffset();const l=o-i;// Detect the DST shift. System DST change will occur both on
const s=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(l&&s)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+l);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const d=o-r;if(d)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+d);//#endregion
//#region Seconds System diff adjustment
const c=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
c.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=o>0?c.getSeconds():(c.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const f=Math.round(-((0,n/* .tzOffset */.Y)(e.timeZone,e)*60))%60;if(f||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+f);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+f+u)}//#endregion
//#region Post-adjustment DST fix
const p=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const v=p>0?Math.floor(p):Math.ceil(p);const h=-new Date(+e).getTimezoneOffset();const g=h-v;const m=v!==r;const b=g-d;if(m&&b){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+b);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const a=v-r;if(a){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+a)}}//#endregion
}},2832:function(e,t,r){r.d(t,{BB:()=>/* reexport safe */a.B});/* import */var n=r(73454);/* import */var a=r(30617);/* import */var o=r(78118);/* import */var i=r(88351)},88351:function(e,t,r){/* import */var n=r(30617);/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const a=e=>t=>TZDate.tz(e,+new Date(t))},87816:function(e,t,r){r.d(t,{K:()=>n});/**
 * Time zone name format.
 *//**
 * The function returns the time zone name for the given date in the specified
 * time zone.
 *
 * It uses the `Intl.DateTimeFormat` API and by default outputs the time zone
 * name in a long format, e.g. "Pacific Standard Time" or
 * "Singapore Standard Time".
 *
 * It is possible to specify the format as the third argument using one of the following options
 *
 * - "short": e.g. "EDT" or "GMT+8".
 * - "long": e.g. "Eastern Daylight Time".
 * - "shortGeneric": e.g. "ET" or "Singapore Time".
 * - "longGeneric": e.g. "Eastern Time" or "Singapore Standard Time".
 *
 * These options correspond to TR35 tokens `z..zzz`, `zzzz`, `v`, and `vvvv` respectively: https://www.unicode.org/reports/tr35/tr35-dates.html#dfst-zone
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date object to get the time zone name for
 * @param format - Optional format of the time zone name. Defaults to "long". Can be "short", "long", "shortGeneric", or "longGeneric".
 *
 * @returns Time zone name (e.g. "Singapore Standard Time")
 */function n(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")}},33008:function(e,t,r){r.d(t,{Y:()=>o});const n={};const a={};/**
 * The function extracts UTC offset in minutes from the given date in specified
 * time zone.
 *
 * Unlike `Date.prototype.getTimezoneOffset`, this function returns the value
 * mirrored to the sign of the offset in the time zone. For Asia/Singapore
 * (UTC+8), `tzOffset` returns 480, while `getTimezoneOffset` returns -480.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 * @param date - Date to check the offset for
 *
 * @returns UTC offset in minutes
 */function o(e,t){try{const r=n[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const o=r(t).split("GMT")[1];if(o in a)return a[o];return l(o,o.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in a)return a[e];const t=e?.match(i);if(t)return l(e,t.slice(1));return NaN}}const i=/([+-]\d\d):?(\d\d)?/;function l(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const o=+(t[2]||0)/60;return a[e]=r*60+n>0?r*60+n+o:r*60-n-o}},93908:function(e,t,r){r.d(t,{C:()=>i});/* import */var n=r(41594);/* import */var a=r(73276);/* import */var o=r(92965);"use client";// src/useIsFetching.ts
function i(e,t){const r=(0,o/* .useQueryClient */.jE)(t);const i=r.getQueryCache();return n.useSyncExternalStore(n.useCallback(e=>i.subscribe(a/* .notifyManager.batchCalls */.j.batchCalls(e)),[i]),()=>r.isFetching(e),()=>r.isFetching(e))}//# sourceMappingURL=useIsFetching.js.map
},50114:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(75518);function a(e,t){const[r,a]=(0,n/* .normalizeDates */.x)(e,t.start,t.end);return{start:r,end:a}}},56187:function(e,t,r){r.d(t,{f:()=>o});/* import */var n=r(5054);/* import */var a=r(84350);/**
 * The {@link addDays} function options.
 *//**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 * @param options - An object with options
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return o;o.setDate(o.getDate()+t);return o}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},59099:function(e,t,r){r.d(t,{P:()=>o});/* import */var n=r(5054);/* import */var a=r(84350);/**
 * The {@link addMonths} function options.
 *//**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 * @param options - The options object
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return o}const i=o.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const l=(0,n/* .constructFrom */.w)(r?.in||e,o.getTime());l.setMonth(o.getMonth()+t+1,0);const s=l.getDate();if(i>=s){// If we're already at the end of the month, then this is the correct date
// and we're done.
return l}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
o.setFullYear(l.getFullYear(),l.getMonth(),i);return o}}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},46199:function(e,t,r){r.d(t,{J:()=>a});/* import */var n=r(56187);/**
 * The {@link addWeeks} function options.
 *//**
 * @name addWeeks
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of weeks to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param amount - The amount of weeks to be added.
 * @param options - An object with options
 *
 * @returns The new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * const result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */function a(e,t,r){return(0,n/* .addDays */.f)(e,t*7,r)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},19636:function(e,t,r){r.d(t,{e:()=>a});/* import */var n=r(59099);/**
 * The {@link addYears} function options.
 *//**
 * @name addYears
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type.
 *
 * @param date - The date to be changed
 * @param amount - The amount of years to be added.
 * @param options - The options
 *
 * @returns The new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * const result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */function a(e,t,r){return(0,n/* .addMonths */.P)(e,t*12,r)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},9970:function(e,t,r){r.d(t,{U:()=>a});/* import */var n=r(75518);/**
 * The {@link differenceInCalendarMonths} function options.
 *//**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.x)(r?.in,e,t);const i=a.getFullYear()-o.getFullYear();const l=a.getMonth()-o.getMonth();return i*12+l}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},50178:function(e,t,r){r.d(t,{G:()=>i});/* import */var n=r(50114);/* import */var a=r(52575);/* import */var o=r(5054);/**
 * The {@link eachMinuteOfInterval} function options.
 *//**
 * The {@link eachMinuteOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 *//**
 * @name eachMinuteOfInterval
 * @category Interval Helpers
 * @summary Return the array of minutes within the specified time interval.
 *
 * @description
 * Returns the array of minutes within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of minutes from the minute of the interval start to the minute of the interval end
 *
 * @example
 * // Each minute between 14 October 2020, 13:00 and 14 October 2020, 13:03
 * const result = eachMinuteOfInterval({
 *   start: new Date(2014, 9, 14, 13),
 *   end: new Date(2014, 9, 14, 13, 3)
 * })
 * //=> [
 * //   Wed Oct 14 2014 13:00:00,
 * //   Wed Oct 14 2014 13:01:00,
 * //   Wed Oct 14 2014 13:02:00,
 * //   Wed Oct 14 2014 13:03:00
 * // ]
 */function i(e,t){const{start:r,end:i}=(0,n/* .normalizeInterval */.P)(t?.in,e);// Set to the start of the minute
r.setSeconds(0,0);let l=+r>+i;const s=l?+r:+i;let d=l?i:r;let c=t?.step??1;if(!c)return[];if(c<0){c=-c;l=!l}const u=[];while(+d<=s){u.push((0,o/* .constructFrom */.w)(r,d));d=(0,a/* .addMinutes */.z)(d,c)}return l?u.reverse():u}// Fallback for modularized imports:
/* unused export default */var l=/* unused pure expression or super */null&&i},56190:function(e,t,r){r.d(t,{i:()=>o});/* import */var n=r(50114);/* import */var a=r(5054);/**
 * The {@link eachMonthOfInterval} function options.
 *//**
 * The {@link eachMonthOfInterval} function result type. It resolves the proper data type.
 *//**
 * @name eachMonthOfInterval
 * @category Interval Helpers
 * @summary Return the array of months within the specified time interval.
 *
 * @description
 * Return the array of months within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of months from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each month between 6 February 2014 and 10 August 2014:
 * const result = eachMonthOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2014, 7, 10)
 * })
 * //=> [
 * //   Sat Feb 01 2014 00:00:00,
 * //   Sat Mar 01 2014 00:00:00,
 * //   Tue Apr 01 2014 00:00:00,
 * //   Thu May 01 2014 00:00:00,
 * //   Sun Jun 01 2014 00:00:00,
 * //   Tue Jul 01 2014 00:00:00,
 * //   Fri Aug 01 2014 00:00:00
 * // ]
 */function o(e,t){const{start:r,end:o}=(0,n/* .normalizeInterval */.P)(t?.in,e);let i=+r>+o;const l=i?+r:+o;const s=i?o:r;s.setHours(0,0,0,0);s.setDate(1);let d=t?.step??1;if(!d)return[];if(d<0){d=-d;i=!i}const c=[];while(+s<=l){c.push((0,a/* .constructFrom */.w)(r,s));s.setMonth(s.getMonth()+d)}return i?c.reverse():c}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},78307:function(e,t,r){r.d(t,{z:()=>o});/* import */var n=r(50114);/* import */var a=r(5054);/**
 * The {@link eachYearOfInterval} function options.
 *//**
 * The {@link eachYearOfInterval} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 *//**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @typeParam IntervalType - Interval type.
 * @typeParam Options - Options type.
 *
 * @param interval - The interval.
 * @param options - An object with options.
 *
 * @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */function o(e,t){const{start:r,end:o}=(0,n/* .normalizeInterval */.P)(t?.in,e);let i=+r>+o;const l=i?+r:+o;const s=i?o:r;s.setHours(0,0,0,0);s.setMonth(0,1);let d=t?.step??1;if(!d)return[];if(d<0){d=-d;i=!i}const c=[];while(+s<=l){c.push((0,a/* .constructFrom */.w)(r,s));s.setFullYear(s.getFullYear()+d)}return i?c.reverse():c}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},48606:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(547);/**
 * The {@link endOfISOWeek} function options.
 *//**
 * @name endOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * const result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */function a(e,t){return(0,n/* .endOfWeek */.$)(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},17193:function(e,t,r){r.d(t,{p:()=>a});/* import */var n=r(84350);/**
 * The {@link endOfMonth} function options.
 *//**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);const a=r.getMonth();r.setFullYear(r.getFullYear(),a+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},547:function(e,t,r){r.d(t,{$:()=>o});/* import */var n=r(87411);/* import */var a=r(84350);/**
 * The {@link endOfWeek} function options.
 *//**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */function o(e,t){const r=(0,n/* .getDefaultOptions */.q)();const o=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const i=(0,a/* .toDate */.a)(e,t?.in);const l=i.getDay();const s=(l<o?-7:0)+6-(l-o);i.setDate(i.getDate()+s);i.setHours(23,59,59,999);return i}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},66146:function(e,t,r){r.d(t,{Q:()=>a});/* import */var n=r(84350);/**
 * The {@link endOfYear} function options.
 *//**
 * @name endOfYear
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - The options
 *
 * @returns The end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * const result = endOfYear(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Wed Dec 31 2014 23:59:59.999
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);const a=r.getFullYear();r.setFullYear(a+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},92245:function(e,t,r){r.d(t,{P:()=>o});/* import */var n=r(5054);/* import */var a=r(84350);/**
 * The {@link getDaysInMonth} function options.
 *//**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date, considering the context if provided.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */function o(e,t){const r=(0,a/* .toDate */.a)(e,t?.in);const o=r.getFullYear();const i=r.getMonth();const l=(0,n/* .constructFrom */.w)(r,0);l.setFullYear(o,i+1,0);l.setHours(0,0,0,0);return l.getDate()}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},1261:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(84350);/**
 * The {@link getMonth} function options.
 *//**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The month index (0-11)
 *
 * @example
 * // Which month is 29 February 2012?
 * const result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */function a(e,t){return(0,n/* .toDate */.a)(e,t?.in).getMonth()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},14646:function(e,t,r){r.d(t,{C:()=>a});/* import */var n=r(84350);/**
 * The {@link getYear} function options.
 *//**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The year
 *
 * @example
 * // Which year is 2 July 2014?
 * const result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */function a(e,t){return(0,n/* .toDate */.a)(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},74085:function(e,t,r){r.d(t,{d:()=>a});/* import */var n=r(84350);/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */function a(e,t){return+(0,n/* .toDate */.a)(e)>+(0,n/* .toDate */.a)(t)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},13851:function(e,t,r){r.d(t,{r:()=>o});/* import */var n=r(75518);/* import */var a=r(5758);/**
 * The {@link isSameDay} function options.
 *//**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */function o(e,t,r){const[o,i]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return+(0,a/* .startOfDay */.o)(o)===+(0,a/* .startOfDay */.o)(i)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},6903:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(75518);/**
 * The {@link isSameMonth} function options.
 *//**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return a.getFullYear()===o.getFullYear()&&a.getMonth()===o.getMonth()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},39896:function(e,t,r){r.d(t,{s:()=>a});/* import */var n=r(75518);/**
 * The {@link isSameYear} function options.
 *//**
 * @name isSameYear
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param laterDate - The first date to check
 * @param earlierDate - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * const result = isSameYear(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 */function a(e,t,r){const[a,o]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return a.getFullYear()===o.getFullYear()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},8153:function(e,t,r){r.d(t,{T:()=>o});/* import */var n=r(5054);/* import */var a=r(84350);/**
 * The {@link max} function options.
 *//**
 * @name max
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * const result = max([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Sun Jul 02 1995 00:00:00
 */function o(e,t){let r;let o=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!o&&typeof e==="object")o=n/* .constructFrom.bind */.w.bind(null,e);const t=(0,a/* .toDate */.a)(e,o);if(!r||r<t||isNaN(+t))r=t});return(0,n/* .constructFrom */.w)(o,r||NaN)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},98843:function(e,t,r){r.d(t,{j:()=>o});/* import */var n=r(5054);/* import */var a=r(84350);/**
 * The {@link min} function options.
 *//**
 * @name min
 * @category Common Helpers
 * @summary Returns the earliest of the given dates.
 *
 * @description
 * Returns the earliest of the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param dates - The dates to compare
 *
 * @returns The earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * const result = min([
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * ])
 * //=> Wed Feb 11 1987 00:00:00
 */function o(e,t){let r;let o=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!o&&typeof e==="object")o=n/* .constructFrom.bind */.w.bind(null,e);const t=(0,a/* .toDate */.a)(e,o);if(!r||r>t||isNaN(+t))r=t});return(0,n/* .constructFrom */.w)(o,r||NaN)}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},69580:function(e,t,r){r.d(t,{a:()=>a});/* import */var n=r(84350);/**
 * The {@link setHours} function options.
 *//**
 * @name setHours
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param hours - The hours of the new date
 * @param options - An object with options
 *
 * @returns The new date with the hours set
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * const result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */function a(e,t,r){const a=(0,n/* .toDate */.a)(e,r?.in);a.setHours(t);return a}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},98898:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(84350);/**
 * The {@link setMinutes} function options.
 *//**
 * @name setMinutes
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows using extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, returned from the context function, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param minutes - The minutes of the new date
 * @param options - An object with options
 *
 * @returns The new date with the minutes set
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * const result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */function a(e,t,r){const a=(0,n/* .toDate */.a)(e,r?.in);a.setMinutes(t);return a}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},47593:function(e,t,r){r.d(t,{Z:()=>i});/* import */var n=r(5054);/* import */var a=r(92245);/* import */var o=r(84350);/**
 * The {@link setMonth} function options.
 *//**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 * @param options - The options
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */function i(e,t,r){const i=(0,o/* .toDate */.a)(e,r?.in);const l=i.getFullYear();const s=i.getDate();const d=(0,n/* .constructFrom */.w)(r?.in||e,0);d.setFullYear(l,t,15);d.setHours(0,0,0,0);const c=(0,a/* .getDaysInMonth */.P)(d);// Set the earlier date, allows to wrap Jan 31 to Feb 28
i.setMonth(t,Math.min(s,c));return i}// Fallback for modularized imports:
/* unused export default */var l=/* unused pure expression or super */null&&i},58050:function(e,t,r){r.d(t,{i:()=>o});/* import */var n=r(5054);/* import */var a=r(84350);/**
 * The {@link setYear} function options.
 *//**
 * @name setYear
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param date - The date to be changed
 * @param year - The year of the new date
 * @param options - An object with options.
 *
 * @returns The new date with the year set
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * const result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */function o(e,t,r){const o=(0,a/* .toDate */.a)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+o))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);o.setFullYear(t);return o}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&o},910:function(e,t,r){r.d(t,{w:()=>a});/* import */var n=r(84350);/**
 * The {@link startOfMonth} function options.
 *//**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date. The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments.
 * Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed,
 * or inferred from the arguments.
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */function a(e,t){const r=(0,n/* .toDate */.a)(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&a},94906:function(e,t,r){r.d(t,{h:()=>D});/* import */var n=r(41594);/* import */var a=r(14308);/* import */var o=r(30922);/* import */var i=r(36612);/* import */var l=r(76447);/* import */var s=r(47088);/* import */var d=r(52813);/* import */var c=r(143);/* import */var u=r(3591);/* import */var f=r(36004);/* import */var p=r(66220);/* import */var v=r(55223);/* import */var h=r(69811);/* import */var g=r(7332);/* import */var m=r(10782);/* import */var b=r(8755);/* import */var _=r(57391);/* import */var y=r(79209);/* import */var w=r(83237);/* import */var x=r(35055);/* import */var A=r(13854);/* import */var Y=r(79796);/* import */var k=r(14916);/* import */var I=r(45636);/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function D(e){let t=e;const r=t.timeZone;if(r){t={...e,timeZone:r};if(t.today){t.today=(0,k/* .toTimeZone */.v)(t.today,r)}if(t.month){t.month=(0,k/* .toTimeZone */.v)(t.month,r)}if(t.defaultMonth){t.defaultMonth=(0,k/* .toTimeZone */.v)(t.defaultMonth,r)}if(t.startMonth){t.startMonth=(0,k/* .toTimeZone */.v)(t.startMonth,r)}if(t.endMonth){t.endMonth=(0,k/* .toTimeZone */.v)(t.endMonth,r)}if(t.mode==="single"&&t.selected){t.selected=(0,k/* .toTimeZone */.v)(t.selected,r)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>(0,k/* .toTimeZone */.v)(e,r))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?(0,k/* .toTimeZone */.v)(t.selected.from,r):t.selected.from,to:t.selected.to?(0,k/* .toTimeZone */.v)(t.selected.to,r):t.selected.to}}if(t.disabled!==undefined){t.disabled=(0,A/* .convertMatchersToTimeZone */.t)(t.disabled,r)}if(t.hidden!==undefined){t.hidden=(0,A/* .convertMatchersToTimeZone */.t)(t.hidden,r)}if(t.modifiers){const e={};Object.keys(t.modifiers).forEach(n=>{e[n]=(0,A/* .convertMatchersToTimeZone */.t)(t.modifiers?.[n],r)});t.modifiers=e}}const{components:D,formatters:C,labels:S,dateLib:M,locale:E,classNames:T}=(0,n.useMemo)(()=>{const e={...a/* .enUS */.c,...t.locale};const r=new o/* .DateLib */.i0({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:(0,s/* .getComponents */.P)(t.components),formatters:(0,u/* .getFormatters */.G)(t.formatters),labels:{...g,...t.labels},locale:e,classNames:{...(0,c/* .getDefaultClassNames */.a)(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);if(!t.today){t={...t,today:M.today()}}const{captionLayout:H,mode:F,navLayout:K,numberOfMonths:N=1,onDayBlur:O,onDayClick:P,onDayFocus:L,onDayKeyDown:R,onDayMouseEnter:W,onDayMouseLeave:B,onNextClick:z,onPrevClick:U,showWeekNumber:j,styles:q}=t;const{formatCaption:V,formatDay:G,formatMonthDropdown:Q,formatWeekNumber:$,formatWeekNumberHeader:Z,formatWeekdayName:X,formatYearDropdown:J}=C;const ee=(0,_/* .useCalendar */._)(t,M);const{days:et,months:er,navStart:en,navEnd:ea,previousMonth:eo,nextMonth:ei,goToMonth:el}=ee;const es=(0,i/* .createGetModifiers */.x)(et,t,en,ea,M);const{isSelected:ed,select:ec,selected:eu}=(0,x/* .useSelection */.C)(t,M)??{};const{blur:ef,focused:ep,isFocusTarget:ev,moveFocus:eh,setFocused:eg}=(0,w/* .useFocus */.i)(t,ee,es,ed??(()=>false),M);const{labelDayButton:em,labelGridcell:eb,labelGrid:e_,labelMonthDropdown:ey,labelNav:ew,labelPrevious:ex,labelNext:eA,labelWeekday:eY,labelWeekNumber:ek,labelWeekNumberHeader:eI,labelYearDropdown:eD}=S;const eC=(0,n.useMemo)(()=>(0,v/* .getWeekdays */.c)(M,t.ISOWeek,t.broadcastCalendar,t.today),[M,t.ISOWeek,t.broadcastCalendar,t.today]);const eS=F!==undefined||P!==undefined;const eM=(0,n.useCallback)(()=>{if(!eo)return;el(eo);U?.(eo)},[eo,el,U]);const eE=(0,n.useCallback)(()=>{if(!ei)return;el(ei);z?.(ei)},[el,ei,z]);const eT=(0,n.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();eg(e);if(t.disabled){return}ec?.(e.date,t,r);P?.(e.date,t,r)},[ec,P,eg]);const eH=(0,n.useCallback)((e,t)=>r=>{eg(e);L?.(e.date,t,r)},[L,eg]);const eF=(0,n.useCallback)((e,t)=>r=>{ef();O?.(e.date,t,r)},[ef,O]);const eK=(0,n.useCallback)((e,r)=>n=>{const a={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(a[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=a[n.key];eh(e,t)}R?.(e.date,r,n)},[eh,R,t.dir]);const eN=(0,n.useCallback)((e,t)=>r=>{W?.(e.date,t,r)},[W]);const eO=(0,n.useCallback)((e,t)=>r=>{B?.(e.date,t,r)},[B]);const eP=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=M.setMonth(M.startOfMonth(e),r);el(n)},[M,el]);const eL=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=M.setYear(M.startOfMonth(e),r);el(n)},[M,el]);const{className:eR,style:eW}=(0,n.useMemo)(()=>({className:[T[m.UI.Root],t.className].filter(Boolean).join(" "),style:{...q?.[m.UI.Root],...t.style}}),[T,t.className,t.style,q]);const eB=(0,d/* .getDataAttributes */.C)(t);const ez=(0,n.useRef)(null);(0,b/* .useAnimation */.s)(ez,Boolean(t.animate),{classNames:T,months:er,focused:ep,dateLib:M});const eU={dayPickerProps:t,selected:eu,select:ec,isSelected:ed,months:er,nextMonth:ei,previousMonth:eo,goToMonth:el,getModifiers:es,components:D,classNames:T,styles:q,labels:S,formatters:C};return n.createElement(y/* .dayPickerContext.Provider */.S.Provider,{value:eU},n.createElement(D.Root,{rootRef:t.animate?ez:undefined,className:eR,style:eW,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...eB},n.createElement(D.Months,{className:T[m.UI.Months],style:q?.[m.UI.Months]},!t.hideNavigation&&!K&&n.createElement(D.Nav,{"data-animated-nav":t.animate?"true":undefined,className:T[m.UI.Nav],style:q?.[m.UI.Nav],"aria-label":ew(),onPreviousClick:eM,onNextClick:eE,previousMonth:eo,nextMonth:ei}),er.map((e,r)=>{return n.createElement(D.Month,{"data-animated-month":t.animate?"true":undefined,className:T[m.UI.Month],style:q?.[m.UI.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:r,displayIndex:r,calendarMonth:e},K==="around"&&!t.hideNavigation&&r===0&&n.createElement(D.PreviousMonthButton,{type:"button",className:T[m.UI.PreviousMonthButton],tabIndex:eo?undefined:-1,"aria-disabled":eo?undefined:true,"aria-label":ex(eo),onClick:eM,"data-animated-button":t.animate?"true":undefined},n.createElement(D.Chevron,{disabled:eo?undefined:true,className:T[m.UI.Chevron],orientation:t.dir==="rtl"?"right":"left"})),n.createElement(D.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:T[m.UI.MonthCaption],style:q?.[m.UI.MonthCaption],calendarMonth:e,displayIndex:r},H?.startsWith("dropdown")?n.createElement(D.DropdownNav,{className:T[m.UI.Dropdowns],style:q?.[m.UI.Dropdowns]},(()=>{const r=H==="dropdown"||H==="dropdown-months"?n.createElement(D.MonthsDropdown,{key:"month",className:T[m.UI.MonthsDropdown],"aria-label":ey(),classNames:T,components:D,disabled:Boolean(t.disableNavigation),onChange:eP(e.date),options:(0,f/* .getMonthOptions */.L)(e.date,en,ea,C,M),style:q?.[m.UI.Dropdown],value:M.getMonth(e.date)}):n.createElement("span",{key:"month"},Q(e.date,M));const a=H==="dropdown"||H==="dropdown-years"?n.createElement(D.YearsDropdown,{key:"year",className:T[m.UI.YearsDropdown],"aria-label":eD(M.options),classNames:T,components:D,disabled:Boolean(t.disableNavigation),onChange:eL(e.date),options:(0,h/* .getYearOptions */.g)(en,ea,C,M,Boolean(t.reverseYears)),style:q?.[m.UI.Dropdown],value:M.getYear(e.date)}):n.createElement("span",{key:"year"},J(e.date,M));const o=M.getMonthYearOrder()==="year-first"?[a,r]:[r,a];return o})(),n.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},V(e.date,M.options,M))):n.createElement(D.CaptionLabel,{className:T[m.UI.CaptionLabel],role:"status","aria-live":"polite"},V(e.date,M.options,M))),K==="around"&&!t.hideNavigation&&r===N-1&&n.createElement(D.NextMonthButton,{type:"button",className:T[m.UI.NextMonthButton],tabIndex:ei?undefined:-1,"aria-disabled":ei?undefined:true,"aria-label":eA(ei),onClick:eE,"data-animated-button":t.animate?"true":undefined},n.createElement(D.Chevron,{disabled:ei?undefined:true,className:T[m.UI.Chevron],orientation:t.dir==="rtl"?"left":"right"})),r===N-1&&K==="after"&&!t.hideNavigation&&n.createElement(D.Nav,{"data-animated-nav":t.animate?"true":undefined,className:T[m.UI.Nav],style:q?.[m.UI.Nav],"aria-label":ew(),onPreviousClick:eM,onNextClick:eE,previousMonth:eo,nextMonth:ei}),n.createElement(D.MonthGrid,{role:"grid","aria-multiselectable":F==="multiple"||F==="range","aria-label":e_(e.date,M.options,M)||undefined,className:T[m.UI.MonthGrid],style:q?.[m.UI.MonthGrid]},!t.hideWeekdays&&n.createElement(D.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:T[m.UI.Weekdays],style:q?.[m.UI.Weekdays]},j&&n.createElement(D.WeekNumberHeader,{"aria-label":eI(M.options),className:T[m.UI.WeekNumberHeader],style:q?.[m.UI.WeekNumberHeader],scope:"col"},Z()),eC.map(e=>n.createElement(D.Weekday,{"aria-label":eY(e,M.options,M),className:T[m.UI.Weekday],key:String(e),style:q?.[m.UI.Weekday],scope:"col"},X(e,M.options,M)))),n.createElement(D.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:T[m.UI.Weeks],style:q?.[m.UI.Weeks]},e.weeks.map(e=>{return n.createElement(D.Week,{className:T[m.UI.Week],key:e.weekNumber,style:q?.[m.UI.Week],week:e},j&&n.createElement(D.WeekNumber,{week:e,style:q?.[m.UI.WeekNumber],"aria-label":ek(e.weekNumber,{locale:E}),className:T[m.UI.WeekNumber],scope:"row",role:"rowheader"},$(e.weekNumber,M)),e.days.map(e=>{const{date:r}=e;const a=es(e);a[m/* .DayFlag.focused */.pL.focused]=!a.hidden&&Boolean(ep?.isEqualTo(e));a[m/* .SelectionState.selected */.wc.selected]=ed?.(r)||a.selected;if((0,I/* .isDateRange */.oM)(eu)){// add range modifiers
const{from:e,to:t}=eu;a[m/* .SelectionState.range_start */.wc.range_start]=Boolean(e&&t&&M.isSameDay(r,e));a[m/* .SelectionState.range_end */.wc.range_end]=Boolean(e&&t&&M.isSameDay(r,t));a[m/* .SelectionState.range_middle */.wc.range_middle]=(0,Y/* .rangeIncludesDate */.R)(eu,r,true,M)}const o=(0,p/* .getStyleForModifiers */.J)(a,q,t.modifiersStyles);const i=(0,l/* .getClassNamesForModifiers */.k)(a,T,t.modifiersClassNames);const s=!eS&&!a.hidden?eb(r,a,M.options,M):undefined;return n.createElement(D.Day,{key:`${e.isoDate}_${e.displayMonthId}`,day:e,modifiers:a,className:i.join(" "),style:o,role:"gridcell","aria-selected":a.selected||undefined,"aria-label":s,"data-day":e.isoDate,"data-month":e.outside?e.dateMonthId:undefined,"data-selected":a.selected||undefined,"data-disabled":a.disabled||undefined,"data-hidden":a.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":a.focused||undefined,"data-today":a.today||undefined},!a.hidden&&eS?n.createElement(D.DayButton,{className:T[m.UI.DayButton],style:q?.[m.UI.DayButton],type:"button",day:e,modifiers:a,disabled:!a.focused&&a.disabled||undefined,"aria-disabled":a.focused&&a.disabled||undefined,tabIndex:ev(e)?0:-1,"aria-label":em(r,a,M.options,M),onClick:eT(e,a),onBlur:eF(e,a),onFocus:eH(e,a),onKeyDown:eK(e,a),onMouseEnter:eN(e,a),onMouseLeave:eO(e,a)},G(r,M.options,M)):!a.hidden&&G(e.date,M.options,M))}))}))))})),t.footer&&n.createElement(D.Footer,{className:T[m.UI.Footer],style:q?.[m.UI.Footer],role:"status","aria-live":"polite"},t.footer)))}},10782:function(e,t,r){r.d(t,{UI:()=>n,X5:()=>i,pL:()=>a,wc:()=>o});/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var n;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
     * The grid cell with the day's date. Extended by {@link DayFlag} and
     * {@link SelectionState}.
     */e["Day"]="day";/** The button containing the formatted day's date, inside the grid cell. */e["DayButton"]="day_button";/** The caption label of the month (when not showing the dropdown navigation). */e["CaptionLabel"]="caption_label";/** The container of the dropdown navigation (when enabled). */e["Dropdowns"]="dropdowns";/** The dropdown element to select for years and months. */e["Dropdown"]="dropdown";/** The container element of the dropdown. */e["DropdownRoot"]="dropdown_root";/** The root element of the footer. */e["Footer"]="footer";/** The month grid. */e["MonthGrid"]="month_grid";/** Contains the dropdown navigation or the caption label. */e["MonthCaption"]="month_caption";/** The dropdown with the months. */e["MonthsDropdown"]="months_dropdown";/** Wrapper of the month grid. */e["Month"]="month";/** The container of the displayed months. */e["Months"]="months";/** The navigation bar with the previous and next buttons. */e["Nav"]="nav";/**
     * The next month button in the navigation. *
     *
     * @since 9.1.0
     */e["NextMonthButton"]="button_next";/**
     * The previous month button in the navigation.
     *
     * @since 9.1.0
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(n||(n={}));/** Enum representing flags for the {@link UI.Day} element. */var a;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(a||(a={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var o;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(o||(o={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var i;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(i||(i={}))},69133:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(30922);/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class a{constructor(e,t,r=n/* .defaultDateLib */.VA){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r;this.isoDate=r.format(e,"yyyy-MM-dd");this.displayMonthId=r.format(t,"yyyy-MM");this.dateMonthId=r.format(e,"yyyy-MM")}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}}},76465:function(e,t,r){r.d(t,{j:()=>n});/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class n{constructor(e,t){this.date=e;this.weeks=t}}},24971:function(e,t,r){r.d(t,{j:()=>n});/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class n{constructor(e,t){this.days=t;this.weekNumber=e}}},30922:function(e,t,r){r.d(t,{VA:()=>R,i0:()=>L});/* import */var n=r(2832);/* import */var a=r(56187);/* import */var o=r(59099);/* import */var i=r(46199);/* import */var l=r(19636);/* import */var s=r(42878);/* import */var d=r(9970);/* import */var c=r(56190);/* import */var u=r(78307);/* import */var f=r(48606);/* import */var p=r(17193);/* import */var v=r(547);/* import */var h=r(66146);/* import */var g=r(1896);/* import */var m=r(72642);/* import */var b=r(1261);/* import */var _=r(14646);/* import */var y=r(62311);/* import */var w=r(74085);/* import */var x=r(61736);/* import */var A=r(20443);/* import */var Y=r(13851);/* import */var k=r(6903);/* import */var I=r(39896);/* import */var D=r(8153);/* import */var C=r(98843);/* import */var S=r(47593);/* import */var M=r(58050);/* import */var E=r(5758);/* import */var T=r(16925);/* import */var H=r(910);/* import */var F=r(36662);/* import */var K=r(48011);/* import */var N=r(14308);/* import */var O=r(26969);/* import */var P=r(83566);/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class L{/**
     * Creates an instance of `DateLib`.
     *
     * @param options Configuration options for the date library.
     * @param overrides Custom overrides for the date library functions.
     */constructor(e,t){/**
         * Reference to the built-in Date constructor.
         *
         * @deprecated Use `newDate()` or `today()`.
         */this.Date=Date;/**
         * Creates a new `Date` object representing today's date.
         *
         * @since 9.5.0
         * @returns A `Date` object for today's date.
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return n/* .TZDate.tz */.BB.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new n/* .TZDate */.BB(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):(0,a/* .addDays */.f)(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):(0,o/* .addMonths */.P)(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):(0,i/* .addWeeks */.J)(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):(0,l/* .addYears */.e)(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,s/* .differenceInCalendarDays */.m)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):(0,d/* .differenceInCalendarMonths */.U)(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):(0,c/* .eachMonthOfInterval */.i)(e)};/**
         * Returns the years between the given dates.
         *
         * @since 9.11.1
         * @param interval The interval to get the years for.
         * @returns The array of years in the interval.
         */this.eachYearOfInterval=e=>{const t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):(0,u/* .eachYearOfInterval */.z)(e);// Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
// See https://github.com/date-fns/tz/issues/72
const r=new Set(t.map(e=>this.getYear(e)));if(r.size===t.length){// No duplicates, return as is
return t}// Rebuild the array to ensure one date per year
const n=[];r.forEach(e=>{n.push(new Date(e,0,1))});return n};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):(0,O/* .endOfBroadcastWeek */.O)(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):(0,f/* .endOfISOWeek */.g)(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):(0,p/* .endOfMonth */.p)(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):(0,v/* .endOfWeek */.$)(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):(0,h/* .endOfYear */.Q)(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,g/* .format */.GP)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,m/* .getISOWeek */.s)(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):(0,b/* .getMonth */.t)(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):(0,_/* .getYear */.C)(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):(0,y/* .getWeek */.N)(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):(0,w/* .isAfter */.d)(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):(0,x/* .isBefore */.Y)(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):(0,A/* .isDate */.$)(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):(0,Y/* .isSameDay */.r)(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):(0,k/* .isSameMonth */.t)(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):(0,I/* .isSameYear */.s)(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):(0,D/* .max */.T)(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):(0,C/* .min */.j)(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):(0,S/* .setMonth */.Z)(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):(0,M/* .setYear */.i)(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):(0,P/* .startOfBroadcastWeek */.l)(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,E/* .startOfDay */.o)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,T/* .startOfISOWeek */.b)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):(0,H/* .startOfMonth */.w)(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,F/* .startOfWeek */.k)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,K/* .startOfYear */.D)(e)};this.options={locale:N/* .enUS */.c,...e};this.overrides=t}/**
     * Generates a mapping of Arabic digits (0-9) to the target numbering system
     * digits.
     *
     * @since 9.5.0
     * @returns A record mapping Arabic digits to the target numerals.
     */getDigitMap(){const{numerals:e="latn"}=this.options;// Use Intl.NumberFormat to create a formatter with the specified numbering system
const t=new Intl.NumberFormat("en-US",{numberingSystem:e});// Map Arabic digits (0-9) to the target numerals
const r={};for(let e=0;e<10;e++){r[e.toString()]=t.format(e)}return r}/**
     * Replaces Arabic digits in a string with the target numbering system digits.
     *
     * @since 9.5.0
     * @param input The string containing Arabic digits.
     * @returns The string with digits replaced.
     */replaceDigits(e){const t=this.getDigitMap();return e.replace(/\d/g,e=>t[e]||e)}/**
     * Formats a number using the configured numbering system.
     *
     * @since 9.5.0
     * @param value The number to format.
     * @returns The formatted number as a string.
     */formatNumber(e){return this.replaceDigits(e.toString())}/**
     * Returns the preferred ordering for month and year labels for the current
     * locale.
     */getMonthYearOrder(){const e=this.options.locale?.code;if(!e){return"month-first"}return L.yearFirstLocales.has(e)?"year-first":"month-first"}/**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const a=t?.code;if(a&&L.yearFirstLocales.has(a)){try{const t=new Intl.DateTimeFormat(a,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const o=t.format(e);return o}catch{// Fallback to date-fns formatting below.
}}const o=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,o)}}L.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const R=new L;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const W=/* unused pure expression or super */null&&R},3191:function(e,t,r){r.d(t,{$:()=>a});/* import */var n=r(41594);/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function a(e){return n.createElement("button",{...e})}},66403:function(e,t,r){r.d(t,{$:()=>a});/* import */var n=r(41594);/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("span",{...e})}},49412:function(e,t,r){r.d(t,{c:()=>a});/* import */var n=r(41594);/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{size:t=24,orientation:r="left",className:a}=e;return(// biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
n.createElement("svg",{className:a,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&n.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&n.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&n.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&n.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"})))}},92521:function(e,t,r){r.d(t,{L:()=>a});/* import */var n=r(41594);/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{day:t,modifiers:r,...a}=e;return n.createElement("td",{...a})}},64561:function(e,t,r){r.d(t,{x:()=>a});/* import */var n=r(41594);/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{day:t,modifiers:r,...a}=e;const o=n.useRef(null);n.useEffect(()=>{if(r.focused)o.current?.focus()},[r.focused]);return n.createElement("button",{ref:o,...a})}},62266:function(e,t,r){r.d(t,{m:()=>o});/* import */var n=r(41594);/* import */var a=r(10782);/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{options:t,className:r,components:o,classNames:i,...l}=e;const s=[i[a.UI.Dropdown],r].join(" ");const d=t?.find(({value:e})=>e===l.value);return n.createElement("span",{"data-disabled":l.disabled,className:i[a.UI.DropdownRoot]},n.createElement(o.Select,{className:s,...l},t?.map(({value:e,label:t,disabled:r})=>n.createElement(o.Option,{key:e,value:e,disabled:r},t))),n.createElement("span",{className:i[a.UI.CaptionLabel],"aria-hidden":true},d?.label,n.createElement(o.Chevron,{orientation:"down",size:18,className:i[a.UI.Chevron]})))}},70089:function(e,t,r){r.d(t,{z:()=>a});/* import */var n=r(41594);/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}},7012:function(e,t,r){r.d(t,{w:()=>a});/* import */var n=r(41594);/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}},92469:function(e,t,r){r.d(t,{f:()=>a});/* import */var n=r(41594);/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{calendarMonth:t,displayIndex:r,...a}=e;return n.createElement("div",{...a},e.children)}},68819:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(41594);/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{calendarMonth:t,displayIndex:r,...a}=e;return n.createElement("div",{...a})}},55037:function(e,t,r){r.d(t,{D:()=>a});/* import */var n=r(41594);/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("table",{...e})}},43584:function(e,t,r){r.d(t,{i:()=>a});/* import */var n=r(41594);/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("div",{...e})}},95597:function(e,t,r){r.d(t,{l:()=>o});/* import */var n=r(41594);/* import */var a=r(79209);/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Dropdown,{...e})}},53026:function(e,t,r){r.d(t,{s:()=>i});/* import */var n=r(41594);/* import */var a=r(10782);/* import */var o=r(79209);/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{onPreviousClick:t,onNextClick:r,previousMonth:i,nextMonth:l,...s}=e;const{components:d,classNames:c,labels:{labelPrevious:u,labelNext:f}}=(0,o/* .useDayPicker */.w)();const p=(0,n.useCallback)(e=>{if(l){r?.(e)}},[l,r]);const v=(0,n.useCallback)(e=>{if(i){t?.(e)}},[i,t]);return n.createElement("nav",{...s},n.createElement(d.PreviousMonthButton,{type:"button",className:c[a.UI.PreviousMonthButton],tabIndex:i?undefined:-1,"aria-disabled":i?undefined:true,"aria-label":u(i),onClick:v},n.createElement(d.Chevron,{disabled:i?undefined:true,className:c[a.UI.Chevron],orientation:"left"})),n.createElement(d.NextMonthButton,{type:"button",className:c[a.UI.NextMonthButton],tabIndex:l?undefined:-1,"aria-disabled":l?undefined:true,"aria-label":f(l),onClick:p},n.createElement(d.Chevron,{disabled:l?undefined:true,orientation:"right",className:c[a.UI.Chevron]})))}},36170:function(e,t,r){r.d(t,{i:()=>o});/* import */var n=r(41594);/* import */var a=r(79209);/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Button,{...e})}},92142:function(e,t,r){r.d(t,{c:()=>a});/* import */var n=r(41594);/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("option",{...e})}},83673:function(e,t,r){r.d(t,{u:()=>o});/* import */var n=r(41594);/* import */var a=r(79209);/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Button,{...e})}},96291:function(e,t,r){r.d(t,{b:()=>a});/* import */var n=r(41594);/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{rootRef:t,...r}=e;return n.createElement("div",{...r,ref:t})}},53267:function(e,t,r){r.d(t,{l:()=>a});/* import */var n=r(41594);/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("select",{...e})}},36207:function(e,t,r){r.d(t,{j:()=>a});/* import */var n=r(41594);/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{week:t,...r}=e;return n.createElement("tr",{...r})}},66234:function(e,t,r){r.d(t,{u:()=>a});/* import */var n=r(41594);/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){const{week:t,...r}=e;return n.createElement("th",{...r})}},1139:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(41594);/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("th",{...e})}},5133:function(e,t,r){r.d(t,{B:()=>a});/* import */var n=r(41594);/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("th",{...e})}},17096:function(e,t,r){r.d(t,{S:()=>a});/* import */var n=r(41594);/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("thead",{"aria-hidden":true},n.createElement("tr",{...e}))}},12266:function(e,t,r){r.d(t,{m:()=>a});/* import */var n=r(41594);/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("tbody",{...e})}},95528:function(e,t,r){r.d(t,{w:()=>o});/* import */var n=r(41594);/* import */var a=r(79209);/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Dropdown,{...e})}},63869:function(e,t,r){r.r(t);r.d(t,{Button:()=>/* reexport safe */n.$,CaptionLabel:()=>/* reexport safe */a.$,Chevron:()=>/* reexport safe */o.c,Day:()=>/* reexport safe */i.L,DayButton:()=>/* reexport safe */l.x,Dropdown:()=>/* reexport safe */s.m,DropdownNav:()=>/* reexport safe */d.z,Footer:()=>/* reexport safe */c.w,Month:()=>/* reexport safe */u.f,MonthCaption:()=>/* reexport safe */f.P,MonthGrid:()=>/* reexport safe */p.D,Months:()=>/* reexport safe */v.i,MonthsDropdown:()=>/* reexport safe */h.l,Nav:()=>/* reexport safe */g.s,NextMonthButton:()=>/* reexport safe */m.i,Option:()=>/* reexport safe */b.c,PreviousMonthButton:()=>/* reexport safe */_.u,Root:()=>/* reexport safe */y.b,Select:()=>/* reexport safe */w.l,Week:()=>/* reexport safe */x.j,WeekNumber:()=>/* reexport safe */k.u,WeekNumberHeader:()=>/* reexport safe */I.t,Weekday:()=>/* reexport safe */A.B,Weekdays:()=>/* reexport safe */Y.S,Weeks:()=>/* reexport safe */D.m,YearsDropdown:()=>/* reexport safe */C.w});/* import */var n=r(3191);/* import */var a=r(66403);/* import */var o=r(49412);/* import */var i=r(92521);/* import */var l=r(64561);/* import */var s=r(62266);/* import */var d=r(70089);/* import */var c=r(7012);/* import */var u=r(92469);/* import */var f=r(68819);/* import */var p=r(55037);/* import */var v=r(43584);/* import */var h=r(95597);/* import */var g=r(53026);/* import */var m=r(36170);/* import */var b=r(92142);/* import */var _=r(83673);/* import */var y=r(96291);/* import */var w=r(53267);/* import */var x=r(36207);/* import */var A=r(5133);/* import */var Y=r(17096);/* import */var k=r(66234);/* import */var I=r(1139);/* import */var D=r(12266);/* import */var C=r(95528)},50075:function(e,t,r){r.d(t,{G:()=>o,w:()=>a});/* import */var n=r(30922);/**
 * Formats the caption of the month.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param month The date representing the month.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted caption as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){const a=r??new n/* .DateLib */.i0(t);return a.formatMonthYear(e)}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const o=a},15143:function(e,t,r){r.d(t,{i:()=>a});/* import */var n=r(30922);/**
 * Formats the day date shown in the day cell.
 *
 * @defaultValue `d` (e.g., "1").
 * @param date The date to format.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted day as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.i0(t)).format(e,"d")}},90970:function(e,t,r){r.d(t,{Z:()=>a});/* import */var n=r(30922);/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.VA){return t.format(e,"LLLL")}},93712:function(e,t,r){r.d(t,{n:()=>a});/* import */var n=r(30922);/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.VA){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)}},61189:function(e,t,r){r.d(t,{U:()=>n});/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function n(){return``}},40812:function(e,t,r){r.d(t,{Z:()=>a});/* import */var n=r(30922);/**
 * Formats the name of a weekday to be displayed in the weekdays header.
 *
 * @defaultValue `cccccc` (e.g., "Mo" for Monday).
 * @param weekday The date representing the weekday.
 * @param options Configuration options for the date library.
 * @param dateLib The date library to use for formatting. If not provided, a new
 *   instance is created.
 * @returns The formatted weekday name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t,r){return(r??new n/* .DateLib */.i0(t)).format(e,"cccccc")}},93369:function(e,t,r){r.d(t,{D:()=>o,e:()=>a});/* import */var n=r(30922);/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function a(e,t=n/* .defaultDateLib */.VA){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const o=a},61032:function(e,t,r){r.r(t);r.d(t,{formatCaption:()=>/* reexport safe */n.w,formatDay:()=>/* reexport safe */a.i,formatMonthCaption:()=>/* reexport safe */n.G,formatMonthDropdown:()=>/* reexport safe */o.Z,formatWeekNumber:()=>/* reexport safe */l.n,formatWeekNumberHeader:()=>/* reexport safe */s.U,formatWeekdayName:()=>/* reexport safe */i.Z,formatYearCaption:()=>/* reexport safe */d.D,formatYearDropdown:()=>/* reexport safe */d.e});/* import */var n=r(50075);/* import */var a=r(15143);/* import */var o=r(90970);/* import */var i=r(40812);/* import */var l=r(93712);/* import */var s=r(61189);/* import */var d=r(93369)},83803:function(e,t,r){r.d(t,{A:()=>i});/* import */var n=r(10782);var a;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(a||(a={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function o(e){return!e[n/* .DayFlag.disabled */.pL.disabled]&&!e[n/* .DayFlag.hidden */.pL.hidden]&&!e[n/* .DayFlag.outside */.pL.outside]}/**
 * Calculates the focus target day based on priority.
 *
 * This function determines the day that should receive focus in the calendar,
 * prioritizing days with specific modifiers (e.g., "focused", "today") or
 * selection states.
 *
 * @param days The array of `CalendarDay` objects to evaluate.
 * @param getModifiers A function to retrieve the modifiers for a given day.
 * @param isSelected A function to determine if a day is selected.
 * @param lastFocused The last focused day, if any.
 * @returns The `CalendarDay` that should receive focus, or `undefined` if no
 *   focusable day is found.
 */function i(e,t,r,i){let l;let s=-1;for(const d of e){const e=t(d);if(o(e)){if(e[n/* .DayFlag.focused */.pL.focused]&&s<a.FocusedModifier){l=d;s=a.FocusedModifier}else if(i?.isEqualTo(d)&&s<a.LastFocused){l=d;s=a.LastFocused}else if(r(d.date)&&s<a.Selected){l=d;s=a.Selected}else if(e[n/* .DayFlag.today */.pL.today]&&s<a.Today){l=d;s=a.Today}}}if(!l){// Return the first day that is focusable
l=e.find(e=>o(t(e)))}return l}},36612:function(e,t,r){r.d(t,{x:()=>o});/* import */var n=r(10782);/* import */var a=r(9723);/**
 * Creates a function to retrieve the modifiers for a given day.
 *
 * This function calculates both internal and custom modifiers for each day
 * based on the provided calendar days and DayPicker props.
 *
 * @private
 * @param days The array of `CalendarDay` objects to process.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A function that retrieves the modifiers for a given `CalendarDay`.
 */function o(e,t,r,o,i){const{disabled:l,hidden:s,modifiers:d,showOutsideDays:c,broadcastCalendar:u,today:f=i.today()}=t;const{isSameDay:p,isSameMonth:v,startOfMonth:h,isBefore:g,endOfMonth:m,isAfter:b}=i;const _=r&&h(r);const y=o&&m(o);const w={[n/* .DayFlag.focused */.pL.focused]:[],[n/* .DayFlag.outside */.pL.outside]:[],[n/* .DayFlag.disabled */.pL.disabled]:[],[n/* .DayFlag.hidden */.pL.hidden]:[],[n/* .DayFlag.today */.pL.today]:[]};const x={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!v(e,r));const o=Boolean(_&&g(e,_));const h=Boolean(y&&b(e,y));const m=Boolean(l&&(0,a/* .dateMatchModifiers */.k)(e,l,i));const A=Boolean(s&&(0,a/* .dateMatchModifiers */.k)(e,s,i))||o||h||// Broadcast calendar will show outside days as default
!u&&!c&&n||u&&c===false&&n;const Y=p(e,f);if(n)w.outside.push(t);if(m)w.disabled.push(t);if(A)w.hidden.push(t);if(Y)w.today.push(t);// Add custom modifiers
if(d){Object.keys(d).forEach(r=>{const n=d?.[r];const o=n?(0,a/* .dateMatchModifiers */.k)(e,n,i):false;if(!o)return;if(x[r]){x[r].push(t)}else{x[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[n/* .DayFlag.focused */.pL.focused]:false,[n/* .DayFlag.disabled */.pL.disabled]:false,[n/* .DayFlag.hidden */.pL.hidden]:false,[n/* .DayFlag.outside */.pL.outside]:false,[n/* .DayFlag.today */.pL.today]:false};const r={};// Find the modifiers for the given day
for(const r in w){const n=w[r];t[r]=n.some(t=>t===e)}for(const t in x){r[t]=x[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}}},26969:function(e,t,r){r.d(t,{O:()=>o});/* import */var n=r(1425);/* import */var a=r(83566);/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function o(e,t){const r=(0,a/* .startOfBroadcastWeek */.l)(e,t);const o=(0,n/* .getBroadcastWeeksInMonth */.I)(e,t);const i=t.addDays(r,o*7-1);return i}},1425:function(e,t,r){r.d(t,{I:()=>o});const n=5;const a=4;/**
 * Returns the number of weeks to display in the broadcast calendar for a given
 * month.
 *
 * The broadcast calendar may have either 4 or 5 weeks in a month, depending on
 * the start and end dates of the broadcast weeks.
 *
 * @since 9.4.0
 * @param month The month for which to calculate the number of weeks.
 * @param dateLib The date library to use for date manipulation.
 * @returns The number of weeks in the broadcast calendar (4 or 5).
 */function o(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const o=r.getDay()>0?r.getDay():7;const i=t.addDays(e,-o+1);const l=t.addDays(i,n*7-1);const s=t.getMonth(e)===t.getMonth(l)?n:a;return s}},76447:function(e,t,r){r.d(t,{k:()=>a});/* import */var n=r(10782);/**
 * Returns the class names for a day based on its modifiers.
 *
 * This function combines the base class name for the day with any class names
 * associated with active modifiers.
 *
 * @param modifiers The modifiers applied to the day.
 * @param classNames The base class names for the calendar elements.
 * @param modifiersClassNames The class names associated with specific
 *   modifiers.
 * @returns An array of class names for the day.
 */function a(e,t,r={}){const o=Object.entries(e).filter(([,e])=>e===true).reduce((e,[a])=>{if(r[a]){e.push(r[a])}else if(t[n/* .DayFlag */.pL[a]]){e.push(t[n/* .DayFlag */.pL[a]])}else if(t[n/* .SelectionState */.wc[a]]){e.push(t[n/* .SelectionState */.wc[a]])}return e},[t[n.UI.Day]]);return o}},47088:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(63869);/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function a(e){return{...n,...e}}},52813:function(e,t,r){r.d(t,{C:()=>n});/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function n(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t}},4047:function(e,t,r){r.d(t,{Y:()=>n});/**
 * Returns all the dates to display in the calendar.
 *
 * This function calculates the range of dates to display based on the provided
 * display months, constraints, and calendar configuration.
 *
 * @param displayMonths The months to display in the calendar.
 * @param maxDate The maximum date to include in the range.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates to display in the calendar.
 */function n(e,t,r,n){const a=e[0];const o=e[e.length-1];const{ISOWeek:i,fixedWeeks:l,broadcastCalendar:s}=r??{};const{addDays:d,differenceInCalendarDays:c,differenceInCalendarMonths:u,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:v,endOfWeek:h,isAfter:g,startOfBroadcastWeek:m,startOfISOWeek:b,startOfWeek:_}=n;const y=s?m(a,n):i?b(a):_(a);const w=s?f(o):i?p(v(o)):h(v(o));// If maxDate is set, clamp the grid to the end of that week.
const x=t&&(s?f(t):i?p(t):h(t));// Pick the earliest week end between the displayed months and the constraint.
const A=x&&g(w,x)?x:w;const Y=c(A,y);const k=u(o,a)+1;const I=[];for(let e=0;e<=Y;e++){const t=d(y,e);I.push(t)}// If fixed weeks is enabled, add the extra dates to the array
const D=s?35:42;const C=D*k;if(l&&I.length<C){const e=C-I.length;for(let t=0;t<e;t++){const e=d(I[I.length-1],1);I.push(e)}}return I}},73495:function(e,t,r){r.d(t,{_:()=>n});/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function n(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return e.concat(t.days.slice())},t.slice());return e.concat(n.slice())},t.slice())}},143:function(e,t,r){r.d(t,{a:()=>a});/* import */var n=r(10782);/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function a(){const e={};for(const t in n.UI){e[n.UI[t]]=`rdp-${n.UI[t]}`}for(const t in n/* .DayFlag */.pL){e[n/* .DayFlag */.pL[t]]=`rdp-${n/* .DayFlag */.pL[t]}`}for(const t in n/* .SelectionState */.wc){e[n/* .SelectionState */.wc[t]]=`rdp-${n/* .SelectionState */.wc[t]}`}for(const t in n/* .Animation */.X5){e[n/* .Animation */.X5[t]]=`rdp-${n/* .Animation */.X5[t]}`}return e}},26511:function(e,t,r){r.d(t,{o:()=>n});/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function n(e,t,r,n){const{numberOfMonths:a=1}=r;const o=[];for(let r=0;r<a;r++){const a=n.addMonths(e,r);if(t&&a>t){break}o.push(a)}return o}},81790:function(e,t,r){r.d(t,{l:()=>n});/**
 * Calculates the next date that should be focused in the calendar.
 *
 * This function determines the next focusable date based on the movement
 * direction, constraints, and calendar configuration.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDate The reference date from which to calculate the next focusable
 *   date.
 * @param navStart The earliest date the user can navigate to.
 * @param navEnd The latest date the user can navigate to.
 * @param props The DayPicker props, including calendar configuration options.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next focusable date.
 */function n(e,t,r,n,a,o,i){const{ISOWeek:l,broadcastCalendar:s}=o;const{addDays:d,addMonths:c,addWeeks:u,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:v,endOfWeek:h,max:g,min:m,startOfBroadcastWeek:b,startOfISOWeek:_,startOfWeek:y}=i;const w={day:d,week:u,month:c,year:f,startOfWeek:e=>s?b(e,i):l?_(e):y(e),endOfWeek:e=>s?p(e):l?v(e):h(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=g([n,x])}else if(t==="after"&&a){x=m([a,x])}return x}},3591:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(61032);/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function a(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...n,...e}}},1102:function(e,t,r){r.d(t,{Z:()=>n});/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function n(e,t,r,n){const{month:a,defaultMonth:o,today:i=n.today(),numberOfMonths:l=1}=e;let s=a||o||i;const{differenceInCalendarMonths:d,addMonths:c,startOfMonth:u}=n;if(r&&d(r,s)<l-1){const e=-1*(l-1);s=c(r,e)}if(t&&d(s,t)<0){s=t}return u(s)}},36004:function(e,t,r){r.d(t,{L:()=>n});/**
 * Returns the months to show in the dropdown.
 *
 * This function generates a list of months for the current year, formatted
 * using the provided formatter, and determines whether each month should be
 * disabled based on the navigation range.
 *
 * @param displayMonth The currently displayed month.
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the month labels.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dropdown options representing the months, or `undefined`
 *   if no months are available.
 */function n(e,t,r,n,a){const{startOfMonth:o,startOfYear:i,endOfYear:l,eachMonthOfInterval:s,getMonth:d}=a;const c=s({start:i(e),end:l(e)});const u=c.map(e=>{const i=n.formatMonthDropdown(e,a);const l=d(e);const s=t&&e<o(t)||r&&e>o(r)||false;return{value:l,label:i,disabled:s}});return u}},59807:function(e,t,r){r.d(t,{S:()=>i});/* import */var n=r(69133);/* import */var a=r(24971);/* import */var o=r(76465);/**
 * Returns the months to display in the calendar.
 *
 * This function generates `CalendarMonth` objects for each month to be
 * displayed, including their weeks and days, based on the provided display
 * months and dates.
 *
 * @param displayMonths The months (as dates) to display in the calendar.
 * @param dates The dates to display in the calendar.
 * @param props Options from the DayPicker props context.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of `CalendarMonth` objects representing the months to
 *   display.
 */function i(e,t,r,i){const{addDays:l,endOfBroadcastWeek:s,endOfISOWeek:d,endOfMonth:c,endOfWeek:u,getISOWeek:f,getWeek:p,startOfBroadcastWeek:v,startOfISOWeek:h,startOfWeek:g}=i;const m=e.reduce((e,m)=>{const b=r.broadcastCalendar?v(m,i):r.ISOWeek?h(m):g(m);const _=r.broadcastCalendar?s(m):r.ISOWeek?d(c(m)):u(c(m));/** The dates to display in the month. */const y=t.filter(e=>{return e>=b&&e<=_});const w=r.broadcastCalendar?35:42;if(r.fixedWeeks&&y.length<w){const e=t.filter(e=>{const t=w-y.length;return e>_&&e<=l(_,t)});y.push(...e)}const x=y.reduce((e,t)=>{const o=r.ISOWeek?f(t):p(t);const l=e.find(e=>e.weekNumber===o);const s=new n/* .CalendarDay */.P(t,m,i);if(!l){e.push(new a/* .CalendarWeek */.j(o,[s]))}else{l.days.push(s)}return e},[]);const A=new o/* .CalendarMonth */.j(m,x);e.push(A);return e},[]);if(!r.reverseMonths){return m}else{return m.reverse()}}},61921:function(e,t,r){r.d(t,{J:()=>n});/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function n(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:o,startOfMonth:i,endOfMonth:l,addYears:s,endOfYear:d,newDate:c,today:u}=t;// Handle deprecated code
const{fromYear:f,toYear:p,fromMonth:v,toMonth:h}=e;if(!r&&v){r=v}if(!r&&f){r=t.newDate(f,0,1)}if(!n&&h){n=h}if(!n&&p){n=c(p,11,31)}const g=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=i(r)}else if(f){r=c(f,0,1)}else if(!r&&g){r=a(s(e.today??u(),-100))}if(n){n=l(n)}else if(p){n=c(p,11,31)}else if(!n&&g){n=d(e.today??u())}return[r?o(r):r,n?o(n):n]}},44917:function(e,t,r){r.d(t,{O:()=>i});/* import */var n=r(69133);/* import */var a=r(9723);/* import */var o=r(81790);/**
 * Determines the next focusable day in the calendar.
 *
 * This function recursively calculates the next focusable day based on the
 * movement direction and modifiers applied to the days.
 *
 * @param moveBy The unit of movement (e.g., "day", "week").
 * @param moveDir The direction of movement ("before" or "after").
 * @param refDay The currently focused day.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including modifiers and configuration
 *   options.
 * @param dateLib The date library to use for date manipulation.
 * @param attempt The current recursion attempt (used to limit recursion depth).
 * @returns The next focusable day, or `undefined` if no focusable day is found.
 */function i(e,t,r,l,s,d,c,u=0){if(u>365){// Limit the recursion to 365 attempts
return undefined}const f=(0,o/* .getFocusableDate */.l)(e,t,r.date,l,s,d,c);const p=Boolean(d.disabled&&(0,a/* .dateMatchModifiers */.k)(f,d.disabled,c));const v=Boolean(d.hidden&&(0,a/* .dateMatchModifiers */.k)(f,d.hidden,c));const h=f;const g=new n/* .CalendarDay */.P(f,h,c);if(!p&&!v){return g}// Recursively attempt to find the next focusable date
return i(e,t,g,l,s,d,c,u+1)}},66847:function(e,t,r){r.d(t,{Q:()=>n});/**
 * Returns the next month the user can navigate to, based on the given options.
 *
 * The next month is not always the next calendar month:
 *
 * - If it is after the `calendarEndMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips forward by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The next month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:o=1}=r;const{startOfMonth:i,addMonths:l,differenceInCalendarMonths:s}=n;const d=a?o:1;const c=i(e);if(!t){return l(c,d)}const u=s(t,e);if(u<o){return undefined}return l(c,d)}},70267:function(e,t,r){r.d(t,{E:()=>n});/**
 * Returns the previous month the user can navigate to, based on the given
 * options.
 *
 * The previous month is not always the previous calendar month:
 *
 * - If it is before the `calendarStartMonth`, it returns `undefined`.
 * - If paged navigation is enabled, it skips back by the number of displayed
 *   months.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarStartMonth The earliest month the user can navigate to.
 * @param options Navigation options, including `numberOfMonths` and
 *   `pagedNavigation`.
 * @param dateLib The date library to use for date manipulation.
 * @returns The previous month, or `undefined` if navigation is not possible.
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:o}=r;const{startOfMonth:i,addMonths:l,differenceInCalendarMonths:s}=n;const d=a?o??1:1;const c=i(e);if(!t){return l(c,-d)}const u=s(c,t);if(u<=0){return undefined}return l(c,-d)}},66220:function(e,t,r){r.d(t,{J:()=>a});/* import */var n=r(10782);/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function a(e,t={},r={}){let o={...t?.[n.UI.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{o={...o,...r?.[e]}});return o}},55223:function(e,t,r){r.d(t,{c:()=>n});/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function n(e,t,r,n){const a=n??e.today();const o=r?e.startOfBroadcastWeek(a,e):t?e.startOfISOWeek(a):e.startOfWeek(a);const i=[];for(let t=0;t<7;t++){const r=e.addDays(o,t);i.push(r)}return i}},32923:function(e,t,r){r.d(t,{C:()=>n});/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function n(e){const t=[];return e.reduce((e,t)=>{return e.concat(t.weeks.slice())},t.slice())}},69811:function(e,t,r){r.d(t,{g:()=>n});/**
 * Returns the years to display in the dropdown.
 *
 * This function generates a list of years between the navigation start and end
 * dates, formatted using the provided formatter.
 *
 * @param navStart The start date for navigation.
 * @param navEnd The end date for navigation.
 * @param formatters The formatters to use for formatting the year labels.
 * @param dateLib The date library to use for date manipulation.
 * @param reverse If true, reverses the order of the years (descending).
 * @returns An array of dropdown options representing the years, or `undefined`
 *   if `navStart` or `navEnd` is not provided.
 */function n(e,t,r,a,o=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:i,endOfYear:l,eachYearOfInterval:s,getYear:d}=a;const c=i(e);const u=l(t);const f=s({start:c,end:u});if(o)f.reverse();return f.map(e=>{const t=r.formatYearDropdown(e,a);return{value:d(e),label:t,disabled:false}})}},83566:function(e,t,r){r.d(t,{l:()=>n});/**
 * Returns the start date of the week in the broadcast calendar.
 *
 * The broadcast week starts on Monday. If the first day of the month is not a
 * Monday, this function calculates the previous Monday as the start of the
 * broadcast week.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the start of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The start date of the broadcast week.
 */function n(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}}},15148:function(e,t,r){r.d(t,{j:()=>a});/* import */var n=r(41594);/**
 * A custom hook for managing both controlled and uncontrolled component states.
 *
 * This hook allows a component to support both controlled and uncontrolled
 * states by determining whether the `controlledValue` is provided. If it is
 * undefined, the hook falls back to using the internal state.
 *
 * @example
 *   // Uncontrolled usage
 *   const [value, setValue] = useControlledValue(0, undefined);
 *
 *   // Controlled usage
 *   const [value, setValue] = useControlledValue(0, props.value);
 *
 * @template T - The type of the value.
 * @param defaultValue The initial value for the uncontrolled state.
 * @param controlledValue The value for the controlled state. If undefined, the
 *   component will use the uncontrolled state.
 * @returns A tuple where the first element is the current value (either
 *   controlled or uncontrolled) and the second element is a setter function to
 *   update the value.
 */function a(e,t){const[r,a]=(0,n.useState)(e);const o=t===undefined?r:t;return[o,a]}},7332:function(e,t,r){r.r(t);r.d(t,{labelCaption:()=>/* reexport safe */a.t,labelDay:()=>/* reexport safe */n.Z,labelDayButton:()=>/* reexport safe */n.n,labelGrid:()=>/* reexport safe */a.b,labelGridcell:()=>/* reexport safe */o.P,labelMonthDropdown:()=>/* reexport safe */i.a,labelNav:()=>/* reexport safe */l.y,labelNext:()=>/* reexport safe */s.s,labelPrevious:()=>/* reexport safe */d.o,labelWeekNumber:()=>/* reexport safe */u.k,labelWeekNumberHeader:()=>/* reexport safe */f.N,labelWeekday:()=>/* reexport safe */c.n,labelYearDropdown:()=>/* reexport safe */p.n});/* import */var n=r(94926);/* import */var a=r(43350);/* import */var o=r(43950);/* import */var i=r(91859);/* import */var l=r(22913);/* import */var s=r(98531);/* import */var d=r(67683);/* import */var c=r(18146);/* import */var u=r(17587);/* import */var f=r(71722);/* import */var p=r(62574)},94926:function(e,t,r){r.d(t,{Z:()=>o,n:()=>a});/* import */var n=r(30922);/**
 * Generates the ARIA label for a day button.
 *
 * Use the `modifiers` argument to provide additional context for the label,
 * such as indicating if the day is "today" or "selected."
 *
 * @defaultValue The formatted date.
 * @param date - The date to format.
 * @param modifiers - The modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the day button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let o=(a??new n/* .DateLib */.i0(r)).format(e,"PPPP");if(t.today)o=`Today, ${o}`;if(t.selected)o=`${o}, selected`;return o}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const o=a},43350:function(e,t,r){r.d(t,{b:()=>a,t:()=>o});/* import */var n=r(30922);/**
 * Generates the ARIA label for the month grid, which is announced when entering
 * the grid.
 *
 * @defaultValue Locale-specific month/year order (e.g., "November 2022").
 * @param date - The date representing the month.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the month grid.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r){const a=r??new n/* .DateLib */.i0(t);return a.formatMonthYear(e)}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const o=a},43950:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(30922);/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let o=(a??new n/* .DateLib */.i0(r)).format(e,"PPPP");if(t?.today){o=`Today, ${o}`}return o}},91859:function(e,t,r){r.d(t,{a:()=>n});/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Month"}},22913:function(e,t,r){r.d(t,{y:()=>n});/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(){return""}},98531:function(e,t,r){r.d(t,{s:()=>n});/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Next Month"}},67683:function(e,t,r){r.d(t,{o:()=>n});/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Go to the Previous Month"}},17587:function(e,t,r){r.d(t,{k:()=>n});/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e,t){return`Week ${e}`}},71722:function(e,t,r){r.d(t,{N:()=>n});/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Week Number"}},18146:function(e,t,r){r.d(t,{n:()=>a});/* import */var n=r(30922);/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r){return(r??new n/* .DateLib */.i0(t)).format(e,"cccc")}},62574:function(e,t,r){r.d(t,{n:()=>n});/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function n(e){return"Choose the Year"}},79479:function(e,t,r){r.d(t,{N:()=>a});/* import */var n=r(15148);/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:o}=e;const[i,l]=(0,n/* .useControlledValue */.j)(r,o?r:undefined);const s=!o?i:r;const{isSameDay:d}=t;const c=e=>{return s?.some(t=>d(t,e))??false};const{min:u,max:f}=e;const p=(e,t,r)=>{let n=[...s??[]];if(c(e)){if(s?.length===u){// Min value reached, do nothing
return}if(a&&s?.length===1){// Required value already selected do nothing
return}n=s?.filter(t=>!d(t,e))}else{if(s?.length===f){// Max value reached, reset the selection to date
n=[e]}else{// Add the date to the selection
n=[...n,e]}}if(!o){l(n)}o?.(n,e,t,r);return n};return{selected:s,select:p,isSelected:c}}},95379:function(e,t,r){r.d(t,{f:()=>l});/* import */var n=r(15148);/* import */var a=r(75749);/* import */var o=r(85052);/* import */var i=r(79796);/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function l(e,t){const{disabled:r,excludeDisabled:l,selected:s,required:d,onSelect:c}=e;const[u,f]=(0,n/* .useControlledValue */.j)(s,c?s:undefined);const p=!c?u:s;const v=e=>p&&(0,i/* .rangeIncludesDate */.R)(p,e,false,t);const h=(n,i,s)=>{const{min:u,max:v}=e;const h=n?(0,a/* .addToRange */.M)(n,p,u,v,d,t):undefined;if(l&&r&&h?.from&&h.to){if((0,o/* .rangeContainsModifiers */.P)({from:h.from,to:h.to},r,t)){// if a disabled days is found, the range is reset
h.from=n;h.to=undefined}}if(!c){f(h)}c?.(h,n,i,s);return h};return{selected:p,select:h,isSelected:v}}},12764:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(15148);/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:o}=e;const[i,l]=(0,n/* .useControlledValue */.j)(r,o?r:undefined);const s=!o?i:r;const{isSameDay:d}=t;const c=e=>{return s?d(s,e):false};const u=(e,t,r)=>{let n=e;if(!a&&s&&s&&d(e,s)){// If the date is the same, clear the selection.
n=undefined}if(!o){l(n)}if(a){o?.(n,e,t,r)}else{o?.(n,e,t,r)}return n};return{selected:s,select:u,isSelected:c}}},8755:function(e,t,r){r.d(t,{s:()=>f});/* import */var n=r(41594);/* import */var a=r(10782);const o=e=>{if(e instanceof HTMLElement)return e;return null};const i=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const l=e=>o(e.querySelector("[data-animated-month]"));const s=e=>o(e.querySelector("[data-animated-caption]"));const d=e=>o(e.querySelector("[data-animated-weeks]"));const c=e=>o(e.querySelector("[data-animated-nav]"));const u=e=>o(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function f(e,t,{classNames:r,months:o,focused:f,dateLib:p}){const v=(0,n.useRef)(null);const h=(0,n.useRef)(o);const g=(0,n.useRef)(false);(0,n.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const n=h.current;// update previous months ref for next effect trigger
h.current=o;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
o.length===0||n.length===0||o.length!==n.length){return}const m=p.isSameMonth(o[0].date,n[0].date);const b=p.isAfter(o[0].date,n[0].date);const _=b?r[a/* .Animation.caption_after_enter */.X5.caption_after_enter]:r[a/* .Animation.caption_before_enter */.X5.caption_before_enter];const y=b?r[a/* .Animation.weeks_after_enter */.X5.weeks_after_enter]:r[a/* .Animation.weeks_before_enter */.X5.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const w=v.current;// update snapshot for next effect trigger
const x=e.current.cloneNode(true);if(x instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=i(x);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=l(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=s(e);if(r){r.classList.remove(_)}const n=d(e);if(n){n.classList.remove(y)}});v.current=x}else{v.current=null}if(g.current||m||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
f){return}const A=w instanceof HTMLElement?i(w):[];const Y=i(e.current);if(Y?.every(e=>e instanceof HTMLElement)&&A&&A.every(e=>e instanceof HTMLElement)){g.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=c(e.current);if(n){n.style.zIndex="1"}Y.forEach((o,i)=>{const l=A[i];if(!l){return}// animate new displayed month
o.style.position="relative";o.style.overflow="hidden";const c=s(o);if(c){c.classList.add(_)}const f=d(o);if(f){f.classList.add(y)}// animate new displayed month end
const p=()=>{g.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(c){c.classList.remove(_)}if(f){f.classList.remove(y)}o.style.position="";o.style.overflow="";if(o.contains(l)){o.removeChild(l)}};t.push(p);// animate old displayed month
l.style.pointerEvents="none";l.style.position="absolute";l.style.overflow="hidden";l.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const v=u(l);if(v){v.style.opacity="0"}const h=s(l);if(h){h.classList.add(b?r[a/* .Animation.caption_before_exit */.X5.caption_before_exit]:r[a/* .Animation.caption_after_exit */.X5.caption_after_exit]);h.addEventListener("animationend",p)}const m=d(l);if(m){m.classList.add(b?r[a/* .Animation.weeks_before_exit */.X5.weeks_before_exit]:r[a/* .Animation.weeks_after_exit */.X5.weeks_after_exit])}o.insertBefore(l,o.firstChild)})}})}},57391:function(e,t,r){r.d(t,{_:()=>v});/* import */var n=r(41594);/* import */var a=r(4047);/* import */var o=r(73495);/* import */var i=r(26511);/* import */var l=r(1102);/* import */var s=r(59807);/* import */var d=r(61921);/* import */var c=r(66847);/* import */var u=r(70267);/* import */var f=r(32923);/* import */var p=r(15148);/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function v(e,t){const[r,v]=(0,d/* .getNavMonths */.J)(e,t);const{startOfMonth:h,endOfMonth:g}=t;const m=(0,l/* .getInitialMonth */.Z)(e,r,v,t);const[b,_]=(0,p/* .useControlledValue */.j)(m,// initialMonth is always computed from props.month if provided
e.month?m:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,n.useEffect)(()=>{const n=(0,l/* .getInitialMonth */.Z)(e,r,v,t);_(n)},[e.timeZone]);/** The months displayed in the calendar. */// biome-ignore lint/correctness/useExhaustiveDependencies: We want to recompute only when specific props change.
const{months:y,weeks:w,days:x,previousMonth:A,nextMonth:Y}=(0,n.useMemo)(()=>{const n=(0,i/* .getDisplayMonths */.o)(b,v,{numberOfMonths:e.numberOfMonths},t);const l=(0,a/* .getDates */.Y)(n,e.endMonth?g(e.endMonth):undefined,{ISOWeek:e.ISOWeek,fixedWeeks:e.fixedWeeks,broadcastCalendar:e.broadcastCalendar},t);const d=(0,s/* .getMonths */.S)(n,l,{broadcastCalendar:e.broadcastCalendar,fixedWeeks:e.fixedWeeks,ISOWeek:e.ISOWeek,reverseMonths:e.reverseMonths},t);const p=(0,f/* .getWeeks */.C)(d);const h=(0,o/* .getDays */._)(d);const m=(0,u/* .getPreviousMonth */.E)(b,r,e,t);const _=(0,c/* .getNextMonth */.Q)(b,v,e,t);return{months:d,weeks:p,days:h,previousMonth:m,nextMonth:_}},[t,b.getTime(),v?.getTime(),r?.getTime(),e.disableNavigation,e.broadcastCalendar,e.endMonth?.getTime(),e.fixedWeeks,e.ISOWeek,e.numberOfMonths,e.pagedNavigation,e.reverseMonths]);const{disableNavigation:k,onMonthChange:I}=e;const D=e=>w.some(t=>t.days.some(t=>t.isEqualTo(e)));const C=e=>{if(k){return}let t=h(e);// if month is before start, use the first month instead
if(r&&t<h(r)){t=h(r)}// if month is after endMonth, use the last month instead
if(v&&t>h(v)){t=h(v)}_(t);I?.(t)};const S=e=>{// is this check necessary?
if(D(e)){return}C(e.date)};const M={months:y,weeks:w,days:x,navStart:r,navEnd:v,previousMonth:A,nextMonth:Y,goToMonth:C,goToDay:S};return M}},79209:function(e,t,r){r.d(t,{S:()=>a,w:()=>o});/* import */var n=r(41594);/** @ignore */const a=(0,n.createContext)(undefined);/**
 * Provides access to the DayPicker context, which includes properties and
 * methods to interact with the DayPicker component. This hook must be used
 * within a custom component.
 *
 * @template T - Use this type to refine the returned context type with a
 *   specific selection mode.
 * @returns The context to work with DayPicker.
 * @throws {Error} If the hook is used outside of a DayPicker provider.
 * @group Hooks
 * @see https://daypicker.dev/guides/custom-components
 */function o(){const e=(0,n.useContext)(a);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e}},83237:function(e,t,r){r.d(t,{i:()=>i});/* import */var n=r(41594);/* import */var a=r(83803);/* import */var o=r(44917);/**
 * Manages focus behavior for the DayPicker component, including setting,
 * moving, and blurring focus on calendar days.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param calendar - The calendar object containing the displayed days and
 *   months.
 * @param getModifiers - A function to retrieve modifiers for a given day.
 * @param isSelected - A function to check if a date is selected.
 * @param dateLib - The date utility library instance.
 * @returns An object containing focus-related methods and the currently focused
 *   day.
 */function i(e,t,r,i,l){const{autoFocus:s}=e;const[d,c]=(0,n.useState)();const u=(0,a/* .calculateFocusTarget */.A)(t.days,r,i||(()=>false),d);const[f,p]=(0,n.useState)(s?u:undefined);const v=()=>{c(f);p(undefined)};const h=(r,n)=>{if(!f)return;const a=(0,o/* .getNextFocus */.O)(r,n,f,t.navStart,t.navEnd,e,l);if(!a)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(a));if(!e){return}}t.goToDay(a);p(a)};const g=e=>{return Boolean(u?.isEqualTo(e))};const m={isFocusTarget:g,setFocused:p,focused:f,blur:v,moveFocus:h};return m}},35055:function(e,t,r){r.d(t,{C:()=>i});/* import */var n=r(79479);/* import */var a=r(95379);/* import */var o=r(12764);/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function i(e,t){const r=(0,o/* .useSingle */.G)(e,t);const i=(0,n/* .useMulti */.N)(e,t);const l=(0,a/* .useRange */.f)(e,t);switch(e.mode){case"single":return r;case"multiple":return i;case"range":return l;default:return undefined}}},75749:function(e,t,r){r.d(t,{M:()=>a});/* import */var n=r(30922);/**
 * Adds a date to an existing range, considering constraints like minimum and
 * maximum range size.
 *
 * @param date - The date to add to the range.
 * @param initialRange - The initial range to which the date will be added.
 * @param min - The minimum number of days in the range.
 * @param max - The maximum number of days in the range.
 * @param required - Whether the range must always include at least one date.
 * @param dateLib - The date utility library instance.
 * @returns The updated date range, or `undefined` if the range is cleared.
 * @group Utilities
 */function a(e,t,r=0,o=0,i=false,l=n/* .defaultDateLib */.VA){const{from:s,to:d}=t||{};const{isSameDay:c,isAfter:u,isBefore:f}=l;let p;if(!s&&!d){// the range is empty, add the date
p={from:e,to:r>0?undefined:e}}else if(s&&!d){// adding date to an incomplete range
if(c(s,e)){// adding a date equal to the start of the range
if(r===0){p={from:s,to:e}}else if(i){p={from:s,to:undefined}}else{p=undefined}}else if(f(e,s)){// adding a date before the start of the range
p={from:e,to:s}}else{// adding a date after the start of the range
p={from:s,to:e}}}else if(s&&d){// adding date to a complete range
if(c(s,e)&&c(d,e)){// adding a date that is equal to both start and end of the range
if(i){p={from:s,to:d}}else{p=undefined}}else if(c(s,e)){// adding a date equal to the the start of the range
p={from:s,to:r>0?undefined:e}}else if(c(d,e)){// adding a dare equal to the end of the range
p={from:e,to:r>0?undefined:e}}else if(f(e,s)){// adding a date before the start of the range
p={from:e,to:d}}else if(u(e,s)){// adding a date after the start of the range
p={from:s,to:e}}else if(u(e,d)){// adding a date after the end of the range
p={from:s,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(p?.from&&p?.to){const t=l.differenceInCalendarDays(p.to,p.from);if(o>0&&t>o){p={from:e,to:undefined}}else if(r>1&&t<r){p={from:e,to:undefined}}}return p}},13854:function(e,t,r){r.d(t,{t:()=>i});/* import */var n=r(14916);/* import */var a=r(45636);function o(e,t){if(typeof e==="boolean"||typeof e==="function"){return e}if(e instanceof Date){return(0,n/* .toTimeZone */.v)(e,t)}if(Array.isArray(e)){return e.map(e=>e instanceof Date?(0,n/* .toTimeZone */.v)(e,t):e)}if((0,a/* .isDateRange */.oM)(e)){return{...e,from:e.from?(0,n/* .toTimeZone */.v)(e.from,t):e.from,to:e.to?(0,n/* .toTimeZone */.v)(e.to,t):e.to}}if((0,a/* .isDateInterval */.m4)(e)){return{before:(0,n/* .toTimeZone */.v)(e.before,t),after:(0,n/* .toTimeZone */.v)(e.after,t)}}if((0,a/* .isDateAfterType */.RE)(e)){return{after:(0,n/* .toTimeZone */.v)(e.after,t)}}if((0,a/* .isDateBeforeType */.Ue)(e)){return{before:(0,n/* .toTimeZone */.v)(e.before,t)}}return e}/**
 * Convert any {@link Matcher} or array of matchers to the specified time zone.
 *
 * @param matchers - The matcher or matchers to convert.
 * @param timeZone - The target IANA time zone.
 * @returns The converted matcher(s).
 * @group Utilities
 */function i(e,t){if(!e){return e}if(Array.isArray(e)){return e.map(e=>o(e,t))}return o(e,t)}},9723:function(e,t,r){r.d(t,{k:()=>i});/* import */var n=r(30922);/* import */var a=r(79796);/* import */var o=r(45636);/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function i(e,t,r=n/* .defaultDateLib */.VA){const l=!Array.isArray(t)?[t]:t;const{isSameDay:s,differenceInCalendarDays:d,isAfter:c}=r;return l.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return s(e,t)}if((0,o/* .isDatesArray */.Hg)(t,r)){return t.includes(e)}if((0,o/* .isDateRange */.oM)(t)){return(0,a/* .rangeIncludesDate */.R)(t,e,false,r)}if((0,o/* .isDayOfWeekType */.OE)(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if((0,o/* .isDateInterval */.m4)(t)){const r=d(t.before,e);const n=d(t.after,e);const a=r>0;const o=n<0;const i=c(t.before,t.after);if(i){return o&&a}else{return a||o}}if((0,o/* .isDateAfterType */.RE)(t)){return d(e,t.after)>0}if((0,o/* .isDateBeforeType */.Ue)(t)){return d(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const l=/* unused pure expression or super */null&&i},46413:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(30922);/**
 * Checks if a date range contains one or more specified days of the week.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param dayOfWeek - The day(s) of the week to check for (`0-6`, where `0` is
 *   Sunday).
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains the specified day(s) of the week,
 *   otherwise `false`.
 * @group Utilities
 */function a(e,t,r=n/* .defaultDateLib */.VA){const o=!Array.isArray(t)?[t]:t;let i=e.from;const l=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const s=Math.min(l,6);for(let e=0;e<=s;e++){if(o.includes(i.getDay())){return true}i=r.addDays(i,1)}return false}},85052:function(e,t,r){r.d(t,{P:()=>d});/* import */var n=r(30922);/* import */var a=r(9723);/* import */var o=r(46413);/* import */var i=r(79796);/* import */var l=r(39965);/* import */var s=r(45636);/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function d(e,t,r=n/* .defaultDateLib */.VA){const c=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const u=c.filter(e=>typeof e!=="function");const f=u.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return(0,i/* .rangeIncludesDate */.R)(e,t,false,r)}if((0,s/* .isDatesArray */.Hg)(t,r)){return t.some(t=>(0,i/* .rangeIncludesDate */.R)(e,t,false,r))}if((0,s/* .isDateRange */.oM)(t)){if(t.from&&t.to){return(0,l/* .rangeOverlaps */.G)(e,{from:t.from,to:t.to},r)}return false}if((0,s/* .isDayOfWeekType */.OE)(t)){return(0,o/* .rangeContainsDayOfWeek */.g)(e,t.dayOfWeek,r)}if((0,s/* .isDateInterval */.m4)(t)){const n=r.isAfter(t.before,t.after);if(n){return(0,l/* .rangeOverlaps */.G)(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return(0,a/* .dateMatchModifiers */.k)(e.from,t,r)||(0,a/* .dateMatchModifiers */.k)(e.to,t,r)}if((0,s/* .isDateAfterType */.RE)(t)||(0,s/* .isDateBeforeType */.Ue)(t)){return(0,a/* .dateMatchModifiers */.k)(e.from,t,r)||(0,a/* .dateMatchModifiers */.k)(e.to,t,r)}return false});if(f){return true}const p=c.filter(e=>typeof e==="function");if(p.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(p.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false}},79796:function(e,t,r){r.d(t,{R:()=>a});/* import */var n=r(30922);/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function a(e,t,r=false,o=n/* .defaultDateLib */.VA){let{from:i,to:l}=e;const{differenceInCalendarDays:s,isSameDay:d}=o;if(i&&l){const e=s(l,i)<0;if(e){[i,l]=[l,i]}const n=s(t,i)>=(r?1:0)&&s(l,t)>=(r?1:0);return n}if(!r&&l){return d(l,t)}if(!r&&i){return d(i,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const o=(e,t)=>a(e,t,false,defaultDateLib)},39965:function(e,t,r){r.d(t,{G:()=>o});/* import */var n=r(30922);/* import */var a=r(79796);/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function o(e,t,r=n/* .defaultDateLib */.VA){return(0,a/* .rangeIncludesDate */.R)(e,t.from,false,r)||(0,a/* .rangeIncludesDate */.R)(e,t.to,false,r)||(0,a/* .rangeIncludesDate */.R)(t,e.from,false,r)||(0,a/* .rangeIncludesDate */.R)(t,e.to,false,r)}},14916:function(e,t,r){r.d(t,{v:()=>a});/* import */var n=r(2832);/**
 * Convert a {@link Date} or {@link TZDate} instance to the given time zone.
 * Reuses the same instance when it is already a {@link TZDate} using the target
 * time zone to avoid extra allocations.
 */function a(e,t){if(e instanceof n/* .TZDate */.BB&&e.timeZone===t){return e}return new n/* .TZDate */.BB(e,t)}},45636:function(e,t,r){r.d(t,{Hg:()=>s,OE:()=>l,RE:()=>o,Ue:()=>i,m4:()=>n,oM:()=>a});/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function n(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function a(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function o(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function i(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function l(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function s(e,t){return Array.isArray(e)&&e.every(t.isDate)}}}]);