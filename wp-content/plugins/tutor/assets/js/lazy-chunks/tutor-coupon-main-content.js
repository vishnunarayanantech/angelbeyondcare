"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["199"],{44996:function(e,t,r){r.d(t,{A:()=>l});/* import */var n=r(7656);/* import */var i=/*#__PURE__*/r.n(n);/* import */var a=r(38761);/* import */var o=/*#__PURE__*/r.n(a);// Imports
var s=o()(i());// Module
s.push([e.id,`/* Variables declaration */
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
/* export default */const l=s},38761:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,i,a){if(typeof e==="string"){e=[[null,e,undefined]]}var o={};if(n){for(var s=0;s<this.length;s++){var l=this[s][0];if(l!=null){o[l]=true}}}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);if(n&&o[u[0]]){continue}if(typeof a!=="undefined"){if(typeof u[5]==="undefined"){u[5]=a}else{u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}");u[5]=a}}if(r){if(!u[2]){u[2]=r}else{u[1]="@media ".concat(u[2]," {").concat(u[1],"}");u[2]=r}}if(i){if(!u[4]){u[4]="".concat(i)}else{u[1]="@supports (".concat(u[4],") {").concat(u[1],"}");u[4]=i}}t.push(u)}};return t}},7656:function(e){e.exports=function(e){return e[1]}},33392:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var a={};var o=[];for(var s=0;s<e.length;s++){var l=e[s];var c=n.base?l[0]+n.base:l[0];var u=a[c]||0;var d="".concat(c," ").concat(u);a[c]=u+1;var f=r(d);var p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(f!==-1){t[f].references++;t[f].updater(p)}else{var v=i(p,n);n.byIndex=s;t.splice(s,0,{identifier:d,updater:v,references:1})}o.push(d)}return o}function i(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,i){i=i||{};e=e||[];var a=n(e,i);return function e(e){e=e||[];for(var o=0;o<a.length;o++){var s=a[o];var l=r(s);t[l].references--}var c=n(e,i);for(var u=0;u<a.length;u++){var d=a[u];var f=r(d);if(t[f].references===0){t[f].updater();t.splice(f,1)}}a=c}}},26011:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},50188:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},33936:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},66017:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var i=typeof r.layer!=="undefined";if(i){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(i){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var a=r.sourceMap;if(a&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},16825:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},78561:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */fo});// NAMESPACE OBJECT: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/custom-components.js
var n={};r.r(n);r.d(n,{Button:()=>c2,CaptionLabel:()=>c6,Chevron:()=>c4,Day:()=>c5,DayButton:()=>c3,Dropdown:()=>c8,DropdownNav:()=>c9,Footer:()=>c7,Month:()=>ue,MonthCaption:()=>ut,MonthGrid:()=>ur,Months:()=>un,MonthsDropdown:()=>uo,Nav:()=>us,NextMonthButton:()=>ul,Option:()=>uc,PreviousMonthButton:()=>uu,Root:()=>ud,Select:()=>uf,Week:()=>up,WeekNumber:()=>um,WeekNumberHeader:()=>ug,Weekday:()=>uv,Weekdays:()=>uh,Weeks:()=>ub,YearsDropdown:()=>uy});// NAMESPACE OBJECT: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/index.js
var i={};r.r(i);r.d(i,{formatCaption:()=>uk,formatDay:()=>uY,formatMonthCaption:()=>uA,formatMonthDropdown:()=>uI,formatWeekNumber:()=>uD,formatWeekNumberHeader:()=>uM,formatWeekdayName:()=>uT,formatYearCaption:()=>uE,formatYearDropdown:()=>uO});// NAMESPACE OBJECT: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/index.js
var a={};r.r(a);r.d(a,{labelCaption:()=>uj,labelDay:()=>uW,labelDayButton:()=>uN,labelGrid:()=>uP,labelGridcell:()=>uK,labelMonthDropdown:()=>uR,labelNav:()=>uB,labelNext:()=>uz,labelPrevious:()=>uU,labelWeekNumber:()=>uG,labelWeekNumberHeader:()=>uq,labelWeekday:()=>uV,labelYearDropdown:()=>uQ});// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var o=r(52639);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var s=r(42771);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/Container.tsx
var l=r(78219);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/styles.ts
var c=r(13448);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
var u=r(41147);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var d=r(14206);// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var f=r(78346);// EXTERNAL MODULE: external "wp.i18n"
var p=r(12470);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var v=r(60599);// EXTERNAL MODULE: external "React"
var h=r(41594);var m=/*#__PURE__*/r.n(h);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/typography.ts
var g=r(81547);// EXTERNAL MODULE: ./assets/src/js/v3/shared/controls/Show.tsx
var b=r(59189);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/SVGIcon.tsx
var y=r(46225);// EXTERNAL MODULE: ./node_modules/.pnpm/@react-spring+web@9.7.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@react-spring/web/dist/react-spring_web.modern.mjs
var _=r(76035);// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function w(e){if(e==null){return window}if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t?t.defaultView||window:window}return e};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/instanceOf.js
function x(e){var t=w(e).Element;return e instanceof t||e instanceof Element}function k(e){var t=w(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function A(e){// IE 11 has no ShadowRoot
if(typeof ShadowRoot==="undefined"){return false}var t=w(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/math.js
var Y=Math.max;var I=Math.min;var T=Math.round;// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/userAgent.js
function D(){var e=navigator.userAgentData;if(e!=null&&e.brands&&Array.isArray(e.brands)){return e.brands.map(function(e){return e.brand+"/"+e.version}).join(" ")}return navigator.userAgent};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js
function M(){return!/^((?!chrome|android).)*safari/i.test(D())};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js
function O(e,t,r){if(t===void 0){t=false}if(r===void 0){r=false}var n=e.getBoundingClientRect();var i=1;var a=1;if(t&&k(e)){i=e.offsetWidth>0?T(n.width)/e.offsetWidth||1:1;a=e.offsetHeight>0?T(n.height)/e.offsetHeight||1:1}var o=x(e)?w(e):window,s=o.visualViewport;var l=!M()&&r;var c=(n.left+(l&&s?s.offsetLeft:0))/i;var u=(n.top+(l&&s?s.offsetTop:0))/a;var d=n.width/i;var f=n.height/a;return{width:d,height:f,top:u,right:c+d,bottom:u+f,left:c,x:c,y:u}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js
function E(e){var t=w(e);var r=t.pageXOffset;var n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function C(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js
function H(e){if(e===w(e)||!k(e)){return E(e)}else{return C(e)}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function S(e){return e?(e.nodeName||"").toLowerCase():null};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js
function F(e){// $FlowFixMe[incompatible-return]: assume body is always available
return((x(e)?e.ownerDocument:e.document)||window.document).documentElement};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js
function L(e){// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
// Popper 1 is broken in this case and never had a bug report so let's assume
// it's not an issue. I don't think anyone ever specifies width on <html>
// anyway.
// Browsers where the left scrollbar doesn't cause an issue report `0` for
// this (e.g. Edge 2019, IE11, Safari)
return O(F(e)).left+E(e).scrollLeft};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js
function N(e){return w(e).getComputedStyle(e)};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js
function W(e){// Firefox wants us to check `-x` and `-y` variations as well
var t=N(e),r=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+i+n)};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js
function P(e){var t=e.getBoundingClientRect();var r=T(t.width)/e.offsetWidth||1;var n=T(t.height)/e.offsetHeight||1;return r!==1||n!==1}// Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.
function j(e,t,r){if(r===void 0){r=false}var n=k(t);var i=k(t)&&P(t);var a=F(t);var o=O(e,i,r);var s={scrollLeft:0,scrollTop:0};var l={x:0,y:0};if(n||!n&&!r){if(S(t)!=="body"||// https://github.com/popperjs/popper-core/issues/1078
W(a)){s=H(t)}if(k(t)){l=O(t,true);l.x+=t.clientLeft;l.y+=t.clientTop}else if(a){l.x=L(a)}}return{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function K(e){var t=O(e);// Use the clientRect sizes if it's not been transformed.
// Fixes https://github.com/popperjs/popper-core/issues/1223
var r=e.offsetWidth;var n=e.offsetHeight;if(Math.abs(t.width-r)<=1){r=t.width}if(Math.abs(t.height-n)<=1){n=t.height}return{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getParentNode.js
function R(e){if(S(e)==="html"){return e}return(// $FlowFixMe[incompatible-return]
// $FlowFixMe[prop-missing]
e.assignedSlot||// step into the shadow DOM of the parent of a slotted node
e.parentNode||(A(e)?e.host:null)||// ShadowRoot detected
// $FlowFixMe[incompatible-call]: HTMLElement is a Node
F(e)// fallback
)};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js
function B(e){if(["html","body","#document"].indexOf(S(e))>=0){// $FlowFixMe[incompatible-return]: assume body is always available
return e.ownerDocument.body}if(k(e)&&W(e)){return e}return B(R(e))};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js
/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/function z(e,t){var r;if(t===void 0){t=[]}var n=B(e);var i=n===((r=e.ownerDocument)==null?void 0:r.body);var a=w(n);var o=i?[a].concat(a.visualViewport||[],W(n)?n:[]):n;var s=t.concat(o);return i?s:s.concat(z(R(o)))};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/isTableElement.js
function U(e){return["table","td","th"].indexOf(S(e))>=0};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js
function V(e){if(!k(e)||// https://github.com/popperjs/popper-core/issues/837
N(e).position==="fixed"){return null}return e.offsetParent}// `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function G(e){var t=/firefox/i.test(D());var r=/Trident/i.test(D());if(r&&k(e)){// In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
var n=N(e);if(n.position==="fixed"){return null}}var i=R(e);if(A(i)){i=i.host}while(k(i)&&["html","body"].indexOf(S(i))<0){var a=N(i);// This is non-exhaustive but covers the most common CSS properties that
// create a containing block.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none"){return i}else{i=i.parentNode}}return null}// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function q(e){var t=w(e);var r=V(e);while(r&&U(r)&&N(r).position==="static"){r=V(r)}if(r&&(S(r)==="html"||S(r)==="body"&&N(r).position==="static")){return t}return r||G(e)||t};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/enums.js
var Q="top";var $="bottom";var Z="right";var X="left";var J="auto";var ee=[Q,$,Z,X];var et="start";var er="end";var en="clippingParents";var ei="viewport";var ea="popper";var eo="reference";var es=/*#__PURE__*/ee.reduce(function(e,t){return e.concat([t+"-"+et,t+"-"+er])},[]);var el=/*#__PURE__*/[].concat(ee,[J]).reduce(function(e,t){return e.concat([t,t+"-"+et,t+"-"+er])},[]);// modifiers that need to read the DOM
var ec="beforeRead";var eu="read";var ed="afterRead";// pure-logic modifiers
var ef="beforeMain";var ep="main";var ev="afterMain";// modifier with the purpose to write to the DOM (or write into a framework state)
var eh="beforeWrite";var em="write";var eg="afterWrite";var eb=[ec,eu,ed,ef,ep,ev,eh,em,eg];// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/orderModifiers.js
// source: https://stackoverflow.com/questions/49875255
function ey(e){var t=new Map;var r=new Set;var n=[];e.forEach(function(e){t.set(e.name,e)});// On visiting object, check for its dependencies and visit them recursively
function i(e){r.add(e.name);var a=[].concat(e.requires||[],e.requiresIfExists||[]);a.forEach(function(e){if(!r.has(e)){var n=t.get(e);if(n){i(n)}}});n.push(e)}e.forEach(function(e){if(!r.has(e.name)){// check for visited object
i(e)}});return n}function e_(e){// order based on dependencies
var t=ey(e);// order based on phase
return eb.reduce(function(e,r){return e.concat(t.filter(function(e){return e.phase===r}))},[])};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/debounce.js
function ew(e){var t;return function(){if(!t){t=new Promise(function(r){Promise.resolve().then(function(){t=undefined;r(e())})})}return t}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergeByName.js
function ex(e){var t=e.reduce(function(e,t){var r=e[t.name];e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t;return e},{});// IE11 does not support Object.values
return Object.keys(t).map(function(e){return t[e]})};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/createPopper.js
var ek={placement:"bottom",modifiers:[],strategy:"absolute"};function eA(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}return!t.some(function(e){return!(e&&typeof e.getBoundingClientRect==="function")})}function eY(e){if(e===void 0){e={}}var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,i=t.defaultOptions,a=i===void 0?ek:i;return function e(e,t,r){if(r===void 0){r=a}var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},ek,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}};var o=[];var s=false;var l={state:i,setOptions:function r(r){var o=typeof r==="function"?r(i.options):r;u();i.options=Object.assign({},a,i.options,o);i.scrollParents={reference:x(e)?z(e):e.contextElement?z(e.contextElement):[],popper:z(t)};// Orders the modifiers based on their dependencies and `phase`
// properties
var s=e_(ex([].concat(n,i.options.modifiers)));// Strip out disabled modifiers
i.orderedModifiers=s.filter(function(e){return e.enabled});c();return l.update()},// Sync update – it will always be executed, even if not necessary. This
// is useful for low frequency updates where sync behavior simplifies the
// logic.
// For high frequency updates (e.g. `resize` and `scroll` events), always
// prefer the async Popper#update method
forceUpdate:function e(){if(s){return}var e=i.elements,t=e.reference,r=e.popper;// Don't proceed if `reference` or `popper` are not valid elements
// anymore
if(!eA(t,r)){return}// Store the reference and popper rects to be read by modifiers
i.rects={reference:j(t,q(r),i.options.strategy==="fixed"),popper:K(r)};// Modifiers have the ability to reset the current update cycle. The
// most common use case for this is the `flip` modifier changing the
// placement, which then needs to re-run all the modifiers, because the
// logic was previously ran for the previous placement and is therefore
// stale/incorrect
i.reset=false;i.placement=i.options.placement;// On each update cycle, the `modifiersData` property for each modifier
// is filled with the initial data specified by the modifier. This means
// it doesn't persist and is fresh on each update.
// To ensure persistent data, use `${name}#persistent`
i.orderedModifiers.forEach(function(e){return i.modifiersData[e.name]=Object.assign({},e.data)});for(var n=0;n<i.orderedModifiers.length;n++){if(i.reset===true){i.reset=false;n=-1;continue}var a=i.orderedModifiers[n],o=a.fn,c=a.options,u=c===void 0?{}:c,d=a.name;if(typeof o==="function"){i=o({state:i,options:u,name:d,instance:l})||i}}},// Async and optimistically optimized update – it will not be executed if
// not necessary (debounced to run at most once-per-tick)
update:ew(function(){return new Promise(function(e){l.forceUpdate();e(i)})}),destroy:function e(){u();s=true}};if(!eA(e,t)){return l}l.setOptions(r).then(function(e){if(!s&&r.onFirstUpdate){r.onFirstUpdate(e)}});// Modifiers have the ability to execute arbitrary code before the first
// update cycle runs. They will be executed in the same order as the update
// cycle. This is useful when a modifier adds some persistent data that
// other modifiers need to use, but the modifier is run after the dependent
// one.
function c(){i.orderedModifiers.forEach(function(e){var t=e.name,r=e.options,n=r===void 0?{}:r,a=e.effect;if(typeof a==="function"){var s=a({state:i,name:t,instance:l,options:n});var c=function e(){};o.push(s||c)}})}function u(){o.forEach(function(e){return e()});o=[]}return l}}var eI=/*#__PURE__*//* unused pure expression or super */null&&eY();// eslint-disable-next-line import/no-unused-modules
;// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/eventListeners.js
// eslint-disable-next-line import/no-unused-modules
var eT={passive:true};function eD(e){var t=e.state,r=e.instance,n=e.options;var i=n.scroll,a=i===void 0?true:i,o=n.resize,s=o===void 0?true:o;var l=w(t.elements.popper);var c=[].concat(t.scrollParents.reference,t.scrollParents.popper);if(a){c.forEach(function(e){e.addEventListener("scroll",r.update,eT)})}if(s){l.addEventListener("resize",r.update,eT)}return function(){if(a){c.forEach(function(e){e.removeEventListener("scroll",r.update,eT)})}if(s){l.removeEventListener("resize",r.update,eT)}}}// eslint-disable-next-line import/no-unused-modules
/* export default */const eM={name:"eventListeners",enabled:true,phase:"write",fn:function e(){},effect:eD,data:{}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getBasePlacement.js
function eO(e){return e.split("-")[0]};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getVariation.js
function eE(e){return e.split("-")[1]};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function eC(e){return["top","bottom"].indexOf(e)>=0?"x":"y"};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeOffsets.js
function eH(e){var t=e.reference,r=e.element,n=e.placement;var i=n?eO(n):null;var a=n?eE(n):null;var o=t.x+t.width/2-r.width/2;var s=t.y+t.height/2-r.height/2;var l;switch(i){case Q:l={x:o,y:t.y-r.height};break;case $:l={x:o,y:t.y+t.height};break;case Z:l={x:t.x+t.width,y:s};break;case X:l={x:t.x-r.width,y:s};break;default:l={x:t.x,y:t.y}}var c=i?eC(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(a){case et:l[c]=l[c]-(t[u]/2-r[u]/2);break;case er:l[c]=l[c]+(t[u]/2-r[u]/2);break;default:}}return l};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/popperOffsets.js
function eS(e){var t=e.state,r=e.name;// Offsets are the actual position the popper needs to have to be
// properly positioned near its reference element
// This is the most basic placement, and will be adjusted by
// the modifiers in the next step
t.modifiersData[r]=eH({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}// eslint-disable-next-line import/no-unused-modules
/* export default */const eF={name:"popperOffsets",enabled:true,phase:"read",fn:eS,data:{}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/computeStyles.js
// eslint-disable-next-line import/no-unused-modules
var eL={top:"auto",right:"auto",bottom:"auto",left:"auto"};// Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function eN(e,t){var r=e.x,n=e.y;var i=t.devicePixelRatio||1;return{x:T(r*i)/i||0,y:T(n*i)/i||0}}function eW(e){var t;var r=e.popper,n=e.popperRect,i=e.placement,a=e.variation,o=e.offsets,s=e.position,l=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,d=e.isFixed;var f=o.x,p=f===void 0?0:f,v=o.y,h=v===void 0?0:v;var m=typeof u==="function"?u({x:p,y:h}):{x:p,y:h};p=m.x;h=m.y;var g=o.hasOwnProperty("x");var b=o.hasOwnProperty("y");var y=X;var _=Q;var x=window;if(c){var k=q(r);var A="clientHeight";var Y="clientWidth";if(k===w(r)){k=F(r);if(N(k).position!=="static"&&s==="absolute"){A="scrollHeight";Y="scrollWidth"}}// $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
k=k;if(i===Q||(i===X||i===Z)&&a===er){_=$;var I=d&&k===x&&x.visualViewport?x.visualViewport.height:k[A];h-=I-n.height;h*=l?1:-1}if(i===X||(i===Q||i===$)&&a===er){y=Z;var T=d&&k===x&&x.visualViewport?x.visualViewport.width:k[Y];p-=T-n.width;p*=l?1:-1}}var D=Object.assign({position:s},c&&eL);var M=u===true?eN({x:p,y:h},w(r)):{x:p,y:h};p=M.x;h=M.y;if(l){var O;return Object.assign({},D,(O={},O[_]=b?"0":"",O[y]=g?"0":"",O.transform=(x.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",O))}return Object.assign({},D,(t={},t[_]=b?h+"px":"",t[y]=g?p+"px":"",t.transform="",t))}function eP(e){var t=e.state,r=e.options;var n=r.gpuAcceleration,i=n===void 0?true:n,a=r.adaptive,o=a===void 0?true:a,s=r.roundOffsets,l=s===void 0?true:s;var c={placement:eO(t.placement),variation:eE(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};if(t.modifiersData.popperOffsets!=null){t.styles.popper=Object.assign({},t.styles.popper,eW(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))}if(t.modifiersData.arrow!=null){t.styles.arrow=Object.assign({},t.styles.arrow,eW(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:l})))}t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}// eslint-disable-next-line import/no-unused-modules
/* export default */const ej={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:eP,data:{}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/applyStyles.js
// This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow
function eK(e){var t=e.state;Object.keys(t.elements).forEach(function(e){var r=t.styles[e]||{};var n=t.attributes[e]||{};var i=t.elements[e];// arrow is optional + virtual elements
if(!k(i)||!S(i)){return}// Flow doesn't support to extend this property, but it's the most
// effective way to apply styles to an HTMLElement
// $FlowFixMe[cannot-write]
Object.assign(i.style,r);Object.keys(n).forEach(function(e){var t=n[e];if(t===false){i.removeAttribute(e)}else{i.setAttribute(e,t===true?"":t)}})})}function eR(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);t.styles=r;if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}return function(){Object.keys(t.elements).forEach(function(e){var n=t.elements[e];var i=t.attributes[e]||{};var a=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]);// Set all values to an empty string to unset them
var o=a.reduce(function(e,t){e[t]="";return e},{});// arrow is optional + virtual elements
if(!k(n)||!S(n)){return}Object.assign(n.style,o);Object.keys(i).forEach(function(e){n.removeAttribute(e)})})}}// eslint-disable-next-line import/no-unused-modules
/* export default */const eB={name:"applyStyles",enabled:true,phase:"write",fn:eK,effect:eR,requires:["computeStyles"]};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/offset.js
// eslint-disable-next-line import/no-unused-modules
function ez(e,t,r){var n=eO(e);var i=[X,Q].indexOf(n)>=0?-1:1;var a=typeof r==="function"?r(Object.assign({},t,{placement:e})):r,o=a[0],s=a[1];o=o||0;s=(s||0)*i;return[X,Z].indexOf(n)>=0?{x:s,y:o}:{x:o,y:s}}function eU(e){var t=e.state,r=e.options,n=e.name;var i=r.offset,a=i===void 0?[0,0]:i;var o=el.reduce(function(e,r){e[r]=ez(r,t.rects,a);return e},{});var s=o[t.placement],l=s.x,c=s.y;if(t.modifiersData.popperOffsets!=null){t.modifiersData.popperOffsets.x+=l;t.modifiersData.popperOffsets.y+=c}t.modifiersData[n]=o}// eslint-disable-next-line import/no-unused-modules
/* export default */const eV={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:eU};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var eG={left:"right",right:"left",bottom:"top",top:"bottom"};function eq(e){return e.replace(/left|right|bottom|top/g,function(e){return eG[e]})};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var eQ={start:"end",end:"start"};function e$(e){return e.replace(/start|end/g,function(e){return eQ[e]})};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js
function eZ(e,t){var r=w(e);var n=F(e);var i=r.visualViewport;var a=n.clientWidth;var o=n.clientHeight;var s=0;var l=0;if(i){a=i.width;o=i.height;var c=M();if(c||!c&&t==="fixed"){s=i.offsetLeft;l=i.offsetTop}}return{width:a,height:o,x:s+L(e),y:l}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable
function eX(e){var t;var r=F(e);var n=E(e);var i=(t=e.ownerDocument)==null?void 0:t.body;var a=Y(r.scrollWidth,r.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0);var o=Y(r.scrollHeight,r.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);var s=-n.scrollLeft+L(e);var l=-n.scrollTop;if(N(i||r).direction==="rtl"){s+=Y(r.clientWidth,i?i.clientWidth:0)-a}return{width:a,height:o,x:s,y:l}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/contains.js
function eJ(e,t){var r=t.getRootNode&&t.getRootNode();// First, attempt with faster native method
if(e.contains(t)){return true}else if(r&&A(r)){var n=t;do{if(n&&e.isSameNode(n)){return true}// $FlowFixMe[prop-missing]: need a better way to handle this...
n=n.parentNode||n.host}while(n)}// Give up, the result is false
return false};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function e0(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js
function e1(e,t){var r=O(e,false,t==="fixed");r.top=r.top+e.clientTop;r.left=r.left+e.clientLeft;r.bottom=r.top+e.clientHeight;r.right=r.left+e.clientWidth;r.width=e.clientWidth;r.height=e.clientHeight;r.x=r.left;r.y=r.top;return r}function e2(e,t,r){return t===ei?e0(eZ(e,r)):x(t)?e1(t,r):e0(eX(F(e)))}// A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function e6(e){var t=z(R(e));var r=["absolute","fixed"].indexOf(N(e).position)>=0;var n=r&&k(e)?q(e):e;if(!x(n)){return[]}// $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
return t.filter(function(e){return x(e)&&eJ(e,n)&&S(e)!=="body"})}// Gets the maximum area that the element is visible in due to any number of
// clipping parents
function e4(e,t,r,n){var i=t==="clippingParents"?e6(e):[].concat(t);var a=[].concat(i,[r]);var o=a[0];var s=a.reduce(function(t,r){var i=e2(e,r,n);t.top=Y(i.top,t.top);t.right=I(i.right,t.right);t.bottom=I(i.bottom,t.bottom);t.left=Y(i.left,t.left);return t},e2(e,o,n));s.width=s.right-s.left;s.height=s.bottom-s.top;s.x=s.left;s.y=s.top;return s};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function e5(){return{top:0,right:0,bottom:0,left:0}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/mergePaddingObject.js
function e3(e){return Object.assign({},e5(),e)};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function e8(e,t){return t.reduce(function(t,r){t[r]=e;return t},{})};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/detectOverflow.js
// eslint-disable-next-line import/no-unused-modules
function e9(e,t){if(t===void 0){t={}}var r=t,n=r.placement,i=n===void 0?e.placement:n,a=r.strategy,o=a===void 0?e.strategy:a,s=r.boundary,l=s===void 0?en:s,c=r.rootBoundary,u=c===void 0?ei:c,d=r.elementContext,f=d===void 0?ea:d,p=r.altBoundary,v=p===void 0?false:p,h=r.padding,m=h===void 0?0:h;var g=e3(typeof m!=="number"?m:e8(m,ee));var b=f===ea?eo:ea;var y=e.rects.popper;var _=e.elements[v?b:f];var w=e4(x(_)?_:_.contextElement||F(e.elements.popper),l,u,o);var k=O(e.elements.reference);var A=eH({reference:k,element:y,strategy:"absolute",placement:i});var Y=e0(Object.assign({},y,A));var I=f===ea?Y:k;// positive = overflowing the clipping rect
// 0 or negative = within the clipping rect
var T={top:w.top-I.top+g.top,bottom:I.bottom-w.bottom+g.bottom,left:w.left-I.left+g.left,right:I.right-w.right+g.right};var D=e.modifiersData.offset;// Offsets can be applied only to the popper element
if(f===ea&&D){var M=D[i];Object.keys(T).forEach(function(e){var t=[Z,$].indexOf(e)>=0?1:-1;var r=[Q,$].indexOf(e)>=0?"y":"x";T[e]+=M[r]*t})}return T};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js
function e7(e,t){if(t===void 0){t={}}var r=t,n=r.placement,i=r.boundary,a=r.rootBoundary,o=r.padding,s=r.flipVariations,l=r.allowedAutoPlacements,c=l===void 0?el:l;var u=eE(n);var d=u?s?es:es.filter(function(e){return eE(e)===u}):ee;var f=d.filter(function(e){return c.indexOf(e)>=0});if(f.length===0){f=d}// $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
var p=f.reduce(function(t,r){t[r]=e9(e,{placement:r,boundary:i,rootBoundary:a,padding:o})[eO(r)];return t},{});return Object.keys(p).sort(function(e,t){return p[e]-p[t]})};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/flip.js
// eslint-disable-next-line import/no-unused-modules
function te(e){if(eO(e)===J){return[]}var t=eq(e);return[e$(e),t,e$(t)]}function tt(e){var t=e.state,r=e.options,n=e.name;if(t.modifiersData[n]._skip){return}var i=r.mainAxis,a=i===void 0?true:i,o=r.altAxis,s=o===void 0?true:o,l=r.fallbackPlacements,c=r.padding,u=r.boundary,d=r.rootBoundary,f=r.altBoundary,p=r.flipVariations,v=p===void 0?true:p,h=r.allowedAutoPlacements;var m=t.options.placement;var g=eO(m);var b=g===m;var y=l||(b||!v?[eq(m)]:te(m));var _=[m].concat(y).reduce(function(e,r){return e.concat(eO(r)===J?e7(t,{placement:r,boundary:u,rootBoundary:d,padding:c,flipVariations:v,allowedAutoPlacements:h}):r)},[]);var w=t.rects.reference;var x=t.rects.popper;var k=new Map;var A=true;var Y=_[0];for(var I=0;I<_.length;I++){var T=_[I];var D=eO(T);var M=eE(T)===et;var O=[Q,$].indexOf(D)>=0;var E=O?"width":"height";var C=e9(t,{placement:T,boundary:u,rootBoundary:d,altBoundary:f,padding:c});var H=O?M?Z:X:M?$:Q;if(w[E]>x[E]){H=eq(H)}var S=eq(H);var F=[];if(a){F.push(C[D]<=0)}if(s){F.push(C[H]<=0,C[S]<=0)}if(F.every(function(e){return e})){Y=T;A=false;break}k.set(T,F)}if(A){// `2` may be desired in some cases – research later
var L=v?3:1;var N=function e(e){var t=_.find(function(t){var r=k.get(t);if(r){return r.slice(0,e).every(function(e){return e})}});if(t){Y=t;return"break"}};for(var W=L;W>0;W--){var P=N(W);if(P==="break")break}}if(t.placement!==Y){t.modifiersData[n]._skip=true;t.placement=Y;t.reset=true}}// eslint-disable-next-line import/no-unused-modules
/* export default */const tr={name:"flip",enabled:true,phase:"main",fn:tt,requiresIfExists:["offset"],data:{_skip:false}};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/getAltAxis.js
function tn(e){return e==="x"?"y":"x"};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/utils/within.js
function ti(e,t,r){return Y(e,I(t,r))}function ta(e,t,r){var n=ti(e,t,r);return n>r?r:n};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/preventOverflow.js
function to(e){var t=e.state,r=e.options,n=e.name;var i=r.mainAxis,a=i===void 0?true:i,o=r.altAxis,s=o===void 0?false:o,l=r.boundary,c=r.rootBoundary,u=r.altBoundary,d=r.padding,f=r.tether,p=f===void 0?true:f,v=r.tetherOffset,h=v===void 0?0:v;var m=e9(t,{boundary:l,rootBoundary:c,padding:d,altBoundary:u});var g=eO(t.placement);var b=eE(t.placement);var y=!b;var _=eC(g);var w=tn(_);var x=t.modifiersData.popperOffsets;var k=t.rects.reference;var A=t.rects.popper;var T=typeof h==="function"?h(Object.assign({},t.rects,{placement:t.placement})):h;var D=typeof T==="number"?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T);var M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null;var O={x:0,y:0};if(!x){return}if(a){var E;var C=_==="y"?Q:X;var H=_==="y"?$:Z;var S=_==="y"?"height":"width";var F=x[_];var L=F+m[C];var N=F-m[H];var W=p?-A[S]/2:0;var P=b===et?k[S]:A[S];var j=b===et?-A[S]:-k[S];// We need to include the arrow in the calculation so the arrow doesn't go
// outside the reference bounds
var R=t.elements.arrow;var B=p&&R?K(R):{width:0,height:0};var z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:e5();var U=z[C];var V=z[H];// If the reference length is smaller than the arrow length, we don't want
// to include its full size in the calculation. If the reference is small
// and near the edge of a boundary, the popper can overflow even if the
// reference is not overflowing as well (e.g. virtual elements with no
// width or height)
var G=ti(0,k[S],B[S]);var J=y?k[S]/2-W-G-U-D.mainAxis:P-G-U-D.mainAxis;var ee=y?-k[S]/2+W+G+V+D.mainAxis:j+G+V+D.mainAxis;var er=t.elements.arrow&&q(t.elements.arrow);var en=er?_==="y"?er.clientTop||0:er.clientLeft||0:0;var ei=(E=M==null?void 0:M[_])!=null?E:0;var ea=F+J-ei-en;var eo=F+ee-ei;var es=ti(p?I(L,ea):L,F,p?Y(N,eo):N);x[_]=es;O[_]=es-F}if(s){var el;var ec=_==="x"?Q:X;var eu=_==="x"?$:Z;var ed=x[w];var ef=w==="y"?"height":"width";var ep=ed+m[ec];var ev=ed-m[eu];var eh=[Q,X].indexOf(g)!==-1;var em=(el=M==null?void 0:M[w])!=null?el:0;var eg=eh?ep:ed-k[ef]-A[ef]-em+D.altAxis;var eb=eh?ed+k[ef]+A[ef]-em-D.altAxis:ev;var ey=p&&eh?ta(eg,ed,eb):ti(p?eg:ep,ed,p?eb:ev);x[w]=ey;O[w]=ey-ed}t.modifiersData[n]=O}// eslint-disable-next-line import/no-unused-modules
/* export default */const ts={name:"preventOverflow",enabled:true,phase:"main",fn:to,requiresIfExists:["offset"]};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/arrow.js
// eslint-disable-next-line import/no-unused-modules
var tl=function e(e,t){e=typeof e==="function"?e(Object.assign({},t.rects,{placement:t.placement})):e;return e3(typeof e!=="number"?e:e8(e,ee))};function tc(e){var t;var r=e.state,n=e.name,i=e.options;var a=r.elements.arrow;var o=r.modifiersData.popperOffsets;var s=eO(r.placement);var l=eC(s);var c=[X,Z].indexOf(s)>=0;var u=c?"height":"width";if(!a||!o){return}var d=tl(i.padding,r);var f=K(a);var p=l==="y"?Q:X;var v=l==="y"?$:Z;var h=r.rects.reference[u]+r.rects.reference[l]-o[l]-r.rects.popper[u];var m=o[l]-r.rects.reference[l];var g=q(a);var b=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0;var y=h/2-m/2;// Make sure the arrow doesn't overflow the popper if the center point is
// outside of the popper bounds
var _=d[p];var w=b-f[u]-d[v];var x=b/2-f[u]/2+y;var k=ti(_,x,w);// Prevents breaking syntax highlighting...
var A=l;r.modifiersData[n]=(t={},t[A]=k,t.centerOffset=k-x,t)}function tu(e){var t=e.state,r=e.options;var n=r.element,i=n===void 0?"[data-popper-arrow]":n;if(i==null){return}// CSS selector
if(typeof i==="string"){i=t.elements.popper.querySelector(i);if(!i){return}}if(!eJ(t.elements.popper,i)){return}t.elements.arrow=i}// eslint-disable-next-line import/no-unused-modules
/* export default */const td={name:"arrow",enabled:true,phase:"main",fn:tc,effect:tu,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/modifiers/hide.js
function tf(e,t,r){if(r===void 0){r={x:0,y:0}}return{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function tp(e){return[Q,Z,$,X].some(function(t){return e[t]>=0})}function tv(e){var t=e.state,r=e.name;var n=t.rects.reference;var i=t.rects.popper;var a=t.modifiersData.preventOverflow;var o=e9(t,{elementContext:"reference"});var s=e9(t,{altBoundary:true});var l=tf(o,n);var c=tf(s,i,a);var u=tp(l);var d=tp(c);t.modifiersData[r]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d};t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}// eslint-disable-next-line import/no-unused-modules
/* export default */const th={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:tv};// CONCATENATED MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js
var tm=[eM,eF,ej,eB,eV,tr,ts,td,th];var tg=/*#__PURE__*/eY({defaultModifiers:tm});// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
// eslint-disable-next-line import/no-unused-modules
;// CONCATENATED MODULE: ./node_modules/.pnpm/tippy.js@6.3.7/node_modules/tippy.js/headless/dist/tippy-headless.esm.js
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*/var tb='<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';var ty="tippy-content";var t_="tippy-backdrop";var tw="tippy-arrow";var tx="tippy-svg-arrow";var tk={passive:true,capture:true};var tA=function e(){return document.body};function tY(e,t){return({}).hasOwnProperty.call(e,t)}function tI(e,t,r){if(Array.isArray(e)){var n=e[t];return n==null?Array.isArray(r)?r[t]:r:n}return e}function tT(e,t){var r=({}).toString.call(e);return r.indexOf("[object")===0&&r.indexOf(t+"]")>-1}function tD(e,t){return typeof e==="function"?e.apply(void 0,t):e}function tM(e,t){// Avoid wrapping in `setTimeout` if ms is 0 anyway
if(t===0){return e}var r;return function(n){clearTimeout(r);r=setTimeout(function(){e(n)},t)}}function tO(e,t){var r=Object.assign({},e);t.forEach(function(e){delete r[e]});return r}function tE(e){return e.split(/\s+/).filter(Boolean)}function tC(e){return[].concat(e)}function tH(e,t){if(e.indexOf(t)===-1){e.push(t)}}function tS(e){return e.filter(function(t,r){return e.indexOf(t)===r})}function tF(e){return e.split("-")[0]}function tL(e){return[].slice.call(e)}function tN(e){return Object.keys(e).reduce(function(t,r){if(e[r]!==undefined){t[r]=e[r]}return t},{})}function tW(){return document.createElement("div")}function tP(e){return["Element","Fragment"].some(function(t){return tT(e,t)})}function tj(e){return tT(e,"NodeList")}function tK(e){return tT(e,"MouseEvent")}function tR(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function tB(e){if(tP(e)){return[e]}if(tj(e)){return tL(e)}if(Array.isArray(e)){return e}return tL(document.querySelectorAll(e))}function tz(e,t){e.forEach(function(e){if(e){e.style.transitionDuration=t+"ms"}})}function tU(e,t){e.forEach(function(e){if(e){e.setAttribute("data-state",t)}})}function tV(e){var t;var r=tC(e),n=r[0];// Elements created via a <template> have an ownerDocument with no reference to the body
return n!=null&&(t=n.ownerDocument)!=null&&t.body?n.ownerDocument:document}function tG(e,t){var r=t.clientX,n=t.clientY;return e.every(function(e){var t=e.popperRect,i=e.popperState,a=e.props;var o=a.interactiveBorder;var s=tF(i.placement);var l=i.modifiersData.offset;if(!l){return true}var c=s==="bottom"?l.top.y:0;var u=s==="top"?l.bottom.y:0;var d=s==="right"?l.left.x:0;var f=s==="left"?l.right.x:0;var p=t.top-n+c>o;var v=n-t.bottom-u>o;var h=t.left-r+d>o;var m=r-t.right-f>o;return p||v||h||m})}function tq(e,t,r){var n=t+"EventListener";// some browsers apparently support `transition` (unprefixed) but only fire
// `webkitTransitionEnd`...
["transitionend","webkitTransitionEnd"].forEach(function(t){e[n](t,r)})}/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */function tQ(e,t){var r=t;while(r){var n;if(e.contains(r)){return true}r=r.getRootNode==null?void 0:(n=r.getRootNode())==null?void 0:n.host}return false}var t$={isTouch:false};var tZ=0;/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */function tX(){if(t$.isTouch){return}t$.isTouch=true;if(window.performance){document.addEventListener("mousemove",tJ)}}/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */function tJ(){var e=performance.now();if(e-tZ<20){t$.isTouch=false;document.removeEventListener("mousemove",tJ)}tZ=e}/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */function t0(){var e=document.activeElement;if(tR(e)){var t=e._tippy;if(e.blur&&!t.state.isVisible){e.blur()}}}function t1(){document.addEventListener("touchstart",tX,tk);window.addEventListener("blur",t0)}var t2=typeof window!=="undefined"&&typeof document!=="undefined";var t6=t2?!!window.msCrypto:false;function t4(e){var t=e==="destroy"?"n already-":" ";return[e+"() was called on a"+t+"destroyed instance. This is a no-op but","indicates a potential memory leak."].join(" ")}function t5(e){var t=/[ \t]{2,}/g;var r=/^[ \t]*/gm;return e.replace(t," ").replace(r,"").trim()}function t3(e){return t5("\n  %ctippy.js\n\n  %c"+t5(e)+"\n\n  %c👷‍ This is a development-only message. It will be removed in production.\n  ")}function t8(e){return[t3(e),"color: #00C584; font-size: 1.3em; font-weight: bold;","line-height: 1.5","color: #a6a095;"]}// Assume warnings and errors never have the same message
var t9;if(false){}function t7(){t9=new Set}function re(e,t){if(e&&!t9.has(t)){var r;t9.add(t);(r=console).warn.apply(r,t8(t))}}function rt(e,t){if(e&&!t9.has(t)){var r;t9.add(t);(r=console).error.apply(r,t8(t))}}function rr(e){var t=!e;var r=Object.prototype.toString.call(e)==="[object Object]"&&!e.addEventListener;rt(t,["tippy() was passed","`"+String(e)+"`","as its targets (first) argument. Valid types are: String, Element,","Element[], or NodeList."].join(" "));rt(r,["tippy() was passed a plain object which is not supported as an argument","for virtual positioning. Use props.getReferenceClientRect instead."].join(" "))}var rn={animateFill:false,followCursor:false,inlinePositioning:false,sticky:false};var ri={allowHTML:false,animation:"fade",arrow:true,content:"",inertia:false,maxWidth:350,role:"tooltip",theme:"",zIndex:9999};var ra=Object.assign({appendTo:tA,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:true,ignoreAttributes:false,interactive:false,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function e(){},onBeforeUpdate:function e(){},onCreate:function e(){},onDestroy:function e(){},onHidden:function e(){},onHide:function e(){},onMount:function e(){},onShow:function e(){},onShown:function e(){},onTrigger:function e(){},onUntrigger:function e(){},onClickOutside:function e(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:false,touch:true,trigger:"mouseenter focus",triggerTarget:null},rn,ri);var ro=Object.keys(ra);var rs=function e(e){/* istanbul ignore else */if(false){}var t=Object.keys(e);t.forEach(function(t){ra[t]=e[t]})};function rl(e){var t=e.plugins||[];var r=t.reduce(function(t,r){var n=r.name,i=r.defaultValue;if(n){var a;t[n]=e[n]!==undefined?e[n]:(a=ra[n])!=null?a:i}return t},{});return Object.assign({},e,r)}function rc(e,t){var r=t?Object.keys(rl(Object.assign({},ra,{plugins:t}))):ro;var n=r.reduce(function(t,r){var n=(e.getAttribute("data-tippy-"+r)||"").trim();if(!n){return t}if(r==="content"){t[r]=n}else{try{t[r]=JSON.parse(n)}catch(e){t[r]=n}}return t},{});return n}function ru(e,t){var r=Object.assign({},t,{content:tD(t.content,[e])},t.ignoreAttributes?{}:rc(e,t.plugins));r.aria=Object.assign({},ra.aria,r.aria);r.aria={expanded:r.aria.expanded==="auto"?t.interactive:r.aria.expanded,content:r.aria.content==="auto"?t.interactive?null:"describedby":r.aria.content};return r}function rd(e,t){if(e===void 0){e={}}if(t===void 0){t=[]}var r=Object.keys(e);r.forEach(function(e){var r=tO(ra,Object.keys(rn));var n=!tY(r,e);// Check if the prop exists in `plugins`
if(n){n=t.filter(function(t){return t.name===e}).length===0}re(n,["`"+e+"`","is not a valid prop. You may have spelled it incorrectly, or if it's","a plugin, forgot to pass it in an array as props.plugins.","\n\n","All props: https://atomiks.github.io/tippyjs/v6/all-props/\n","Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "))})}function rf(e){var t=e.firstElementChild;var r=tL(t.children);return{box:t,content:r.find(function(e){return e.classList.contains(ty)}),arrow:r.find(function(e){return e.classList.contains(tw)||e.classList.contains(tx)}),backdrop:r.find(function(e){return e.classList.contains(t_)})}}var rp=1;var rv=[];// Used by `hideAll()`
var rh=[];function rm(e,t){var r=ru(e,Object.assign({},ra,rl(tN(t))));// ===========================================================================
// 🔒 Private members
// ===========================================================================
var n;var i;var a;var o=false;var s=false;var l=false;var c=false;var u;var d;var f;var p=[];var v=tM($,r.interactiveDebounce);var h;// ===========================================================================
// 🔑 Public members
// ===========================================================================
var m=rp++;var g=null;var b=tS(r.plugins);var y={// Is the instance currently enabled?
isEnabled:true,// Is the tippy currently showing and not transitioning out?
isVisible:false,// Has the instance been destroyed?
isDestroyed:false,// Is the tippy currently mounted to the DOM?
isMounted:false,// Has the tippy finished transitioning in?
isShown:false};var _={// properties
id:m,reference:e,popper:tW(),popperInstance:g,props:r,state:y,plugins:b,// methods
clearDelayTimeouts:el,setProps:ec,setContent:eu,show:ed,hide:ef,hideWithInteractivity:ep,enable:eo,disable:es,unmount:ev,destroy:eh};// TODO: Investigate why this early return causes a TDZ error in the tests —
// it doesn't seem to happen in the browser
/* istanbul ignore if */if(!r.render){if(false){}return _}// ===========================================================================
// Initial mutations
// ===========================================================================
var w=r.render(_),x=w.popper,k=w.onUpdate;x.setAttribute("data-tippy-root","");x.id="tippy-"+_.id;_.popper=x;e._tippy=_;x._tippy=_;var A=b.map(function(e){return e.fn(_)});var Y=e.hasAttribute("aria-expanded");G();L();H();S("onCreate",[_]);if(r.showOnCreate){ei()}// Prevent a tippy with a delay from hiding if the cursor left then returned
// before it started hiding
x.addEventListener("mouseenter",function(){if(_.props.interactive&&_.state.isVisible){_.clearDelayTimeouts()}});x.addEventListener("mouseleave",function(){if(_.props.interactive&&_.props.trigger.indexOf("mouseenter")>=0){O().addEventListener("mousemove",v)}});return _;// ===========================================================================
// 🔒 Private methods
// ===========================================================================
function I(){var e=_.props.touch;return Array.isArray(e)?e:[e,0]}function T(){return I()[0]==="hold"}function D(){var e;// @ts-ignore
return!!((e=_.props.render)!=null&&e.$$tippy)}function M(){return h||e}function O(){var e=M().parentNode;return e?tV(e):document}function E(){return rf(x)}function C(e){// For touch or keyboard input, force `0` delay for UX reasons
// Also if the instance is mounted but not visible (transitioning out),
// ignore delay
if(_.state.isMounted&&!_.state.isVisible||t$.isTouch||u&&u.type==="focus"){return 0}return tI(_.props.delay,e?0:1,ra.delay)}function H(e){if(e===void 0){e=false}x.style.pointerEvents=_.props.interactive&&!e?"":"none";x.style.zIndex=""+_.props.zIndex}function S(e,t,r){if(r===void 0){r=true}A.forEach(function(r){if(r[e]){r[e].apply(r,t)}});if(r){var n;(n=_.props)[e].apply(n,t)}}function F(){var t=_.props.aria;if(!t.content){return}var r="aria-"+t.content;var n=x.id;var i=tC(_.props.triggerTarget||e);i.forEach(function(e){var t=e.getAttribute(r);if(_.state.isVisible){e.setAttribute(r,t?t+" "+n:n)}else{var i=t&&t.replace(n,"").trim();if(i){e.setAttribute(r,i)}else{e.removeAttribute(r)}}})}function L(){if(Y||!_.props.aria.expanded){return}var t=tC(_.props.triggerTarget||e);t.forEach(function(e){if(_.props.interactive){e.setAttribute("aria-expanded",_.state.isVisible&&e===M()?"true":"false")}else{e.removeAttribute("aria-expanded")}})}function N(){O().removeEventListener("mousemove",v);rv=rv.filter(function(e){return e!==v})}function W(t){// Moved finger to scroll instead of an intentional tap outside
if(t$.isTouch){if(l||t.type==="mousedown"){return}}var r=t.composedPath&&t.composedPath()[0]||t.target;// Clicked on interactive popper
if(_.props.interactive&&tQ(x,r)){return}// Clicked on the event listeners target
if(tC(_.props.triggerTarget||e).some(function(e){return tQ(e,r)})){if(t$.isTouch){return}if(_.state.isVisible&&_.props.trigger.indexOf("click")>=0){return}}else{S("onClickOutside",[_,t])}if(_.props.hideOnClick===true){_.clearDelayTimeouts();_.hide();// `mousedown` event is fired right before `focus` if pressing the
// currentTarget. This lets a tippy with `focus` trigger know that it
// should not show
s=true;setTimeout(function(){s=false});// The listener gets added in `scheduleShow()`, but this may be hiding it
// before it shows, and hide()'s early bail-out behavior can prevent it
// from being cleaned up
if(!_.state.isMounted){R()}}}function P(){l=true}function j(){l=false}function K(){var e=O();e.addEventListener("mousedown",W,true);e.addEventListener("touchend",W,tk);e.addEventListener("touchstart",j,tk);e.addEventListener("touchmove",P,tk)}function R(){var e=O();e.removeEventListener("mousedown",W,true);e.removeEventListener("touchend",W,tk);e.removeEventListener("touchstart",j,tk);e.removeEventListener("touchmove",P,tk)}function B(e,t){U(e,function(){if(!_.state.isVisible&&x.parentNode&&x.parentNode.contains(x)){t()}})}function z(e,t){U(e,t)}function U(e,t){var r=E().box;function n(e){if(e.target===r){tq(r,"remove",n);t()}}// Make callback synchronous if duration is 0
// `transitionend` won't fire otherwise
if(e===0){return t()}tq(r,"remove",d);tq(r,"add",n);d=n}function V(t,r,n){if(n===void 0){n=false}var i=tC(_.props.triggerTarget||e);i.forEach(function(e){e.addEventListener(t,r,n);p.push({node:e,eventType:t,handler:r,options:n})})}function G(){if(T()){V("touchstart",Q,{passive:true});V("touchend",Z,{passive:true})}tE(_.props.trigger).forEach(function(e){if(e==="manual"){return}V(e,Q);switch(e){case"mouseenter":V("mouseleave",Z);break;case"focus":V(t6?"focusout":"blur",X);break;case"focusin":V("focusout",X);break}})}function q(){p.forEach(function(e){var t=e.node,r=e.eventType,n=e.handler,i=e.options;t.removeEventListener(r,n,i)});p=[]}function Q(e){var t;var r=false;if(!_.state.isEnabled||J(e)||s){return}var n=((t=u)==null?void 0:t.type)==="focus";u=e;h=e.currentTarget;L();if(!_.state.isVisible&&tK(e)){// If scrolling, `mouseenter` events can be fired if the cursor lands
// over a new target, but `mousemove` events don't get fired. This
// causes interactive tooltips to get stuck open until the cursor is
// moved
rv.forEach(function(t){return t(e)})}// Toggle show/hide when clicking click-triggered tooltips
if(e.type==="click"&&(_.props.trigger.indexOf("mouseenter")<0||o)&&_.props.hideOnClick!==false&&_.state.isVisible){r=true}else{ei(e)}if(e.type==="click"){o=!r}if(r&&!n){ea(e)}}function $(e){var t=e.target;var n=M().contains(t)||x.contains(t);if(e.type==="mousemove"&&n){return}var i=en().concat(x).map(function(e){var t;var n=e._tippy;var i=(t=n.popperInstance)==null?void 0:t.state;if(i){return{popperRect:e.getBoundingClientRect(),popperState:i,props:r}}return null}).filter(Boolean);if(tG(i,e)){N();ea(e)}}function Z(e){var t=J(e)||_.props.trigger.indexOf("click")>=0&&o;if(t){return}if(_.props.interactive){_.hideWithInteractivity(e);return}ea(e)}function X(e){if(_.props.trigger.indexOf("focusin")<0&&e.target!==M()){return}// If focus was moved to within the popper
if(_.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)){return}ea(e)}function J(e){return t$.isTouch?T()!==e.type.indexOf("touch")>=0:false}function ee(){et();var t=_.props,r=t.popperOptions,n=t.placement,i=t.offset,a=t.getReferenceClientRect,o=t.moveTransition;var s=D()?rf(x).arrow:null;var l=a?{getBoundingClientRect:a,contextElement:a.contextElement||M()}:e;var c={name:"$$tippy",enabled:true,phase:"beforeWrite",requires:["computeStyles"],fn:function e(e){var t=e.state;if(D()){var r=E(),n=r.box;["placement","reference-hidden","escaped"].forEach(function(e){if(e==="placement"){n.setAttribute("data-placement",t.placement)}else{if(t.attributes.popper["data-popper-"+e]){n.setAttribute("data-"+e,"")}else{n.removeAttribute("data-"+e)}}});t.attributes.popper={}}}};var u=[{name:"offset",options:{offset:i}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!o}},c];if(D()&&s){u.push({name:"arrow",options:{element:s,padding:3}})}u.push.apply(u,(r==null?void 0:r.modifiers)||[]);_.popperInstance=tg(l,x,Object.assign({},r,{placement:n,onFirstUpdate:f,modifiers:u}))}function et(){if(_.popperInstance){_.popperInstance.destroy();_.popperInstance=null}}function er(){var e=_.props.appendTo;var t;// By default, we'll append the popper to the triggerTargets's parentNode so
// it's directly after the reference element so the elements inside the
// tippy can be tabbed to
// If there are clipping issues, the user can specify a different appendTo
// and ensure focus management is handled correctly manually
var r=M();if(_.props.interactive&&e===tA||e==="parent"){t=r.parentNode}else{t=tD(e,[r])}// The popper element needs to exist on the DOM before its position can be
// updated as Popper needs to read its dimensions
if(!t.contains(x)){t.appendChild(x)}_.state.isMounted=true;ee();/* istanbul ignore else */if(false){}}function en(){return tL(x.querySelectorAll("[data-tippy-root]"))}function ei(e){_.clearDelayTimeouts();if(e){S("onTrigger",[_,e])}K();var t=C(true);var r=I(),i=r[0],a=r[1];if(t$.isTouch&&i==="hold"&&a){t=a}if(t){n=setTimeout(function(){_.show()},t)}else{_.show()}}function ea(e){_.clearDelayTimeouts();S("onUntrigger",[_,e]);if(!_.state.isVisible){R();return}// For interactive tippies, scheduleHide is added to a document.body handler
// from onMouseLeave so must intercept scheduled hides from mousemove/leave
// events when trigger contains mouseenter and click, and the tip is
// currently shown as a result of a click.
if(_.props.trigger.indexOf("mouseenter")>=0&&_.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&o){return}var t=C(false);if(t){i=setTimeout(function(){if(_.state.isVisible){_.hide()}},t)}else{// Fixes a `transitionend` problem when it fires 1 frame too
// late sometimes, we don't want hide() to be called.
a=requestAnimationFrame(function(){_.hide()})}}// ===========================================================================
// 🔑 Public methods
// ===========================================================================
function eo(){_.state.isEnabled=true}function es(){// Disabling the instance should also hide it
// https://github.com/atomiks/tippy.js-react/issues/106
_.hide();_.state.isEnabled=false}function el(){clearTimeout(n);clearTimeout(i);cancelAnimationFrame(a)}function ec(t){/* istanbul ignore else */if(false){}if(_.state.isDestroyed){return}S("onBeforeUpdate",[_,t]);q();var r=_.props;var n=ru(e,Object.assign({},r,tN(t),{ignoreAttributes:true}));_.props=n;G();if(r.interactiveDebounce!==n.interactiveDebounce){N();v=tM($,n.interactiveDebounce)}// Ensure stale aria-expanded attributes are removed
if(r.triggerTarget&&!n.triggerTarget){tC(r.triggerTarget).forEach(function(e){e.removeAttribute("aria-expanded")})}else if(n.triggerTarget){e.removeAttribute("aria-expanded")}L();H();if(k){k(r,n)}if(_.popperInstance){ee();// Fixes an issue with nested tippies if they are all getting re-rendered,
// and the nested ones get re-rendered first.
// https://github.com/atomiks/tippyjs-react/issues/177
// TODO: find a cleaner / more efficient solution(!)
en().forEach(function(e){// React (and other UI libs likely) requires a rAF wrapper as it flushes
// its work in one
requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})}S("onAfterUpdate",[_,t])}function eu(e){_.setProps({content:e})}function ed(){/* istanbul ignore else */if(false){}// Early bail-out
var e=_.state.isVisible;var t=_.state.isDestroyed;var r=!_.state.isEnabled;var n=t$.isTouch&&!_.props.touch;var i=tI(_.props.duration,0,ra.duration);if(e||t||r||n){return}// Normalize `disabled` behavior across browsers.
// Firefox allows events on disabled elements, but Chrome doesn't.
// Using a wrapper element (i.e. <span>) is recommended.
if(M().hasAttribute("disabled")){return}S("onShow",[_],false);if(_.props.onShow(_)===false){return}_.state.isVisible=true;if(D()){x.style.visibility="visible"}H();K();if(!_.state.isMounted){x.style.transition="none"}// If flipping to the opposite side after hiding at least once, the
// animation will use the wrong placement without resetting the duration
if(D()){var a=E(),o=a.box,s=a.content;tz([o,s],0)}f=function e(){var e;if(!_.state.isVisible||c){return}c=true;// reflow
void x.offsetHeight;x.style.transition=_.props.moveTransition;if(D()&&_.props.animation){var t=E(),r=t.box,n=t.content;tz([r,n],i);tU([r,n],"visible")}F();L();tH(rh,_);// certain modifiers (e.g. `maxSize`) require a second update after the
// popper has been positioned for the first time
(e=_.popperInstance)==null?void 0:e.forceUpdate();S("onMount",[_]);if(_.props.animation&&D()){z(i,function(){_.state.isShown=true;S("onShown",[_])})}};er()}function ef(){/* istanbul ignore else */if(false){}// Early bail-out
var e=!_.state.isVisible;var t=_.state.isDestroyed;var r=!_.state.isEnabled;var n=tI(_.props.duration,1,ra.duration);if(e||t||r){return}S("onHide",[_],false);if(_.props.onHide(_)===false){return}_.state.isVisible=false;_.state.isShown=false;c=false;o=false;if(D()){x.style.visibility="hidden"}N();R();H(true);if(D()){var i=E(),a=i.box,s=i.content;if(_.props.animation){tz([a,s],n);tU([a,s],"hidden")}}F();L();if(_.props.animation){if(D()){B(n,_.unmount)}}else{_.unmount()}}function ep(e){/* istanbul ignore else */if(false){}O().addEventListener("mousemove",v);tH(rv,v);v(e)}function ev(){/* istanbul ignore else */if(false){}if(_.state.isVisible){_.hide()}if(!_.state.isMounted){return}et();// If a popper is not interactive, it will be appended outside the popper
// tree by default. This seems mainly for interactive tippies, but we should
// find a workaround if possible
en().forEach(function(e){e._tippy.unmount()});if(x.parentNode){x.parentNode.removeChild(x)}rh=rh.filter(function(e){return e!==_});_.state.isMounted=false;S("onHidden",[_])}function eh(){/* istanbul ignore else */if(false){}if(_.state.isDestroyed){return}_.clearDelayTimeouts();_.unmount();q();delete e._tippy;_.state.isDestroyed=true;S("onDestroy",[_])}}function rg(e,t){if(t===void 0){t={}}var r=ra.plugins.concat(t.plugins||[]);/* istanbul ignore else */if(false){}t1();var n=Object.assign({},t,{plugins:r});var i=tB(e);/* istanbul ignore else */if(false){var a,o}var s=i.reduce(function(e,t){var r=t&&rm(t,n);if(r){e.push(r)}return e},[]);return tP(e)?s[0]:s}rg.defaultProps=ra;rg.setDefaultProps=rs;rg.currentInput=t$;var rb=function e(e){var t=e===void 0?{}:e,r=t.exclude,n=t.duration;rh.forEach(function(e){var t=false;if(r){t=tR(r)?e.reference===r:e.popper===r.popper}if(!t){var i=e.props.duration;e.setProps({duration:n});e.hide();if(!e.state.isDestroyed){e.setProps({duration:i})}}})};// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var ry=Object.assign({},eB,{effect:function e(e){var t=e.state;var r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,r.popper);t.styles=r;if(t.elements.arrow){Object.assign(t.elements.arrow.style,r.arrow)}// intentionally return no cleanup function
// return () => { ... }
}});var r_=function e(e,t){var r;if(t===void 0){t={}}/* istanbul ignore else */if(false){}var n=e;var i=[];var a=[];var o;var s=t.overrides;var l=[];var c=false;function u(){a=n.map(function(e){return tC(e.props.triggerTarget||e.reference)}).reduce(function(e,t){return e.concat(t)},[])}function d(){i=n.map(function(e){return e.reference})}function f(e){n.forEach(function(t){if(e){t.enable()}else{t.disable()}})}function p(e){return n.map(function(t){var r=t.setProps;t.setProps=function(n){r(n);if(t.reference===o){e.setProps(n)}};return function(){t.setProps=r}})}// have to pass singleton, as it maybe undefined on first call
function v(e,t){var r=a.indexOf(t);// bail-out
if(t===o){return}o=t;var l=(s||[]).concat("content").reduce(function(e,t){e[t]=n[r].props[t];return e},{});e.setProps(Object.assign({},l,{getReferenceClientRect:typeof l.getReferenceClientRect==="function"?l.getReferenceClientRect:function(){var e;return(e=i[r])==null?void 0:e.getBoundingClientRect()}}))}f(false);d();u();var h={fn:function e(){return{onDestroy:function e(){f(true)},onHidden:function e(){o=null},onClickOutside:function e(e){if(e.props.showOnCreate&&!c){c=true;o=null}},onShow:function e(e){if(e.props.showOnCreate&&!c){c=true;v(e,i[0])}},onTrigger:function e(e,t){v(e,t.currentTarget)}}}};var m=rg(tW(),Object.assign({},tO(t,["overrides"]),{plugins:[h].concat(t.plugins||[]),triggerTarget:a,popperOptions:Object.assign({},t.popperOptions,{modifiers:[].concat(((r=t.popperOptions)==null?void 0:r.modifiers)||[],[ry])})}));var g=m.show;m.show=function(e){g();// first time, showOnCreate or programmatic call with no params
// default to showing first instance
if(!o&&e==null){return v(m,i[0])}// triggered from event (do nothing as prepareInstance already called by onTrigger)
// programmatic call with no params when already visible (do nothing again)
if(o&&e==null){return}// target is index of instance
if(typeof e==="number"){return i[e]&&v(m,i[e])}// target is a child tippy instance
if(n.indexOf(e)>=0){var t=e.reference;return v(m,t)}// target is a ReferenceElement
if(i.indexOf(e)>=0){return v(m,e)}};m.showNext=function(){var e=i[0];if(!o){return m.show(0)}var t=i.indexOf(o);m.show(i[t+1]||e)};m.showPrevious=function(){var e=i[i.length-1];if(!o){return m.show(e)}var t=i.indexOf(o);var r=i[t-1]||e;m.show(r)};var b=m.setProps;m.setProps=function(e){s=e.overrides||s;b(e)};m.setInstances=function(e){f(true);l.forEach(function(e){return e()});n=e;f(false);d();u();l=p(m);m.setProps({triggerTarget:a})};l=p(m);return m};var rw=/* unused pure expression or super */null&&{mouseover:"mouseenter",focusin:"focus",click:"click"};/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */function rx(e,t){/* istanbul ignore else */if(false){}var r=[];var n=[];var i=false;var a=t.target;var o=tO(t,["target"]);var s=Object.assign({},o,{trigger:"manual",touch:false});var l=Object.assign({touch:ra.touch},o,{showOnCreate:true});var c=rg(e,s);var u=tC(c);function d(e){if(!e.target||i){return}var r=e.target.closest(a);if(!r){return}// Get relevant trigger with fallbacks:
// 1. Check `data-tippy-trigger` attribute on target node
// 2. Fallback to `trigger` passed to `delegate()`
// 3. Fallback to `defaultProps.trigger`
var o=r.getAttribute("data-tippy-trigger")||t.trigger||ra.trigger;// @ts-ignore
if(r._tippy){return}if(e.type==="touchstart"&&typeof l.touch==="boolean"){return}if(e.type!=="touchstart"&&o.indexOf(rw[e.type])<0){return}var s=rg(r,l);if(s){n=n.concat(s)}}function f(e,t,n,i){if(i===void 0){i=false}e.addEventListener(t,n,i);r.push({node:e,eventType:t,handler:n,options:i})}function p(e){var t=e.reference;f(t,"touchstart",d,tk);f(t,"mouseover",d);f(t,"focusin",d);f(t,"click",d)}function v(){r.forEach(function(e){var t=e.node,r=e.eventType,n=e.handler,i=e.options;t.removeEventListener(r,n,i)});r=[]}function h(e){var t=e.destroy;var r=e.enable;var a=e.disable;e.destroy=function(e){if(e===void 0){e=true}if(e){n.forEach(function(e){e.destroy()})}n=[];v();t()};e.enable=function(){r();n.forEach(function(e){return e.enable()});i=false};e.disable=function(){a();n.forEach(function(e){return e.disable()});i=true};p(e)}u.forEach(h);return c}var rk=/* unused pure expression or super */null&&{name:"animateFill",defaultValue:false,fn:function e(e){var t;// @ts-ignore
if(!((t=e.props.render)!=null&&t.$$tippy)){if(false){}return{}}var r=rf(e.popper),n=r.box,i=r.content;var a=e.props.animateFill?rA():null;return{onCreate:function t(){if(a){n.insertBefore(a,n.firstElementChild);n.setAttribute("data-animatefill","");n.style.overflow="hidden";e.setProps({arrow:false,animation:"shift-away"})}},onMount:function e(){if(a){var e=n.style.transitionDuration;var t=Number(e.replace("ms",""));// The content should fade in after the backdrop has mostly filled the
// tooltip element. `clip-path` is the other alternative but is not
// well-supported and is buggy on some devices.
i.style.transitionDelay=Math.round(t/10)+"ms";a.style.transitionDuration=e;tU([a],"visible")}},onShow:function e(){if(a){a.style.transitionDuration="0ms"}},onHide:function e(){if(a){tU([a],"hidden")}}}}};function rA(){var e=tW();e.className=t_;tU([e],"hidden");return e}var rY=/* unused pure expression or super */null&&{clientX:0,clientY:0};var rI=/* unused pure expression or super */null&&[];function rT(e){var t=e.clientX,r=e.clientY;rY={clientX:t,clientY:r}}function rD(e){e.addEventListener("mousemove",rT)}function rM(e){e.removeEventListener("mousemove",rT)}var rO=/* unused pure expression or super */null&&{name:"followCursor",defaultValue:false,fn:function e(e){var t=e.reference;var r=tV(e.props.triggerTarget||t);var n=false;var i=false;var a=true;var o=e.props;function s(){return e.props.followCursor==="initial"&&e.state.isVisible}function l(){r.addEventListener("mousemove",d)}function c(){r.removeEventListener("mousemove",d)}function u(){n=true;e.setProps({getReferenceClientRect:null});n=false}function d(r){// If the instance is interactive, avoid updating the position unless it's
// over the reference element
var n=r.target?t.contains(r.target):true;var i=e.props.followCursor;var a=r.clientX,o=r.clientY;var s=t.getBoundingClientRect();var l=a-s.left;var c=o-s.top;if(n||!e.props.interactive){e.setProps({// @ts-ignore - unneeded DOMRect properties
getReferenceClientRect:function e(){var e=t.getBoundingClientRect();var r=a;var n=o;if(i==="initial"){r=e.left+l;n=e.top+c}var s=i==="horizontal"?e.top:n;var u=i==="vertical"?e.right:r;var d=i==="horizontal"?e.bottom:n;var f=i==="vertical"?e.left:r;return{width:u-f,height:d-s,top:s,right:u,bottom:d,left:f}}})}}function f(){if(e.props.followCursor){rI.push({instance:e,doc:r});rD(r)}}function p(){rI=rI.filter(function(t){return t.instance!==e});if(rI.filter(function(e){return e.doc===r}).length===0){rM(r)}}return{onCreate:f,onDestroy:p,onBeforeUpdate:function t(){o=e.props},onAfterUpdate:function t(t,r){var a=r.followCursor;if(n){return}if(a!==undefined&&o.followCursor!==a){p();if(a){f();if(e.state.isMounted&&!i&&!s()){l()}}else{c();u()}}},onMount:function t(){if(e.props.followCursor&&!i){if(a){d(rY);a=false}if(!s()){l()}}},onTrigger:function e(e,t){if(tK(t)){rY={clientX:t.clientX,clientY:t.clientY}}i=t.type==="focus"},onHidden:function t(){if(e.props.followCursor){u();c();a=true}}}}};function rE(e,t){var r;return{popperOptions:Object.assign({},e.popperOptions,{modifiers:[].concat((((r=e.popperOptions)==null?void 0:r.modifiers)||[]).filter(function(e){var r=e.name;return r!==t.name}),[t])})}}var rC=/* unused pure expression or super */null&&{name:"inlinePositioning",defaultValue:false,fn:function e(e){var t=e.reference;function r(){return!!e.props.inlinePositioning}var n;var i=-1;var a=false;var o=[];var s={name:"tippyInlinePositioning",enabled:true,phase:"afterWrite",fn:function t(t){var i=t.state;if(r()){if(o.indexOf(i.placement)!==-1){o=[]}if(n!==i.placement&&o.indexOf(i.placement)===-1){o.push(i.placement);e.setProps({// @ts-ignore - unneeded DOMRect properties
getReferenceClientRect:function e(){return l(i.placement)}})}n=i.placement}}};function l(e){return rH(tF(e),t.getBoundingClientRect(),tL(t.getClientRects()),i)}function c(t){a=true;e.setProps(t);a=false}function u(){if(!a){c(rE(e.props,s))}}return{onCreate:u,onAfterUpdate:u,onTrigger:function t(t,r){if(tK(r)){var n=tL(e.reference.getClientRects());var a=n.find(function(e){return e.left-2<=r.clientX&&e.right+2>=r.clientX&&e.top-2<=r.clientY&&e.bottom+2>=r.clientY});var o=n.indexOf(a);i=o>-1?o:i}},onHidden:function e(){i=-1}}}};function rH(e,t,r,n){// Not an inline element, or placement is not yet known
if(r.length<2||e===null){return t}// There are two rects and they are disjoined
if(r.length===2&&n>=0&&r[0].left>r[1].right){return r[n]||t}switch(e){case"top":case"bottom":{var i=r[0];var a=r[r.length-1];var o=e==="top";var s=i.top;var l=a.bottom;var c=o?i.left:a.left;var u=o?i.right:a.right;var d=u-c;var f=l-s;return{top:s,bottom:l,left:c,right:u,width:d,height:f}}case"left":case"right":{var p=Math.min.apply(Math,r.map(function(e){return e.left}));var v=Math.max.apply(Math,r.map(function(e){return e.right}));var h=r.filter(function(t){return e==="left"?t.left===p:t.right===v});var m=h[0].top;var g=h[h.length-1].bottom;var b=p;var y=v;var _=y-b;var w=g-m;return{top:m,bottom:g,left:b,right:y,width:_,height:w}}default:{return t}}}var rS=/* unused pure expression or super */null&&{name:"sticky",defaultValue:false,fn:function e(e){var t=e.reference,r=e.popper;function n(){return e.popperInstance?e.popperInstance.state.elements.reference:t}function i(t){return e.props.sticky===true||e.props.sticky===t}var a=null;var o=null;function s(){var t=i("reference")?n().getBoundingClientRect():null;var l=i("popper")?r.getBoundingClientRect():null;if(t&&rF(a,t)||l&&rF(o,l)){if(e.popperInstance){e.popperInstance.update()}}a=t;o=l;if(e.state.isMounted){requestAnimationFrame(s)}}return{onMount:function t(){if(e.props.sticky){s()}}}}};function rF(e,t){if(e&&t){return e.top!==t.top||e.right!==t.right||e.bottom!==t.bottom||e.left!==t.left}return true}rg.setDefaultProps({animation:false});/* export default */const rL=rg;//# sourceMappingURL=tippy-headless.esm.js.map
// EXTERNAL MODULE: external "ReactDOM"
var rN=r(75206);// CONCATENATED MODULE: ./node_modules/.pnpm/@tippyjs+react@4.2.6_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@tippyjs/react/headless/dist/tippy-react-headless.esm.js
function rW(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var i,a;for(a=0;a<n.length;a++){i=n[a];if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}var rP=typeof window!=="undefined"&&typeof document!=="undefined";function rj(e,t){if(e){if(typeof e==="function"){e(t)}if(({}).hasOwnProperty.call(e,"current")){e.current=t}}}function rK(){return rP&&document.createElement("div")}function rR(e){var t={"data-placement":e.placement};if(e.referenceHidden){t["data-reference-hidden"]=""}if(e.escaped){t["data-escaped"]=""}return t}function rB(e,t){if(e===t){return true}else if(typeof e==="object"&&e!=null&&typeof t==="object"&&t!=null){if(Object.keys(e).length!==Object.keys(t).length){return false}for(var r in e){if(t.hasOwnProperty(r)){if(!rB(e[r],t[r])){return false}}else{return false}}return true}else{return false}}function rz(e){var t=[];e.forEach(function(e){if(!t.find(function(t){return rB(e,t)})){t.push(e)}});return t}function rU(e,t){var r,n;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:rz([].concat(((r=e.popperOptions)==null?void 0:r.modifiers)||[],((n=t.popperOptions)==null?void 0:n.modifiers)||[]))})})}var rV=rP?h.useLayoutEffect:h.useEffect;function rG(e){// Using refs instead of state as it's recommended to not store imperative
// values in state due to memory problems in React(?)
var t=(0,h.useRef)();if(!t.current){t.current=typeof e==="function"?e():e}return t.current}function rq(e,t,r){r.split(/\s+/).forEach(function(r){if(r){e.classList[t](r)}})}var rQ={name:"className",defaultValue:"",fn:function e(e){var t=e.popper.firstElementChild;var r=function t(){var t;return!!((t=e.props.render)==null?void 0:t.$$tippy)};function n(){if(e.props.className&&!r()){if(false){}return}rq(t,"add",e.props.className)}function i(){if(r()){rq(t,"remove",e.props.className)}}return{onCreate:n,onBeforeUpdate:i,onAfterUpdate:n}}};function r$(e){function t(t){var r=t.children,n=t.content,i=t.visible,a=t.singleton,o=t.render,s=t.reference,l=t.disabled,c=l===void 0?false:l,u=t.ignoreAttributes,d=u===void 0?true:u,f=t.__source,p=t.__self,v=rW(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"]);var g=i!==undefined;var b=a!==undefined;var y=(0,h.useState)(false),_=y[0],w=y[1];var x=(0,h.useState)({}),k=x[0],A=x[1];var Y=(0,h.useState)(),I=Y[0],T=Y[1];var D=rG(function(){return{container:rK(),renders:1}});var M=Object.assign({ignoreAttributes:d},v,{content:D.container});if(g){if(false){}M.trigger="manual";M.hideOnClick=false}if(b){c=true}var O=M;var E=M.plugins||[];if(o){O=Object.assign({},M,{plugins:b&&a.data!=null?[].concat(E,[{fn:function e(){return{onTrigger:function e(e,t){var r=a.data.children.find(function(e){var r=e.instance;return r.reference===t.currentTarget});e.state.$$activeSingletonInstance=r.instance;T(r.content)}}}}]):E,render:function e(){return{popper:D.container}}})}var C=[s].concat(r?[r.type]:[]);// CREATE
rV(function(){var t=s;if(s&&s.hasOwnProperty("current")){t=s.current}var r=e(t||D.ref||rK(),Object.assign({},O,{plugins:[rQ].concat(M.plugins||[])}));D.instance=r;if(c){r.disable()}if(i){r.show()}if(b){a.hook({instance:r,content:n,props:O,setSingletonContent:T})}w(true);return function(){r.destroy();a==null?void 0:a.cleanup(r)}},C);// UPDATE
rV(function(){var e;// Prevent this effect from running on 1st render
if(D.renders===1){D.renders++;return}var t=D.instance;t.setProps(rU(t.props,O));// Fixes #264
(e=t.popperInstance)==null?void 0:e.forceUpdate();if(c){t.disable()}else{t.enable()}if(g){if(i){t.show()}else{t.hide()}}if(b){a.hook({instance:t,content:n,props:O,setSingletonContent:T})}});rV(function(){var e;if(!o){return}var t=D.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat((((e=t.props.popperOptions)==null?void 0:e.modifiers)||[]).filter(function(e){var t=e.name;return t!=="$$tippyReact"}),[{name:"$$tippyReact",enabled:true,phase:"beforeWrite",requires:["computeStyles"],fn:function e(e){var t;var r=e.state;var n=(t=r.modifiersData)==null?void 0:t.hide;// WARNING: this is a high-risk path that can cause an infinite
// loop. This expression _must_ evaluate to false when required
if(k.placement!==r.placement||k.referenceHidden!==(n==null?void 0:n.isReferenceHidden)||k.escaped!==(n==null?void 0:n.hasPopperEscaped)){A({placement:r.placement,referenceHidden:n==null?void 0:n.isReferenceHidden,escaped:n==null?void 0:n.hasPopperEscaped})}r.attributes.popper={}}}])})})},[k.placement,k.referenceHidden,k.escaped].concat(C));return /*#__PURE__*/m().createElement(m().Fragment,null,r?/*#__PURE__*/(0,h.cloneElement)(r,{ref:function e(e){D.ref=e;rj(r.ref,e)}}):null,_&&/*#__PURE__*/(0,rN.createPortal)(o?o(rR(k),I,D.instance):n,D.container))}return t}function rZ(e){return function t(t){var r=t===void 0?{}:t,n=r.disabled,i=n===void 0?false:n,a=r.overrides,o=a===void 0?[]:a;var s=useState(false),l=s[0],c=s[1];var u=rG({children:[],renders:1});rV(function(){if(!l){c(true);return}var t=u.children,r=u.sourceData;if(!r){if(false){}return}var n=e(t.map(function(e){return e.instance}),Object.assign({},r.props,{popperOptions:r.instance.props.popperOptions,overrides:o,plugins:[rQ].concat(r.props.plugins||[])}));u.instance=n;if(i){n.disable()}return function(){n.destroy();u.children=t.filter(function(e){var t=e.instance;return!t.state.isDestroyed})}},[l]);rV(function(){if(!l){return}if(u.renders===1){u.renders++;return}var e=u.children,t=u.instance,r=u.sourceData;if(!(t&&r)){return}var n=r.props,a=n.content,s=rW(n,["content"]);t.setProps(rU(t.props,Object.assign({},s,{overrides:o})));t.setInstances(e.map(function(e){return e.instance}));if(i){t.disable()}else{t.enable()}});return useMemo(function(){var e={data:u,hook:function e(e){u.sourceData=e;u.setSingletonContent=e.setSingletonContent},cleanup:function e(){u.sourceData=null}};var t={hook:function e(e){var t,r;u.children=u.children.filter(function(t){var r=t.instance;return e.instance!==r});u.children.push(e);if(((t=u.instance)==null?void 0:t.state.isMounted)&&((r=u.instance)==null?void 0:r.state.$$activeSingletonInstance)===e.instance){u.setSingletonContent==null?void 0:u.setSingletonContent(e.content)}if(u.instance&&!u.instance.state.isDestroyed){u.instance.setInstances(u.children.map(function(e){return e.instance}))}},cleanup:function e(e){u.children=u.children.filter(function(t){return t.instance!==e});if(u.instance&&!u.instance.state.isDestroyed){u.instance.setInstances(u.children.map(function(e){return e.instance}))}}};return[e,t]},[])}}var rX=function(e,t){return/*#__PURE__*/(0,h.forwardRef)(function r(r,n){var i=r.children,a=rW(r,["children"]);return(/*#__PURE__*/// If I spread them separately here, Babel adds the _extends ponyfill for
// some reason
m().createElement(e,Object.assign({},t,a),i?/*#__PURE__*/(0,h.cloneElement)(i,{ref:function e(e){rj(n,e);rj(i.ref,e)}}):null))})};var rJ=/*#__PURE__*//* unused pure expression or super */null&&rZ(createSingleton);var r0=/*#__PURE__*/rX(/*#__PURE__*/r$(rL),{render:function e(){return""}});/* export default */const r1=r0;//# sourceMappingURL=tippy-react-headless.esm.js.map
// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useAnimation.tsx
var r2=r(31569);// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/Tooltip.tsx
function r6(){var e=(0,v._)(["\n        bottom: auto;\n        left: -4px;\n        top: 50%;\n        transform: translateY(-50%) rotate(45deg);\n      "]);r6=function t(){return e};return e}function r4(){var e=(0,v._)(["\n        bottom: auto;\n        top: -4px;\n        left: 50%;\n        transform: translateX(-50%) rotate(45deg);\n      "]);r4=function t(){return e};return e}function r5(){var e=(0,v._)(["\n        bottom: auto;\n        top: 50%;\n        left: auto;\n        right: -4px;\n        transform: translateY(-50%) rotate(45deg);\n      "]);r5=function t(){return e};return e}var r3={opacity:0,transform:"scale(0.8)"};var r8={tension:300,friction:15};var r9=e=>{var{children:t,content:r,allowHTML:n,placement:i="top",hideOnClick:a,delay:s=0,disabled:l=false,visible:f,wrapperCss:p}=e;var[v,h]=(0,_/* .useSpring */.zh)(()=>r3);if(l)return t;var m=()=>{h.start({opacity:1,transform:"scale(1)",config:r8})};var g=e=>{var{unmount:t}=e;h.start((0,d._)((0,u._)({},r3),{onRest:t,config:(0,d._)((0,u._)({},r8),{clamp:true})}))};return/*#__PURE__*/(0,o/* .jsx */.Y)(r1,{render:e=>{return/*#__PURE__*/(0,o/* .jsx */.Y)(r2/* .AnimatedDiv */.LK,(0,d._)((0,u._)({style:v,hideOnOverflow:false},e),{css:ne.contentBox(i),children:r}))},animation:true,onMount:m,onHide:g,allowHTML:n,delay:[s,100],hideOnClick:a,placement:i,visible:f,zIndex:c/* .zIndex.highest */.fE.highest,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:p,children:t})})};/* export default */const r7=r9;var ne={contentBox:e=>/*#__PURE__*/(0,s/* .css */.AH)("max-width:250px;width:100%;background-color:",c/* .colorTokens.color.black.main */.I6.color.black.main,";color:",c/* .colorTokens.text.white */.I6.text.white,";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";padding:",c/* .spacing["4"] */.YK["4"]," ",c/* .spacing["8"] */.YK["8"],";font-size:",c/* .fontSize["15"] */.J["15"],";line-height:",c/* .lineHeight["20"] */.K_["20"],";position:relative;&::before{content:'';height:8px;width:8px;background-color:",c/* .colorTokens.color.black.main */.I6.color.black.main,";position:absolute;bottom:-4px;left:50%;transform:translateX(-50%) rotate(45deg);",e==="right"&&(0,s/* .css */.AH)(r6())," ",e==="bottom"&&(0,s/* .css */.AH)(r4())," ",e==="left"&&(0,s/* .css */.AH)(r5()),"}")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/Box.tsx
function nt(){var e=(0,v._)(["\n      border: 1px solid ",";\n    "]);nt=function t(){return e};return e}function nr(){var e=(0,v._)(["\n      border-bottom: 1px solid ",";\n      padding: "," ",";\n    "]);nr=function t(){return e};return e}var nn=/*#__PURE__*/m().forwardRef((e,t)=>{var{children:r,className:n,bordered:i=false,wrapperCss:a}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{ref:t,className:n,css:[no.wrapper(i),a],children:r})});nn.displayName="Box";var ni=/*#__PURE__*/m().forwardRef((e,t)=>{var{children:r,className:n,separator:i=false,tooltip:a}=e;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{ref:t,className:n,css:no.title(i),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:r}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,o/* .jsx */.Y)(r7,{content:a,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"info",width:20,height:20})})})]})});ni.displayName="BoxTitle";var na=/*#__PURE__*/m().forwardRef((e,t)=>{var{children:r,className:n}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{ref:t,className:n,css:no.subtitle,children:/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:r})})});na.displayName="BoxSubtitle";var no={wrapper:e=>/*#__PURE__*/(0,s/* .css */.AH)("background-color:",c/* .colorTokens.background.white */.I6.background.white,";border-radius:",c/* .borderRadius["8"] */.Vq["8"],";padding:",c/* .spacing["12"] */.YK["12"]," ",c/* .spacing["20"] */.YK["20"]," ",c/* .spacing["20"] */.YK["20"],";",e&&(0,s/* .css */.AH)(nt(),c/* .colorTokens.stroke.divider */.I6.stroke.divider)),title:e=>/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body("medium"),";color:",c/* .colorTokens.text.title */.I6.text.title,";display:flex;gap:",c/* .spacing["4"] */.YK["4"],";align-items:center;",e&&(0,s/* .css */.AH)(nr(),c/* .colorTokens.stroke.divider */.I6.stroke.divider,c/* .spacing["12"] */.YK["12"],c/* .spacing["20"] */.YK["20"]),"    & > div{height:20px;svg{color:",c/* .colorTokens.icon.hints */.I6.icon.hints,";}}& > span{display:inline-block;}"),subtitle:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Button.tsx
var ns=r(25074);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var nl=r(17900);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/config.ts
var nc=r(74412);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/types.ts
var nu=r(49842);// CONCATENATED MODULE: ./assets/src/js/v3/shared/hooks/useVisibilityControl.tsx
/**
 * Custom hook to control the visibility of fields based on the provided visibility key and context.
 *
 * @param {string} visibilityKey - The key used to determine the visibility of the field.
 * @returns {boolean} - Returns true if the field should be visible, false otherwise.
 */var nd=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return(0,h.useMemo)(()=>{var t;// If no visibility key provided, always show the field
if(!(0,nu/* .isDefined */.O9)(e)){return true}var[r,n]=(e===null||e===void 0?void 0:e.split("."))||[];if(!(0,nu/* .isDefined */.O9)(r)||!(0,nu/* .isDefined */.O9)(n)){return true}var i=nc/* .tutorConfig */.P===null||nc/* .tutorConfig */.P===void 0?void 0:(t=nc/* .tutorConfig.visibility_control */.P.visibility_control)===null||t===void 0?void 0:t[r];if(!i){return true}var a=nc/* .tutorConfig.current_user.roles */.P.current_user.roles;var o=a.includes("administrator")?"admin":"instructor";var s="".concat(n,"_").concat(o);if(!Object.keys(i).includes(s)){return true}return i[s]==="on"},[e])};/* export default */const nf=nd;// CONCATENATED MODULE: ./assets/src/js/v3/shared/hoc/withVisibilityControl.tsx
var np=e=>{return t=>{var{visibilityKey:r}=t,n=(0,nl._)(t,["visibilityKey"]);var i=nf(r);if(!i){return null}// @ts-ignore
return/*#__PURE__*/(0,o/* .jsx */.Y)(e,(0,u._)({},n))}};// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/style-utils.ts
var nv=r(52874);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/LoadingSpinner.tsx
var nh=r(56705);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/util.ts + 4 modules
var nm=r(33231);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormFieldWrapper.tsx
function ng(){var e=(0,v._)(["\n      opacity: 0.5;\n    "]);ng=function t(){return e};return e}function nb(){var e=(0,v._)(["\n      display: none;\n    "]);nb=function t(){return e};return e}function ny(){var e=(0,v._)(["\n      flex-direction: row;\n      align-items: center;\n      justify-content: space-between;\n      gap: ",";\n    "]);ny=function t(){return e};return e}function n_(){var e=(0,v._)(["\n        padding: 0 "," 0 ",";\n      "]);n_=function t(){return e};return e}function nw(){var e=(0,v._)(["\n        border-radius: 0;\n        border: none;\n        box-shadow: none;\n      "]);nw=function t(){return e};return e}function nx(){var e=(0,v._)(["\n        border-color: transparent;\n      "]);nx=function t(){return e};return e}function nk(){var e=(0,v._)(["\n          outline-color: ",";\n          background-color: ",";\n        "]);nk=function t(){return e};return e}function nA(){var e=(0,v._)(["\n          border-color: ",";\n        "]);nA=function t(){return e};return e}function nY(){var e=(0,v._)(["\n          color: ",";\n        "]);nY=function t(){return e};return e}function nI(){var e=(0,v._)(["\n        border-color: ",";\n        background-color: ",";\n      "]);nI=function t(){return e};return e}function nT(){var e=(0,v._)(["\n        border-color: ",";\n        background-color: ",";\n      "]);nT=function t(){return e};return e}function nD(){var e=(0,v._)(["\n      justify-content: end;\n    "]);nD=function t(){return e};return e}function nM(){var e=(0,v._)(["\n      color: ",";\n    "]);nM=function t(){return e};return e}function nO(){var e=(0,v._)(["\n      ",";\n    "]);nO=function t(){return e};return e}var nE=e=>{var{field:t,fieldState:r,children:n,disabled:i=false,readOnly:a=false,label:s,isInlineLabel:l=false,variant:u,loading:d,placeholder:f,helpText:v,isHidden:h=false,removeBorder:m=false,characterCount:g,isSecondary:_=false,inputStyle:w,wrapperCss:x,inputContainerCss:k,onClickAiButton:A,isMagicAi:Y=false,generateWithAi:I=false,replaceEntireLabel:T=false}=e;var D;var M=(0,nm/* .nanoid */.Ak)();var O=[nH.input({variant:u,hasFieldError:!!r.error,removeBorder:m,readOnly:a,hasHelpText:!!v,isSecondary:_,isMagicAi:Y})];if((0,nu/* .isDefined */.O9)(w)){O.push(w)}var E=/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:nH.inputWrapper,children:[n({id:M,name:t.name,css:O,"aria-invalid":r.error?"true":"false",disabled:i,readOnly:a,placeholder:f,className:"tutor-input-field"}),d&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:nH.loader,children:/*#__PURE__*/(0,o/* .jsx */.Y)(nh/* ["default"] */.Ay,{size:20,color:c/* .colorTokens.icon["default"] */.I6.icon["default"]})})]});return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:[nH.container({disabled:i,isHidden:h}),x],"data-cy":"form-field-wrapper",children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:[nH.inputContainer(l),k],children:[(s||v)&&/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:nH.labelContainer,children:[s&&/*#__PURE__*/(0,o/* .jsxs */.FD)("label",{htmlFor:M,css:nH.label(l,T),children:[s,/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:I,children:/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",onClick:()=>{A===null||A===void 0?void 0:A()},css:nH.aiButton,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"magicAiColorize",width:32,height:32})})})]}),v&&!T&&/*#__PURE__*/(0,o/* .jsx */.Y)(r7,{content:v,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"info",width:20,height:20})})]}),g?/*#__PURE__*/(0,o/* .jsx */.Y)(r7,{placement:"right",hideOnClick:false,content:g.maxLimit-g.inputCharacter>=0?g.maxLimit-g.inputCharacter:(0,p.__)("Limit exceeded","tutor"),children:E}):E]}),((D=r.error)===null||D===void 0?void 0:D.message)&&/*#__PURE__*/(0,o/* .jsxs */.FD)("p",{css:nH.errorLabel(!!r.error,l),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{style:nH.alertIcon,name:"info",width:20,height:20})," ",r.error.message]})]})};/* export default */const nC=nE;var nH={container:e=>{var{disabled:t,isHidden:r}=e;return/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;position:relative;background:inherit;width:100%;",t&&(0,s/* .css */.AH)(ng())," ",r&&(0,s/* .css */.AH)(nb()))},inputContainer:e=>/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["4"] */.YK["4"],";width:100%;",e&&(0,s/* .css */.AH)(ny(),c/* .spacing["12"] */.YK["12"])),input:e=>/*#__PURE__*/(0,s/* .css */.AH)("&.tutor-input-field{",g/* .typography.body */.I.body("regular"),";width:100%;border-radius:",c/* .borderRadius["6"] */.Vq["6"],";border:1px solid ",c/* .colorTokens.stroke["default"] */.I6.stroke["default"],";padding:",c/* .spacing["8"] */.YK["8"]," ",c/* .spacing["16"] */.YK["16"],";color:",c/* .colorTokens.text.title */.I6.text.title,";appearance:textfield;&:not(textarea){height:40px;}",e.hasHelpText&&(0,s/* .css */.AH)(n_(),c/* .spacing["32"] */.YK["32"],c/* .spacing["12"] */.YK["12"])," ",e.removeBorder&&(0,s/* .css */.AH)(nw())," ",e.isSecondary&&(0,s/* .css */.AH)(nx()),":focus{",nv/* .styleUtils.inputFocus */.x.inputFocus,";",e.isMagicAi&&(0,s/* .css */.AH)(nk(),c/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi,c/* .colorTokens.background.magicAi["8"] */.I6.background.magicAi["8"])," ",e.hasFieldError&&(0,s/* .css */.AH)(nA(),c/* .colorTokens.stroke.danger */.I6.stroke.danger),"}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}::placeholder{",g/* .typography.caption */.I.caption("regular"),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";",e.isSecondary&&(0,s/* .css */.AH)(nY(),c/* .colorTokens.text.hints */.I6.text.hints),"}",e.hasFieldError&&(0,s/* .css */.AH)(nI(),c/* .colorTokens.stroke.danger */.I6.stroke.danger,c/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail)," ",e.readOnly&&(0,s/* .css */.AH)(nT(),c/* .colorTokens.background.disable */.I6.background.disable,c/* .colorTokens.background.disable */.I6.background.disable),"}"),errorLabel:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";line-height:",c/* .lineHeight["20"] */.K_["20"],";display:flex;align-items:start;margin-top:",c/* .spacing["4"] */.YK["4"],";",t&&(0,s/* .css */.AH)(nD())," ",e&&(0,s/* .css */.AH)(nM(),c/* .colorTokens.text.status.onHold */.I6.text.status.onHold),"    & svg{margin-right:",c/* .spacing["2"] */.YK["2"],";transform:rotate(180deg);}"),labelContainer:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",c/* .spacing["4"] */.YK["4"],";> div{display:flex;color:",c/* .colorTokens.color.black["30"] */.I6.color.black["30"],";}"),label:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";margin:0px;width:",t?"100%":"auto",";color:",c/* .colorTokens.text.title */.I6.text.title,";display:flex;align-items:center;gap:",c/* .spacing["4"] */.YK["4"],";",e&&(0,s/* .css */.AH)(nO(),g/* .typography.caption */.I.caption())),aiButton:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";width:32px;height:32px;border-radius:",c/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;justify-content:center;:disabled{cursor:not-allowed;}&:focus,&:active,&:hover{background:none;}&:focus-visible{outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),inputWrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;"),loader:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;top:50%;right:",c/* .spacing["12"] */.YK["12"],";transform:translateY(-50%);display:flex;"),alertIcon:/*#__PURE__*/(0,s/* .css */.AH)("flex-shrink:0;")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormInputWithContent.tsx
function nS(){var e=(0,v._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);nS=function t(){return e};return e}function nF(){var e=(0,v._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);nF=function t(){return e};return e}function nL(){var e=(0,v._)(["\n        border-color: ",";\n      "]);nL=function t(){return e};return e}function nN(){var e=(0,v._)(["\n          padding-",": ",";\n        "]);nN=function t(){return e};return e}function nW(){var e=(0,v._)(["\n            padding-",": ",";\n          "]);nW=function t(){return e};return e}function nP(){var e=(0,v._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);nP=function t(){return e};return e}function nj(){var e=(0,v._)(["\n            padding-",": ",";\n          "]);nj=function t(){return e};return e}function nK(){var e=(0,v._)(["\n          font-size: ",";\n          height: 32px;\n          ",";\n        "]);nK=function t(){return e};return e}function nR(){var e=(0,v._)(["\n      ","\n    "]);nR=function t(){return e};return e}function nB(){var e=(0,v._)(["\n      min-width: 32px;\n      height: 32px;\n      padding-inline: ",";\n    "]);nB=function t(){return e};return e}function nz(){var e=(0,v._)(["\n      border-right: 1px solid ",";\n    "]);nz=function t(){return e};return e}function nU(){var e=(0,v._)(["\n      ","\n    "]);nU=function t(){return e};return e}function nV(){var e=(0,v._)(["\n      height: 32px;\n      min-width: 32px;\n      padding-inline: ",";\n    "]);nV=function t(){return e};return e}function nG(){var e=(0,v._)(["\n      border-left: 1px solid ",";\n    "]);nG=function t(){return e};return e}var nq=e=>{var{label:t,content:r,contentPosition:n="left",showVerticalBar:i=true,size:a="regular",type:s="text",field:l,fieldState:c,disabled:f,readOnly:p,loading:v,placeholder:m,helpText:g,onChange:b,onKeyDown:y,isHidden:_,wrapperCss:w,contentCss:x,removeBorder:k=false,selectOnFocus:A=false,isInlineLabel:Y=false}=e;var I=(0,h.useRef)(null);return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{label:t,field:l,fieldState:c,disabled:f,readOnly:p,loading:v,placeholder:m,helpText:g,isHidden:_,removeBorder:k,isInlineLabel:Y,children:e=>{var{css:t}=e,f=(0,nl._)(e,["css"]);var p;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:[n$.inputWrapper(!!c.error,k),w],children:[n==="left"&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:[n$.inputLeftContent(i,a),x],children:r}),/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,d._)((0,u._)({},l,f),{type:"text",value:(p=l.value)!==null&&p!==void 0?p:"",onChange:e=>{var t=s==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;l.onChange(t);if(b){b(t)}},onKeyDown:e=>y===null||y===void 0?void 0:y(e.key),css:[t,n$.input(n,i,a)],autoComplete:"off",ref:e=>{l.ref(e);// @ts-ignore
I.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!A||!I.current){return}I.current.select()},"data-input":true})),n==="right"&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:[n$.inputRightContent(i,a),x],children:r})]})}})};/* export default */const nQ=np(nq);var n$={inputWrapper:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;",!t&&(0,s/* .css */.AH)(nS(),c/* .colorTokens.stroke["default"] */.I6.stroke["default"],c/* .borderRadius["6"] */.Vq["6"],c/* .shadow.input */.r7.input,c/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,s/* .css */.AH)(nF(),c/* .colorTokens.stroke.danger */.I6.stroke.danger,c/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",nv/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,s/* .css */.AH)(nL(),c/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,s/* .css */.AH)("&.tutor-input-field:not(textarea){",g/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,s/* .css */.AH)(nN(),e,c/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,s/* .css */.AH)(nP(),c/* .fontSize["24"] */.J["24"],c/* .fontWeight.medium */.Wy.medium,t&&(0,s/* .css */.AH)(nW(),e,c/* .spacing["12"] */.YK["12"]))," ",r==="small"&&(0,s/* .css */.AH)(nK(),c/* .fontSize["16"] */.J["16"],t&&(0,s/* .css */.AH)(nj(),e,c/* .spacing["4"] */.YK["4"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small()," ",nv/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",c/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",c/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,s/* .css */.AH)(nR(),g/* .typography.body */.I.body())," ",t==="small"&&(0,s/* .css */.AH)(nB(),c/* .spacing["4"] */.YK["4"])," ",e&&(0,s/* .css */.AH)(nz(),c/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small()," ",nv/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",c/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",c/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,s/* .css */.AH)(nU(),g/* .typography.body */.I.body())," ",t==="small"&&(0,s/* .css */.AH)(nV(),c/* .spacing["4"] */.YK["4"])," ",e&&(0,s/* .css */.AH)(nG(),c/* .colorTokens.stroke["default"] */.I6.stroke["default"]))};// CONCATENATED MODULE: ./assets/src/js/v3/shared/hooks/useSelectKeyboardNavigation.ts
var nZ=e=>{var{options:t,isOpen:r,onSelect:n,onClose:i,selectedValue:a}=e;var[o,s]=(0,h.useState)(-1);var l=(0,h.useCallback)(e=>{if(!r)return;var a=(e,r)=>{var n;var i=e;var a=r==="down"?1:-1;do{i+=a;if(i<0)i=t.length-1;if(i>=t.length)i=0}while(i>=0&&i<t.length&&t[i].disabled)if((n=t[i])===null||n===void 0?void 0:n.disabled){return e}return i};switch(e.key){case"ArrowDown":e.preventDefault();s(e=>{var t=a(e===-1?0:e,"down");return t});break;case"ArrowUp":e.preventDefault();s(e=>{var t=a(e===-1?0:e,"up");return t});break;case"Enter":e.preventDefault();e.stopPropagation();if(o>=0&&o<t.length){var l=t[o];if(!l.disabled){i();n(l)}}break;case"Escape":e.preventDefault();e.stopPropagation();i();break;default:break}},[r,t,o,n,i]);(0,h.useEffect)(()=>{if(r){if(o===-1){var e=t.findIndex(e=>e.value===a);var n=e>=0?e:t.findIndex(e=>!e.disabled);s(n)}document.addEventListener("keydown",l,true);return()=>document.removeEventListener("keydown",l,true)}},[r,l,t,a,o]);(0,h.useEffect)(()=>{if(!r){s(-1)}},[r]);var c=(0,h.useCallback)(e=>{var r;if(!((r=t[e])===null||r===void 0?void 0:r.disabled)){s(e)}},[t]);return{activeIndex:o,setActiveIndex:c}};// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/constants.ts
var nX=r(19393);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/FocusTrap.tsx
var nJ=e=>{var{children:t,blurPrevious:r=false}=e;var n=(0,h.useRef)(null);var i=(0,h.useRef)(null);(0,h.useEffect)(()=>{var e=n.current;if(!e){return}i.current=document.activeElement;if(r&&i.current&&i.current!==document.body){i.current.blur()}var t=e=>{if(!e||!e.isConnected){return false}var t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&!e.hidden&&e.offsetParent!==null};var a=()=>{var r='a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';return Array.from(e.querySelectorAll(r)).filter(e=>{return!e.hasAttribute("disabled")&&t(e)})};var o=()=>{var t=document.querySelectorAll('[data-focus-trap="true"]');return t.length>0&&t[t.length-1]===e};var s=t=>{if(!o()||t.key!=="Tab"){return}var r=a();if(r.length===0){return}var n=r[0];var i=r[r.length-1];var s=document.activeElement;if(!e.contains(s)&&document.body!==s){t.preventDefault();n.focus();return}if(t.shiftKey&&s===n){t.preventDefault();i.focus();return}if(!t.shiftKey&&s===i){t.preventDefault();n.focus();return}};document.addEventListener("keydown",s,true);return()=>{document.removeEventListener("keydown",s,true);if(i.current&&t(i.current)){i.current.focus()}};// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,h.cloneElement)(h.Children.only(t),{ref:n,"data-focus-trap":"true",tabIndex:-1})};/* export default */const n0=nJ;// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/modals/Modal.tsx
var n1=r(17944);// CONCATENATED MODULE: ./assets/src/js/v3/shared/hooks/useScrollLock.ts
var n2=null;var n6=[];var n4=null;var n5=()=>{if(n2!==null)return n2;var e=document.createElement("div");e.style.visibility="hidden";e.style.overflow="scroll";e.style.width="100px";document.body.appendChild(e);var t=document.createElement("div");t.style.width="100%";e.appendChild(t);n2=e.offsetWidth-t.offsetWidth;document.body.removeChild(e);return n2};var n3=()=>{if(n4){return}var e=n5();var t=window.innerWidth>document.documentElement.clientWidth;n4={overflow:document.body.style.overflow,paddingRight:document.body.style.paddingRight};document.body.style.overflow="hidden";if(t&&e>0){var r=parseInt(window.getComputedStyle(document.body).paddingRight||"0",10);document.body.style.paddingRight="".concat(r+e,"px")}};var n8=()=>{if(!n4){return}document.body.style.overflow=n4.overflow;document.body.style.paddingRight=n4.paddingRight;n4=null};var n9=()=>{var e=Symbol("scroll-lock");n6.push(e);if(n6.length===1){n3()}return e};var n7=new Set;var ie=e=>{var t=n6.indexOf(e);if(t===-1){return}n6.splice(t,1);n7.delete(e);if(n6.length===0&&n7.size===0){n8()}};var it=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:true;var t=(0,h.useRef)(null);(0,h.useEffect)(()=>{if(!e){if(t.current){ie(t.current);t.current=null}return}t.current=n9();return()=>{if(t.current){var e=t.current;t.current=null;n7.add(e);requestAnimationFrame(()=>{ie(e)})}}},[e])};// CONCATENATED MODULE: ./assets/src/js/v3/shared/hooks/usePortalPopover.tsx
var ir={SAFE_MARGIN:12,MAX_OFFSET_VERTICAL:6,MAX_OFFSET_HORIZONTAL:12,CENTER_OFFSET:8};var ii=4;var ia={TOP:"top",TOP_LEFT:"topLeft",TOP_RIGHT:"topRight",RIGHT:"right",RIGHT_TOP:"rightTop",RIGHT_BOTTOM:"rightBottom",BOTTOM:"bottom",BOTTOM_LEFT:"bottomLeft",BOTTOM_RIGHT:"bottomRight",LEFT:"left",LEFT_TOP:"leftTop",LEFT_BOTTOM:"leftBottom",MIDDLE:"middle",ABSOLUTE_CENTER:"absoluteCenter"};var io=e=>{var t={[ia.TOP]:ia.TOP,[ia.TOP_LEFT]:ia.TOP_RIGHT,[ia.TOP_RIGHT]:ia.TOP_LEFT,[ia.RIGHT]:ia.LEFT,[ia.RIGHT_TOP]:ia.LEFT_TOP,[ia.RIGHT_BOTTOM]:ia.LEFT_BOTTOM,[ia.BOTTOM]:ia.BOTTOM,[ia.BOTTOM_LEFT]:ia.BOTTOM_RIGHT,[ia.BOTTOM_RIGHT]:ia.BOTTOM_LEFT,[ia.LEFT]:ia.RIGHT,[ia.LEFT_TOP]:ia.RIGHT_TOP,[ia.LEFT_BOTTOM]:ia.RIGHT_BOTTOM,[ia.MIDDLE]:ia.MIDDLE,[ia.ABSOLUTE_CENTER]:ia.ABSOLUTE_CENTER};return t[e]||e};var is=e=>{return{top:e.top,left:-e.left}};var il=(e,t)=>{var{width:r,height:n}=t;return{top:e.top<0,bottom:e.top+n>window.innerHeight,left:e.left<0,right:e.left+r>window.innerWidth}};var ic=(e,t)=>{return e.startsWith("top")&&t.top||e.startsWith("bottom")&&t.bottom||e.startsWith("left")&&t.left||e.startsWith("right")&&t.right};var iu=(e,t,r,n,i)=>{var{width:a,height:o}=r;var{top:s,left:l}=i;var c=t.left+t.width/2-a/2;var u=t.top+t.height/2-o/2;var d={[ia.TOP]:{top:t.top-o-n,left:c},[ia.TOP_LEFT]:{top:t.top-o-n,left:t.left},[ia.TOP_RIGHT]:{top:t.top-o-n,left:t.right-a},[ia.BOTTOM]:{top:t.bottom+n,left:c},[ia.BOTTOM_LEFT]:{top:t.bottom+n,left:t.left},[ia.BOTTOM_RIGHT]:{top:t.bottom+n,left:t.right-a},[ia.LEFT]:{top:u,left:t.left-a-n},[ia.LEFT_TOP]:{top:t.top,left:t.left-a-n},[ia.LEFT_BOTTOM]:{top:t.bottom-o,left:t.left-a-n},[ia.RIGHT]:{top:u,left:t.right+n},[ia.RIGHT_TOP]:{top:t.top,left:t.right+n},[ia.RIGHT_BOTTOM]:{top:t.bottom-o,left:t.right+n},[ia.MIDDLE]:{top:u,left:c},[ia.ABSOLUTE_CENTER]:{top:window.innerHeight/2-o/2,left:window.innerWidth/2-a/2}};var f=d[e]||d[ia.BOTTOM];return{top:f.top+s,left:f.left+l}};var id=(e,t,r,n,i,a)=>{var o={[ia.TOP]:ia.BOTTOM,[ia.TOP_LEFT]:ia.BOTTOM_LEFT,[ia.TOP_RIGHT]:ia.BOTTOM_RIGHT,[ia.BOTTOM]:ia.TOP,[ia.BOTTOM_LEFT]:ia.TOP_LEFT,[ia.BOTTOM_RIGHT]:ia.TOP_RIGHT,[ia.LEFT]:ia.RIGHT,[ia.LEFT_TOP]:ia.RIGHT_TOP,[ia.LEFT_BOTTOM]:ia.RIGHT_BOTTOM,[ia.RIGHT]:ia.LEFT,[ia.RIGHT_TOP]:ia.LEFT_TOP,[ia.RIGHT_BOTTOM]:ia.LEFT_BOTTOM,[ia.MIDDLE]:ia.MIDDLE,[ia.ABSOLUTE_CENTER]:ia.ABSOLUTE_CENTER};var s=il(e,r);var l=ic(t,s);if(!l){return{position:e,placement:t}}// Try opposite placement
var c=o[t];var u=iu(c,n,r,i,a);var d=il(u,r);var f=ic(c,d);if(!f){return{position:u,placement:c}}return{position:e,placement:t}};var ip=(e,t,r,n)=>{var{width:i,height:a}=n;// Skip arrow for covered triggers or special placements
var o=[ia.MIDDLE,ia.ABSOLUTE_CENTER].includes(e);var s=r.left<t.left+ir.SAFE_MARGIN&&r.left+i>t.right-ir.SAFE_MARGIN&&r.top<t.top+ir.SAFE_MARGIN&&r.top+a>t.bottom-ir.SAFE_MARGIN;if(o||s)return{};var l=e.startsWith("top")||e.startsWith("bottom");var c=e.startsWith("left")||e.startsWith("right");if(l){var u=t.left+t.width/2;var d=Math.max(ir.SAFE_MARGIN,Math.min(i-ir.MAX_OFFSET_VERTICAL,u-r.left))-ir.CENTER_OFFSET;if(nX/* .isRTL */.V8){d=i-d-ir.CENTER_OFFSET*2}return{arrowLeft:d}}if(c){var f=t.top+t.height/2;var p=Math.max(ir.SAFE_MARGIN,Math.min(a-ir.MAX_OFFSET_HORIZONTAL,f-r.top))-ir.CENTER_OFFSET;return{arrowTop:p}}return{}};var iv=function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:ii;var{width:n,height:i}=t;return{left:Math.max(r,Math.min(window.innerWidth-n-r,e.left)),top:Math.max(r,Math.min(window.innerHeight-i-r,e.top))}};var ih=e=>{var{isOpen:t,triggerRef:r,placement:n=ia.BOTTOM,arrow:i=false,gap:a=10,autoAdjustOverflow:o=true,positionModifier:s={top:0,left:0},dependencies:l=[]}=e;var c=(0,h.useMemo)(()=>r||{current:null},[r]);var f=(0,h.useRef)(null);var[p,v]=(0,h.useState)(0);var[m,g]=(0,h.useState)({left:0,top:0,placement:ia.BOTTOM});var b=(0,h.useMemo)(()=>{return nX/* .isRTL */.V8?io(n):n},[n]);var y=(0,h.useMemo)(()=>{return nX/* .isRTL */.V8?is(s):s},[s]);(0,h.useEffect)(()=>{if(!c.current)return;v(c.current.getBoundingClientRect().width)},[c]);(0,h.useEffect)(()=>{if(!t||!c.current||!f.current)return;var e=c.current.getBoundingClientRect();var r=f.current.getBoundingClientRect();var n={width:r.width||e.width,height:r.height};var s=iu(b,e,n,a,y);var l=b;if(o){var p=id(s,b,n,e,a,y);s=p.position;l=p.placement}s=iv(s,n);var v=i?ip(l,e,s,n):{};g((0,u._)((0,d._)((0,u._)({},s),{placement:l}),v))},[c,f,t,b,y,a,i,o,// eslint-disable-next-line react-hooks/exhaustive-deps
...l]);return{position:m,triggerWidth:p,triggerRef:c,popoverRef:f}};var im=e=>{var{isOpen:t,children:r,onClickOutside:n,onEscape:i,animationType:a=r2/* .AnimationType.slideDown */.J6.slideDown}=e;var{hasModalOnStack:s}=(0,n1/* .useModal */.h)();it(t);(0,h.useEffect)(()=>{var e=e=>{if(e.key==="Escape"){i===null||i===void 0?void 0:i()}};if(!t)return;document.addEventListener("keydown",e,true);return()=>{document.removeEventListener("keydown",e,true)}},[t,s,i]);var{transitions:l}=(0,r2/* .useAnimation */.sM)({data:t,animationType:a});return l((e,t)=>{if(!t){return null}return/*#__PURE__*/(0,rN.createPortal)(/*#__PURE__*/(0,o/* .jsx */.Y)(r2/* .AnimatedDiv */.LK,{css:ig.wrapper,style:e,children:/*#__PURE__*/(0,o/* .jsx */.Y)(n0,{children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{className:"tutor-portal-popover",role:"presentation",children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ig.backdrop,onKeyUp:nm/* .noop */.lQ,onClick:e=>{e.stopPropagation();n===null||n===void 0?void 0:n()}}),r]})})}),document.body)})};var ig={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:fixed;z-index:",c/* .zIndex.highest */.fE.highest,";inset:0;"),backdrop:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.centeredFlex */.x.centeredFlex,";position:fixed;inset:0;z-index:",c/* .zIndex.negative */.fE.negative,";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/molecules/Popover.tsx
function ib(){var e=(0,v._)(["\n              border-left: 8px solid transparent;\n              border-right: 8px solid transparent;\n              border-top: 8px solid ",";\n              border-bottom: none;\n              left: ",";\n              bottom: -8px;\n              transform: ",";\n            "]);ib=function t(){return e};return e}function iy(){var e=(0,v._)(["\n              border-left: 8px solid transparent;\n              border-right: 8px solid transparent;\n              border-bottom: 8px solid ",";\n              border-top: none;\n              left: ",";\n              top: -8px;\n              transform: ",";\n            "]);iy=function t(){return e};return e}function i_(){var e=(0,v._)(["\n              border-top: 8px solid transparent;\n              border-bottom: 8px solid transparent;\n              border-left: 8px solid ",";\n              border-right: none;\n              right: -8px;\n              top: ",";\n              transform: ",";\n            "]);i_=function t(){return e};return e}function iw(){var e=(0,v._)(["\n              border-top: 8px solid transparent;\n              border-bottom: 8px solid transparent;\n              border-right: 8px solid ",";\n              border-left: none;\n              left: -8px;\n              top: ",";\n              transform: ",";\n            "]);iw=function t(){return e};return e}function ix(){var e=(0,v._)(["\n            content: '';\n            position: absolute;\n            width: 0;\n            height: 0;\n            border-color: transparent;\n            border-style: solid;\n            ","\n            ","\n            ","\n            ","\n          "]);ix=function t(){return e};return e}var ik=e=>{var{children:t,placement:r=ia.BOTTOM,triggerRef:n,isOpen:i,gap:a,maxWidth:s,closePopover:l,closeOnEscape:c=true,animationType:u=r2/* .AnimationType.slideLeft */.J6.slideLeft,arrow:d=false,border:f=false,autoAdjustOverflow:p=true,positionModifier:v={top:0,left:0},dependencies:h=[]}=e;var{position:m,triggerWidth:g,popoverRef:b}=ih({triggerRef:n,isOpen:i,autoAdjustOverflow:p,placement:r,arrow:d,gap:a,positionModifier:v,dependencies:h});return/*#__PURE__*/(0,o/* .jsx */.Y)(im,{isOpen:i,onClickOutside:l,animationType:u,onEscape:c?l:undefined,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:iA.wrapper({placement:nX/* .isRTL */.V8?io(m.placement):m.placement,hideArrow:!d||m.arrowLeft===undefined&&m.arrowTop===undefined,arrowLeft:m.arrowLeft,arrowTop:m.arrowTop}),style:{left:m.left,top:m.top,maxWidth:s!==null&&s!==void 0?s:g},ref:b,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:iA.content({border:f}),children:t})})})};var iA={wrapper:e=>{var{placement:t,hideArrow:r,arrowLeft:n,arrowTop:i}=e;return/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;width:100%;z-index:",c/* .zIndex.dropdown */.fE.dropdown,";&::before{",t&&!r?(0,s/* .css */.AH)(ix(),t.startsWith("top")&&(0,s/* .css */.AH)(ib(),c/* .colorTokens.stroke.white */.I6.stroke.white,n!==undefined?"".concat(n,"px"):"50%",n===undefined?"translateX(-50%)":"none"),t.startsWith("bottom")&&(0,s/* .css */.AH)(iy(),c/* .colorTokens.stroke.white */.I6.stroke.white,n!==undefined?"".concat(n,"px"):"50%",n===undefined?"translateX(-50%)":"none"),t.startsWith("left")&&(0,s/* .css */.AH)(i_(),c/* .colorTokens.stroke.white */.I6.stroke.white,i!==undefined?"".concat(i,"px"):"50%",i===undefined?"translateY(-50%)":"none"),t.startsWith("right")&&(0,s/* .css */.AH)(iw(),c/* .colorTokens.stroke.white */.I6.stroke.white,i!==undefined?"".concat(i,"px"):"50%",i===undefined?"translateY(-50%)":"none")):"","}")},content:e=>{var{border:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("background-color:",c/* .colorTokens.background.white */.I6.background.white,";box-shadow:",c/* .shadow.popover */.r7.popover,";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";border:",t?"1px solid ".concat(c/* .colorTokens.stroke.divider */.I6.stroke.divider):"none",";::-webkit-scrollbar{background-color:",c/* .colorTokens.background.white */.I6.background.white,";width:10px;}::-webkit-scrollbar-thumb{background-color:",c/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";}")}};/* export default */const iY=ik;// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormSelectInput.tsx
function iI(){var e=(0,v._)(["\n      &::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background: ",";\n        color: ",";\n        border: 1px solid transparent;\n        -webkit-mask:\n          linear-gradient(#fff 0 0) padding-box,\n          linear-gradient(#fff 0 0);\n        -webkit-mask-composite: xor;\n        mask-composite: exclude;\n        border-radius: 6px;\n      }\n    "]);iI=function t(){return e};return e}function iT(){var e=(0,v._)(["\n        height: 32px;\n        padding-top: ",";\n        padding-bottom: ",";\n      "]);iT=function t(){return e};return e}function iD(){var e=(0,v._)(["\n        padding-left: ",";\n      "]);iD=function t(){return e};return e}function iM(){var e=(0,v._)(["\n          height: 48px;\n          padding-bottom: ",";\n        "]);iM=function t(){return e};return e}function iO(){var e=(0,v._)(["\n        height: 56px;\n        padding-bottom: ",";\n\n        ","\n      "]);iO=function t(){return e};return e}function iE(){var e=(0,v._)(["\n        background-color: ",";\n      "]);iE=function t(){return e};return e}function iC(){var e=(0,v._)(["\n        position: relative;\n        border: none;\n        background: transparent;\n      "]);iC=function t(){return e};return e}function iH(){var e=(0,v._)(["\n          outline-color: ",";\n          background-color: ",";\n        "]);iH=function t(){return e};return e}function iS(){var e=(0,v._)(["\n          border-color: ",";\n          background-color: ",";\n        "]);iS=function t(){return e};return e}function iF(){var e=(0,v._)(["\n      bottom: ",";\n    "]);iF=function t(){return e};return e}function iL(){var e=(0,v._)(["\n      padding-left: calc("," + 1px);\n    "]);iL=function t(){return e};return e}function iN(){var e=(0,v._)(["\n        color: ",";\n\n        &:hover {\n          text-decoration: underline;\n        }\n      "]);iN=function t(){return e};return e}function iW(){var e=(0,v._)(["\n      min-width: 200px;\n    "]);iW=function t(){return e};return e}function iP(){var e=(0,v._)(["\n      background-color: ",";\n    "]);iP=function t(){return e};return e}function ij(){var e=(0,v._)(["\n      background-color: ",";\n      position: relative;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 3px;\n        height: 100%;\n        background-color: ",";\n        border-radius: 0 "," "," 0;\n      }\n    "]);ij=function t(){return e};return e}function iK(){var e=(0,v._)(["\n      transform: rotate(180deg);\n    "]);iK=function t(){return e};return e}var iR=e=>{var{size:t="regular",leftIconPadding:r=48,wrapperCss:n,options:i,field:a,fieldState:s,onChange:l=nm/* .noop */.lQ,label:c,placeholder:f="",disabled:v,readOnly:m,loading:g,isSearchable:_=false,isInlineLabel:w,hideCaret:x,listLabel:k,isClearable:A=false,helpText:Y,removeOptionsMinWidth:I=false,leftIcon:T,iconSize:D,removeBorder:M,dataAttribute:O,isSecondary:E=false,isMagicAi:C=false,isAiOutline:H=false,selectOnFocus:S,optionItemCss:F}=e;var L;var N=D!==null&&D!==void 0?D:t==="small"?20:32;var W=(0,h.useCallback)(()=>i.find(e=>e.value===a.value)||{label:"",value:"",description:""},[a.value,i]);var P=(0,h.useMemo)(()=>i.some(e=>(0,nu/* .isDefined */.O9)(e.description)),[i]);var[j,K]=(0,h.useState)((L=W())===null||L===void 0?void 0:L.label);var[R,B]=(0,h.useState)(false);var[z,U]=(0,h.useState)("");var[V,G]=(0,h.useState)(false);var q=(0,h.useRef)(null);var Q=(0,h.useRef)(null);var $=(0,h.useRef)(null);var Z=(0,h.useRef)(null);var X=(0,h.useMemo)(()=>{if(_){return i.filter(e=>{var{label:t}=e;return t.toLowerCase().includes(z.toLowerCase())})}return i},[z,_,i]);var J=(0,h.useMemo)(()=>{return i.find(e=>e.value===a.value)},[a.value,i]);var ee=(0,u._)({},(0,nu/* .isDefined */.O9)(O)&&{[O]:true});(0,h.useEffect)(()=>{var e;K((e=W())===null||e===void 0?void 0:e.label)},[a.value,W]);(0,h.useEffect)(()=>{if(V){var e;K((e=W())===null||e===void 0?void 0:e.label)}},[W,V]);var et=(e,t)=>{t===null||t===void 0?void 0:t.stopPropagation();if(!e.disabled){G(false);B(false);U("");a.onChange(e.value);l(e)}};var{activeIndex:er,setActiveIndex:en}=nZ({options:X,isOpen:V,selectedValue:a.value,onSelect:et,onClose:()=>{G(false);B(false);U("")}});(0,h.useEffect)(()=>{if(V&&er>=0&&Z.current){Z.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[V,er]);return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{fieldState:s,field:a,label:c,disabled:v||i.length===0,readOnly:m,loading:g,isInlineLabel:w,helpText:Y,removeBorder:M,isSecondary:E,isMagicAi:C,children:e=>{var l,c;var{css:h}=e,w=(0,nl._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:iz.mainWrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:iz.inputWrapper(H),ref:Q,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:iz.leftIcon,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:T,children:T}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:J===null||J===void 0?void 0:J.icon,children:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:e,width:N,height:N})})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:{width:"100%"},children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,d._)((0,u._)({},w,ee),{ref:e=>{a.ref(e);// @ts-ignore
q.current=e;// this is not ideal but it is the only way to set ref to the input element
},className:"tutor-input-field",css:[h,n,iz.input({hasLeftIcon:!!T||!!(J===null||J===void 0?void 0:J.icon),leftIconPadding:r,hasDescription:P,hasError:!!s.error,isMagicAi:C,isAiOutline:H,size:t})],autoComplete:"off",readOnly:m||!_,placeholder:f,value:R?z:j,title:j,onClick:e=>{var t;e.stopPropagation();G(e=>!e);(t=q.current)===null||t===void 0?void 0:t.focus()},onKeyDown:e=>{if(e.key==="Enter"){var t;e.preventDefault();G(e=>!e);(t=q.current)===null||t===void 0?void 0:t.focus()}if(e.key==="Tab"){G(false)}},onFocus:S&&_?e=>{e.target.select()}:undefined,onChange:e=>{K(e.target.value);if(_){B(true);U(e.target.value)}},"data-select":true})),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:P,children:/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:iz.description({hasLeftIcon:!!T,leftIconPadding:r,size:t}),title:(l=W())===null||l===void 0?void 0:l.description,children:(c=W())===null||c===void 0?void 0:c.description})})]}),!x&&!g&&/*#__PURE__*/(0,o/* .jsx */.Y)("button",{tabIndex:-1,type:"button",css:iz.caretButton({isOpen:V}),onClick:()=>{var e;G(e=>!e);(e=q.current)===null||e===void 0?void 0:e.focus()},disabled:v||m||i.length===0,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"chevronDown",width:t==="small"?16:20,height:t==="small"?16:20})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(iY,{triggerRef:Q,isOpen:V,dependencies:[X.length],animationType:r2/* .AnimationType.slideDown */.J6.slideDown,closePopover:()=>{G(false);B(false);U("")},children:/*#__PURE__*/(0,o/* .jsxs */.FD)("ul",{css:[iz.options(I)],children:[!!k&&/*#__PURE__*/(0,o/* .jsx */.Y)("li",{css:iz.listLabel,children:k}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:X.length>0,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)("li",{css:iz.emptyState,children:(0,p.__)("No options available","tutor")}),children:X.map((e,t)=>/*#__PURE__*/(0,o/* .jsx */.Y)("li",{ref:e.value===a.value?$:er===t?Z:null,css:[iz.optionItem({isSelected:e.value===a.value,isActive:t===er,isDisabled:!!e.disabled}),F],children:/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:iz.label,onClick:t=>{if(!e.disabled){et(e,t)}},disabled:e.disabled,title:e.label,onMouseOver:()=>en(t),onMouseLeave:()=>t!==er&&en(-1),onFocus:()=>en(t),"aria-selected":er===t,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:e.icon,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:e.icon,width:N,height:N})}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:e.label})]})},String(e.value)))}),A&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:iz.clearButton({isDisabled:j===""}),children:/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{variant:"text",disabled:j==="",icon:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"delete"}),onClick:()=>{a.onChange(null);K("");U("");G(false)},children:(0,p.__)("Clear","tutor")})})]})})]})}})};/* export default */const iB=iR;var iz={mainWrapper:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;"),inputWrapper:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;return/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;",e&&(0,s/* .css */.AH)(iI(),c/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,c/* .colorTokens.text.primary */.I6.text.primary))},leftIcon:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;left:",c/* .spacing["8"] */.YK["8"],";",nv/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;height:100%;color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";z-index:",c/* .zIndex.positive */.fE.positive,";"),input:e=>{var{hasLeftIcon:t,leftIconPadding:r,hasDescription:n,hasError:i=false,isMagicAi:a=false,isAiOutline:o=false,size:l}=e;return/*#__PURE__*/(0,s/* .css */.AH)("&.tutor-input-field:not(textarea){",g/* .typography.body */.I.body(),";width:100%;cursor:pointer;padding-right:",c/* .spacing["32"] */.YK["32"],";",nv/* .styleUtils.textEllipsis */.x.textEllipsis,";background-color:transparent;background-color:",c/* .colorTokens.background.white */.I6.background.white,";",l==="small"&&(0,s/* .css */.AH)(iT(),c/* .spacing["6"] */.YK["6"],c/* .spacing["6"] */.YK["6"])," ",t&&(0,s/* .css */.AH)(iD(),c/* .spacing */.YK[r])," ",n&&(0,s/* .css */.AH)(iO(),c/* .spacing["24"] */.YK["24"],l==="small"&&(0,s/* .css */.AH)(iM(),c/* .spacing["20"] */.YK["20"]))," ",i&&(0,s/* .css */.AH)(iE(),c/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail)," ",o&&(0,s/* .css */.AH)(iC()),":focus{",nv/* .styleUtils.inputFocus */.x.inputFocus,";",a&&(0,s/* .css */.AH)(iH(),c/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi,c/* .colorTokens.background.magicAi["8"] */.I6.background.magicAi["8"])," ",i&&(0,s/* .css */.AH)(iS(),c/* .colorTokens.stroke.danger */.I6.stroke.danger,c/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),"}}")},description:e=>{var{hasLeftIcon:t,leftIconPadding:r,size:n}=e;return/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";",nv/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"    color:",c/* .colorTokens.text.hints */.I6.text.hints,";position:absolute;bottom:",c/* .spacing["8"] */.YK["8"],";padding-inline:calc(",c/* .spacing["16"] */.YK["16"]," + 1px) ",c/* .spacing["32"] */.YK["32"],";",n==="small"&&(0,s/* .css */.AH)(iF(),c/* .spacing["4"] */.YK["4"])," ",t&&(0,s/* .css */.AH)(iL(),c/* .spacing */.YK[r]))},listLabel:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body(),";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";min-height:40px;display:flex;align-items:center;padding-left:",c/* .spacing["16"] */.YK["16"],";"),clearButton:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("padding:",c/* .spacing["4"] */.YK["4"]," ",c/* .spacing["8"] */.YK["8"],";border-top:1px solid ",c/* .colorTokens.stroke["default"] */.I6.stroke["default"],";& > button{padding:0;width:100%;font-size:",c/* .fontSize["12"] */.J["12"],";> span{justify-content:center;}",!t&&(0,s/* .css */.AH)(iN(),c/* .colorTokens.text.title */.I6.text.title),"}")},options:e=>/*#__PURE__*/(0,s/* .css */.AH)("z-index:",c/* .zIndex.dropdown */.fE.dropdown,";background-color:",c/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",c/* .shadow.popover */.r7.popover,";padding:",c/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:500px;border-radius:",c/* .borderRadius["6"] */.Vq["6"],";",nv/* .styleUtils.overflowYAuto */.x.overflowYAuto,";scrollbar-gutter:auto;",!e&&(0,s/* .css */.AH)(iW())),optionItem:e=>{var{isSelected:t=false,isActive:r=false,isDisabled:n=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body(),";min-height:36px;height:100%;width:100%;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;cursor:",n?"not-allowed":"pointer",";opacity:",n?.5:1,";",r&&(0,s/* .css */.AH)(iP(),c/* .colorTokens.background.hover */.I6.background.hover),"    &:hover{background-color:",!n&&c/* .colorTokens.background.hover */.I6.background.hover,";}",!n&&t&&(0,s/* .css */.AH)(ij(),c/* .colorTokens.background.active */.I6.background.active,c/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],c/* .borderRadius["6"] */.Vq["6"],c/* .borderRadius["6"] */.Vq["6"]))},label:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";",nv/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";color:",c/* .colorTokens.text.title */.I6.text.title,";width:100%;height:100%;display:flex;align-items:center;gap:",c/* .spacing["8"] */.YK["8"],";margin:0 ",c/* .spacing["12"] */.YK["12"],";padding:",c/* .spacing["6"] */.YK["6"]," 0;text-align:left;line-height:",c/* .lineHeight["24"] */.K_["24"],";word-break:break-all;cursor:pointer;&:hover,&:focus,&:active{background-color:transparent;color:",c/* .colorTokens.text.title */.I6.text.title,";}span{flex-shrink:0;",nv/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),"      width:100%;}svg{flex-shrink:0;}"),arrowUpDown:/*#__PURE__*/(0,s/* .css */.AH)("color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;justify-content:center;align-items:center;margin-top:",c/* .spacing["2"] */.YK["2"],";"),optionsContainer:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;overflow:hidden auto;min-width:16px;max-width:calc(100% - 32px);"),caretButton:e=>{var{isOpen:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";position:absolute;right:",c/* .spacing["4"] */.YK["4"],";display:flex;align-items:center;transition:transform 0.3s ease-in-out;color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",c/* .borderRadius["4"] */.Vq["4"],";padding:",c/* .spacing["6"] */.YK["6"],";height:100%;&:focus,&:active,&:hover{background:none;color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:focus-visible{outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";}",t&&(0,s/* .css */.AH)(iK()))},emptyState:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.flexCenter */.x.flexCenter(),";padding:",c/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/utils/currency.ts
var iU,iV,iG,iq,iQ;var i$=e=>{var{symbol:t="$",position:r="left",thousandSeparator:n=",",decimalSeparator:i=".",fraction_digits:a=2}=e;return e=>{var o=e=>{var t=e.toFixed(a);var[r,o]=t.split(".");var s=r.replace(/\B(?=(\d{3})+(?!\d))/g,n);return o?"".concat(s).concat(i).concat(o):s};var s=o(Number(e));if(r==="left"){return"".concat(t).concat(s)}return"".concat(s).concat(t)}};var iZ,iX,iJ,i0,i1;var i2=i$({symbol:(iZ=(iU=nc/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||iU===void 0?void 0:iU.symbol)!==null&&iZ!==void 0?iZ:"$",position:(iX=(iV=nc/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||iV===void 0?void 0:iV.position)!==null&&iX!==void 0?iX:"left",thousandSeparator:(iJ=(iG=nc/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||iG===void 0?void 0:iG.thousand_separator)!==null&&iJ!==void 0?iJ:",",decimalSeparator:(i0=(iq=nc/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||iq===void 0?void 0:iq.decimal_separator)!==null&&i0!==void 0?i0:".",fraction_digits:Number((i1=(iQ=nc/* .tutorConfig.tutor_currency */.P.tutor_currency)===null||iQ===void 0?void 0:iQ.no_of_decimal)!==null&&i1!==void 0?i1:2)});var i6=e=>{var t,r,n;var i;var a=(i=(t=tutorConfig.tutor_currency)===null||t===void 0?void 0:t.currency)!==null&&i!==void 0?i:"USD";var o;var s=(o=(r=tutorConfig.local)===null||r===void 0?void 0:r.replace("_","-"))!==null&&o!==void 0?o:"en-US";var l;var c=Number((l=(n=tutorConfig.tutor_currency)===null||n===void 0?void 0:n.no_of_decimal)!==null&&l!==void 0?l:2);var u=new Intl.NumberFormat(s,{style:"currency",currency:a,minimumFractionDigits:c});return u.format(e)};var i4=e=>{var{discount_type:t,discount_amount:r,total:n}=e;var i=i5({discount_amount:r,discount_type:t,total:n});return n-i};var i5=e=>{var{discount_type:t,discount_amount:r,total:n}=e;if(t==="flat"){return r}return n*(r/100)};// CONCATENATED MODULE: ./assets/src/js/v3/shared/utils/validation.ts
var i3=()=>({required:{value:true,message:(0,p.__)("This field is required","tutor")}});var i8=e=>{var{maxValue:t,message:r}=e;return{maxLength:{value:t,message:r||__("Max. value should be ".concat(t),"tutor")}}};var i9=()=>({validate:e=>{if((e===null||e===void 0?void 0:e.amount)===undefined){return __("The field is required","tutor")}return undefined}});var i7=e=>{if(!isValid(new Date(e||""))){return __("Invalid date entered!","tutor")}return undefined};var ae=e=>({validate:t=>{if(t&&e<t.length){return(0,p.__)("Maximum ".concat(e," character supported"),"tutor")}return undefined}});var at=e=>{if(!e){return undefined}var t=__("Invalid time entered!","tutor");var[r,n]=e.split(":");if(!r||!n){return t}var[i,a]=n.split(" ");if(!i||!a){return t}if(r.length!==2||i.length!==2){return t}if(Number(r)<1||Number(r)>12){return t}if(Number(i)<0||Number(i)>59){return t}if(!["am","pm"].includes(a.toLowerCase())){return t}return undefined};// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/ErrorBoundary.tsx
var ar=r(27246);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/modals/BasicModalWrapper.tsx
function an(){var e=(0,v._)(["\n      max-width: 100vw;\n      width: 100vw;\n      height: 95vh;\n    "]);an=function t(){return e};return e}function ai(){var e=(0,v._)(["\n      position: absolute;\n      right: ",";\n      top: ",";\n    "]);ai=function t(){return e};return e}function aa(){var e=(0,v._)(["\n      height: calc(100% - ","px);\n    "]);aa=function t(){return e};return e}var ao=e=>{var{children:t,onClose:r,title:n,subtitle:i,icon:a,entireHeader:s,actions:l,fullScreen:c,modalStyle:u,maxWidth:d=nX/* .modal.BASIC_MODAL_MAX_WIDTH */.yl.BASIC_MODAL_MAX_WIDTH,isCloseAble:f=true,blurTriggerElement:p=true}=e;it();return/*#__PURE__*/(0,o/* .jsx */.Y)(n0,{blurPrevious:p,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:[al.container({isFullScreen:c}),u],style:{maxWidth:"".concat(d,"px")},children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:al.header({hasEntireHeader:!!s}),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:!s,fallback:s,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:al.headerContent,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:al.iconWithTitle,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:a,children:a}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,o/* .jsx */.Y)("p",{css:al.title,children:n})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:i,children:/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:al.subtitle,children:i})})]})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:al.actionsWrapper({hasEntireHeader:!!s}),children:/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:l,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:f,children:/*#__PURE__*/(0,o/* .jsx */.Y)("button",{"data-cy":"close-modal",type:"button",css:al.closeButton,onClick:r,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"timesThin",width:24,height:24})})}),children:l})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:al.content({isFullScreen:c}),children:/*#__PURE__*/(0,o/* .jsx */.Y)(ar/* ["default"] */.A,{children:t})})]})})};/* export default */const as=ao;var al={container:e=>{var{isFullScreen:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("position:relative;background:",c/* .colorTokens.background.white */.I6.background.white,";box-shadow:",c/* .shadow.modal */.r7.modal,";border-radius:",c/* .borderRadius["10"] */.Vq["10"],";overflow:hidden;top:50%;left:50%;transform:translate(-50%,-50%);",t&&(0,s/* .css */.AH)(an())," ",c/* .Breakpoint.smallTablet */.EA.smallTablet,"{width:90%;}")},header:e=>{var{hasEntireHeader:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;width:100%;height:",!t?"".concat(nX/* .modal.BASIC_MODAL_HEADER_HEIGHT */.yl.BASIC_MODAL_HEADER_HEIGHT,"px"):"auto",";background:",c/* .colorTokens.background.white */.I6.background.white,";border-bottom:",!t?"1px solid ".concat(c/* .colorTokens.stroke.divider */.I6.stroke.divider):"none",";padding-inline:",c/* .spacing["16"] */.YK["16"],";")},headerContent:/*#__PURE__*/(0,s/* .css */.AH)("place-self:center start;display:inline-flex;align-items:center;gap:",c/* .spacing["12"] */.YK["12"],";"),iconWithTitle:/*#__PURE__*/(0,s/* .css */.AH)("display:inline-flex;align-items:center;gap:",c/* .spacing["4"] */.YK["4"],";color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";"),title:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body("medium"),";color:",c/* .colorTokens.text.title */.I6.text.title,";"),subtitle:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.text.ellipsis */.x.text.ellipsis(1)," ",g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";"),actionsWrapper:e=>{var{hasEntireHeader:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("place-self:center end;display:inline-flex;gap:",c/* .spacing["16"] */.YK["16"],";",t&&(0,s/* .css */.AH)(ai(),c/* .spacing["16"] */.YK["16"],c/* .spacing["16"] */.YK["16"]))},closeButton:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",c/* .borderRadius.circle */.Vq.circle,";background:",c/* .colorTokens.background.white */.I6.background.white,";&:focus,&:active,&:hover{background:",c/* .colorTokens.background.white */.I6.background.white,";}svg{color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";transition:color 0.3s ease-in-out;}:hover{svg{color:",c/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",c/* .shadow.focus */.r7.focus,";}"),content:e=>{var{isFullScreen:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("background-color:",c/* .colorTokens.background.white */.I6.background.white,";overflow-y:auto;max-height:90vh;",t&&(0,s/* .css */.AH)(aa(),nX/* .modal.BASIC_MODAL_HEADER_HEIGHT */.yl.BASIC_MODAL_HEADER_HEIGHT))}};// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useFormWithGlobalError.ts
var ac=r(34092);// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/CheckBox.tsx
function au(){var e=(0,v._)(["\n      cursor: not-allowed;\n    "]);au=function t(){return e};return e}function ad(){var e=(0,v._)(["\n      color: ",";\n    "]);ad=function t(){return e};return e}function af(){var e=(0,v._)(["\n        margin-right: ",";\n      "]);af=function t(){return e};return e}function ap(){var e=(0,v._)(["\n        background-color: ",";\n      "]);ap=function t(){return e};return e}function av(){var e=(0,v._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);av=function t(){return e};return e}function ah(){var e=(0,v._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);ah=function t(){return e};return e}var am=/*#__PURE__*/m().forwardRef((e,t)=>{var{id:r=(0,nm/* .nanoid */.Ak)(),name:n,labelCss:i,inputCss:a,label:s="",checked:l,value:c,disabled:f=false,onChange:p,onBlur:v,isIndeterminate:h=false}=e;var g=e=>{p===null||p===void 0?void 0:p(!h?e.target.checked:true,e)};var b=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/m().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,o/* .jsxs */.FD)("label",{htmlFor:r,css:[ag.container({disabled:f}),i],children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,d._)((0,u._)({},e),{ref:t,id:r,name:n,type:"checkbox",value:c,checked:!!l,disabled:f,"aria-invalid":e["aria-invalid"],onChange:g,onBlur:v,css:[a,ag.checkbox({label:!!s,isIndeterminate:h,disabled:f})]})),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:[ag.label({isDisabled:f}),i],title:b(s),children:s})]})});var ag={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",c/* .colorTokens.text.title */.I6.text.title,";",t&&(0,s/* .css */.AH)(au()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.title */.I6.text.title,";",t&&(0,s/* .css */.AH)(ad(),c/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;display:none !important;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,s/* .css */.AH)(af(),c/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",c/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",c/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",c/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",c/* .borderRadius["4"] */.Vq["4"],";",n&&(0,s/* .css */.AH)(ap(),c/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,s/* .css */.AH)(av(),c/* .colorTokens.brand.blue */.I6.brand.blue,c/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,s/* .css */.AH)(ah(),c/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",c/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const ab=am;// CONCATENATED MODULE: ./assets/src/js/v3/shared/hooks/usePaginatedTable.ts
var ay=function(){var{limit:e=nX/* .ITEMS_PER_PAGE */.re}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var[t,r]=(0,h.useState)({page:1,sortProperty:"",sortDirection:undefined,filter:{}});var n=t;var i=e*Math.max(0,n.page-1);var a=(0,h.useCallback)(e=>{r(t=>(0,u._)({},t,e))},[r]);var o=e=>a({page:e});var s=(0,h.useCallback)(e=>a({page:1,filter:e}),[a]);var l=e=>{var t={};if(e!==n.sortProperty){t={sortDirection:"asc",sortProperty:e}}else{t={sortDirection:n.sortDirection==="asc"?"desc":"asc",sortProperty:e}}a(t)};return{pageInfo:n,onPageChange:o,onColumnSort:l,offset:i,itemsPerPage:e,onFilterItems:s}};// CONCATENATED MODULE: ./assets/src/js/v3/shared/molecules/Paginator.tsx
var a_=e=>{var{currentPage:t,onPageChange:r,totalItems:n,itemsPerPage:i}=e;var a=Math.max(Math.ceil(n/i),1);var[s,l]=(0,h.useState)("");(0,h.useEffect)(()=>{l(t.toString())},[t]);var c=e=>{if(e<1||e>a){return}r(e)};return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ax.wrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ax.pageStatus,children:[(0,p.__)("Page","tutor"),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:/*#__PURE__*/(0,o/* .jsx */.Y)("input",{type:"text",css:ax.paginationInput,value:s,onChange:e=>{var{value:t}=e.currentTarget;var n=t.replace(/[^0-9]/g,"");var i=Number(n);if(i>0&&i<=a){l(n);r(i)}else if(!n){l(n)}},autoComplete:"off"})}),(0,p.__)("of","tutor")," ",/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:a})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ax.pageController,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:ax.paginationButton,onClick:()=>c(t-1),disabled:t===1,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:!nX/* .isRTL */.V8?"chevronLeft":"chevronRight",width:32,height:32})}),/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:ax.paginationButton,onClick:()=>c(t+1),disabled:t===a,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:!nX/* .isRTL */.V8?"chevronRight":"chevronLeft",width:32,height:32})})]})]})};/* export default */const aw=a_;var ax={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;justify-content:end;align-items:center;flex-wrap:wrap;gap:",c/* .spacing["8"] */.YK["8"],";height:36px;"),pageStatus:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body(),"    color:",c/* .colorTokens.text.title */.I6.text.title,";min-width:100px;"),paginationInput:/*#__PURE__*/(0,s/* .css */.AH)("outline:0;border:1px solid ",c/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";margin:0 ",c/* .spacing["8"] */.YK["8"],";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";padding:8px 12px;width:72px;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;margin:",c/* .spacing["0"] */.YK["0"],";}&[type='number']{-moz-appearance:textfield;}"),pageController:/*#__PURE__*/(0,s/* .css */.AH)("gap:",c/* .spacing["8"] */.YK["8"],";display:flex;justify-content:center;align-items:center;height:100%;"),paginationButton:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";background:",c/* .colorTokens.background.white */.I6.background.white,";color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";height:32px;width:32px;display:grid;place-items:center;transition:background-color 0.2s ease-in-out,color 0.3s ease-in-out;svg{color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background:",c/* .colorTokens.background["default"] */.I6.background["default"],";& > svg{color:",c/* .colorTokens.icon.brand */.I6.icon.brand,";}}&:disabled{background:",c/* .colorTokens.background.white */.I6.background.white,";& > svg{color:",c/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"],";}}")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/Skeleton.tsx
function ak(){var e=(0,v._)(["\n      border-radius: ",";\n    "]);ak=function t(){return e};return e}function aA(){var e=(0,v._)(["\n          background: linear-gradient(89.17deg, #fef4ff 0.2%, #f9d3ff 50.09%, #fef4ff 96.31%);\n        "]);aA=function t(){return e};return e}function aY(){var e=(0,v._)(["\n      :after {\n        content: '';\n        background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.05), transparent);\n        position: absolute;\n        transform: translateX(-100%);\n        inset: 0;\n        ","\n\n        animation: ","s linear 0.5s infinite normal none running ",";\n      }\n    "]);aY=function t(){return e};return e}var aI=/*#__PURE__*/(0,h.forwardRef)((e,t)=>{var{width:r="100%",height:n=16,animation:i=false,isMagicAi:a=false,isRound:s=false,animationDuration:l=1.6,className:c}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)("span",{ref:t,css:aM.skeleton(r,n,i,a,s,l),className:c})});/* export default */const aT=aI;var aD={wave:/*#__PURE__*/(0,s/* .keyframes */.i7)("0%{transform:translateX(-100%);}50%{transform:translateX(0%);}100%{transform:translateX(100%);}")};var aM={skeleton:(e,t,r,n,i,a)=>/*#__PURE__*/(0,s/* .css */.AH)("display:block;width:",(0,nu/* .isNumber */.Et)(e)?"".concat(e,"px"):e,";height:",(0,nu/* .isNumber */.Et)(t)?"".concat(t,"px"):t,";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";background-color:",!n?"rgba(0, 0, 0, 0.11)":c/* .colorTokens.background.magicAi.skeleton */.I6.background.magicAi.skeleton,";position:relative;-webkit-mask-image:-webkit-radial-gradient(center,white,black);overflow:hidden;",i&&(0,s/* .css */.AH)(ak(),c/* .borderRadius.circle */.Vq.circle)," ",r&&(0,s/* .css */.AH)(aY(),n&&(0,s/* .css */.AH)(aA()),a,aD.wave))};// CONCATENATED MODULE: ./assets/src/js/v3/shared/molecules/Table.tsx
function aO(){var e=(0,v._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n    "]);aO=function t(){return e};return e}function aE(){var e=(0,v._)(["\n      border-bottom: 1px solid ",";\n    "]);aE=function t(){return e};return e}function aC(){var e=(0,v._)(["\n      &:nth-of-type(even) {\n        background-color: ",";\n      }\n    "]);aC=function t(){return e};return e}function aH(){var e=(0,v._)(["\n        background-color: ",";\n      "]);aH=function t(){return e};return e}function aS(){var e=(0,v._)(["\n        background-color: ",";\n      "]);aS=function t(){return e};return e}function aF(){var e=(0,v._)(["\n        :last-of-type {\n          border-bottom: none;\n        }\n      "]);aF=function t(){return e};return e}var aL={bodyRowSelected:c/* .colorTokens.background.active */.I6.background.active,bodyRowHover:c/* .colorTokens.background.hover */.I6.background.hover};var aN=e=>{var{columns:t,data:r,entireHeader:n=null,headerHeight:i=60,noHeader:a=false,isStriped:l=false,isRounded:c=false,stripedBySelectedIndex:u=[],colors:d={},isBordered:f=true,loading:p=false,itemsPerPage:v=1,querySortProperties:h,querySortDirections:m={},onSortClick:g,renderInLastRow:b,rowStyle:_,sortIcons:w={asc:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"sortAsc",height:16,width:16}),desc:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"sortDesc",height:16,width:16})}}=e;var x=(e,r)=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("tr",{css:[aP.tableRow({isBordered:f,isStriped:l}),aP.bodyTr({colors:d,isSelected:u.includes(e),isRounded:c}),_],children:t.map((e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("td",{css:[aP.td,{width:e.width}],children:r(e)},t)})},e)};var k=e=>{var t=null;var r=e.sortProperty;if(!r){return e.Header}if(h===null||h===void 0?void 0:h.includes(r)){if((m===null||m===void 0?void 0:m[r])==="asc"){t=w.asc}else{t=w.desc}}return/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:aP.headerWithIcon,onClick:()=>g===null||g===void 0?void 0:g(r),children:[e.Header,t&&t]})};var A=()=>{if(n){return/*#__PURE__*/(0,o/* .jsx */.Y)("th",{css:aP.th,colSpan:t.length,children:n})}return t.map((e,t)=>{if(e.Header!==null){return/*#__PURE__*/(0,o/* .jsx */.Y)("th",{css:[aP.th,e.css,{width:e.width}],colSpan:e.headerColSpan,children:k(e)},t)}})};var Y=()=>{if(p){return(0,nm/* .range */.y1)(v).map(e=>x(e,()=>/*#__PURE__*/(0,o/* .jsx */.Y)(aT,{animation:true,height:20,width:"".concat((0,nm/* .getRandom */.G0)(40,80),"%")})))}if(!r.length){return/*#__PURE__*/(0,o/* .jsx */.Y)("tr",{css:aP.tableRow({isBordered:false,isStriped:false}),children:/*#__PURE__*/(0,o/* .jsx */.Y)("td",{colSpan:t.length,css:[aP.td,/*#__PURE__*/(0,s/* .css */.AH)("text-align:center;")],children:"No Data!"})})}var e=r.map((e,t)=>{return x(t,r=>{return"Cell"in r?r.Cell(e,t):r.accessor(e,t)})});if(b){b=/*#__PURE__*/(0,o/* .jsx */.Y)("tr",{children:/*#__PURE__*/(0,o/* .jsx */.Y)("td",{css:aP.td,children:b})},e.length);e.push(b)}return e};return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:aP.tableContainer({isRounded:c}),children:/*#__PURE__*/(0,o/* .jsxs */.FD)("table",{css:aP.table,children:[!a&&/*#__PURE__*/(0,o/* .jsx */.Y)("thead",{children:/*#__PURE__*/(0,o/* .jsx */.Y)("tr",{css:[aP.tableRow({isBordered:f,isStriped:l}),{height:i}],children:A()})}),/*#__PURE__*/(0,o/* .jsx */.Y)("tbody",{children:Y()})]})})};/* export default */const aW=aN;var aP={tableContainer:e=>{var{isRounded:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("display:block;width:100%;overflow-x:auto;",t&&(0,s/* .css */.AH)(aO(),c/* .colorTokens.stroke.divider */.I6.stroke.divider,c/* .borderRadius["6"] */.Vq["6"]))},headerWithIcon:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";",g/* .typography.body */.I.body(),";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;gap:",c/* .spacing["8"] */.YK["8"],";align-items:center;svg{color:",c/* .colorTokens.text.primary */.I6.text.primary,";}"),table:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;border-collapse:collapse;border:none;"),tableRow:e=>{var{isBordered:t,isStriped:r}=e;return/*#__PURE__*/(0,s/* .css */.AH)(t&&(0,s/* .css */.AH)(aE(),c/* .colorTokens.stroke.divider */.I6.stroke.divider)," ",r&&(0,s/* .css */.AH)(aC(),c/* .colorTokens.background.active */.I6.background.active))},th:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body(),";background-color:",c/* .colorTokens.background.white */.I6.background.white,";color:",c/* .colorTokens.text.primary */.I6.text.primary,";padding:0 ",c/* .spacing["16"] */.YK["16"],";border:none;"),bodyTr:e=>{var{colors:t,isSelected:r,isRounded:n}=e;var{bodyRowDefault:i,bodyRowSelectedHover:a,bodyRowHover:o=aL.bodyRowHover,bodyRowSelected:l=aL.bodyRowSelected}=t;return/*#__PURE__*/(0,s/* .css */.AH)(i&&(0,s/* .css */.AH)(aH(),i),"      &:hover{background-color:",r&&a?a:o,";}",r&&(0,s/* .css */.AH)(aS(),l)," ",n&&(0,s/* .css */.AH)(aF()))},td:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body(),";padding:",c/* .spacing["16"] */.YK["16"],";border:none;")};// EXTERNAL MODULE: ./assets/src/js/v3/entries/coupon-details/services/coupon.ts
var aj=r(4847);// CONCATENATED MODULE: ./assets/src/js/v3/public/images/course-placeholder.png
const aK=r.p+"js/images/course-placeholder-3ae4bdaf.png";// CONCATENATED MODULE: ./assets/src/js/v3/shared/hooks/useDebounce.ts
var aR=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,n]=(0,h.useState)(e);(0,h.useEffect)(()=>{var r=setTimeout(()=>{n(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/modals/CourseListModal/SearchField.tsx
var aB=e=>{var{onFilterItems:t}=e;var r=(0,ac/* .useFormWithGlobalError */.p)({defaultValues:{search:""}});var n=aR(r.watch("search"));(0,h.useEffect)(()=>{t((0,u._)({},n.length>0&&{search:n}))},[t,n]);return/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{control:r.control,name:"search",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(nQ,(0,d._)((0,u._)({},e),{content:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"search",width:24,height:24}),placeholder:(0,p.__)("Search...","tutor"),showVerticalBar:false}))})};/* export default */const az=aB;// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/modals/CourseListModal/CategoryListTable.tsx
var aU=e=>{var{form:t}=e;var r,n;var i;var a=(i=t.watch("categories"))!==null&&i!==void 0?i:[];var{pageInfo:s,onPageChange:l,itemsPerPage:c,offset:u,onFilterItems:d}=ay();var f=(0,aj/* .useAppliesToQuery */.nA)({applies_to:"specific_category",offset:u,limit:c,filter:s.filter});var v;var h=(v=(r=f.data)===null||r===void 0?void 0:r.results)!==null&&v!==void 0?v:[];function m(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var r=a.map(e=>e.id);var n=h.map(e=>e.id);if(e){var i=h.filter(e=>!r.includes(e.id));t.setValue("categories",[...a,...i]);return}var o=a.filter(e=>!n.includes(e.id));t.setValue("categories",o)}function g(){return h.every(e=>a.map(e=>e.id).includes(e.id))}var b=[{Header:((n=f.data)===null||n===void 0?void 0:n.results.length)?/*#__PURE__*/(0,o/* .jsx */.Y)(ab,{onChange:m,checked:f.isLoading||f.isRefetching?false:g(),label:(0,p.__)("Category","tutor")}):(0,p.__)("Category","tutor"),Cell:e=>{return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:aG.checkboxWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(ab,{onChange:()=>{var r=a.filter(t=>t.id!==e.id);var n=(r===null||r===void 0?void 0:r.length)===a.length;if(n){t.setValue("categories",[...r,e])}else{t.setValue("categories",r)}},checked:a.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,o/* .jsx */.Y)("img",{src:e.image||aK,css:aG.thumbnail,alt:(0,p.__)("course item","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:aG.courseItem,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{children:e.title}),/*#__PURE__*/(0,o/* .jsx */.Y)("p",{children:"".concat(e.total_courses," ").concat((0,p.__)("Courses","tutor"))})]})]})},width:"720px"}];if(f.isLoading){return/*#__PURE__*/(0,o/* .jsx */.Y)(nh/* .LoadingSection */.YE,{})}if(!f.data){return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:aG.errorMessage,children:(0,p.__)("Something went wrong","tutor")})}var y;return/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:aG.tableActions,children:/*#__PURE__*/(0,o/* .jsx */.Y)(az,{onFilterItems:d})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:aG.tableWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(aW,{columns:b,data:(y=f.data.results)!==null&&y!==void 0?y:[],itemsPerPage:c,loading:f.isFetching||f.isRefetching})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:aG.paginatorWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(aw,{currentPage:s.page,onPageChange:l,totalItems:f.data.total_items,itemsPerPage:c})})]})};/* export default */const aV=aU;var aG={tableActions:/*#__PURE__*/(0,s/* .css */.AH)("padding:",c/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,s/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),paginatorWrapper:/*#__PURE__*/(0,s/* .css */.AH)("margin:",c/* .spacing["20"] */.YK["20"]," ",c/* .spacing["16"] */.YK["16"],";"),checkboxWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",c/* .spacing["12"] */.YK["12"],";"),courseItem:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";margin-left:",c/* .spacing["4"] */.YK["4"],";"),thumbnail:/*#__PURE__*/(0,s/* .css */.AH)("width:48px;height:48px;border-radius:",c/* .borderRadius["4"] */.Vq["4"],";"),errorMessage:/*#__PURE__*/(0,s/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/modals/CourseListModal/CourseListTable.tsx
var aq=e=>{var{type:t,form:r}=e;var n,i;var a=r.watch(t)||[];var{pageInfo:s,onPageChange:l,itemsPerPage:c,offset:u,onFilterItems:d}=ay();var f=(0,aj/* .useAppliesToQuery */.nA)({applies_to:t==="courses"?"specific_courses":"specific_bundles",offset:u,limit:c,filter:s.filter});var v;var h=(v=(n=f.data)===null||n===void 0?void 0:n.results)!==null&&v!==void 0?v:[];function m(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var n=a.map(e=>e.id);var i=h.map(e=>e.id);if(e){var o=h.filter(e=>!n.includes(e.id));r.setValue(t,[...a,...o]);return}var s=a.filter(e=>!i.includes(e.id));r.setValue(t,s)}function g(){return h.every(e=>a.map(e=>e.id).includes(e.id))}var b=[{Header:((i=f.data)===null||i===void 0?void 0:i.results.length)?/*#__PURE__*/(0,o/* .jsx */.Y)(ab,{onChange:m,checked:f.isLoading||f.isRefetching?false:g(),label:t==="courses"?(0,p.__)("Courses","tutor"):(0,p.__)("Bundles","tutor"),labelCss:a$.checkboxLabel}):"#",Cell:e=>{return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:a$.checkboxWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(ab,{onChange:()=>{var n=a.filter(t=>t.id!==e.id);var i=(n===null||n===void 0?void 0:n.length)===a.length;if(i){r.setValue(t,[...n,e])}else{r.setValue(t,n)}},checked:a.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,o/* .jsx */.Y)("img",{src:e.image||aK,css:a$.thumbnail,alt:(0,p.__)("course item","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:a$.courseItem,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{children:e.title}),/*#__PURE__*/(0,o/* .jsx */.Y)("p",{children:e.author})]})]})}},{Header:(0,p.__)("Price","tutor"),Cell:e=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:a$.price,children:e.plan_start_price?/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:a$.startingFrom,children:/* translators: %s is the starting price of the plan */(0,p.sprintf)((0,p.__)("Starting from %s","tutor"),e.plan_start_price)}):/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:a$.discountPrice,children:e.regular_price})]})})}}];if(f.isLoading){return/*#__PURE__*/(0,o/* .jsx */.Y)(nh/* .LoadingSection */.YE,{})}if(!f.data){return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:a$.errorMessage,children:(0,p.__)("Something went wrong","tutor")})}var y;return/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:a$.tableActions,children:/*#__PURE__*/(0,o/* .jsx */.Y)(az,{onFilterItems:d})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:a$.tableWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(aW,{columns:b,data:(y=f.data.results)!==null&&y!==void 0?y:[],itemsPerPage:c,loading:f.isFetching||f.isRefetching})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:a$.paginatorWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(aw,{currentPage:s.page,onPageChange:l,totalItems:f.data.total_items,itemsPerPage:c})})]})};/* export default */const aQ=aq;var a$={tableActions:/*#__PURE__*/(0,s/* .css */.AH)("padding:",c/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,s/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),paginatorWrapper:/*#__PURE__*/(0,s/* .css */.AH)("margin:",c/* .spacing["20"] */.YK["20"]," ",c/* .spacing["16"] */.YK["16"],";"),checkboxWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",c/* .spacing["12"] */.YK["12"],";"),courseItem:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";margin-left:",c/* .spacing["4"] */.YK["4"],";"),thumbnail:/*#__PURE__*/(0,s/* .css */.AH)("width:48px;height:48px;border-radius:",c/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),checkboxLabel:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body(),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";"),price:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;gap:",c/* .spacing["4"] */.YK["4"],";justify-content:end;"),discountPrice:/*#__PURE__*/(0,s/* .css */.AH)("text-decoration:line-through;color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";"),errorMessage:/*#__PURE__*/(0,s/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;"),startingFrom:/*#__PURE__*/(0,s/* .css */.AH)("color:",c/* .colorTokens.text.hints */.I6.text.hints,";")};// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js
var aZ=r(37586);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Toast.tsx
var aX=r(40925);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/api.ts
var aJ=r(77239);// EXTERNAL MODULE: ./assets/core/ts/utils/endpoints.ts
var a0=r(94812);// CONCATENATED MODULE: ./assets/src/js/v3/shared/services/subscription.ts
var a1=/* unused pure expression or super */null&&[3,6,9,12];var a2={untilCancelled:(0,p.__)("Until cancelled","tutor"),noRenewal:(0,p.__)("No Renewal","tutor")};var a6={id:"0",payment_type:"recurring",plan_type:"course",assign_id:"0",plan_name:"",plan_order:"0",recurring_value:"1",recurring_interval:"month",is_featured:false,is_enabled:true,regular_price:"0",sale_price:"0",sale_price_from_date:"",sale_price_from_time:"",sale_price_to_date:"",sale_price_to_time:"",recurring_limit:(0,p.__)("Until cancelled","tutor"),do_not_provide_certificate:false,enrollment_fee:"0",trial_value:"1",trial_interval:"day",charge_enrollment_fee:false,enable_free_trial:false,offer_sale_price:false,schedule_sale_price:false};var a4=e=>{var t=()=>{if(e.recurring_limit==="0"){return a2.untilCancelled}if(e.recurring_limit==="-1"){return a2.noRenewal}return e.recurring_limit||""};var r,n,i,a,o,s,l,c,u,d,f;return{id:e.id,payment_type:(r=e.payment_type)!==null&&r!==void 0?r:"recurring",plan_type:(n=e.plan_type)!==null&&n!==void 0?n:"course",assign_id:e.assign_id,plan_name:(i=e.plan_name)!==null&&i!==void 0?i:"",plan_order:(a=e.plan_order)!==null&&a!==void 0?a:"0",recurring_value:(o=e.recurring_value)!==null&&o!==void 0?o:"0",recurring_interval:(s=e.recurring_interval)!==null&&s!==void 0?s:"month",is_featured:!!Number(e.is_featured),is_enabled:!!Number(e.is_enabled),regular_price:(l=e.regular_price)!==null&&l!==void 0?l:"0",recurring_limit:t(),enrollment_fee:(c=e.enrollment_fee)!==null&&c!==void 0?c:"0",trial_value:(u=e.trial_value)!==null&&u!==void 0?u:"0",trial_interval:(d=e.trial_interval)!==null&&d!==void 0?d:"day",sale_price:(f=e.sale_price)!==null&&f!==void 0?f:"0",charge_enrollment_fee:!!Number(e.enrollment_fee),enable_free_trial:!!Number(e.trial_value),offer_sale_price:!!Number(e.sale_price),schedule_sale_price:!!e.sale_price_from,do_not_provide_certificate:!Number(e.provide_certificate),sale_price_from_date:e.sale_price_from?format(convertGMTtoLocalDate(e.sale_price_from),DateFormats.yearMonthDay):"",sale_price_from_time:e.sale_price_from?format(convertGMTtoLocalDate(e.sale_price_from),DateFormats.hoursMinutes):"",sale_price_to_date:e.sale_price_to?format(convertGMTtoLocalDate(e.sale_price_to),DateFormats.yearMonthDay):"",sale_price_to_time:e.sale_price_to?format(convertGMTtoLocalDate(e.sale_price_to),DateFormats.hoursMinutes):""}};var a5=e=>{var t=()=>{if(e.recurring_limit===a2.untilCancelled){return"0"}if(e.recurring_limit===a2.noRenewal){return"-1"}return e.recurring_limit};return _object_spread_props(_object_spread(_object_spread_props(_object_spread(_object_spread_props(_object_spread(_object_spread_props(_object_spread({},e.id&&String(e.id)!=="0"&&{id:e.id}),{payment_type:e.payment_type,plan_type:e.plan_type,assign_id:e.assign_id,plan_name:e.plan_name}),e.id&&String(e.id)==="0"&&{plan_order:e.plan_order},e.payment_type==="recurring"&&{recurring_value:e.recurring_value,recurring_interval:e.recurring_interval}),{regular_price:e.regular_price,recurring_limit:t(),is_featured:e.is_featured?"1":"0",is_enabled:e.is_enabled?"1":"0"}),e.charge_enrollment_fee&&{enrollment_fee:e.enrollment_fee},e.enable_free_trial&&{trial_value:e.trial_value,trial_interval:e.trial_interval}),{sale_price:e.offer_sale_price?e.sale_price:"0"}),e.schedule_sale_price&&{sale_price_from:convertToGMT(new Date("".concat(e.sale_price_from_date," ").concat(e.sale_price_from_time))),sale_price_to:convertToGMT(new Date("".concat(e.sale_price_to_date," ").concat(e.sale_price_to_time)))}),{provide_certificate:e.do_not_provide_certificate?"0":"1"})};var a3=e=>{return wpAjaxInstance.post(endpoints.GET_SUBSCRIPTIONS_LIST,{object_id:e})};var a8=e=>{return useQuery({queryKey:["SubscriptionsList",e],queryFn:()=>a3(e).then(e=>e.data)})};var a9=(e,t)=>{return wpAjaxInstance.post(endpoints.SAVE_SUBSCRIPTION,_object_spread({object_id:e},t.id&&{id:t.id},t))};var a7=e=>{var t=useQueryClient();var{showToast:r}=useToast();return useMutation({mutationFn:t=>a9(e,t),onSuccess:n=>{if(n.status_code===200||n.status_code===201){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:convertToErrorMessage(e)})}})};var oe=(e,t)=>{return wpAjaxInstance.post(endpoints.DELETE_SUBSCRIPTION,{object_id:e,id:t})};var ot=e=>{var t=useQueryClient();var{showToast:r}=useToast();return useMutation({mutationFn:t=>oe(e,t),onSuccess:(n,i)=>{if(n.status_code===200){r({message:n.message,type:"success"});t.setQueryData(["SubscriptionsList",e],e=>{return e.filter(e=>e.id!==String(i))})}},onError:e=>{r({type:"danger",message:convertToErrorMessage(e)})}})};var or=(e,t)=>{return wpAjaxInstance.post(endpoints.DUPLICATE_SUBSCRIPTION,{object_id:e,id:t})};var on=e=>{var t=useQueryClient();var{showToast:r}=useToast();return useMutation({mutationFn:t=>or(e,t),onSuccess:n=>{if(n.data){r({message:n.message,type:"success"});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:e=>{r({type:"danger",message:convertToErrorMessage(e)})}})};var oi=(e,t)=>{return wpAjaxInstance.post(endpoints.SORT_SUBSCRIPTION,{object_id:e,plan_ids:t})};var oa=e=>{var t=useQueryClient();var{showToast:r}=useToast();return useMutation({mutationFn:t=>oi(e,t),onSuccess:(r,n)=>{if(r.status_code===200){t.setQueryData(["SubscriptionsList",e],e=>{var t=n.map(e=>String(e));return e.sort((e,r)=>t.indexOf(e.id)-t.indexOf(r.id))});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}},onError:n=>{r({type:"danger",message:convertToErrorMessage(n)});t.invalidateQueries({queryKey:["SubscriptionsList",e]})}})};var oo=()=>{return aJ/* .wpAjaxInstance.get */.b.get(a0/* ["default"].GET_MEMBERSHIP_PLANS */.A.GET_MEMBERSHIP_PLANS).then(e=>e.data)};var os=()=>{return(0,aZ/* .useQuery */.I)({queryKey:["MembershipPlans"],queryFn:oo})};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/modals/CourseListModal/MembershipPlanListTable.tsx
var ol=e=>{var{form:t}=e;var r=(0,h.useMemo)(()=>t.watch("membershipPlans")||[],[t]);var n=os();var[i,a]=(0,h.useState)("");var s=(0,h.useMemo)(()=>{if(!n.data)return[];var e=n.data.filter(e=>e.is_enabled==="1");if(!i){return e}return e.filter(e=>e.plan_name.toLowerCase().includes(i.toLowerCase()))},[n.data,i]);var l=(0,h.useCallback)(e=>{a(e.search||"")},[]);var c=(0,h.useCallback)(function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;var n=r.map(e=>e.id);var i=s.map(e=>e.id);if(e){var a=s.filter(e=>!n.includes(e.id));t.setValue("membershipPlans",[...r,...a]);return}var o=r.filter(e=>!i.includes(e.id));t.setValue("membershipPlans",o)},[t,s,r]);function u(){return s.every(e=>r.map(e=>e.id).includes(e.id))}var d=[{Header:s.length?/*#__PURE__*/(0,o/* .jsx */.Y)(ab,{onChange:c,checked:n.isLoading||n.isRefetching?false:u(),label:(0,p.__)("Membership Plans","tutor"),labelCss:ou.checkboxLabel}):"#",Cell:e=>{return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ou.title,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(ab,{onChange:()=>{var n=r.filter(t=>t.id!==e.id);var i=(n===null||n===void 0?void 0:n.length)===r.length;if(i){t.setValue("membershipPlans",[...n,e])}else{t.setValue("membershipPlans",n)}},checked:r.map(e=>e.id).includes(e.id)}),/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"crownOutlined",width:32,height:32}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[e.plan_name,/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:e.is_featured==="1",children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"starFill",width:16,height:16})})]})]})}},{Header:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ou.tablePriceLabel,children:(0,p.__)("Price","tutor")}),Cell:e=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ou.priceWrapper,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ou.price,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:i2(Number(e.sale_price)||Number(e.regular_price))}),Number(e.sale_price)>0&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:ou.discountPrice,children:i2(Number(e.regular_price))}),"/",/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:ou.recurringInterval,children:(0,nm/* .formatSubscriptionRepeatUnit */.u5)({unit:e.recurring_interval,value:Number(e.recurring_value)})})]})})}}];if(n.isLoading){return/*#__PURE__*/(0,o/* .jsx */.Y)(nh/* .LoadingSection */.YE,{})}if(!n.data){return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ou.errorMessage,children:(0,p.__)("Something went wrong","tutor")})}return/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ou.tableActions,children:/*#__PURE__*/(0,o/* .jsx */.Y)(az,{onFilterItems:l})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ou.tableWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(aW,{columns:d,data:s,loading:n.isFetching})})]})};/* export default */const oc=ol;var ou={tableLabel:/*#__PURE__*/(0,s/* .css */.AH)("text-align:left;"),tablePriceLabel:/*#__PURE__*/(0,s/* .css */.AH)("text-align:right;"),tableActions:/*#__PURE__*/(0,s/* .css */.AH)("padding:",c/* .spacing["20"] */.YK["20"],";"),tableWrapper:/*#__PURE__*/(0,s/* .css */.AH)("max-height:calc(100vh - 350px);overflow:auto;"),checkboxLabel:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body(),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";"),title:/*#__PURE__*/(0,s/* .css */.AH)("height:48px;",g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";",nv/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",c/* .spacing["8"] */.YK["8"],";svg{flex-shrink:0;color:",c/* .colorTokens.icon.hints */.I6.icon.hints,";}div{",nv/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",c/* .spacing["4"] */.YK["4"],";svg{color:",c/* .colorTokens.icon.brand */.I6.icon.brand,";}}"),priceWrapper:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;justify-content:flex-end;height:48px;text-align:right;"),price:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";display:flex;gap:",c/* .spacing["2"] */.YK["2"],";justify-content:end;"),discountPrice:/*#__PURE__*/(0,s/* .css */.AH)("text-decoration:line-through;color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";"),recurringInterval:/*#__PURE__*/(0,s/* .css */.AH)("text-transform:capitalize;color:",c/* .colorTokens.text.hints */.I6.text.hints,";"),errorMessage:/*#__PURE__*/(0,s/* .css */.AH)("height:100px;display:flex;align-items:center;justify-content:center;")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/modals/CourseListModal/index.tsx
function od(e){var{title:t,closeModal:r,actions:n,form:i,type:a}=e;var s=(0,ac/* .useFormWithGlobalError */.p)({defaultValues:i.getValues()});var l={courses:/*#__PURE__*/(0,o/* .jsx */.Y)(aQ,{form:s,type:"courses"}),bundles:/*#__PURE__*/(0,o/* .jsx */.Y)(aQ,{form:s,type:"bundles"}),categories:/*#__PURE__*/(0,o/* .jsx */.Y)(aV,{form:s}),membershipPlans:/*#__PURE__*/(0,o/* .jsx */.Y)(oc,{form:s})};function c(){i.setValue(a,s.getValues(a));r({action:"CONFIRM"})}return/*#__PURE__*/(0,o/* .jsxs */.FD)(as,{onClose:()=>r({action:"CLOSE"}),title:t,actions:n,maxWidth:720,children:[l[a],/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:op.footer,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{size:"small",variant:"text",onClick:()=>r({action:"CLOSE"}),children:(0,p.__)("Cancel","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{type:"submit",size:"small",variant:"primary",onClick:c,children:(0,p.__)("Add","tutor")})]})]})}/* export default */const of=od;var op={footer:/*#__PURE__*/(0,s/* .css */.AH)("box-shadow:0px 1px 0px 0px #e4e5e7 inset;height:56px;display:flex;align-items:center;justify-content:end;gap:",c/* .spacing["16"] */.YK["16"],";padding-inline:",c/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/coupon/CouponDiscount.tsx
var ov=!!nc/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var oh=ov&&(0,nm/* .isAddonEnabled */.GR)(nX/* .Addons.COURSE_BUNDLE */.oW.COURSE_BUNDLE);var om=ov&&(0,nm/* .isAddonEnabled */.GR)(nX/* .Addons.SUBSCRIPTION */.oW.SUBSCRIPTION);var og=[{label:(0,p.__)("Percentage","tutor"),value:"percentage"},{label:(0,p.__)("Fixed Amount","tutor"),value:"flat"}];var ob=[{label:(0,p.__)("All courses","tutor"),value:"all_courses"},...oh?[{label:(0,p.__)("All bundles","tutor"),value:"all_bundles"},{label:(0,p.__)("All courses and bundles","tutor"),value:"all_courses_and_bundles"}]:[],...om?[{label:(0,p.__)("All membership plans","tutor"),value:"all_membership_plans"}]:[],{label:(0,p.__)("Specific courses","tutor"),value:"specific_courses"},...oh?[{label:(0,p.__)("Specific bundles","tutor"),value:"specific_bundles"}]:[],{label:(0,p.__)("Specific category","tutor"),value:"specific_category"},...om?[{label:(0,p.__)("Specific membership plans","tutor"),value:"specific_membership_plans"}]:[]];function oy(){var e;var t=(0,f/* .useFormContext */.xW)();var{tutor_currency:r}=nc/* .tutorConfig */.P;var{showModal:n}=(0,n1/* .useModal */.h)();var i=t.watch("applies_to");var a=t.watch("discount_type");var s;var l=(s=t.watch("courses"))!==null&&s!==void 0?s:[];var c;var v=(c=t.watch("bundles"))!==null&&c!==void 0?c:[];var h;var m=(h=t.watch("categories"))!==null&&h!==void 0?h:[];var g;var _=(g=t.watch("membershipPlans"))!==null&&g!==void 0?g:[];var w={specific_courses:"courses",specific_bundles:"bundles",specific_category:"categories",specific_membership_plans:"membershipPlans"};function x(e,r){if(e==="courses"){t.setValue(e,l===null||l===void 0?void 0:l.filter(e=>e.id!==r))}if(e==="bundles"){t.setValue(e,v===null||v===void 0?void 0:v.filter(e=>e.id!==r))}if(e==="categories"){t.setValue(e,m===null||m===void 0?void 0:m.filter(e=>e.id!==r))}if(e==="membershipPlans"){t.setValue(e,_===null||_===void 0?void 0:_.filter(e=>e.id!==r))}}return/*#__PURE__*/(0,o/* .jsxs */.FD)(nn,{bordered:true,css:ox.discountWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.couponWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(ni,{children:(0,p.__)("Discount","tutor")})}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ox.discountTypeWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"discount_type",control:t.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(iB,(0,d._)((0,u._)({},e),{label:(0,p.__)("Discount Type","tutor"),options:og}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"discount_amount",control:t.control,rules:i3(),render:e=>{var t;return/*#__PURE__*/(0,o/* .jsx */.Y)(nQ,(0,d._)((0,u._)({},e),{type:"number",label:(0,p.__)("Discount Value","tutor"),placeholder:"0",content:a==="flat"?(t=r===null||r===void 0?void 0:r.symbol)!==null&&t!==void 0?t:"$":"%",contentCss:nv/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"applies_to",control:t.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(iB,(0,d._)((0,u._)({},e),{label:(0,p.__)("Applies to","tutor"),options:ob}))}),i==="specific_courses"&&l.length>0&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.selectedWrapper,children:l===null||l===void 0?void 0:l.map(e=>/*#__PURE__*/(0,o/* .jsx */.Y)(ow,{type:"courses",image:e.image,title:e.title,subTitle:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.price,children:e.plan_start_price?/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:ox.startingFrom,children:(0,p.sprintf)((0,p.__)("Starting from %s","tutor"),e.plan_start_price)}):/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:ox.discountPrice,children:e.regular_price})]})}),handleDeleteClick:()=>x("courses",e.id)},e.id))}),i==="specific_bundles"&&v.length>0&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.selectedWrapper,children:v===null||v===void 0?void 0:v.map(e=>/*#__PURE__*/(0,o/* .jsx */.Y)(ow,{type:"bundles",image:e.image,title:e.title,subTitle:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ox.price,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:e.sale_price?e.sale_price:e.regular_price}),e.sale_price&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:ox.discountPrice,children:e.regular_price})]}),handleDeleteClick:()=>x("bundles",e.id)},e.id))}),i==="specific_category"&&m.length>0&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.selectedWrapper,children:m===null||m===void 0?void 0:m.map(e=>/*#__PURE__*/(0,o/* .jsx */.Y)(ow,{type:"categories",image:e.image,title:e.title,subTitle:"".concat(e.total_courses," ").concat((0,p.__)("Courses","tutor")),handleDeleteClick:()=>x("categories",e.id)},e.id))}),i==="specific_membership_plans"&&_.length>0&&/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.selectedWrapper,children:(e=t.watch("membershipPlans"))===null||e===void 0?void 0:e.map(e=>/*#__PURE__*/(0,o/* .jsx */.Y)(ow,{type:"membershipPlans",title:e.plan_name,subTitle:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ox.price,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:i2(Number(e.sale_price)||Number(e.regular_price))}),Number(e.sale_price)>0&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:ox.discountPrice,children:i2(Number(e.regular_price))}),"/",/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:ox.recurringInterval,children:(0,nm/* .formatSubscriptionRepeatUnit */.u5)({unit:e.recurring_interval,value:Number(e.recurring_value)})})]}),handleDeleteClick:()=>x("membershipPlans",e.id)},e.id))}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:["specific_courses","specific_bundles","specific_category","specific_membership_plans"].includes(i),children:/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{variant:"tertiary",isOutlined:true,buttonCss:ox.addCoursesButton,icon:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"plusSquareBrand",width:24,height:25}),onClick:()=>{n({component:of,props:{title:(0,p.__)("Select items","tutor"),type:w[i],form:t},closeOnOutsideClick:true})},children:(0,p.__)("Add Items","tutor")})})]})}/* export default */const o_=oy;function ow(e){var{type:t,image:r,title:n,subTitle:i,handleDeleteClick:a}=e;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ox.selectedItem,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.selectedThumb,children:t!=="membershipPlans"?/*#__PURE__*/(0,o/* .jsx */.Y)("img",{src:r||aK,css:ox.thumbnail,alt:"course item"}):/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"crownOutlined",width:32,height:32})}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ox.selectedContent,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.selectedTitle,children:(0,nm/* .decodeHtmlEntities */.jT)(n)}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ox.selectedSubTitle,children:i})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{variant:"text",onClick:a,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"delete",width:24,height:24})})})]})}var ox={discountWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["12"] */.YK["12"],";"),discountTypeWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;gap:",c/* .spacing["20"] */.YK["20"],";"),couponWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["4"] */.YK["4"],";"),addCoursesButton:/*#__PURE__*/(0,s/* .css */.AH)("width:fit-content;color:",c/* .colorTokens.text.brand */.I6.text.brand,";svg{color:",c/* .colorTokens.text.brand */.I6.text.brand,";}"),price:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;gap:",c/* .spacing["4"] */.YK["4"],";"),discountPrice:/*#__PURE__*/(0,s/* .css */.AH)("text-decoration:line-through;"),selectedWrapper:/*#__PURE__*/(0,s/* .css */.AH)("border:1px solid ",c/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";"),selectedItem:/*#__PURE__*/(0,s/* .css */.AH)("padding:",c/* .spacing["12"] */.YK["12"],";display:flex;align-items:center;gap:",c/* .spacing["16"] */.YK["16"],";&:not(:last-child){border-bottom:1px solid ",c/* .colorTokens.stroke.divider */.I6.stroke.divider,";}"),selectedContent:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;"),selectedTitle:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";margin-bottom:",c/* .spacing["4"] */.YK["4"],";"),selectedSubTitle:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";"),selectedThumb:/*#__PURE__*/(0,s/* .css */.AH)("height:48px;color:",c/* .colorTokens.icon.hints */.I6.icon.hints,";",nv/* .styleUtils.flexCenter */.x.flexCenter(),";flex-shrink:0;"),thumbnail:/*#__PURE__*/(0,s/* .css */.AH)("width:56px;height:48px;object-fit:cover;border-radius:",c/* .borderRadius["4"] */.Vq["4"],";"),startingFrom:/*#__PURE__*/(0,s/* .css */.AH)("color:",c/* .colorTokens.text.hints */.I6.text.hints,";"),recurringInterval:/*#__PURE__*/(0,s/* .css */.AH)("text-transform:capitalize;color:",c/* .colorTokens.text.hints */.I6.text.hints,";")};// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js
var ok=r(1896);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
var oA=r(93640);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/create-variation.ts
var oY=r(78931);// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/MagicButton.tsx
var oI=/*#__PURE__*/m().forwardRef((e,t)=>{var{className:r,variant:n,size:i,children:a,type:s="button",disabled:l=false,roundedFull:c=true,loading:f}=e,p=(0,nl._)(e,["className","variant","size","children","type","disabled","roundedFull","loading"]);return/*#__PURE__*/(0,o/* .jsx */.Y)("button",(0,d._)((0,u._)({type:s,ref:t,css:oM({variant:n,size:i,rounded:c?"true":"false"}),className:r,disabled:l},p),{children:/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:oD.buttonSpan,children:f?/*#__PURE__*/(0,o/* .jsx */.Y)(nh/* ["default"] */.Ay,{size:24}):a})}))});/* export default */const oT=oI;var oD={buttonSpan:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.flexCenter */.x.flexCenter(),";z-index:",c/* .zIndex.positive */.fE.positive,";"),base:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";",g/* .typography.small */.I.small("medium"),";display:flex;gap:",c/* .spacing["4"] */.YK["4"],";width:100%;justify-content:center;align-items:center;white-space:nowrap;position:relative;overflow:hidden;transition:box-shadow 0.5s ease;&:focus-visible{outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{cursor:not-allowed;background:",c/* .colorTokens.action.primary.disable */.I6.action.primary.disable,";pointer-events:none;color:",c/* .colorTokens.text.disable */.I6.text.disable,";border-color:",c/* .colorTokens.stroke.disable */.I6.stroke.disable,";}"),default:e=>/*#__PURE__*/(0,s/* .css */.AH)("background:",!e?c/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1:c/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";color:",c/* .colorTokens.text.white */.I6.text.white,";&::before{content:'';position:absolute;inset:0;background:",!e?c/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:c/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";opacity:0;transition:opacity 0.5s ease;}&:hover::before{opacity:1;}"),secondary:/*#__PURE__*/(0,s/* .css */.AH)("background-color:",c/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",c/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";&:hover{background-color:",c/* .colorTokens.action.secondary.hover */.I6.action.secondary.hover,";}"),outline:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;&::before{content:'';position:absolute;inset:0;background:",c/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";color:",c/* .colorTokens.text.primary */.I6.text.primary,";border:1px solid transparent;-webkit-mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) padding-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;}&:hover{&::before{background:",c/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2,";}}"),primaryOutline:/*#__PURE__*/(0,s/* .css */.AH)("border:1px solid ",c/* .colorTokens.brand.blue */.I6.brand.blue,";color:",c/* .colorTokens.brand.blue */.I6.brand.blue,";&:hover{background-color:",c/* .colorTokens.brand.blue */.I6.brand.blue,";color:",c/* .colorTokens.text.white */.I6.text.white,";}"),primary:/*#__PURE__*/(0,s/* .css */.AH)("background-color:",c/* .colorTokens.brand.blue */.I6.brand.blue,";color:",c/* .colorTokens.text.white */.I6.text.white,";"),ghost:/*#__PURE__*/(0,s/* .css */.AH)("background-color:transparent;color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";border-radius:",c/* .borderRadius["4"] */.Vq["4"],";&:hover{color:",c/* .colorTokens.text.primary */.I6.text.primary,";}"),plain:/*#__PURE__*/(0,s/* .css */.AH)("span{background:",!nX/* .isRTL */.V8?c/* .colorTokens.text.ai.gradient */.I6.text.ai.gradient:c/* .colorTokens.ai.gradient_1_rtl */.I6.ai.gradient_1_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;&:hover{background:",!nX/* .isRTL */.V8?c/* .colorTokens.ai.gradient_2 */.I6.ai.gradient_2:c/* .colorTokens.ai.gradient_2_rtl */.I6.ai.gradient_2_rtl,";background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}}"),size:{default:/*#__PURE__*/(0,s/* .css */.AH)("height:32px;padding-inline:",c/* .spacing["12"] */.YK["12"],";padding-block:",c/* .spacing["4"] */.YK["4"],";"),sm:/*#__PURE__*/(0,s/* .css */.AH)("height:24px;padding-inline:",c/* .spacing["10"] */.YK["10"],";"),icon:/*#__PURE__*/(0,s/* .css */.AH)("width:32px;height:32px;")},rounded:{true:/*#__PURE__*/(0,s/* .css */.AH)("border-radius:",c/* .borderRadius["54"] */.Vq["54"],";&::before{border-radius:",c/* .borderRadius["54"] */.Vq["54"],";}"),false:/*#__PURE__*/(0,s/* .css */.AH)("border-radius:",c/* .borderRadius["4"] */.Vq["4"],";&::before{border-radius:",c/* .borderRadius["4"] */.Vq["4"],";}")}};var oM=(0,oY/* .createVariation */.s)({variants:{variant:{default:oD.default(nX/* .isRTL */.V8),primary:oD.primary,secondary:oD.secondary,outline:oD.outline,primary_outline:oD.primaryOutline,ghost:oD.ghost,plain:oD.plain},size:{default:oD.size.default,sm:oD.size.sm,icon:oD.size.icon},rounded:{true:oD.rounded.true,false:oD.rounded.false}},defaultVariants:{variant:"default",size:"default",rounded:"true"}},oD.base);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormTextareaInput.tsx
function oO(){var e=(0,v._)(["\n        resize: vertical;\n      "]);oO=function t(){return e};return e}var oE=6;var oC=e=>{var{label:t,rows:r=oE,columns:n,maxLimit:i,field:a,fieldState:s,disabled:l,readOnly:c,loading:f,placeholder:p,helpText:v,onChange:m,onKeyDown:g,isHidden:b,enableResize:y=true,isSecondary:_=false,isMagicAi:w=false,inputCss:x,maxHeight:k,autoResize:A=false}=e;var Y;var I=(Y=a.value)!==null&&Y!==void 0?Y:"";var T=(0,h.useRef)(null);var D=undefined;if(i){D={maxLimit:i,inputCharacter:I.toString().length}}var M=()=>{if(T.current){if(k){T.current.style.maxHeight="".concat(k,"px")}T.current.style.height="auto";T.current.style.height="".concat(T.current.scrollHeight,"px")}};(0,h.useLayoutEffect)(()=>{if(A){M()}// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{label:t,field:a,fieldState:s,disabled:l,readOnly:c,loading:f,placeholder:p,helpText:v,isHidden:b,characterCount:D,isSecondary:_,isMagicAi:w,children:e=>{return/*#__PURE__*/(0,o/* .jsx */.Y)(o/* .Fragment */.FK,{children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:oS.container(y,x),children:/*#__PURE__*/(0,o/* .jsx */.Y)("textarea",(0,d._)((0,u._)({},a,e),{ref:e=>{a.ref(e);// @ts-ignore
T.current=e;// this is not ideal but it is the only way to set ref to the input element
},style:{maxHeight:k?"".concat(k,"px"):"none"},className:"tutor-input-field",value:I,onChange:e=>{var{value:t}=e.target;if(i&&t.trim().length>i){return}a.onChange(t);if(m){m(t)}if(A){M()}},onKeyDown:e=>{g===null||g===void 0?void 0:g(e.key)},autoComplete:"off",rows:r,cols:n}))})})}})};/* export default */const oH=np(oC);var oS={container:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false,t=arguments.length>1?arguments[1]:void 0;return/*#__PURE__*/(0,s/* .css */.AH)("position:relative;display:flex;textarea{",g/* .typography.body */.I.body(),";height:auto;padding:",c/* .spacing["8"] */.YK["8"]," ",c/* .spacing["12"] */.YK["12"],";resize:none;",nv/* .styleUtils.overflowYAuto */.x.overflowYAuto,";&.tutor-input-field{",t,";}",e&&(0,s/* .css */.AH)(oO()),"}")}};// CONCATENATED MODULE: ./assets/src/js/v3/shared/controls/For.tsx
var oF=e=>{var{each:t,children:r,fallback:n=null}=e;if(t.length===0){return n}return t.map((e,t)=>{return r(e,t)})};/* export default */const oL=oF;// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/magic-ai-content/OptionList.tsx
var oN=e=>{var{options:t,onChange:r}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:oW.wrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(oL,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",onClick:()=>r(e.value),css:oW.item,children:e.label},t)}})})};var oW={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;padding-block:",c/* .spacing["8"] */.YK["8"],";max-height:400px;overflow-y:auto;"),item:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";",g/* .typography.caption */.I.caption(),";width:100%;padding:",c/* .spacing["4"] */.YK["4"]," ",c/* .spacing["16"] */.YK["16"],";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";display:flex;align-items:center;&:hover{background-color:",c/* .colorTokens.background.hover */.I6.background.hover,";color:",c/* .colorTokens.text.title */.I6.text.title,";}")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/config/magic-ai.ts
var oP=[{label:"English",value:"english"},{label:"简体中文",value:"simplified-chinese"},{label:"繁體中文",value:"traditional-chinese"},{label:"Español",value:"spanish"},{label:"Français",value:"french"},{label:"日本語",value:"japanese"},{label:"Deutsch",value:"german"},{label:"Português",value:"portuguese"},{label:"العربية",value:"arabic"},{label:"Русский",value:"russian"},{label:"Italiano",value:"italian"},{label:"한국어",value:"korean"},{label:"हिन्दी",value:"hindi"},{label:"Nederlands",value:"dutch"},{label:"Polski",value:"polish"},{label:"አማርኛ",value:"amharic"},{label:"Български",value:"bulgarian"},{label:"বাংলা",value:"bengali"},{label:"Čeština",value:"czech"},{label:"Dansk",value:"danish"},{label:"Ελληνικά",value:"greek"},{label:"Eesti",value:"estonian"},{label:"فارسی",value:"persian"},{label:"Filipino",value:"filipino"},{label:"Hrvatski",value:"croatian"},{label:"Magyar",value:"hungarian"},{label:"Bahasa Indonesia",value:"indonesian"},{label:"Lietuvių",value:"lithuanian"},{label:"Latviešu",value:"latvian"},{label:"Melayu",value:"malay"},{label:"Norsk",value:"norwegian"},{label:"Română",value:"romanian"},{label:"Slovenčina",value:"slovak"},{label:"Slovenščina",value:"slovenian"},{label:"Српски",value:"serbian"},{label:"Svenska",value:"swedish"},{label:"ภาษาไทย",value:"thai"},{label:"Türkçe",value:"turkish"},{label:"Українська",value:"ukrainian"},{label:"اردو",value:"urdu"},{label:"Tiếng Việt",value:"vietnamese"}];var oj=[{label:(0,p.__)("Formal","tutor"),value:"formal"},{label:(0,p.__)("Casual","tutor"),value:"casual"},{label:(0,p.__)("Professional","tutor"),value:"professional"},{label:(0,p.__)("Enthusiastic","tutor"),value:"enthusiastic"},{label:(0,p.__)("Informational","tutor"),value:"informational"},{label:(0,p.__)("Funny","tutor"),value:"funny"}];var oK=[{label:(0,p.__)("Title","tutor"),value:"title"},{label:(0,p.__)("Essay","tutor"),value:"essay"},{label:(0,p.__)("Paragraph","tutor"),value:"paragraph"},{label:(0,p.__)("Outline","tutor"),value:"outline"}];// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/magic-ai-content/PromptControls.tsx
var oR=e=>{var{form:t}=e;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:oB.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{control:t.control,name:"characters",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(sG,(0,d._)((0,u._)({},e),{isMagicAi:true,label:(0,p.__)("Character Limit","tutor"),type:"number"}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{control:t.control,name:"language",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(iB,(0,d._)((0,u._)({},e),{isMagicAi:true,label:(0,p.__)("Language","tutor"),options:oP}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{control:t.control,name:"tone",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(iB,(0,d._)((0,u._)({},e),{isMagicAi:true,options:oj,label:(0,p.__)("Tone","tutor")}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{control:t.control,name:"format",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(iB,(0,d._)((0,u._)({},e),{isMagicAi:true,label:(0,p.__)("Format","tutor"),options:oK}))})]})};var oB={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:grid;grid-template-columns:repeat(2,1fr);gap:",c/* .spacing["16"] */.YK["16"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/magic-ai-content/SkeletonLoader.tsx
var oz=()=>{return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:oV.container,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:oV.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(aT,{animation:true,isMagicAi:true,width:"20%",height:"12px"}),/*#__PURE__*/(0,o/* .jsx */.Y)(aT,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,o/* .jsx */.Y)(aT,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,o/* .jsx */.Y)(aT,{animation:true,isMagicAi:true,width:"40%",height:"12px"})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:oV.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(aT,{animation:true,isMagicAi:true,width:"80%",height:"12px"}),/*#__PURE__*/(0,o/* .jsx */.Y)(aT,{animation:true,isMagicAi:true,width:"100%",height:"12px"}),/*#__PURE__*/(0,o/* .jsx */.Y)(aT,{animation:true,isMagicAi:true,width:"80%",height:"12px"})]})]})};/* export default */const oU=oz;var oV={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["8"] */.YK["8"],";"),container:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["32"] */.YK["32"],";")};// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js
var oG=r(32047);// CONCATENATED MODULE: ./assets/src/js/v3/shared/services/magic-ai.ts
var oq=e=>{return wpAjaxInstance.post(endpoints.GENERATE_AI_IMAGE,e)};var oQ=()=>{return useMutation({mutationFn:oq})};var o$=e=>{return wpAjaxInstance.post(endpoints.MAGIC_FILL_AI_IMAGE,e).then(e=>e.data.data[0].b64_json)};var oZ=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:o$,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var oX=e=>{return aJ/* .wpAjaxInstance.post */.b.post(a0/* ["default"].MAGIC_TEXT_GENERATION */.A.MAGIC_TEXT_GENERATION,e)};var oJ=()=>{var{showToast:e}=(0,aX/* .useToast */.d)();return(0,oG/* .useMutation */.n)({mutationFn:oX,onError:t=>{e({type:"danger",message:(0,nm/* .convertToErrorMessage */.EL)(t)})}})};var o0=e=>{return aJ/* .wpAjaxInstance.post */.b.post(a0/* ["default"].MAGIC_AI_MODIFY_CONTENT */.A.MAGIC_AI_MODIFY_CONTENT,e)};var o1=()=>{var{showToast:e}=(0,aX/* .useToast */.d)();return(0,oG/* .useMutation */.n)({mutationFn:o0,onError:t=>{e({type:"danger",message:(0,nm/* .convertToErrorMessage */.EL)(t)})}})};var o2=e=>{return wpAjaxInstance.post(endpoints.USE_AI_GENERATED_IMAGE,e)};var o6=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:o2,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var o4=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var o5=e=>{var{showToast:t}=useToast();return useMutation({mutationKey:["GenerateCourseContent",e],mutationFn:o4,onError:e=>{t({type:"danger",message:convertToErrorMessage(e)})}})};var o3=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_CONTENT,e,{signal:e.signal})};var o8=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:o3,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var o9=e=>{return wpAjaxInstance.post(endpoints.GENERATE_COURSE_TOPIC_CONTENT,e,{signal:e.signal})};var o7=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:o9,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var se=e=>{return wpAjaxInstance.post(endpoints.SAVE_AI_GENERATED_COURSE_CONTENT,e)};var st=()=>{var{showToast:e}=useToast();var t=useQueryClient();return useMutation({mutationFn:se,onSuccess(){t.invalidateQueries({queryKey:["CourseDetails"]})},onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var sr=e=>{return wpAjaxInstance.post(endpoints.GENERATE_QUIZ_QUESTIONS,e,{signal:e.signal})};var sn=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:sr,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var si=e=>{return wpAjaxInstance.post(endpoints.GENERATE_AI_QUIZ_QUESTIONS,e,{signal:e.signal})};var sa=()=>{var{showToast:e}=useToast();return useMutation({mutationFn:si,onError:t=>{e({type:"danger",message:convertToErrorMessage(t)})}})};var so=e=>{return aJ/* .wpAjaxInstance.post */.b.post(a0/* ["default"].OPEN_AI_SAVE_SETTINGS */.A.OPEN_AI_SAVE_SETTINGS,(0,u._)({},e))};var ss=()=>{var{showToast:e}=(0,aX/* .useToast */.d)();return(0,oG/* .useMutation */.n)({mutationFn:so,onSuccess:t=>{e({type:"success",message:t.message})},onError:t=>{e({type:"danger",message:(0,nm/* .convertToErrorMessage */.EL)(t)})}})};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/modals/AITextModal.tsx
var sl=[(0,p.__)("Mastering Digital Marketing: A Complete Guide","tutor"),(0,p.__)("The Ultimate Photoshop Course for Beginners","tutor"),(0,p.__)("Python Programming: From Zero to Hero","tutor"),(0,p.__)("Creative Writing Essentials: Unlock Your Storytelling Potential","tutor"),(0,p.__)("The Complete Guide to Web Development with React","tutor"),(0,p.__)("Master Public Speaking: Deliver Powerful Presentations","tutor"),(0,p.__)("Excel for Business: From Basics to Advanced Analytics","tutor"),(0,p.__)("Fitness Fundamentals: Build Strength and Confidence","tutor"),(0,p.__)("Photography Made Simple: Capture Stunning Shots","tutor"),(0,p.__)("Financial Freedom: Learn the Basics of Investing","tutor")];var sc=e=>{var{title:t,icon:r,closeModal:n,field:i,format:a="essay",characters:l=250,is_html:v=false,fieldLabel:m="",fieldPlaceholder:g=""}=e;var _=(0,ac/* .useFormWithGlobalError */.p)({defaultValues:{prompt:"",characters:l,language:"english",tone:"formal",format:a}});var w=oJ();var x=o1();var[k,A]=(0,h.useState)([]);var[Y,I]=(0,h.useState)(0);var[T,D]=(0,h.useState)(false);var[M,O]=(0,h.useState)(null);var E=(0,h.useRef)(null);var C=(0,h.useRef)(null);var H=(0,h.useMemo)(()=>{return k[Y]},[k,Y]);var S=_.watch("prompt");function F(e){A(t=>[e,...t]);I(0)}function L(e,t){return(0,oA._)(function*(){if(k.length===0){return}var r=k[Y];if(e==="translation"&&!!t){var n=yield x.mutateAsync({type:"translation",content:r,language:t,is_html:v});if(n.data){F(n.data)}return}if(e==="change_tone"&&!!t){var i=yield x.mutateAsync({type:"change_tone",content:r,tone:t,is_html:v});if(i.data){F(i.data)}return}var a=yield x.mutateAsync({type:e,content:r,is_html:v});if(a.data){F(a.data)}})()}(0,h.useEffect)(()=>{_.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,o/* .jsx */.Y)(as,{onClose:n,title:t,icon:r,maxWidth:524,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("form",{onSubmit:_.handleSubmit(e=>(0,oA._)(function*(){var t=yield w.mutateAsync((0,d._)((0,u._)({},e),{is_html:v}));if(t.data){F(t.data)}})()),children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sd.container,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sd.fieldsWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{control:_.control,name:"prompt",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(oH,(0,d._)((0,u._)({},e),{label:m||(0,p.__)("Craft Your Course Description","tutor"),placeholder:g||(0,p.__)("Provide a brief overview of your course topic, target audience, and key takeaways","tutor"),rows:4,isMagicAi:true}))}),/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:sd.inspireButton,onClick:()=>{var e=sl.length;var t=Math.floor(Math.random()*e);_.reset((0,d._)((0,u._)({},_.getValues()),{prompt:sl[t]}))},children:[/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"bulbLine"}),(0,p.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:!w.isPending&&!x.isPending,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)(oU,{}),children:/*#__PURE__*/(0,o/* .jsxs */.FD)(b/* ["default"] */.A,{when:k.length>0,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)(oR,{form:_}),children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sd.actionBar,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:sd.navigation,children:/*#__PURE__*/(0,o/* .jsxs */.FD)(b/* ["default"] */.A,{when:k.length>1,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{variant:"text",onClick:()=>I(e=>Math.max(0,e-1)),disabled:Y===0,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:!nX/* .isRTL */.V8?"chevronLeft":"chevronRight",width:20,height:20})}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sd.pageInfo,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:Y+1})," / ",k.length]}),/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{variant:"text",onClick:()=>I(e=>Math.min(k.length-1,e+1)),disabled:Y===k.length-1,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:!nX/* .isRTL */.V8?"chevronRight":"chevronLeft",width:20,height:20})})]})}),/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{variant:"text",onClick:()=>(0,oA._)(function*(){if(k.length===0){return}var e=k[Y];yield(0,nm/* .copyToClipboard */.lW)(e);D(true);setTimeout(()=>{D(false)},1500)})(),children:/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:T,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"copy",width:20,height:20}),children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"checkFilled",width:20,height:20,style:/*#__PURE__*/(0,s/* .css */.AH)("color:",c/* .colorTokens.text.success */.I6.text.success," !important;")})})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:sd.content,dangerouslySetInnerHTML:{__html:H}})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sd.otherActions,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(oT,{variant:"outline",roundedFull:false,onClick:()=>L("rephrase"),children:(0,p.__)("Rephrase","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(oT,{variant:"outline",roundedFull:false,onClick:()=>L("make_shorter"),children:(0,p.__)("Make Shorter","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)(oT,{variant:"outline",roundedFull:false,ref:E,onClick:()=>O("tone"),children:[(0,p.__)("Change Tone","tutor"),/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)(oT,{variant:"outline",roundedFull:false,ref:C,onClick:()=>O("translate"),children:[(0,p.__)("Translate to","tutor"),/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"chevronDown",width:16,height:16})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(oT,{variant:"outline",roundedFull:false,onClick:()=>L("write_as_bullets"),children:(0,p.__)("Write as Bullets","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(oT,{variant:"outline",roundedFull:false,onClick:()=>L("make_longer"),children:(0,p.__)("Make Longer","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(oT,{variant:"outline",roundedFull:false,onClick:()=>L("simplify_language"),children:(0,p.__)("Simplify Language","tutor")})]})]})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(iY,{isOpen:M==="tone",triggerRef:E,arrow:true,closePopover:()=>O(null),maxWidth:"160px",animationType:r2/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,o/* .jsx */.Y)(oN,{options:oj,onChange:e=>(0,oA._)(function*(){O(null);yield L("change_tone",e)})()})}),/*#__PURE__*/(0,o/* .jsx */.Y)(iY,{isOpen:M==="translate",triggerRef:C,closePopover:()=>O(null),maxWidth:"160px",animationType:r2/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,o/* .jsx */.Y)(oN,{options:oP,onChange:e=>(0,oA._)(function*(){O(null);yield L("translation",e)})()})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:sd.footer,children:/*#__PURE__*/(0,o/* .jsxs */.FD)(b/* ["default"] */.A,{when:k.length>0,fallback:/*#__PURE__*/(0,o/* .jsxs */.FD)(oT,{type:"submit",disabled:w.isPending||!S||x.isPending,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,p.__)("Generate Now","tutor")]}),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(oT,{variant:"outline",type:"submit",disabled:w.isPending||!S||x.isPending,children:(0,p.__)("Generate Again","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(oT,{variant:"primary",disabled:w.isPending||k.length===0||x.isPending,onClick:()=>{i.onChange(k[Y]);n()},children:(0,p.__)("Use This","tutor")})]})})]})})};/* export default */const su=sc;var sd={container:/*#__PURE__*/(0,s/* .css */.AH)("padding:",c/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;gap:",c/* .spacing["16"] */.YK["16"],";"),fieldsWrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;textarea{padding-bottom:",c/* .spacing["40"] */.YK["40"]," !important;}"),footer:/*#__PURE__*/(0,s/* .css */.AH)("padding:",c/* .spacing["12"] */.YK["12"]," ",c/* .spacing["16"] */.YK["16"],";display:flex;align-items:center;justify-content:end;gap:",c/* .spacing["10"] */.YK["10"],";box-shadow:0px 1px 0px 0px #e4e5e7 inset;button{width:fit-content;}"),pageInfo:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";& > span{font-weight:",c/* .fontWeight.medium */.Wy.medium,";color:",c/* .colorTokens.text.primary */.I6.text.primary,";}"),inspireButton:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";",g/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",c/* .spacing["12"] */.YK["12"],";left:",c/* .spacing["12"] */.YK["12"],";border:1px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",c/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",c/* .spacing["4"] */.YK["4"],";color:",c/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",c/* .spacing["12"] */.YK["12"],";background-color:",c/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",c/* .colorTokens.background.brand */.I6.background.brand,";color:",c/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",c/* .colorTokens.background.disable */.I6.background.disable,";color:",c/* .colorTokens.text.disable */.I6.text.disable,";}"),navigation:/*#__PURE__*/(0,s/* .css */.AH)("margin-left:-",c/* .spacing["8"] */.YK["8"],";display:flex;align-items:center;"),content:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";height:180px;overflow-y:auto;background-color:",c/* .colorTokens.background.magicAi["default"] */.I6.background.magicAi["default"],";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";padding:",c/* .spacing["6"] */.YK["6"]," ",c/* .spacing["12"] */.YK["12"],";color:",c/* .colorTokens.text.magicAi */.I6.text.magicAi,";"),actionBar:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),otherActions:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;gap:",c/* .spacing["10"] */.YK["10"],";flex-wrap:wrap;& > button{width:fit-content;}")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/modals/ProIdentifierModal.tsx
var sf={title:/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[(0,p.__)("Upgrade to Tutor LMS Pro today and experience the power of ","tutor"),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:nv/* .styleUtils.aiGradientText */.x.aiGradientText,children:(0,p.__)("AI Studio","tutor")})]}),message:(0,p.__)("Upgrade your plan to access the AI feature","tutor"),featuresTitle:(0,p.__)("Don’t miss out on this game-changing feature!","tutor"),features:[(0,p.__)("Generate a complete course outline in seconds!","tutor"),(0,p.__)("Let the AI Studio create Quizzes on your behalf and give your brain a well-deserved break.","tutor"),(0,p.__)("Generate images, customize backgrounds, and even remove unwanted objects with ease.","tutor"),(0,p.__)("Say goodbye to typos and grammar errors with AI-powered copy editing.","tutor")],footer:/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{onClick:()=>window.open(nc/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener"),icon:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"crown",width:24,height:24}),children:(0,p.__)("Get Tutor LMS Pro","tutor")})};var sp=e=>{var{title:t=sf.title,message:r=sf.message,featuresTitle:n=sf.featuresTitle,features:i=sf.features,closeModal:a,image:s,image2x:l,footer:c=sf.footer}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(as,{onClose:a,entireHeader:/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:sh.message,children:r}),maxWidth:496,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sh.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,o/* .jsx */.Y)("h4",{css:sh.title,children:t})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:s,children:/*#__PURE__*/(0,o/* .jsx */.Y)("img",{css:sh.image,src:s,alt:typeof t==="string"?t:(0,p.__)("Illustration","tutor"),srcSet:l?"".concat(s," ").concat(l," 2x"):undefined})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:n,children:/*#__PURE__*/(0,o/* .jsx */.Y)("h6",{css:sh.featuresTiTle,children:n})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:i.length,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:sh.features,children:/*#__PURE__*/(0,o/* .jsx */.Y)(oL,{each:i,children:(e,t)=>/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sh.feature,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:sh.checkIcon}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:e})]},t)})})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:c,children:c})]})})};/* export default */const sv=sp;var sh={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("padding:0 ",c/* .spacing["24"] */.YK["24"]," ",c/* .spacing["32"] */.YK["32"]," ",c/* .spacing["24"] */.YK["24"],";",nv/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",c/* .spacing["16"] */.YK["16"],";"),message:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";padding-left:",c/* .spacing["8"] */.YK["8"],";padding-top:",c/* .spacing["24"] */.YK["24"],";padding-bottom:",c/* .spacing["4"] */.YK["4"],";"),title:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.heading6 */.I.heading6("medium"),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),image:/*#__PURE__*/(0,s/* .css */.AH)("height:270px;width:100%;object-fit:cover;object-position:center;border-radius:",c/* .borderRadius["8"] */.Vq["8"],";"),featuresTiTle:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body("medium"),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";text-wrap:pretty;"),features:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",c/* .spacing["4"] */.YK["4"],";padding-right:",c/* .spacing["48"] */.YK["48"],";"),feature:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.display.flex */.x.display.flex(),";gap:",c/* .spacing["12"] */.YK["12"],";",g/* .typography.small */.I.small(),";color:",c/* .colorTokens.text.title */.I6.text.title,";span{text-wrap:pretty;}"),checkIcon:/*#__PURE__*/(0,s/* .css */.AH)("flex-shrink:0;color:",c/* .colorTokens.text.success */.I6.text.success,";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/Alert.tsx
var sm={text:{warning:"#D47E00",success:"#D47E00",danger:"#f44337",info:"#D47E00",primary:"#D47E00"},icon:{warning:"#FAB000",success:"#FAB000",danger:"#f55e53",info:"#FAB000",primary:"#FAB000"},background:{warning:"#FBFAE9",success:"#FBFAE9",danger:"#fdd9d7",info:"#FBFAE9",primary:"#FBFAE9"}};var sg=e=>{var{children:t,type:r="warning",icon:n}=e;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sy.wrapper({type:r}),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:n,children:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{style:sy.icon({type:r}),name:e,height:24,width:24})}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{children:t})]})};/* export default */const sb=sg;var sy={wrapper:e=>{var{type:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";display:flex;align-items:start;padding:",c/* .spacing["8"] */.YK["8"]," ",c/* .spacing["12"] */.YK["12"],";width:100%;border-radius:",c/* .borderRadius.card */.Vq.card,";gap:",c/* .spacing["4"] */.YK["4"],";background-color:",sm.background[t],";color:",sm.text[t],";")},icon:e=>{var{type:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)("color:",sm.icon[t],";flex-shrink:0;")}};// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/Switch.tsx
function s_(){var e=(0,v._)(["\n        width: 26px;\n        height: 16px;\n      "]);s_=function t(){return e};return e}function sw(){var e=(0,v._)(["\n          top: 2px;\n          left: 3px;\n          width: 12px;\n          height: 12px;\n        "]);sw=function t(){return e};return e}function sx(){var e=(0,v._)(["\n            left: 11px;\n          "]);sx=function t(){return e};return e}function sk(){var e=(0,v._)(["\n      right: 3px;\n    "]);sk=function t(){return e};return e}function sA(){var e=(0,v._)(["\n      left: 3px;\n    "]);sA=function t(){return e};return e}var sY={switchStyles:e=>/*#__PURE__*/(0,s/* .css */.AH)("&[data-input]{all:unset;appearance:none;border:0;width:40px;height:24px;background:",c/* .colorTokens.color.black["10"] */.I6.color.black["10"],";border-radius:12px;position:relative;display:inline-block;vertical-align:middle;cursor:pointer;transition:background-color 0.25s cubic-bezier(0.785,0.135,0.15,0.86);",e==="small"&&(0,s/* .css */.AH)(s_()),"      &::before{display:none !important;}&:focus{border:none;outline:none;box-shadow:none;}&:focus-visible{outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:after{content:'';position:absolute;top:3px;left:",c/* .spacing["4"] */.YK["4"],";width:18px;height:18px;background:",c/* .colorTokens.background.white */.I6.background.white,";border-radius:",c/* .borderRadius.circle */.Vq.circle,";box-shadow:",c/* .shadow["switch"] */.r7["switch"],";transition:left 0.25s cubic-bezier(0.785,0.135,0.15,0.86);",e==="small"&&(0,s/* .css */.AH)(sw()),"}&:checked{background:",c/* .colorTokens.primary.main */.I6.primary.main,";&:after{left:18px;",e==="small"&&(0,s/* .css */.AH)(sx()),"}}&:disabled{pointer-events:none;filter:none;opacity:0.5;}}"),labelStyles:e=>/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";color:",e?c/* .colorTokens.text.title */.I6.text.title:c/* .colorTokens.text.subdued */.I6.text.subdued,";"),wrapperStyle:e=>/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;width:fit-content;flex-direction:",e==="left"?"row":"row-reverse",";column-gap:",c/* .spacing["12"] */.YK["12"],";position:relative;"),spinner:e=>/*#__PURE__*/(0,s/* .css */.AH)("display:flex;position:absolute;top:50%;transform:translateY(-50%);",e&&(0,s/* .css */.AH)(sk())," ",!e&&(0,s/* .css */.AH)(sA()))};var sI=/*#__PURE__*/m().forwardRef((e,t)=>{var{id:r=(0,nm/* .nanoid */.Ak)(),name:n,label:i,value:a,checked:s,disabled:l,loading:c,onChange:u,labelPosition:d="left",labelCss:f,size:p="regular"}=e;var v=e=>{u===null||u===void 0?void 0:u(e.target.checked,e)};return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sY.wrapperStyle(d),children:[i&&/*#__PURE__*/(0,o/* .jsx */.Y)("label",{css:[sY.labelStyles(s||false),f],htmlFor:r,children:i}),/*#__PURE__*/(0,o/* .jsx */.Y)("input",{ref:t,value:a?String(a):undefined,type:"checkbox",name:n,id:r,checked:!!s,disabled:l,css:sY.switchStyles(p),onChange:v,"data-input":true}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:c,children:/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:sY.spinner(!!s),children:/*#__PURE__*/(0,o/* .jsx */.Y)(nh/* ["default"] */.Ay,{size:p==="small"?12:20})})})]})});/* export default */const sT=sI;// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormSwitch.tsx
var sD=e=>{var{field:t,fieldState:r,label:n,disabled:i,loading:a,labelPosition:s="left",helpText:l,isHidden:c,labelCss:f,onChange:p}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{label:n,field:t,fieldState:r,loading:a,helpText:l,isHidden:c,isInlineLabel:true,children:e=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:sO.wrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(sT,(0,d._)((0,u._)({},t,e),{disabled:i,checked:t.value,labelCss:f,labelPosition:s,onChange:()=>{t.onChange(!t.value);p===null||p===void 0?void 0:p(!t.value)}}))})}})};/* export default */const sM=np(sD);var sO={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;gap:",c/* .spacing["40"] */.YK["40"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/modals/SetupOpenAiModal.tsx
function sE(){var e=(0,v._)(["\n      padding: ",";\n      padding-top: ",";\n    "]);sE=function t(){return e};return e}var sC,sH;var sS=((sC=nc/* .tutorConfig.settings */.P.settings)===null||sC===void 0?void 0:sC.chatgpt_enable)==="on";var sF=(sH=nc/* .tutorConfig.current_user.roles */.P.current_user.roles)===null||sH===void 0?void 0:sH.includes(nX/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var sL=e=>{var{closeModal:t,image:r,image2x:n}=e;var i=(0,ac/* .useFormWithGlobalError */.p)({defaultValues:{openAIApiKey:"",enable_open_ai:sS},shouldFocusError:true});var a=ss();var s=e=>(0,oA._)(function*(){var r=yield a.mutateAsync({chatgpt_api_key:e.openAIApiKey,chatgpt_enable:e.enable_open_ai?1:0});if(r.status_code===200){t({action:"CONFIRM"});window.location.reload()}})();(0,h.useEffect)(()=>{i.setFocus("openAIApiKey");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,o/* .jsx */.Y)(as,{onClose:()=>t({action:"CLOSE"}),title:sF?(0,p.__)("Set OpenAI API key","tutor"):undefined,entireHeader:sF?undefined:/*#__PURE__*/(0,o/* .jsx */.Y)(o/* .Fragment */.FK,{children:" "}),maxWidth:560,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:sW.wrapper({isCurrentUserAdmin:sF}),children:/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:sF,fallback:/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("img",{css:sW.image,src:r,srcSet:n?"".concat(r," 1x, ").concat(n," 2x"):"".concat(r," 1x"),alt:(0,p.__)("Connect API KEY","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:sW.message,children:(0,p.__)("API is not connected","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:sW.title,children:(0,p.__)("Please, ask your Admin to connect the API with Tutor LMS Pro.","tutor")})]})]}),children:/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("form",{css:sW.formWrapper,onSubmit:i.handleSubmit(s),children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sW.infoText,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{dangerouslySetInnerHTML:{/* translators: %1$s and %2$s are opening and closing anchor tags for the "OpenAI User settings" link */__html:(0,p.sprintf)((0,p.__)("Find your Secret API key in your %1$sOpenAI User settings%2$s and paste it here to connect OpenAI with your Tutor LMS website.","tutor"),'<a href="'.concat(nc/* ["default"].CHATGPT_PLATFORM_URL */.A.CHATGPT_PLATFORM_URL,'" target="_blank" rel="noopener noreferrer">'),"</a>")}}),/*#__PURE__*/(0,o/* .jsx */.Y)(sb,{type:"info",icon:"warning",children:(0,p.__)("The page will reload after submission. Make sure to save the course information.","tutor")})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"openAIApiKey",control:i.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(sG,(0,d._)((0,u._)({},e),{type:"password",isPassword:true,label:(0,p.__)("OpenAI API key","tutor"),placeholder:(0,p.__)("Enter your OpenAI API key","tutor")}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"enable_open_ai",control:i.control,render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(sM,(0,d._)((0,u._)({},e),{label:(0,p.__)("Enable OpenAI","tutor")}))})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sW.formFooter,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{onClick:()=>t({action:"CLOSE"}),variant:"text",size:"small",children:(0,p.__)("Cancel","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{size:"small",onClick:i.handleSubmit(s),loading:a.isPending,children:(0,p.__)("Save","tutor")})]})]})})})})};/* export default */const sN=sL;var sW={wrapper:e=>{var{isCurrentUserAdmin:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",c/* .spacing["20"] */.YK["20"],";",!t&&(0,s/* .css */.AH)(sE(),c/* .spacing["24"] */.YK["24"],c/* .spacing["6"] */.YK["6"]))},formWrapper:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",c/* .spacing["20"] */.YK["20"],";padding:",c/* .spacing["16"] */.YK["16"]," ",c/* .spacing["16"] */.YK["16"]," 0 ",c/* .spacing["16"] */.YK["16"],";"),infoText:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";",nv/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",c/* .spacing["8"] */.YK["8"],";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";a{",nv/* .styleUtils.resetButton */.x.resetButton,"      color:",c/* .colorTokens.text.brand */.I6.text.brand,";}"),formFooter:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.display.flex */.x.display.flex(),";justify-content:flex-end;gap:",c/* .spacing["16"] */.YK["16"],";border-top:1px solid ",c/* .colorTokens.stroke.divider */.I6.stroke.divider,";padding:",c/* .spacing["16"] */.YK["16"],";"),image:/*#__PURE__*/(0,s/* .css */.AH)("height:310px;width:100%;object-fit:cover;object-position:center;border-radius:",c/* .borderRadius["8"] */.Vq["8"],";"),message:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";"),title:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.heading4 */.I.heading4("medium"),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";margin-top:",c/* .spacing["4"] */.YK["4"],";text-wrap:pretty;")};// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/generate-text.webp
const sP=r.p+"js/images/generate-text-269f7e17.webp";// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/generate-text-2x.webp
const sj=r.p+"js/images/generate-text-2x-45983f4c.webp";// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormInput.tsx
function sK(){var e=(0,v._)(["\n        height: 32px;\n        padding: "," ",";\n      "]);sK=function t(){return e};return e}function sR(){var e=(0,v._)(["\n      svg {\n        color: ",";\n      }\n    "]);sR=function t(){return e};return e}var sB;var sz=!!nc/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var sU=(sB=nc/* .tutorConfig.settings */.P.settings)===null||sB===void 0?void 0:sB.chatgpt_key_exist;var sV=e=>{var{size:t="regular",label:r,type:n="text",maxLimit:i,field:a,fieldState:s,disabled:l,readOnly:c,loading:f,placeholder:v,helpText:m,onChange:g,onKeyDown:_,isHidden:w,isClearable:x=false,isSecondary:k=false,removeBorder:A,dataAttribute:Y,isInlineLabel:I=false,isPassword:T=false,style:D,formFieldWrapperCss:M,inputContainerCss:O,selectOnFocus:E=false,autoFocus:C=false,generateWithAi:H=false,isMagicAi:S=false,allowNegative:F=false,onClickAiButton:L}=e;var[N,W]=(0,h.useState)(n);var{showModal:P}=(0,n1/* .useModal */.h)();var j=(0,h.useRef)(null);var K;var R=(K=a.value)!==null&&K!==void 0?K:"";var B=undefined;if(N==="number"){R=(0,nm/* .parseNumberOnly */.TW)("".concat(R),F).replace(/(\..*)\./g,"$1")}if(i){B={maxLimit:i,inputCharacter:R.toString().length}}var z=(0,u._)({},(0,nu/* .isDefined */.O9)(Y)&&{[Y]:true});var U=()=>{if(!sz){P({component:sv,props:{image:sP,image2x:sj}})}else if(!sU){P({component:sN,props:{image:sP,image2x:sj}})}else{P({component:su,isMagicAi:true,props:{title:(0,p.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:120,field:a,fieldState:s,format:"title",is_html:false,fieldLabel:(0,p.__)("Create a Compelling Title","tutor"),fieldPlaceholder:(0,p.__)("Describe the main focus of your course in a few words","tutor")}});L===null||L===void 0?void 0:L()}};return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{label:r,field:a,fieldState:s,disabled:l,readOnly:c,loading:f,placeholder:v,helpText:m,isHidden:w,characterCount:B,isSecondary:k,removeBorder:A,isInlineLabel:I,inputStyle:D,wrapperCss:M,inputContainerCss:O,generateWithAi:H,onClickAiButton:U,isMagicAi:S,children:e=>{return/*#__PURE__*/(0,o/* .jsx */.Y)(o/* .Fragment */.FK,{children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sq.container(x||T),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,d._)((0,u._)({},a,e,z),{css:[e.css,sq.input(t)],type:N==="number"?"text":N,value:R,autoFocus:C,onChange:e=>{var{value:t}=e.target;var r=N==="number"?(0,nm/* .parseNumberOnly */.TW)(t):t;a.onChange(r);if(g){g(r)}},onClick:e=>{e.stopPropagation()},onKeyDown:e=>{e.stopPropagation();_===null||_===void 0?void 0:_(e.key)},autoComplete:"off",ref:e=>{a.ref(e);// @ts-ignore
j.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!E||!j.current){return}j.current.select()}})),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:T,children:/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>W(e=>e==="password"?"text":"password"),icon:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"eye",width:24,height:24}),"aria-label":(0,p.__)("Show/Hide Password","tutor"),buttonCss:sq.eyeButton({type:N})})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:x&&!!a.value&&N!=="password",children:/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{isIconOnly:true,variant:"text",size:"small",onClick:()=>a.onChange(""),buttonCss:nv/* .styleUtils.inputClearButton */.x.inputClearButton,icon:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"cross",width:24,height:24}),"aria-label":(0,p.__)("Clear","tutor")})})]})})}})};/* export default */const sG=np(sV);var sq={input:e=>/*#__PURE__*/(0,s/* .css */.AH)("&.tutor-input-field:not(textarea){min-height:auto;",e==="small"&&(0,s/* .css */.AH)(sK(),c/* .spacing["6"] */.YK["6"],c/* .spacing["12"] */.YK["12"]),"}"),container:e=>/*#__PURE__*/(0,s/* .css */.AH)("position:relative;display:flex;input{&.tutor-input-field{",e&&"padding-right: ".concat(c/* .spacing["36"] */.YK["36"],";"),";}}"),eyeButton:e=>{var{type:t}=e;return/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.inputClearButton */.x.inputClearButton,";",t!=="password"&&(0,s/* .css */.AH)(sR(),c/* .colorTokens.icon.brand */.I6.icon.brand))}};// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/Radio.tsx
function sQ(){var e=(0,v._)(["\n      color: ",";\n    "]);sQ=function t(){return e};return e}function s$(){var e=(0,v._)(["\n        margin-right: ",";\n      "]);s$=function t(){return e};return e}var sZ=/*#__PURE__*/m().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:i,disabled:a=false,labelCss:s,label:l,icon:c,value:u,onChange:d,onBlur:f,description:p}=e;var v=(0,nm/* .nanoid */.Ak)();return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:sX.wrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("label",{htmlFor:v,css:[sX.container(a),s],children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",{ref:t,id:v,name:r,type:"radio",checked:n,readOnly:i,value:u,disabled:a,onChange:d,onBlur:f,css:[sX.radio(l)]}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{}),c,l]}),p&&/*#__PURE__*/(0,o/* .jsx */.Y)("p",{css:sX.description,children:p})]})});var sX={wrapper:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",c/* .spacing["8"] */.YK["8"],";"),container:e=>/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,s/* .css */.AH)(sQ(),c/* .colorTokens.text.disable */.I6.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",c/* .colorTokens.background.white */.I6.background.white,";border:2px solid ",c/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:100%;",e&&(0,s/* .css */.AH)(s$(),c/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",c/* .colorTokens.background.white */.I6.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",c/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:checked + span::before{background-color:",c/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;")};/* export default */const sJ=sZ;// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormRadioGroup.tsx
var s0=e=>{var{field:t,fieldState:r,label:n,options:i=[],disabled:a,wrapperCss:s,onSelect:l,onSelectRender:c}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{field:t,fieldState:r,label:n,disabled:a,children:e=>{var{css:r}=e,n=(0,nl._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:s,children:i.map((e,i)=>/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsx */.Y)(sJ,(0,d._)((0,u._)({},n),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||a,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(l){l(e)}}})),c&&t.value===e.value&&c(e),e.legend&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:s2.radioLegend,children:e.legend})]},i))})}})};/* export default */const s1=s0;var s2={radioLegend:/*#__PURE__*/(0,s/* .css */.AH)("margin-left:",c/* .spacing["28"] */.YK["28"],";",g/* .typography.body */.I.body(),";color:",c/* .colorTokens.text.subdued */.I6.text.subdued,";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/coupon/CouponInfo.tsx
var s6=[{label:(0,p.__)("Code","tutor"),value:"code"},{label:(0,p.__)("Automatic","tutor"),value:"automatic"}];function s4(){var e=new URLSearchParams(window.location.search);var t=e.get("coupon_id");var r=!!t;var n=(0,f/* .useFormContext */.xW)();var i=n.watch("coupon_type");function a(){var e=(0,nm/* .generateCouponCode */.z$)();n.setValue("coupon_code",e,{shouldValidate:true})}var s=[{label:(0,p.__)("Active","tutor"),value:"active"},{label:(0,p.__)("Inactive","tutor"),value:"inactive"},{label:(0,p.__)("Trash","tutor"),value:"trash"}];return/*#__PURE__*/(0,o/* .jsxs */.FD)(nn,{bordered:true,css:s3.discountWrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:s3.couponWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(ni,{children:(0,p.__)("Coupon Info","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(na,{children:(0,p.__)("Create a coupon code or set up automatic discounts.","tutor")})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"coupon_type",control:n.control,render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(s1,(0,d._)((0,u._)({},e),{label:(0,p.__)("Method","tutor"),options:s6,wrapperCss:s3.radioWrapper,disabled:r}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"coupon_title",control:n.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(sG,(0,d._)((0,u._)({},e),{label:(0,p.__)("Title","tutor"),placeholder:/* translators: %s is the current year (e.g., 2025) */(0,p.sprintf)((0,p.__)("e.g. Summer Sale %s","tutor"),(0,ok/* .format */.GP)(new Date,nX/* .DateFormats.year */.UA.year))}))}),i==="code"&&/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:s3.couponCodeWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"coupon_code",control:n.control,rules:(0,u._)({},i3(),ae(50)),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(sG,(0,d._)((0,u._)({},e),{label:(0,p.__)("Coupon Code","tutor"),placeholder:(0,p.__)("e.g. SUMMER20","tutor"),disabled:r}))}),!r&&/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{"data-cy":"generate-code",variant:"text",onClick:a,buttonCss:s3.generateCode,children:(0,p.__)("Generate Code","tutor")})]}),r&&/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"coupon_status",control:n.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(iB,(0,d._)((0,u._)({},e),{label:(0,p.__)("Coupon status","tutor"),options:s}))})]})}/* export default */const s5=s4;var s3={discountWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["12"] */.YK["12"],";"),couponWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["4"] */.YK["4"],";"),couponCodeWrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;"),radioWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;gap:",c/* .spacing["40"] */.YK["40"],";"),generateCode:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";color:",c/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";position:absolute;right:",c/* .spacing["0"] */.YK["0"],";top:",c/* .spacing["0"] */.YK["0"],";min-height:auto;padding-inline:",c/* .spacing["4"] */.YK["4"],";&:hover,&:active,&:focus{color:",c/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";}")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormCheckbox.tsx
var s8=e=>{var{field:t,fieldState:r,disabled:n,value:i,onChange:a,label:s,description:l,helpText:c,isHidden:f,labelCss:p}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{field:t,fieldState:r,isHidden:f,children:e=>{var{css:r}=e,f=(0,nl._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:s7.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(ab,(0,d._)((0,u._)({},t,f),{inputCss:r,labelCss:p,value:i,disabled:n,checked:t.value,label:s,onChange:()=>{t.onChange(!t.value);if(a){a(!t.value)}}})),c&&/*#__PURE__*/(0,o/* .jsx */.Y)(r7,{content:c,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"info",width:20,height:20})})]}),l&&/*#__PURE__*/(0,o/* .jsx */.Y)("p",{css:s7.description,children:l})]})}})};/* export default */const s9=s8;var s7={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",c/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),"    color:",c/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",c/* .spacing["6"] */.YK["6"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/coupon/CouponLimitation.tsx
function le(){var e=(0,f/* .useFormContext */.xW)();var t=e.watch("usage_limit_status");var r=e.watch("per_user_limit_status");return/*#__PURE__*/(0,o/* .jsxs */.FD)(nn,{bordered:true,css:lr.discountWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:lr.couponWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(ni,{children:(0,p.__)("Usage Limitation","tutor")})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:lr.couponWrapper,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:lr.limitWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"usage_limit_status",control:e.control,render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(s9,(0,d._)((0,u._)({},e),{label:(0,p.__)("Limit number of times this coupon can be used in total","tutor"),labelCss:lr.checkBoxLabel}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"total_usage_limit",control:e.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:lr.limitInput,children:/*#__PURE__*/(0,o/* .jsx */.Y)(sG,(0,d._)((0,u._)({},e),{type:"number",placeholder:(0,p.__)("0","tutor")}))})})})]})}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:lr.couponWrapper,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:lr.limitWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"per_user_limit_status",control:e.control,render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(s9,(0,d._)((0,u._)({},e),{label:(0,p.__)("Limit number of times this coupon can be used by a customer","tutor"),labelCss:lr.checkBoxLabel}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"per_user_usage_limit",control:e.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:lr.limitInput,children:/*#__PURE__*/(0,o/* .jsx */.Y)(sG,(0,d._)((0,u._)({},e),{type:"number",placeholder:(0,p.__)("0","tutor")}))})})})]})})]})}/* export default */const lt=le;var lr={discountWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["12"] */.YK["12"],";"),couponWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["4"] */.YK["4"],";"),limitWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["8"] */.YK["8"],";"),checkBoxLabel:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.title */.I6.text.title,";"),limitInput:/*#__PURE__*/(0,s/* .css */.AH)("width:fit-content;margin-left:",c/* .spacing["28"] */.YK["28"],";")};// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isValid.js
var ln=r(76845);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructFrom.js
var li=r(5054);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/constructNow.js
/**
 * @name constructNow
 * @category Generic Helpers
 * @summary Constructs a new current date using the passed value constructor.
 * @pure false
 *
 * @description
 * The function constructs a new current date using the constructor from
 * the reference date. It helps to build generic functions that accept date
 * extensions and use the current date.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @param date - The reference date to take constructor from
 *
 * @returns Current date initialized using the given date constructor
 *
 * @example
 * import { constructNow, isSameDay } from 'date-fns'
 *
 * function isToday<DateType extends Date>(
 *   date: DateArg<DateType>,
 * ): boolean {
 *   // If we were to use `new Date()` directly, the function would  behave
 *   // differently in different timezones and return false for the same date.
 *   return isSameDay(date, constructNow(date));
 * }
 */function la(e){return(0,li/* .constructFrom */.w)(e,Date.now())}// Fallback for modularized imports:
/* export default */const lo=/* unused pure expression or super */null&&la;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js
var ls=r(75518);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfDay.js
var ll=r(5758);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameDay.js
/**
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
 */function lc(e,t,r){const[n,i]=(0,ls/* .normalizeDates */.x)(r?.in,e,t);return+(0,ll/* .startOfDay */.o)(n)===+(0,ll/* .startOfDay */.o)(i)}// Fallback for modularized imports:
/* export default */const lu=/* unused pure expression or super */null&&lc;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isToday.js
/**
 * The {@link isToday} function options.
 *//**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */function ld(e,t){return lc((0,li/* .constructFrom */.w)(t?.in||e,e),la(t?.in||e))}// Fallback for modularized imports:
/* export default */const lf=/* unused pure expression or super */null&&ld;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js
var lp=r(84350);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addDays.js
/**
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
 */function lv(e,t,r){const n=(0,lp/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,li/* .constructFrom */.w)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return n;n.setDate(n.getDate()+t);return n}// Fallback for modularized imports:
/* export default */const lh=/* unused pure expression or super */null&&lv;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isTomorrow.js
/**
 * The {@link isTomorrow} function options.
 *//**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param date - The date to check
 * @param options - An object with options
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */function lm(e,t){return lc(e,lv(la(t?.in||e),1),t)}// Fallback for modularized imports:
/* export default */const lg=/* unused pure expression or super */null&&lm;// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/coupon/EmptyPreviewDetail.tsx
var lb=()=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:l_.wrapper,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("svg",{width:"250",height:"300",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,o/* .jsx */.Y)("line",{x1:"10",y1:"20",x2:"80",y2:"20",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("circle",{cx:"30",cy:"50",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("line",{x1:"50",y1:"50",x2:"200",y2:"50",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("circle",{cx:"30",cy:"80",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("line",{x1:"50",y1:"80",x2:"180",y2:"80",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("circle",{cx:"30",cy:"110",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("line",{x1:"50",y1:"110",x2:"120",y2:"110",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("line",{x1:"10",y1:"160",x2:"80",y2:"160",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("circle",{cx:"30",cy:"190",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("line",{x1:"50",y1:"190",x2:"140",y2:"190",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("circle",{cx:"30",cy:"220",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("line",{x1:"50",y1:"220",x2:"180",y2:"220",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("circle",{cx:"30",cy:"250",r:"3",fill:"black",fillOpacity:"0.05"}),/*#__PURE__*/(0,o/* .jsx */.Y)("line",{x1:"50",y1:"250",x2:"120",y2:"250",stroke:"black",strokeWidth:"6px",strokeLinecap:"round",strokeOpacity:"0.05"})]})})};/* export default */const ly=lb;var l_={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("padding-left:",c/* .spacing["24"] */.YK["24"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/coupon/EmptyPreviewTop.tsx
var lw=()=>{return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:lk.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"receiptPercent",width:32,height:32}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:lk.description,children:(0,p.__)("Coupon preview will appear here","tutor")})]})};/* export default */const lx=lw;var lk={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",c/* .spacing["12"] */.YK["12"],";padding:",c/* .spacing["32"] */.YK["32"]," ",c/* .spacing["20"] */.YK["20"],";svg{color:",c/* .colorTokens.icon.hints */.I6.icon.hints,";}"),description:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/coupon/CouponPreview.tsx
var lA=(e,t)=>{switch(e){case"all_courses":// translators: %s: Percentage or Amount of discount
return(0,p.sprintf)((0,p.__)("%s off all courses","tutor"),t);case"all_bundles":// translators: %s: Percentage or Amount of discount
return(0,p.sprintf)((0,p.__)("%s off all bundles","tutor"),t);case"all_courses_and_bundles":// translators: %s: Percentage or Amount of discount
return(0,p.sprintf)((0,p.__)("%s off all courses and bundles","tutor"),t);case"all_membership_plans":// translators: %s: Percentage or Amount of discount
return(0,p.sprintf)((0,p.__)("%s off all membership plans","tutor"),t);case"specific_courses":// translators: %s: Percentage or Amount of discount
return(0,p.sprintf)((0,p.__)("%s off specific courses","tutor"),t);case"specific_bundles":// translators: %s: Percentage or Amount of discount
return(0,p.sprintf)((0,p.__)("%s off specific bundles","tutor"),t);case"specific_category":// translators: %s: Percentage or Amount of discount
return(0,p.sprintf)((0,p.__)("%s off specific category","tutor"),t);case"specific_membership_plans":// translators: %s: Percentage or Amount of discount
return(0,p.sprintf)((0,p.__)("%s off specific membership plans","tutor"),t);default:return""}};function lY(){var e=(0,f/* .useFormContext */.xW)();var t=e.watch("coupon_title");var r=e.watch("coupon_type");var n=e.watch("coupon_code");var i=e.watch("discount_type");var a=e.watch("discount_amount");var s=e.watch("start_date");var l=e.watch("start_time");var u=e.watch("end_date");var d=e.watch("applies_to");var v=e.watch("per_user_usage_limit");var h=e.watch("coupon_uses");var m=s&&l?"".concat(s," ").concat(l):"";var g=(0,ln/* .isValid */.f)(new Date(m))?"".concat(ld(new Date(m))?(0,p.__)("today","tutor"):lm(new Date(m))?(0,p.__)("tomorrow","tutor"):(0,ok/* .format */.GP)(new Date(m),nX/* .DateFormats.activityDate */.UA.activityDate)):"";var y=i==="flat"?i2(Number(a)):"".concat(a!==null&&a!==void 0?a:0,"%");// translators: %d is the number of times the coupon was used
var _=h?(0,p.sprintf)((0,p.__)("Total %d times used","tutor"),h):"";// translators: %s is the date from which coupon is active
var w=(0,p.sprintf)((0,p.__)("Active from %s","tutor"),g);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:lT.previewWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:t||a||n,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)(lx,{}),children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:lT.previewTop,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:lT.saleSection,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:lT.couponName,children:t}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:lT.discountText,children:"".concat(y," ").concat((0,p.__)("OFF","tutor"))})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("h1",{css:lT.couponCode,children:r==="automatic"?(0,p.__)("Automatic","tutor"):n}),u&&/*#__PURE__*/(0,o/* .jsx */.Y)("p",{css:lT.couponSubtitle,children:/* translators: %s is the validity end date */(0,p.sprintf)((0,p.__)("Valid until %s","tutor"),(0,ok/* .format */.GP)(new Date(u),nX/* .DateFormats.validityDate */.UA.validityDate))})]})}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:lT.previewMiddle,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:lT.leftCircle}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:lT.rightCircle}),/*#__PURE__*/(0,o/* .jsxs */.FD)("svg",{width:"100%",height:"2",viewBox:"0 0 100 2",preserveAspectRatio:"none",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[/*#__PURE__*/(0,o/* .jsx */.Y)("title",{children:(0,p.__)("Right circle icon","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)("path",{d:"M0 1L100 1",stroke:c/* .colorTokens.stroke.border */.I6.stroke.border,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:"7 7",vectorEffect:"non-scaling-stroke"})]})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:a||g||_,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)(ly,{}),children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:lT.previewBottom,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("h6",{css:lT.previewListTitle,children:(0,p.__)("Type","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)("ul",{css:lT.previewList,"data-preview-list":true,children:/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:a,children:/*#__PURE__*/(0,o/* .jsx */.Y)("li",{children:lA(d,y)})})})]})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:Number(v)===1||g,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("h6",{css:lT.previewListTitle,children:(0,p.__)("Details","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("ul",{css:lT.previewList,"data-preview-list":true,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:Number(v)===1,children:/*#__PURE__*/(0,o/* .jsx */.Y)("li",{children:(0,p.__)("One use per customer","tutor")})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:g,children:/*#__PURE__*/(0,o/* .jsx */.Y)("li",{children:w})})]})]})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:new Date(m)>new Date||_,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsx */.Y)("h6",{css:lT.previewListTitle,children:(0,p.__)("Activity","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("ul",{css:lT.previewList,"data-preview-list":true,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:new Date(m)>new Date,children:/*#__PURE__*/(0,o/* .jsx */.Y)("li",{children:(0,p.__)("Not active yet","tutor")})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:h,children:/*#__PURE__*/(0,o/* .jsx */.Y)("li",{children:_})})]})]})})]})})]})}/* export default */const lI=lY;var lT={previewWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["20"] */.YK["20"],";background-color:",c/* .colorTokens.background.white */.I6.background.white,";padding:",c/* .spacing["20"] */.YK["20"]," ",c/* .spacing["32"] */.YK["32"]," ",c/* .spacing["64"] */.YK["64"],";box-shadow:0px 2px 3px 0px rgba(0,0,0,0.25);border-radius:",c/* .borderRadius["6"] */.Vq["6"],";position:sticky;top:160px;",c/* .Breakpoint.mobile */.EA.mobile,"{overflow:hidden;}"),previewTop:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["6"] */.YK["6"],";align-items:center;"),previewMiddle:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;margin-block:",c/* .spacing["16"] */.YK["16"],";display:flex;width:100%;"),leftCircle:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;left:-",c/* .spacing["48"] */.YK["48"],";top:50%;transform:translate(0,-50%);width:32px;height:32px;border-radius:",c/* .borderRadius.circle */.Vq.circle,";background-color:",c/* .colorTokens.surface.navbar */.I6.surface.navbar,";box-shadow:inset 0px 2px 3px 0px rgba(0,0,0,0.25);&::before{content:'';position:absolute;width:50%;height:100%;background:",c/* .colorTokens.surface.navbar */.I6.surface.navbar,";}"),rightCircle:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;right:-",c/* .spacing["48"] */.YK["48"],";top:50%;transform:translate(0,-50%);width:32px;height:32px;border-radius:",c/* .borderRadius.circle */.Vq.circle,";background-color:",c/* .colorTokens.surface.navbar */.I6.surface.navbar,";box-shadow:inset 0px 2px 3px 0px rgba(0,0,0,0.25);&::before{content:'';position:absolute;width:50%;height:100%;background:",c/* .colorTokens.surface.navbar */.I6.surface.navbar,";right:0;}"),previewBottom:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["32"] */.YK["32"],";"),saleSection:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;justify-content:space-between;align-items:center;width:100%;"),couponName:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.heading6 */.I.heading6("medium"),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";"),discountText:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body("medium"),";color:",c/* .colorTokens.text.warning */.I6.text.warning,";"),couponCode:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.heading3 */.I.heading3("medium"),";color:",c/* .colorTokens.text.brand */.I6.text.brand,";margin-top:",c/* .spacing["24"] */.YK["24"],";word-break:break-all;"),couponSubtitle:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.small */.I.small(),";color:",c/* .colorTokens.text.hints */.I6.text.hints,";"),previewListTitle:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption("medium"),";color:",c/* .colorTokens.text.primary */.I6.text.primary,";"),previewList:/*#__PURE__*/(0,s/* .css */.AH)("&[data-preview-list]{",g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.title */.I6.text.title,";list-style:disc;padding-left:",c/* .spacing["24"] */.YK["24"],";}")};// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/en-US.js
var lD=r(14308);// CONCATENATED MODULE: ./node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/constants/index.js
/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const lM=Symbol.for("constructDateFrom");// CONCATENATED MODULE: ./node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tzName/index.js
/**
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
 */function lO(e,t,r="long"){return new Intl.DateTimeFormat("en-US",{// Enforces engine to render the time. Without the option JavaScriptCore omits it.
hour:"numeric",timeZone:e,timeZoneName:r}).format(t).split(/\s/g)// Format.JS uses non-breaking spaces
.slice(2)// Skip the hour and AM/PM parts
.join(" ")};// CONCATENATED MODULE: ./node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tzOffset/index.js
const lE={};const lC={};/**
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
 */function lH(e,t){try{const r=lE[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const n=r(t).split("GMT")[1];if(n in lC)return lC[n];return lF(n,n.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in lC)return lC[e];const t=e?.match(lS);if(t)return lF(e,t.slice(1));return NaN}}const lS=/([+-]\d\d):?(\d\d)?/;function lF(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const i=+(t[2]||0)/60;return lC[e]=r*60+n>0?r*60+n+i:r*60-n-i};// CONCATENATED MODULE: ./node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/date/mini.js
class lL extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN(lH(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));lj(this,NaN);lW(this)}}}static tz(e,...t){return t.length?new lL(...t,e):new lL(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new lL(+this,e)}getTimezoneOffset(){const e=-lH(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);lW(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new lL(+new Date(e),this.timeZone)}}// Assign getters and setters
const lN=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!lN.test(e))return;const t=e.replace(lN,"$1UTC");// Filter out methods without UTC counterparts
if(!lL.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
lL.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
lL.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);lP(this);return+this};// Assign UTC setter
lL.prototype[t]=function(){Date.prototype[t].apply(this,arguments);lW(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function lW(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-lH(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function lP(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
lj(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function lj(e){// Save the time zone offset before all the adjustments
const t=lH(e.timeZone,e);// Remove the seconds offset
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
const n=new Date(+e);// We use UTC methods here as we don't want to land on the same hour again
// in case of DST.
n.setUTCHours(n.getUTCHours()-1);// Calculate if we are on the system DST hour.
const i=-new Date(+e).getTimezoneOffset();const a=-new Date(+n).getTimezoneOffset();const o=i-a;// Detect the DST shift. System DST change will occur both on
const s=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(o&&s)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+o);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const l=i-r;if(l)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);//#endregion
//#region Seconds System diff adjustment
const c=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
c.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=i>0?c.getSeconds():(c.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const d=Math.round(-(lH(e.timeZone,e)*60))%60;if(d||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+d);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+d+u)}//#endregion
//#region Post-adjustment DST fix
const f=lH(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const p=f>0?Math.floor(f):Math.ceil(f);const v=-new Date(+e).getTimezoneOffset();const h=v-p;const m=p!==r;const g=h-l;if(m&&g){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+g);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=lH(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const n=p-r;if(n){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+n);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+n)}}//#endregion
};// CONCATENATED MODULE: ./node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/date/index.js
class lK extends lL{//#region static
static tz(e,...t){return t.length?new lK(...t,e):new lK(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,n]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${n} (${lO(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new lK(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new lK(+new Date(e),this.timeZone)}};// CONCATENATED MODULE: ./node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/tz/index.js
/**
 * The function creates accepts a time zone and returns a function that creates
 * a new `TZDate` instance in the time zone from the provided value. Use it to
 * provide the context for the date-fns functions, via the `in` option.
 *
 * @param timeZone - Time zone name (IANA or UTC offset)
 *
 * @returns Function that creates a new `TZDate` instance in the time zone
 */const lR=e=>t=>TZDate.tz(e,+new Date(t));// CONCATENATED MODULE: ./node_modules/.pnpm/@date-fns+tz@1.4.1/node_modules/@date-fns/tz/index.js
;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMonths.js
/**
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
 */function lB(e,t,r){const n=(0,lp/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,li/* .constructFrom */.w)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return n}const i=n.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const a=(0,li/* .constructFrom */.w)(r?.in||e,n.getTime());a.setMonth(n.getMonth()+t+1,0);const o=a.getDate();if(i>=o){// If we're already at the end of the month, then this is the correct date
// and we're done.
return a}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
n.setFullYear(a.getFullYear(),a.getMonth(),i);return n}}// Fallback for modularized imports:
/* export default */const lz=/* unused pure expression or super */null&&lB;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addWeeks.js
/**
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
 */function lU(e,t,r){return lv(e,t*7,r)}// Fallback for modularized imports:
/* export default */const lV=/* unused pure expression or super */null&&lU;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addYears.js
/**
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
 */function lG(e,t,r){return lB(e,t*12,r)}// Fallback for modularized imports:
/* export default */const lq=/* unused pure expression or super */null&&lG;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarDays.js
var lQ=r(42878);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/differenceInCalendarMonths.js
/**
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
 */function l$(e,t,r){const[n,i]=(0,ls/* .normalizeDates */.x)(r?.in,e,t);const a=n.getFullYear()-i.getFullYear();const o=n.getMonth()-i.getMonth();return a*12+o}// Fallback for modularized imports:
/* export default */const lZ=/* unused pure expression or super */null&&l$;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeInterval.js
function lX(e,t){const[r,n]=(0,ls/* .normalizeDates */.x)(e,t.start,t.end);return{start:r,end:n}};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachMonthOfInterval.js
/**
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
 */function lJ(e,t){const{start:r,end:n}=lX(t?.in,e);let i=+r>+n;const a=i?+r:+n;const o=i?n:r;o.setHours(0,0,0,0);o.setDate(1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;i=!i}const l=[];while(+o<=a){l.push((0,li/* .constructFrom */.w)(r,o));o.setMonth(o.getMonth()+s)}return i?l.reverse():l}// Fallback for modularized imports:
/* export default */const l0=/* unused pure expression or super */null&&lJ;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachYearOfInterval.js
/**
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
 */function l1(e,t){const{start:r,end:n}=lX(t?.in,e);let i=+r>+n;const a=i?+r:+n;const o=i?n:r;o.setHours(0,0,0,0);o.setMonth(0,1);let s=t?.step??1;if(!s)return[];if(s<0){s=-s;i=!i}const l=[];while(+o<=a){l.push((0,li/* .constructFrom */.w)(r,o));o.setFullYear(o.getFullYear()+s)}return i?l.reverse():l}// Fallback for modularized imports:
/* export default */const l2=/* unused pure expression or super */null&&l1;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/defaultOptions.js
var l6=r(87411);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfWeek.js
/**
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
 */function l4(e,t){const r=(0,l6/* .getDefaultOptions */.q)();const n=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const i=(0,lp/* .toDate */.a)(e,t?.in);const a=i.getDay();const o=(a<n?-7:0)+6-(a-n);i.setDate(i.getDate()+o);i.setHours(23,59,59,999);return i}// Fallback for modularized imports:
/* export default */const l5=/* unused pure expression or super */null&&l4;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfISOWeek.js
/**
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
 */function l3(e,t){return l4(e,{...t,weekStartsOn:1})}// Fallback for modularized imports:
/* export default */const l8=/* unused pure expression or super */null&&l3;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfMonth.js
/**
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
 */function l9(e,t){const r=(0,lp/* .toDate */.a)(e,t?.in);const n=r.getMonth();r.setFullYear(r.getFullYear(),n+1,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const l7=/* unused pure expression or super */null&&l9;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/endOfYear.js
/**
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
 */function ce(e,t){const r=(0,lp/* .toDate */.a)(e,t?.in);const n=r.getFullYear();r.setFullYear(n+1,0,0);r.setHours(23,59,59,999);return r}// Fallback for modularized imports:
/* export default */const ct=/* unused pure expression or super */null&&ce;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getISOWeek.js
var cr=r(72642);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getMonth.js
/**
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
 */function cn(e,t){return(0,lp/* .toDate */.a)(e,t?.in).getMonth()}// Fallback for modularized imports:
/* export default */const ci=/* unused pure expression or super */null&&cn;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getYear.js
/**
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
 */function ca(e,t){return(0,lp/* .toDate */.a)(e,t?.in).getFullYear()}// Fallback for modularized imports:
/* export default */const co=/* unused pure expression or super */null&&ca;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getWeek.js
var cs=r(62311);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isAfter.js
/**
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
 */function cl(e,t){return+(0,lp/* .toDate */.a)(e)>+(0,lp/* .toDate */.a)(t)}// Fallback for modularized imports:
/* export default */const cc=/* unused pure expression or super */null&&cl;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isBefore.js
/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */function cu(e,t){return+(0,lp/* .toDate */.a)(e)<+(0,lp/* .toDate */.a)(t)}// Fallback for modularized imports:
/* export default */const cd=/* unused pure expression or super */null&&cu;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isDate.js
var cf=r(20443);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameMonth.js
/**
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
 */function cp(e,t,r){const[n,i]=(0,ls/* .normalizeDates */.x)(r?.in,e,t);return n.getFullYear()===i.getFullYear()&&n.getMonth()===i.getMonth()}// Fallback for modularized imports:
/* export default */const cv=/* unused pure expression or super */null&&cp;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameYear.js
/**
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
 */function ch(e,t,r){const[n,i]=(0,ls/* .normalizeDates */.x)(r?.in,e,t);return n.getFullYear()===i.getFullYear()}// Fallback for modularized imports:
/* export default */const cm=/* unused pure expression or super */null&&ch;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/max.js
/**
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
 */function cg(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=li/* .constructFrom.bind */.w.bind(null,e);const t=(0,lp/* .toDate */.a)(e,n);if(!r||r<t||isNaN(+t))r=t});return(0,li/* .constructFrom */.w)(n,r||NaN)}// Fallback for modularized imports:
/* export default */const cb=/* unused pure expression or super */null&&cg;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/min.js
/**
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
 */function cy(e,t){let r;let n=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!n&&typeof e==="object")n=li/* .constructFrom.bind */.w.bind(null,e);const t=(0,lp/* .toDate */.a)(e,n);if(!r||r>t||isNaN(+t))r=t});return(0,li/* .constructFrom */.w)(n,r||NaN)}// Fallback for modularized imports:
/* export default */const c_=/* unused pure expression or super */null&&cy;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/getDaysInMonth.js
/**
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
 */function cw(e,t){const r=(0,lp/* .toDate */.a)(e,t?.in);const n=r.getFullYear();const i=r.getMonth();const a=(0,li/* .constructFrom */.w)(r,0);a.setFullYear(n,i+1,0);a.setHours(0,0,0,0);return a.getDate()}// Fallback for modularized imports:
/* export default */const cx=/* unused pure expression or super */null&&cw;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMonth.js
/**
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
 */function ck(e,t,r){const n=(0,lp/* .toDate */.a)(e,r?.in);const i=n.getFullYear();const a=n.getDate();const o=(0,li/* .constructFrom */.w)(r?.in||e,0);o.setFullYear(i,t,15);o.setHours(0,0,0,0);const s=cw(o);// Set the earlier date, allows to wrap Jan 31 to Feb 28
n.setMonth(t,Math.min(a,s));return n}// Fallback for modularized imports:
/* export default */const cA=/* unused pure expression or super */null&&ck;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setYear.js
/**
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
 */function cY(e,t,r){const n=(0,lp/* .toDate */.a)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+n))return(0,li/* .constructFrom */.w)(r?.in||e,NaN);n.setFullYear(t);return n}// Fallback for modularized imports:
/* export default */const cI=/* unused pure expression or super */null&&cY;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfISOWeek.js
var cT=r(16925);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfMonth.js
/**
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
 */function cD(e,t){const r=(0,lp/* .toDate */.a)(e,t?.in);r.setDate(1);r.setHours(0,0,0,0);return r}// Fallback for modularized imports:
/* export default */const cM=/* unused pure expression or super */null&&cD;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js
var cO=r(36662);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfYear.js
var cE=r(48011);// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
const cC=5;const cH=4;/**
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
 */function cS(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const n=r.getDay()>0?r.getDay():7;const i=t.addDays(e,-n+1);const a=t.addDays(i,cC*7-1);const o=t.getMonth(e)===t.getMonth(a)?cC:cH;return o};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
/**
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
 */function cF(e,t){const r=t.startOfMonth(e);const n=r.getDay();if(n===1){return r}else if(n===0){return t.addDays(r,-1*6)}else{return t.addDays(r,-1*(n-1))}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function cL(e,t){const r=cF(e,t);const n=cS(e,t);const i=t.addDays(r,n*7-1);return i};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/DateLib.js
/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class cN{/**
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
         */this.today=()=>{if(this.overrides?.today){return this.overrides.today()}if(this.options.timeZone){return lK.tz(this.options.timeZone)}return new this.Date};/**
         * Creates a new `Date` object with the specified year, month, and day.
         *
         * @since 9.5.0
         * @param year The year.
         * @param monthIndex The month (0-11).
         * @param date The day of the month.
         * @returns A new `Date` object.
         */this.newDate=(e,t,r)=>{if(this.overrides?.newDate){return this.overrides.newDate(e,t,r)}if(this.options.timeZone){return new lK(e,t,r,this.options.timeZone)}return new Date(e,t,r)};/**
         * Adds the specified number of days to the given date.
         *
         * @param date The date to add days to.
         * @param amount The number of days to add.
         * @returns The new date with the days added.
         */this.addDays=(e,t)=>{return this.overrides?.addDays?this.overrides.addDays(e,t):lv(e,t)};/**
         * Adds the specified number of months to the given date.
         *
         * @param date The date to add months to.
         * @param amount The number of months to add.
         * @returns The new date with the months added.
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):lB(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):lU(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):lG(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,lQ/* .differenceInCalendarDays */.m)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):l$(e,t)};/**
         * Returns the months between the given dates.
         *
         * @param interval The interval to get the months for.
         */this.eachMonthOfInterval=e=>{return this.overrides?.eachMonthOfInterval?this.overrides.eachMonthOfInterval(e):lJ(e)};/**
         * Returns the years between the given dates.
         *
         * @since 9.11.1
         * @param interval The interval to get the years for.
         * @returns The array of years in the interval.
         */this.eachYearOfInterval=e=>{const t=this.overrides?.eachYearOfInterval?this.overrides.eachYearOfInterval(e):l1(e);// Remove duplicates that may happen across DST transitions (e.g., "America/Sao_Paulo")
// See https://github.com/date-fns/tz/issues/72
const r=new Set(t.map(e=>this.getYear(e)));if(r.size===t.length){// No duplicates, return as is
return t}// Rebuild the array to ensure one date per year
const n=[];r.forEach(e=>{n.push(new Date(e,0,1))});return n};/**
         * Returns the end of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The end of the broadcast week.
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):cL(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):l3(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):l9(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):l4(e,this.options)};/**
         * Returns the end of the year for the given date.
         *
         * @param date The original date.
         * @returns The end of the year.
         */this.endOfYear=e=>{return this.overrides?.endOfYear?this.overrides.endOfYear(e):ce(e)};/**
         * Formats the given date using the specified format string.
         *
         * @param date The date to format.
         * @param formatStr The format string.
         * @returns The formatted date string.
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,ok/* .format */.GP)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,cr/* .getISOWeek */.s)(e)};/**
         * Returns the month of the given date.
         *
         * @param date The date to get the month for.
         * @returns The month.
         */this.getMonth=(e,t)=>{return this.overrides?.getMonth?this.overrides.getMonth(e,this.options):cn(e,this.options)};/**
         * Returns the year of the given date.
         *
         * @param date The date to get the year for.
         * @returns The year.
         */this.getYear=(e,t)=>{return this.overrides?.getYear?this.overrides.getYear(e,this.options):ca(e,this.options)};/**
         * Returns the local week number for the given date.
         *
         * @param date The date to get the week number for.
         * @returns The week number.
         */this.getWeek=(e,t)=>{return this.overrides?.getWeek?this.overrides.getWeek(e,this.options):(0,cs/* .getWeek */.N)(e,this.options)};/**
         * Checks if the first date is after the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is after the second date.
         */this.isAfter=(e,t)=>{return this.overrides?.isAfter?this.overrides.isAfter(e,t):cl(e,t)};/**
         * Checks if the first date is before the second date.
         *
         * @param date The date to compare.
         * @param dateToCompare The date to compare with.
         * @returns True if the first date is before the second date.
         */this.isBefore=(e,t)=>{return this.overrides?.isBefore?this.overrides.isBefore(e,t):cu(e,t)};/**
         * Checks if the given value is a Date object.
         *
         * @param value The value to check.
         * @returns True if the value is a Date object.
         */this.isDate=e=>{return this.overrides?.isDate?this.overrides.isDate(e):(0,cf/* .isDate */.$)(e)};/**
         * Checks if the given dates are on the same day.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are on the same day.
         */this.isSameDay=(e,t)=>{return this.overrides?.isSameDay?this.overrides.isSameDay(e,t):lc(e,t)};/**
         * Checks if the given dates are in the same month.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same month.
         */this.isSameMonth=(e,t)=>{return this.overrides?.isSameMonth?this.overrides.isSameMonth(e,t):cp(e,t)};/**
         * Checks if the given dates are in the same year.
         *
         * @param dateLeft The first date to compare.
         * @param dateRight The second date to compare.
         * @returns True if the dates are in the same year.
         */this.isSameYear=(e,t)=>{return this.overrides?.isSameYear?this.overrides.isSameYear(e,t):ch(e,t)};/**
         * Returns the latest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The latest date.
         */this.max=e=>{return this.overrides?.max?this.overrides.max(e):cg(e)};/**
         * Returns the earliest date in the given array of dates.
         *
         * @param dates The array of dates to compare.
         * @returns The earliest date.
         */this.min=e=>{return this.overrides?.min?this.overrides.min(e):cy(e)};/**
         * Sets the month of the given date.
         *
         * @param date The date to set the month on.
         * @param month The month to set (0-11).
         * @returns The new date with the month set.
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):ck(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):cY(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):cF(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,ll/* .startOfDay */.o)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,cT/* .startOfISOWeek */.b)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):cD(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,cO/* .startOfWeek */.k)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,cE/* .startOfYear */.D)(e)};this.options={locale:lD/* .enUS */.c,...e};this.overrides=t}/**
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
     */getMonthYearOrder(){const e=this.options.locale?.code;if(!e){return"month-first"}return cN.yearFirstLocales.has(e)?"year-first":"month-first"}/**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const i=t?.code;if(i&&cN.yearFirstLocales.has(i)){try{const t=new Intl.DateTimeFormat(i,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const a=t.format(e);return a}catch{// Fallback to date-fns formatting below.
}}const a=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,a)}}cN.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const cW=new cN;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const cP=/* unused pure expression or super */null&&cW;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/UI.js
/**
 * Enum representing the UI elements composing DayPicker. These elements are
 * mapped to {@link CustomComponents}, {@link ClassNames}, and {@link Styles}.
 *
 * Some elements are extended by flags and modifiers.
 */var cj;(function(e){/** The root component displaying the months and the navigation bar. */e["Root"]="root";/** The Chevron SVG element used by navigation buttons and dropdowns. */e["Chevron"]="chevron";/**
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
     */e["PreviousMonthButton"]="button_previous";/** The row containing the week. */e["Week"]="week";/** The group of row weeks in a month (`tbody`). */e["Weeks"]="weeks";/** The column header with the weekday. */e["Weekday"]="weekday";/** The row grouping the weekdays in the column headers. */e["Weekdays"]="weekdays";/** The cell containing the week number. */e["WeekNumber"]="week_number";/** The cell header of the week numbers column. */e["WeekNumberHeader"]="week_number_header";/** The dropdown with the years. */e["YearsDropdown"]="years_dropdown"})(cj||(cj={}));/** Enum representing flags for the {@link UI.Day} element. */var cK;(function(e){/** The day is disabled. */e["disabled"]="disabled";/** The day is hidden. */e["hidden"]="hidden";/** The day is outside the current month. */e["outside"]="outside";/** The day is focused. */e["focused"]="focused";/** The day is today. */e["today"]="today"})(cK||(cK={}));/**
 * Enum representing selection states that can be applied to the {@link UI.Day}
 * element in selection mode.
 */var cR;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(cR||(cR={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var cB;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(cB||(cB={}));// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function cz(e,t,r=false,n=cW){let{from:i,to:a}=e;const{differenceInCalendarDays:o,isSameDay:s}=n;if(i&&a){const e=o(a,i)<0;if(e){[i,a]=[a,i]}const n=o(t,i)>=(r?1:0)&&o(a,t)>=(r?1:0);return n}if(!r&&a){return s(a,t)}if(!r&&i){return s(i,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const cU=(e,t)=>cz(e,t,false,defaultDateLib);// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/typeguards.js
/**
 * Checks if the given value is of type {@link DateInterval}.
 *
 * @param matcher - The value to check.
 * @returns `true` if the value is a {@link DateInterval}, otherwise `false`.
 * @group Utilities
 */function cV(e){return Boolean(e&&typeof e==="object"&&"before"in e&&"after"in e)}/**
 * Checks if the given value is of type {@link DateRange}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateRange}, otherwise `false`.
 * @group Utilities
 */function cG(e){return Boolean(e&&typeof e==="object"&&"from"in e)}/**
 * Checks if the given value is of type {@link DateAfter}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateAfter}, otherwise `false`.
 * @group Utilities
 */function cq(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function cQ(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function c$(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function cZ(e,t){return Array.isArray(e)&&e.every(t.isDate)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function cX(e,t,r=cW){const n=!Array.isArray(t)?[t]:t;const{isSameDay:i,differenceInCalendarDays:a,isAfter:o}=r;return n.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return i(e,t)}if(cZ(t,r)){return t.includes(e)}if(cG(t)){return cz(t,e,false,r)}if(c$(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if(cV(t)){const r=a(t.before,e);const n=a(t.after,e);const i=r>0;const s=n<0;const l=o(t.before,t.after);if(l){return s&&i}else{return i||s}}if(cq(t)){return a(e,t.after)>0}if(cQ(t)){return a(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const cJ=/* unused pure expression or super */null&&cX;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
/**
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
 */function c0(e,t,r,n,i){const{disabled:a,hidden:o,modifiers:s,showOutsideDays:l,broadcastCalendar:c,today:u=i.today()}=t;const{isSameDay:d,isSameMonth:f,startOfMonth:p,isBefore:v,endOfMonth:h,isAfter:m}=i;const g=r&&p(r);const b=n&&h(n);const y={[cK.focused]:[],[cK.outside]:[],[cK.disabled]:[],[cK.hidden]:[],[cK.today]:[]};const _={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!f(e,r));const p=Boolean(g&&v(e,g));const h=Boolean(b&&m(e,b));const w=Boolean(a&&cX(e,a,i));const x=Boolean(o&&cX(e,o,i))||p||h||// Broadcast calendar will show outside days as default
!c&&!l&&n||c&&l===false&&n;const k=d(e,u);if(n)y.outside.push(t);if(w)y.disabled.push(t);if(x)y.hidden.push(t);if(k)y.today.push(t);// Add custom modifiers
if(s){Object.keys(s).forEach(r=>{const n=s?.[r];const a=n?cX(e,n,i):false;if(!a)return;if(_[r]){_[r].push(t)}else{_[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[cK.focused]:false,[cK.disabled]:false,[cK.hidden]:false,[cK.outside]:false,[cK.today]:false};const r={};// Find the modifiers for the given day
for(const r in y){const n=y[r];t[r]=n.some(t=>t===e)}for(const t in _){r[t]=_[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
/**
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
 */function c1(e,t,r={}){const n=Object.entries(e).filter(([,e])=>e===true).reduce((e,[n])=>{if(r[n]){e.push(r[n])}else if(t[cK[n]]){e.push(t[cK[n]])}else if(t[cR[n]]){e.push(t[cR[n]])}return e},[t[cj.Day]]);return n};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Button.js
/**
 * Render the button elements in the calendar.
 *
 * @private
 * @deprecated Use `PreviousMonthButton` or `@link NextMonthButton` instead.
 */function c2(e){return h.createElement("button",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
/**
 * Render the label in the month caption.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function c6(e){return h.createElement("span",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Chevron.js
/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function c4(e){const{size:t=24,orientation:r="left",className:n}=e;return(// biome-ignore lint/a11y/noSvgWithoutTitle: handled by the parent component
h.createElement("svg",{className:n,width:t,height:t,viewBox:"0 0 24 24"},r==="up"&&h.createElement("polygon",{points:"6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28"}),r==="down"&&h.createElement("polygon",{points:"6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72"}),r==="left"&&h.createElement("polygon",{points:"16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20"}),r==="right"&&h.createElement("polygon",{points:"8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20"})))};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Day.js
/**
 * Render a grid cell for a specific day in the calendar.
 *
 * Handles interaction and focus for the day. If you only need to change the
 * content of the day cell, consider swapping the `DayButton` component
 * instead.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function c5(e){const{day:t,modifiers:r,...n}=e;return h.createElement("td",{...n})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/DayButton.js
/**
 * Render a button for a specific day in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function c3(e){const{day:t,modifiers:r,...n}=e;const i=h.useRef(null);h.useEffect(()=>{if(r.focused)i.current?.focus()},[r.focused]);return h.createElement("button",{ref:i,...n})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Dropdown.js
/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function c8(e){const{options:t,className:r,components:n,classNames:i,...a}=e;const o=[i[cj.Dropdown],r].join(" ");const s=t?.find(({value:e})=>e===a.value);return h.createElement("span",{"data-disabled":a.disabled,className:i[cj.DropdownRoot]},h.createElement(n.Select,{className:o,...a},t?.map(({value:e,label:t,disabled:r})=>h.createElement(n.Option,{key:e,value:e,disabled:r},t))),h.createElement("span",{className:i[cj.CaptionLabel],"aria-hidden":true},s?.label,h.createElement(n.Chevron,{orientation:"down",size:18,className:i[cj.Chevron]})))};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/DropdownNav.js
/**
 * Render the navigation dropdowns for the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function c9(e){return h.createElement("div",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Footer.js
/**
 * Render the footer of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function c7(e){return h.createElement("div",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Month.js
/**
 * Render the grid with the weekday header row and the weeks for a specific
 * month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ue(e){const{calendarMonth:t,displayIndex:r,...n}=e;return h.createElement("div",{...n},e.children)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthCaption.js
/**
 * Render the caption for a month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ut(e){const{calendarMonth:t,displayIndex:r,...n}=e;return h.createElement("div",{...n})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthGrid.js
/**
 * Render the grid of days for a specific month.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ur(e){return h.createElement("table",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Months.js
/**
 * Render a container wrapping the month grids.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function un(e){return h.createElement("div",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useDayPicker.js
/** @ignore */const ui=(0,h.createContext)(undefined);/**
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
 */function ua(){const e=(0,h.useContext)(ui);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function uo(e){const{components:t}=ua();return h.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Nav.js
/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function us(e){const{onPreviousClick:t,onNextClick:r,previousMonth:n,nextMonth:i,...a}=e;const{components:o,classNames:s,labels:{labelPrevious:l,labelNext:c}}=ua();const u=(0,h.useCallback)(e=>{if(i){r?.(e)}},[i,r]);const d=(0,h.useCallback)(e=>{if(n){t?.(e)}},[n,t]);return h.createElement("nav",{...a},h.createElement(o.PreviousMonthButton,{type:"button",className:s[cj.PreviousMonthButton],tabIndex:n?undefined:-1,"aria-disabled":n?undefined:true,"aria-label":l(n),onClick:d},h.createElement(o.Chevron,{disabled:n?undefined:true,className:s[cj.Chevron],orientation:"left"})),h.createElement(o.NextMonthButton,{type:"button",className:s[cj.NextMonthButton],tabIndex:i?undefined:-1,"aria-disabled":i?undefined:true,"aria-label":c(i),onClick:u},h.createElement(o.Chevron,{disabled:i?undefined:true,orientation:"right",className:s[cj.Chevron]})))};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ul(e){const{components:t}=ua();return h.createElement(t.Button,{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Option.js
/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function uc(e){return h.createElement("option",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function uu(e){const{components:t}=ua();return h.createElement(t.Button,{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Root.js
/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ud(e){const{rootRef:t,...r}=e;return h.createElement("div",{...r,ref:t})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Select.js
/**
 * Render a `select` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function uf(e){return h.createElement("select",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Week.js
/**
 * Render a table row representing a week in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function up(e){const{week:t,...r}=e;return h.createElement("tr",{...r})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weekday.js
/**
 * Render a table header cell with the name of a weekday (e.g., "Mo", "Tu").
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function uv(e){return h.createElement("th",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weekdays.js
/**
 * Render the table row containing the weekday names.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function uh(e){return h.createElement("thead",{"aria-hidden":true},h.createElement("tr",{...e}))};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/WeekNumber.js
/**
 * Render a table cell displaying the number of the week.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function um(e){const{week:t,...r}=e;return h.createElement("th",{...r})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
/**
 * Render the header cell for the week numbers column.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ug(e){return h.createElement("th",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/Weeks.js
/**
 * Render the container for the weeks in the month grid.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function ub(e){return h.createElement("tbody",{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function uy(e){const{components:t}=ua();return h.createElement(t.Dropdown,{...e})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/components/custom-components.js
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getComponents.js
/**
 * Merges custom components from the props with the default components.
 *
 * This function ensures that any custom components provided in the props
 * override the default components.
 *
 * @param customComponents The custom components provided in the DayPicker
 *   props.
 * @returns An object containing the merged components.
 */function u_(e){return{...n,...e}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
/**
 * Extracts `data-` attributes from the DayPicker props.
 *
 * This function collects all `data-` attributes from the props and adds
 * additional attributes based on the DayPicker configuration.
 *
 * @param props The DayPicker props.
 * @returns An object containing the `data-` attributes.
 */function uw(e){const t={"data-mode":e.mode??undefined,"data-required":"required"in e?e.required:undefined,"data-multiple-months":e.numberOfMonths&&e.numberOfMonths>1||undefined,"data-week-numbers":e.showWeekNumber||undefined,"data-broadcast-calendar":e.broadcastCalendar||undefined,"data-nav-layout":e.navLayout||undefined};Object.entries(e).forEach(([e,r])=>{if(e.startsWith("data-")){t[e]=r}});return t};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
/**
 * Returns the default class names for the UI elements.
 *
 * This function generates a mapping of default class names for various UI
 * elements, day flags, selection states, and animations.
 *
 * @returns An object containing the default class names.
 * @group Utilities
 */function ux(){const e={};for(const t in cj){e[cj[t]]=`rdp-${cj[t]}`}for(const t in cK){e[cK[t]]=`rdp-${cK[t]}`}for(const t in cR){e[cR[t]]=`rdp-${cR[t]}`}for(const t in cB){e[cB[t]]=`rdp-${cB[t]}`}return e};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
/**
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
 */function uk(e,t,r){const n=r??new cN(t);return n.formatMonthYear(e)}/**
 * @private
 * @deprecated Use {@link formatCaption} instead.
 * @group Formatters
 */const uA=uk;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatDay.js
/**
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
 */function uY(e,t,r){return(r??new cN(t)).format(e,"d")};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
/**
 * Formats the month for the dropdown option label.
 *
 * @defaultValue The localized full month name.
 * @param month The date representing the month.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted month name as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function uI(e,t=cW){return t.format(e,"LLLL")};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
/**
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
 */function uT(e,t,r){return(r??new cN(t)).format(e,"cccccc")};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
/**
 * Formats the week number.
 *
 * @defaultValue The week number as a string, with a leading zero for single-digit numbers.
 * @param weekNumber The week number to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted week number as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function uD(e,t=cW){if(e<10){return t.formatNumber(`0${e.toLocaleString()}`)}return t.formatNumber(`${e.toLocaleString()}`)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
/**
 * Formats the header for the week number column.
 *
 * @defaultValue An empty string `""`.
 * @returns The formatted week number header as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function uM(){return``};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
/**
 * Formats the year for the dropdown option label.
 *
 * @param year The year to format.
 * @param dateLib The date library to use for formatting. Defaults to
 *   `defaultDateLib`.
 * @returns The formatted year as a string.
 * @group Formatters
 * @see https://daypicker.dev/docs/translation#custom-formatters
 */function uO(e,t=cW){return t.format(e,"yyyy")}/**
 * @private
 * @deprecated Use `formatYearDropdown` instead.
 * @group Formatters
 */const uE=uO;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/formatters/index.js
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
/**
 * Merges custom formatters from the props with the default formatters.
 *
 * @param customFormatters The custom formatters provided in the DayPicker
 *   props.
 * @returns The merged formatters object.
 */function uC(e){if(e?.formatMonthCaption&&!e.formatCaption){e.formatCaption=e.formatMonthCaption}if(e?.formatYearCaption&&!e.formatYearDropdown){e.formatYearDropdown=e.formatYearCaption}return{...i,...e}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
/**
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
 */function uH(e,t,r,n,i){const{startOfMonth:a,startOfYear:o,endOfYear:s,eachMonthOfInterval:l,getMonth:c}=i;const u=l({start:o(e),end:s(e)});const d=u.map(e=>{const o=n.formatMonthDropdown(e,i);const s=c(e);const l=t&&e<a(t)||r&&e>a(r)||false;return{value:s,label:o,disabled:l}});return d};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function uS(e,t={},r={}){let n={...t?.[cj.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{n={...n,...r?.[e]}});return n};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function uF(e,t,r,n){const i=n??e.today();const a=r?e.startOfBroadcastWeek(i,e):t?e.startOfISOWeek(i):e.startOfWeek(i);const o=[];for(let t=0;t<7;t++){const r=e.addDays(a,t);o.push(r)}return o};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
/**
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
 */function uL(e,t,r,n,i=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:a,endOfYear:o,eachYearOfInterval:s,getYear:l}=n;const c=a(e);const u=o(t);const d=s({start:c,end:u});if(i)d.reverse();return d.map(e=>{const t=r.formatYearDropdown(e,n);return{value:l(e),label:t,disabled:false}})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
/**
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
 */function uN(e,t,r,n){let i=(n??new cN(r)).format(e,"PPPP");if(t.today)i=`Today, ${i}`;if(t.selected)i=`${i}, selected`;return i}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const uW=uN;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelGrid.js
/**
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
 */function uP(e,t,r){const n=r??new cN(t);return n.formatMonthYear(e)}/**
 * @ignore
 * @deprecated Use {@link labelGrid} instead.
 */const uj=uP;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uK(e,t,r,n){let i=(n??new cN(r)).format(e,"PPPP");if(t?.today){i=`Today, ${i}`}return i};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
/**
 * Generates the ARIA label for the months dropdown.
 *
 * @defaultValue `"Choose the Month"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the months dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uR(e){return"Choose the Month"};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelNav.js
/**
 * Generates the ARIA label for the navigation toolbar.
 *
 * @defaultValue `""`
 * @returns The ARIA label for the navigation toolbar.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uB(){return""};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelNext.js
/**
 * Generates the ARIA label for the "next month" button.
 *
 * @defaultValue `"Go to the Next Month"`
 * @param month - The date representing the next month, or `undefined` if there
 *   is no next month.
 * @returns The ARIA label for the "next month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uz(e){return"Go to the Next Month"};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
/**
 * Generates the ARIA label for the "previous month" button.
 *
 * @defaultValue `"Go to the Previous Month"`
 * @param month - The date representing the previous month, or `undefined` if
 *   there is no previous month.
 * @returns The ARIA label for the "previous month" button.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uU(e){return"Go to the Previous Month"};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
/**
 * Generates the ARIA label for a weekday column header.
 *
 * @defaultValue `"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"`
 * @param date - The date representing the weekday.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The ARIA label for the weekday column header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uV(e,t,r){return(r??new cN(t)).format(e,"cccc")};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
/**
 * Generates the ARIA label for the week number cell (the first cell in a row).
 *
 * @defaultValue `Week ${weekNumber}`
 * @param weekNumber - The number of the week.
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uG(e,t){return`Week ${e}`};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
/**
 * Generates the ARIA label for the week number header element.
 *
 * @defaultValue `"Week Number"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the week number header.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uq(e){return"Week Number"};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
/**
 * Generates the ARIA label for the years dropdown.
 *
 * @defaultValue `"Choose the Year"`
 * @param options - Optional configuration for the date formatting library.
 * @returns The ARIA label for the years dropdown.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function uQ(e){return"Choose the Year"};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/labels/index.js
;// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useAnimation.js
const u$=e=>{if(e instanceof HTMLElement)return e;return null};const uZ=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const uX=e=>u$(e.querySelector("[data-animated-month]"));const uJ=e=>u$(e.querySelector("[data-animated-caption]"));const u0=e=>u$(e.querySelector("[data-animated-weeks]"));const u1=e=>u$(e.querySelector("[data-animated-nav]"));const u2=e=>u$(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function u6(e,t,{classNames:r,months:n,focused:i,dateLib:a}){const o=(0,h.useRef)(null);const s=(0,h.useRef)(n);const l=(0,h.useRef)(false);(0,h.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const c=s.current;// update previous months ref for next effect trigger
s.current=n;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
n.length===0||c.length===0||n.length!==c.length){return}const u=a.isSameMonth(n[0].date,c[0].date);const d=a.isAfter(n[0].date,c[0].date);const f=d?r[cB.caption_after_enter]:r[cB.caption_before_enter];const p=d?r[cB.weeks_after_enter]:r[cB.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const v=o.current;// update snapshot for next effect trigger
const h=e.current.cloneNode(true);if(h instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=uZ(h);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=uX(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=uJ(e);if(r){r.classList.remove(f)}const n=u0(e);if(n){n.classList.remove(p)}});o.current=h}else{o.current=null}if(l.current||u||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
i){return}const m=v instanceof HTMLElement?uZ(v):[];const g=uZ(e.current);if(g?.every(e=>e instanceof HTMLElement)&&m&&m.every(e=>e instanceof HTMLElement)){l.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=u1(e.current);if(n){n.style.zIndex="1"}g.forEach((i,a)=>{const o=m[a];if(!o){return}// animate new displayed month
i.style.position="relative";i.style.overflow="hidden";const s=uJ(i);if(s){s.classList.add(f)}const c=u0(i);if(c){c.classList.add(p)}// animate new displayed month end
const u=()=>{l.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(s){s.classList.remove(f)}if(c){c.classList.remove(p)}i.style.position="";i.style.overflow="";if(i.contains(o)){i.removeChild(o)}};t.push(u);// animate old displayed month
o.style.pointerEvents="none";o.style.position="absolute";o.style.overflow="hidden";o.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const v=u2(o);if(v){v.style.opacity="0"}const h=uJ(o);if(h){h.classList.add(d?r[cB.caption_before_exit]:r[cB.caption_after_exit]);h.addEventListener("animationend",u)}const g=u0(o);if(g){g.classList.add(d?r[cB.weeks_before_exit]:r[cB.weeks_after_exit])}i.insertBefore(o,i.firstChild)})}})};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDates.js
/**
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
 */function u4(e,t,r,n){const i=e[0];const a=e[e.length-1];const{ISOWeek:o,fixedWeeks:s,broadcastCalendar:l}=r??{};const{addDays:c,differenceInCalendarDays:u,differenceInCalendarMonths:d,endOfBroadcastWeek:f,endOfISOWeek:p,endOfMonth:v,endOfWeek:h,isAfter:m,startOfBroadcastWeek:g,startOfISOWeek:b,startOfWeek:y}=n;const _=l?g(i,n):o?b(i):y(i);const w=l?f(a):o?p(v(a)):h(v(a));// If maxDate is set, clamp the grid to the end of that week.
const x=t&&(l?f(t):o?p(t):h(t));// Pick the earliest week end between the displayed months and the constraint.
const k=x&&m(w,x)?x:w;const A=u(k,_);const Y=d(a,i)+1;const I=[];for(let e=0;e<=A;e++){const t=c(_,e);I.push(t)}// If fixed weeks is enabled, add the extra dates to the array
const T=l?35:42;const D=T*Y;if(s&&I.length<D){const e=D-I.length;for(let t=0;t<e;t++){const e=c(I[I.length-1],1);I.push(e)}}return I};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDays.js
/**
 * Returns all the days belonging to the calendar by merging the days in the
 * weeks for each month.
 *
 * @param calendarMonths The array of calendar months.
 * @returns An array of `CalendarDay` objects representing all the days in the
 *   calendar.
 */function u5(e){const t=[];return e.reduce((e,r)=>{const n=r.weeks.reduce((e,t)=>{return e.concat(t.days.slice())},t.slice());return e.concat(n.slice())},t.slice())};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
/**
 * Returns the months to display in the calendar.
 *
 * @param firstDisplayedMonth The first month currently displayed in the
 *   calendar.
 * @param calendarEndMonth The latest month the user can navigate to.
 * @param props The DayPicker props, including `numberOfMonths`.
 * @param dateLib The date library to use for date manipulation.
 * @returns An array of dates representing the months to display.
 */function u3(e,t,r,n){const{numberOfMonths:i=1}=r;const a=[];for(let r=0;r<i;r++){const i=n.addMonths(e,r);if(t&&i>t){break}a.push(i)}return a};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
/**
 * Determines the initial month to display in the calendar based on the provided
 * props.
 *
 * This function calculates the starting month, considering constraints such as
 * `startMonth`, `endMonth`, and the number of months to display.
 *
 * @param props The DayPicker props, including navigation and date constraints.
 * @param dateLib The date library to use for date manipulation.
 * @returns The initial month to display.
 */function u8(e,t,r,n){const{month:i,defaultMonth:a,today:o=n.today(),numberOfMonths:s=1}=e;let l=i||a||o;const{differenceInCalendarMonths:c,addMonths:u,startOfMonth:d}=n;if(r&&c(r,l)<s-1){const e=-1*(s-1);l=u(r,e)}if(t&&c(l,t)<0){l=t}return d(l)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/CalendarDay.js
/**
 * Represents a day displayed in the calendar.
 *
 * In DayPicker, a `CalendarDay` is a wrapper around a `Date` object that
 * provides additional information about the day, such as whether it belongs to
 * the displayed month.
 */class u9{constructor(e,t,r=cW){this.date=e;this.displayMonth=t;this.outside=Boolean(t&&!r.isSameMonth(e,t));this.dateLib=r;this.isoDate=r.format(e,"yyyy-MM-dd");this.displayMonthId=r.format(t,"yyyy-MM");this.dateMonthId=r.format(e,"yyyy-MM")}/**
     * Checks if this day is equal to another `CalendarDay`, considering both the
     * date and the displayed month.
     *
     * @param day The `CalendarDay` to compare with.
     * @returns `true` if the days are equal, otherwise `false`.
     */isEqualTo(e){return this.dateLib.isSameDay(e.date,this.date)&&this.dateLib.isSameMonth(e.displayMonth,this.displayMonth)}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/CalendarWeek.js
/**
 * Represents a week in a calendar month.
 *
 * A `CalendarWeek` contains the days within the week and the week number.
 */class u7{constructor(e,t){this.days=t;this.weekNumber=e}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/classes/CalendarMonth.js
/**
 * Represents a month in a calendar year.
 *
 * A `CalendarMonth` contains the weeks within the month and the date of the
 * month.
 */class de{constructor(e,t){this.date=e;this.weeks=t}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getMonths.js
/**
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
 */function dt(e,t,r,n){const{addDays:i,endOfBroadcastWeek:a,endOfISOWeek:o,endOfMonth:s,endOfWeek:l,getISOWeek:c,getWeek:u,startOfBroadcastWeek:d,startOfISOWeek:f,startOfWeek:p}=n;const v=e.reduce((e,v)=>{const h=r.broadcastCalendar?d(v,n):r.ISOWeek?f(v):p(v);const m=r.broadcastCalendar?a(v):r.ISOWeek?o(s(v)):l(s(v));/** The dates to display in the month. */const g=t.filter(e=>{return e>=h&&e<=m});const b=r.broadcastCalendar?35:42;if(r.fixedWeeks&&g.length<b){const e=t.filter(e=>{const t=b-g.length;return e>m&&e<=i(m,t)});g.push(...e)}const y=g.reduce((e,t)=>{const i=r.ISOWeek?c(t):u(t);const a=e.find(e=>e.weekNumber===i);const o=new u9(t,v,n);if(!a){e.push(new u7(i,[o]))}else{a.days.push(o)}return e},[]);const _=new de(v,y);e.push(_);return e},[]);if(!r.reverseMonths){return v}else{return v.reverse()}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function dr(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:i,startOfDay:a,startOfMonth:o,endOfMonth:s,addYears:l,endOfYear:c,newDate:u,today:d}=t;// Handle deprecated code
const{fromYear:f,toYear:p,fromMonth:v,toMonth:h}=e;if(!r&&v){r=v}if(!r&&f){r=t.newDate(f,0,1)}if(!n&&h){n=h}if(!n&&p){n=u(p,11,31)}const m=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=o(r)}else if(f){r=u(f,0,1)}else if(!r&&m){r=i(l(e.today??d(),-100))}if(n){n=s(n)}else if(p){n=u(p,11,31)}else if(!n&&m){n=c(e.today??d())}return[r?a(r):r,n?a(n):n]};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
/**
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
 */function dn(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:i,numberOfMonths:a=1}=r;const{startOfMonth:o,addMonths:s,differenceInCalendarMonths:l}=n;const c=i?a:1;const u=o(e);if(!t){return s(u,c)}const d=l(t,e);if(d<a){return undefined}return s(u,c)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
/**
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
 */function di(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:i,numberOfMonths:a}=r;const{startOfMonth:o,addMonths:s,differenceInCalendarMonths:l}=n;const c=i?a??1:1;const u=o(e);if(!t){return s(u,-c)}const d=l(u,t);if(d<=0){return undefined}return s(u,-c)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
/**
 * Returns an array of calendar weeks from an array of calendar months.
 *
 * @param months The array of calendar months.
 * @returns An array of calendar weeks.
 */function da(e){const t=[];return e.reduce((e,t)=>{return e.concat(t.weeks.slice())},t.slice())};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
/**
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
 */function ds(e,t){const[r,n]=(0,h.useState)(e);const i=t===undefined?r:t;return[i,n]};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useCalendar.js
/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function dl(e,t){const[r,n]=dr(e,t);const{startOfMonth:i,endOfMonth:a}=t;const o=u8(e,r,n,t);const[s,l]=ds(o,// initialMonth is always computed from props.month if provided
e.month?o:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,h.useEffect)(()=>{const i=u8(e,r,n,t);l(i)},[e.timeZone]);/** The months displayed in the calendar. */// biome-ignore lint/correctness/useExhaustiveDependencies: We want to recompute only when specific props change.
const{months:c,weeks:u,days:d,previousMonth:f,nextMonth:p}=(0,h.useMemo)(()=>{const i=u3(s,n,{numberOfMonths:e.numberOfMonths},t);const o=u4(i,e.endMonth?a(e.endMonth):undefined,{ISOWeek:e.ISOWeek,fixedWeeks:e.fixedWeeks,broadcastCalendar:e.broadcastCalendar},t);const l=dt(i,o,{broadcastCalendar:e.broadcastCalendar,fixedWeeks:e.fixedWeeks,ISOWeek:e.ISOWeek,reverseMonths:e.reverseMonths},t);const c=da(l);const u=u5(l);const d=di(s,r,e,t);const f=dn(s,n,e,t);return{months:l,weeks:c,days:u,previousMonth:d,nextMonth:f}},[t,s.getTime(),n?.getTime(),r?.getTime(),e.disableNavigation,e.broadcastCalendar,e.endMonth?.getTime(),e.fixedWeeks,e.ISOWeek,e.numberOfMonths,e.pagedNavigation,e.reverseMonths]);const{disableNavigation:v,onMonthChange:m}=e;const g=e=>u.some(t=>t.days.some(t=>t.isEqualTo(e)));const b=e=>{if(v){return}let t=i(e);// if month is before start, use the first month instead
if(r&&t<i(r)){t=i(r)}// if month is after endMonth, use the last month instead
if(n&&t>i(n)){t=i(n)}l(t);m?.(t)};const y=e=>{// is this check necessary?
if(g(e)){return}b(e.date)};const _={months:c,weeks:u,days:d,navStart:r,navEnd:n,previousMonth:f,nextMonth:p,goToMonth:b,goToDay:y};return _};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var dc;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(dc||(dc={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function du(e){return!e[cK.disabled]&&!e[cK.hidden]&&!e[cK.outside]}/**
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
 */function dd(e,t,r,n){let i;let a=-1;for(const o of e){const e=t(o);if(du(e)){if(e[cK.focused]&&a<dc.FocusedModifier){i=o;a=dc.FocusedModifier}else if(n?.isEqualTo(o)&&a<dc.LastFocused){i=o;a=dc.LastFocused}else if(r(o.date)&&a<dc.Selected){i=o;a=dc.Selected}else if(e[cK.today]&&a<dc.Today){i=o;a=dc.Today}}}if(!i){// Return the first day that is focusable
i=e.find(e=>du(t(e)))}return i};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
/**
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
 */function df(e,t,r,n,i,a,o){const{ISOWeek:s,broadcastCalendar:l}=a;const{addDays:c,addMonths:u,addWeeks:d,addYears:f,endOfBroadcastWeek:p,endOfISOWeek:v,endOfWeek:h,max:m,min:g,startOfBroadcastWeek:b,startOfISOWeek:y,startOfWeek:_}=o;const w={day:c,week:d,month:u,year:f,startOfWeek:e=>l?b(e,o):s?y(e):_(e),endOfWeek:e=>l?p(e):s?v(e):h(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=m([n,x])}else if(t==="after"&&i){x=g([i,x])}return x};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
/**
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
 */function dp(e,t,r,n,i,a,o,s=0){if(s>365){// Limit the recursion to 365 attempts
return undefined}const l=df(e,t,r.date,n,i,a,o);const c=Boolean(a.disabled&&cX(l,a.disabled,o));const u=Boolean(a.hidden&&cX(l,a.hidden,o));const d=l;const f=new u9(l,d,o);if(!c&&!u){return f}// Recursively attempt to find the next focusable date
return dp(e,t,f,n,i,a,o,s+1)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useFocus.js
/**
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
 */function dv(e,t,r,n,i){const{autoFocus:a}=e;const[o,s]=(0,h.useState)();const l=dd(t.days,r,n||(()=>false),o);const[c,u]=(0,h.useState)(a?l:undefined);const d=()=>{s(c);u(undefined)};const f=(r,n)=>{if(!c)return;const a=dp(r,n,c,t.navStart,t.navEnd,e,i);if(!a)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(a));if(!e){return}}t.goToDay(a);u(a)};const p=e=>{return Boolean(l?.isEqualTo(e))};const v={isFocusTarget:p,setFocused:u,focused:c,blur:d,moveFocus:f};return v};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useMulti.js
/**
 * Hook to manage multiple-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected dates, a function to select dates,
 *   and a function to check if a date is selected.
 */function dh(e,t){const{selected:r,required:n,onSelect:i}=e;const[a,o]=ds(r,i?r:undefined);const s=!i?a:r;const{isSameDay:l}=t;const c=e=>{return s?.some(t=>l(t,e))??false};const{min:u,max:d}=e;const f=(e,t,r)=>{let a=[...s??[]];if(c(e)){if(s?.length===u){// Min value reached, do nothing
return}if(n&&s?.length===1){// Required value already selected do nothing
return}a=s?.filter(t=>!l(t,e))}else{if(s?.length===d){// Max value reached, reset the selection to date
a=[e]}else{// Add the date to the selection
a=[...a,e]}}if(!i){o(a)}i?.(a,e,t,r);return a};return{selected:s,select:f,isSelected:c}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/addToRange.js
/**
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
 */function dm(e,t,r=0,n=0,i=false,a=cW){const{from:o,to:s}=t||{};const{isSameDay:l,isAfter:c,isBefore:u}=a;let d;if(!o&&!s){// the range is empty, add the date
d={from:e,to:r>0?undefined:e}}else if(o&&!s){// adding date to an incomplete range
if(l(o,e)){// adding a date equal to the start of the range
if(r===0){d={from:o,to:e}}else if(i){d={from:o,to:undefined}}else{d=undefined}}else if(u(e,o)){// adding a date before the start of the range
d={from:e,to:o}}else{// adding a date after the start of the range
d={from:o,to:e}}}else if(o&&s){// adding date to a complete range
if(l(o,e)&&l(s,e)){// adding a date that is equal to both start and end of the range
if(i){d={from:o,to:s}}else{d=undefined}}else if(l(o,e)){// adding a date equal to the the start of the range
d={from:o,to:r>0?undefined:e}}else if(l(s,e)){// adding a dare equal to the end of the range
d={from:e,to:r>0?undefined:e}}else if(u(e,o)){// adding a date before the start of the range
d={from:e,to:s}}else if(c(e,o)){// adding a date after the start of the range
d={from:o,to:e}}else if(c(e,s)){// adding a date after the end of the range
d={from:o,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(d?.from&&d?.to){const t=a.differenceInCalendarDays(d.to,d.from);if(n>0&&t>n){d={from:e,to:undefined}}else if(r>1&&t<r){d={from:e,to:undefined}}}return d};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
/**
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
 */function dg(e,t,r=cW){const n=!Array.isArray(t)?[t]:t;let i=e.from;const a=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const o=Math.min(a,6);for(let e=0;e<=o;e++){if(n.includes(i.getDay())){return true}i=r.addDays(i,1)}return false};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function db(e,t,r=cW){return cz(e,t.from,false,r)||cz(e,t.to,false,r)||cz(t,e.from,false,r)||cz(t,e.to,false,r)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function dy(e,t,r=cW){const n=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const i=n.filter(e=>typeof e!=="function");const a=i.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return cz(e,t,false,r)}if(cZ(t,r)){return t.some(t=>cz(e,t,false,r))}if(cG(t)){if(t.from&&t.to){return db(e,{from:t.from,to:t.to},r)}return false}if(c$(t)){return dg(e,t.dayOfWeek,r)}if(cV(t)){const n=r.isAfter(t.before,t.after);if(n){return db(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return cX(e.from,t,r)||cX(e.to,t,r)}if(cq(t)||cQ(t)){return cX(e.from,t,r)||cX(e.to,t,r)}return false});if(a){return true}const o=n.filter(e=>typeof e==="function");if(o.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(o.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useRange.js
/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function d_(e,t){const{disabled:r,excludeDisabled:n,selected:i,required:a,onSelect:o}=e;const[s,l]=ds(i,o?i:undefined);const c=!o?s:i;const u=e=>c&&cz(c,e,false,t);const d=(i,s,u)=>{const{min:d,max:f}=e;const p=i?dm(i,c,d,f,a,t):undefined;if(n&&r&&p?.from&&p.to){if(dy({from:p.from,to:p.to},r,t)){// if a disabled days is found, the range is reset
p.from=i;p.to=undefined}}if(!o){l(p)}o?.(p,i,s,u);return p};return{selected:c,select:d,isSelected:u}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/selection/useSingle.js
/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function dw(e,t){const{selected:r,required:n,onSelect:i}=e;const[a,o]=ds(r,i?r:undefined);const s=!i?a:r;const{isSameDay:l}=t;const c=e=>{return s?l(s,e):false};const u=(e,t,r)=>{let a=e;if(!n&&s&&s&&l(e,s)){// If the date is the same, clear the selection.
a=undefined}if(!i){o(a)}if(n){i?.(a,e,t,r)}else{i?.(a,e,t,r)}return a};return{selected:s,select:u,isSelected:c}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/useSelection.js
/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function dx(e,t){const r=dw(e,t);const n=dh(e,t);const i=d_(e,t);switch(e.mode){case"single":return r;case"multiple":return n;case"range":return i;default:return undefined}};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/toTimeZone.js
/**
 * Convert a {@link Date} or {@link TZDate} instance to the given time zone.
 * Reuses the same instance when it is already a {@link TZDate} using the target
 * time zone to avoid extra allocations.
 */function dk(e,t){if(e instanceof lK&&e.timeZone===t){return e}return new lK(e,t)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/utils/convertMatchersToTimeZone.js
function dA(e,t){if(typeof e==="boolean"||typeof e==="function"){return e}if(e instanceof Date){return dk(e,t)}if(Array.isArray(e)){return e.map(e=>e instanceof Date?dk(e,t):e)}if(cG(e)){return{...e,from:e.from?dk(e.from,t):e.from,to:e.to?dk(e.to,t):e.to}}if(cV(e)){return{before:dk(e.before,t),after:dk(e.after,t)}}if(cq(e)){return{after:dk(e.after,t)}}if(cQ(e)){return{before:dk(e.before,t)}}return e}/**
 * Convert any {@link Matcher} or array of matchers to the specified time zone.
 *
 * @param matchers - The matcher or matchers to convert.
 * @param timeZone - The target IANA time zone.
 * @returns The converted matcher(s).
 * @group Utilities
 */function dY(e,t){if(!e){return e}if(Array.isArray(e)){return e.map(e=>dA(e,t))}return dA(e,t)};// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/dist/esm/DayPicker.js
/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function dI(e){let t=e;const r=t.timeZone;if(r){t={...e,timeZone:r};if(t.today){t.today=dk(t.today,r)}if(t.month){t.month=dk(t.month,r)}if(t.defaultMonth){t.defaultMonth=dk(t.defaultMonth,r)}if(t.startMonth){t.startMonth=dk(t.startMonth,r)}if(t.endMonth){t.endMonth=dk(t.endMonth,r)}if(t.mode==="single"&&t.selected){t.selected=dk(t.selected,r)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>dk(e,r))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?dk(t.selected.from,r):t.selected.from,to:t.selected.to?dk(t.selected.to,r):t.selected.to}}if(t.disabled!==undefined){t.disabled=dY(t.disabled,r)}if(t.hidden!==undefined){t.hidden=dY(t.hidden,r)}if(t.modifiers){const e={};Object.keys(t.modifiers).forEach(n=>{e[n]=dY(t.modifiers?.[n],r)});t.modifiers=e}}const{components:n,formatters:i,labels:o,dateLib:s,locale:l,classNames:c}=(0,h.useMemo)(()=>{const e={...lD/* .enUS */.c,...t.locale};const r=new cN({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:u_(t.components),formatters:uC(t.formatters),labels:{...a,...t.labels},locale:e,classNames:{...ux(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);if(!t.today){t={...t,today:s.today()}}const{captionLayout:u,mode:d,navLayout:f,numberOfMonths:p=1,onDayBlur:v,onDayClick:m,onDayFocus:g,onDayKeyDown:b,onDayMouseEnter:y,onDayMouseLeave:_,onNextClick:w,onPrevClick:x,showWeekNumber:k,styles:A}=t;const{formatCaption:Y,formatDay:I,formatMonthDropdown:T,formatWeekNumber:D,formatWeekNumberHeader:M,formatWeekdayName:O,formatYearDropdown:E}=i;const C=dl(t,s);const{days:H,months:S,navStart:F,navEnd:L,previousMonth:N,nextMonth:W,goToMonth:P}=C;const j=c0(H,t,F,L,s);const{isSelected:K,select:R,selected:B}=dx(t,s)??{};const{blur:z,focused:U,isFocusTarget:V,moveFocus:G,setFocused:q}=dv(t,C,j,K??(()=>false),s);const{labelDayButton:Q,labelGridcell:$,labelGrid:Z,labelMonthDropdown:X,labelNav:J,labelPrevious:ee,labelNext:et,labelWeekday:er,labelWeekNumber:en,labelWeekNumberHeader:ei,labelYearDropdown:ea}=o;const eo=(0,h.useMemo)(()=>uF(s,t.ISOWeek,t.broadcastCalendar,t.today),[s,t.ISOWeek,t.broadcastCalendar,t.today]);const es=d!==undefined||m!==undefined;const el=(0,h.useCallback)(()=>{if(!N)return;P(N);x?.(N)},[N,P,x]);const ec=(0,h.useCallback)(()=>{if(!W)return;P(W);w?.(W)},[P,W,w]);const eu=(0,h.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();q(e);if(t.disabled){return}R?.(e.date,t,r);m?.(e.date,t,r)},[R,m,q]);const ed=(0,h.useCallback)((e,t)=>r=>{q(e);g?.(e.date,t,r)},[g,q]);const ef=(0,h.useCallback)((e,t)=>r=>{z();v?.(e.date,t,r)},[z,v]);const ep=(0,h.useCallback)((e,r)=>n=>{const i={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(i[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=i[n.key];G(e,t)}b?.(e.date,r,n)},[G,b,t.dir]);const ev=(0,h.useCallback)((e,t)=>r=>{y?.(e.date,t,r)},[y]);const eh=(0,h.useCallback)((e,t)=>r=>{_?.(e.date,t,r)},[_]);const em=(0,h.useCallback)(e=>t=>{const r=Number(t.target.value);const n=s.setMonth(s.startOfMonth(e),r);P(n)},[s,P]);const eg=(0,h.useCallback)(e=>t=>{const r=Number(t.target.value);const n=s.setYear(s.startOfMonth(e),r);P(n)},[s,P]);const{className:eb,style:ey}=(0,h.useMemo)(()=>({className:[c[cj.Root],t.className].filter(Boolean).join(" "),style:{...A?.[cj.Root],...t.style}}),[c,t.className,t.style,A]);const e_=uw(t);const ew=(0,h.useRef)(null);u6(ew,Boolean(t.animate),{classNames:c,months:S,focused:U,dateLib:s});const ex={dayPickerProps:t,selected:B,select:R,isSelected:K,months:S,nextMonth:W,previousMonth:N,goToMonth:P,getModifiers:j,components:n,classNames:c,styles:A,labels:o,formatters:i};return h.createElement(ui.Provider,{value:ex},h.createElement(n.Root,{rootRef:t.animate?ew:undefined,className:eb,style:ey,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...e_},h.createElement(n.Months,{className:c[cj.Months],style:A?.[cj.Months]},!t.hideNavigation&&!f&&h.createElement(n.Nav,{"data-animated-nav":t.animate?"true":undefined,className:c[cj.Nav],style:A?.[cj.Nav],"aria-label":J(),onPreviousClick:el,onNextClick:ec,previousMonth:N,nextMonth:W}),S.map((e,r)=>{return h.createElement(n.Month,{"data-animated-month":t.animate?"true":undefined,className:c[cj.Month],style:A?.[cj.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:r,displayIndex:r,calendarMonth:e},f==="around"&&!t.hideNavigation&&r===0&&h.createElement(n.PreviousMonthButton,{type:"button",className:c[cj.PreviousMonthButton],tabIndex:N?undefined:-1,"aria-disabled":N?undefined:true,"aria-label":ee(N),onClick:el,"data-animated-button":t.animate?"true":undefined},h.createElement(n.Chevron,{disabled:N?undefined:true,className:c[cj.Chevron],orientation:t.dir==="rtl"?"right":"left"})),h.createElement(n.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:c[cj.MonthCaption],style:A?.[cj.MonthCaption],calendarMonth:e,displayIndex:r},u?.startsWith("dropdown")?h.createElement(n.DropdownNav,{className:c[cj.Dropdowns],style:A?.[cj.Dropdowns]},(()=>{const r=u==="dropdown"||u==="dropdown-months"?h.createElement(n.MonthsDropdown,{key:"month",className:c[cj.MonthsDropdown],"aria-label":X(),classNames:c,components:n,disabled:Boolean(t.disableNavigation),onChange:em(e.date),options:uH(e.date,F,L,i,s),style:A?.[cj.Dropdown],value:s.getMonth(e.date)}):h.createElement("span",{key:"month"},T(e.date,s));const a=u==="dropdown"||u==="dropdown-years"?h.createElement(n.YearsDropdown,{key:"year",className:c[cj.YearsDropdown],"aria-label":ea(s.options),classNames:c,components:n,disabled:Boolean(t.disableNavigation),onChange:eg(e.date),options:uL(F,L,i,s,Boolean(t.reverseYears)),style:A?.[cj.Dropdown],value:s.getYear(e.date)}):h.createElement("span",{key:"year"},E(e.date,s));const o=s.getMonthYearOrder()==="year-first"?[a,r]:[r,a];return o})(),h.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},Y(e.date,s.options,s))):h.createElement(n.CaptionLabel,{className:c[cj.CaptionLabel],role:"status","aria-live":"polite"},Y(e.date,s.options,s))),f==="around"&&!t.hideNavigation&&r===p-1&&h.createElement(n.NextMonthButton,{type:"button",className:c[cj.NextMonthButton],tabIndex:W?undefined:-1,"aria-disabled":W?undefined:true,"aria-label":et(W),onClick:ec,"data-animated-button":t.animate?"true":undefined},h.createElement(n.Chevron,{disabled:W?undefined:true,className:c[cj.Chevron],orientation:t.dir==="rtl"?"left":"right"})),r===p-1&&f==="after"&&!t.hideNavigation&&h.createElement(n.Nav,{"data-animated-nav":t.animate?"true":undefined,className:c[cj.Nav],style:A?.[cj.Nav],"aria-label":J(),onPreviousClick:el,onNextClick:ec,previousMonth:N,nextMonth:W}),h.createElement(n.MonthGrid,{role:"grid","aria-multiselectable":d==="multiple"||d==="range","aria-label":Z(e.date,s.options,s)||undefined,className:c[cj.MonthGrid],style:A?.[cj.MonthGrid]},!t.hideWeekdays&&h.createElement(n.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:c[cj.Weekdays],style:A?.[cj.Weekdays]},k&&h.createElement(n.WeekNumberHeader,{"aria-label":ei(s.options),className:c[cj.WeekNumberHeader],style:A?.[cj.WeekNumberHeader],scope:"col"},M()),eo.map(e=>h.createElement(n.Weekday,{"aria-label":er(e,s.options,s),className:c[cj.Weekday],key:String(e),style:A?.[cj.Weekday],scope:"col"},O(e,s.options,s)))),h.createElement(n.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:c[cj.Weeks],style:A?.[cj.Weeks]},e.weeks.map(e=>{return h.createElement(n.Week,{className:c[cj.Week],key:e.weekNumber,style:A?.[cj.Week],week:e},k&&h.createElement(n.WeekNumber,{week:e,style:A?.[cj.WeekNumber],"aria-label":en(e.weekNumber,{locale:l}),className:c[cj.WeekNumber],scope:"row",role:"rowheader"},D(e.weekNumber,s)),e.days.map(e=>{const{date:r}=e;const i=j(e);i[cK.focused]=!i.hidden&&Boolean(U?.isEqualTo(e));i[cR.selected]=K?.(r)||i.selected;if(cG(B)){// add range modifiers
const{from:e,to:t}=B;i[cR.range_start]=Boolean(e&&t&&s.isSameDay(r,e));i[cR.range_end]=Boolean(e&&t&&s.isSameDay(r,t));i[cR.range_middle]=cz(B,r,true,s)}const a=uS(i,A,t.modifiersStyles);const o=c1(i,c,t.modifiersClassNames);const l=!es&&!i.hidden?$(r,i,s.options,s):undefined;return h.createElement(n.Day,{key:`${e.isoDate}_${e.displayMonthId}`,day:e,modifiers:i,className:o.join(" "),style:a,role:"gridcell","aria-selected":i.selected||undefined,"aria-label":l,"data-day":e.isoDate,"data-month":e.outside?e.dateMonthId:undefined,"data-selected":i.selected||undefined,"data-disabled":i.disabled||undefined,"data-hidden":i.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":i.focused||undefined,"data-today":i.today||undefined},!i.hidden&&es?h.createElement(n.DayButton,{className:c[cj.DayButton],style:A?.[cj.DayButton],type:"button",day:e,modifiers:i,disabled:!i.focused&&i.disabled||undefined,"aria-disabled":i.focused&&i.disabled||undefined,tabIndex:V(e)?0:-1,"aria-label":Q(r,i,s.options,s),onClick:eu(e,i),onBlur:ef(e,i),onFocus:ed(e,i),onKeyDown:ep(e,i),onMouseEnter:ev(e,i),onMouseLeave:eh(e,i)},I(r,s.options,s)):!i.hidden&&I(e.date,s.options,s))}))}))))})),t.footer&&h.createElement(n.Footer,{className:c[cj.Footer],style:A?.[cj.Footer],role:"status","aria-live":"polite"},t.footer)))};// CONCATENATED MODULE: ./assets/src/js/v3/shared/hooks/usePrefersReducedMotion.ts
var dT="data-tutor-motion";var dD=()=>{if(typeof document==="undefined"){return null}return document.documentElement.getAttribute(dT)};var dM=()=>{if(typeof window==="undefined"||!window.matchMedia){return false}return window.matchMedia("(prefers-reduced-motion: reduce)").matches};var dO=()=>{var e=dD();// Explicit override always wins.
if(e==="reduce")return true;// 'auto' (or unset) defers to the OS/browser setting.
return dM()};/**
 * Resolves whether motion should be reduced, honoring:
 * - data-tutor-motion="reduce" on <html>  -> always reduce
 * - data-tutor-motion="auto" (or absent)  -> defer to prefers-reduced-motion
 */var dE=()=>{var[e,t]=(0,h.useState)(dO);(0,h.useEffect)(()=>{if(typeof window==="undefined"||!window.matchMedia){return}var e=window.matchMedia("(prefers-reduced-motion: reduce)");var r=()=>t(dO());r();e.addEventListener("change",r);// In case data-tutor-motion is toggled at runtime (e.g. a settings panel)
var n=new MutationObserver(r);n.observe(document.documentElement,{attributes:true,attributeFilter:[dT]});return()=>{e.removeEventListener("change",r);n.disconnect()}},[]);return e};// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.103.0_esbuild@0.27.0_postcss@8.5.6_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var dC=r(33392);var dH=/*#__PURE__*/r.n(dC);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.103.0_esbuild@0.27.0_postcss@8.5.6_/node_modules/style-loader/dist/runtime/styleDomAPI.js
var dS=r(66017);var dF=/*#__PURE__*/r.n(dS);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.103.0_esbuild@0.27.0_postcss@8.5.6_/node_modules/style-loader/dist/runtime/insertBySelector.js
var dL=r(26011);var dN=/*#__PURE__*/r.n(dL);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.103.0_esbuild@0.27.0_postcss@8.5.6_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var dW=r(33936);var dP=/*#__PURE__*/r.n(dW);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.103.0_esbuild@0.27.0_postcss@8.5.6_/node_modules/style-loader/dist/runtime/insertStyleElement.js
var dj=r(50188);var dK=/*#__PURE__*/r.n(dj);// EXTERNAL MODULE: ./node_modules/.pnpm/style-loader@4.0.0_webpack@5.103.0_esbuild@0.27.0_postcss@8.5.6_/node_modules/style-loader/dist/runtime/styleTagTransform.js
var dR=r(16825);var dB=/*#__PURE__*/r.n(dR);// EXTERNAL MODULE: ./node_modules/.pnpm/css-loader@7.1.2_@rspack+core@1.6.5_@swc+helpers@0.5.17__webpack@5.103.0_esbuild@0.27.0_postcss@8.5.6_/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/src/style.css
var dz=r(44996);// CONCATENATED MODULE: ./node_modules/.pnpm/react-day-picker@9.11.3_react@18.3.1/node_modules/react-day-picker/src/style.css
var dU={};dU.styleTagTransform=dB();dU.setAttributes=dP();dU.insert=dN().bind(null,"head");dU.domAPI=dF();dU.insertStyleElement=dK();var dV=dH()(dz/* ["default"] */.A,dU);/* export default */const dG=dz/* ["default"] */.A&&dz/* ["default"].locals */.A.locals?dz/* ["default"].locals */.A.locals:undefined;// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormDateInput.tsx
// Create DayPicker formatters based on WordPress locale
var dq=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var dQ=e=>{if(!e)return undefined;return(0,ln/* .isValid */.f)(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var d$=e=>{var{label:t,field:r,fieldState:n,disabled:i,disabledBefore:a,disabledAfter:s,loading:l,placeholder:c,helpText:f,isClearable:v=true,onChange:m,dateFormat:g=nX/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var b=dE();var _=(0,h.useRef)(null);var[w,x]=(0,h.useState)(false);var k=dQ(r.value);var A=typeof window!=="undefined"&&window.wp&&window.wp.date;var Y=k?A?window.wp.date.format("F j, Y",k):(0,ok/* .format */.GP)(k,g):"";var{triggerRef:I,position:T,popoverRef:D}=ih({isOpen:w,placement:ia.BOTTOM_LEFT});var M=()=>{var e;x(false);(e=_.current)===null||e===void 0?void 0:e.focus()};var O=dQ(a);var E=dQ(s);return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{label:t,field:r,fieldState:n,disabled:i,loading:l,placeholder:c,helpText:f,children:e=>{var{css:t}=e,n=(0,nl._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:dX.wrapper,ref:I,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,d._)((0,u._)({},n),{css:[t,dX.input],title:Y,ref:e=>{r.ref(e);// @ts-ignore
_.current=e},type:"text",value:Y,onClick:e=>{e.stopPropagation();x(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();x(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:dX.icon}),v&&r.value&&/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,p.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:nv/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(im,{isOpen:w,onClickOutside:M,onEscape:M,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:dX.pickerWrapper,style:{left:T.left,top:T.top},ref:D,children:/*#__PURE__*/(0,o/* .jsx */.Y)(dI,{dir:nX/* .isRTL */.V8?"rtl":"ltr",animate:!b,mode:"single",formatters:dq(),disabled:[!!O&&{before:O},!!E&&{after:E}],selected:k,onSelect:e=>{if(e){var t=(0,ok/* .format */.GP)(e,nX/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);M();if(m){m(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:k||new Date,startMonth:O||new Date(new Date().getFullYear()-10,0),endMonth:E||new Date(new Date().getFullYear()+10,11),weekStartsOn:A?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const dZ=d$;var dX={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,s/* .css */.AH)("&[data-input]{padding-left:",c/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;top:50%;left:",c/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.body */.I.body("regular"),";position:absolute;background-color:",c/* .colorTokens.background.white */.I6.background.white,";box-shadow:",c/* .shadow.popover */.r7.popover,";border-radius:",c/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",c/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",c/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",c/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",c/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",c/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",c/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",c/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",c/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",c/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",c/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",c/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",c/* .colorTokens.background.hover */.I6.background.hover,";color:",c/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",c/* .colorTokens.text.white */.I6.text.white,";background-color:",c/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",c/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",c/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",c/* .borderRadius.circle */.Vq.circle,";font-weight:",c/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",c/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",c/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")};// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setMinutes.js
/**
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
 */function dJ(e,t,r){const n=(0,lp/* .toDate */.a)(e,r?.in);n.setMinutes(t);return n}// Fallback for modularized imports:
/* export default */const d0=/* unused pure expression or super */null&&dJ;// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/setHours.js
/**
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
 */function d1(e,t,r){const n=(0,lp/* .toDate */.a)(e,r?.in);n.setHours(t);return n}// Fallback for modularized imports:
/* export default */const d2=/* unused pure expression or super */null&&d1;// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/addMinutes.js
var d6=r(52575);// CONCATENATED MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/eachMinuteOfInterval.js
/**
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
 */function d4(e,t){const{start:r,end:n}=lX(t?.in,e);// Set to the start of the minute
r.setSeconds(0,0);let i=+r>+n;const a=i?+r:+n;let o=i?n:r;let s=t?.step??1;if(!s)return[];if(s<0){s=-s;i=!i}const l=[];while(+o<=a){l.push((0,li/* .constructFrom */.w)(r,o));o=(0,d6/* .addMinutes */.z)(o,s)}return i?l.reverse():l}// Fallback for modularized imports:
/* export default */const d5=/* unused pure expression or super */null&&d4;// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormTimeInput.tsx
var d3=e=>{var{label:t,field:r,fieldState:n,interval:i=30,disabled:a,loading:s,placeholder:l,helpText:c,isClearable:f=true}=e;var[v,m]=(0,h.useState)(false);var g=(0,h.useRef)(null);var b=(0,h.useRef)(null);var _=(0,h.useMemo)(()=>{var e=dJ(d1(new Date,0),0);var t=dJ(d1(new Date,23),59);var r=d4({start:e,end:t},{step:i});return r.map(e=>(0,ok/* .format */.GP)(e,nX/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[i]);var{activeIndex:w,setActiveIndex:x}=nZ({options:_.map(e=>({label:e,value:e})),isOpen:v,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);m(false)},onClose:()=>m(false)});(0,h.useEffect)(()=>{if(v&&w>=0&&b.current){b.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[v,w]);return/*#__PURE__*/(0,o/* .jsx */.Y)(nC,{label:t,field:r,fieldState:n,disabled:a,loading:s,placeholder:l,helpText:c,children:e=>{var{css:t}=e,n=(0,nl._)(e,["css"]);var i;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:d9.wrapper,ref:g,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,d._)((0,u._)({},n),{ref:r.ref,css:[t,d9.input],type:"text",onClick:e=>{e.stopPropagation();m(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();m(e=>!e)}if(e.key==="Tab"){m(false)}},value:(i=r.value)!==null&&i!==void 0?i:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"clock",width:32,height:32,style:d9.icon}),f&&r.value&&/*#__PURE__*/(0,o/* .jsx */.Y)(ns/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,p.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:nv/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(iY,{triggerRef:g,isOpen:v,closePopover:()=>m(false),animationType:r2/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,o/* .jsx */.Y)("ul",{css:d9.list,children:_.map((e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("li",{css:d9.listItem,ref:w===t?b:null,"data-active":w===t,children:/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:d9.itemButton,onClick:()=>{r.onChange(e);m(false)},onMouseOver:()=>x(t),onMouseLeave:()=>t!==w&&x(-1),onFocus:()=>x(t),children:e})},t)})})})]})}})};/* export default */const d8=d3;var d9={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,s/* .css */.AH)("&[data-input]{padding-left:",c/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;top:50%;left:",c/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",c/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,s/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",nv/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",c/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",c/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,s/* .css */.AH)(nv/* .styleUtils.resetButton */.x.resetButton,";",g/* .typography.body */.I.body(),";margin:",c/* .spacing["4"] */.YK["4"]," ",c/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",c/* .colorTokens.text.primary */.I6.text.primary,";}")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/coupon/CouponValidity.tsx
function d7(){var e=(0,f/* .useFormContext */.xW)();var t=e.watch("is_end_enabled");var r=e.watch("start_date");var n=e.watch("start_time");var i=!!r&&!!n;return/*#__PURE__*/(0,o/* .jsxs */.FD)(nn,{bordered:true,css:ft.discountWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:ft.couponWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(ni,{children:(0,p.__)("Validity","tutor")})}),/*#__PURE__*/(0,o/* .jsxs */.FD)(nn,{css:[nv/* .styleUtils.boxReset */.x.boxReset,ft.validityWrapper],children:[/*#__PURE__*/(0,o/* .jsx */.Y)(na,{css:ft.dateTimeTitle,children:(0,p.__)("Starts from","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ft.dateTimeWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"start_date",control:e.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(dZ,(0,d._)((0,u._)({},e),{placeholder:"2030-10-24"}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"start_time",control:e.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(d8,(0,d._)((0,u._)({},e),{placeholder:"12:30 PM"}))})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{control:e.control,name:"is_end_enabled",render:t=>/*#__PURE__*/(0,o/* .jsx */.Y)(s9,(0,d._)((0,u._)({},t),{label:(0,p.__)("Set end date","tutor"),description:(0,p.__)("Leaving the end date blank will make the coupon valid indefinitely.","tutor"),onChange:t=>{if(!t){e.setValue("end_date","");e.setValue("end_time","")}},disabled:!i,labelCss:ft.setEndDateLabel}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:i&&t,children:/*#__PURE__*/(0,o/* .jsxs */.FD)(o/* .Fragment */.FK,{children:[/*#__PURE__*/(0,o/* .jsx */.Y)(na,{css:ft.dateTimeTitle,children:(0,p.__)("Ends in","tutor")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:ft.dateTimeWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"end_date",control:e.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(dZ,(0,d._)((0,u._)({},e),{placeholder:"2030-10-24",disabledBefore:r}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"end_time",control:e.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(d8,(0,d._)((0,u._)({},e),{placeholder:"12:30 PM"}))})]})]})})]})]})}/* export default */const fe=d7;var ft={discountWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["12"] */.YK["12"],";"),couponWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["4"] */.YK["4"],";"),validityWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["12"] */.YK["12"],";"),dateTimeWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;gap:",c/* .spacing["12"] */.YK["12"],";width:fit-content;"),dateTimeTitle:/*#__PURE__*/(0,s/* .css */.AH)("color:",c/* .colorTokens.text.title */.I6.text.title,";"),setEndDateLabel:/*#__PURE__*/(0,s/* .css */.AH)(g/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.title */.I6.text.title,";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/coupon/PurchaseRequirements.tsx
function fr(){var e=(0,f/* .useFormContext */.xW)();var{tutor_currency:t}=nc/* .tutorConfig */.P;var r;// translators: %s is the currency symbol, e.g. $, €, ¥
var n=(0,p.sprintf)((0,p.__)("Minimum purchase amount (%s)","tutor"),(r=t===null||t===void 0?void 0:t.symbol)!==null&&r!==void 0?r:"$");var i=[{label:(0,p.__)("No minimum requirements","tutor"),value:"no_minimum"},{label:n,value:"minimum_purchase"},{label:(0,p.__)("Minimum quantity of courses","tutor"),value:"minimum_quantity"}];return/*#__PURE__*/(0,o/* .jsxs */.FD)(nn,{bordered:true,css:fi.discountWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:fi.couponWrapper,children:/*#__PURE__*/(0,o/* .jsx */.Y)(ni,{children:(0,p.__)("Minimum Purchase Requirements","tutor")})}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"purchase_requirement",control:e.control,render:r=>/*#__PURE__*/(0,o/* .jsx */.Y)(s1,(0,d._)((0,u._)({},r),{options:i,wrapperCss:fi.radioGroupWrapper,onSelectRender:r=>{return/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:r.value==="minimum_purchase"||r.value==="minimum_quantity",children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:fi.requirementInput,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:r.value==="minimum_purchase",children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"purchase_requirement_value",control:e.control,rules:i3(),render:e=>{var r;return/*#__PURE__*/(0,o/* .jsx */.Y)(nQ,(0,d._)((0,u._)({},e),{type:"number",placeholder:(0,p.__)("0.00","tutor"),content:(r=t===null||t===void 0?void 0:t.symbol)!==null&&r!==void 0?r:"$",contentCss:nv/* .styleUtils.inputCurrencyStyle */.x.inputCurrencyStyle}))}})}),/*#__PURE__*/(0,o/* .jsx */.Y)(b/* ["default"] */.A,{when:r.value==="minimum_quantity",children:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Controller */.xI,{name:"purchase_requirement_value",control:e.control,rules:i3(),render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(sG,(0,d._)((0,u._)({},e),{type:"number",placeholder:(0,p.__)("0","tutor")}))})})]})})}}))})]})}/* export default */const fn=fr;var fi={discountWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["12"] */.YK["12"],";"),couponWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["4"] */.YK["4"],";"),requirementInput:/*#__PURE__*/(0,s/* .css */.AH)("width:30%;margin-left:",c/* .spacing["28"] */.YK["28"],";margin-top:",c/* .spacing["8"] */.YK["8"],";"),radioGroupWrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;flex-direction:column;gap:",c/* .spacing["8"] */.YK["8"],";")};// EXTERNAL MODULE: ./assets/src/js/v3/entries/coupon-details/components/layout/Topbar.tsx + 1 modules
var fa=r(59073);// CONCATENATED MODULE: ./assets/src/js/v3/entries/coupon-details/components/layout/MainContent.tsx
function fo(){return/*#__PURE__*/(0,o/* .jsx */.Y)(l/* ["default"] */.A,{children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:fs.content,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:fs.left,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(s5,{}),/*#__PURE__*/(0,o/* .jsx */.Y)(o_,{}),/*#__PURE__*/(0,o/* .jsx */.Y)(lt,{}),/*#__PURE__*/(0,o/* .jsx */.Y)(fn,{}),/*#__PURE__*/(0,o/* .jsx */.Y)(fe,{})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,o/* .jsx */.Y)(lI,{})})]})})}var fs={content:/*#__PURE__*/(0,s/* .css */.AH)("min-height:calc(100vh - ",fa/* .TOPBAR_HEIGHT */.H,"px);width:100%;display:grid;grid-template-columns:1fr 342px;gap:",c/* .spacing["36"] */.YK["36"],";margin-top:",c/* .spacing["32"] */.YK["32"],";padding-inline:",c/* .spacing["8"] */.YK["8"],";",c/* .Breakpoint.smallTablet */.EA.smallTablet,"{grid-template-columns:1fr 280px;}",c/* .Breakpoint.mobile */.EA.mobile,"{grid-template-columns:1fr;}"),left:/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;flex-direction:column;gap:",c/* .spacing["16"] */.YK["16"],";")}}}]);