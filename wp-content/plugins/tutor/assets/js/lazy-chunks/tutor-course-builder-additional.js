"use strict";(self["webpackChunktutor"]=self["webpackChunktutor"]||[]).push([["132"],{44996:function(e,t,r){r.d(t,{A:()=>d});/* import */var n=r(7656);/* import */var a=/*#__PURE__*/r.n(n);/* import */var i=r(38761);/* import */var o=/*#__PURE__*/r.n(i);// Imports
var s=o()(a());// Module
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
/* export default */const d=s},38761:function(e){/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/e.exports=function(e){var t=[];// return the list of modules as css string
t.toString=function t(){return this.map(function(t){var r="";var n=typeof t[5]!=="undefined";if(t[4]){r+="@supports (".concat(t[4],") {")}if(t[2]){r+="@media ".concat(t[2]," {")}if(n){r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")}r+=e(t);if(n){r+="}"}if(t[2]){r+="}"}if(t[4]){r+="}"}return r}).join("")};// import a list of modules into the list
t.i=function e(e,r,n,a,i){if(typeof e==="string"){e=[[null,e,undefined]]}var o={};if(n){for(var s=0;s<this.length;s++){var d=this[s][0];if(d!=null){o[d]=true}}}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);if(n&&o[c[0]]){continue}if(typeof i!=="undefined"){if(typeof c[5]==="undefined"){c[5]=i}else{c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}");c[5]=i}}if(r){if(!c[2]){c[2]=r}else{c[1]="@media ".concat(c[2]," {").concat(c[1],"}");c[2]=r}}if(a){if(!c[4]){c[4]="".concat(a)}else{c[1]="@supports (".concat(c[4],") {").concat(c[1],"}");c[4]=a}}t.push(c)}};return t}},7656:function(e){e.exports=function(e){return e[1]}},55042:function(e,t,r){t.__esModule=true;t["default"]=h;var n=o(r(65734));var a=o(r(19340));var i=o(r(32108));function o(e){return e&&e.__esModule?e:{"default":e}}var s=/^#[a-fA-F0-9]{6}$/;var d=/^#[a-fA-F0-9]{8}$/;var l=/^#[a-fA-F0-9]{3}$/;var c=/^#[a-fA-F0-9]{4}$/;var u=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;var v=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;var p=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;var f=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */function h(e){if(typeof e!=="string"){throw new i["default"](3)}var t=(0,a["default"])(e);if(t.match(s)){return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)}}if(t.match(d)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(l)){return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)}}if(t.match(c)){var o=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:o}}var h=u.exec(t);if(h){return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var m=v.exec(t.substring(0,50));if(m){return{red:parseInt(""+m[1],10),green:parseInt(""+m[2],10),blue:parseInt(""+m[3],10),alpha:parseFloat(""+m[4])>1?parseFloat(""+m[4])/100:parseFloat(""+m[4])}}var g=p.exec(t);if(g){var b=parseInt(""+g[1],10);var _=parseInt(""+g[2],10)/100;var y=parseInt(""+g[3],10)/100;var w="rgb("+(0,n["default"])(b,_,y)+")";var x=u.exec(w);if(!x){throw new i["default"](4,t,w)}return{red:parseInt(""+x[1],10),green:parseInt(""+x[2],10),blue:parseInt(""+x[3],10)}}var A=f.exec(t.substring(0,50));if(A){var Y=parseInt(""+A[1],10);var k=parseInt(""+A[2],10)/100;var I=parseInt(""+A[3],10)/100;var D="rgb("+(0,n["default"])(Y,k,I)+")";var C=u.exec(D);if(!C){throw new i["default"](4,t,D)}return{red:parseInt(""+C[1],10),green:parseInt(""+C[2],10),blue:parseInt(""+C[3],10),alpha:parseFloat(""+A[4])>1?parseFloat(""+A[4])/100:parseFloat(""+A[4])}}throw new i["default"](5)}e.exports=t["default"]},63292:function(e,t,r){t.__esModule=true;t["default"]=s;var n=o(r(155));var a=o(r(92590));var i=o(r(32108));function o(e){return e&&e.__esModule?e:{"default":e}}/**
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
 */function s(e,t,r){if(typeof e==="number"&&typeof t==="number"&&typeof r==="number"){return(0,n["default"])("#"+(0,a["default"])(e)+(0,a["default"])(t)+(0,a["default"])(r))}else if(typeof e==="object"&&t===undefined&&r===undefined){return(0,n["default"])("#"+(0,a["default"])(e.red)+(0,a["default"])(e.green)+(0,a["default"])(e.blue))}throw new i["default"](6)}e.exports=t["default"]},18853:function(e,t,r){t.__esModule=true;t["default"]=s;var n=o(r(55042));var a=o(r(63292));var i=o(r(32108));function o(e){return e&&e.__esModule?e:{"default":e}}/**
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
 */function s(e,t,r,o){if(typeof e==="string"&&typeof t==="number"){var s=(0,n["default"])(e);return"rgba("+s.red+","+s.green+","+s.blue+","+t+")"}else if(typeof e==="number"&&typeof t==="number"&&typeof r==="number"&&typeof o==="number"){return o>=1?(0,a["default"])(e,t,r):"rgba("+e+","+t+","+r+","+o+")"}else if(typeof e==="object"&&t===undefined&&r===undefined&&o===undefined){return e.alpha>=1?(0,a["default"])(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new i["default"](7)}e.exports=t["default"]},32108:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function n(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;d(e,t)}function a(e){var t=typeof Map==="function"?new Map:undefined;a=function e(e){if(e===null||!s(e))return e;if(typeof e!=="function"){throw new TypeError("Super expression must either be null or a function")}if(typeof t!=="undefined"){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return i(e,arguments,l(this).constructor)}r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:false,writable:true,configurable:true}});return d(r,e)};return a(e)}function i(e,t,r){if(o())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,t);var a=new(e.bind.apply(e,n));return r&&d(a,r.prototype),a}function o(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){}return(o=function t(){return!!e})()}function s(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch(t){return typeof e==="function"}}function d(e,t){d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function e(e,t){e.__proto__=t;return e};return d(e,t)}function l(e){l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function e(e){return e.__proto__||Object.getPrototypeOf(e)};return l(e)}// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js
/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */var c=/* unused pure expression or super */null&&{"1":"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n","2":"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n","3":"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n","4":"Couldn't generate valid rgb string from %s, it returned %s.\n\n","5":"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n","6":"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n","7":"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n","8":"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n","9":"Please provide a number of steps to the modularScale helper.\n\n","10":"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n","11":'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',"12":'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',"13":'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',"14":'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',"15":'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',"16":"You must provide a template to this method.\n\n","17":"You passed an unsupported selector state to this method.\n\n","18":"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n","19":"fromSize and toSize must be provided as stringified numbers with the same units.\n\n","20":"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n","21":"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n","22":"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n","23":"fontFace expects a name of a font-family.\n\n","24":"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n","25":"fontFace expects localFonts to be an array.\n\n","26":"fontFace expects fileFormats to be an array.\n\n","27":"radialGradient requries at least 2 color-stops to properly render.\n\n","28":"Please supply a filename to retinaImage() as the first argument.\n\n","29":"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n","30":"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n","31":"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n","32":"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n","33":"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n","34":"borderRadius expects a radius value as a string or number as the second argument.\n\n","35":'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',"36":"Property must be a string value.\n\n","37":"Syntax Error at %s.\n\n","38":"Formula contains a function that needs parentheses at %s.\n\n","39":"Formula is missing closing parenthesis at %s.\n\n","40":"Formula has too many closing parentheses at %s.\n\n","41":"All values in a formula must have the same unit or be unitless.\n\n","42":"Please provide a number of steps to the modularScale helper.\n\n","43":"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n","44":"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n","45":"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n","46":"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n","47":"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n","48":"fromSize and toSize must be provided as stringified numbers with the same units.\n\n","49":"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n","50":"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n","51":"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n","52":"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n","53":"fontFace expects localFonts to be an array.\n\n","54":"fontFace expects fileFormats to be an array.\n\n","55":"fontFace expects a name of a font-family.\n\n","56":"linearGradient requries at least 2 color-stops to properly render.\n\n","57":"radialGradient requries at least 2 color-stops to properly render.\n\n","58":"Please supply a filename to retinaImage() as the first argument.\n\n","59":"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n","60":"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n","61":"Property must be a string value.\n\n","62":"borderRadius expects a radius value as a string or number as the second argument.\n\n","63":'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',"64":"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n","65":"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n","66":"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n","67":"You must provide a template to this method.\n\n","68":"You passed an unsupported selector state to this method.\n\n","69":'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',"70":'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',"71":'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',"72":'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',"73":"Please provide a valid CSS variable.\n\n","74":"CSS variable not found and no default was provided.\n\n","75":"important requires a valid style object, got a %s instead.\n\n","76":"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n","77":'remToPx expects a value in "rem" but you provided it in "%s".\n\n',"78":'base must be set in "px" or "%" but you set it in "%s".\n'};/**
 * super basic version of sprintf
 * @private
 */function u(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=t[0];var a=[];var i;for(i=1;i<t.length;i+=1){a.push(t[i])}a.forEach(function(e){n=n.replace(/%[a-z]/,e)});return n}/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */var v=t["default"]=/*#__PURE__*/function(e){n(t,e);function t(t){var n;if(true){n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this}else{var a,i,o}return r(n)}return t}(/*#__PURE__*/a(Error));e.exports=t["default"]},65734:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){return Math.round(e*255)}function n(e,t,n){return r(e)+","+r(t)+","+r(n)}function a(e,t,r,a){if(a===void 0){a=n}if(t===0){// achromatic
return a(r,r,r)}// formulae from https://en.wikipedia.org/wiki/HSL_and_HSV
var i=(e%360+360)%360/60;var o=(1-Math.abs(2*r-1))*t;var s=o*(1-Math.abs(i%2-1));var d=0;var l=0;var c=0;if(i>=0&&i<1){d=o;l=s}else if(i>=1&&i<2){d=s;l=o}else if(i>=2&&i<3){l=o;c=s}else if(i>=3&&i<4){l=s;c=o}else if(i>=4&&i<5){d=s;c=o}else if(i>=5&&i<6){d=o;c=s}var u=r-o/2;var v=d+u;var p=l+u;var f=c+u;return a(v,p,f)}var i=t["default"]=a;e.exports=t["default"]},19340:function(e,t){t.__esModule=true;t["default"]=void 0;var r={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */function n(e){if(typeof e!=="string")return e;var t=e.toLowerCase();return r[t]?"#"+r[t]:e}var a=t["default"]=n;e.exports=t["default"]},92590:function(e,t){t.__esModule=true;t["default"]=void 0;function r(e){var t=e.toString(16);return t.length===1?"0"+t:t}var n=t["default"]=r;e.exports=t["default"]},155:function(e,t){t.__esModule=true;t["default"]=void 0;/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */var r=function e(e){if(e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]){return"#"+e[1]+e[3]+e[5]}return e};var n=t["default"]=r;e.exports=t["default"]},30779:function(e,t,r){/* import */var n=r(33392);/* import */var a=/*#__PURE__*/r.n(n);/* import */var i=r(66017);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(26011);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(33936);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(50188);/* import */var v=/*#__PURE__*/r.n(u);/* import */var p=r(16825);/* import */var f=/*#__PURE__*/r.n(p);/* import */var h=r(44996);var m={};m.styleTagTransform=f();m.setAttributes=c();m.insert=d().bind(null,"head");m.domAPI=o();m.insertStyleElement=v();var g=a()(h/* ["default"] */.A,m);/* unused export default */var b=h/* ["default"] */.A&&h/* ["default"].locals */.A.locals?h/* ["default"].locals */.A.locals:undefined},33392:function(e){var t=[];function r(e){var r=-1;for(var n=0;n<t.length;n++){if(t[n].identifier===e){r=n;break}}return r}function n(e,n){var i={};var o=[];for(var s=0;s<e.length;s++){var d=e[s];var l=n.base?d[0]+n.base:d[0];var c=i[l]||0;var u="".concat(l," ").concat(c);i[l]=c+1;var v=r(u);var p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(v!==-1){t[v].references++;t[v].updater(p)}else{var f=a(p,n);n.byIndex=s;t.splice(s,0,{identifier:u,updater:f,references:1})}o.push(u)}return o}function a(e,t){var r=t.domAPI(t);r.update(e);var n=function t(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer){return}r.update(e=t)}else{r.remove()}};return n}e.exports=function(e,a){a=a||{};e=e||[];var i=n(e,a);return function e(e){e=e||[];for(var o=0;o<i.length;o++){var s=i[o];var d=r(s);t[d].references--}var l=n(e,a);for(var c=0;c<i.length;c++){var u=i[c];var v=r(u);if(t[v].references===0){t[v].updater();t.splice(v,1)}}i=l}}},26011:function(e){var t={};/* istanbul ignore next  */function r(e){if(typeof t[e]==="undefined"){var r=document.querySelector(e);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
r=r.contentDocument.head}catch(e){// istanbul ignore next
r=null}}t[e]=r}return t[e]}/* istanbul ignore next  */function n(e,t){var n=r(e);if(!n){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")}n.appendChild(t)}e.exports=n},50188:function(e){/* istanbul ignore next  */function t(e){var t=document.createElement("style");e.setAttributes(t,e.attributes);e.insert(t,e.options);return t}e.exports=t},33936:function(e,t,r){/* istanbul ignore next  */function n(e){var t=true?r.nc:0;if(t){e.setAttribute("nonce",t)}}e.exports=n},66017:function(e){/* istanbul ignore next  */function t(e,t,r){var n="";if(r.supports){n+="@supports (".concat(r.supports,") {")}if(r.media){n+="@media ".concat(r.media," {")}var a=typeof r.layer!=="undefined";if(a){n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")}n+=r.css;if(a){n+="}"}if(r.media){n+="}"}if(r.supports){n+="}"}var i=r.sourceMap;if(i&&typeof btoa!=="undefined"){n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")}// For old IE
/* istanbul ignore if  */t.styleTagTransform(n,e,t.options)}function r(e){// istanbul ignore if
if(e.parentNode===null){return false}e.parentNode.removeChild(e)}/* istanbul ignore next  */function n(e){if(typeof document==="undefined"){return{update:function e(){},remove:function e(){}}}var n=e.insertStyleElement(e);return{update:function r(r){t(n,e,r)},remove:function e(){r(n)}}}e.exports=n},16825:function(e){/* istanbul ignore next  */function t(e,t){if(t.styleSheet){t.styleSheet.cssText=e}else{while(t.firstChild){t.removeChild(t.firstChild)}t.appendChild(document.createTextNode(e))}}e.exports=t},13190:function(e,t,r){e.exports=r.p+"js/images/3d-d74232c4.png"},22286:function(e,t,r){e.exports=r.p+"js/images/black-and-white-a1d197c0.png"},43623:function(e,t,r){e.exports=r.p+"js/images/concept-ad427b25.png"},71801:function(e,t,r){e.exports=r.p+"js/images/dreamy-72eab497.png"},64613:function(e,t,r){e.exports=r.p+"js/images/filmic-91db8802.png"},36265:function(e,t,r){e.exports=r.p+"js/images/illustration-19074f05.png"},47035:function(e,t,r){e.exports=r.p+"js/images/neon-bfde2ac7.png"},50861:function(e,t,r){e.exports=r.p+"js/images/none-2088b52b.jpg"},92895:function(e,t,r){e.exports=r.p+"js/images/painting-db63dd8a.png"},47719:function(e,t,r){e.exports=r.p+"js/images/photo-7d69e05e.png"},26371:function(e,t,r){e.exports=r.p+"js/images/retro-bcc8eda3.png"},8031:function(e,t,r){e.exports=r.p+"js/images/sketch-319bbedf.png"},8452:function(e,t,r){e.exports=r.p+"js/images/not-found-2x-5f9812df.webp"},27895:function(e,t,r){e.exports=r.p+"js/images/not-found-4fa6c9c0.webp"},67290:function(e,t,r){e.exports=r.p+"js/images/generate-image-2x-7d387dcf.webp"},34837:function(e,t,r){e.exports=r.p+"js/images/generate-image-3e5f50a6.webp"},89041:function(e,t,r){// EXPORTS
r.d(t,{A:()=>/* binding */E});// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
var n=r(41147);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(14206);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var i=r(52639);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/contexts/CourseBuilderSlotContext.tsx
var o=r(79100);// EXTERNAL MODULE: external "React"
var s=r(41594);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_define_property.js
var d=r(38125);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Alert.tsx
var l=r(47918);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/ComponentErrorBoundary.tsx
class c extends s.Component{static getDerivedStateFromError(e){return{hasError:true,error:e}}componentDidCatch(e,t){var r,n;// eslint-disable-next-line no-console
console.error("Error rendering ".concat(this.props.componentName,":"),e,t);(r=(n=this.props).onError)===null||r===void 0?void 0:r.call(n,e,t)}render(){var{children:e,fallback:t,showError:r}=this.props;var{hasError:n,error:a}=this.state;if(n){if(t){return t}return r?/*#__PURE__*/(0,i/* .jsxs */.FD)(l/* ["default"] */.A,{type:"danger",children:["Error rendering ",this.props.componentName,": ",(a===null||a===void 0?void 0:a.message)||(a===null||a===void 0?void 0:a.toString())]}):null}return e}constructor(...e){super(...e),(0,d._)(this,"state",{hasError:false,error:null})}}(0,d._)(c,"defaultProps",{showError:true,componentName:"Component"});/* export default */const u=c;// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/ContentRenderer.tsx
var v=e=>{var{component:t}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(u,{componentName:"content",children:t})};/* export default */const p=v;// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var f=r(78346);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormCheckbox.tsx
var h=r(95377);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormDateInput.tsx
var m=r(26036);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormFileUploader.tsx
var g=r(46062);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormImageInput.tsx
var b=r(75031);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormInput.tsx
var _=r(91224);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormRadioGroup.tsx
var y=r(33552);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormSelectInput.tsx
var w=r(99864);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormSwitch.tsx
var x=r(9694);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormTextareaInput.tsx
var A=r(74054);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormTimeInput.tsx
var Y=r(87797);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormVideoInput.tsx + 2 modules
var k=r(94232);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormWPEditor.tsx
var I=r(15004);// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/FieldRenderer.tsx
var D=e=>{var{name:t,label:r,buttonText:o,helpText:s,infoText:d,placeholder:c,type:v,options:p,defaultValue:D,rules:C,form:M}=e;// eslint-disable-next-line @typescript-eslint/no-explicit-any
var E=e=>{var f=(()=>{switch(v){case"text":return/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"number":return/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"number",label:r,placeholder:c,helpText:s}));case"password":return/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"password",label:r,placeholder:c,helpText:s}));case"textarea":return/*#__PURE__*/(0,i/* .jsx */.Y)(A/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"select":return/*#__PURE__*/(0,i/* .jsx */.Y)(w/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,options:p||[],placeholder:c,helpText:s}));case"radio":return/*#__PURE__*/(0,i/* .jsx */.Y)(y/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,options:p||[]}));case"checkbox":return/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r}));case"switch":return/*#__PURE__*/(0,i/* .jsx */.Y)(x/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,helpText:s}));case"date":return/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"time":return/*#__PURE__*/(0,i/* .jsx */.Y)(Y/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));case"image":return/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s,infoText:d}));case"video":return/*#__PURE__*/(0,i/* .jsx */.Y)(k/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s,infoText:d}));case"uploader":return/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,buttonText:o,helpText:s}));case"WPEditor":return/*#__PURE__*/(0,i/* .jsx */.Y)(I/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:r,placeholder:c,helpText:s}));default:return/*#__PURE__*/(0,i/* .jsxs */.FD)(l/* ["default"] */.A,{type:"danger",children:["Unsupported field type: ",v]})}})();return/*#__PURE__*/(0,i/* .jsx */.Y)(u,{componentName:"field ".concat(t),onError:(e,r)=>{// eslint-disable-next-line no-console
console.warn("Field ".concat(t," failed to render:"),{error:e,errorInfo:r})},children:f})};return/*#__PURE__*/(0,i/* .jsx */.Y)(f/* .Controller */.xI,{name:t,control:M.control,defaultValue:D!==null&&D!==void 0?D:"",rules:C,render:e=>E(e)})};/* export default */const C=D;// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/CourseBuilderSlot.tsx
var M=e=>{var{section:t,namePrefix:r,form:s}=e;var{fields:d,contents:l}=(0,o/* .useCourseBuilderSlot */._)();var c=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=d;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};var u=()=>{var e=t.split(".");// eslint-disable-next-line @typescript-eslint/no-explicit-any
var r=l;for(var n of e){if(!r[n])return[];r=r[n]}return Array.isArray(r)?r:[]};return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[c().map(e=>/*#__PURE__*/(0,i/* .jsx */.Y)(C,(0,a._)((0,n._)({form:s},e),{name:r?"".concat(r).concat(e.name):e.name}),e.name)),u().map((e,t)=>{var{component:r}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)(p,{component:r},t)})]})};/* export default */const E=M},51243:function(e,t,r){r.d(t,{A:()=>U});/* import */var n=r(93640);/* import */var a=r(41147);/* import */var i=r(14206);/* import */var o=r(60599);/* import */var s=r(52639);/* import */var d=r(41594);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(78346);/* import */var u=r(42771);/* import */var v=r(12470);/* import */var p=/*#__PURE__*/r.n(v);/* import */var f=r(1896);/* import */var h=r(25074);/* import */var m=r(56705);/* import */var g=r(95377);/* import */var b=r(26036);/* import */var _=r(91224);/* import */var y=r(99864);/* import */var w=r(74054);/* import */var x=r(87797);/* import */var A=r(74412);/* import */var Y=r(19393);/* import */var k=r(13448);/* import */var I=r(81547);/* import */var D=r(59189);/* import */var C=r(34092);/* import */var M=r(43642);/* import */var E=r(52874);/* import */var T=r(49842);/* import */var S=r(18528);/* import */var O=r(23334);/* import */var H=r(24628);/* import */var N=r(60297);function F(){var e=(0,o._)(["\n      box-shadow: ",";\n    "]);F=function t(){return e};return e}var K=(0,N/* .getCourseId */.p)();var L=e=>{var{onCancel:t,data:r,topicId:o,meetingId:l}=e;var{ref:u,isScrolling:p}=(0,M/* .useIsScrolling */.$)({defaultValue:true});var k=(0,H/* .useGoogleMeetDetailsQuery */.OJ)(l?l:"",o?o:"");var I=r!==null&&r!==void 0?r:k.data;var E,N,F;var L=(0,C/* .useFormWithGlobalError */.p)({defaultValues:{meeting_name:(E=I===null||I===void 0?void 0:I.post_title)!==null&&E!==void 0?E:"",meeting_summary:(N=I===null||I===void 0?void 0:I.post_content)!==null&&N!==void 0?N:"",meeting_start_date:(I===null||I===void 0?void 0:I.meeting_data.start_datetime)?(0,f/* .format */.GP)(new Date(I.meeting_data.start_datetime),Y/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_start_time:(I===null||I===void 0?void 0:I.meeting_data.start_datetime)?(0,f/* .format */.GP)(new Date(I.meeting_data.start_datetime),Y/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_end_date:(I===null||I===void 0?void 0:I.meeting_data.end_datetime)?(0,f/* .format */.GP)(new Date(I.meeting_data.end_datetime),Y/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_end_time:(I===null||I===void 0?void 0:I.meeting_data.end_datetime)?(0,f/* .format */.GP)(new Date(I.meeting_data.end_datetime),Y/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_timezone:(F=I===null||I===void 0?void 0:I.meeting_data.timezone)!==null&&F!==void 0?F:"",meeting_enrolledAsAttendee:(I===null||I===void 0?void 0:I.meeting_data.attendees)==="Yes"},shouldFocusError:true,mode:"onChange"});var U=(0,O/* .useSaveGoogleMeetMutation */.Cz)();var P=A/* .tutorConfig.timezones */.P.timezones;var R=Object.keys(P).map(e=>({label:P[e],value:e}));var W=e=>(0,n._)(function*(){if(!K){return}var r=yield U.mutateAsync((0,i._)((0,a._)({},I&&{"post-id":Number(I.ID),"event-id":I.meeting_data.id},o&&{topic_id:o}),{object_id:K,meeting_title:e.meeting_name,meeting_summary:e.meeting_summary,meeting_start_date:e.meeting_start_date,meeting_start_time:e.meeting_start_time,meeting_end_date:e.meeting_end_date,meeting_end_time:e.meeting_end_time,meeting_attendees_enroll_students:e.meeting_enrolledAsAttendee?"Yes":"No",meeting_timezone:e.meeting_timezone,attendees:e.meeting_enrolledAsAttendee?"Yes":"No"}));if(r.status_code===200||r.status_code===201){t();L.reset()}})();(0,d.useEffect)(()=>{if((0,T/* .isDefined */.O9)(I)){L.reset({meeting_name:I.post_title,meeting_summary:I.post_content,meeting_start_date:I.meeting_data.start_datetime?(0,f/* .format */.GP)(new Date(I.meeting_data.start_datetime),Y/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_start_time:I.meeting_data.start_datetime?(0,f/* .format */.GP)(new Date(I.meeting_data.start_datetime),Y/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_end_date:I.meeting_data.end_datetime?(0,f/* .format */.GP)(new Date(I.meeting_data.end_datetime),Y/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_end_time:I.meeting_data.end_datetime?(0,f/* .format */.GP)(new Date(I.meeting_data.end_datetime),Y/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_timezone:I.meeting_data.timezone,meeting_enrolledAsAttendee:I.meeting_data.attendees==="Yes"})}var e=setTimeout(()=>{L.setFocus("meeting_name")},250);return()=>{clearTimeout(e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[I]);return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:z.container,children:[/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:z.formWrapper,ref:u,children:/*#__PURE__*/(0,s/* .jsxs */.FD)(D/* ["default"] */.A,{when:!k.isLoading,fallback:/*#__PURE__*/(0,s/* .jsx */.Y)(m/* .LoadingOverlay */.p8,{}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_name",control:L.control,rules:{required:(0,v.__)("Name is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(_/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Meeting Name","tutor"),placeholder:(0,v.__)("Enter meeting name","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_summary",control:L.control,rules:{required:(0,v.__)("Summary is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Meeting Summary","tutor"),placeholder:(0,v.__)("Enter meeting summary","tutor"),rows:3,enableResize:true}))}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:z.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:z.dateLabel,children:(0,v.__)("Meeting Start Date","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:z.meetingDateTime,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_start_date",control:L.control,rules:{required:(0,v.__)("Start date is required","tutor"),validate:S/* .invalidDateRule */.Kh},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,v.__)("Start date","tutor"),disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_start_time",control:L.control,rules:{required:(0,v.__)("Start time is required","tutor"),validate:S/* .invalidTimeRule */.XA},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(x/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,v.__)("Start time","tutor")}))})]})]}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:z.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:z.dateLabel,children:(0,v.__)("Meeting End Date","tutor")}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:z.meetingDateTime,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_end_date",control:L.control,rules:{required:(0,v.__)("End date is required","tutor"),validate:{invalidDate:S/* .invalidDateRule */.Kh,checkEndDate:e=>{var t=L.watch("meeting_start_date");var r=e;if(t&&r){return new Date(t)>new Date(r)?(0,v.__)("End date should be greater than start date","tutor"):undefined}return undefined}},deps:["meeting_start_date"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,v.__)("End date","tutor"),disabledBefore:L.watch("meeting_start_date")||new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_end_time",control:L.control,rules:{required:(0,v.__)("End time is required","tutor"),validate:{invalidTime:S/* .invalidTimeRule */.XA,checkEndTime:e=>{var t=L.watch("meeting_start_date");var r=L.watch("meeting_start_time");var n=L.watch("meeting_end_date");var a=e;if(t&&n&&r&&a){return new Date("".concat(t," ").concat(r))>new Date("".concat(n," ").concat(a))?(0,v.__)("End time should be greater than start time","tutor"):undefined}return undefined}},deps:["meeting_start_time","meeting_start_date","meeting_end_date"]},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(x/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,v.__)("End time","tutor")}))})]})]}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_timezone",control:L.control,rules:{required:(0,v.__)("Timezone is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Timezone","tutor"),placeholder:(0,v.__)("Select timezone","tutor"),options:R,selectOnFocus:true,isSearchable:true}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_enrolledAsAttendee",control:L.control,render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(g/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Add enrolled students as attendees","tutor")}))})]})}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:z.buttonWrapper({isScrolling:p}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{variant:"text",size:"small",onClick:t,children:(0,v.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{"data-cy":"save-google-meeting",loading:U.isPending,variant:"primary",size:"small",onClick:L.handleSubmit(W),children:I||l?(0,v.__)("Update Meeting","tutor"):(0,v.__)("Create Meeting","tutor")})]})]})};/* export default */const U=L;var z={container:/*#__PURE__*/(0,u/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    background:",k/* .colorTokens.background.white */.I6.background.white,";padding-block:",k/* .spacing["12"] */.YK["12"],";border-radius:",k/* .borderRadius.card */.Vq.card,";box-shadow:",k/* .shadow.popover */.r7.popover,";",I/* .typography.caption */.I.caption("regular"),";* > label{font-size:",k/* .fontSize["15"] */.J["15"],";color:",k/* .colorTokens.text.title */.I6.text.title,";}"),formWrapper:/*#__PURE__*/(0,u/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),";",E/* .styleUtils.overflowYAuto */.x.overflowYAuto,";padding-inline:",k/* .spacing["12"] */.YK["12"],";padding-bottom:",k/* .spacing["8"] */.YK["8"],";gap:",k/* .spacing["12"] */.YK["12"],";height:400px;"),dateLabel:/*#__PURE__*/(0,u/* .css */.AH)(I/* .typography.caption */.I.caption("medium"),"    color:",k/* .colorTokens.text.title */.I6.text.title,";"),meetingDateTimeWrapper:/*#__PURE__*/(0,u/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",k/* .spacing["6"] */.YK["6"],";"),meetingDateTime:/*#__PURE__*/(0,u/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),"    justify-content:space-between;align-items:flex-start;gap:",k/* .spacing["6"] */.YK["6"],";"),buttonWrapper:e=>{var{isScrolling:t=false}=e;return/*#__PURE__*/(0,u/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),"    padding-top:",k/* .spacing["8"] */.YK["8"],";padding-inline:",k/* .spacing["12"] */.YK["12"],";justify-content:flex-end;gap:",k/* .spacing["8"] */.YK["8"],";z-index:",k/* .zIndex.positive */.fE.positive,";",t&&(0,u/* .css */.AH)(F(),k/* .shadow.scrollable */.r7.scrollable))}}},59799:function(e,t,r){r.d(t,{A:()=>L});/* import */var n=r(93640);/* import */var a=r(41147);/* import */var i=r(14206);/* import */var o=r(60599);/* import */var s=r(52639);/* import */var d=r(41594);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(78346);/* import */var u=r(42771);/* import */var v=r(12470);/* import */var p=/*#__PURE__*/r.n(v);/* import */var f=r(1896);/* import */var h=r(25074);/* import */var m=r(56705);/* import */var g=r(26036);/* import */var b=r(91224);/* import */var _=r(99864);/* import */var y=r(74054);/* import */var w=r(87797);/* import */var x=r(74412);/* import */var A=r(19393);/* import */var Y=r(13448);/* import */var k=r(81547);/* import */var I=r(59189);/* import */var D=r(34092);/* import */var C=r(43642);/* import */var M=r(52874);/* import */var E=r(49842);/* import */var T=r(18528);/* import */var S=r(23334);/* import */var O=r(24628);/* import */var H=r(60297);function N(){var e=(0,o._)(["\n      box-shadow: ",";\n    "]);N=function t(){return e};return e}var F=(0,H/* .getCourseId */.p)();var K=e=>{var{onCancel:t,data:r,meetingHost:o,topicId:l,meetingId:u}=e;var p;var{ref:Y,isScrolling:k}=(0,C/* .useIsScrolling */.$)({defaultValue:true});var M=(0,O/* .useZoomMeetingDetailsQuery */.gK)(u?u:"",l?l:"");var H=r!==null&&r!==void 0?r:M.data;var N,K;var L=(K=(N=H===null||H===void 0?void 0:H.meeting_starts_at)!==null&&N!==void 0?N:H===null||H===void 0?void 0:H.meeting_data.start_time)!==null&&K!==void 0?K:"";var z,P,R,W,j,B;var q=(0,D/* .useFormWithGlobalError */.p)({defaultValues:{meeting_name:(z=H===null||H===void 0?void 0:H.post_title)!==null&&z!==void 0?z:"",meeting_summary:(P=H===null||H===void 0?void 0:H.post_content)!==null&&P!==void 0?P:"",meeting_date:L?(0,f/* .format */.GP)(new Date(L),A/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_time:L?(0,f/* .format */.GP)(new Date(L),A/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_duration:(H===null||H===void 0?void 0:H.meeting_data.duration)?String(H===null||H===void 0?void 0:H.meeting_data.duration):"40",meeting_duration_unit:(R=H===null||H===void 0?void 0:H.meeting_data.duration_unit)!==null&&R!==void 0?R:"min",meeting_timezone:(W=H===null||H===void 0?void 0:H.meeting_data.timezone)!==null&&W!==void 0?W:"",auto_recording:(j=H===null||H===void 0?void 0:(p=H.meeting_data.settings)===null||p===void 0?void 0:p.auto_recording)!==null&&j!==void 0?j:"none",meeting_password:(B=H===null||H===void 0?void 0:H.meeting_data.password)!==null&&B!==void 0?B:"",meeting_host:Object.keys(o).length===1?Object.keys(o)[0]:""},shouldFocusError:true,mode:"onChange"});var V=(0,S/* .useSaveZoomMeetingMutation */.s1)();var G=x/* .tutorConfig.timezones */.P.timezones;var Q=Object.keys(G).map(e=>({label:G[e],value:e}));var Z=Object.keys(o).map(e=>({label:o[e],value:e}));var $=e=>(0,n._)(function*(){if(!F){return}var r=yield V.mutateAsync((0,i._)((0,a._)({},H&&{meeting_id:Number(H.ID)},l&&{topic_id:Number(l)}),{course_id:F,meeting_title:e.meeting_name,meeting_summary:e.meeting_summary,meeting_date:e.meeting_date,meeting_time:e.meeting_time,meeting_duration:Number(e.meeting_duration),meeting_duration_unit:e.meeting_duration_unit,meeting_timezone:e.meeting_timezone,auto_recording:e.auto_recording,meeting_password:e.meeting_password,click_form:l?"course_builder":"metabox",meeting_host:e.meeting_host}));if(r.data){t();q.reset()}})();(0,d.useEffect)(()=>{if((0,E/* .isDefined */.O9)(H)){var e;var t;q.reset({meeting_name:H.post_title,meeting_summary:H.post_content,meeting_date:L?(0,f/* .format */.GP)(new Date(L),A/* .DateFormats.yearMonthDay */.UA.yearMonthDay):"",meeting_time:L?(0,f/* .format */.GP)(new Date(L),A/* .DateFormats.hoursMinutes */.UA.hoursMinutes):"",meeting_duration:String(H.meeting_data.duration),meeting_duration_unit:H.meeting_data.duration_unit,meeting_timezone:H.meeting_data.timezone,auto_recording:(t=(e=H.meeting_data.settings)===null||e===void 0?void 0:e.auto_recording)!==null&&t!==void 0?t:"none",meeting_password:H.meeting_data.password,meeting_host:H.meeting_data.host_id})}var r=setTimeout(()=>{q.setFocus("meeting_name")},250);return()=>{clearTimeout(r)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[H]);return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.container,children:[/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:U.formWrapper,ref:Y,children:/*#__PURE__*/(0,s/* .jsxs */.FD)(I/* ["default"] */.A,{when:!M.isLoading,fallback:/*#__PURE__*/(0,s/* .jsx */.Y)(m/* .LoadingOverlay */.p8,{}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_name",control:q.control,rules:{required:(0,v.__)("Name is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Meeting Name","tutor"),placeholder:(0,v.__)("Enter meeting name","tutor")}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_summary",control:q.control,rules:{required:(0,v.__)("Summary is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Meeting Summary","tutor"),placeholder:(0,v.__)("Enter meeting summary","tutor"),rows:3,enableResize:true}))}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.meetingDateTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_date",control:q.control,rules:{required:(0,v.__)("Date is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(g/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Meeting Date","tutor"),placeholder:(0,v.__)("Enter meeting date","tutor"),disabledBefore:new Date().toISOString()}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_time",control:q.control,rules:{required:(0,v.__)("Time is required","tutor"),validate:T/* .invalidTimeRule */.XA},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(w/* ["default"] */.A,(0,i._)((0,a._)({},e),{placeholder:(0,v.__)("Start time","tutor")}))}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.meetingTimeWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_duration",control:q.control,rules:{required:(0,v.__)("Duration is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Meeting Duration","tutor"),placeholder:(0,v.__)("Duration","tutor"),type:"number",selectOnFocus:true}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_duration_unit",control:q.control,rules:{required:(0,v.__)("Duration unit is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(_/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:/*#__PURE__*/(0,s/* .jsx */.Y)("span",{children:" "}),options:[{label:(0,v.__)("Minutes","tutor"),value:"min"},{label:(0,v.__)("Hours","tutor"),value:"hr"}]}))})]})]}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_timezone",control:q.control,rules:{required:(0,v.__)("Timezone is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(_/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Timezone","tutor"),placeholder:(0,v.__)("Select timezone","tutor"),options:Q,selectOnFocus:true,isSearchable:true}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"auto_recording",control:q.control,rules:{required:(0,v.__)("Auto recording is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(_/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Auto Recording","tutor"),placeholder:(0,v.__)("Select auto recording option","tutor"),options:[{label:(0,v.__)("No recordings","tutor"),value:"none"},{label:(0,v.__)("Local","tutor"),value:"local"},{label:(0,v.__)("Cloud","tutor"),value:"cloud"}]}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_password",control:q.control,rules:{required:(0,v.__)("Password is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(b/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Meeting Password","tutor"),placeholder:(0,v.__)("Enter meeting password","tutor"),type:"password",isPassword:true}))}),/*#__PURE__*/(0,s/* .jsx */.Y)(c/* .Controller */.xI,{name:"meeting_host",control:q.control,rules:{required:(0,v.__)("Meeting host is required","tutor")},render:e=>/*#__PURE__*/(0,s/* .jsx */.Y)(_/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,v.__)("Meeting Host","tutor"),placeholder:(0,v.__)("Enter meeting host","tutor"),options:Z,disabled:(0,E/* .isDefined */.O9)(H),selectOnFocus:true,isSearchable:true}))})]})}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:U.buttonWrapper({isScrolling:k}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{variant:"text",size:"small",onClick:t,children:(0,v.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{"data-cy":"save-zoom-meeting",loading:V.isPending,variant:"primary",size:"small",onClick:q.handleSubmit($),children:H||u?(0,v.__)("Update Meeting","tutor"):(0,v.__)("Create Meeting","tutor")})]})]})};/* export default */const L=K;var U={container:/*#__PURE__*/(0,u/* .css */.AH)(M/* .styleUtils.display.flex */.x.display.flex("column"),"    background:",Y/* .colorTokens.background.white */.I6.background.white,";padding-block:",Y/* .spacing["12"] */.YK["12"],";border-radius:",Y/* .borderRadius.card */.Vq.card,";box-shadow:",Y/* .shadow.popover */.r7.popover,";",k/* .typography.caption */.I.caption("regular"),";* > label{font-size:",Y/* .fontSize["15"] */.J["15"],";color:",Y/* .colorTokens.text.title */.I6.text.title,";}"),formWrapper:/*#__PURE__*/(0,u/* .css */.AH)(M/* .styleUtils.display.flex */.x.display.flex("column"),";",M/* .styleUtils.overflowYAuto */.x.overflowYAuto,";padding-inline:",Y/* .spacing["12"] */.YK["12"],";padding-bottom:",Y/* .spacing["8"] */.YK["8"],";gap:",Y/* .spacing["12"] */.YK["12"],";height:400px;"),meetingDateTimeWrapper:/*#__PURE__*/(0,u/* .css */.AH)(M/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",Y/* .spacing["6"] */.YK["6"],";"),meetingTimeWrapper:/*#__PURE__*/(0,u/* .css */.AH)(M/* .styleUtils.display.flex */.x.display.flex(),"    justify-content:space-between;align-items:flex-start;gap:",Y/* .spacing["6"] */.YK["6"],";"),buttonWrapper:e=>{var{isScrolling:t=false}=e;return/*#__PURE__*/(0,u/* .css */.AH)(M/* .styleUtils.display.flex */.x.display.flex(),"    padding-top:",Y/* .spacing["8"] */.YK["8"],";padding-inline:",Y/* .spacing["12"] */.YK["12"],";justify-content:flex-end;gap:",Y/* .spacing["8"] */.YK["8"],";z-index:",Y/* .zIndex.positive */.fE.positive,";",t&&(0,u/* .css */.AH)(N(),Y/* .shadow.scrollable */.r7.scrollable))}}},6267:function(e,t,r){r.d(t,{A:()=>g});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(75688);/* import */var o=r(42771);/* import */var s=r(12470);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(25074);/* import */var c=r(46225);/* import */var u=r(19393);/* import */var v=r(13448);/* import */var p=r(81547);/* import */var f=r(59189);function h(){var e=(0,n._)(["\n      transform: rotate(180deg);\n    "]);h=function t(){return e};return e}var m=e=>{var{title:t,backUrl:r,rightButton:n,isExternalUrl:o}=e;var d=(0,i/* .useNavigate */.Zp)();var v=()=>{if(r){if(o){window.location.href=r;return}d(r)}else{d(-1)}};return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:b.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:b.left,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{isIconOnly:true,size:"small",variant:"text","aria-label":(0,s.__)("Back","tutor"),buttonCss:b.button({isRTL:u/* .isRTL */.V8}),onClick:v,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{name:"back",width:32,height:32})})}),/*#__PURE__*/(0,a/* .jsx */.Y)("h6",{css:b.title,children:t})]}),n]})};/* export default */const g=m;var b={wrapper:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),left:/*#__PURE__*/(0,o/* .css */.AH)("display:flex;align-items:center;gap:",v/* .spacing["16"] */.YK["16"],";"),button:e=>{var{isRTL:t}=e;return/*#__PURE__*/(0,o/* .css */.AH)("padding:0;border-radius:",v/* .borderRadius["2"] */.Vq["2"],";",t&&(0,o/* .css */.AH)(h()))},title:/*#__PURE__*/(0,o/* .css */.AH)(p/* .typography.heading6 */.I.heading6("medium"),";")}},45934:function(e,t,r){r.d(t,{A:()=>y});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(52639);/* import */var o=r(78346);/* import */var s=r(75688);/* import */var d=r(42771);/* import */var l=r(12470);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(25074);/* import */var v=r(46225);/* import */var p=r(19393);/* import */var f=r(13448);/* import */var h=r(59189);/* import */var m=r(73755);/* import */var g=r(36068);/* import */var b=r(43414);var _=e=>{var{styleModifier:t}=e;var{steps:r,setSteps:c}=(0,b/* .useCourseNavigator */._)();var _=(0,s/* .useNavigate */.Zp)();var y=(0,m/* .useCurrentPath */.G)(g/* ["default"] */.A);var x=(0,o/* .useFormContext */.xW)();var A=r.findIndex(e=>e.path===y);var Y=Math.max(-1,A-1);var k=Math.min(r.length,A+1);var I=r[Y];var D=r[k];var C=x.watch("post_title");var M=()=>{c(e=>{return e.map((e,t)=>{if(t===A){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===Y){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(I.path)};var E=()=>{c(e=>{return e.map((e,t)=>{if(t===A){return(0,a._)((0,n._)({},e),{isActive:false})}if(t===k){return(0,a._)((0,n._)({},e),{isActive:true})}return e})});_(D.path)};return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:[w.wrapper,t],children:[/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{when:A>0,children:/*#__PURE__*/(0,i/* .jsx */.Y)(u/* ["default"] */.A,{variant:"tertiary",iconPosition:"right",size:"small",onClick:M,buttonCss:/*#__PURE__*/(0,d/* .css */.AH)("padding:",f/* .spacing["4"] */.YK["4"],";svg{color:",f/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:Y<0,children:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:!p/* .isRTL */.V8?"chevronLeft":"chevronRight",height:24,width:24})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{when:A<r.length-1&&C,children:/*#__PURE__*/(0,i/* .jsx */.Y)(u/* ["default"] */.A,{variant:"tertiary",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:!p/* .isRTL */.V8?"chevronRight":"chevronLeft",height:24,width:24}),iconPosition:"right",size:"small",onClick:E,buttonCss:/*#__PURE__*/(0,d/* .css */.AH)("padding:",f/* .spacing["4"] */.YK["4"]," ",f/* .spacing["4"] */.YK["4"]," ",f/* .spacing["4"] */.YK["4"]," ",f/* .spacing["12"] */.YK["12"],";svg{color:",f/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),disabled:!C||k>=r.length,children:(0,l.__)("Next","tutor")})})]})};/* export default */const y=_;var w={wrapper:/*#__PURE__*/(0,d/* .css */.AH)("width:100%;display:flex;justify-content:end;height:32px;align-items:center;gap:",f/* .spacing["16"] */.YK["16"],";")}},79779:function(e,t,r){// ESM COMPAT FLAG
r.r(t);// EXPORTS
r.d(t,{"default":()=>/* binding */ti});// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
var n=r(41147);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var a=r(14206);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var i=r(52639);// EXTERNAL MODULE: external "React"
var o=r(41594);var s=/*#__PURE__*/r.n(o);// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var d=r(78346);// EXTERNAL MODULE: ./node_modules/.pnpm/react-router@6.30.2_react@18.3.1/node_modules/react-router/dist/index.js
var l=r(75688);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var c=r(42771);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var u=r(92965);// EXTERNAL MODULE: ./node_modules/.pnpm/@tanstack+react-query@5.62.15_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useIsFetching.js
var v=r(93908);// EXTERNAL MODULE: external "wp.i18n"
var p=r(12470);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var f=r(60599);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/styles.ts
var h=r(13448);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/typography.ts
var m=r(81547);// EXTERNAL MODULE: ./assets/src/js/v3/shared/controls/Show.tsx
var g=r(59189);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/SVGIcon.tsx
var b=r(46225);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Tooltip.tsx
var _=r(90453);// CONCATENATED MODULE: ./assets/src/js/v3/shared/atoms/Box.tsx
function y(){var e=(0,f._)(["\n      border: 1px solid ",";\n    "]);y=function t(){return e};return e}function w(){var e=(0,f._)(["\n      border-bottom: 1px solid ",";\n      padding: "," ",";\n    "]);w=function t(){return e};return e}var x=/*#__PURE__*/s().forwardRef((e,t)=>{var{children:r,className:n,bordered:a=false,wrapperCss:o}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{ref:t,className:n,css:[k.wrapper(a),o],children:r})});x.displayName="Box";var A=/*#__PURE__*/s().forwardRef((e,t)=>{var{children:r,className:n,separator:a=false,tooltip:o}=e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{ref:t,className:n,css:k.title(a),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:r}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{content:o,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"info",width:20,height:20})})})]})});A.displayName="BoxTitle";var Y=/*#__PURE__*/s().forwardRef((e,t)=>{var{children:r,className:n}=e;return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{ref:t,className:n,css:k.subtitle,children:/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:r})})});Y.displayName="BoxSubtitle";var k={wrapper:e=>/*#__PURE__*/(0,c/* .css */.AH)("background-color:",h/* .colorTokens.background.white */.I6.background.white,";border-radius:",h/* .borderRadius["8"] */.Vq["8"],";padding:",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["20"] */.YK["20"]," ",h/* .spacing["20"] */.YK["20"],";",e&&(0,c/* .css */.AH)(y(),h/* .colorTokens.stroke.divider */.I6.stroke.divider)),title:e=>/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.body */.I.body("medium"),";color:",h/* .colorTokens.text.title */.I6.text.title,";display:flex;gap:",h/* .spacing["4"] */.YK["4"],";align-items:center;",e&&(0,c/* .css */.AH)(w(),h/* .colorTokens.stroke.divider */.I6.stroke.divider,h/* .spacing["12"] */.YK["12"],h/* .spacing["20"] */.YK["20"]),"    & > div{height:20px;svg{color:",h/* .colorTokens.icon.hints */.I6.icon.hints,";}}& > span{display:inline-block;}"),subtitle:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.caption */.I.caption(),";color:",h/* .colorTokens.text.hints */.I6.text.hints,";")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/LoadingSpinner.tsx
var I=r(56705);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/ProBadge.tsx
var D=r(84492);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Button.tsx
var C=r(25074);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/constants.ts
var M=r(19393);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/style-utils.ts
var E=r(52874);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/modals/CertificatePreviewModal.tsx
var T=e=>{var{certificates:t,selectedCertificate:r,currentCertificate:n,onSelectCertificate:a,closeModal:s}=e;var[d,l]=(0,o.useState)(r);var[c,u]=(0,o.useState)(n);var v=(0,o.useRef)(null);var f=t.findIndex(e=>e.key===c.key);var h=Math.max(-1,f-1);var m=Math.min(t.length,f+1);(0,o.useEffect)(()=>{var e=e=>{if(e.key==="ArrowLeft"){w("previous")}else if(e.key==="ArrowRight"){w("next")}else if(e.key==="Enter"){y(c)}else if(e.key==="Escape"){s({action:"CLOSE"})}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[f,t]);(0,o.useEffect)(()=>{if(v.current){v.current.focus()}},[]);var y=e=>{if(e.key===d){return}a(e);l(e.key)};var w=e=>{if(e==="previous"&&f>0){u(t[h])}else if(e==="next"&&f<t.length-1){u(t[m])}};return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:O.container,children:[c&&/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:O.content,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:O.certificateAndActions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:O.certificate,src:c.preview_src,alt:c.name}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:O.actionsWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{placement:"right",content:(0,p.__)("Close","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{ref:v,type:"button",css:[O.actionButton,O.closeButton],onClick:()=>{s({action:"CLOSE"})},children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"cross",width:40,height:40})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:c.edit_url,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{placement:"right",content:(0,p.__)("Edit in Certificate Builder","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[O.actionButton,O.editButton],onClick:()=>{window.open(e,"_blank","noopener")},children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"edit",width:40,height:40})})})})]})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:O.navigatorWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:O.navigator,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[O.actionButton,O.navigatorButton],onClick:()=>w("previous"),disabled:h<0,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:!M/* .isRTL */.V8?"chevronLeft":"chevronRight",width:40,height:40})}),/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{variant:"primary",onClick:()=>{y(c);s({action:"CONFIRM"})},disabled:d===c.key,children:d===c.key?(0,p.__)("Selected","tutor"):(0,p.__)("Select","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[O.actionButton,O.navigatorButton],onClick:()=>w("next"),disabled:m>t.length-1,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:!M/* .isRTL */.V8?"chevronRight":"chevronLeft",width:40,height:40})})]})})]})};/* export default */const S=T;var O={container:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:100%;",E/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:center;align-items:center;gap:",h/* .spacing["16"] */.YK["16"],";position:relative;"),content:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:center;align-items:center;object-fit:contain;max-width:80vw;max-height:calc(100vh - 200px);width:100%;height:100%;"),certificateAndActions:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;",E/* .styleUtils.display.flex */.x.display.flex(),";justify-content:center;align-items:center;gap:",h/* .spacing["20"] */.YK["20"],";height:100%;"),certificate:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:100%;object-fit:contain;"),actionsWrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:0;right:-",h/* .spacing["56"] */.YK["56"],";bottom:0;",E/* .styleUtils.display.flex */.x.display.flex("column"),";justify-content:space-between;",h/* .Breakpoint.smallMobile */.EA.smallMobile,"{right:-",h/* .spacing["32"] */.YK["32"],";}"),actionButton:/*#__PURE__*/(0,c/* .css */.AH)("place-self:center start;",E/* .styleUtils.resetButton */.x.resetButton,";display:inline-flex;align-items:center;justify-content:center;&:focus,&:active,&:hover{background:none;}svg{color:",h/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";transition:color 0.3s ease-in-out;}"),closeButton:/*#__PURE__*/(0,c/* .css */.AH)("place-self:center start;"),editButton:/*#__PURE__*/(0,c/* .css */.AH)("place-self:center end;"),navigatorWrapper:/*#__PURE__*/(0,c/* .css */.AH)(),navigator:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),";gap:",h/* .spacing["16"] */.YK["16"],";justify-content:center;background:",h/* .colorTokens.background.white */.I6.background.white,";padding:",h/* .spacing["12"] */.YK["12"],";border-radius:",h/* .borderRadius["8"] */.Vq["8"],";"),navigatorButton:/*#__PURE__*/(0,c/* .css */.AH)("svg{color:",h/* .colorTokens.icon["default"] */.I6.icon["default"],";}:disabled{cursor:not-allowed;svg{color:",h/* .colorTokens.icon.hints */.I6.icon.hints,";}}")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/modals/Modal.tsx
var H=r(17944);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/config.ts
var N=r(74412);// EXTERNAL MODULE: ./assets/src/js/v3/shared/controls/For.tsx
var F=r(3013);// EXTERNAL MODULE: ./assets/src/js/v3/shared/molecules/Tabs.tsx
var K=r(88893);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/util.ts + 4 modules
var L=r(33231);// EXTERNAL MODULE: ./assets/src/js/v3/public/images/not-found.webp
var U=r(27895);// EXTERNAL MODULE: ./assets/src/js/v3/public/images/not-found-2x.webp
var z=r(8452);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/certificate/CertificateCard.tsx
function P(){var e=(0,f._)(["\n      [data-overlay] {\n        background: ",";\n        opacity: 0.1;\n      }\n    "]);P=function t(){return e};return e}var R=e=>{var{selectedCertificate:t="",data:r,orientation:n,onSelectCertificate:a,onPreviewCertificate:o}=e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:j.wrapper({isSelected:t===r.key,isLandScape:n==="landscape"}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{"data-overlay":true,onClick:()=>a(r.key),onKeyDown:e=>{if(e.key==="Enter"||e.key===" "){a(r.key)}}}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:r.preview_src,fallback:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:j.emptyCard,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"outlineNone",width:49,height:49}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,p.__)("None","tutor")})]}),children:e=>{return/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:j.certificateImage,src:e,alt:r.name})}}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:r.preview_src||r.key!==t,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{"data-footer-actions":true,css:j.footerWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:r.preview_src,children:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{variant:"secondary",isOutlined:true,size:"small",onClick:()=>o(r),children:(0,p.__)("Preview","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:r.key!==t,children:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{variant:"primary",size:"small",onClick:()=>a(r.key),children:(0,p.__)("Select","tutor")})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:j.checkIcon({isSelected:t===r.key}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"checkFilledWhite",width:32,height:32})})]})};/* export default */const W=R;var j={wrapper:e=>{var{isSelected:t=false,isLandScape:r=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.centeredFlex */.x.centeredFlex,";background-color:",h/* .colorTokens.surface.courseBuilder */.I6.surface.courseBuilder,";max-height:",r?"154px":"217px",";min-height:",r?"154px":"217px",";height:100%;position:relative;outline:",t?"2px":"1px"," solid ",t?h/* .colorTokens.stroke.brand */.I6.stroke.brand:h/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",h/* .borderRadius.card */.Vq.card,";transition:all 0.15s ease-in-out;[data-overlay]{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:",h/* .borderRadius.card */.Vq.card,";}",t&&(0,c/* .css */.AH)(P(),h/* .colorTokens.brand.blue */.I6.brand.blue),"    &:hover,&:focus-within{border-color:",h/* .colorTokens.stroke.brand */.I6.stroke.brand,";[data-footer-actions]{opacity:1;}[data-overlay]{background:",h/* .colorTokens.brand.blue */.I6.brand.blue,";opacity:0.1;}}")},emptyCard:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.flexCenter */.x.flexCenter(),";flex-direction:column;height:100%;width:100%;gap:",h/* .spacing["8"] */.YK["8"],";",m/* .typography.caption */.I.caption("medium"),";svg{color:",h/* .colorTokens.color.black["20"] */.I6.color.black["20"],";}"),certificateImage:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:100%;object-fit:contain;border-radius:",h/* .borderRadius.card */.Vq.card,";"),footerWrapper:/*#__PURE__*/(0,c/* .css */.AH)("opacity:0;position:absolute;left:0px;right:0px;bottom:0px;",E/* .styleUtils.flexCenter */.x.flexCenter(),";align-items:center;gap:",h/* .spacing["4"] */.YK["4"],";padding-block:",h/* .spacing["8"] */.YK["8"],";background:",h/* .colorTokens.bg.white */.I6.bg.white,";border-bottom-left-radius:",h/* .borderRadius.card */.Vq.card,";border-bottom-right-radius:",h/* .borderRadius.card */.Vq.card,";"),checkIcon:e=>{var{isSelected:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("opacity:",t?1:0,";position:absolute;top:-14px;right:-14px;border-bottom-left-radius:",h/* .borderRadius.card */.Vq.card,";svg{color:",h/* .colorTokens.icon.brand */.I6.icon.brand,";}")}};// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/certificates.webp
const B=r.p+"js/images/certificates-4d7368cf.webp";// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/certificates-2x.webp
const q=r.p+"js/images/certificates-2x-22b8cc4e.webp";// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/certificate/CertificateEmptyState.tsx
var V=!!N/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var G=()=>{if(V){return null}return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:Z.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:Z.placeholderImage,src:B,srcSet:"".concat(B," 1x, ").concat(q," 2x"),alt:(0,p.__)("Pro Placeholder","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:Z.featureAndActionWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("h5",{css:Z.title,children:(0,p.__)("Award Students with Custom Certificates","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:Z.featuresWithTitle,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:(0,p.__)("Celebrate success with personalized certificates. Recognize student achievements with unique designs that inspire and motivate students.","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:Z.features,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:Z.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:Z.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,p.__)("Design personalized certificates that highlight their accomplishments and boost their confidence.","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:Z.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:Z.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,p.__)("Inspire them with a touch of credibility and recognition tailored just for them.","tutor")})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:Z.actionsButton,children:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{as:"a",variant:"primary",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"crown",width:24,height:24}),href:N/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,target:"_blank",rel:"noreferrer",children:(0,p.__)("Get Tutor LMS Pro","tutor")})})]})};/* export default */const Q=G;var Z={emptyState:/*#__PURE__*/(0,c/* .css */.AH)("padding-bottom:",h/* .spacing["12"] */.YK["12"],";",E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["20"] */.YK["20"],";"),placeholderImage:e=>{var{notFound:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("max-width:100%;width:100%;height:",t?"189px":"312px;",";object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.Vq["6"],";")},featureAndActionWrapper:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.YK["12"],";"),title:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.heading5 */.I.heading5("medium"),"    color:",h/* .colorTokens.text.primary */.I6.text.primary,";"),featuresWithTitle:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    max-width:500px;width:100%;gap:",h/* .spacing["8"] */.YK["8"],";",m/* .typography.body */.I.body("regular"),";"),features:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),feature:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),"    gap:",h/* .spacing["12"] */.YK["12"],";color:",h/* .colorTokens.text.title */.I6.text.title,";text-wrap:pretty;"),checkIcon:/*#__PURE__*/(0,c/* .css */.AH)("flex-shrink:0;color:",h/* .colorTokens.text.success */.I6.text.success,";"),actionsButton:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.flexCenter */.x.flexCenter(),"    margin-top:",h/* .spacing["4"] */.YK["4"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/certificate/Certificate.tsx
function $(){var e=(0,f._)(["\n      grid-template-columns: 1fr;\n      place-items: center;\n    "]);$=function t(){return e};return e}var X=!!N/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var J=(0,L/* .isAddonEnabled */.GR)(M/* .Addons.TUTOR_CERTIFICATE */.oW.TUTOR_CERTIFICATE);var ee=e=>{var{isSidebarVisible:t=true,currentCertificateKey:r,onSelect:n,certificateTemplates:a}=e;var s=a!==null&&a!==void 0?a:[];var d=s.filter(e=>e.is_default);var[l,u]=(0,o.useState)("templates");var[v,f]=(0,o.useState)("landscape");var[y,w]=(0,o.useState)(r);var{showModal:x}=(0,H/* .useModal */.h)();var A=s.some(e=>e.orientation==="landscape"&&(l==="templates"?e.is_default:!e.is_default));var Y=s.some(e=>e.orientation==="portrait"&&(l==="templates"?e.is_default:!e.is_default));(0,o.useEffect)(()=>{if(s.length){if(d.length===0){u("custom_certificates")}var e=s.some(e=>e.orientation==="landscape");if(!e&&v==="landscape"){f("portrait")}}if(r==="none"){w(r);return}var t=s.find(e=>e.key===r);if(t){if(v!==t.orientation){f(t.orientation)}u(t.is_default?"templates":"custom_certificates");w(t.key)}// eslint-disable-next-line react-hooks/exhaustive-deps
},[r,s]);var k=s.filter(e=>e.orientation===v&&(l==="templates"?e===null||e===void 0?void 0:e.is_default:!(e===null||e===void 0?void 0:e.is_default)));var I=e=>{u(e);var t=s.some(t=>t.orientation==="landscape"&&(e==="templates"?t.is_default:!t.is_default));var r=s.some(t=>t.orientation==="portrait"&&(e==="templates"?t.is_default:!t.is_default));f(e=>{if(t&&r||!t&&!r){return e}return t?"landscape":"portrait"})};var D=e=>{f(e)};var C=e=>{n(e);w(e)};var T=e=>{x({component:S,props:{certificates:s,selectedCertificate:r,currentCertificate:e,onSelectCertificate:e=>{C(e.key)}}})};var O=[...d.length?[{label:(0,p.__)("Templates","tutor"),value:"templates"}]:[],{label:M/* .CURRENT_VIEWPORT.isAboveSmallMobile */.vN.isAboveSmallMobile?(0,p.__)("Custom Certificates","tutor"):(0,p.__)("Certificates","tutor"),value:"custom_certificates"}];return/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:X&&J,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(Q,{}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)(g/* ["default"] */.A,{when:J,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:er.tabs,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(K/* ["default"] */.A,{wrapperCss:er.tabsWrapper,tabList:O,activeTab:l,onChange:I}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:er.orientation,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(g/* ["default"] */.A,{when:A&&Y,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{delay:200,content:(0,p.__)("Landscape","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[E/* .styleUtils.resetButton */.x.resetButton,er.orientationButton({isActive:v==="landscape"})],onClick:()=>D("landscape"),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:v==="landscape"?"landscapeFilled":"landscape",width:32,height:32})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(_/* ["default"] */.A,{delay:200,content:(0,p.__)("Portrait","tutor"),children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:[E/* .styleUtils.resetButton */.x.resetButton,er.orientationButton({isActive:v==="portrait"})],onClick:()=>D("portrait"),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:v==="portrait"?"portraitFilled":"portrait",width:32,height:32})})})]})})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:er.certificateWrapper({hasCertificates:k.length>0,isSidebarVisible:t}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:s.length&&(d.length===0||l==="templates"),children:/*#__PURE__*/(0,i/* .jsx */.Y)(W,{selectedCertificate:y,onSelectCertificate:C,onPreviewCertificate:e=>T(e),data:{key:"none",name:(0,p.__)("None","tutor"),preview_src:"",background_src:"",orientation:"landscape",url:""},orientation:v})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:k.length>0,fallback:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:er.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:er.placeholderImage({notFound:true}),src:U,srcSet:"".concat(U," 1x, ").concat(z," 2x"),alt:(0,p.__)("Not Found","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:er.featureAndActionWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.body */.I.body("medium"),"                      color:",h/* .colorTokens.text.subdued */.I6.text.subdued,";"),children:(0,p.__)("You didn’t create any certificate yet!","tutor")})})]}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(F/* ["default"] */.A,{each:k,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(W,{selectedCertificate:y,onSelectCertificate:C,data:e,orientation:v,onPreviewCertificate:T},e.key)})})]})]})})};/* export default */const et=ee;var er={tabs:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;"),tabsWrapper:/*#__PURE__*/(0,c/* .css */.AH)("button{min-width:auto;}"),certificateWrapper:e=>{var{hasCertificates:t,isSidebarVisible:r}=e;return/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:repeat(",r?3:4,",1fr);gap:",h/* .spacing["16"] */.YK["16"],";padding-top:",h/* .spacing["12"] */.YK["12"],";",!t&&(0,c/* .css */.AH)($())," ",h/* .Breakpoint.smallMobile */.EA.smallMobile,"{grid-template-columns:1fr 1fr;}")},orientation:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),"    gap:",h/* .spacing["8"] */.YK["8"],";position:absolute;height:32px;right:0;bottom:",h/* .spacing["4"] */.YK["4"],";"),orientationButton:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("display:inline-flex;color:",t?h/* .colorTokens.icon.brand */.I6.icon.brand:h/* .colorTokens.icon["default"] */.I6.icon["default"],";border-radius:",h/* .borderRadius["4"] */.Vq["4"],";&:focus,&:active,&:hover{background:none;color:",t?h/* .colorTokens.icon.brand */.I6.icon.brand:h/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:focus-visible{outline:2px solid ",h/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}")},emptyState:/*#__PURE__*/(0,c/* .css */.AH)("padding-block:",h/* .spacing["16"] */.YK["16"]," ",h/* .spacing["12"] */.YK["12"],";",E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["20"] */.YK["20"],";"),placeholderImage:e=>{var{notFound:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("max-width:100%;width:100%;height:",t?"189px":"312px;",";object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.Vq["6"],";")},featureAndActionWrapper:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.YK["12"],";"),actionsButton:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.flexCenter */.x.flexCenter(),"    margin-top:",h/* .spacing["4"] */.YK["4"],";")};// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_without_properties.js + 1 modules
var en=r(17900);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useAnimation.tsx
var ea=r(31569);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useDebounce.ts
var ei=r(44486);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useSelectKeyboardNavigation.ts
var eo=r(27630);// EXTERNAL MODULE: ./assets/src/js/v3/shared/molecules/EmptyState.tsx
var es=r(92795);// EXTERNAL MODULE: ./assets/src/js/v3/shared/molecules/Popover.tsx
var ed=r(21678);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormFieldWrapper.tsx
var el=r(42263);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormCoursePrerequisites.tsx
function ec(){var e=(0,f._)(["\n      background-color: ",";\n      border-color: ",";\n    "]);ec=function t(){return e};return e}function eu(){var e=(0,f._)(["\n        background-color: ",";\n        border-color: ",";\n      "]);eu=function t(){return e};return e}var ev=e=>{var{field:t,fieldState:r,options:s,onChange:d=L/* .noop */.lQ,handleSearchOnChange:l,label:c,placeholder:u="",disabled:v,readOnly:f,loading:h,isSearchable:_=false,helpText:y}=e;var w;var x=(w=t.value)!==null&&w!==void 0?w:[];var A=x.map(e=>String(e.id));var Y=(0,o.useRef)(null);var k=(0,o.useRef)(null);var[D,C]=(0,o.useState)(false);var[M,E]=(0,o.useState)("");var T=(0,ei/* .useDebounce */.d)(M);var S=s.filter(e=>e.title.toLowerCase().includes(T.toLowerCase())&&!A.includes(String(e.id)));(0,o.useEffect)(()=>{if(l){l(T)}else{// Handle local filter
}},[T,l]);var{activeIndex:O,setActiveIndex:H}=(0,eo/* .useSelectKeyboardNavigation */.v)({options:S.map(e=>({label:e.title,value:e})),isOpen:D,selectedValue:null,onSelect:e=>{t.onChange([...x,e.value]);d([...x,e.value]);C(false);E("")},onClose:()=>{C(false);E("");E("")}});var N=e=>{if(Array.isArray(x)){var r=x.filter(t=>t.id!==e);t.onChange(r);d(r)}};(0,o.useEffect)(()=>{if(D&&O>=0&&k.current){k.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[D,O]);return/*#__PURE__*/(0,i/* .jsx */.Y)(el/* ["default"] */.A,{fieldState:r,field:t,label:c,disabled:v,readOnly:f,helpText:y,children:e=>{var{css:r}=e,o=(0,en._)(e,["css"]);return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ef.mainWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{ref:Y,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ef.inputWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ef.leftIcon,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"search",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.Y)("input",(0,a._)((0,n._)({},o),{onClick:e=>{e.stopPropagation();C(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();C(true)}if(e.key==="Tab"){C(false)}},className:"tutor-input-field",css:[r,ef.input],autoComplete:"off",readOnly:f||!_,placeholder:u,value:M,onChange:e=>{E(e.target.value)}}))]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:x.length>0,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!h,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(I/* .LoadingSection */.YE,{}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(es/* ["default"] */.A,{size:"small",emptyStateImage:U,emptyStateImage2x:z,imageAltText:(0,p.__)("Illustration of a no course selected","tutor"),title:(0,p.__)("No course selected","tutor"),description:(0,p.__)("Select a course to add as a prerequisite.","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ef.courseList,children:/*#__PURE__*/(0,i/* .jsx */.Y)(F/* ["default"] */.A,{each:x,children:(e,t)=>/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ef.courseCard({onPopover:false}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ef.imageWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:e.image,alt:e.title,css:ef.image})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ef.cardContent,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:ef.cardTitle,children:e.title}),/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:m/* .typography.tiny */.I.tiny(),children:e.id})]}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:ef.removeButton,"data-visually-hidden":true,onClick:()=>N(e.id),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"times",width:14,height:14})})]},t)})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(ed/* ["default"] */.A,{triggerRef:Y,isOpen:D,animationType:ea/* .AnimationType.slideDown */.J6.slideDown,dependencies:[S.length],closePopover:()=>{C(false);E("")},children:/*#__PURE__*/(0,i/* .jsx */.Y)("ul",{css:[ef.options],children:/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:S.length>0,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)("li",{css:ef.emptyOption,children:/*#__PURE__*/(0,i/* .jsx */.Y)("p",{children:(0,p.__)("No courses found","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(F/* ["default"] */.A,{each:S,children:(e,r)=>/*#__PURE__*/(0,i/* .jsx */.Y)("li",{ref:O===r?k:null,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:ef.courseCard({onPopover:true,isActive:O===r}),onClick:()=>{t.onChange([...x,e]);d([...x,e]);C(false);E("")},onMouseOver:()=>H(r),onMouseLeave:()=>r!==O&&H(-1),onFocus:()=>H(r),"aria-selected":O===r,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ef.imageWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:e.image,alt:e.title,css:ef.image})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ef.cardContent,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:ef.cardTitle,children:e.title}),/*#__PURE__*/(0,i/* .jsx */.Y)("p",{css:m/* .typography.tiny */.I.tiny(),children:e.id})]})]})},e.id)})})})})]})}})};/* export default */const ep=ev;var ef={mainWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),inputWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;display:flex;justify-content:space-between;align-items:center;position:relative;"),leftIcon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;left:",h/* .spacing["8"] */.YK["8"],";top:",h/* .spacing["8"] */.YK["8"],";color:",h/* .colorTokens.icon["default"] */.I6.icon["default"],";display:flex;"),input:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.body */.I.body(),";width:100%;padding-right:",h/* .spacing["32"] */.YK["32"],";padding-left:",h/* .spacing["36"] */.YK["36"],";",E/* .styleUtils.textEllipsis */.x.textEllipsis,";border:1px solid ",h/* .colorTokens.stroke["default"] */.I6.stroke["default"],";&.tutor-input-field{padding-right:",h/* .spacing["32"] */.YK["32"],";padding-left:",h/* .spacing["36"] */.YK["36"],";}"),courseList:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";max-height:256px;height:100%;margin-top:",h/* .spacing["8"] */.YK["8"],";",E/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),options:/*#__PURE__*/(0,c/* .css */.AH)("z-index:",h/* .zIndex.dropdown */.fE.dropdown,";background-color:",h/* .colorTokens.background.white */.I6.background.white,";list-style-type:none;box-shadow:",h/* .shadow.popover */.r7.popover,";padding:",h/* .spacing["4"] */.YK["4"]," 0;margin:0;max-height:400px;border-radius:",h/* .borderRadius["6"] */.Vq["6"],";",E/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),courseCard:e=>{var{onPopover:t=false,isActive:r=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.resetButton */.x.resetButton,";width:100%;cursor:",t?"pointer":"default",";position:relative;padding:",h/* .spacing["8"] */.YK["8"],";border:1px solid transparent;border-radius:",h/* .borderRadius.card */.Vq.card,";display:grid;grid-template-columns:76px 1fr;gap:",h/* .spacing["10"] */.YK["10"],";align-items:center;background-color:",h/* .colorTokens.background.white */.I6.background.white,";[data-visually-hidden]{opacity:0;}",r&&(0,c/* .css */.AH)(ec(),h/* .colorTokens.background.hover */.I6.background.hover,h/* .colorTokens.stroke["default"] */.I6.stroke["default"]),"    &:hover{background-color:",h/* .colorTokens.background.hover */.I6.background.hover,";",!t&&(0,c/* .css */.AH)(eu(),h/* .colorTokens.background.white */.I6.background.white,h/* .colorTokens.stroke["default"] */.I6.stroke["default"]),"      [data-visually-hidden]{opacity:1;}}",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},imageWrapper:/*#__PURE__*/(0,c/* .css */.AH)("height:42px;"),image:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:100%;border-radius:",h/* .borderRadius["4"] */.Vq["4"],";object-fit:cover;object-position:center;"),cardContent:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;"),cardTitle:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.small */.I.small("medium"),";",E/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),";"),removeButton:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.resetButton */.x.resetButton,";position:absolute;top:50%;right:",h/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:",h/* .borderRadius.circle */.Vq.circle,";background:",h/* .colorTokens.background.white */.I6.background.white,";&:focus,&:active,&:hover{background:",h/* .colorTokens.background.white */.I6.background.white,";}svg{color:",h/* .colorTokens.icon["default"] */.I6.icon["default"],";}:hover{svg{color:",h/* .colorTokens.icon.hover */.I6.icon.hover,";}}:focus{box-shadow:",h/* .shadow.focus */.r7.focus,";}:focus-visible{opacity:1;}"),emptyOption:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.caption */.I.caption("medium"),";padding:",h/* .spacing["8"] */.YK["8"],";text-align:center;")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormFileUploader.tsx
var eh=r(46062);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormInputWithContent.tsx
var em=r(6977);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormTextareaInput.tsx
var eg=r(74054);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/useVisibilityControl.tsx
var eb=r(78988);// EXTERNAL MODULE: ./assets/src/js/v3/shared/services/course.ts
var e_=r(68677);// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/prerequisites.webp
const ey=r.p+"js/images/prerequisites-63084e41.webp";// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/prerequisites-2x.webp
const ew=r.p+"js/images/prerequisites-2x-dd66630e.webp";// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/additional/CoursePrerequisitesEmptyState.tsx
var ex=!!N/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var eA=()=>{return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ek.emptyState,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{css:ek.placeholderImage,src:ey,srcSet:"".concat(ey," 1x, ").concat(ew," 2x"),alt:(0,p.__)("Pro Placeholder","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ek.featureAndActionWrapper,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ek.featuresWithTitle,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:(0,p.__)("Guide Students with Course Prerequisites","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!ex,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ek.features,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ek.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:ek.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,p.__)("Easily set prerequisites to structure your courses and guide student progress.","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ek.feature,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"materialCheck",width:20,height:20,style:ek.checkIcon}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,p.__)("Offer customized learning journeys by setting multiple prerequisites for any course.","tutor")})]})]})})]})})]})};/* export default */const eY=eA;var ek={emptyState:/*#__PURE__*/(0,c/* .css */.AH)("padding:",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["24"] */.YK["24"]," ",h/* .spacing["12"] */.YK["12"],";",E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["20"] */.YK["20"],";border:1px solid ",h/* .colorTokens.stroke.divider */.I6.stroke.divider,";border-radius:",h/* .borderRadius.card */.Vq.card,";background-color:",h/* .colorTokens.background.white */.I6.background.white,";"),placeholderImage:/*#__PURE__*/(0,c/* .css */.AH)("max-width:100%;width:100%;height:112px;object-fit:cover;object-position:center;border-radius:",h/* .borderRadius["6"] */.Vq["6"],";"),featureAndActionWrapper:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    align-items:center;gap:",h/* .spacing["12"] */.YK["12"],";padding-inline:",h/* .spacing["4"] */.YK["4"],";"),featuresWithTitle:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";",m/* .typography.caption */.I.caption("medium"),";"),features:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),feature:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.small */.I.small(),";",E/* .styleUtils.display.flex */.x.display.flex(),"    gap:",h/* .spacing["12"] */.YK["12"],";color:",h/* .colorTokens.text.title */.I6.text.title,";text-wrap:pretty;"),checkIcon:/*#__PURE__*/(0,c/* .css */.AH)("flex-shrink:0;color:",h/* .colorTokens.text.success */.I6.text.success,";"),actionsButton:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.flexCenter */.x.flexCenter(),"    margin-top:",h/* .spacing["4"] */.YK["4"],";")};// EXTERNAL MODULE: ./assets/src/js/v3/shared/hoc/withVisibilityControl.tsx
var eI=r(57587);// EXTERNAL MODULE: ./assets/src/js/v3/shared/hooks/usePortalPopover.tsx
var eD=r(84206);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/utils/utils.ts
var eC=r(60297);// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/live-class.webp
const eM=r.p+"js/images/live-class-1a583217.webp";// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/live-class-2x.webp
const eE=r.p+"js/images/live-class-2x-41b3c501.webp";// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
var eT=r(93640);// EXTERNAL MODULE: ./node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js
var eS=r(1896);// EXTERNAL MODULE: ./assets/src/js/v3/shared/molecules/ConfirmationPopover.tsx
var eO=r(57503);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/services/course.ts
var eH=r(23334);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/components/additional/meeting/GoogleMeetForm.tsx
var eN=r(51243);// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/additional/meeting/GoogleMeetCard.tsx
function eF(){var e=(0,f._)(["\n      background-color: ",";\n      [data-visually-hidden] {\n        opacity: 1;\n      }\n      .date-time {\n        background: none;\n      }\n    "]);eF=function t(){return e};return e}var eK=(0,eC/* .getCourseId */.p)();var eL=e=>{var{data:t,topicId:r}=e;var[n,a]=(0,o.useState)(false);var[s,d]=(0,o.useState)(false);var l=(0,eH/* .useDeleteGoogleMeetMutation */.sx)(String(eK),{"post-id":t.ID,"event-id":t.meeting_data.id});var c=(0,o.useRef)(null);var u=(0,o.useRef)(null);var{meeting_data:v,post_title:f}=t;var m=()=>(0,eT._)(function*(){var e=yield l.mutateAsync();if(e.status_code===200){d(false)}})();var g=(0,eS/* .format */.GP)(new Date(v.start_datetime),M/* .DateFormats.day */.UA.day);var _=(0,eS/* .format */.GP)(new Date(v.start_datetime),M/* .DateFormats.month */.UA.month);var y=(0,eS/* .format */.GP)(new Date(v.start_datetime),M/* .DateFormats.year */.UA.year);var[w,x=""]=(0,eS/* .format */.GP)(new Date(v.start_datetime),M/* .DateFormats.hoursMinutes */.UA.hoursMinutes).split(" ");return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ez.card({isPopoverOpen:s||n}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ez.cardTitle,children:f}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ez.cardContent,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("span",{css:ez.inlineContent,children:[(0,p.__)("Start time","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:ez.hyphen}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ez.meetingDateTime,className:"date-time",children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(g," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:"".concat(_," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(y,", ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(w," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:"".concat(x," ")})]})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ez.buttonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{variant:"secondary",size:"small",type:"button",onClick:()=>{window.open(v.meet_link,"_blank","noopener")},children:(0,p.__)("Start Meeting","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:ez.actions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{ref:c,type:"button",css:E/* .styleUtils.actionButton */.x.actionButton,"data-visually-hidden":true,onClick:()=>a(true),children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"edit",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:E/* .styleUtils.actionButton */.x.actionButton,"data-visually-hidden":true,onClick:()=>{d(true)},ref:u,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"delete",width:24,height:24})})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(ed/* ["default"] */.A,{isOpen:n,triggerRef:c,closePopover:()=>a(false),maxWidth:"306px",children:/*#__PURE__*/(0,i/* .jsx */.Y)(eN/* ["default"] */.A,{data:t,topicId:r,onCancel:()=>{a(false)}})}),/*#__PURE__*/(0,i/* .jsx */.Y)(eO/* ["default"] */.A,{isOpen:s,triggerRef:u,closePopover:L/* .noop */.lQ,maxWidth:"258px",title:(0,p.sprintf)((0,p.__)('Delete "%s"',"tutor"),f),message:(0,p.__)("Are you sure you want to delete this meeting? This cannot be undone.","tutor"),animationType:ea/* .AnimationType.slideUp */.J6.slideUp,isLoading:l.isPending,confirmButton:{text:(0,p.__)("Delete","tutor"),variant:"text",isDelete:true},cancelButton:{text:(0,p.__)("Cancel","tutor"),variant:"text"},onConfirmation:()=>(0,eT._)(function*(){yield m()})(),onCancel:()=>{d(false)}})]})};/* export default */const eU=eL;var ez={card:e=>{var{isPopoverOpen:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    padding:",h/* .spacing["8"] */.YK["8"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"],";gap:",h/* .spacing["8"] */.YK["8"],";border-radius:",h/* .borderRadius["6"] */.Vq["6"],";transition:background 0.3s ease;[data-visually-hidden]{opacity:0;transition:opacity 0.3s ease-in-out;}",t&&(0,c/* .css */.AH)(eF(),h/* .colorTokens.background.hover */.I6.background.hover),"    &:hover,&:focus-within{background-color:",h/* .colorTokens.background.hover */.I6.background.hover,";[data-visually-hidden]{opacity:1;}.date-time{background:none;}}",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},cardTitle:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.caption */.I.caption("medium"),"    color:",h/* .colorTokens.text.title */.I6.text.title,";"),cardContent:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),hyphen:/*#__PURE__*/(0,c/* .css */.AH)("width:5px;height:2px;background:",h/* .colorTokens.stroke["default"] */.I6.stroke["default"],";"),inlineContent:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.small */.I.small("regular")," ",E/* .styleUtils.display.flex */.x.display.flex(),"    align-items:center;gap:",h/* .spacing["6"] */.YK["6"],";"),meetingDateTime:/*#__PURE__*/(0,c/* .css */.AH)("padding:",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["6"] */.YK["6"],";border-radius:",h/* .borderRadius["4"] */.Vq["4"],";background:",h/* .colorTokens.background.status.processing */.I6.background.status.processing,";transition:background 0.3s ease-in-out;"),buttonWrapper:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),";margin-top:",h/* .spacing["8"] */.YK["8"],";justify-content:space-between;"),actions:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",h/* .spacing["8"] */.YK["8"],";")};// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/components/additional/meeting/ZoomMeetingForm.tsx
var eP=r(59799);// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/additional/meeting/ZoomMeetingCard.tsx
function eR(){var e=(0,f._)(["\n      background-color: ",";\n      [data-visually-hidden] {\n        opacity: 1;\n      }\n      .date-time {\n        background: none;\n      }\n    "]);eR=function t(){return e};return e}var eW=(0,eC/* .getCourseId */.p)();var ej=e=>{var{data:t,meetingHost:r,topicId:n}=e;var[a,s]=(0,o.useState)(false);var[d,l]=(0,o.useState)(false);var c=(0,eH/* .useDeleteZoomMeetingMutation */.aN)(String(eW));var u=(0,o.useRef)(null);var v=(0,o.useRef)(null);var{ID:f,meeting_data:m,post_title:_,meeting_starts_at:y}=t;var w=()=>(0,eT._)(function*(){var e=yield c.mutateAsync(f);if(e.status_code===200){l(false)}})();var x=(0,eS/* .format */.GP)(new Date(y),M/* .DateFormats.day */.UA.day);var A=(0,eS/* .format */.GP)(new Date(y),M/* .DateFormats.month */.UA.month);var Y=(0,eS/* .format */.GP)(new Date(y),M/* .DateFormats.year */.UA.year);var[k,I=""]=(0,eS/* .format */.GP)(new Date(y),M/* .DateFormats.hoursMinutes */.UA.hoursMinutes).split(" ");return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eq.card({isPopoverOpen:d||a}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eq.cardTitle,children:_}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eq.cardContent,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("span",{css:eq.inlineContent,children:[(0,p.__)("Start time","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eq.hyphen}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eq.meetingDateTime,className:"date-time",children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(x," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:"".concat(A," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(Y,", ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{css:{fontWeight:h/* .fontWeight.semiBold */.Wy.semiBold},children:"".concat(k," ")}),/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:"".concat(I," ")})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:m.id,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eq.inlineContent,children:[(0,p.__)("Meeting Token","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eq.hyphen}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:m.id})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:m.password,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eq.inlineContent,children:[(0,p.__)("Password","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:eq.hyphen}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{children:m.password})]})}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eq.buttonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{variant:"secondary",size:"small",type:"button",onClick:()=>{window.open(m.start_url,"_blank","noopener")},children:(0,p.__)("Start Meeting","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:eq.actions,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("button",{ref:u,type:"button",css:E/* .styleUtils.actionButton */.x.actionButton,"data-visually-hidden":true,onClick:()=>{s(true)},children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"edit",width:24,height:24})}),/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:E/* .styleUtils.actionButton */.x.actionButton,"data-visually-hidden":true,onClick:()=>l(true),ref:v,children:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"delete",width:24,height:24})})]})]})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(ed/* ["default"] */.A,{isOpen:a,triggerRef:u,closePopover:()=>s(false),maxWidth:"306px",children:/*#__PURE__*/(0,i/* .jsx */.Y)(eP/* ["default"] */.A,{data:t,meetingHost:r,topicId:n,onCancel:()=>{s(false)}})}),/*#__PURE__*/(0,i/* .jsx */.Y)(eO/* ["default"] */.A,{isOpen:d,triggerRef:v,closePopover:L/* .noop */.lQ,maxWidth:"258px",title:(0,p.sprintf)((0,p.__)('Delete "%s"',"tutor"),_),message:(0,p.__)("Are you sure you want to delete this meeting? This cannot be undone.","tutor"),animationType:ea/* .AnimationType.slideUp */.J6.slideUp,isLoading:c.isPending,confirmButton:{text:(0,p.__)("Delete","tutor"),variant:"text",isDelete:true},cancelButton:{text:(0,p.__)("Cancel","tutor"),variant:"text"},onConfirmation:()=>(0,eT._)(function*(){yield w()})(),onCancel:()=>{l(false)}})]})};/* export default */const eB=ej;var eq={card:e=>{var{isPopoverOpen:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    padding:",h/* .spacing["8"] */.YK["8"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["12"] */.YK["12"],";gap:",h/* .spacing["8"] */.YK["8"],";border-radius:",h/* .borderRadius["6"] */.Vq["6"],";transition:background 0.3s ease;[data-visually-hidden]{opacity:0;transition:opacity 0.3s ease-in-out;}",t&&(0,c/* .css */.AH)(eR(),h/* .colorTokens.background.hover */.I6.background.hover),"    &:hover,&:focus-within{background-color:",h/* .colorTokens.background.hover */.I6.background.hover,";[data-visually-hidden]{opacity:1;}.date-time{background:none;}}",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{[data-visually-hidden]{opacity:1;}}")},cardTitle:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.caption */.I.caption("medium"),"    color:",h/* .colorTokens.text.title */.I6.text.title,";"),cardContent:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),hyphen:/*#__PURE__*/(0,c/* .css */.AH)("width:5px;height:2px;background:",h/* .colorTokens.stroke["default"] */.I6.stroke["default"],";"),inlineContent:/*#__PURE__*/(0,c/* .css */.AH)(m/* .typography.small */.I.small("regular")," ",E/* .styleUtils.display.flex */.x.display.flex(),"    align-items:center;gap:",h/* .spacing["6"] */.YK["6"],";"),meetingDateTime:/*#__PURE__*/(0,c/* .css */.AH)("padding:",h/* .spacing["4"] */.YK["4"]," ",h/* .spacing["6"] */.YK["6"],";border-radius:",h/* .borderRadius["4"] */.Vq["4"],";background:",h/* .colorTokens.background.status.processing */.I6.background.status.processing,";transition:background 0.3s ease-in-out;"),buttonWrapper:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),";margin-top:",h/* .spacing["8"] */.YK["8"],";justify-content:space-between;"),actions:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",h/* .spacing["8"] */.YK["8"],";")};// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/components/additional/LiveClass.tsx
function eV(){var e=(0,f._)(["\n      border: 1px solid ",";\n    "]);eV=function t(){return e};return e}function eG(){var e=(0,f._)(["\n      border-bottom: 1px solid ",";\n    "]);eG=function t(){return e};return e}function eQ(){var e=(0,f._)(["\n      padding: "," ",";\n    "]);eQ=function t(){return e};return e}var eZ=!!N/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var e$=(0,L/* .isAddonEnabled */.GR)(M/* .Addons.TUTOR_ZOOM_INTEGRATION */.oW.TUTOR_ZOOM_INTEGRATION);var eX=(0,L/* .isAddonEnabled */.GR)(M/* .Addons.TUTOR_GOOGLE_MEET_INTEGRATION */.oW.TUTOR_GOOGLE_MEET_INTEGRATION);var eJ=(0,eC/* .getCourseId */.p)();var e0=()=>{var e=(0,u/* .useQueryClient */.jE)();var t=e.getQueryData(["CourseDetails",eJ]);var r;var n=(r=t===null||t===void 0?void 0:t.zoom_meetings)!==null&&r!==void 0?r:[];var a;var s=(a=t===null||t===void 0?void 0:t.zoom_users)!==null&&a!==void 0?a:{};var d;var l=(d=t===null||t===void 0?void 0:t.google_meet_meetings)!==null&&d!==void 0?d:[];var[v,f]=(0,o.useState)(null);var h=(0,o.useRef)(null);var m=(0,o.useRef)(null);if(eZ&&!e$&&!eX){return null}return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:e2.liveClass,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("span",{css:e2.label,children:[(0,p.__)("Schedule Live Class","tutor"),!eZ&&/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{content:(0,p.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:eZ,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(es/* ["default"] */.A,{size:"small",removeBorder:false,emptyStateImage:eM,emptyStateImage2x:eE,imageAltText:(0,p.__)("Tutor LMS PRO","tutor"),title:(0,p.__)("Bring your courses to life and engage students with interactive live classes.","tutor"),actions:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{size:"small",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"crown",width:24,height:24}),onClick:()=>{window.open(N/* ["default"].TUTOR_PRICING_PAGE */.A.TUTOR_PRICING_PAGE,"_blank","noopener")},children:(0,p.__)("Get Tutor LMS Pro","tutor")})}),children:/*#__PURE__*/(0,i/* .jsxs */.FD)(g/* ["default"] */.A,{when:e$||eX,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:e$,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:e2.meetingsWrapper({hasMeeting:n.length>0}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(F/* ["default"] */.A,{each:n,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:e2.meeting({hasMeeting:n.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(eB,{data:e,meetingHost:s})},e.ID)}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:e2.meetingsFooter({hasMeeting:n.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{"data-cy":"create-zoom-meeting",variant:"secondary",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"zoomColorize",width:24,height:24}),buttonCss:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),onClick:()=>f("zoom"),ref:h,children:(0,p.__)("Create a Zoom Meeting","tutor")})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:eX,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:e2.meetingsWrapper({hasMeeting:l.length>0}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(F/* ["default"] */.A,{each:l,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:e2.meeting({hasMeeting:l.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(eU,{data:e})},e.ID)}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:e2.meetingsFooter({hasMeeting:l.length>0}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{"data-cy":"create-google-meet-link",variant:"secondary",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{name:"googleMeetColorize",width:24,height:24}),buttonCss:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;"),onClick:()=>f("google_meet"),ref:m,children:(0,p.__)("Create a Google Meet Link","tutor")})})]})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(ed/* ["default"] */.A,{triggerRef:h,isOpen:v==="zoom",closePopover:L/* .noop */.lQ,animationType:ea/* .AnimationType.slideUp */.J6.slideUp,closeOnEscape:false,placement:M/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?eD/* .POPOVER_PLACEMENTS.BOTTOM */.zA.BOTTOM:eD/* .POPOVER_PLACEMENTS.ABSOLUTE_CENTER */.zA.ABSOLUTE_CENTER,children:/*#__PURE__*/(0,i/* .jsx */.Y)(eP/* ["default"] */.A,{data:null,meetingHost:s,onCancel:()=>{f(null)}})}),/*#__PURE__*/(0,i/* .jsx */.Y)(ed/* ["default"] */.A,{triggerRef:m,isOpen:v==="google_meet",closePopover:L/* .noop */.lQ,animationType:ea/* .AnimationType.slideUp */.J6.slideUp,closeOnEscape:false,placement:M/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile?eD/* .POPOVER_PLACEMENTS.BOTTOM */.zA.BOTTOM:eD/* .POPOVER_PLACEMENTS.ABSOLUTE_CENTER */.zA.ABSOLUTE_CENTER,arrow:false,children:/*#__PURE__*/(0,i/* .jsx */.Y)(eN/* ["default"] */.A,{data:null,onCancel:()=>{f(null)}})})]})};/* export default */const e1=(0,eI/* .withVisibilityControl */.M)(e0);var e2={label:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.inlineFlex */.x.display.inlineFlex(),"    align-items:center;gap:",h/* .spacing["4"] */.YK["4"],";",m/* .typography.body */.I.body(),"    color:",h/* .colorTokens.text.title */.I6.text.title,";"),liveClass:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["8"] */.YK["8"],";"),meetingsWrapper:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    background-color:",h/* .colorTokens.background.white */.I6.background.white,";border-radius:",h/* .borderRadius.card */.Vq.card,";",t&&(0,c/* .css */.AH)(eV(),h/* .colorTokens.stroke["default"] */.I6.stroke["default"]))},meeting:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("padding:",h/* .spacing["8"] */.YK["8"]," ",h/* .spacing["8"] */.YK["8"]," ",h/* .spacing["12"] */.YK["12"]," ",h/* .spacing["8"] */.YK["8"],";",t&&(0,c/* .css */.AH)(eG(),h/* .colorTokens.stroke.divider */.I6.stroke.divider))},meetingsFooter:e=>{var{hasMeeting:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("width:100%;",t&&(0,c/* .css */.AH)(eQ(),h/* .spacing["12"] */.YK["12"],h/* .spacing["8"] */.YK["8"]))}};// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/components/CourseBuilderSlot.tsx + 3 modules
var e4=r(89041);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/components/layouts/CanvasHead.tsx
var e6=r(6267);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/components/layouts/Navigator.tsx
var e5=r(45934);// EXTERNAL MODULE: ./assets/src/js/v3/entries/course-builder/config/route-configs.ts + 1 modules
var e3=r(76168);// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/attachments.webp
const e9=r.p+"js/images/attachments-e63eb8d8.webp";// CONCATENATED MODULE: ./assets/src/js/v3/public/images/pro-placeholders/attachments-2x.webp
const e8=r.p+"js/images/attachments-2x-9f304876.webp";// CONCATENATED MODULE: ./assets/src/js/v3/entries/course-builder/pages/Additional.tsx
var e7=!!N/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var te=(0,eC/* .getCourseId */.p)();var tt=(0,L/* .isAddonEnabled */.GR)(M/* .Addons.TUTOR_PREREQUISITES */.oW.TUTOR_PREREQUISITES);var tr=(0,L/* .isAddonEnabled */.GR)(M/* .Addons.TUTOR_COURSE_ATTACHMENTS */.oW.TUTOR_COURSE_ATTACHMENTS);var tn=(0,L/* .isAddonEnabled */.GR)(M/* .Addons.TUTOR_CERTIFICATE */.oW.TUTOR_CERTIFICATE);var ta=()=>{var e=(0,l/* .useNavigate */.Zp)();(0,o.useEffect)(()=>{if(!te){e(e3/* .CourseBuilderRouteConfigs.Home.buildLink */.P.Home.buildLink(),{replace:true})}},[e]);var t=(0,d/* .useFormContext */.xW)();var r=(0,u/* .useQueryClient */.jE)();var s=(0,v/* .useIsFetching */.C)({queryKey:["CourseDetails",te]});var c=(0,eb/* ["default"] */.A)(M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS);var f=(0,eb/* ["default"] */.A)(M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE);var h=(0,eb/* ["default"] */.A)(M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.qP.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION);var m=(0,eb/* ["default"] */.A)(M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES);var b=(0,eb/* ["default"] */.A)(M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS);var _=(0,eb/* ["default"] */.A)(M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.CERTIFICATES */.qP.COURSE_BUILDER.ADDITIONAL.CERTIFICATES);var y=(0,eb/* ["default"] */.A)(M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.ATTACHMENTS */.qP.COURSE_BUILDER.ADDITIONAL.ATTACHMENTS);var w=r.getQueryData(["CourseDetails",te]);var k=(0,e_/* .useCourseListQuery */.TM)({params:{exclude:[String(te)],limit:-1},isEnabled:!!tt&&!s});if(!te){return null}if(!te){return null}var C=t.watch("tutor_course_certificate_template");var E;var T=(E=w===null||w===void 0?void 0:w.course_certificates_templates)!==null&&E!==void 0?E:[];var S=c||f||h||m||b;var O=S||!e7||_&&tn;var H=!e7||[M/* .Addons.TUTOR_PREREQUISITES */.oW.TUTOR_PREREQUISITES,M/* .Addons.TUTOR_COURSE_ATTACHMENTS */.oW.TUTOR_COURSE_ATTACHMENTS,M/* .Addons.TUTOR_ZOOM_INTEGRATION */.oW.TUTOR_ZOOM_INTEGRATION,M/* .Addons.TUTOR_GOOGLE_MEET_INTEGRATION */.oW.TUTOR_GOOGLE_MEET_INTEGRATION].some(L/* .isAddonEnabled */.GR);var N=e=>{t.setValue("tutor_course_certificate_template",e,{shouldDirty:true})};var F=()=>/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.sidebarContent,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e7||tt,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.label,children:[(0,p.__)("Course Prerequisites","tutor"),!e7&&/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{content:(0,p.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:e7&&tt,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(eY,{}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{name:"course_prerequisites",control:t.control,render:e=>{var t;return/*#__PURE__*/(0,i/* .jsx */.Y)(ep,(0,a._)((0,n._)({},e),{placeholder:(0,p.__)("Search courses for prerequisites","tutor"),options:((t=k.data)===null||t===void 0?void 0:t.results)||[],isSearchable:true,loading:k.isLoading||!!s&&!e.field.value}))}})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e7||y&&tr,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.label,children:[(0,p.__)("Attachments","tutor"),!e7&&/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{content:(0,p.__)("Pro","tutor")})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:e7&&tr,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e7,children:/*#__PURE__*/(0,i/* .jsx */.Y)(es/* ["default"] */.A,{size:"small",removeBorder:false,emptyStateImage:e9,emptyStateImage2x:e8,// prettier-ignore
    title:(0,p.__)("Provide additional resources like downloadable files and reference materials.","tutor")})}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{name:"course_attachments",control:t.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eh/* ["default"] */.A,(0,a._)((0,n._)({},e),{buttonText:(0,p.__)("Upload Attachment","tutor"),selectMultiple:true}))})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(e1,{visibilityKey:M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.SCHEDULE_LIVE_CLASS */.qP.COURSE_BUILDER.ADDITIONAL.SCHEDULE_LIVE_CLASS}),/*#__PURE__*/(0,i/* .jsx */.Y)(e4/* ["default"] */.A,{section:"Additional.bottom_of_sidebar",form:t})]});return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.wrapper({showSidebar:H&&O}),children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.leftSide,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(e6/* ["default"] */.A,{title:(0,p.__)("Additional","tutor"),backUrl:"/curriculum"}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:O,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.formWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:S,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(x,{bordered:true,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.titleAndSub,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(A,{children:(0,p.__)("Overview","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)(Y,{children:(0,p.__)("Provide essential course information to attract and inform potential students","tutor")})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.fieldsWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{name:"course_benefits",control:t.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eg/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:(0,p.__)("What Will I Learn?","tutor"),placeholder:(0,p.__)("Define the key takeaways from this course (list one benefit per line)","tutor"),rows:2,enableResize:true,loading:!!s&&!e.field.value,visibilityKey:M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_BENEFITS}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{name:"course_target_audience",control:t.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eg/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:(0,p.__)("Target Audience","tutor"),// prettier-ignore
    placeholder:(0,p.__)("Specify the target audience that will benefit the most from the course. (One Line Per target audience)","tutor"),rows:2,enableResize:true,loading:!!s&&!e.field.value,visibilityKey:M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_TARGET_AUDIENCE}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:h,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.totalCourseDuration,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{name:"course_duration_hours",control:t.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(em/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"number",label:(0,p.__)("Total Course Duration","tutor"),placeholder:"0",contentPosition:"right",content:(0,p.__)("hour(s)","tutor"),loading:!!s&&!e.field.value,visibilityKey:M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.qP.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{name:"course_duration_minutes",control:t.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(em/* ["default"] */.A,(0,a._)((0,n._)({},e),{type:"number",placeholder:"0",contentPosition:"right",content:(0,p.__)("min(s)","tutor"),loading:!!s&&!e.field.value,visibilityKey:M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION */.qP.COURSE_BUILDER.ADDITIONAL.TOTAL_COURSE_DURATION}))})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{name:"course_material_includes",control:t.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eg/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:(0,p.__)("Materials Included","tutor"),// prettier-ignore
    placeholder:(0,p.__)("A list of assets you will be providing for the students in this course (One Per Line)","tutor"),rows:4,enableResize:true,loading:!!s&&!e.field.value,visibilityKey:M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_MATERIALS_INCLUDES}))}),/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .Controller */.xI,{name:"course_requirements",control:t.control,render:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(eg/* ["default"] */.A,(0,a._)((0,n._)({},e),{label:(0,p.__)("Requirements/Instructions","tutor"),// prettier-ignore
    placeholder:(0,p.__)("Additional requirements or special instructions for the students (One Per Line)","tutor"),rows:2,enableResize:true,loading:!!s&&!e.field.value,visibilityKey:M/* .VisibilityControlKeys.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS */.qP.COURSE_BUILDER.ADDITIONAL.COURSE_REQUIREMENTS}))})]})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e7||_&&tn,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(x,{bordered:true,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:to.titleAndSub,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)(A,{css:to.titleWithBadge,children:[(0,p.__)("Certificate","tutor"),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!e7,children:/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{content:(0,p.__)("Pro","tutor")})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:e7&&tn,children:/*#__PURE__*/(0,i/* .jsx */.Y)(Y,{children:(0,p.__)("Select a certificate to award your learners.","tutor")})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!s,fallback:/*#__PURE__*/(0,i/* .jsx */.Y)(I/* .LoadingSection */.YE,{}),children:/*#__PURE__*/(0,i/* .jsx */.Y)(et,{isSidebarVisible:H,currentCertificateKey:C,onSelect:N,certificateTemplates:T})})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(e4/* ["default"] */.A,{section:"Additional.after_certificates",form:t})]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!O&&H,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:to.formWrapper,children:/*#__PURE__*/(0,i/* .jsx */.Y)(F,{})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:M/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,i/* .jsx */.Y)(e5/* ["default"] */.A,{})})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:H&&O,children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:to.sidebar,children:/*#__PURE__*/(0,i/* .jsx */.Y)(F,{})})}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{when:!M/* .CURRENT_VIEWPORT.isAboveTablet */.vN.isAboveTablet,children:/*#__PURE__*/(0,i/* .jsx */.Y)(e5/* ["default"] */.A,{})})]})};/* export default */const ti=ta;var to={wrapper:e=>{var{showSidebar:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:",t?"1fr 338px":"1fr",";width:100%;",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{grid-template-columns:1fr;gap:",h/* .spacing["24"] */.YK["24"],";}")},leftSide:/*#__PURE__*/(0,c/* .css */.AH)("padding:",h/* .spacing["32"] */.YK["32"]," ",h/* .spacing["32"] */.YK["32"]," ",h/* .spacing["32"] */.YK["32"]," 0;",E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["32"] */.YK["32"],";",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding:0;padding-top:",h/* .spacing["16"] */.YK["16"],";gap:",h/* .spacing["16"] */.YK["16"],";}"),formWrapper:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["24"] */.YK["24"],";"),titleAndSub:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["4"] */.YK["4"],";margin-bottom:",h/* .spacing["20"] */.YK["20"],";"),titleWithBadge:/*#__PURE__*/(0,c/* .css */.AH)("span{",E/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",h/* .spacing["4"] */.YK["4"],";}"),fieldsWrapper:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["24"] */.YK["24"],";"),totalCourseDuration:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex(),"    align-items:end;gap:",h/* .spacing["8"] */.YK["8"],";& > div{flex:1;}"),sidebar:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    padding:",h/* .spacing["32"] */.YK["32"]," 0 ",h/* .spacing["32"] */.YK["32"]," ",h/* .spacing["32"] */.YK["32"],";border-left:1px solid ",h/* .colorTokens.stroke.divider */.I6.stroke.divider,";min-height:calc(100vh - (",h/* .headerHeight */.$A,"px + ",h/* .footerHeight */.P3,"px));gap:",h/* .spacing["16"] */.YK["16"],";",h/* .Breakpoint.smallTablet */.EA.smallTablet,"{padding:0;padding-top:",h/* .spacing["24"] */.YK["24"],";border-left:none;border-top:1px solid ",h/* .colorTokens.stroke.divider */.I6.stroke.divider,";}"),label:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.inlineFlex */.x.display.inlineFlex(),"    align-items:center;gap:",h/* .spacing["4"] */.YK["4"],";",m/* .typography.body */.I.body("medium"),"    color:",h/* .colorTokens.text.title */.I6.text.title,";margin-bottom:",h/* .spacing["8"] */.YK["8"],";"),sidebarContent:/*#__PURE__*/(0,c/* .css */.AH)(E/* .styleUtils.display.flex */.x.display.flex("column"),"    gap:",h/* .spacing["16"] */.YK["16"],";")}},24628:function(e,t,r){r.d(t,{$2:()=>H,$n:()=>x,Cx:()=>Y,Id:()=>E,K3:()=>I,OJ:()=>z,R6:()=>h,SS:()=>R,V1:()=>y,VT:()=>C,V_:()=>F,_u:()=>j,gK:()=>L,me:()=>b,pR:()=>S,sC:()=>m});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(37586);/* import */var o=r(92965);/* import */var s=r(32047);/* import */var d=r(12470);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(40925);/* import */var u=r(19393);/* import */var v=r(77239);/* import */var p=r(94812);/* import */var f=r(33231);var h=(e,t,r,i,o)=>{var s,d;var l;return(0,n._)((0,a._)((0,n._)((0,a._)((0,n._)((0,a._)((0,n._)({},t&&{lesson_id:t}),{topic_id:r,title:e.title,description:e.description,thumbnail_id:(l=(s=e.thumbnail)===null||s===void 0?void 0:s.id)!==null&&l!==void 0?l:null}),e.video?Object.fromEntries(Object.entries(e.video).map(t=>{var[r,n]=t;var a;return["video[".concat(r,"]"),r==="source"&&!n?"-1":r==="poster_url"&&!((a=e.video)===null||a===void 0?void 0:a.poster)?"":n]})):{}),{"video[runtime][hours]":e.duration.hour||0,"video[runtime][minutes]":e.duration.minute||0,"video[runtime][seconds]":e.duration.second||0}),(0,f/* .isAddonEnabled */.GR)(u/* .Addons.TUTOR_COURSE_PREVIEW */.oW.TUTOR_COURSE_PREVIEW)&&{_is_preview:e.lesson_preview?1:0}),{tutor_attachments:(e.tutor_attachments||[]).map(e=>e.id)}),(0,f/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="unlock_by_date"&&{"content_drip_settings[unlock_date]":e.content_drip_settings.unlock_date||""},(0,f/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="specific_days"&&{"content_drip_settings[after_xdays_of_enroll]":e.content_drip_settings.after_xdays_of_enroll||"0"},(0,f/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="after_finishing_prerequisites"&&{"content_drip_settings[prerequisites]":((d=e.content_drip_settings.prerequisites)===null||d===void 0?void 0:d.length)?e.content_drip_settings.prerequisites:""},Object.fromEntries(o.map(t=>{return[t,e[t]||""]})))};var m=(e,t,r,i,o)=>{var s;return(0,n._)((0,a._)((0,n._)({},t&&{assignment_id:t}),{topic_id:r,title:e.title,summary:e.summary,attachments:(e.attachments||[]).map(e=>e.id),"assignment_option[time_duration][time]":e.time_duration.time,"assignment_option[time_duration][value]":e.time_duration.value,"assignment_option[deadline_from_start]":e.deadline_from_start?"1":"0","assignment_option[total_mark]":e.total_mark,"assignment_option[pass_mark]":e.pass_mark,"assignment_option[upload_files_limit]":e.upload_files_limit,"assignment_option[upload_file_size_limit]":e.upload_file_size_limit,"assignment_option[is_retry_allowed]":e.is_retry_allowed?"1":"0"}),e.is_retry_allowed&&{"assignment_option[attempts_allowed]":e.attempts_allowed},(0,f/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="unlock_by_date"&&{"content_drip_settings[unlock_date]":e.content_drip_settings.unlock_date||""},(0,f/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="specific_days"&&{"content_drip_settings[after_xdays_of_enroll]":e.content_drip_settings.after_xdays_of_enroll||"0"},(0,f/* .isAddonEnabled */.GR)(u/* .Addons.CONTENT_DRIP */.oW.CONTENT_DRIP)&&i==="after_finishing_prerequisites"&&{"content_drip_settings[prerequisites]":((s=e.content_drip_settings.prerequisites)===null||s===void 0?void 0:s.length)?e.content_drip_settings.prerequisites:""},Object.fromEntries(o.map(t=>{return[t,e[t]||""]})))};var g=e=>{return v/* .wpAjaxInstance.get */.b.get(p/* ["default"].GET_COURSE_CONTENTS */.A.GET_COURSE_CONTENTS,{params:{course_id:e}})};var b=e=>{return(0,i/* .useQuery */.I)({queryKey:["Topic",e],queryFn:()=>g(e).then(e=>{return e.data.map(e=>(0,a._)((0,n._)({},e),{contents:e.contents.map(e=>(0,a._)((0,n._)({},e),{post_type:e.quiz_type?"tutor_h5p_quiz":e.post_type}))}))}),enabled:!!e})};var _=e=>{return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].SAVE_TOPIC */.A.SAVE_TOPIC,e)};var y=()=>{var e=(0,o/* .useQueryClient */.jE)();var{showToast:t}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:_,onSuccess:r=>{if(r.data){t({message:(0,d.__)("Topic saved successfully","tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,f/* .convertToErrorMessage */.EL)(e)})}})};var w=e=>{return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].DELETE_TOPIC */.A.DELETE_TOPIC,{topic_id:e})};var x=e=>{var t=(0,o/* .useQueryClient */.jE)();var{showToast:r}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:w,onSuccess:(n,a)=>{if(n.status_code===200){r({message:(0,d.__)(n.message,"tutor"),type:"success"});t.setQueryData(["Topic",e],e=>{var t=JSON.parse(JSON.stringify(e));return t.filter(e=>String(e.id)!==String(a))})}},onError:e=>{r({type:"danger",message:(0,f/* .convertToErrorMessage */.EL)(e)});t.invalidateQueries({queryKey:["Topic"]})}})};var A=(e,t)=>{return v/* .wpAjaxInstance.get */.b.get(p/* ["default"].GET_LESSON_DETAILS */.A.GET_LESSON_DETAILS,{params:{topic_id:t,lesson_id:e}})};var Y=(e,t)=>{return(0,i/* .useQuery */.I)({queryKey:["Lesson",e,t],queryFn:()=>A(e,t).then(e=>e.data),enabled:!!e&&!!t})};var k=e=>{return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].SAVE_LESSON */.A.SAVE_LESSON,e)};var I=e=>{var t=(0,o/* .useQueryClient */.jE)();var{showToast:r}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:e=>k(e),onSuccess:(n,a)=>{if(n.data){t.invalidateQueries({queryKey:["Topic",e]});t.invalidateQueries({queryKey:["Lesson",a.lesson_id,a.topic_id]});r({message:(0,d.__)("Lesson saved successfully","tutor"),type:"success"})}},onError:e=>{r({type:"danger",message:(0,f/* .convertToErrorMessage */.EL)(e)})}})};var D=e=>{return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].DELETE_TOPIC_CONTENT */.A.DELETE_TOPIC_CONTENT,{lesson_id:e})};var C=()=>{var e=(0,o/* .useQueryClient */.jE)();var{showToast:t}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:D,onSuccess:r=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,f/* .convertToErrorMessage */.EL)(e)})}})};var M=e=>{return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].UPDATE_COURSE_CONTENT_ORDER */.A.UPDATE_COURSE_CONTENT_ORDER,e)};var E=()=>{var{showToast:e}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:M,onError:t=>{e({type:"danger",message:(0,f/* .convertToErrorMessage */.EL)(t)})}})};var T=(e,t)=>{return v/* .wpAjaxInstance.get */.b.get(p/* ["default"].GET_ASSIGNMENT_DETAILS */.A.GET_ASSIGNMENT_DETAILS,{params:{topic_id:t,assignment_id:e}})};var S=(e,t)=>{return(0,i/* .useQuery */.I)({queryKey:["Assignment",e,t],queryFn:()=>T(e,t).then(e=>e.data),enabled:!!e&&!!t})};var O=e=>{return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].SAVE_ASSIGNMENT */.A.SAVE_ASSIGNMENT,e)};var H=e=>{var t=(0,o/* .useQueryClient */.jE)();var{showToast:r}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:e=>O(e),onSuccess:(n,a)=>{if(n.status_code===200||n.status_code===201){t.invalidateQueries({queryKey:["Topic",Number(e)]});t.invalidateQueries({queryKey:["Assignment",a.assignment_id,a.topic_id]});r({message:(0,d.__)(n.message,"tutor"),type:"success"})}},onError:e=>{r({type:"danger",message:(0,f/* .convertToErrorMessage */.EL)(e)})}})};var N=e=>{return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].DUPLICATE_CONTENT */.A.DUPLICATE_CONTENT,e)};/**
 *
 * @param quizId pass when duplicating 'answer'
 * @returns useMutation
 */var F=e=>{var t=(0,o/* .useQueryClient */.jE)();var{showToast:r}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:N,onSuccess:(n,a)=>{if(n.status_code===200||n.status_code===201){r({message:(0,d.__)(n.message,"tutor"),type:"success"});if(["lesson","assignment","quiz","topic"].includes(a.content_type)){t.invalidateQueries({queryKey:["Topic"]});return}if(["question"].includes(a.content_type)){t.invalidateQueries({queryKey:["Quiz",e]});return}}},onError:(n,a)=>{r({message:(0,f/* .convertToErrorMessage */.EL)(n),type:"danger"});if(["answer"].includes(a.content_type)){t.invalidateQueries({queryKey:["Quiz",e]})}}})};var K=(e,t)=>{return v/* .wpAjaxInstance.get */.b.get(p/* ["default"].GET_ZOOM_MEETING_DETAILS */.A.GET_ZOOM_MEETING_DETAILS,{params:{meeting_id:e,topic_id:t}})};var L=(e,t)=>{return(0,i/* .useQuery */.I)({queryKey:["ZoomMeeting",e],queryFn:()=>K(e,t).then(e=>e.data),enabled:!!e&&!!t})};var U=(e,t)=>{return v/* .wpAjaxInstance.get */.b.get(p/* ["default"].GET_GOOGLE_MEET_DETAILS */.A.GET_GOOGLE_MEET_DETAILS,{params:{meeting_id:e,topic_id:t}})};var z=(e,t)=>{return(0,i/* .useQuery */.I)({queryKey:["GoogleMeet",e],queryFn:()=>U(e,t).then(e=>e.data),enabled:!!e&&!!t})};var P=e=>{return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].ADD_CONTENT_BANK_CONTENT_TO_COURSE */.A.ADD_CONTENT_BANK_CONTENT_TO_COURSE,e)};var R=()=>{var e=(0,o/* .useQueryClient */.jE)();var{showToast:t}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:P,onSuccess:(r,n)=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic",n.course_id]})}},onError:e=>{t({type:"danger",message:(0,f/* .convertToErrorMessage */.EL)(e)})}})};var W=e=>{var{topicId:t,contentId:r}=e;return v/* .wpAjaxInstance.post */.b.post(p/* ["default"].DELETE_CONTENT_BANK_CONTENT_FROM_COURSE */.A.DELETE_CONTENT_BANK_CONTENT_FROM_COURSE,{topic_id:t,content_id:r})};var j=()=>{var e=(0,o/* .useQueryClient */.jE)();var{showToast:t}=(0,c/* .useToast */.d)();return(0,s/* .useMutation */.n)({mutationFn:W,onSuccess:r=>{if(r.status_code===200){t({message:(0,d.__)(r.message,"tutor"),type:"success"});e.invalidateQueries({queryKey:["Topic"]})}},onError:e=>{t({type:"danger",message:(0,f/* .convertToErrorMessage */.EL)(e)})}})}},81253:function(e,t,r){r.d(t,{A:()=>w});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(60599);/* import */var o=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(42771);/* import */var c=r(13448);/* import */var u=r(81547);/* import */var v=r(33231);function p(){var e=(0,i._)(["\n      cursor: not-allowed;\n    "]);p=function t(){return e};return e}function f(){var e=(0,i._)(["\n      color: ",";\n    "]);f=function t(){return e};return e}function h(){var e=(0,i._)(["\n        margin-right: ",";\n      "]);h=function t(){return e};return e}function m(){var e=(0,i._)(["\n        background-color: ",";\n      "]);m=function t(){return e};return e}function g(){var e=(0,i._)(["\n      & + span::before {\n        background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='2' fill='none'%3E%3Crect width='10' height='1.5' y='.25' fill='%23fff' rx='.75'/%3E%3C/svg%3E\");\n        background-repeat: no-repeat;\n        background-size: 10px;\n        background-position: center center;\n        background-color: ",";\n        border: 0.5px solid ",";\n      }\n    "]);g=function t(){return e};return e}function b(){var e=(0,i._)(["\n      & + span {\n        cursor: not-allowed;\n\n        &::before {\n          border-color: ",";\n        }\n      }\n    "]);b=function t(){return e};return e}var _=/*#__PURE__*/d().forwardRef((e,t)=>{var{id:r=(0,v/* .nanoid */.Ak)(),name:i,labelCss:s,inputCss:l,label:c="",checked:u,value:p,disabled:f=false,onChange:h,onBlur:m,isIndeterminate:g=false}=e;var b=e=>{h===null||h===void 0?void 0:h(!g?e.target.checked:true,e)};var _=e=>{if(typeof e==="string"){return e}if(typeof e==="number"||typeof e==="boolean"||e===null){return String(e)}if(e===undefined){return""}if(/*#__PURE__*/d().isValidElement(e)){var t;var r=(t=e.props)===null||t===void 0?void 0:t.children;if(typeof r==="string"){return r}if(Array.isArray(r)){return r.map(e=>typeof e==="string"?e:"").filter(Boolean).join(" ")}}return""};return/*#__PURE__*/(0,o/* .jsxs */.FD)("label",{htmlFor:r,css:[y.container({disabled:f}),s],children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,a._)((0,n._)({},e),{ref:t,id:r,name:i,type:"checkbox",value:p,checked:!!u,disabled:f,"aria-invalid":e["aria-invalid"],onChange:b,onBlur:m,css:[l,y.checkbox({label:!!c,isIndeterminate:g,disabled:f})]})),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{}),/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:[y.label({isDisabled:f}),s],title:_(c),children:c})]})});var y={container:e=>{var{disabled:t=false}=e;return/*#__PURE__*/(0,l/* .css */.AH)("position:relative;display:flex;align-items:center;cursor:pointer;user-select:none;color:",c/* .colorTokens.text.title */.I6.text.title,";",t&&(0,l/* .css */.AH)(p()))},label:e=>{var{isDisabled:t=false}=e;return/*#__PURE__*/(0,l/* .css */.AH)(u/* .typography.caption */.I.caption(),";color:",c/* .colorTokens.text.title */.I6.text.title,";",t&&(0,l/* .css */.AH)(f(),c/* .colorTokens.text.disable */.I6.text.disable))},checkbox:e=>{var{label:t,isIndeterminate:r,disabled:n}=e;return/*#__PURE__*/(0,l/* .css */.AH)("position:absolute;display:none !important;opacity:0 !important;height:0;width:0;& + span{position:relative;cursor:pointer;display:inline-flex;align-items:center;",t&&(0,l/* .css */.AH)(h(),c/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';background-color:",c/* .colorTokens.background.white */.I6.background.white,";border:1px solid ",c/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:3px;width:20px;height:20px;}&:checked + span::before{background-image:url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDEyIDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjE2NTM0NCA0Ljg5OTQ2QzAuMTEzMjM1IDQuODQ0OTcgMC4wNzE3MzQ2IDQuNzgxMTUgMC4wNDI5ODg3IDQuNzExM0MtMC4wMTQzMjk2IDQuNTU1NjQgLTAuMDE0MzI5NiA0LjM4NDQ5IDAuMDQyOTg4NyA0LjIyODg0QzAuMDcxMTU0OSA0LjE1ODY4IDAuMTEyNzIzIDQuMDk0NzUgMC4xNjUzNDQgNC4wNDA2OEwxLjAzMzgyIDMuMjAzNkMxLjA4NDkzIDMuMTQzNCAxLjE0ODkgMy4wOTU1NyAxLjIyMDk2IDMuMDYzNjlDMS4yOTAzMiAzLjAzMjEzIDEuMzY1NTQgMy4wMTU2OSAxLjQ0MTY3IDMuMDE1NDRDMS41MjQxOCAzLjAxMzgzIDEuNjA2MDUgMy4wMzAyOSAxLjY4MTU5IDMuMDYzNjlDMS43NTYyNiAzLjA5NzA3IDEuODIzODYgMy4xNDQ1NyAxLjg4MDcxIDMuMjAzNkw0LjUwMDU1IDUuODQyNjhMMTAuMTI0MSAwLjE4ODIwNUMxMC4xNzk0IDAuMTI5NTQ0IDEwLjI0NTQgMC4wODIwNTQyIDEwLjMxODQgMC4wNDgyOTA4QzEwLjM5NDEgMC4wMTU0NjYxIDEwLjQ3NTkgLTAuMDAwOTcyMDU3IDEwLjU1ODMgNC40NDIyOGUtMDVDMTAuNjM1NyAwLjAwMDQ3NTMxOCAxMC43MTIxIDAuMDE3NDc5NSAxMC43ODI0IDAuMDQ5OTI0MkMxMC44NTI3IDAuMDgyMzY4OSAxMC45MTU0IDAuMTI5NTA5IDEwLjk2NjIgMC4xODgyMDVMMTEuODM0NyAxLjAzNzM0QzExLjg4NzMgMS4wOTE0MiAxMS45Mjg4IDEuMTU1MzQgMTEuOTU3IDEuMjI1NUMxMi4wMTQzIDEuMzgxMTYgMTIuMDE0MyAxLjU1MjMxIDExLjk1NyAxLjcwNzk2QzExLjkyODMgMS43Nzc4MSAxMS44ODY4IDEuODQxNjMgMTEuODM0NyAxLjg5NjEzTDQuOTIyOCA4LjgwOTgyQzQuODcxMjkgOC44NzAyMSA0LjgwNzQ3IDguOTE4NzUgNC43MzU2NiA4Ljk1MjE1QzQuNTgyMDIgOS4wMTU5NSA0LjQwOTQ5IDkuMDE1OTUgNC4yNTU4NCA4Ljk1MjE1QzQuMTg0MDQgOC45MTg3NSA0LjEyMDIyIDguODcwMjEgNC4wNjg3MSA4LjgwOTgyTDAuMTY1MzQ0IDQuODk5NDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K');background-repeat:no-repeat;background-size:10px 10px;background-position:center center;border-color:transparent;background-color:",c/* .colorTokens.icon.brand */.I6.icon.brand,";border-radius:",c/* .borderRadius["4"] */.Vq["4"],";",n&&(0,l/* .css */.AH)(m(),c/* .colorTokens.icon.disable["default"] */.I6.icon.disable["default"]),"}",r&&(0,l/* .css */.AH)(g(),c/* .colorTokens.brand.blue */.I6.brand.blue,c/* .colorTokens.stroke.white */.I6.stroke.white)," ",n&&(0,l/* .css */.AH)(b(),c/* .colorTokens.stroke.disable */.I6.stroke.disable),"    &:focus-visible{& + span{border-radius:",c/* .borderRadius["2"] */.Vq["2"],";outline:2px solid ",c/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")}};/* export default */const w=_},12427:function(e,t,r){r.d(t,{A:()=>y});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(42771);/* import */var o=r(12470);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(18853);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(25074);/* import */var u=r(46225);/* import */var v=r(13448);/* import */var p=r(81547);/* import */var f=r(59189);/* import */var h=r(56705);function m(){var e=(0,n._)(["\n      width: 168px;\n    "]);m=function t(){return e};return e}function g(){var e=(0,n._)(["\n      width: 168px;\n    "]);g=function t(){return e};return e}var b={large:"regular",regular:"small",small:"small"};var _=e=>{var{buttonText:t=(0,o.__)("Upload Media","tutor"),infoText:r,size:n="regular",value:s,uploadHandler:d,clearHandler:l,emptyImageCss:p,previewImageCss:m,overlayCss:g,replaceButtonText:_,loading:y,disabled:x=false,isClearAble:A=true}=e;return/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:!y,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:w.emptyMedia({size:n,isDisabled:x}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(h/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:s===null||s===void 0?void 0:s.url,fallback:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{"aria-disabled":x,css:[w.emptyMedia({size:n,isDisabled:x}),p],onClick:e=>{e.stopPropagation();if(x){return}d()},onKeyDown:e=>{if(!x&&e.key==="Enter"){e.preventDefault();d()}},children:[/*#__PURE__*/(0,a/* .jsx */.Y)(u/* ["default"] */.A,{name:"addImage",width:32,height:32}),/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,size:b[n],variant:"secondary",buttonContentCss:w.buttonText,"data-cy":"upload-media",children:t}),/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:r,children:/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:w.infoTexts,children:r})})]}),children:e=>{return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.previewWrapper({size:n,isDisabled:x}),m],"data-cy":"media-preview",children:[/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:e,alt:s===null||s===void 0?void 0:s.title,css:w.imagePreview}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[w.hoverPreview,g],"data-hover-buttons-wrapper":true,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,variant:"secondary",size:b[n],buttonCss:/*#__PURE__*/(0,i/* .css */.AH)("margin-top:",A&&v/* .spacing["16"] */.YK["16"],";"),onClick:e=>{e.stopPropagation();d()},"data-cy":"replace-media",children:_||(0,o.__)("Replace Image","tutor")}),/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:A,children:/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{disabled:x,variant:"text",size:b[n],onClick:e=>{e.stopPropagation();l()},"data-cy":"clear-media",children:(0,o.__)("Remove","tutor")})})]})]})}})})};/* export default */const y=_;var w={emptyMedia:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,i/* .css */.AH)("width:100%;height:168px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",v/* .spacing["8"] */.YK["8"],";border:1px dashed ",v/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",v/* .borderRadius["8"] */.Vq["8"],";background-color:",v/* .colorTokens.bg.white */.I6.bg.white,";overflow:hidden;cursor:",r?"not-allowed":"pointer",";",t==="small"&&(0,i/* .css */.AH)(m()),"    svg{color:",v/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover svg{color:",!r&&v/* .colorTokens.brand.blue */.I6.brand.blue,";}")},buttonText:/*#__PURE__*/(0,i/* .css */.AH)("color:",v/* .colorTokens.text.brand */.I6.text.brand,";"),infoTexts:/*#__PURE__*/(0,i/* .css */.AH)(p/* .typography.tiny */.I.tiny(),";color:",v/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;"),previewWrapper:e=>{var{size:t,isDisabled:r}=e;return/*#__PURE__*/(0,i/* .css */.AH)("width:100%;height:168px;border:1px solid ",v/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",v/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;position:relative;background-color:",v/* .colorTokens.bg.white */.I6.bg.white,";",t==="small"&&(0,i/* .css */.AH)(g()),"    &:hover{[data-hover-buttons-wrapper]{display:",r?"none":"flex",";opacity:",r?0:1,";}}")},imagePreview:/*#__PURE__*/(0,i/* .css */.AH)("height:100%;width:100%;object-fit:contain;"),hoverPreview:/*#__PURE__*/(0,i/* .css */.AH)("display:flex;flex-direction:column;justify-content:center;align-items:center;gap:",v/* .spacing["8"] */.YK["8"],";opacity:0;position:absolute;inset:0;background-color:",l()(v/* .colorTokens.color.black.main */.I6.color.black.main,.6),";button:first-of-type{box-shadow:",v/* .shadow.button */.r7.button,";}button:last-of-type:not(:only-of-type){color:",v/* .colorTokens.text.white */.I6.text.white,";box-shadow:none;}")}},84492:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(42771);/* import */var o=r(13448);/* import */var s=r(59189);/* import */var d=r(49842);/* import */var l=r(46225);function c(){var e=(0,n._)(["\n      height: ",";\n      display: inline-flex;\n      border-radius: ",";\n      align-items: center;\n      gap: ",";\n      overflow: hidden;\n      background: linear-gradient(88.9deg, #d65702 6.26%, #e5803c 91.4%);\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n        padding: 0;\n        padding-inline: ",";\n        margin: 0;\n      "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      display: inline-flex;\n      position: static;\n      transform: none;\n      padding: ",";\n      color: ",";\n      margin-right: ",";\n      font-size: ",";\n      line-height: ",";\n\n      ","\n    "]);v=function t(){return e};return e}function p(){var e=(0,n._)(["\n      position: static;\n      transform: none;\n      display: inline-flex;\n    "]);p=function t(){return e};return e}var f=e=>{var{children:t,content:r,size:n="regular",textOnly:i}=e;var o=(0,d/* .isDefined */.O9)(t);var c=!o&&!(0,d/* .isDefined */.O9)(r);var u=/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:n==="tiny"?"crownRoundedSmall":"crownRounded",width:o?n==="tiny"?m[n].iconSize:16:m[n].iconSize,height:o?undefined:m[n].iconSize});return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.wrapper({hasChildren:o,iconOnly:c,size:n}),children:[t,/*#__PURE__*/(0,a/* .jsx */.Y)(s/* ["default"] */.A,{when:!o&&!i&&!c,children:u}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:g.content({hasChildren:o,iconOnly:c,size:n,textOnly:i}),children:o||c?u:r})]})};/* export default */const h=f;var m={tiny:{borderRadius:o/* .spacing["10"] */.YK["10"],height:o/* .spacing["10"] */.YK["10"],gap:o/* .spacing["2"] */.YK["2"],iconSize:10,fontSize:"0.5rem",lineHeight:"0.625rem"},small:{borderRadius:o/* .spacing["16"] */.YK["16"],height:o/* .spacing["16"] */.YK["16"],gap:o/* .spacing["4"] */.YK["4"],iconSize:16,fontSize:o/* .fontSize["10"] */.J["10"],lineHeight:o/* .lineHeight["16"] */.K_["16"]},regular:{borderRadius:"22px",height:"22px",gap:"5px",iconSize:22,fontSize:o/* .fontSize["14"] */.J["14"],lineHeight:o/* .lineHeight["18"] */.K_["18"]},large:{borderRadius:"26px",height:"26px",gap:o/* .spacing["6"] */.YK["6"],iconSize:26,fontSize:o/* .fontSize["16"] */.J["16"],lineHeight:o/* .lineHeight["26"] */.K_["26"]}};var g={wrapper:e=>{var{hasChildren:t,iconOnly:r,size:n="regular"}=e;return/*#__PURE__*/(0,i/* .css */.AH)("position:relative;svg{flex-shrink:0;}",!t&&!r&&(0,i/* .css */.AH)(c(),m[n].height,m[n].borderRadius,m[n].gap))},content:e=>{var{hasChildren:t,iconOnly:r,size:n="regular",textOnly:a}=e;return/*#__PURE__*/(0,i/* .css */.AH)("position:absolute;top:0;right:0;display:flex;flex-shrink:0;transform:translateX(50%) translateY(-50%);",!t&&!r&&(0,i/* .css */.AH)(v(),o/* .spacing["2"] */.YK["2"],o/* .colorTokens.icon.white */.I6.icon.white,m[n].gap,m[n].fontSize,m[n].lineHeight,a&&(0,i/* .css */.AH)(u(),o/* .spacing["6"] */.YK["6"]))," ",r&&(0,i/* .css */.AH)(p()))}}},19897:function(e,t,r){r.d(t,{A:()=>m});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(41594);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(42771);/* import */var d=r(13448);/* import */var l=r(81547);/* import */var c=r(52874);/* import */var u=r(33231);function v(){var e=(0,n._)(["\n      color: ",";\n    "]);v=function t(){return e};return e}function p(){var e=(0,n._)(["\n        margin-right: ",";\n      "]);p=function t(){return e};return e}var f=/*#__PURE__*/o().forwardRef((e,t)=>{var{name:r,checked:n,readOnly:i,disabled:o=false,labelCss:s,label:d,icon:l,value:c,onChange:v,onBlur:p,description:f}=e;var m=(0,u/* .nanoid */.Ak)();return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:h.wrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("label",{htmlFor:m,css:[h.container(o),s],children:[/*#__PURE__*/(0,a/* .jsx */.Y)("input",{ref:t,id:m,name:r,type:"radio",checked:n,readOnly:i,value:c,disabled:o,onChange:v,onBlur:p,css:[h.radio(d)]}),/*#__PURE__*/(0,a/* .jsx */.Y)("span",{}),l,d]}),f&&/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:h.description,children:f})]})});var h={wrapper:/*#__PURE__*/(0,s/* .css */.AH)(c/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",d/* .spacing["8"] */.YK["8"],";"),container:e=>/*#__PURE__*/(0,s/* .css */.AH)(l/* .typography.caption */.I.caption(),";display:flex;align-items:center;cursor:pointer;user-select:none;",e&&(0,s/* .css */.AH)(v(),d/* .colorTokens.text.disable */.I6.text.disable)),radio:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;opacity:0;height:0;width:0;cursor:pointer;& + span{position:relative;cursor:pointer;height:18px;width:18px;background-color:",d/* .colorTokens.background.white */.I6.background.white,";border:2px solid ",d/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:100%;",e&&(0,s/* .css */.AH)(p(),d/* .spacing["10"] */.YK["10"]),"}& + span::before{content:'';position:absolute;left:3px;top:3px;background-color:",d/* .colorTokens.background.white */.I6.background.white,";width:8px;height:8px;border-radius:100%;}&:checked + span{border-color:",d/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:checked + span::before{background-color:",d/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";}&:focus-visible{& + span{outline:2px solid ",d/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}}")},description:/*#__PURE__*/(0,s/* .css */.AH)(l/* .typography.small */.I.small(),";color:",d/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;")};/* export default */const m=f},94361:function(e,t,r){r.d(t,{w:()=>l});/* import */var n=r(52639);/* import */var a=r(41594);/* import */var i=/*#__PURE__*/r.n(a);/* import */var o=r(42771);/* import */var s=r(13448);/* import */var d=r(78931);var l=/*#__PURE__*/i().forwardRef((e,t)=>{var{className:r,variant:a}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{className:r,ref:t,css:u({variant:a})})});l.displayName="Separator";var c={horizontal:/*#__PURE__*/(0,o/* .css */.AH)("height:1px;width:100%;"),vertical:/*#__PURE__*/(0,o/* .css */.AH)("height:100%;width:1px;"),base:/*#__PURE__*/(0,o/* .css */.AH)("flex-shrink:0;background-color:",s/* .colorTokens.stroke.divider */.I6.stroke.divider,";")};var u=(0,d/* .createVariation */.s)({variants:{variant:{horizontal:c.horizontal,vertical:c.vertical}},defaultVariants:{variant:"horizontal"}},c.base)},54184:function(e,t,r){r.d(t,{A:()=>x});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(60599);/* import */var o=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(42771);/* import */var c=r(74412);/* import */var u=r(19393);/* import */var v=r(13448);/* import */var p=r(52874);/* import */var f=r(33231);function h(){var e=(0,i._)(["\n        ","\n      "]);h=function t(){return e};return e}function m(){var e=(0,i._)(["\n        border-top-right-radius: ",";\n      "]);m=function t(){return e};return e}function g(){var e=(0,i._)(["\n          ","\n        "]);g=function t(){return e};return e}function b(){var e=(0,i._)(["\n      .mce-tinymce.mce-container {\n        border: ",";\n        border-radius: ",";\n\n        ","\n      }\n    "]);b=function t(){return e};return e}var _=!!c/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;// Without getDefaultSettings function editor does not initiate
if(!window.wp.editor.getDefaultSettings){window.wp.editor.getDefaultSettings=()=>({})}function y(e,t,r,n,a,i,o,s,d,l,u,v,p){var f=v!==null&&v!==void 0?v:n?"bold italic underline | image | ".concat(_?"codesample":""):"formatselect bold italic underline | bullist numlist | blockquote | alignleft aligncenter alignright | link unlink | wp_more ".concat(_?" codesample":""," | wp_adv");var h=p!==null&&p!==void 0?p:"strikethrough hr | forecolor pastetext removeformat | charmap | outdent indent | undo redo | wp_help | fullscreen";f=u?f:f.replaceAll(" | "," ");return{tinymce:{wpautop:true,menubar:false,autoresize_min_height:d||200,autoresize_max_height:l||500,wp_autoresize_on:true,browser_spellcheck:!s,convert_urls:false,end_container_on_empty_block:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",fix_list_elements:true,indent:false,relative_urls:0,remove_script_host:0,plugins:"charmap,colorpicker,hr,lists,image,media,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wpdialogs,wptextpattern,wpview".concat(_?",codesample":""),skin:"light",skin_url:"".concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light"),submit_patch:true,link_context_toolbar:false,theme:"modern",toolbar:!s,toolbar1:f,toolbar2:n?false:h,content_css:"".concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-includes/css/dashicons.min.css,").concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-includes/js/tinymce/skins/wordpress/wp-content.css,").concat(c/* .tutorConfig.site_url */.P.site_url,"/wp-content/plugins/tutor/assets/lib/tinymce/light/content.min.css"),statusbar:!s,branding:false,// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:n=>{n.on("init",()=>{if(e&&!s){n.getBody().focus()}if(s){n.setMode("readonly");var t=n.contentDocument.querySelector(".mce-content-body");t.style.backgroundColor="transparent";setTimeout(()=>{var e=t.scrollHeight;if(e){n.iframeElement.style.height="".concat(e,"px")}},500)}});n.on("change keyup paste",()=>{t(n.getContent())});n.on("focus",()=>{r(true)});n.on("blur",()=>r(false));n.on("FullscreenStateChanged",e=>{var t=document.getElementById("tutor-course-builder");var r=document.getElementById("tutor-course-bundle-builder-root");var n=t||r;if(n){if(e.state){n.style.position="relative";n.style.zIndex="100000"}else{n.removeAttribute("style")}}o===null||o===void 0?void 0:o(e.state)})},wp_keep_scroll_position:false,wpeditimage_html5_captions:true},mediaButtons:!a&&!n&&!s,drag_drop_upload:true,quicktags:i||n||s?false:{buttons:["strong","em","block","del","ins","img","ul","ol","li","code","more","close"]}}}var w=e=>{var{value:t="",onChange:r,isMinimal:i,hideMediaButtons:d,hideQuickTags:l,autoFocus:c=false,onFullScreenChange:v,readonly:p=false,min_height:h,max_height:m,toolbar1:g,toolbar2:b}=e;var _=(0,s.useRef)(null);var{current:w}=(0,s.useRef)((0,f/* .nanoid */.Ak)());var[x,Y]=(0,s.useState)(c);var k=e=>{var t=e.target;r(t.value)};var I=(0,s.useCallback)(e=>{var{tinymce:t}=window;if(!t||x){return}var r=window.tinymce.get(w);if(r){if(e!==r.getContent()){r.setContent(e)}}},[w,x]);(0,s.useEffect)(()=>{I(t);// eslint-disable-next-line react-hooks/exhaustive-deps
},[t]);(0,s.useEffect)(()=>{var e=_.current;if(typeof window.wp!=="undefined"&&window.wp.editor){var o=y(x,r,Y,i,d,l,v,p,h,m,u/* .CURRENT_VIEWPORT.isAboveMobile */.vN.isAboveMobile,g,b);// When rendered inside an iframe (e.g., via createPortal),
// wp.editor.initialize() fails because it uses document.getElementById()
// which only searches the parent document. Additionally, standard TinyMCE
// mode creates a content iframe internally using parent document DOM APIs,
// causing editor.getBody() to return undefined in cross-document contexts.
// Using inline mode with the `target` option avoids both issues:
// TinyMCE renders directly into the target element without a content iframe.
var s=e&&e.ownerDocument!==document;if(s){var c,f;var A=window.tinymce.get(w);if(A){A.remove()}// TinyMCE inline mode requires a block-level element (not textarea).
// Create a div in the iframe's document to serve as the inline editor target.
var I=e.ownerDocument;var D=I.createElement("div");D.id=w;D.innerHTML=t;// Hide textarea and transfer its id to the div (TinyMCE uses element id for registration)
e.removeAttribute("id");e.style.display="none";(c=e.parentNode)===null||c===void 0?void 0:c.insertBefore(D,e.nextSibling);// Filter out plugins that require TinyMCE's content iframe (unavailable in inline mode)
var C=["wpautoresize","fullscreen","tabfocus"];var M=(f=o.tinymce.plugins)===null||f===void 0?void 0:f.split(",").map(e=>e.trim()).filter(e=>!C.includes(e)).join(",");window.tinymce.init((0,a._)((0,n._)({},o.tinymce),{target:D,inline:true,plugins:M,// Simplified setup: inline mode has no iframeElement or contentDocument
// eslint-disable-next-line @typescript-eslint/no-explicit-any
setup:e=>{e.on("init",()=>{if(p){e.setMode("readonly")}var t=e.getBody();if(t){t.style.backgroundColor="transparent"}if(x&&!p){t===null||t===void 0?void 0:t.focus()}});e.on("change keyup paste",()=>{r(e.getContent())});e.on("focus",()=>Y(true));e.on("blur",()=>Y(false))}}));return()=>{var t=window.tinymce.get(w);if(t){t.remove()}D.remove();// Restore textarea
if(e){e.id=w;e.style.display=""}}}window.wp.editor.remove(w);window.wp.editor.initialize(w,o);e===null||e===void 0?void 0:e.addEventListener("change",k);e===null||e===void 0?void 0:e.addEventListener("input",k);return()=>{window.wp.editor.remove(w);e===null||e===void 0?void 0:e.removeEventListener("change",k);e===null||e===void 0?void 0:e.removeEventListener("input",k)}}// eslint-disable-next-line react-hooks/exhaustive-deps
},[p]);return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:A.wrapper({hideQuickTags:l,isMinimal:i,isFocused:x,isReadOnly:p}),children:/*#__PURE__*/(0,o/* .jsx */.Y)("textarea",{"data-cy":"tutor-tinymce",ref:_,id:w,defaultValue:t})})};/* export default */const x=w;var A={wrapper:e=>{var{hideQuickTags:t,isMinimal:r,isFocused:n,isReadOnly:a}=e;return/*#__PURE__*/(0,l/* .css */.AH)("flex:1;.wp-editor-tools{z-index:auto;}.wp-editor-container{border-top-left-radius:",v/* .borderRadius["6"] */.Vq["6"],";border-bottom-left-radius:",v/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.Vq["6"],";",n&&!a&&(0,l/* .css */.AH)(h(),p/* .styleUtils.inputFocus */.x.inputFocus),":focus-within{",!a&&p/* .styleUtils.inputFocus */.x.inputFocus,"}}.wp-switch-editor{height:auto;border:1px solid #dcdcde;border-radius:0px;border-top-left-radius:",v/* .borderRadius["4"] */.Vq["4"],";border-top-right-radius:",v/* .borderRadius["4"] */.Vq["4"],";top:2px;padding:3px 8px 4px;font-size:13px;color:#646970;&:focus,&:active,&:hover{background:#f0f0f1;color:#646970;}}.mce-btn button{&:focus,&:active,&:hover{background:none;color:#50575e;}}.mce-toolbar-grp,.quicktags-toolbar{border-top-left-radius:",v/* .borderRadius["6"] */.Vq["6"],";",(t||r)&&(0,l/* .css */.AH)(m(),v/* .borderRadius["6"] */.Vq["6"]),"}.mce-top-part::before{display:none;}.mce-statusbar{border-bottom-left-radius:",v/* .borderRadius["6"] */.Vq["6"],";border-bottom-right-radius:",v/* .borderRadius["6"] */.Vq["6"],";}.mce-tinymce{box-shadow:none;background-color:transparent;}.mce-edit-area{background-color:unset;}",(t||r)&&(0,l/* .css */.AH)(b(),!a?"1px solid ".concat(v/* .colorTokens.stroke["default"] */.I6.stroke["default"]):"none",v/* .borderRadius["6"] */.Vq["6"],n&&!a&&(0,l/* .css */.AH)(g(),p/* .styleUtils.inputFocus */.x.inputFocus)),"    textarea{visibility:visible !important;width:100%;resize:none;border:none;outline:none;padding:",v/* .spacing["10"] */.YK["10"],";}")}}},95377:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(17900);/* import */var o=r(52639);/* import */var s=r(42771);/* import */var d=r(81253);/* import */var l=r(46225);/* import */var c=r(90453);/* import */var u=r(13448);/* import */var v=r(81547);/* import */var p=r(42263);var f=e=>{var{field:t,fieldState:r,disabled:s,value:u,onChange:v,label:f,description:h,helpText:g,isHidden:b,labelCss:_}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{field:t,fieldState:r,isHidden:b,children:e=>{var{css:r}=e,p=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:m.wrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,(0,a._)((0,n._)({},t,p),{inputCss:r,labelCss:_,value:u,disabled:s,checked:t.value,label:f,onChange:()=>{t.onChange(!t.value);if(v){v(!t.value)}}})),g&&/*#__PURE__*/(0,o/* .jsx */.Y)(c/* ["default"] */.A,{content:g,placement:"top",allowHTML:true,children:/*#__PURE__*/(0,o/* .jsx */.Y)(l/* ["default"] */.A,{name:"info",width:20,height:20})})]}),h&&/*#__PURE__*/(0,o/* .jsx */.Y)("p",{css:m.description,children:h})]})}})};/* export default */const h=f;var m={wrapper:/*#__PURE__*/(0,s/* .css */.AH)("display:flex;align-items:center;gap:",u/* .spacing["6"] */.YK["6"],";& > div{display:flex;color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),description:/*#__PURE__*/(0,s/* .css */.AH)(v/* .typography.small */.I.small(),"    color:",u/* .colorTokens.text.hints */.I6.text.hints,";padding-left:30px;margin-top:",u/* .spacing["6"] */.YK["6"],";")}},26036:function(e,t,r){r.d(t,{A:()=>C});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(17900);/* import */var o=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(94906);/* import */var c=r(42771);/* import */var u=r(12470);/* import */var v=/*#__PURE__*/r.n(u);/* import */var p=r(76845);/* import */var f=r(1896);/* import */var h=r(25074);/* import */var m=r(46225);/* import */var g=r(19393);/* import */var b=r(13448);/* import */var _=r(81547);/* import */var y=r(84206);/* import */var w=r(87752);/* import */var x=r(52874);/* import */var A=r(42263);/* import */var Y=r(30779);// Create DayPicker formatters based on WordPress locale
var k=()=>{if(typeof window==="undefined"||!window.wp||!window.wp.date){return}var{format:e}=wp.date;return{formatMonthDropdown:t=>e("F",t),formatMonthCaption:t=>e("F",t),formatCaption:t=>e("F",t),formatWeekdayName:t=>e("D",t)}};var I=e=>{if(!e)return undefined;return(0,p/* .isValid */.f)(new Date(e))?new Date(e.length===10?e+"T00:00:00":e):undefined};var D=e=>{var{label:t,field:r,fieldState:d,disabled:c,disabledBefore:v,disabledAfter:p,loading:b,placeholder:_,helpText:Y,isClearable:D=true,onChange:C,dateFormat:E=g/* .DateFormats.monthDayYear */.UA.monthDayYear}=e;var T=(0,w/* .usePrefersReducedMotion */.j)();var S=(0,s.useRef)(null);var[O,H]=(0,s.useState)(false);var N=I(r.value);var F=typeof window!=="undefined"&&window.wp&&window.wp.date;var K=N?F?window.wp.date.format("F j, Y",N):(0,f/* .format */.GP)(N,E):"";var{triggerRef:L,position:U,popoverRef:z}=(0,y/* .usePortalPopover */.tP)({isOpen:O,placement:y/* .POPOVER_PLACEMENTS.BOTTOM_LEFT */.zA.BOTTOM_LEFT});var P=()=>{var e;H(false);(e=S.current)===null||e===void 0?void 0:e.focus()};var R=I(v);var W=I(p);return/*#__PURE__*/(0,o/* .jsx */.Y)(A/* ["default"] */.A,{label:t,field:r,fieldState:d,disabled:c,loading:b,placeholder:_,helpText:Y,children:e=>{var{css:t}=e,s=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:M.wrapper,ref:L,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,a._)((0,n._)({},s),{css:[t,M.input],title:K,ref:e=>{r.ref(e);// @ts-ignore
S.current=e},type:"text",value:K,onClick:e=>{e.stopPropagation();H(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();H(e=>!e)}},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{name:"calendarLine",width:30,height:32,style:M.icon}),D&&r.value&&/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,u.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:x/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>{r.onChange("")},icon:/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(y/* .Portal */.ZL,{isOpen:O,onClickOutside:P,onEscape:P,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:M.pickerWrapper,style:{left:U.left,top:U.top},ref:z,children:/*#__PURE__*/(0,o/* .jsx */.Y)(l/* .DayPicker */.h,{dir:g/* .isRTL */.V8?"rtl":"ltr",animate:!T,mode:"single",formatters:k(),disabled:[!!R&&{before:R},!!W&&{after:W}],selected:N,onSelect:e=>{if(e){var t=(0,f/* .format */.GP)(e,g/* .DateFormats.yearMonthDay */.UA.yearMonthDay);r.onChange(t);P();if(C){C(t)}}},showOutsideDays:true,captionLayout:"dropdown",autoFocus:true,defaultMonth:N||new Date,startMonth:R||new Date(new Date().getFullYear()-10,0),endMonth:W||new Date(new Date().getFullYear()+10,11),weekStartsOn:F?window.wp.date.getSettings().l10n.startOfWeek:0})})})]})}})};/* export default */const C=D;var M={wrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,c/* .css */.AH)("&[data-input]{padding-left:",b/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:50%;left:",b/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",b/* .colorTokens.icon["default"] */.I6.icon["default"],";"),pickerWrapper:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.body */.I.body("regular"),";position:absolute;background-color:",b/* .colorTokens.background.white */.I6.background.white,";box-shadow:",b/* .shadow.popover */.r7.popover,";border-radius:",b/* .borderRadius["6"] */.Vq["6"],";.rdp-root{--rdp-day-height:40px;--rdp-day-width:40px;--rdp-day_button-height:40px;--rdp-day_button-width:40px;--rdp-nav-height:40px;--rdp-today-color:",b/* .colorTokens.text.title */.I6.text.title,";--rdp-caption-font-size:",b/* .fontSize["18"] */.J["18"],";--rdp-accent-color:",b/* .colorTokens.action.primary["default"] */.I6.action.primary["default"],";--rdp-background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";--rdp-accent-color-dark:",b/* .colorTokens.action.primary.active */.I6.action.primary.active,";--rdp-background-color-dark:",b/* .colorTokens.action.primary.hover */.I6.action.primary.hover,";--rdp-selected-color:",b/* .colorTokens.text.white */.I6.text.white,";--rdp-day_button-border-radius:",b/* .borderRadius.circle */.Vq.circle,";--rdp-outside-opacity:0.5;--rdp-disabled-opacity:0.25;}.rdp-months{margin:",b/* .spacing["16"] */.YK["16"],";}.rdp-month_grid{margin:0px;}.rdp-day{padding:0px;}.rdp-nav{--rdp-accent-color:",b/* .colorTokens.text.primary */.I6.text.primary,";button{border-radius:",b/* .borderRadius.circle */.Vq.circle,";&:hover,&:focus,&:active{background-color:",b/* .colorTokens.background.hover */.I6.background.hover,";color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not(:disabled){--rdp-accent-color:",b/* .colorTokens.text.white */.I6.text.white,";background-color:",b/* .colorTokens.background.brand */.I6.background.brand,";}}}.rdp-dropdown_root{.rdp-caption_label{padding:",b/* .spacing["8"] */.YK["8"],";}}.rdp-today{.rdp-day_button{font-weight:",b/* .fontWeight.bold */.Wy.bold,";}}.rdp-selected{color:var(--rdp-selected-color);background-color:var(--rdp-accent-color);border-radius:",b/* .borderRadius.circle */.Vq.circle,";font-weight:",b/* .fontWeight.regular */.Wy.regular,";.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-accent-color);color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible{outline:2px solid var(--rdp-accent-color);outline-offset:2px;}&:not(.rdp-outside){color:var(--rdp-selected-color);}}}.rdp-day_button{&:hover,&:focus,&:active{background-color:var(--rdp-background-color);color:",b/* .colorTokens.text.primary */.I6.text.primary,";}&:focus-visible:not([disabled]){color:var(--rdp-selected-color);opacity:1;background-color:var(--rdp-accent-color);}}")}},46062:function(e,t,r){r.d(t,{A:()=>A});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(42771);/* import */var o=r(12470);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(25074);/* import */var l=r(46225);/* import */var c=r(42263);/* import */var u=r(13448);/* import */var v=r(81547);/* import */var p=r(3013);/* import */var f=r(59189);/* import */var h=r(57587);/* import */var m=r(75532);/* import */var g=r(52874);function b(){var e=(0,n._)(["\n      background-color: ",";\n      padding: "," 0 "," ",";\n      border: 1px solid ",";\n      border-radius: ",";\n      gap: ",";\n    "]);b=function t(){return e};return e}function _(){var e=(0,n._)(["\n      margin-right: ",";\n    "]);_=function t(){return e};return e}var y={iso:["iso"],dwg:["dwg"],pdf:["pdf"],doc:["doc","docx"],csv:["csv"],xls:["xls","xlsx"],ppt:["ppt","pptx"],zip:["zip"],archive:["rar","7z","tar","gz"],txt:["txt"],rtf:["rtf"],text:["log"],jpg:["jpg"],png:["png"],image:["jpeg","gif","webp","avif"],mp3:["mp3"],fla:["fla"],audio:["ogg","wav","wma"],mp4:["mp4"],avi:["avi"],ai:["ai"],videoFile:["mkv","mpeg","flv","mov","wmv"],svg:["svg"],css:["css"],javascript:["js"],xml:["xml"],html:["html"],exe:["exe"],psd:["psd"],jsonFile:["json"],dbf:["dbf"]};var w=e=>{for(var[t,r]of Object.entries(y)){if(r.includes(e)){return t}}return"file"};var x=e=>{var{field:t,fieldState:r,label:n,helpText:i,buttonText:s=(0,o.__)("Upload Media","tutor"),selectMultiple:u=false,onChange:v,maxFileSize:h,maxFiles:b}=e;var _=t.value;var{openMediaLibrary:y,resetFiles:x}=(0,m/* ["default"] */.A)({options:{multiple:u,maxFiles:b,maxFileSize:h},onChange:e=>{t.onChange(e);if(v){v(e)}},initialFiles:_?Array.isArray(_)?_:[_]:[]});var A=()=>{y()};var k=e=>{x();if(u){var r=(Array.isArray(_)?_:_?[_]:[]).filter(t=>t.id!==e);t.onChange(r.length>0?r:null);if(v){v(r.length>0?r:null)}}else{t.onChange(null);if(v){v(null)}}};return/*#__PURE__*/(0,a/* .jsx */.Y)(c/* ["default"] */.A,{label:n,field:t,fieldState:r,helpText:i,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.Y)(f/* ["default"] */.A,{when:_,fallback:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{buttonCss:Y.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:"attach",height:24,width:24}),variant:"secondary",onClick:A,children:s}),children:e=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.wrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.attachmentsWrapper,children:/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{each:Array.isArray(e)?e:[e],children:e=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardWrapper,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCard,children:[/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{style:Y.fileIcon,name:w(e.ext||"file"),height:40,width:40}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardBody,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:Y.attachmentCardTitle,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{title:e.title,css:g/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),children:e.title}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.fileExtension,children:".".concat(e.ext)})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.attachmentCardSubtitle,children:/*#__PURE__*/(0,a/* .jsx */.Y)("span",{children:"".concat((0,o.__)("Size","tutor"),": ").concat(e.size)})})]})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("button",{type:"button",css:Y.removeButton,onClick:()=>{k(e.id)},children:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:"cross",height:24,width:24})})]},e.id)})}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:Y.uploadButtonWrapper({hasFiles:Array.isArray(e)?e.length>0:e!==null}),children:/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{buttonCss:Y.uploadButton,icon:/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{name:"attach",height:24,width:24}),variant:"secondary",onClick:A,"data-cy":"upload-media",children:s})})]})})}})};/* export default */const A=(0,h/* .withVisibilityControl */.M)(x);var Y={wrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)("display:flex;flex-direction:column;position:relative;",t&&(0,i/* .css */.AH)(b(),u/* .colorTokens.background.white */.I6.background.white,u/* .spacing["16"] */.YK["16"],u/* .spacing["16"] */.YK["16"],u/* .spacing["16"] */.YK["16"],u/* .colorTokens.stroke["default"] */.I6.stroke["default"],u/* .borderRadius.card */.Vq.card,u/* .spacing["8"] */.YK["8"]))},attachmentsWrapper:/*#__PURE__*/(0,i/* .css */.AH)("max-height:260px;padding-right:",u/* .spacing["16"] */.YK["16"],";",g/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),attachmentCardWrapper:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;gap:",u/* .spacing["20"] */.YK["20"],";padding:",u/* .spacing["4"] */.YK["4"]," ",u/* .spacing["12"] */.YK["12"]," ",u/* .spacing["4"] */.YK["4"]," 0;border-radius:",u/* .borderRadius["6"] */.Vq["6"],";button{opacity:0;}&:hover,&:focus-within{background:",u/* .colorTokens.background.hover */.I6.background.hover,";button{opacity:1;}}",u/* .Breakpoint.smallTablet */.EA.smallTablet,"{button{opacity:1;}}"),attachmentCard:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.YK["8"],";overflow:hidden;"),attachmentCardBody:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",u/* .spacing["4"] */.YK["4"],";"),attachmentCardTitle:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.display.flex */.x.display.flex(),";",v/* .typography.caption */.I.caption("medium"),"    word-break:break-all;"),fileExtension:/*#__PURE__*/(0,i/* .css */.AH)("flex-shrink:0;"),attachmentCardSubtitle:/*#__PURE__*/(0,i/* .css */.AH)(v/* .typography.tiny */.I.tiny("regular")," ",g/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",u/* .spacing["8"] */.YK["8"],";color:",u/* .colorTokens.text.hints */.I6.text.hints,";svg{color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";}"),uploadButtonWrapper:e=>{var{hasFiles:t}=e;return/*#__PURE__*/(0,i/* .css */.AH)(t&&(0,i/* .css */.AH)(_(),u/* .spacing["16"] */.YK["16"]))},uploadButton:/*#__PURE__*/(0,i/* .css */.AH)("width:100%;"),fileIcon:/*#__PURE__*/(0,i/* .css */.AH)("flex-shrink:0;color:",u/* .colorTokens.icon["default"] */.I6.icon["default"],";"),removeButton:/*#__PURE__*/(0,i/* .css */.AH)(g/* .styleUtils.crossButton */.x.crossButton,";background:none;transition:none;flex-shrink:0;")}},75031:function(e,t,r){r.d(t,{A:()=>x});/* import */var n=r(52639);/* import */var a=r(12470);/* import */var i=/*#__PURE__*/r.n(a);/* import */var o=r(12427);/* import */var s=r(46225);/* import */var d=r(76023);/* import */var l=r(17944);/* import */var c=r(19448);/* import */var u=r(3311);/* import */var v=r(74412);/* import */var p=r(57587);/* import */var f=r(75532);/* import */var h=r(34837);/* import */var m=r(67290);/* import */var g=r(42263);var b;var _=!!v/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var y=(b=v/* .tutorConfig.settings */.P.settings)===null||b===void 0?void 0:b.chatgpt_key_exist;var w=e=>{var{field:t,fieldState:r,label:i,size:v,helpText:p,buttonText:b=(0,a.__)("Upload Media","tutor"),infoText:w,onChange:x,generateWithAi:A=false,previewImageCss:Y,loading:k,onClickAiButton:I}=e;var{showModal:D}=(0,l/* .useModal */.h)();var{openMediaLibrary:C,resetFiles:M}=(0,f/* ["default"] */.A)({options:{type:"image",multiple:false},onChange:e=>{if(e&&!Array.isArray(e)){var{id:r,url:n,title:a}=e;t.onChange({id:r,url:n,title:a});if(x){x({id:r,url:n,title:a})}}},initialFiles:t.value});var E;var T=(E=t.value)!==null&&E!==void 0?E:null;var S=()=>{C()};var O=()=>{M();t.onChange(null);if(x){x(null)}};var H=()=>{if(!_){D({component:c/* ["default"] */.A,props:{image:h,image2x:m}})}else if(!y){D({component:u/* ["default"] */.A,props:{image:h,image2x:m}})}else{D({component:d/* ["default"] */.A,isMagicAi:true,props:{title:(0,a.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,n/* .jsx */.Y)(s/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),field:t,fieldState:r}});I===null||I===void 0?void 0:I()}};return/*#__PURE__*/(0,n/* .jsx */.Y)(g/* ["default"] */.A,{label:i,field:t,fieldState:r,helpText:p,onClickAiButton:H,generateWithAi:A,children:()=>{return/*#__PURE__*/(0,n/* .jsx */.Y)("div",{children:/*#__PURE__*/(0,n/* .jsx */.Y)(o/* ["default"] */.A,{size:v,value:T,uploadHandler:S,clearHandler:O,buttonText:b,infoText:w,previewImageCss:Y,loading:k})})}})};/* export default */const x=(0,p/* .withVisibilityControl */.M)(w)},89665:function(e,t,r){r.d(t,{A:()=>p});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(42771);/* import */var o=r(13448);/* import */var s=r(81547);/* import */var d=r(52874);/* import */var l=r(42263);function c(){var e=(0,n._)(["\n        img {\n          border-color: ",";\n        }\n      "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n        outline-color: ",";\n      "]);u=function t(){return e};return e}var v=e=>{var{field:t,fieldState:r,label:n,options:i=[],disabled:o}=e;return/*#__PURE__*/(0,a/* .jsx */.Y)(l/* ["default"] */.A,{field:t,fieldState:r,label:n,disabled:o,children:()=>{return/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:f.wrapper,children:i.map((e,r)=>/*#__PURE__*/(0,a/* .jsxs */.FD)("button",{type:"button",css:f.item(t.value===e.value),onClick:()=>{t.onChange(e.value)},disabled:o,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:e.image,alt:e.label,width:64,height:64}),/*#__PURE__*/(0,a/* .jsx */.Y)("p",{children:e.label})]},r))})}})};/* export default */const p=v;var f={wrapper:/*#__PURE__*/(0,i/* .css */.AH)("display:grid;grid-template-columns:repeat(4,minmax(64px,1fr));gap:",o/* .spacing["12"] */.YK["12"],";margin-top:",o/* .spacing["4"] */.YK["4"],";"),item:e=>/*#__PURE__*/(0,i/* .css */.AH)(d/* .styleUtils.resetButton */.x.resetButton,";display:flex;flex-direction:column;gap:",o/* .spacing["4"] */.YK["4"],";align-items:center;width:100%;cursor:pointer;input{appearance:none;}p{",s/* .typography.small */.I.small(),";width:100%;",d/* .styleUtils.textEllipsis */.x.textEllipsis,";color:",o/* .colorTokens.text.subdued */.I6.text.subdued,";text-align:center;}&:hover,&:focus-visible{",!e&&(0,i/* .css */.AH)(c(),o/* .colorTokens.stroke.hover */.I6.stroke.hover),"}img{border-radius:",o/* .borderRadius["6"] */.Vq["6"],";border:2px solid ",o/* .colorTokens.stroke.border */.I6.stroke.border,";outline:2px solid transparent;outline-offset:2px;transition:border-color 0.3s ease;",e&&(0,i/* .css */.AH)(u(),o/* .colorTokens.stroke.magicAi */.I6.stroke.magicAi),"}")}},6977:function(e,t,r){r.d(t,{A:()=>T});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(17900);/* import */var o=r(60599);/* import */var s=r(52639);/* import */var d=r(41594);/* import */var l=/*#__PURE__*/r.n(d);/* import */var c=r(42771);/* import */var u=r(13448);/* import */var v=r(81547);/* import */var p=r(57587);/* import */var f=r(52874);/* import */var h=r(42263);function m(){var e=(0,o._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      box-shadow: ",";\n      background-color: ",";\n    "]);m=function t(){return e};return e}function g(){var e=(0,o._)(["\n      border-color: ",";\n      background-color: ",";\n    "]);g=function t(){return e};return e}function b(){var e=(0,o._)(["\n        border-color: ",";\n      "]);b=function t(){return e};return e}function _(){var e=(0,o._)(["\n          padding-",": ",";\n        "]);_=function t(){return e};return e}function y(){var e=(0,o._)(["\n            padding-",": ",";\n          "]);y=function t(){return e};return e}function w(){var e=(0,o._)(["\n          font-size: ",";\n          font-weight: ",";\n          height: 34px;\n          ",";\n        "]);w=function t(){return e};return e}function x(){var e=(0,o._)(["\n            padding-",": ",";\n          "]);x=function t(){return e};return e}function A(){var e=(0,o._)(["\n          font-size: ",";\n          height: 32px;\n          ",";\n        "]);A=function t(){return e};return e}function Y(){var e=(0,o._)(["\n      ","\n    "]);Y=function t(){return e};return e}function k(){var e=(0,o._)(["\n      min-width: 32px;\n      height: 32px;\n      padding-inline: ",";\n    "]);k=function t(){return e};return e}function I(){var e=(0,o._)(["\n      border-right: 1px solid ",";\n    "]);I=function t(){return e};return e}function D(){var e=(0,o._)(["\n      ","\n    "]);D=function t(){return e};return e}function C(){var e=(0,o._)(["\n      height: 32px;\n      min-width: 32px;\n      padding-inline: ",";\n    "]);C=function t(){return e};return e}function M(){var e=(0,o._)(["\n      border-left: 1px solid ",";\n    "]);M=function t(){return e};return e}var E=e=>{var{label:t,content:r,contentPosition:o="left",showVerticalBar:l=true,size:c="regular",type:u="text",field:v,fieldState:p,disabled:f,readOnly:m,loading:g,placeholder:b,helpText:_,onChange:y,onKeyDown:w,isHidden:x,wrapperCss:A,contentCss:Y,removeBorder:k=false,selectOnFocus:I=false,isInlineLabel:D=false}=e;var C=(0,d.useRef)(null);return/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{label:t,field:v,fieldState:p,disabled:f,readOnly:m,loading:g,placeholder:b,helpText:_,isHidden:x,removeBorder:k,isInlineLabel:D,children:e=>{var{css:t}=e,d=(0,i._)(e,["css"]);var f;return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:[S.inputWrapper(!!p.error,k),A],children:[o==="left"&&/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:[S.inputLeftContent(l,c),Y],children:r}),/*#__PURE__*/(0,s/* .jsx */.Y)("input",(0,a._)((0,n._)({},v,d),{type:"text",value:(f=v.value)!==null&&f!==void 0?f:"",onChange:e=>{var t=u==="number"?e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*)\./g,"$1"):e.target.value;v.onChange(t);if(y){y(t)}},onKeyDown:e=>w===null||w===void 0?void 0:w(e.key),css:[t,S.input(o,l,c)],autoComplete:"off",ref:e=>{v.ref(e);// @ts-ignore
C.current=e;// this is not ideal but it is the only way to set ref to the input element
},onFocus:()=>{if(!I||!C.current){return}C.current.select()},"data-input":true})),o==="right"&&/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:[S.inputRightContent(l,c),Y],children:r})]})}})};/* export default */const T=(0,p/* .withVisibilityControl */.M)(E);var S={inputWrapper:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;",!t&&(0,c/* .css */.AH)(m(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"],u/* .borderRadius["6"] */.Vq["6"],u/* .shadow.input */.r7.input,u/* .colorTokens.background.white */.I6.background.white)," ",e&&(0,c/* .css */.AH)(g(),u/* .colorTokens.stroke.danger */.I6.stroke.danger,u/* .colorTokens.background.status.errorFail */.I6.background.status.errorFail),";&:focus-within{",f/* .styleUtils.inputFocus */.x.inputFocus,";",e&&(0,c/* .css */.AH)(b(),u/* .colorTokens.stroke.danger */.I6.stroke.danger),"}"),input:(e,t,r)=>/*#__PURE__*/(0,c/* .css */.AH)("&.tutor-input-field:not(textarea){",v/* .typography.body */.I.body(),";border:none;box-shadow:none;background-color:transparent;padding-",e,":0;",t&&(0,c/* .css */.AH)(_(),e,u/* .spacing["10"] */.YK["10"]),";",r==="large"&&(0,c/* .css */.AH)(w(),u/* .fontSize["24"] */.J["24"],u/* .fontWeight.medium */.Wy.medium,t&&(0,c/* .css */.AH)(y(),e,u/* .spacing["12"] */.YK["12"]))," ",r==="small"&&(0,c/* .css */.AH)(A(),u/* .fontSize["16"] */.J["16"],t&&(0,c/* .css */.AH)(x(),e,u/* .spacing["4"] */.YK["4"])),"  \n      &:focus{box-shadow:none;outline:none;}}"),inputLeftContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small()," ",f/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",u/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(Y(),v/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(k(),u/* .spacing["4"] */.YK["4"])," ",e&&(0,c/* .css */.AH)(I(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"])),inputRightContent:(e,t)=>/*#__PURE__*/(0,c/* .css */.AH)(v/* .typography.small */.I.small()," ",f/* .styleUtils.flexCenter */.x.flexCenter(),"    height:40px;min-width:48px;color:",u/* .colorTokens.icon.subdued */.I6.icon.subdued,";padding-inline:",u/* .spacing["12"] */.YK["12"],";",t==="large"&&(0,c/* .css */.AH)(D(),v/* .typography.body */.I.body())," ",t==="small"&&(0,c/* .css */.AH)(C(),u/* .spacing["4"] */.YK["4"])," ",e&&(0,c/* .css */.AH)(M(),u/* .colorTokens.stroke["default"] */.I6.stroke["default"]))}},33552:function(e,t,r){r.d(t,{A:()=>p});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(17900);/* import */var o=r(52639);/* import */var s=r(42771);/* import */var d=r(19897);/* import */var l=r(13448);/* import */var c=r(81547);/* import */var u=r(42263);var v=e=>{var{field:t,fieldState:r,label:s,options:l=[],disabled:c,wrapperCss:v,onSelect:p,onSelectRender:h}=e;return/*#__PURE__*/(0,o/* .jsx */.Y)(u/* ["default"] */.A,{field:t,fieldState:r,label:s,disabled:c,children:e=>{var{css:r}=e,s=(0,i._)(e,["css"]);return/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:v,children:l.map((e,i)=>/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsx */.Y)(d/* ["default"] */.A,(0,a._)((0,n._)({},s),{inputCss:r,value:e.value,label:e.label,disabled:e.disabled||c,labelCss:e.labelCss,checked:t.value===e.value,description:e.description,onChange:()=>{t.onChange(e.value);if(p){p(e)}}})),h&&t.value===e.value&&h(e),e.legend&&/*#__PURE__*/(0,o/* .jsx */.Y)("span",{css:f.radioLegend,children:e.legend})]},i))})}})};/* export default */const p=v;var f={radioLegend:/*#__PURE__*/(0,s/* .css */.AH)("margin-left:",l/* .spacing["28"] */.YK["28"],";",c/* .typography.body */.I.body(),";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";")}},15314:function(e,t,r){r.d(t,{A:()=>b});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(41594);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(42771);/* import */var d=r(13448);/* import */var l=r(81547);/* import */var c=r(44486);/* import */var u=r(52874);/* import */var v=r(33231);/* import */var p=r(42263);function f(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      padding: "," "," "," ",";\n    "]);f=function t(){return e};return e}function h(){var e=(0,n._)(["\n      background: ",";\n    "]);h=function t(){return e};return e}function m(e,t,r,n){if(!t.current){return 0}var a=t.current.getBoundingClientRect();var i=a.width;var o=e-a.left;var s=Math.max(0,Math.min(o,i));var d=s/i*100;var l=Math.floor(r+d/100*(n-r));return l}var g=e=>{var{field:t,fieldState:r,label:n,min:o=0,max:s=100,isMagicAi:d=false,hasBorder:l=false}=e;var u=(0,i.useRef)(null);var f;var[h,g]=(0,i.useState)((f=t.value)!==null&&f!==void 0?f:0);var b=(0,i.useRef)(null);var y=(0,i.useRef)(null);var w=(0,c/* .useDebounce */.d)(h);(0,i.useEffect)(()=>{t.onChange(w);// eslint-disable-next-line react-hooks/exhaustive-deps
},[w,t.onChange]);(0,i.useEffect)(()=>{var e=false;var t=t=>{if(t.target!==y.current){return}e=true;document.body.style.userSelect="none"};var r=t=>{if(!e||!b.current){return}g(m(t.clientX,b,o,s))};var n=()=>{e=false;document.body.style.userSelect="auto"};window.addEventListener("mousedown",t);window.addEventListener("mousemove",r);window.addEventListener("mouseup",n);return()=>{window.removeEventListener("mousedown",t);window.removeEventListener("mousemove",r);window.removeEventListener("mouseup",n)}},[o,s]);var x=(0,i.useMemo)(()=>{return Math.floor((h-o)/(s-o)*100)},[h,o,s]);return/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{field:t,fieldState:r,label:n,isMagicAi:d,children:()=>/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.wrapper(l),children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.track,ref:b,onKeyDown:v/* .noop */.lQ,onClick:e=>{g(m(e.clientX,b,o,s))},children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.fill,style:{width:"".concat(x,"%")}}),/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:_.thumb(d),style:{left:"".concat(x,"%")},ref:y})]}),/*#__PURE__*/(0,a/* .jsx */.Y)("input",{type:"text",css:_.input,value:String(h),onChange:e=>{g(Number(e.target.value))},ref:u,onFocus:()=>{var e;(e=u.current)===null||e===void 0?void 0:e.select()}})]})})};/* export default */const b=g;var _={wrapper:e=>/*#__PURE__*/(0,s/* .css */.AH)("display:grid;grid-template-columns:1fr 45px;gap:",d/* .spacing["20"] */.YK["20"],";align-items:center;",e&&(0,s/* .css */.AH)(f(),d/* .colorTokens.stroke.disable */.I6.stroke.disable,d/* .borderRadius["6"] */.Vq["6"],d/* .spacing["12"] */.YK["12"],d/* .spacing["10"] */.YK["10"],d/* .spacing["12"] */.YK["12"],d/* .spacing["16"] */.YK["16"])),track:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;height:4px;background-color:",d/* .colorTokens.bg.gray20 */.I6.bg.gray20,";border-radius:",d/* .borderRadius["50"] */.Vq["50"],";width:100%;flex-shrink:0;cursor:pointer;"),fill:/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;left:0;top:0;height:100%;background:",d/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";width:50%;border-radius:",d/* .borderRadius["50"] */.Vq["50"],";"),thumb:e=>/*#__PURE__*/(0,s/* .css */.AH)("position:absolute;top:50%;transform:translate(-50%,-50%);width:20px;height:20px;border-radius:",d/* .borderRadius.circle */.Vq.circle,";&::before{content:'';position:absolute;top:50%;left:50%;width:8px;height:8px;transform:translate(-50%,-50%);border-radius:",d/* .borderRadius.circle */.Vq.circle,";background-color:",d/* .colorTokens.background.white */.I6.background.white,";cursor:pointer;}",e&&(0,s/* .css */.AH)(h(),d/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1)),input:/*#__PURE__*/(0,s/* .css */.AH)(l/* .typography.caption */.I.caption("medium"),";height:32px;border:1px solid ",d/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",d/* .borderRadius["6"] */.Vq["6"],";text-align:center;color:",d/* .colorTokens.text.primary */.I6.text.primary,";&:focus-visible{",u/* .styleUtils.inputFocus */.x.inputFocus,";}")}},87797:function(e,t,r){r.d(t,{A:()=>D});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(17900);/* import */var o=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(42771);/* import */var c=r(12470);/* import */var u=/*#__PURE__*/r.n(c);/* import */var v=r(98898);/* import */var p=r(69580);/* import */var f=r(50178);/* import */var h=r(1896);/* import */var m=r(25074);/* import */var g=r(46225);/* import */var b=r(19393);/* import */var _=r(13448);/* import */var y=r(81547);/* import */var w=r(31569);/* import */var x=r(27630);/* import */var A=r(21678);/* import */var Y=r(52874);/* import */var k=r(42263);var I=e=>{var{label:t,field:r,fieldState:d,interval:l=30,disabled:u,loading:_,placeholder:y,helpText:I,isClearable:D=true}=e;var[M,E]=(0,s.useState)(false);var T=(0,s.useRef)(null);var S=(0,s.useRef)(null);var O=(0,s.useMemo)(()=>{var e=(0,v/* .setMinutes */.g)((0,p/* .setHours */.a)(new Date,0),0);var t=(0,v/* .setMinutes */.g)((0,p/* .setHours */.a)(new Date,23),59);var r=(0,f/* .eachMinuteOfInterval */.G)({start:e,end:t},{step:l});return r.map(e=>(0,h/* .format */.GP)(e,b/* .DateFormats.hoursMinutes */.UA.hoursMinutes))},[l]);var{activeIndex:H,setActiveIndex:N}=(0,x/* .useSelectKeyboardNavigation */.v)({options:O.map(e=>({label:e,value:e})),isOpen:M,selectedValue:r.value,onSelect:e=>{r.onChange(e.value);E(false)},onClose:()=>E(false)});(0,s.useEffect)(()=>{if(M&&H>=0&&S.current){S.current.scrollIntoView({block:"nearest",behavior:"smooth"})}},[M,H]);return/*#__PURE__*/(0,o/* .jsx */.Y)(k/* ["default"] */.A,{label:t,field:r,fieldState:d,disabled:u,loading:_,placeholder:y,helpText:I,children:e=>{var{css:t}=e,s=(0,i._)(e,["css"]);var d;return/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:C.wrapper,ref:T,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("input",(0,a._)((0,n._)({},s),{ref:r.ref,css:[t,C.input],type:"text",onClick:e=>{e.stopPropagation();E(e=>!e)},onKeyDown:e=>{if(e.key==="Enter"){e.preventDefault();E(e=>!e)}if(e.key==="Tab"){E(false)}},value:(d=r.value)!==null&&d!==void 0?d:"",onChange:e=>{var{value:t}=e.target;r.onChange(t)},autoComplete:"off","data-input":true})),/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"clock",width:32,height:32,style:C.icon}),D&&r.value&&/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,{isIconOnly:true,"aria-label":(0,c.__)("Clear","tutor"),size:"small",variant:"text",buttonCss:Y/* .styleUtils.inputClearButton */.x.inputClearButton,onClick:()=>r.onChange(""),icon:/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,{name:"times",width:12,height:12})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(A/* ["default"] */.A,{triggerRef:T,isOpen:M,closePopover:()=>E(false),animationType:w/* .AnimationType.slideDown */.J6.slideDown,children:/*#__PURE__*/(0,o/* .jsx */.Y)("ul",{css:C.list,children:O.map((e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.Y)("li",{css:C.listItem,ref:H===t?S:null,"data-active":H===t,children:/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:C.itemButton,onClick:()=>{r.onChange(e);E(false)},onMouseOver:()=>N(t),onMouseLeave:()=>t!==H&&N(-1),onFocus:()=>N(t),children:e})},t)})})})]})}})};/* export default */const D=I;var C={wrapper:/*#__PURE__*/(0,l/* .css */.AH)("position:relative;&:hover,&:focus-within{& > button{opacity:1;}}"),input:/*#__PURE__*/(0,l/* .css */.AH)("&[data-input]{padding-left:",_/* .spacing["40"] */.YK["40"],";}"),icon:/*#__PURE__*/(0,l/* .css */.AH)("position:absolute;top:50%;left:",_/* .spacing["8"] */.YK["8"],";transform:translateY(-50%);color:",_/* .colorTokens.icon["default"] */.I6.icon["default"],";"),list:/*#__PURE__*/(0,l/* .css */.AH)("height:380px;list-style:none;padding:0;margin:0;",Y/* .styleUtils.overflowYAuto */.x.overflowYAuto,";"),listItem:/*#__PURE__*/(0,l/* .css */.AH)("width:100%;height:40px;cursor:pointer;display:flex;align-items:center;transition:background-color 0.3s ease-in-out;&[data-active='true']{background-color:",_/* .colorTokens.background.hover */.I6.background.hover,";}:hover{background-color:",_/* .colorTokens.background.hover */.I6.background.hover,";}"),itemButton:/*#__PURE__*/(0,l/* .css */.AH)(Y/* .styleUtils.resetButton */.x.resetButton,";",y/* .typography.body */.I.body(),";margin:",_/* .spacing["4"] */.YK["4"]," ",_/* .spacing["12"] */.YK["12"],";width:100%;height:100%;&:focus,&:active,&:hover{background:none;color:",_/* .colorTokens.text.primary */.I6.text.primary,";}")}},94232:function(e,t,r){// EXPORTS
r.d(t,{A:()=>/* binding */ee});// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_async_to_generator.js
var n=r(93640);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread.js
var a=r(41147);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_object_spread_props.js
var i=r(14206);// EXTERNAL MODULE: ./node_modules/.pnpm/@swc+helpers@0.5.17/node_modules/@swc/helpers/esm/_tagged_template_literal.js
var o=r(60599);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js
var s=r(52639);// EXTERNAL MODULE: external "React"
var d=r(41594);// EXTERNAL MODULE: ./node_modules/.pnpm/react-hook-form@7.67.0_react@18.3.1/node_modules/react-hook-form/dist/index.esm.mjs
var l=r(78346);// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.1_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var c=r(42771);// EXTERNAL MODULE: external "wp.i18n"
var u=r(12470);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/Button.tsx
var v=r(25074);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/ImageInput.tsx
var p=r(12427);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/LoadingSpinner.tsx
var f=r(56705);// EXTERNAL MODULE: ./assets/src/js/v3/shared/atoms/SVGIcon.tsx
var h=r(46225);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/config.ts
var m=r(74412);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/constants.ts
var g=r(19393);// EXTERNAL MODULE: ./assets/src/js/v3/shared/config/styles.ts
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
var M=r(94812);// CONCATENATED MODULE: ./assets/src/js/v3/shared/services/video.ts
var E=e=>{return C/* .wpAjaxInstance.post */.b.post(M/* ["default"].TUTOR_YOUTUBE_VIDEO_DURATION */.A.TUTOR_YOUTUBE_VIDEO_DURATION,{video_id:e})};var T=()=>{return(0,D/* .useMutation */.n)({mutationFn:E})};// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/style-utils.ts
var S=r(52874);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/util.ts + 4 modules
var O=r(33231);// EXTERNAL MODULE: ./assets/src/js/v3/shared/utils/validation.ts
var H=r(18528);// CONCATENATED MODULE: ./assets/src/js/v3/shared/utils/video.ts
function N(e){return(0,n._)(function*(){var t=/^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;var r=e.match(t);var n=r?r[5]:null;var a="https://vimeo.com/api/v2/video/".concat(n,".xml");try{var i=yield fetch(a);if(!i.ok){throw new Error((0,u.__)("Failed to fetch the video data","tutor"))}var o=yield i.text();var s=new DOMParser;var d=s.parseFromString(o,"application/xml");var l=d.getElementsByTagName("duration")[0];if(!l||!l.textContent){return null}var c=Number.parseInt(l.textContent,10);return c;// in seconds
}catch(e){// eslint-disable-next-line no-console
console.error("Error fetching video duration:",e);return null}})()}var F=e=>(0,n._)(function*(){var t=document.createElement("video");t.src=e;t.preload="metadata";return new Promise(e=>{t.onloadedmetadata=()=>{e(t.duration)}})})();var K=e=>{var t=e.match(/PT(\d+H)?(\d+M)?(\d+S)?/);if(!t){return 0}var r=t[1]?Number(t[1].replace("H","")):0;var n=t[2]?Number(t[2].replace("M","")):0;var a=t[3]?Number(t[3].replace("S","")):0;return r*3600+n*60+a};/**
 * Generates a thumbnail from different video sources
 * @param {string} source - Video source type ('youtube', 'vimeo', 'external_url', 'html5')
 * @param {string} url - Video URL
 * @returns {Promise<string>} - Base64 encoded thumbnail image
 */var L=(e,t)=>(0,n._)(function*(){if(e==="youtube"){var r=t.match(g/* .VideoRegex.YOUTUBE */.j8.YOUTUBE);var n=r&&r[7].length===11?r[7]:"";return"https://img.youtube.com/vi/".concat(n,"/maxresdefault.jpg")}if(e==="vimeo"){try{var a=t.split("/").pop();var i=yield fetch("https://vimeo.com/api/v2/video/".concat(a,".json"));var o=yield i.json();return o[0].thumbnail_large}catch(e){throw new Error("Failed to get Vimeo thumbnail. Error: ".concat(e))}}if(e==="external_url"||e==="html5"){return new Promise((e,r)=>{try{// Create video element
    var n=document.createElement("video");n.muted=true;n.style.cssText="position: fixed; left: 0; top: 0; width: 1px; height: 1px; object-fit: contain; z-index: -1;";n.crossOrigin="Anonymous";// Create canvas element
    var a=document.createElement("canvas");// Track loading states
    var i=false;var o=false;var s=false;var d=false;var l=()=>{n.src="";n.remove();a.remove();clearTimeout(v)};var c=()=>{if(i&&o&&s&&d){try{a.height=n.videoHeight;a.width=n.videoWidth;var t=a.getContext("2d");if(!t){throw new Error((0,u.__)("Failed to get canvas context","tutor"))}t.drawImage(n,0,0);var c=a.toDataURL("image/png");l();e(c)}catch(e){l();var v=e instanceof Error?e.message:(0,u.__)("Unknown error occurred","tutor");r(new Error("Thumbnail generation failed: ".concat(v)))}}};// Setup event listeners
    n.addEventListener("loadedmetadata",()=>{i=true;if(!n.currentTime||n.currentTime<2){n.currentTime=2;// Take snapshot at 2 seconds
    }});n.addEventListener("loadeddata",()=>{o=true;c()});n.addEventListener("suspend",()=>{s=true;c()});n.addEventListener("seeked",()=>{d=true;c()});n.addEventListener("error",e=>{l();r(new Error("Video loading failed: ".concat(e.message)))});// Set timeout
    // 30 seconds is a reasonable maximum time to wait for video metadata and frame capture
    var v=setTimeout(()=>{l();r(new Error((0,u.__)("Thumbnail generation timed out","tutor")))},3e4);// Add elements to DOM
    document.body.appendChild(n);document.body.appendChild(a);// Start loading the video
    n.src=t}catch(e){var p=e instanceof Error?e.message:"Unknown error occurred";r(new Error("Thumbnail generation failed: ".concat(p)))}})}throw new Error((0,u.__)("Unsupported video source","tutor"))})();// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormFieldWrapper.tsx
var U=r(42263);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormSelectInput.tsx
var z=r(99864);// EXTERNAL MODULE: ./assets/src/js/v3/shared/components/fields/FormTextareaInput.tsx
var P=r(74054);// CONCATENATED MODULE: ./assets/src/js/v3/shared/components/fields/FormVideoInput.tsx
function R(){var e=(0,o._)(["\n      background-color: ",";\n    "]);R=function t(){return e};return e}function W(){var e=(0,o._)(["\n      ",";\n    "]);W=function t(){return e};return e}var j=m/* .tutorConfig.supported_video_sources */.P.supported_video_sources||[];var B=j.filter(e=>e.value!=="html5");var q=j.map(e=>e.value);var V=["vimeo","youtube","html5"];var G={youtube:(0,u.__)("Paste YouTube Video URL","tutor"),vimeo:(0,u.__)("Paste Vimeo Video URL","tutor"),external_url:(0,u.__)("Paste External Video URL","tutor"),shortcode:(0,u.__)("Paste Video Shortcode","tutor"),embedded:(0,u.__)("Paste Embedded Video Code","tutor")};var Q={youtube:"youtube",vimeo:"vimeo",shortcode:"shortcode",embedded:"coding"};var Z=(e,t)=>{var r={source:"",source_video_id:"",poster:"",poster_url:"",source_html5:"",source_external_url:"",source_shortcode:"",source_youtube:"",source_vimeo:"",source_embedded:""};return e?(0,a._)({},e,t):(0,a._)({},r,t)};var $={youtube:e=>{var t=e.match(g/* .VideoRegex.YOUTUBE */.j8.YOUTUBE);return t&&t[7].length===11?t[7]:null},vimeo:e=>{var t=e.match(g/* .VideoRegex.VIMEO */.j8.VIMEO);return(t===null||t===void 0?void 0:t[5])||null},shortcode:e=>{return e.match(g/* .VideoRegex.SHORTCODE */.j8.SHORTCODE)?e:null},url:e=>{return e.match(g/* .VideoRegex.EXTERNAL_URL */.j8.EXTERNAL_URL)?e:null}};var X=e=>{var{source:t,url:r,getYouTubeVideoDurationMutation:a}=e;return(0,n._)(function*(){try{var e=0;switch(t){case"vimeo":var n;e=(n=yield N(r))!==null&&n!==void 0?n:0;break;case"html5":case"external_url":var i;e=(i=yield F(r))!==null&&i!==void 0?i:0;break;case"youtube":{var o=$.youtube(r);if(o){var s=yield a.mutateAsync(o);e=K(s.data.duration)}break}}if(e){var d=(0,O/* .covertSecondsToHMS */.uu)(Math.floor(e));return d}return null}catch(e){// eslint-disable-next-line no-console
console.error("Error getting video duration:",e);return null}})()};var J=e=>{var{field:t,fieldState:r,label:o,helpText:g,buttonText:b=(0,u.__)("Upload Media","tutor"),infoText:_,onChange:w,supportedFormats:D,loading:C,onGetDuration:M}=e;var E,R,W;var J=(0,A/* .useFormWithGlobalError */.p)({defaultValues:{videoSource:((E=B[0])===null||E===void 0?void 0:E.value)||"",videoUrl:""}});var ee=T();var[er,en]=(0,d.useState)(false);var[ea,ei]=(0,d.useState)({hours:0,minutes:0,seconds:0});var[eo,es]=(0,d.useState)("");var[ed,el]=(0,d.useState)(false);var ec=(0,d.useRef)(null);var eu=e=>(0,n._)(function*(){if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={source:"html5",source_video_id:r.id.toString(),source_html5:r.url};var a;t.onChange(Z((a=t.value)!==null&&a!==void 0?a:null,n));var i;w===null||w===void 0?void 0:w(Z((i=t.value)!==null&&i!==void 0?i:null,n));try{en(true);eh();var o=yield L("external_url",r.url);var s=yield F(r.url);if(!s){return}ei((0,O/* .covertSecondsToHMS */.uu)(Math.floor(s)));if(M){M((0,O/* .covertSecondsToHMS */.uu)(Math.floor(s)))}if(o){es(o)}}finally{en(false)}})();var{openMediaLibrary:ev,resetFiles:ep}=(0,k/* ["default"] */.A)({options:{type:(D===null||D===void 0?void 0:D.length)?D.map(e=>"video/".concat(e)).join(","):"video"},onChange:eu});var{openMediaLibrary:ef,resetFiles:eh}=(0,k/* ["default"] */.A)({options:{type:"image"},onChange:e=>{if(!e){return}var r=Array.isArray(e)?e[0]:e;var n={poster:r.id.toString(),poster_url:r.url};var a;t.onChange(Z((a=t.value)!==null&&a!==void 0?a:null,n));var i;w===null||w===void 0?void 0:w(Z((i=t.value)!==null&&i!==void 0?i:null,n))},initialFiles:((R=t.value)===null||R===void 0?void 0:R.poster)?{id:Number(t.value.poster),url:t.value.poster_url,title:""}:null});var em=J.watch("videoSource")||"";var eg=t.value;(0,d.useEffect)(()=>{var e;if(!eg){return}if(!eg.source){var r,n;J.setValue("videoSource",(r=B[0])===null||r===void 0?void 0:r.value);J.setValue("videoUrl",eg["source_".concat((n=B[0])===null||n===void 0?void 0:n.value)]||"");return}var a=q.includes(eg.source);if(!a){t.onChange(Z(eg,{source:""}));return}J.setValue("videoSource",eg.source);J.setValue("videoUrl",eg["source_".concat(eg.source)]||"");if(!eg.poster_url&&V.includes(eg.source)){var i=eg.source;en(true);L(i,eg["source_".concat(i)]||"").then(e=>{en(false);es(e)}).finally(()=>{en(false)})}if(Object.values(ea).some(e=>e>0)){return}if(eg.source==="vimeo"){N(eg["source_vimeo"]||"").then(e=>{if(!e){return}ei((0,O/* .covertSecondsToHMS */.uu)(Math.floor(e)));if(M){M((0,O/* .covertSecondsToHMS */.uu)(Math.floor(e)))}})}if(["external_url","html5"].includes(eg.source)){F(eg["source_".concat(eg.source)]||"").then(e=>{if(!e){return}ei((0,O/* .covertSecondsToHMS */.uu)(Math.floor(e)));if(M){M((0,O/* .covertSecondsToHMS */.uu)(Math.floor(e)))}})}if(eg.source==="youtube"&&((e=m/* .tutorConfig.settings */.P.settings)===null||e===void 0?void 0:e.youtube_api_key_exist)){var o;var s=(o=$.youtube(eg["source_youtube"]||""))!==null&&o!==void 0?o:"";ee.mutateAsync(s).then(e=>{var t=e.data.duration;if(!t){return}var r=K(t);ei((0,O/* .covertSecondsToHMS */.uu)(Math.floor(r)));if(M){M((0,O/* .covertSecondsToHMS */.uu)(Math.floor(r)))}})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[eg]);if(!q.length){return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.emptyMediaWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:o,children:/*#__PURE__*/(0,s/* .jsx */.Y)("label",{children:o})}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.emptyMedia({hasVideoSource:false}),children:[/*#__PURE__*/(0,s/* .jsxs */.FD)("p",{css:et.warningText,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"info",height:20,width:20}),(0,u.__)("No video source selected","tutor")]}),/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{buttonCss:et.selectFromSettingsButton,variant:"secondary",size:"small",icon:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"linkExternal",height:24,width:24}),onClick:()=>{window.open(m/* ["default"].VIDEO_SOURCES_SETTINGS_URL */.A.VIDEO_SOURCES_SETTINGS_URL,"_blank","noopener")},children:(0,u.__)("Select from settings","tutor")})]})]})}var eb=e=>{if(e==="video"){ev();return}ef()};var e_=e=>{var r=e==="video"?{source:"",source_video_id:"",poster:"",poster_url:""}:{poster:"",poster_url:""};var n=Z(eg!==null&&eg!==void 0?eg:null,r);if(e==="video"){ep()}else{eh()}t.onChange(n);es("");ei({hours:0,minutes:0,seconds:0});if(w){w(n)}};var ey=()=>{if(!(eg===null||eg===void 0?void 0:eg.source)||!q.includes(eg.source)){return false}var e=eg===null||eg===void 0?void 0:eg.source;var t="source_".concat(e);return eg&&eg[t]!==""};var ew=e=>(0,n._)(function*(){en(true);try{var{videoSource:r,videoUrl:n}=e;var a={source:r,["source_".concat(r)]:n};t.onChange(Z(eg!==null&&eg!==void 0?eg:null,a));w===null||w===void 0?void 0:w(Z(eg!==null&&eg!==void 0?eg:null,a));el(false);var[i,o]=yield Promise.all([X({source:r,url:n,getYouTubeVideoDurationMutation:ee}),V.includes(r)?L(r,n):null]);if(i){ei(i);M===null||M===void 0?void 0:M(i)}if(o){es(o)}}finally{en(false)}})();var ex=e=>{var t=e.trim();if(em==="embedded")return true;if(em==="shortcode"){return $.shortcode(t)?true:(0,u.__)("Invalid Shortcode","tutor")}if(!$.url(t)){return(0,u.__)("Invalid URL","tutor")}if(em==="youtube"&&!$.youtube(t)){return(0,u.__)("Invalid YouTube URL","tutor")}if(em==="vimeo"&&!$.vimeo(t)){return(0,u.__)("Invalid Vimeo URL","tutor")}return true};return/*#__PURE__*/(0,s/* .jsxs */.FD)(s/* .Fragment */.FK,{children:[/*#__PURE__*/(0,s/* .jsx */.Y)(U/* ["default"] */.A,{label:o,field:t,fieldState:r,helpText:g,children:()=>{return/*#__PURE__*/(0,s/* .jsx */.Y)("div",{ref:ec,children:/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:!C,fallback:/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.emptyMedia({hasVideoSource:true}),children:/*#__PURE__*/(0,s/* .jsx */.Y)(f/* .LoadingOverlay */.p8,{})}),children:/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:ey(),fallback:/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.emptyMedia({hasVideoSource:true}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:q.includes("html5"),children:/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{"data-cy":"upload-media",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"monitorPlay",height:24,width:24}),onClick:()=>{eb("video")},children:b})}),/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:q.filter(e=>e!=="html5").length>0,children:/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:!q.includes("html5"),fallback:/*#__PURE__*/(0,s/* .jsx */.Y)("button",{"data-cy":"add-from-url",type:"button",css:et.urlButton,onClick:()=>{el(e=>!e)},children:(0,u.__)("Add from URL","tutor")}),children:/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{"data-cy":"add-from-url",size:"small",variant:"secondary",icon:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"plusSquareBrand",height:24,width:24}),onClick:()=>{el(e=>!e)},children:(0,u.__)("Add from URL","tutor")})})}),/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:q.includes("html5"),children:/*#__PURE__*/(0,s/* .jsx */.Y)("p",{css:et.infoTexts,children:_})})]}),children:()=>{var e;return/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.previewWrapper,"data-cy":"media-preview",children:[/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.videoInfoWrapper,children:[/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.videoInfoCard,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:Q[eg===null||eg===void 0?void 0:eg.source]||"video",height:36,width:36}),/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.videoInfo,children:/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.videoInfoTitle,children:/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:S/* .styleUtils.text.ellipsis */.x.text.ellipsis(1),children:V.includes((eg===null||eg===void 0?void 0:eg.source)||"")?eg===null||eg===void 0?void 0:eg["source_".concat(eg.source)]:(e=j.find(e=>e.value===(eg===null||eg===void 0?void 0:eg.source)))===null||e===void 0?void 0:e.label})})})]}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.actionButtons,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:em!=="html5",children:/*#__PURE__*/(0,s/* .jsx */.Y)("button",{type:"button",css:S/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{el(true)},children:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"edit",height:24,width:24})})}),/*#__PURE__*/(0,s/* .jsx */.Y)("button",{"data-cy":"remove-video",type:"button",css:S/* .styleUtils.actionButton */.x.actionButton,onClick:()=>{e_("video")},children:/*#__PURE__*/(0,s/* .jsx */.Y)(h/* ["default"] */.A,{name:"cross",height:24,width:24})})]})]}),/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.imagePreview({hasImageInput:V.includes((eg===null||eg===void 0?void 0:eg.source)||"")}),children:/*#__PURE__*/(0,s/* .jsxs */.FD)(y/* ["default"] */.A,{when:V.includes((eg===null||eg===void 0?void 0:eg.source)||""),fallback:/*#__PURE__*/(0,s/* .jsx */.Y)("div",{css:et.urlData,children:J.watch("videoUrl")}),children:[/*#__PURE__*/(0,s/* .jsx */.Y)(p/* ["default"] */.A,{value:eg?{id:Number(eg.poster)||0,url:eg.poster_url||eo,title:""}:null,loading:er,isClearAble:!!(eg===null||eg===void 0?void 0:eg.poster),disabled:["vimeo","youtube"].includes((eg===null||eg===void 0?void 0:eg.source)||""),uploadHandler:()=>eb("poster"),clearHandler:()=>e_("poster"),buttonText:(0,u.__)("Upload Thumbnail","tutor"),infoText:(0,u.__)("Upload a thumbnail image for your video","tutor"),emptyImageCss:et.thumbImage,previewImageCss:et.thumbImage,overlayCss:et.thumbImage,replaceButtonText:(0,u.__)("Replace Thumbnail","tutor")}),/*#__PURE__*/(0,s/* .jsx */.Y)(y/* ["default"] */.A,{when:ea.hours>0||ea.minutes>0||ea.seconds>0,children:/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.duration,children:[ea.hours>0&&"".concat(ea.hours,"h")," ",ea.minutes,"m ",ea.seconds,"s"]})})]})})]})}})})})}}),/*#__PURE__*/(0,s/* .jsx */.Y)(I/* ["default"] */.A,{triggerRef:ec,isOpen:ed,placement:Y/* .POPOVER_PLACEMENTS.MIDDLE */.zA.MIDDLE,animationType:x/* .AnimationType.fadeIn */.J6.fadeIn,closePopover:()=>el(false),positionModifier:{top:17,left:0},maxWidth:"".concat(((W=ec.current)===null||W===void 0?void 0:W.offsetWidth)||300,"px"),children:/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.popoverContent,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(l/* .Controller */.xI,{control:J.control,name:"videoSource",rules:(0,a._)({},(0,H/* .requiredRule */.WN)()),render:e=>{return/*#__PURE__*/(0,s/* .jsx */.Y)(z/* ["default"] */.A,(0,i._)((0,a._)({},e),{options:B,disabled:j.length<=1,placeholder:(0,u.__)("Select source","tutor"),hideCaret:j.length<=1}))}}),/*#__PURE__*/(0,s/* .jsx */.Y)(l/* .Controller */.xI,{control:J.control,name:"videoUrl",rules:(0,i._)((0,a._)({},(0,H/* .requiredRule */.WN)()),{validate:ex}),render:e=>{return/*#__PURE__*/(0,s/* .jsx */.Y)(P/* ["default"] */.A,(0,i._)((0,a._)({},e),{inputCss:/*#__PURE__*/(0,c/* .css */.AH)("border-style:dashed;"),rows:2,placeholder:G[em]||(0,u.__)("Paste Here","tutor")}))}}),/*#__PURE__*/(0,s/* .jsxs */.FD)("div",{css:et.popoverButtonWrapper,children:[/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{variant:"text",size:"small",onClick:()=>{el(false)},children:(0,u.__)("Cancel","tutor")}),/*#__PURE__*/(0,s/* .jsx */.Y)(v/* ["default"] */.A,{"data-cy":"submit-url",variant:"secondary",size:"small",onClick:J.handleSubmit(ew),children:(0,u.__)("Ok","tutor")})]})]})})]})};/* export default */const ee=(0,w/* .withVisibilityControl */.M)(J);var et={emptyMediaWrapper:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",b/* .spacing["4"] */.YK["4"],";label{",_/* .typography.caption */.I.caption(),";color:",b/* .colorTokens.text.title */.I6.text.title,";}"),emptyMedia:e=>{var{hasVideoSource:t=false}=e;return/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:164px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:",b/* .spacing["8"] */.YK["8"],";border:1px dashed ",b/* .colorTokens.stroke.border */.I6.stroke.border,";border-radius:",b/* .borderRadius["8"] */.Vq["8"],";background-color:",b/* .colorTokens.background.status.warning */.I6.background.status.warning,";",t&&(0,c/* .css */.AH)(R(),b/* .colorTokens.bg.white */.I6.bg.white))},infoTexts:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.tiny */.I.tiny(),";color:",b/* .colorTokens.text.subdued */.I6.text.subdued,";"),warningText:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",b/* .spacing["4"] */.YK["4"],";",_/* .typography.caption */.I.caption(),";color:",b/* .colorTokens.text.warning */.I6.text.warning,";"),selectFromSettingsButton:/*#__PURE__*/(0,c/* .css */.AH)("background:",b/* .colorTokens.bg.white */.I6.bg.white,";"),urlData:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.caption */.I.caption(),";",S/* .styleUtils.display.flex */.x.display.flex("column"),";padding:",b/* .spacing["8"] */.YK["8"]," ",b/* .spacing["12"] */.YK["12"],";gap:",b/* .spacing["8"] */.YK["8"],";word-break:break-all;"),previewWrapper:/*#__PURE__*/(0,c/* .css */.AH)("width:100%;height:100%;border:1px solid ",b/* .colorTokens.stroke["default"] */.I6.stroke["default"],";border-radius:",b/* .borderRadius["8"] */.Vq["8"],";overflow:hidden;background-color:",b/* .colorTokens.bg.white */.I6.bg.white,";"),videoInfoWrapper:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";justify-content:space-between;align-items:center;gap:",b/* .spacing["20"] */.YK["20"],";padding:",b/* .spacing["8"] */.YK["8"]," ",b/* .spacing["12"] */.YK["12"],";"),videoInfoCard:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";align-items:center;gap:",b/* .spacing["8"] */.YK["8"],";svg{flex-shrink:0;color:",b/* .colorTokens.icon.hover */.I6.icon.hover,";}"),videoInfo:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",b/* .spacing["4"] */.YK["4"],";"),videoInfoTitle:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";",_/* .typography.caption */.I.caption("medium"),"    word-break:break-all;"),imagePreview:e=>{var{hasImageInput:t}=e;return/*#__PURE__*/(0,c/* .css */.AH)("width:100%;max-height:168px;position:relative;overflow:hidden;background-color:",b/* .colorTokens.background["default"] */.I6.background["default"],";",!t&&(0,c/* .css */.AH)(W(),S/* .styleUtils.overflowYAuto */.x.overflowYAuto),";scrollbar-gutter:auto;&:hover{[data-hover-buttons-wrapper]{opacity:1;}}")},duration:/*#__PURE__*/(0,c/* .css */.AH)(_/* .typography.tiny */.I.tiny(),";position:absolute;bottom:",b/* .spacing["12"] */.YK["12"],";right:",b/* .spacing["12"] */.YK["12"],";background-color:rgba(0,0,0,0.5);color:",b/* .colorTokens.text.white */.I6.text.white,";padding:",b/* .spacing["4"] */.YK["4"]," ",b/* .spacing["8"] */.YK["8"],";border-radius:",b/* .borderRadius["6"] */.Vq["6"],";pointer-events:none;"),thumbImage:/*#__PURE__*/(0,c/* .css */.AH)("border-radius:0;border:none;"),urlButton:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.small */.I.small("medium"),";color:",b/* .colorTokens.text.brand */.I6.text.brand,";border-radius:",b/* .borderRadius["2"] */.Vq["2"],";padding:0 ",b/* .spacing["4"] */.YK["4"],";margin-bottom:",b/* .spacing["8"] */.YK["8"],";&:focus,&:active,&:hover{background:none;color:",b/* .colorTokens.text.brand */.I6.text.brand,";}&:focus-visible{outline:2px solid ",b/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),actionButtons:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";gap:",b/* .spacing["4"] */.YK["4"],";"),popover:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;width:100%;z-index:",b/* .zIndex.dropdown */.fE.dropdown,";background-color:",b/* .colorTokens.bg.white */.I6.bg.white,";border-radius:",b/* .borderRadius.card */.Vq.card,";box-shadow:",b/* .shadow.popover */.r7.popover,";"),popoverContent:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",b/* .spacing["12"] */.YK["12"],";padding:",b/* .spacing["16"] */.YK["16"],";"),popoverButtonWrapper:/*#__PURE__*/(0,c/* .css */.AH)(S/* .styleUtils.display.flex */.x.display.flex(),";gap:",b/* .spacing["8"] */.YK["8"],";justify-content:flex-end;")}},15004:function(e,t,r){r.d(t,{A:()=>z});/* import */var n=r(93640);/* import */var a=r(60599);/* import */var i=r(52639);/* import */var o=r(41594);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(42771);/* import */var l=r(12470);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(18853);/* import */var v=/*#__PURE__*/r.n(u);/* import */var p=r(47918);/* import */var f=r(25074);/* import */var h=r(56705);/* import */var m=r(46225);/* import */var g=r(90453);/* import */var b=r(54184);/* import */var _=r(88325);/* import */var y=r(56949);/* import */var w=r(17944);/* import */var x=r(19448);/* import */var A=r(3311);/* import */var Y=r(74412);/* import */var k=r(19393);/* import */var I=r(13448);/* import */var D=r(3013);/* import */var C=r(59189);/* import */var M=r(52874);/* import */var E=r(55051);/* import */var T=r(17064);/* import */var S=r(42263);function O(){var e=(0,a._)(["\n      overflow: hidden;\n      border-radius: ",";\n    "]);O=function t(){return e};return e}var H;var N={droip:"droipColorized",elementor:"elementorColorized",gutenberg:"gutenbergColorized",divi:"diviColorized"};var F=!!Y/* .tutorConfig.tutor_pro_url */.P.tutor_pro_url;var K=(H=Y/* .tutorConfig.settings */.P.settings)===null||H===void 0?void 0:H.chatgpt_key_exist;var L=e=>{var{editorUsed:t,onBackToWPEditorClick:r,onCustomEditorButtonClick:a}=e;var{showModal:s}=(0,w/* .useModal */.h)();var[d,c]=(0,o.useState)("");return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:P.editorOverlay,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{when:t.name!=="gutenberg",children:/*#__PURE__*/(0,i/* .jsx */.Y)(f/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:P.editWithButton,icon:/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:"arrowLeft",height:24,width:24}),loading:d==="back_to",onClick:()=>(0,n._)(function*(){var{action:e}=yield s({component:y/* ["default"] */.A,props:{title:(0,l.__)("Back to WordPress Editor","tutor"),description:/*#__PURE__*/(0,i/* .jsx */.Y)(p/* ["default"] */.A,{type:"warning",icon:"warning",children:(0,l.__)("Warning: Switching to the WordPress default editor may cause issues with your current layout, design, and content.","tutor")}),confirmButtonText:(0,l.__)("Confirm","tutor"),confirmButtonVariant:"primary"},depthIndex:I/* .zIndex.highest */.fE.highest});if(e==="CONFIRM"){try{c("back_to");yield r===null||r===void 0?void 0:r(t.name)}finally{c("")}}})(),children:(0,l.__)("Back to WordPress Editor","tutor")})}),/*#__PURE__*/(0,i/* .jsx */.Y)(f/* ["default"] */.A,{variant:"tertiary",size:"small",buttonCss:P.editWithButton,loading:d==="edit_with",icon:N[t.name]&&/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:N[t.name],height:24,width:24}),onClick:()=>(0,n._)(function*(){try{c("edit_with");yield a===null||a===void 0?void 0:a(t);window.location.href=t.link}finally{c("")}})(),children:/* translators: %s is the editor name */(0,l.sprintf)((0,l.__)("Edit with %s","tutor"),t===null||t===void 0?void 0:t.label)})]})};var U=e=>{var{label:t,field:r,fieldState:a,disabled:s,readOnly:d,loading:c,placeholder:u,helpText:v,onChange:p,generateWithAi:f=false,onClickAiButton:y,hasCustomEditorSupport:O=false,isMinimal:H=false,hideMediaButtons:U=false,hideQuickTags:z=false,editors:R=[],editorUsed:W={name:"classic",label:"Classic Editor",link:""},isMagicAi:j=false,autoFocus:B=false,onCustomEditorButtonClick:q,onBackToWPEditorClick:V,onFullScreenChange:G,min_height:Q,max_height:Z,toolbar1:$,toolbar2:X}=e;var J,ee,et,er,en;var{showModal:ea}=(0,w/* .useModal */.h)();var ei=((J=Y/* .tutorConfig.settings */.P.settings)===null||J===void 0?void 0:J.hide_admin_bar_for_users)==="off";var eo=(et=Y/* .tutorConfig.current_user */.P.current_user)===null||et===void 0?void 0:(ee=et.roles)===null||ee===void 0?void 0:ee.includes(k/* .TutorRoles.ADMINISTRATOR */.gt.ADMINISTRATOR);var es=(en=Y/* .tutorConfig.current_user */.P.current_user)===null||en===void 0?void 0:(er=en.roles)===null||er===void 0?void 0:er.includes(k/* .TutorRoles.TUTOR_INSTRUCTOR */.gt.TUTOR_INSTRUCTOR);var[ed,el]=(0,o.useState)(null);var ec=R.filter(e=>eo||es&&ei||e.name==="droip");var eu=O&&ec.length>0;var ev=eu&&W.name!=="classic";var ep=()=>{if(!F){ea({component:x/* ["default"] */.A,props:{image:E,image2x:T}})}else if(!K){ea({component:A/* ["default"] */.A,props:{image:E,image2x:T}})}else{ea({component:_/* ["default"] */.A,isMagicAi:true,props:{title:(0,l.__)("AI Studio","tutor"),icon:/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:"magicAiColorize",width:24,height:24}),characters:1e3,field:r,fieldState:a,is_html:true}});y===null||y===void 0?void 0:y()}};var ef=/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:P.editorLabel,children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("span",{css:P.labelWithAi,children:[t,/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{when:f,children:/*#__PURE__*/(0,i/* .jsx */.Y)("button",{type:"button",css:P.aiButton,onClick:ep,children:/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:"magicAiColorize",width:32,height:32})})})]}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:P.editorsButtonWrapper,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("span",{children:(0,l.__)("Edit with","tutor")}),/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:P.customEditorButtons,children:/*#__PURE__*/(0,i/* .jsx */.Y)(D/* ["default"] */.A,{each:ec,children:e=>/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{content:e.label,delay:200,children:/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:P.customEditorButton,disabled:ed===e.name,onClick:()=>(0,n._)(function*(){try{el(e.name);yield q===null||q===void 0?void 0:q(e);window.location.href=e.link}finally{el(null)}})(),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{when:ed===e.name,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* .LoadingOverlay */.p8,{})}),/*#__PURE__*/(0,i/* .jsx */.Y)(m/* ["default"] */.A,{name:N[e.name],height:24,width:24})]})},e.name)})})]})]});return/*#__PURE__*/(0,i/* .jsx */.Y)(S/* ["default"] */.A,{label:eu?ef:t,field:r,fieldState:a,disabled:s,readOnly:d,placeholder:u,helpText:v,isMagicAi:j,generateWithAi:!eu&&f,onClickAiButton:ep,replaceEntireLabel:eu,children:()=>{if(c){return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:M/* .styleUtils.flexCenter */.x.flexCenter(),children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.Ay,{size:20,color:I/* .colorTokens.icon["default"] */.I6.icon["default"]})})}var e;return/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:P.wrapper({isOverlayVisible:ev}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)(C/* ["default"] */.A,{when:ev,children:/*#__PURE__*/(0,i/* .jsx */.Y)(L,{editorUsed:W,onBackToWPEditorClick:V,onCustomEditorButtonClick:q})}),/*#__PURE__*/(0,i/* .jsx */.Y)(b/* ["default"] */.A,{value:(e=r.value)!==null&&e!==void 0?e:"",onChange:e=>{r.onChange(e);if(p){p(e)}},isMinimal:H,hideMediaButtons:U,hideQuickTags:z,autoFocus:B,onFullScreenChange:G,readonly:d,min_height:Q,max_height:Z,toolbar1:$,toolbar2:X})]})}})};/* export default */const z=U;var P={wrapper:e=>{var{isOverlayVisible:t=false}=e;return/*#__PURE__*/(0,d/* .css */.AH)("position:relative;",t&&(0,d/* .css */.AH)(O(),I/* .borderRadius["6"] */.Vq["6"]))},editorLabel:/*#__PURE__*/(0,d/* .css */.AH)("display:flex;width:100%;align-items:center;justify-content:space-between;"),aiButton:/*#__PURE__*/(0,d/* .css */.AH)(M/* .styleUtils.resetButton */.x.resetButton,";",M/* .styleUtils.flexCenter */.x.flexCenter(),";width:32px;height:32px;border-radius:",I/* .borderRadius["4"] */.Vq["4"],";:disabled{cursor:not-allowed;}&:focus-visible{outline:2px solid ",I/* .colorTokens.stroke.brand */.I6.stroke.brand,";}"),labelWithAi:/*#__PURE__*/(0,d/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["4"] */.YK["4"],";"),editorsButtonWrapper:/*#__PURE__*/(0,d/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["8"] */.YK["8"],";color:",I/* .colorTokens.text.hints */.I6.text.hints,";"),customEditorButtons:/*#__PURE__*/(0,d/* .css */.AH)("display:flex;align-items:center;gap:",I/* .spacing["4"] */.YK["4"],";"),customEditorButton:/*#__PURE__*/(0,d/* .css */.AH)(M/* .styleUtils.resetButton */.x.resetButton,"    display:flex;align-items:center;justify-content:center;position:relative;border-radius:",I/* .borderRadius.circle */.Vq.circle,";&:focus-visible{outline:2px solid ",I/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}"),editorOverlay:/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;height:100%;width:100%;",M/* .styleUtils.flexCenter */.x.flexCenter(),";gap:",I/* .spacing["8"] */.YK["8"],";background-color:",v()(I/* .colorTokens.background.modal */.I6.background.modal,.6),";border-radius:",I/* .borderRadius["6"] */.Vq["6"],";z-index:",I/* .zIndex.positive */.fE.positive,";backdrop-filter:blur(8px);"),editWithButton:/*#__PURE__*/(0,d/* .css */.AH)("background:",I/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";color:",I/* .colorTokens.text.primary */.I6.text.primary,";box-shadow:inset 0 -1px 0 0 ",v()("#1112133D",.24),",0 1px 0 0 ",v()("#1112133D",.8),";")}},21055:function(e,t,r){r.d(t,{f:()=>l});/* import */var n=r(52639);/* import */var a=r(41594);/* import */var i=/*#__PURE__*/r.n(a);/* import */var o=r(42771);/* import */var s=r(13448);/* import */var d=r(67035);var l=/*#__PURE__*/i().forwardRef((e,t)=>{var{src:r,width:i,height:o,brushSize:s,trackStack:l,pointer:u,setTrackStack:v,setPointer:p}=e;var[f,h]=(0,a.useState)(false);var[m,g]=(0,a.useState)({x:0,y:0});var b=(0,a.useRef)(null);var _=e=>{var{canvas:r,context:n}=(0,d/* .getCanvas */.dX)(t);if(!r||!n){return}var a=r.getBoundingClientRect();var i=(e.clientX-a.left)*(r.width/a.width);var o=(e.clientY-a.top)*(r.height/a.height);n.globalCompositeOperation="destination-out";n.beginPath();n.moveTo(i,o);h(true);g({x:i,y:o})};var y=e=>{var{canvas:r,context:n}=(0,d/* .getCanvas */.dX)(t);if(!r||!n||!b.current){return}var a=r.getBoundingClientRect();var i={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};if(f){(0,d/* .drawPath */.kd)(n,i)}b.current.style.left="".concat(i.x,"px");b.current.style.top="".concat(i.y,"px")};var w=e=>{var{canvas:r,context:n}=(0,d/* .getCanvas */.dX)(t);if(!n||!r){return}h(false);n.closePath();var a=r.getBoundingClientRect();var i={x:(e.clientX-a.left)*(r.width/a.width),y:(e.clientY-a.top)*(r.height/a.height)};// Check if the mouse is just clicked but not drag for drawing a path, then draw a circle
if((0,d/* .calculateCartesianDistance */.KG)(m,i)===0){(0,d/* .drawPath */.kd)(n,{x:i.x+1,y:i.y+1})}v(e=>{var t=e.slice(0,u);return[...t,n.getImageData(0,0,1024,1024)]});p(e=>e+1)};var x=()=>{var{canvas:e,context:n}=(0,d/* .getCanvas */.dX)(t);if(!e||!n){return}var a=new Image;a.src=r;a.onload=()=>{n.clearRect(0,0,e.width,e.height);var t=a.width/a.height;var r=e.width/e.height;var i;var o;if(r>t){o=e.height;i=e.height*t}else{i=e.width;o=e.width/t}var s=(e.width-i)/2;var d=(e.height-o)/2;n.drawImage(a,s,d,i,o);if(l.length===0){v([n.getImageData(0,0,e.width,e.height)])}};n.lineJoin="round";n.lineCap="round"};var A=()=>{if(!b.current){return}document.body.style.cursor="none";b.current.style.display="block"};var Y=()=>{if(!b.current){return}document.body.style.cursor="auto";b.current.style.display="none"};(0,a.useEffect)(()=>{x();// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,n/* .jsxs */.FD)("div",{css:c.wrapper,children:[/*#__PURE__*/(0,n/* .jsx */.Y)("canvas",{ref:t,width:i,height:o,onMouseDown:_,onMouseMove:y,onMouseUp:w,onMouseEnter:A,onMouseLeave:Y}),/*#__PURE__*/(0,n/* .jsx */.Y)("div",{ref:b,css:c.customCursor(s)})]})});var c={wrapper:/*#__PURE__*/(0,o/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,o/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",s/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",s/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",s/* .zIndex.highest */.fE.highest,";display:none;")}},54449:function(e,t,r){r.d(t,{A6:()=>f,co:()=>h,i3:()=>v});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(52639);/* import */var o=r(41594);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(78346);/* import */var l=r(12470);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(34092);var v=[(0,l.__)("A serene classroom setting with books and a chalkboard","tutor"),(0,l.__)("An abstract representation of innovation and creativity","tutor"),(0,l.__)("A vibrant workspace with a laptop and coffee cup","tutor"),(0,l.__)("A modern design with digital learning icons","tutor"),(0,l.__)("A futuristic cityscape with a glowing pathway","tutor"),(0,l.__)("A peaceful nature scene with soft colors","tutor"),(0,l.__)("A professional boardroom with sleek visuals","tutor"),(0,l.__)("A stack of books with warm, inviting lighting","tutor"),(0,l.__)("A dynamic collage of technology and education themes","tutor"),(0,l.__)("A bold and minimalistic design with striking colors","tutor")];// eslint-disable-next-line @typescript-eslint/no-explicit-any
var p=/*#__PURE__*/s().createContext(null);var f=()=>{var e=(0,o.useContext)(p);if(!e){throw new Error("useMagicImageGeneration must be used within MagicImageGenerationProvider.")}return e};var h=e=>{var{children:t,field:r,fieldState:s,onCloseModal:l}=e;var c=(0,u/* .useFormWithGlobalError */.p)({defaultValues:{prompt:"",style:"none"}});var[v,f]=(0,o.useState)("generation");var[h,m]=(0,o.useState)("");var[g,b]=(0,o.useState)([null,null,null,null]);var _=(0,o.useCallback)(e=>{f(e)},[]);return/*#__PURE__*/(0,i/* .jsx */.Y)(p.Provider,{value:{state:v,onDropdownMenuChange:_,images:g,setImages:b,currentImage:h,setCurrentImage:m,field:r,fieldState:s,onCloseModal:l},children:/*#__PURE__*/(0,i/* .jsx */.Y)(d/* .FormProvider */.Op,(0,a._)((0,n._)({},c),{children:t}))})}},15296:function(e,t,r){r.d(t,{u:()=>P});/* import */var n=r(93640);/* import */var a=r(41147);/* import */var i=r(14206);/* import */var o=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(78346);/* import */var c=r(42771);/* import */var u=r(12470);/* import */var v=/*#__PURE__*/r.n(u);/* import */var p=r(78353);/* import */var f=r(46225);/* import */var h=r(40925);/* import */var m=r(89665);/* import */var g=r(74054);/* import */var b=r(13448);/* import */var _=r(81547);/* import */var y=r(3013);/* import */var w=r(59189);/* import */var x=r(97200);/* import */var A=r(52874);/* import */var Y=r(49842);/* import */var k=r(13190);/* import */var I=r(22286);/* import */var D=r(43623);/* import */var C=r(71801);/* import */var M=r(64613);/* import */var E=r(36265);/* import */var T=r(47035);/* import */var S=r(50861);/* import */var O=r(92895);/* import */var H=r(47719);/* import */var N=r(26371);/* import */var F=r(8031);/* import */var K=r(54449);/* import */var L=r(9815);/* import */var U=r(76657);var z=[{label:(0,u.__)("None","tutor"),value:"none",image:S},{label:(0,u.__)("Photo","tutor"),value:"photo",image:H},{label:(0,u.__)("Neon","tutor"),value:"neon",image:T},{label:(0,u.__)("3D","tutor"),value:"3d",image:k},{label:(0,u.__)("Painting","tutor"),value:"painting",image:O},{label:(0,u.__)("Sketch","tutor"),value:"sketch",image:F},{label:(0,u.__)("Concept","tutor"),value:"concept_art",image:D},{label:(0,u.__)("Illustration","tutor"),value:"illustration",image:E},{label:(0,u.__)("Dreamy","tutor"),value:"dreamy",image:C},{label:(0,u.__)("Filmic","tutor"),value:"filmic",image:M},{label:(0,u.__)("Retro","tutor"),value:"retrowave",image:N},{label:(0,u.__)("Black & White","tutor"),value:"black-and-white",image:I}];var P=()=>{var e=(0,l/* .useForm */.mN)({defaultValues:{style:"none",prompt:""}});var{images:t,setImages:r}=(0,K/* .useMagicImageGeneration */.A6)();var d=(0,x/* .useMagicImageGenerationMutation */.R8)();var{showToast:c}=(0,h/* .useToast */.d)();var[v,b]=(0,s.useState)(t.every(e=>e===null));var[_,A]=(0,s.useState)([false,false,false,false]);var k=e.watch("style");var I=e.watch("prompt");var D=!k||!I;var C=t.some(Y/* .isDefined */.O9);(0,s.useEffect)(()=>{if(d.isError){c({type:"danger",message:d.error.response.data.message})}// eslint-disable-next-line react-hooks/exhaustive-deps
},[d.isError]);(0,s.useEffect)(()=>{e.setFocus("prompt");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);return/*#__PURE__*/(0,o/* .jsxs */.FD)("form",{css:U/* .magicAIStyles.wrapper */.C.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){A([true,true,true,true]);b(false);try{yield Promise.all(Array.from({length:4}).map((t,n)=>{return d.mutateAsync(e).then(e=>{r(t=>{var r,a;var i=[...t];var o;i[n]=(o=(a=e.data.data)===null||a===void 0?void 0:(r=a[0])===null||r===void 0?void 0:r.b64_json)!==null&&o!==void 0?o:null;return i});A(e=>{var t=[...e];t[n]=false;return t})}).catch(e=>{A(e=>{var t=[...e];t[n]=false;return t});throw e})}))}catch(e){A([false,false,false,false]);b(true)}})()),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:U/* .magicAIStyles.left */.C.left,children:/*#__PURE__*/(0,o/* .jsx */.Y)(w/* ["default"] */.A,{when:!v,fallback:/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"magicAiPlaceholder",width:72,height:72}),children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:R.images,children:/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{each:t,children:(e,t)=>{return/*#__PURE__*/(0,o/* .jsx */.Y)(L/* .AiImageItem */.z,{src:e,loading:_[t],index:t},t)}})})})}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:U/* .magicAIStyles.right */.C.right,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:R.fields,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:R.promptWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(l/* .Controller */.xI,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,u.__)("Visualize Your Course","tutor"),placeholder:(0,u.__)("Describe the image you want for your course thumbnail","tutor"),rows:4,isMagicAi:true,disabled:d.isPending,enableResize:false}))}),/*#__PURE__*/(0,o/* .jsxs */.FD)("button",{type:"button",css:R.inspireButton,onClick:()=>{var t=K/* .inspirationPrompts.length */.i3.length;var r=Math.floor(Math.random()*t);e.reset((0,i._)((0,a._)({},e.getValues()),{prompt:K/* .inspirationPrompts */.i3[r]}))},disabled:d.isPending,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:"bulbLine"}),(0,u.__)("Inspire Me","tutor")]})]}),/*#__PURE__*/(0,o/* .jsx */.Y)(l/* .Controller */.xI,{control:e.control,name:"style",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,u.__)("Styles","tutor"),options:z,disabled:d.isPending}))})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:U/* .magicAIStyles.rightFooter */.C.rightFooter,children:/*#__PURE__*/(0,o/* .jsxs */.FD)(p/* ["default"] */.A,{type:"submit",disabled:d.isPending||D,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(f/* ["default"] */.A,{name:C?"reload":"magicAi",width:24,height:24}),C?(0,u.__)("Generate Again","tutor"):(0,u.__)("Generate Now","tutor")]})})]})]})};var R={images:/*#__PURE__*/(0,c/* .css */.AH)("display:grid;grid-template-columns:repeat(2,minmax(150px,1fr));grid-template-rows:repeat(2,minmax(150px,1fr));gap:",b/* .spacing["12"] */.YK["12"],";align-self:start;padding:",b/* .spacing["24"] */.YK["24"],";width:100%;height:100%;> div{aspect-ratio:1 / 1;}"),fields:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",b/* .spacing["12"] */.YK["12"],";"),promptWrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;textarea{padding-bottom:",b/* .spacing["40"] */.YK["40"]," !important;}"),inspireButton:/*#__PURE__*/(0,c/* .css */.AH)(A/* .styleUtils.resetButton */.x.resetButton,";",_/* .typography.small */.I.small(),";position:absolute;height:28px;bottom:",b/* .spacing["12"] */.YK["12"],";left:",b/* .spacing["12"] */.YK["12"],";border:1px solid ",b/* .colorTokens.stroke.brand */.I6.stroke.brand,";border-radius:",b/* .borderRadius["4"] */.Vq["4"],";display:flex;align-items:center;gap:",b/* .spacing["4"] */.YK["4"],";color:",b/* .colorTokens.text.brand */.I6.text.brand,";padding-inline:",b/* .spacing["12"] */.YK["12"],";background-color:",b/* .colorTokens.background.white */.I6.background.white,";&:hover{background-color:",b/* .colorTokens.background.brand */.I6.background.brand,";color:",b/* .colorTokens.text.white */.I6.text.white,";}&:focus-visible{outline:2px solid ",b/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:1px;}&:disabled{background-color:",b/* .colorTokens.background.disable */.I6.background.disable,";color:",b/* .colorTokens.text.disable */.I6.text.disable,";}")}},9815:function(e,t,r){r.d(t,{z:()=>M});/* import */var n=r(93640);/* import */var a=r(60599);/* import */var i=r(52639);/* import */var o=r(41594);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(42771);/* import */var l=r(12470);/* import */var c=/*#__PURE__*/r.n(l);/* import */var u=r(78353);/* import */var v=r(46225);/* import */var p=r(13448);/* import */var f=r(81547);/* import */var h=r(3013);/* import */var m=r(31569);/* import */var g=r(21678);/* import */var b=r(97200);/* import */var _=r(67035);/* import */var y=r(52874);/* import */var w=r(33231);/* import */var x=r(54449);function A(){var e=(0,a._)(["\n      background-position: top left;\n    "]);A=function t(){return e};return e}function Y(){var e=(0,a._)(["\n      background-position: top right;\n      animation-delay: 0.5s;\n    "]);Y=function t(){return e};return e}function k(){var e=(0,a._)(["\n      background-position: bottom left;\n      animation-delay: 1.5s;\n    "]);k=function t(){return e};return e}function I(){var e=(0,a._)(["\n      background-position: bottom right;\n      animation-delay: 1s;\n    "]);I=function t(){return e};return e}function D(){var e=(0,a._)(["\n      outline-color: ",";\n\n      [data-actions] {\n        opacity: 1;\n      }\n    "]);D=function t(){return e};return e}var C=[{label:(0,l.__)("Magic Fill","tutor"),value:"magic-fill",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"magicWand",width:24,height:24})},// @TODO: will be implemented in the future
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
{label:(0,l.__)("Download","tutor"),value:"download",icon:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"download",width:24,height:24})}];var M=e=>{var{src:t,loading:r,index:a}=e;var s=(0,o.useRef)(null);var[d,c]=(0,o.useState)(false);var{onDropdownMenuChange:p,setCurrentImage:f,onCloseModal:y,field:A}=(0,x/* .useMagicImageGeneration */.A6)();var Y=(0,b/* .useStoreAIGeneratedImageMutation */.ah)();if(r||!t){return/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:T.loader(a+1)})}return/*#__PURE__*/(0,i/* .jsxs */.FD)(i/* .Fragment */.FK,{children:[/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{css:T.image({isActive:Y.isPending}),children:[/*#__PURE__*/(0,i/* .jsx */.Y)("img",{src:t,alt:(0,l.__)("Generated Image","tutor")}),/*#__PURE__*/(0,i/* .jsxs */.FD)("div",{"data-actions":true,children:[/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:T.useButton,children:/*#__PURE__*/(0,i/* .jsxs */.FD)(u/* ["default"] */.A,{variant:"primary",disabled:Y.isPending,onClick:()=>(0,n._)(function*(){if(!t){return}var e=yield Y.mutateAsync({image:t});if(e.data){A.onChange(e.data);y()}})(),loading:Y.isPending,children:[/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"download",width:24,height:24}),(0,l.__)("Use This","tutor")]})}),/*#__PURE__*/(0,i/* .jsx */.Y)(u/* ["default"] */.A,{variant:"primary",size:"icon",css:T.threeDots,ref:s,onClick:()=>c(true),children:/*#__PURE__*/(0,i/* .jsx */.Y)(v/* ["default"] */.A,{name:"threeDotsVertical",width:24,height:24})})]})]}),/*#__PURE__*/(0,i/* .jsx */.Y)(g/* ["default"] */.A,{triggerRef:s,isOpen:d,arrow:true,closePopover:()=>{c(false)},animationType:m/* .AnimationType.slideDown */.J6.slideDown,maxWidth:"160px",children:/*#__PURE__*/(0,i/* .jsx */.Y)("div",{css:T.dropdownOptions,children:/*#__PURE__*/(0,i/* .jsx */.Y)(h/* ["default"] */.A,{each:C,children:(e,r)=>/*#__PURE__*/(0,i/* .jsxs */.FD)("button",{type:"button",css:T.dropdownItem,onClick:()=>{switch(e.value){case"magic-fill":{f(t);p(e.value);break}case"download":{var r="".concat((0,w/* .nanoid */.Ak)(),".png");(0,_/* .downloadBase64Image */.JD)(t,r);break}default:break}c(false)},children:[e.icon,e.label]},r)})})})]})};var E=/*#__PURE__*/(0,d/* .keyframes */.i7)("		0%{opacity:0.3;}25%{opacity:0.5;}50%{opacity:0.7;}75%{opacity:0.5;}100%{opacity:0.3;}");var T={loader:e=>/*#__PURE__*/(0,d/* .css */.AH)("border-radius:",p/* .borderRadius["12"] */.Vq["12"],";background:linear-gradient(\n      73.09deg,#ff9645 18.05%,#ff6471 30.25%,#cf6ebd 55.42%,#a477d1 71.66%,#3e64de 97.9%\n    );position:relative;width:100%;height:100%;background-size:612px 612px;opacity:0.3;transition:opacity 0.5s ease;animation:",E," 2s linear infinite;",e===1&&(0,d/* .css */.AH)(A())," ",e===2&&(0,d/* .css */.AH)(Y()),"		",e===3&&(0,d/* .css */.AH)(k()),"		",e===4&&(0,d/* .css */.AH)(I())),image:e=>{var{isActive:t}=e;return/*#__PURE__*/(0,d/* .css */.AH)("width:100%;height:100%;overflow:hidden;border-radius:",p/* .borderRadius["12"] */.Vq["12"],";position:relative;outline:2px solid transparent;outline-offset:2px;transition:border-radius 0.3s ease;[data-actions]{opacity:0;transition:opacity 0.3s ease;}img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}",t&&(0,d/* .css */.AH)(D(),p/* .colorTokens.stroke.brand */.I6.stroke.brand),"    &:hover,&:focus-within{outline-color:",p/* .colorTokens.stroke.brand */.I6.stroke.brand,";[data-actions]{opacity:1;}}")},threeDots:/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;top:",p/* .spacing["8"] */.YK["8"],";right:",p/* .spacing["8"] */.YK["8"],";border-radius:",p/* .borderRadius["4"] */.Vq["4"],";"),useButton:/*#__PURE__*/(0,d/* .css */.AH)("position:absolute;left:50%;bottom:",p/* .spacing["12"] */.YK["12"],";transform:translateX(-50%);button{display:inline-flex;align-items:center;gap:",p/* .spacing["4"] */.YK["4"],";}"),dropdownOptions:/*#__PURE__*/(0,d/* .css */.AH)("display:flex;flex-direction:column;padding-block:",p/* .spacing["8"] */.YK["8"],";"),dropdownItem:/*#__PURE__*/(0,d/* .css */.AH)(f/* .typography.small */.I.small(),";",y/* .styleUtils.resetButton */.x.resetButton,";height:40px;display:flex;gap:",p/* .spacing["10"] */.YK["10"],";align-items:center;transition:background-color 0.3s ease;color:",p/* .colorTokens.text.title */.I6.text.title,";padding-inline:",p/* .spacing["8"] */.YK["8"],";cursor:pointer;svg{color:",p/* .colorTokens.icon["default"] */.I6.icon["default"],";}&:hover{background-color:",p/* .colorTokens.background.hover */.I6.background.hover,";}")}},72283:function(e,t,r){r.d(t,{A:()=>O});/* import */var n=r(93640);/* import */var a=r(41147);/* import */var i=r(14206);/* import */var o=r(52639);/* import */var s=r(41594);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(78346);/* import */var c=r(42771);/* import */var u=r(12470);/* import */var v=/*#__PURE__*/r.n(u);/* import */var p=r(78353);/* import */var f=r(94361);/* import */var h=r(46225);/* import */var m=r(15314);/* import */var g=r(74054);/* import */var b=r(13448);/* import */var _=r(81547);/* import */var y=r(59189);/* import */var w=r(44486);/* import */var x=r(34092);/* import */var A=r(97200);/* import */var Y=r(67035);/* import */var k=r(52874);/* import */var I=r(33231);/* import */var D=r(21055);/* import */var C=r(54449);/* import */var M=r(76657);var E=620;var T=620;var S=()=>{var e=(0,x/* .useFormWithGlobalError */.p)({defaultValues:{brush_size:40,prompt:""}});var t=(0,A/* .useMagicFillImageMutation */.wt)();var r=(0,s.useRef)(null);var{onDropdownMenuChange:d,currentImage:v,field:b,onCloseModal:_}=(0,C/* .useMagicImageGeneration */.A6)();var k=(0,A/* .useStoreAIGeneratedImageMutation */.ah)();var S=(0,w/* .useDebounce */.d)(e.watch("brush_size",40));var[O,H]=(0,s.useState)([]);var[F,K]=(0,s.useState)(1);var L=(0,s.useCallback)((e,t)=>{var n;var a=(n=r.current)===null||n===void 0?void 0:n.getContext("2d");if(!a){return}for(var i of t.slice(0,e)){a.putImageData(i,0,0)}},[]);(0,s.useEffect)(()=>{var e;var t=(e=r.current)===null||e===void 0?void 0:e.getContext("2d");if(!t){return}t.lineWidth=S},[S]);(0,s.useEffect)(()=>{var e=e=>{if(e.metaKey){if(e.shiftKey&&e.key.toUpperCase()==="Z"){L(F+1,O);K(e=>Math.min(e+1,O.length));return}if(e.key.toUpperCase()==="Z"){L(F-1,O);K(e=>Math.max(e-1,1));return}}};window.addEventListener("keydown",e);return()=>{window.removeEventListener("keydown",e)}},[F,O,L]);if(!v){return null}return/*#__PURE__*/(0,o/* .jsxs */.FD)("form",{css:M/* .magicAIStyles.wrapper */.C.wrapper,onSubmit:e.handleSubmit(e=>(0,n._)(function*(){var n=r.current;var a=n===null||n===void 0?void 0:n.getContext("2d");if(!n||!a){return}var i={prompt:e.prompt,image:(0,Y/* .getImageData */.M5)(n)};var o=yield t.mutateAsync(i);if(o){var s=new Image;s.onload=()=>{n.width=E;n.height=T;a.drawImage(s,0,0,n.width,n.height);a.lineWidth=S;a.lineJoin="round";a.lineCap="round"};s.src=o}})()),children:[/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:M/* .magicAIStyles.left */.C.left,children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.leftWrapper,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.actionBar,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.backButtonWrapper,children:[/*#__PURE__*/(0,o/* .jsx */.Y)("button",{type:"button",css:N.backButton,onClick:()=>d("generation"),children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{name:"arrowLeft"})}),(0,u.__)("Magic Fill","tutor")]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.actions,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{variant:"ghost",disabled:O.length===0,onClick:()=>{L(1,O);H(O.slice(0,1));K(1)},children:(0,u.__)("Revert to Original","tutor")}),/*#__PURE__*/(0,o/* .jsx */.Y)(f/* .Separator */.w,{variant:"vertical",css:/*#__PURE__*/(0,c/* .css */.AH)("min-height:16px;")}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.undoRedo,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{variant:"ghost",size:"icon",disabled:F<=1,onClick:()=>{L(F-1,O);K(e=>Math.max(e-1,1))},children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{name:"undo",width:20,height:20})}),/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{variant:"ghost",size:"icon",disabled:F===O.length,onClick:()=>{L(F+1,O);K(e=>Math.min(e+1,O.length))},children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{name:"redo",width:20,height:20})})]})]})]}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.canvasAndLoading,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(D/* .DrawingCanvas */.f,{ref:r,width:E,height:T,src:v,brushSize:S,trackStack:O,pointer:F,setTrackStack:H,setPointer:K}),/*#__PURE__*/(0,o/* .jsx */.Y)(y/* ["default"] */.A,{when:t.isPending,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:N.loading})})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:N.footerActions,children:/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:N.footerActionsLeft,children:/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{variant:"secondary",onClick:()=>{var e="".concat((0,I/* .nanoid */.Ak)(),".png");var{canvas:t}=(0,Y/* .getCanvas */.dX)(r);if(!t)return;(0,Y/* .downloadBase64Image */.JD)((0,Y/* .getImageData */.M5)(t),e)},children:/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{name:"download",width:24,height:24})})})})]})}),/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:M/* .magicAIStyles.right */.C.right,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.fields,children:[/*#__PURE__*/(0,o/* .jsx */.Y)(l/* .Controller */.xI,{control:e.control,name:"brush_size",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(m/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:"Brush Size",min:1,max:100,isMagicAi:true,hasBorder:true}))}),/*#__PURE__*/(0,o/* .jsx */.Y)(l/* .Controller */.xI,{control:e.control,name:"prompt",render:e=>/*#__PURE__*/(0,o/* .jsx */.Y)(g/* ["default"] */.A,(0,i._)((0,a._)({},e),{label:(0,u.__)("Describe the Fill","tutor"),placeholder:(0,u.__)("Write 5 words to describe...","tutor"),rows:4,isMagicAi:true}))})]}),/*#__PURE__*/(0,o/* .jsx */.Y)("div",{css:[M/* .magicAIStyles.rightFooter */.C.rightFooter,/*#__PURE__*/(0,c/* .css */.AH)("margin-top:auto;")],children:/*#__PURE__*/(0,o/* .jsxs */.FD)("div",{css:N.footerButtons,children:[/*#__PURE__*/(0,o/* .jsxs */.FD)(p/* ["default"] */.A,{type:"submit",disabled:t.isPending||!e.watch("prompt"),children:[/*#__PURE__*/(0,o/* .jsx */.Y)(h/* ["default"] */.A,{name:"magicWand",width:24,height:24}),(0,u.__)("Generative Erase","tutor")]}),/*#__PURE__*/(0,o/* .jsx */.Y)(p/* ["default"] */.A,{variant:"primary_outline",disabled:t.isPending,loading:k.isPending,onClick:()=>(0,n._)(function*(){var{canvas:e}=(0,Y/* .getCanvas */.dX)(r);if(!e)return;var t=yield k.mutateAsync({image:(0,Y/* .getImageData */.M5)(e)});if(t.data){b.onChange(t.data);_()}})(),children:(0,u.__)("Use Image","tutor")})]})})]})]})};/* export default */const O=S;var H={loading:/*#__PURE__*/(0,c/* .keyframes */.i7)("0%{opacity:0;}50%{opacity:0.6;}100%{opacity:0;}"),walker:/*#__PURE__*/(0,c/* .keyframes */.i7)("0%{left:0%;}100%{left:100%;}")};var N={canvasAndLoading:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;z-index:",b/* .zIndex.positive */.fE.positive,";"),loading:/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;top:0;left:0;width:100%;height:100%;background:",b/* .colorTokens.ai.gradient_1 */.I6.ai.gradient_1,";opacity:0.6;transition:0.5s ease opacity;animation:",H.loading," 1s linear infinite;z-index:0;&::before{content:'';position:absolute;top:0;left:0;width:200px;height:100%;background:linear-gradient(\n        270deg,rgba(255,255,255,0) 0%,rgba(255,255,255,0.6) 51.13%,rgba(255,255,255,0) 100%\n      );animation:",H.walker," 1s linear infinite;}"),actionBar:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;justify-content:space-between;"),fields:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",b/* .spacing["12"] */.YK["12"],";"),leftWrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",b/* .spacing["8"] */.YK["8"],";padding-block:",b/* .spacing["16"] */.YK["16"],";"),footerButtons:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;flex-direction:column;gap:",b/* .spacing["8"] */.YK["8"],";"),footerActions:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;justify-content:space-between;"),footerActionsLeft:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",b/* .spacing["12"] */.YK["12"],";"),actions:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",b/* .spacing["16"] */.YK["16"],";"),undoRedo:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",b/* .spacing["12"] */.YK["12"],";"),backButtonWrapper:/*#__PURE__*/(0,c/* .css */.AH)("display:flex;align-items:center;gap:",b/* .spacing["8"] */.YK["8"],";",_/* .typography.body */.I.body("medium"),";color:",b/* .colorTokens.text.title */.I6.text.title,";"),backButton:/*#__PURE__*/(0,c/* .css */.AH)(k/* .styleUtils.resetButton */.x.resetButton,";width:24px;height:24px;border-radius:",b/* .borderRadius["4"] */.Vq["4"],";border:1px solid ",b/* .colorTokens.stroke["default"] */.I6.stroke["default"],";display:flex;align-items:center;justify-content:center;"),image:/*#__PURE__*/(0,c/* .css */.AH)("width:492px;height:498px;position:relative;img{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;}"),canvasWrapper:/*#__PURE__*/(0,c/* .css */.AH)("position:relative;"),customCursor:e=>/*#__PURE__*/(0,c/* .css */.AH)("position:absolute;width:",e,"px;height:",e,"px;border-radius:",b/* .borderRadius.circle */.Vq.circle,";background:linear-gradient(\n      73.09deg,rgba(255,150,69,0.4) 18.05%,rgba(255,100,113,0.4) 30.25%,rgba(207,110,189,0.4) 55.42%,rgba(164,119,209,0.4) 71.66%,rgba(62,100,222,0.4) 97.9%\n    );border:3px solid ",b/* .colorTokens.stroke.white */.I6.stroke.white,";pointer-events:none;transform:translate(-50%,-50%);z-index:",b/* .zIndex.highest */.fE.highest,";display:none;")}},76657:function(e,t,r){r.d(t,{C:()=>i});/* import */var n=r(42771);/* import */var a=r(13448);var i={wrapper:/*#__PURE__*/(0,n/* .css */.AH)("min-width:1000px;display:grid;grid-template-columns:1fr 330px;",a/* .Breakpoint.tablet */.EA.tablet,"{min-width:auto;grid-template-columns:1fr;width:100%;}"),left:/*#__PURE__*/(0,n/* .css */.AH)("display:flex;justify-content:center;align-items:center;background-color:#f7f7f7;z-index:",a/* .zIndex.level */.fE.level,";"),right:/*#__PURE__*/(0,n/* .css */.AH)("padding:",a/* .spacing["20"] */.YK["20"],";display:flex;flex-direction:column;align-items:space-between;z-index:",a/* .zIndex.positive */.fE.positive,";"),rightFooter:/*#__PURE__*/(0,n/* .css */.AH)("display:flex;flex-direction:column;gap:",a/* .spacing["8"] */.YK["8"],";margin-top:auto;padding-top:80px;")}},76023:function(e,t,r){r.d(t,{A:()=>c});/* import */var n=r(52639);/* import */var a=r(54449);/* import */var i=r(15296);/* import */var o=r(72283);/* import */var s=r(4429);function d(){var{state:e}=(0,a/* .useMagicImageGeneration */.A6)();switch(e){case"generation":return/*#__PURE__*/(0,n/* .jsx */.Y)(i/* .ImageGeneration */.u,{});case"magic-fill":return/*#__PURE__*/(0,n/* .jsx */.Y)(o/* ["default"] */.A,{});default:return null}}var l=e=>{var{title:t,icon:r,closeModal:i,field:o,fieldState:l}=e;return/*#__PURE__*/(0,n/* .jsx */.Y)(s/* ["default"] */.A,{onClose:i,title:t,icon:r,maxWidth:1e3,children:/*#__PURE__*/(0,n/* .jsx */.Y)(a/* .MagicImageGenerationProvider */.co,{field:o,fieldState:l,onCloseModal:i,children:/*#__PURE__*/(0,n/* .jsx */.Y)(d,{})})})};/* export default */const c=l},44486:function(e,t,r){r.d(t,{d:()=>i});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);var i=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:300;var[r,a]=(0,n.useState)(e);(0,n.useEffect)(()=>{var r=setTimeout(()=>{a(e)},t);return()=>{clearTimeout(r)}},[e,t]);return r}},43642:function(e,t,r){r.d(t,{$:()=>d});/* import */var n=r(41147);/* import */var a=r(41594);/* import */var i=/*#__PURE__*/r.n(a);/* import */var o=r(49842);var s={defaultValue:false};var d=e=>{var t=(0,a.useRef)(null);var r=(0,n._)({},s,e);var[i,d]=(0,a.useState)(r.defaultValue);(0,a.useEffect)(()=>{if(!(0,o/* .isDefined */.O9)(t.current)){return}if(t.current.scrollHeight<=t.current.clientHeight){d(false);return}var e=e=>{var t=e.target;if(t.scrollTop+t.clientHeight>=t.scrollHeight){d(false);return}d(t.scrollTop>=0)};t.current.addEventListener("scroll",e);return()=>{var r;(r=t.current)===null||r===void 0?void 0:r.removeEventListener("scroll",e)};// eslint-disable-next-line react-hooks/exhaustive-deps
},[t.current]);return{ref:t,isScrolling:i}}},87752:function(e,t,r){r.d(t,{j:()=>l});/* import */var n=r(41594);/* import */var a=/*#__PURE__*/r.n(n);var i="data-tutor-motion";var o=()=>{if(typeof document==="undefined"){return null}return document.documentElement.getAttribute(i)};var s=()=>{if(typeof window==="undefined"||!window.matchMedia){return false}return window.matchMedia("(prefers-reduced-motion: reduce)").matches};var d=()=>{var e=o();// Explicit override always wins.
if(e==="reduce")return true;// 'auto' (or unset) defers to the OS/browser setting.
return s()};/**
 * Resolves whether motion should be reduced, honoring:
 * - data-tutor-motion="reduce" on <html>  -> always reduce
 * - data-tutor-motion="auto" (or absent)  -> defer to prefers-reduced-motion
 */var l=()=>{var[e,t]=(0,n.useState)(d);(0,n.useEffect)(()=>{if(typeof window==="undefined"||!window.matchMedia){return}var e=window.matchMedia("(prefers-reduced-motion: reduce)");var r=()=>t(d());r();e.addEventListener("change",r);// In case data-tutor-motion is toggled at runtime (e.g. a settings panel)
var n=new MutationObserver(r);n.observe(document.documentElement,{attributes:true,attributeFilter:[i]});return()=>{e.removeEventListener("change",r);n.disconnect()}},[]);return e}},75532:function(e,t,r){r.d(t,{A:()=>u});/* import */var n=r(41147);/* import */var a=r(14206);/* import */var i=r(41594);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(12470);/* import */var d=/*#__PURE__*/r.n(s);/* import */var l=r(40925);var c=e=>{var{options:t={},onChange:r,initialFiles:o}=e;var{showToast:d}=(0,l/* .useToast */.d)();var c=(0,i.useMemo)(()=>o?Array.isArray(o)?o:[o]:[],[o]);var u=(0,i.useMemo)(()=>(0,a._)((0,n._)({},t,t.type?{library:{type:t.type}}:{}),{multiple:t.multiple?t.multiple===true?"add":t.multiple:false}),[t]);var[v,p]=(0,i.useState)(c);(0,i.useEffect)(()=>{if(c&&!v.length){p(c)}},[v,c]);var f=(0,i.useCallback)(()=>{var e;if(!((e=window.wp)===null||e===void 0?void 0:e.media)){// eslint-disable-next-line no-console
console.error("WordPress media library is not available");return}var t=window.wp.media(u);t.on("close",()=>{if(t.$el){t.$el.parent().parent().remove()}});t.on("open",()=>{var e=t.state().get("selection");t.$el.attr("data-focus-trap","true");e.reset();v.forEach(t=>{var r=window.wp.media.attachment(t.id);if(r){r.fetch();e.add(r)}})});t.on("select",()=>{var e=t.state().get("selection").toJSON();var n=new Set(e.map(e=>e.id));var a=v.filter(e=>n.has(e.id));var i=e.reduce((e,t)=>{if(a.some(e=>e.id===t.id)){return e}if(u.maxFileSize&&t.filesizeInBytes>u.maxFileSize){d({// translators: %s is the file title
message:(0,s.sprintf)((0,s.__)("%s size exceeds the maximum allowed size","tutor"),t.title),type:"danger"});return e}var r={id:t.id,title:t.title,url:t.url,name:t.title,size:t.filesizeHumanReadable,size_bytes:t.filesizeInBytes,ext:t.filename.split(".").pop()||""};e.push(r);return e},[]);var o=u.multiple?[...a,...i]:i.slice(0,1);if(u.maxFiles&&o.length>u.maxFiles){d({// translators: %d is the maximum number of files allowed.
message:(0,s.sprintf)((0,s.__)("Cannot select more than %d files","tutor"),u.maxFiles),type:"warning"});return}p(o);r===null||r===void 0?void 0:r(u.multiple?o:o[0]||null);t.close()});t.open()},[u,r,v,d]);var h=(0,i.useCallback)(()=>{p([]);r===null||r===void 0?void 0:r(u.multiple?[]:null)},[u.multiple,r]);return{openMediaLibrary:f,existingFiles:v,resetFiles:h}};/* export default */const u=c},57503:function(e,t,r){r.d(t,{A:()=>m});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(42771);/* import */var o=r(12470);/* import */var s=/*#__PURE__*/r.n(o);/* import */var d=r(25074);/* import */var l=r(13448);/* import */var c=r(81547);/* import */var u=r(31569);/* import */var v=r(52874);/* import */var p=r(21678);function f(){var e=(0,n._)(["\n      button:last-of-type {\n        color: ",";\n      }\n    "]);f=function t(){return e};return e}var h=e=>{var{placement:t,triggerRef:r,isOpen:n,title:i,message:s,onConfirmation:l,onCancel:c,isLoading:v=false,gap:f,maxWidth:h,closePopover:m,animationType:b=u/* .AnimationType.slideLeft */.J6.slideLeft,arrow:_=false,confirmButton:y,cancelButton:w,positionModifier:x}=e;var A,Y,k,I,D;return/*#__PURE__*/(0,a/* .jsx */.Y)(p/* ["default"] */.A,{triggerRef:r,isOpen:n,arrow:_,placement:t,closePopover:m,animationType:b,maxWidth:h,positionModifier:x,gap:f,children:/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.content,children:[/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.body,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:g.title,children:i}),/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:g.description,children:s})]}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:g.footer({isDelete:(A=y===null||y===void 0?void 0:y.isDelete)!==null&&A!==void 0?A:false}),children:[/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{variant:(Y=w===null||w===void 0?void 0:w.variant)!==null&&Y!==void 0?Y:"text",size:"small",onClick:c!==null&&c!==void 0?c:m,children:(k=w===null||w===void 0?void 0:w.text)!==null&&k!==void 0?k:(0,o.__)("Cancel","tutor")}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{"data-cy":"confirm-button",variant:(I=y===null||y===void 0?void 0:y.variant)!==null&&I!==void 0?I:"text",onClick:()=>{l();m()},loading:v,size:"small",children:(D=y===null||y===void 0?void 0:y.text)!==null&&D!==void 0?D:(0,o.__)("Ok","tutor")})]})]})})};/* export default */const m=h;var g={content:/*#__PURE__*/(0,i/* .css */.AH)("background-color:",l/* .colorTokens.surface.tutor */.I6.surface.tutor,";box-shadow:",l/* .shadow.popover */.r7.popover,";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";::-webkit-scrollbar{background-color:",l/* .colorTokens.surface.tutor */.I6.surface.tutor,";width:10px;}::-webkit-scrollbar-thumb{background-color:",l/* .colorTokens.action.secondary["default"] */.I6.action.secondary["default"],";border-radius:",l/* .borderRadius["6"] */.Vq["6"],";}"),title:/*#__PURE__*/(0,i/* .css */.AH)(c/* .typography.small */.I.small("medium"),";color:",l/* .colorTokens.text.primary */.I6.text.primary,";"),description:/*#__PURE__*/(0,i/* .css */.AH)(c/* .typography.small */.I.small(),";color:",l/* .colorTokens.text.subdued */.I6.text.subdued,";"),body:/*#__PURE__*/(0,i/* .css */.AH)("padding:",l/* .spacing["16"] */.YK["16"]," ",l/* .spacing["20"] */.YK["20"]," ",l/* .spacing["12"] */.YK["12"],";",v/* .styleUtils.display.flex */.x.display.flex("column"),";gap:",l/* .spacing["8"] */.YK["8"],";"),footer:e=>{var{isDelete:t=false}=e;return/*#__PURE__*/(0,i/* .css */.AH)(v/* .styleUtils.display.flex */.x.display.flex(),";padding:",l/* .spacing["4"] */.YK["4"]," ",l/* .spacing["16"] */.YK["16"]," ",l/* .spacing["8"] */.YK["8"],";justify-content:end;gap:",l/* .spacing["10"] */.YK["10"],";",t&&(0,i/* .css */.AH)(f(),l/* .colorTokens.text.error */.I6.text.error))}}},92795:function(e,t,r){r.d(t,{A:()=>b});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(42771);/* import */var o=r(13448);/* import */var s=r(81547);/* import */var d=r(59189);/* import */var l=r(49842);function c(){var e=(0,n._)(["\n      border: 1px solid ",";\n      border-radius: ",";\n      background-color: ",";\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n      gap: ",";\n      padding: ",";\n      padding-bottom: ",";\n    "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n        max-width: 282px;\n      "]);v=function t(){return e};return e}function p(){var e=(0,n._)(["\n      gap: ",";\n    "]);p=function t(){return e};return e}function f(){var e=(0,n._)(["\n      ",";\n      color: ",";\n    "]);f=function t(){return e};return e}function h(){var e=(0,n._)(["\n      ",";\n      color: ",";\n    "]);h=function t(){return e};return e}function m(){var e=(0,n._)(["\n      gap: ",";\n      margin-top: ",";\n    "]);m=function t(){return e};return e}var g=e=>{var{emptyStateImage:t,emptyStateImage2x:r,imageAltText:n,title:i,size:o="medium",description:s,actions:c,removeBorder:u=true,wrapperCss:v}=e;return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:[_.bannerWrapper(o,u,!!(0,l/* .isDefined */.O9)(t)),v],children:[/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:t,children:/*#__PURE__*/(0,a/* .jsx */.Y)("img",{src:t,alt:n,srcSet:r?"".concat(r," 2x"):""})}),/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:_.messageWrapper(o),children:[/*#__PURE__*/(0,a/* .jsx */.Y)("h5",{css:_.title(o),children:i}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:s,children:/*#__PURE__*/(0,a/* .jsx */.Y)("p",{css:_.description(o),children:s})}),/*#__PURE__*/(0,a/* .jsx */.Y)(d/* ["default"] */.A,{when:c,children:/*#__PURE__*/(0,a/* .jsx */.Y)("div",{"data-actions":true,css:_.actionWrapper(o),children:c})})]})]})};/* export default */const b=g;var _={bannerWrapper:(e,t,r)=>/*#__PURE__*/(0,i/* .css */.AH)("display:grid;place-items:center;justify-content:center;gap:",o/* .spacing["36"] */.YK["36"],";padding:",r?"".concat(o/* .spacing["16"] */.YK["16"]," ").concat(o/* .spacing["20"] */.YK["20"]):"".concat(o/* .spacing["20"] */.YK["20"]),";",!t&&(0,i/* .css */.AH)(c(),o/* .colorTokens.stroke.divider */.I6.stroke.divider,o/* .borderRadius.card */.Vq.card,o/* .colorTokens.background.white */.I6.background.white)," ",e==="small"&&(0,i/* .css */.AH)(u(),o/* .spacing["12"] */.YK["12"],r?o/* .spacing["12"] */.YK["12"]:o/* .spacing["16"] */.YK["16"],r?o/* .spacing["24"] */.YK["24"]:undefined),"    & img{max-width:640px;width:100%;height:auto;border-radius:",e==="small"?o/* .borderRadius["6"] */.Vq["6"]:o/* .borderRadius["10"] */.Vq["10"],";overflow:hidden;object-position:center;object-fit:cover;",e==="small"&&(0,i/* .css */.AH)(v()),"}"),messageWrapper:e=>/*#__PURE__*/(0,i/* .css */.AH)("display:flex;flex-direction:column;max-width:566px;width:100%;gap:",o/* .spacing["12"] */.YK["12"],";text-align:center;",e==="small"&&(0,i/* .css */.AH)(p(),o/* .spacing["8"] */.YK["8"])),title:e=>/*#__PURE__*/(0,i/* .css */.AH)(s/* .typography.heading5 */.I.heading5(),";color:",o/* .colorTokens.text.primary */.I6.text.primary,";",e==="small"&&(0,i/* .css */.AH)(f(),s/* .typography.caption */.I.caption("medium"),o/* .colorTokens.text.primary */.I6.text.primary)),description:e=>/*#__PURE__*/(0,i/* .css */.AH)(s/* .typography.body */.I.body(),";color:",o/* .colorTokens.text.hints */.I6.text.hints,";",e==="small"&&(0,i/* .css */.AH)(h(),s/* .typography.tiny */.I.tiny(),o/* .colorTokens.text.hints */.I6.text.hints)),actionWrapper:e=>/*#__PURE__*/(0,i/* .css */.AH)("margin-top:",o/* .spacing["20"] */.YK["20"],";display:flex;justify-content:center;align-items:center;gap:",o/* .spacing["12"] */.YK["12"],";",e==="small"&&(0,i/* .css */.AH)(m(),o/* .spacing["8"] */.YK["8"],o/* .spacing["8"] */.YK["8"]))}},88893:function(e,t,r){r.d(t,{A:()=>h});/* import */var n=r(60599);/* import */var a=r(52639);/* import */var i=r(41594);/* import */var o=/*#__PURE__*/r.n(i);/* import */var s=r(42771);/* import */var d=r(13448);/* import */var l=r(52874);function c(){var e=(0,n._)(["\n      flex-direction: column;\n      align-items: start;\n      box-shadow: none;\n    "]);c=function t(){return e};return e}function u(){var e=(0,n._)(["\n      width: 3px;\n      height: ","px;\n      top: ","px;\n      bottom: auto;\n      border-radius: 0 "," "," 0;\n    "]);u=function t(){return e};return e}function v(){var e=(0,n._)(["\n      width: 100%;\n      border-bottom: 1px solid ",";\n      justify-content: flex-start;\n\n      &:hover,\n      &:focus,\n      &:active {\n        border-bottom: 1px solid ",";\n      }\n    "]);v=function t(){return e};return e}function p(){var e=(0,n._)(["\n      &,\n      &:hover,\n      &:focus,\n      &:active {\n        background-color: ",";\n        color: ",";\n      }\n\n      & > span {\n        color: ",";\n      }\n\n      & > svg {\n        color: ",";\n      }\n    "]);p=function t(){return e};return e}var f=e=>{var{activeTab:t,onChange:r,tabList:n,orientation:o="horizontal",disabled:s=false,wrapperCss:d}=e;var l=(0,i.useRef)(n.map(()=>/*#__PURE__*/(0,i.createRef)()));var[c,u]=(0,i.useState)();(0,i.useEffect)(()=>{var e=n.reduce((e,t,r)=>{var n,a,i,o;var s=l.current[r];var d={width:((n=s.current)===null||n===void 0?void 0:n.offsetWidth)||0,height:((a=s.current)===null||a===void 0?void 0:a.offsetHeight)||0,left:((i=s.current)===null||i===void 0?void 0:i.offsetLeft)||0,top:((o=s.current)===null||o===void 0?void 0:o.offsetTop)||0};e[t.value]=d;return e},{});u(e)},[n]);return/*#__PURE__*/(0,a/* .jsxs */.FD)("div",{css:m.container,children:[/*#__PURE__*/(0,a/* .jsx */.Y)("div",{css:[m.wrapper(o),d],role:"tablist",children:n.map((e,n)=>{return/*#__PURE__*/(0,a/* .jsxs */.FD)("button",{onClick:()=>{r(e.value)},css:m.tabButton({isActive:t===e.value,orientation:o}),disabled:s||e.disabled,type:"button",role:"tab","aria-selected":t===e.value?"true":"false",ref:l.current[n],children:[e.icon,e.label,e.count!==undefined&&/*#__PURE__*/(0,a/* .jsxs */.FD)("span",{children:[" (",e.count<10&&e.count>0?"0".concat(e.count):e.count,")"]}),e.activeBadge&&/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:m.activeBadge})]},n)})}),/*#__PURE__*/(0,a/* .jsx */.Y)("span",{css:m.indicator((c===null||c===void 0?void 0:c[t])||{width:0,height:0,left:0,top:0},o)})]})};/* export default */const h=f;var m={container:/*#__PURE__*/(0,s/* .css */.AH)("position:relative;width:100%;"),wrapper:e=>/*#__PURE__*/(0,s/* .css */.AH)("width:100%;display:flex;justify-items:left;align-items:center;flex-wrap:wrap;box-shadow:",d/* .shadow.tabs */.r7.tabs,";",e==="vertical"&&(0,s/* .css */.AH)(c())),indicator:(e,t)=>/*#__PURE__*/(0,s/* .css */.AH)("width:",e.width,"px;height:3px;position:absolute;left:",e.left,"px;bottom:0;background:",d/* .colorTokens.brand.blue */.I6.brand.blue,";border-radius:",d/* .borderRadius["4"] */.Vq["4"]," ",d/* .borderRadius["4"] */.Vq["4"]," 0 0;transition:all 0.3s cubic-bezier(0.4,0,0.2,1) 0ms;:dir(rtl){left:auto;right:",e.left,"px;}",t==="vertical"&&(0,s/* .css */.AH)(u(),e.height,e.top,d/* .borderRadius["4"] */.Vq["4"],d/* .borderRadius["4"] */.Vq["4"])),tabButton:e=>{var{isActive:t,orientation:r}=e;return/*#__PURE__*/(0,s/* .css */.AH)(l/* .styleUtils.resetButton */.x.resetButton,";font-size:",d/* .fontSize["15"] */.J["15"],";line-height:",d/* .lineHeight["20"] */.K_["20"],";display:flex;justify-content:center;align-items:center;gap:",d/* .spacing["6"] */.YK["6"],";padding:",d/* .spacing["12"] */.YK["12"]," ",d/* .spacing["20"] */.YK["20"],";color:",d/* .colorTokens.text.subdued */.I6.text.subdued,";min-width:130px;position:relative;transition:color 0.3s ease-in-out;border-radius:0px;&:hover,&:focus,&:active{background-color:transparent;color:",d/* .colorTokens.text.subdued */.I6.text.subdued,";box-shadow:none;}& > svg{color:",d/* .colorTokens.icon["default"] */.I6.icon["default"],";}",r==="vertical"&&(0,s/* .css */.AH)(v(),d/* .colorTokens.stroke.border */.I6.stroke.border,d/* .colorTokens.stroke.border */.I6.stroke.border)," ",t&&(0,s/* .css */.AH)(p(),d/* .colorTokens.background.white */.I6.background.white,d/* .colorTokens.text.primary */.I6.text.primary,d/* .colorTokens.text.subdued */.I6.text.subdued,d/* .colorTokens.icon.brand */.I6.icon.brand),"    &:disabled{color:",d/* .colorTokens.text.disable */.I6.text.disable,";&::before{background:",d/* .colorTokens.text.disable */.I6.text.disable,";}}&:focus-visible{outline:2px solid ",d/* .colorTokens.stroke.brand */.I6.stroke.brand,";outline-offset:-2px;border-radius:",d/* .borderRadius["4"] */.Vq["4"],";}")},activeBadge:/*#__PURE__*/(0,s/* .css */.AH)("display:inline-block;height:8px;width:8px;border-radius:",d/* .borderRadius.circle */.Vq.circle,";background-color:",d/* .colorTokens.color.success["80"] */.I6.color.success["80"],";")}},68677:function(e,t,r){r.d(t,{TM:()=>c,gr:()=>v});/* import */var n=r(41147);/* import */var a=r(37586);/* import */var i=r(19005);/* import */var o=r(32047);/* import */var s=r(77239);/* import */var d=r(94812);var l=e=>{return s/* .wpAjaxInstance.get */.b.get(d/* ["default"].GET_COURSE_LIST */.A.GET_COURSE_LIST,{params:e})};var c=e=>{var{params:t,isEnabled:r}=e;return(0,a/* .useQuery */.I)({queryKey:["PrerequisiteCourses",t],queryFn:()=>l((0,n._)({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:i/* .keepPreviousData */.rX,enabled:r})};var u=e=>{var{courseId:t,builder:r}=e;return s/* .wpAjaxInstance.post */.b.post(d/* ["default"].TUTOR_UNLINK_PAGE_BUILDER */.A.TUTOR_UNLINK_PAGE_BUILDER,{course_id:t,builder:r})};var v=()=>{return(0,o/* .useMutation */.n)({mutationFn:u})};var p=e=>{return wpAjaxInstance.get(endpoints.BUNDLE_LIST,{params:e})};var f=e=>{var{params:t,isEnabled:r}=e;return useQuery({queryKey:["PrerequisiteCourses",t],queryFn:()=>p(_object_spread({exclude:t.exclude,limit:t.limit,offset:t.offset,filter:t.filter},t.post_status&&{post_status:t.post_status})).then(e=>e.data),placeholderData:keepPreviousData,enabled:r})}},67035:function(e,t,r){r.d(t,{JD:()=>o,KG:()=>a,M5:()=>l,dX:()=>d,kd:()=>n});function n(e,t){e.lineTo(t.x,t.y);e.stroke()}function a(e,t){var r=t.x-e.x;var n=t.y-e.y;return Math.sqrt(r*r+n*n)}function i(e){var t=atob(e.split(",")[1]);var r=e.split(",")[0].split(":")[1].split(";")[0];var n=new ArrayBuffer(t.length);var a=new Uint8Array(n);for(var i=0;i<t.length;i++){a[i]=t.charCodeAt(i)}return new Blob([n],{type:r})}function o(e,t){var r=i(e);var n=document.createElement("a");n.href=URL.createObjectURL(r);n.download=t;document.body.appendChild(n);n.click();document.body.removeChild(n)}function s(e,t){var r=document.createElement("canvas");r.width=1024;r.height=1024;var n=r.getContext("2d");n===null||n===void 0?void 0:n.putImageData(e,0,0);n===null||n===void 0?void 0:n.drawImage(r,0,0,1024,1024);return new Promise(e=>{r.toBlob(r=>{if(!r){e(null);return}e(new File([r],t,{type:"image/png"}))})})}var d=e=>{if(e&&typeof e!=="function"&&e.current){var t=e.current;var r=t.getContext("2d");return{canvas:t,context:r}}return{canvas:null,context:null}};var l=e=>{return e.toDataURL("image/png")}},73454:function(){/**
 * The symbol to access the `TZDate`'s function to construct a new instance from
 * the provided value. It helps date-fns to inherit the time zone.
 */const e=Symbol.for("constructDateFrom")},30617:function(e,t,r){r.d(t,{B:()=>i});/* import */var n=r(87816);/* import */var a=r(78118);class i extends a/* .TZDateMini */.q{//#region static
static tz(e,...t){return t.length?new i(...t,e):new i(Date.now(),e)}//#endregion
//#region representation
toISOString(){const[e,t,r]=this.tzComponents();const n=`${e}${t}:${r}`;return this.internal.toISOString().slice(0,-1)+n}toString(){// "Tue Aug 13 2024 07:50:19 GMT+0800 (Singapore Standard Time)";
return`${this.toDateString()} ${this.toTimeString()}`}toDateString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const[e,t,r,n]=this.internal.toUTCString().split(" ");// "Tue Aug 13 2024"
return`${e?.slice(0,-1)} ${r} ${t} ${n}`}toTimeString(){// toUTCString returns RFC 7231 ("Mon, 12 Aug 2024 23:36:08 GMT")
const e=this.internal.toUTCString().split(" ")[4];const[t,r,a]=this.tzComponents();// "07:42:23 GMT+0800 (Singapore Standard Time)"
return`${e} GMT${t}${r}${a} (${(0,n/* .tzName */.K)(this.timeZone,this)})`}toLocaleString(e,t){return Date.prototype.toLocaleString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleDateString(e,t){return Date.prototype.toLocaleDateString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}toLocaleTimeString(e,t){return Date.prototype.toLocaleTimeString.call(this,e,{...t,timeZone:t?.timeZone||this.timeZone})}//#endregion
//#region private
tzComponents(){const e=this.getTimezoneOffset();const t=e>0?"-":"+";const r=String(Math.floor(Math.abs(e)/60)).padStart(2,"0");const n=String(Math.abs(e)%60).padStart(2,"0");return[t,r,n]}//#endregion
withTimeZone(e){return new i(+this,e)}//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new i(+new Date(e),this.timeZone)}}},78118:function(e,t,r){r.d(t,{q:()=>a});/* import */var n=r(33008);class a extends Date{//#region static
constructor(...e){super();if(e.length>1&&typeof e[e.length-1]==="string"){this.timeZone=e.pop()}this.internal=new Date;if(isNaN((0,n/* .tzOffset */.Y)(this.timeZone,this))){this.setTime(NaN)}else{if(!e.length){this.setTime(Date.now())}else if(typeof e[0]==="number"&&(e.length===1||e.length===2&&typeof e[1]!=="number")){this.setTime(e[0])}else if(typeof e[0]==="string"){this.setTime(+new Date(e[0]))}else if(e[0]instanceof Date){this.setTime(+e[0])}else{this.setTime(+new Date(...e));d(this,NaN);o(this)}}}static tz(e,...t){return t.length?new a(...t,e):new a(Date.now(),e)}//#endregion
//#region time zone
withTimeZone(e){return new a(+this,e)}getTimezoneOffset(){const e=-(0,n/* .tzOffset */.Y)(this.timeZone,this);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
return e>0?Math.floor(e):Math.ceil(e)}//#endregion
//#region time
setTime(e){Date.prototype.setTime.apply(this,arguments);o(this);return+this}//#endregion
//#region date-fns integration
[Symbol.for("constructDateFrom")](e){return new a(+new Date(e),this.timeZone)}}// Assign getters and setters
const i=/^(get|set)(?!UTC)/;Object.getOwnPropertyNames(Date.prototype).forEach(e=>{if(!i.test(e))return;const t=e.replace(i,"$1UTC");// Filter out methods without UTC counterparts
if(!a.prototype[t])return;if(e.startsWith("get")){// Delegate to internal date's UTC method
a.prototype[e]=function(){return this.internal[t]()}}else{// Assign regular setter
a.prototype[e]=function(){Date.prototype[t].apply(this.internal,arguments);s(this);return+this};// Assign UTC setter
a.prototype[t]=function(){Date.prototype[t].apply(this,arguments);o(this);return+this}}});/**
 * Function syncs time to internal date, applying the time zone offset.
 *
 * @param {Date} date - Date to sync
 */function o(e){e.internal.setTime(+e);e.internal.setUTCSeconds(e.internal.getUTCSeconds()-Math.round(-(0,n/* .tzOffset */.Y)(e.timeZone,e)*60))}/**
 * Function syncs the internal date UTC values to the date. It allows to get
 * accurate timestamp value.
 *
 * @param {Date} date - The date to sync
 */function s(e){// First we transpose the internal values
Date.prototype.setFullYear.call(e,e.internal.getUTCFullYear(),e.internal.getUTCMonth(),e.internal.getUTCDate());Date.prototype.setHours.call(e,e.internal.getUTCHours(),e.internal.getUTCMinutes(),e.internal.getUTCSeconds(),e.internal.getUTCMilliseconds());// Now we have to adjust the date to the system time zone
d(e)}/**
 * Function adjusts the date to the system time zone. It uses the time zone
 * differences to calculate the offset and adjust the date.
 *
 * @param {Date} date - Date to adjust
 */function d(e){// Save the time zone offset before all the adjustments
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
const i=-new Date(+e).getTimezoneOffset();const o=-new Date(+a).getTimezoneOffset();const s=i-o;// Detect the DST shift. System DST change will occur both on
const d=Date.prototype.getHours.apply(e)!==e.internal.getUTCHours();// Move the internal date when we are on the system DST hour.
if(s&&d)e.internal.setUTCMinutes(e.internal.getUTCMinutes()+s);//#endregion
//#region System diff adjustment
// Now we need to adjust the date, since we just applied internal values.
// We need to calculate the difference between the system and date time zones
// and apply it to the date.
const l=i-r;if(l)Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+l);//#endregion
//#region Seconds System diff adjustment
const c=new Date(+e);// Set the UTC seconds to 0 to isolate the timezone offset in seconds.
c.setUTCSeconds(0);// For negative systemOffset, invert the seconds.
const u=i>0?c.getSeconds():(c.getSeconds()-60)%60;// Calculate the seconds offset based on the timezone offset.
const v=Math.round(-((0,n/* .tzOffset */.Y)(e.timeZone,e)*60))%60;if(v||u){e.internal.setUTCSeconds(e.internal.getUTCSeconds()+v);Date.prototype.setUTCSeconds.call(e,Date.prototype.getUTCSeconds.call(e)+v+u)}//#endregion
//#region Post-adjustment DST fix
const p=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const f=p>0?Math.floor(p):Math.ceil(p);const h=-new Date(+e).getTimezoneOffset();const m=h-f;const g=f!==r;const b=m-l;if(g&&b){Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+b);// Now we need to check if got offset change during the post-adjustment.
// If so, we also need both dates to reflect that.
const t=(0,n/* .tzOffset */.Y)(e.timeZone,e);// Remove the seconds offset
// use Math.floor for negative GMT timezones and Math.ceil for positive GMT timezones.
const r=t>0?Math.floor(t):Math.ceil(t);const a=f-r;if(a){e.internal.setUTCMinutes(e.internal.getUTCMinutes()+a);Date.prototype.setUTCMinutes.call(e,Date.prototype.getUTCMinutes.call(e)+a)}}//#endregion
}},2832:function(e,t,r){r.d(t,{BB:()=>/* reexport safe */a.B});/* import */var n=r(73454);/* import */var a=r(30617);/* import */var i=r(78118);/* import */var o=r(88351)},88351:function(e,t,r){/* import */var n=r(30617);/**
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
.join(" ")}},33008:function(e,t,r){r.d(t,{Y:()=>i});const n={};const a={};/**
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
 */function i(e,t){try{const r=n[e]||=new Intl.DateTimeFormat("en-US",{timeZone:e,timeZoneName:"longOffset"}).format;const i=r(t).split("GMT")[1];if(i in a)return a[i];return s(i,i.split(":"))}catch{// Fallback to manual parsing if the runtime doesn't support ±HH:MM/±HHMM/±HH
// See: https://github.com/nodejs/node/issues/53419
if(e in a)return a[e];const t=e?.match(o);if(t)return s(e,t.slice(1));return NaN}}const o=/([+-]\d\d):?(\d\d)?/;function s(e,t){const r=+(t[0]||0);const n=+(t[1]||0);// Convert seconds to minutes by dividing by 60 to keep the function return in minutes.
const i=+(t[2]||0)/60;return a[e]=r*60+n>0?r*60+n+i:r*60-n-i}},93908:function(e,t,r){r.d(t,{C:()=>o});/* import */var n=r(41594);/* import */var a=r(73276);/* import */var i=r(92965);"use client";// src/useIsFetching.ts
function o(e,t){const r=(0,i/* .useQueryClient */.jE)(t);const o=r.getQueryCache();return n.useSyncExternalStore(n.useCallback(e=>o.subscribe(a/* .notifyManager.batchCalls */.j.batchCalls(e)),[o]),()=>r.isFetching(e),()=>r.isFetching(e))}//# sourceMappingURL=useIsFetching.js.map
},50114:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(75518);function a(e,t){const[r,a]=(0,n/* .normalizeDates */.x)(e,t.start,t.end);return{start:r,end:a}}},56187:function(e,t,r){r.d(t,{f:()=>i});/* import */var n=r(5054);/* import */var a=r(84350);/**
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
 */function i(e,t,r){const i=(0,a/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);// If 0 days, no-op to avoid changing times in the hour before end of DST
if(!t)return i;i.setDate(i.getDate()+t);return i}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},59099:function(e,t,r){r.d(t,{P:()=>i});/* import */var n=r(5054);/* import */var a=r(84350);/**
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
 */function i(e,t,r){const i=(0,a/* .toDate */.a)(e,r?.in);if(isNaN(t))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);if(!t){// If 0 months, no-op to avoid changing times in the hour before end of DST
return i}const o=i.getDate();// The JS Date object supports date math by accepting out-of-bounds values for
// month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
// new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
// want except that dates will wrap around the end of a month, meaning that
// new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
// we'll default to the end of the desired month by adding 1 to the desired
// month and using a date of 0 to back up one day to the end of the desired
// month.
const s=(0,n/* .constructFrom */.w)(r?.in||e,i.getTime());s.setMonth(i.getMonth()+t+1,0);const d=s.getDate();if(o>=d){// If we're already at the end of the month, then this is the correct date
// and we're done.
return s}else{// Otherwise, we now know that setting the original day-of-month value won't
// cause an overflow, so set the desired day-of-month. Note that we can't
// just set the date of `endOfDesiredMonth` because that object may have had
// its time changed in the unusual case where where a DST transition was on
// the last day of the month and its local time was in the hour skipped or
// repeated next to a DST transition.  So we use `date` instead which is
// guaranteed to still have the original time.
i.setFullYear(s.getFullYear(),s.getMonth(),o);return i}}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},46199:function(e,t,r){r.d(t,{J:()=>a});/* import */var n=r(56187);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},19636:function(e,t,r){r.d(t,{e:()=>a});/* import */var n=r(59099);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},9970:function(e,t,r){r.d(t,{U:()=>a});/* import */var n=r(75518);/**
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
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.x)(r?.in,e,t);const o=a.getFullYear()-i.getFullYear();const s=a.getMonth()-i.getMonth();return o*12+s}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},50178:function(e,t,r){r.d(t,{G:()=>o});/* import */var n=r(50114);/* import */var a=r(52575);/* import */var i=r(5054);/**
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
 */function o(e,t){const{start:r,end:o}=(0,n/* .normalizeInterval */.P)(t?.in,e);// Set to the start of the minute
r.setSeconds(0,0);let s=+r>+o;const d=s?+r:+o;let l=s?o:r;let c=t?.step??1;if(!c)return[];if(c<0){c=-c;s=!s}const u=[];while(+l<=d){u.push((0,i/* .constructFrom */.w)(r,l));l=(0,a/* .addMinutes */.z)(l,c)}return s?u.reverse():u}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&o},56190:function(e,t,r){r.d(t,{i:()=>i});/* import */var n=r(50114);/* import */var a=r(5054);/**
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
 */function i(e,t){const{start:r,end:i}=(0,n/* .normalizeInterval */.P)(t?.in,e);let o=+r>+i;const s=o?+r:+i;const d=o?i:r;d.setHours(0,0,0,0);d.setDate(1);let l=t?.step??1;if(!l)return[];if(l<0){l=-l;o=!o}const c=[];while(+d<=s){c.push((0,a/* .constructFrom */.w)(r,d));d.setMonth(d.getMonth()+l)}return o?c.reverse():c}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},78307:function(e,t,r){r.d(t,{z:()=>i});/* import */var n=r(50114);/* import */var a=r(5054);/**
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
 */function i(e,t){const{start:r,end:i}=(0,n/* .normalizeInterval */.P)(t?.in,e);let o=+r>+i;const s=o?+r:+i;const d=o?i:r;d.setHours(0,0,0,0);d.setMonth(0,1);let l=t?.step??1;if(!l)return[];if(l<0){l=-l;o=!o}const c=[];while(+d<=s){c.push((0,a/* .constructFrom */.w)(r,d));d.setFullYear(d.getFullYear()+l)}return o?c.reverse():c}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},48606:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(547);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},17193:function(e,t,r){r.d(t,{p:()=>a});/* import */var n=r(84350);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},547:function(e,t,r){r.d(t,{$:()=>i});/* import */var n=r(87411);/* import */var a=r(84350);/**
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
 */function i(e,t){const r=(0,n/* .getDefaultOptions */.q)();const i=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0;const o=(0,a/* .toDate */.a)(e,t?.in);const s=o.getDay();const d=(s<i?-7:0)+6-(s-i);o.setDate(o.getDate()+d);o.setHours(23,59,59,999);return o}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},66146:function(e,t,r){r.d(t,{Q:()=>a});/* import */var n=r(84350);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},92245:function(e,t,r){r.d(t,{P:()=>i});/* import */var n=r(5054);/* import */var a=r(84350);/**
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
 */function i(e,t){const r=(0,a/* .toDate */.a)(e,t?.in);const i=r.getFullYear();const o=r.getMonth();const s=(0,n/* .constructFrom */.w)(r,0);s.setFullYear(i,o+1,0);s.setHours(0,0,0,0);return s.getDate()}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},1261:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(84350);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},14646:function(e,t,r){r.d(t,{C:()=>a});/* import */var n=r(84350);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},74085:function(e,t,r){r.d(t,{d:()=>a});/* import */var n=r(84350);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},13851:function(e,t,r){r.d(t,{r:()=>i});/* import */var n=r(75518);/* import */var a=r(5758);/**
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
 */function i(e,t,r){const[i,o]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return+(0,a/* .startOfDay */.o)(i)===+(0,a/* .startOfDay */.o)(o)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},6903:function(e,t,r){r.d(t,{t:()=>a});/* import */var n=r(75518);/**
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
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return a.getFullYear()===i.getFullYear()&&a.getMonth()===i.getMonth()}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},39896:function(e,t,r){r.d(t,{s:()=>a});/* import */var n=r(75518);/**
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
 */function a(e,t,r){const[a,i]=(0,n/* .normalizeDates */.x)(r?.in,e,t);return a.getFullYear()===i.getFullYear()}// Fallback for modularized imports:
/* unused export default */var i=/* unused pure expression or super */null&&a},8153:function(e,t,r){r.d(t,{T:()=>i});/* import */var n=r(5054);/* import */var a=r(84350);/**
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
 */function i(e,t){let r;let i=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!i&&typeof e==="object")i=n/* .constructFrom.bind */.w.bind(null,e);const t=(0,a/* .toDate */.a)(e,i);if(!r||r<t||isNaN(+t))r=t});return(0,n/* .constructFrom */.w)(i,r||NaN)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},98843:function(e,t,r){r.d(t,{j:()=>i});/* import */var n=r(5054);/* import */var a=r(84350);/**
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
 */function i(e,t){let r;let i=t?.in;e.forEach(e=>{// Use the first date object as the context function
if(!i&&typeof e==="object")i=n/* .constructFrom.bind */.w.bind(null,e);const t=(0,a/* .toDate */.a)(e,i);if(!r||r>t||isNaN(+t))r=t});return(0,n/* .constructFrom */.w)(i,r||NaN)}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},69580:function(e,t,r){r.d(t,{a:()=>a});/* import */var n=r(84350);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},98898:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(84350);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},47593:function(e,t,r){r.d(t,{Z:()=>o});/* import */var n=r(5054);/* import */var a=r(92245);/* import */var i=r(84350);/**
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
 */function o(e,t,r){const o=(0,i/* .toDate */.a)(e,r?.in);const s=o.getFullYear();const d=o.getDate();const l=(0,n/* .constructFrom */.w)(r?.in||e,0);l.setFullYear(s,t,15);l.setHours(0,0,0,0);const c=(0,a/* .getDaysInMonth */.P)(l);// Set the earlier date, allows to wrap Jan 31 to Feb 28
o.setMonth(t,Math.min(d,c));return o}// Fallback for modularized imports:
/* unused export default */var s=/* unused pure expression or super */null&&o},58050:function(e,t,r){r.d(t,{i:()=>i});/* import */var n=r(5054);/* import */var a=r(84350);/**
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
 */function i(e,t,r){const i=(0,a/* .toDate */.a)(e,r?.in);// Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
if(isNaN(+i))return(0,n/* .constructFrom */.w)(r?.in||e,NaN);i.setFullYear(t);return i}// Fallback for modularized imports:
/* unused export default */var o=/* unused pure expression or super */null&&i},910:function(e,t,r){r.d(t,{w:()=>a});/* import */var n=r(84350);/**
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
/* unused export default */var i=/* unused pure expression or super */null&&a},94906:function(e,t,r){r.d(t,{h:()=>D});/* import */var n=r(41594);/* import */var a=r(14308);/* import */var i=r(30922);/* import */var o=r(36612);/* import */var s=r(76447);/* import */var d=r(47088);/* import */var l=r(52813);/* import */var c=r(143);/* import */var u=r(3591);/* import */var v=r(36004);/* import */var p=r(66220);/* import */var f=r(55223);/* import */var h=r(69811);/* import */var m=r(7332);/* import */var g=r(10782);/* import */var b=r(8755);/* import */var _=r(57391);/* import */var y=r(79209);/* import */var w=r(83237);/* import */var x=r(35055);/* import */var A=r(13854);/* import */var Y=r(79796);/* import */var k=r(14916);/* import */var I=r(45636);/**
 * Renders the DayPicker calendar component.
 *
 * @param initialProps - The props for the DayPicker component.
 * @returns The rendered DayPicker component.
 * @group DayPicker
 * @see https://daypicker.dev
 */function D(e){let t=e;const r=t.timeZone;if(r){t={...e,timeZone:r};if(t.today){t.today=(0,k/* .toTimeZone */.v)(t.today,r)}if(t.month){t.month=(0,k/* .toTimeZone */.v)(t.month,r)}if(t.defaultMonth){t.defaultMonth=(0,k/* .toTimeZone */.v)(t.defaultMonth,r)}if(t.startMonth){t.startMonth=(0,k/* .toTimeZone */.v)(t.startMonth,r)}if(t.endMonth){t.endMonth=(0,k/* .toTimeZone */.v)(t.endMonth,r)}if(t.mode==="single"&&t.selected){t.selected=(0,k/* .toTimeZone */.v)(t.selected,r)}else if(t.mode==="multiple"&&t.selected){t.selected=t.selected?.map(e=>(0,k/* .toTimeZone */.v)(e,r))}else if(t.mode==="range"&&t.selected){t.selected={from:t.selected.from?(0,k/* .toTimeZone */.v)(t.selected.from,r):t.selected.from,to:t.selected.to?(0,k/* .toTimeZone */.v)(t.selected.to,r):t.selected.to}}if(t.disabled!==undefined){t.disabled=(0,A/* .convertMatchersToTimeZone */.t)(t.disabled,r)}if(t.hidden!==undefined){t.hidden=(0,A/* .convertMatchersToTimeZone */.t)(t.hidden,r)}if(t.modifiers){const e={};Object.keys(t.modifiers).forEach(n=>{e[n]=(0,A/* .convertMatchersToTimeZone */.t)(t.modifiers?.[n],r)});t.modifiers=e}}const{components:D,formatters:C,labels:M,dateLib:E,locale:T,classNames:S}=(0,n.useMemo)(()=>{const e={...a/* .enUS */.c,...t.locale};const r=new i/* .DateLib */.i0({locale:e,weekStartsOn:t.broadcastCalendar?1:t.weekStartsOn,firstWeekContainsDate:t.firstWeekContainsDate,useAdditionalWeekYearTokens:t.useAdditionalWeekYearTokens,useAdditionalDayOfYearTokens:t.useAdditionalDayOfYearTokens,timeZone:t.timeZone,numerals:t.numerals},t.dateLib);return{dateLib:r,components:(0,d/* .getComponents */.P)(t.components),formatters:(0,u/* .getFormatters */.G)(t.formatters),labels:{...m,...t.labels},locale:e,classNames:{...(0,c/* .getDefaultClassNames */.a)(),...t.classNames}}},[t.locale,t.broadcastCalendar,t.weekStartsOn,t.firstWeekContainsDate,t.useAdditionalWeekYearTokens,t.useAdditionalDayOfYearTokens,t.timeZone,t.numerals,t.dateLib,t.components,t.formatters,t.labels,t.classNames]);if(!t.today){t={...t,today:E.today()}}const{captionLayout:O,mode:H,navLayout:N,numberOfMonths:F=1,onDayBlur:K,onDayClick:L,onDayFocus:U,onDayKeyDown:z,onDayMouseEnter:P,onDayMouseLeave:R,onNextClick:W,onPrevClick:j,showWeekNumber:B,styles:q}=t;const{formatCaption:V,formatDay:G,formatMonthDropdown:Q,formatWeekNumber:Z,formatWeekNumberHeader:$,formatWeekdayName:X,formatYearDropdown:J}=C;const ee=(0,_/* .useCalendar */._)(t,E);const{days:et,months:er,navStart:en,navEnd:ea,previousMonth:ei,nextMonth:eo,goToMonth:es}=ee;const ed=(0,o/* .createGetModifiers */.x)(et,t,en,ea,E);const{isSelected:el,select:ec,selected:eu}=(0,x/* .useSelection */.C)(t,E)??{};const{blur:ev,focused:ep,isFocusTarget:ef,moveFocus:eh,setFocused:em}=(0,w/* .useFocus */.i)(t,ee,ed,el??(()=>false),E);const{labelDayButton:eg,labelGridcell:eb,labelGrid:e_,labelMonthDropdown:ey,labelNav:ew,labelPrevious:ex,labelNext:eA,labelWeekday:eY,labelWeekNumber:ek,labelWeekNumberHeader:eI,labelYearDropdown:eD}=M;const eC=(0,n.useMemo)(()=>(0,f/* .getWeekdays */.c)(E,t.ISOWeek,t.broadcastCalendar,t.today),[E,t.ISOWeek,t.broadcastCalendar,t.today]);const eM=H!==undefined||L!==undefined;const eE=(0,n.useCallback)(()=>{if(!ei)return;es(ei);j?.(ei)},[ei,es,j]);const eT=(0,n.useCallback)(()=>{if(!eo)return;es(eo);W?.(eo)},[es,eo,W]);const eS=(0,n.useCallback)((e,t)=>r=>{r.preventDefault();r.stopPropagation();em(e);if(t.disabled){return}ec?.(e.date,t,r);L?.(e.date,t,r)},[ec,L,em]);const eO=(0,n.useCallback)((e,t)=>r=>{em(e);U?.(e.date,t,r)},[U,em]);const eH=(0,n.useCallback)((e,t)=>r=>{ev();K?.(e.date,t,r)},[ev,K]);const eN=(0,n.useCallback)((e,r)=>n=>{const a={ArrowLeft:[n.shiftKey?"month":"day",t.dir==="rtl"?"after":"before"],ArrowRight:[n.shiftKey?"month":"day",t.dir==="rtl"?"before":"after"],ArrowDown:[n.shiftKey?"year":"week","after"],ArrowUp:[n.shiftKey?"year":"week","before"],PageUp:[n.shiftKey?"year":"month","before"],PageDown:[n.shiftKey?"year":"month","after"],Home:["startOfWeek","before"],End:["endOfWeek","after"]};if(a[n.key]){n.preventDefault();n.stopPropagation();const[e,t]=a[n.key];eh(e,t)}z?.(e.date,r,n)},[eh,z,t.dir]);const eF=(0,n.useCallback)((e,t)=>r=>{P?.(e.date,t,r)},[P]);const eK=(0,n.useCallback)((e,t)=>r=>{R?.(e.date,t,r)},[R]);const eL=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=E.setMonth(E.startOfMonth(e),r);es(n)},[E,es]);const eU=(0,n.useCallback)(e=>t=>{const r=Number(t.target.value);const n=E.setYear(E.startOfMonth(e),r);es(n)},[E,es]);const{className:ez,style:eP}=(0,n.useMemo)(()=>({className:[S[g.UI.Root],t.className].filter(Boolean).join(" "),style:{...q?.[g.UI.Root],...t.style}}),[S,t.className,t.style,q]);const eR=(0,l/* .getDataAttributes */.C)(t);const eW=(0,n.useRef)(null);(0,b/* .useAnimation */.s)(eW,Boolean(t.animate),{classNames:S,months:er,focused:ep,dateLib:E});const ej={dayPickerProps:t,selected:eu,select:ec,isSelected:el,months:er,nextMonth:eo,previousMonth:ei,goToMonth:es,getModifiers:ed,components:D,classNames:S,styles:q,labels:M,formatters:C};return n.createElement(y/* .dayPickerContext.Provider */.S.Provider,{value:ej},n.createElement(D.Root,{rootRef:t.animate?eW:undefined,className:ez,style:eP,dir:t.dir,id:t.id,lang:t.lang,nonce:t.nonce,title:t.title,role:t.role,"aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],...eR},n.createElement(D.Months,{className:S[g.UI.Months],style:q?.[g.UI.Months]},!t.hideNavigation&&!N&&n.createElement(D.Nav,{"data-animated-nav":t.animate?"true":undefined,className:S[g.UI.Nav],style:q?.[g.UI.Nav],"aria-label":ew(),onPreviousClick:eE,onNextClick:eT,previousMonth:ei,nextMonth:eo}),er.map((e,r)=>{return n.createElement(D.Month,{"data-animated-month":t.animate?"true":undefined,className:S[g.UI.Month],style:q?.[g.UI.Month],// biome-ignore lint/suspicious/noArrayIndexKey: breaks animation
key:r,displayIndex:r,calendarMonth:e},N==="around"&&!t.hideNavigation&&r===0&&n.createElement(D.PreviousMonthButton,{type:"button",className:S[g.UI.PreviousMonthButton],tabIndex:ei?undefined:-1,"aria-disabled":ei?undefined:true,"aria-label":ex(ei),onClick:eE,"data-animated-button":t.animate?"true":undefined},n.createElement(D.Chevron,{disabled:ei?undefined:true,className:S[g.UI.Chevron],orientation:t.dir==="rtl"?"right":"left"})),n.createElement(D.MonthCaption,{"data-animated-caption":t.animate?"true":undefined,className:S[g.UI.MonthCaption],style:q?.[g.UI.MonthCaption],calendarMonth:e,displayIndex:r},O?.startsWith("dropdown")?n.createElement(D.DropdownNav,{className:S[g.UI.Dropdowns],style:q?.[g.UI.Dropdowns]},(()=>{const r=O==="dropdown"||O==="dropdown-months"?n.createElement(D.MonthsDropdown,{key:"month",className:S[g.UI.MonthsDropdown],"aria-label":ey(),classNames:S,components:D,disabled:Boolean(t.disableNavigation),onChange:eL(e.date),options:(0,v/* .getMonthOptions */.L)(e.date,en,ea,C,E),style:q?.[g.UI.Dropdown],value:E.getMonth(e.date)}):n.createElement("span",{key:"month"},Q(e.date,E));const a=O==="dropdown"||O==="dropdown-years"?n.createElement(D.YearsDropdown,{key:"year",className:S[g.UI.YearsDropdown],"aria-label":eD(E.options),classNames:S,components:D,disabled:Boolean(t.disableNavigation),onChange:eU(e.date),options:(0,h/* .getYearOptions */.g)(en,ea,C,E,Boolean(t.reverseYears)),style:q?.[g.UI.Dropdown],value:E.getYear(e.date)}):n.createElement("span",{key:"year"},J(e.date,E));const i=E.getMonthYearOrder()==="year-first"?[a,r]:[r,a];return i})(),n.createElement("span",{role:"status","aria-live":"polite",style:{border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"}},V(e.date,E.options,E))):n.createElement(D.CaptionLabel,{className:S[g.UI.CaptionLabel],role:"status","aria-live":"polite"},V(e.date,E.options,E))),N==="around"&&!t.hideNavigation&&r===F-1&&n.createElement(D.NextMonthButton,{type:"button",className:S[g.UI.NextMonthButton],tabIndex:eo?undefined:-1,"aria-disabled":eo?undefined:true,"aria-label":eA(eo),onClick:eT,"data-animated-button":t.animate?"true":undefined},n.createElement(D.Chevron,{disabled:eo?undefined:true,className:S[g.UI.Chevron],orientation:t.dir==="rtl"?"left":"right"})),r===F-1&&N==="after"&&!t.hideNavigation&&n.createElement(D.Nav,{"data-animated-nav":t.animate?"true":undefined,className:S[g.UI.Nav],style:q?.[g.UI.Nav],"aria-label":ew(),onPreviousClick:eE,onNextClick:eT,previousMonth:ei,nextMonth:eo}),n.createElement(D.MonthGrid,{role:"grid","aria-multiselectable":H==="multiple"||H==="range","aria-label":e_(e.date,E.options,E)||undefined,className:S[g.UI.MonthGrid],style:q?.[g.UI.MonthGrid]},!t.hideWeekdays&&n.createElement(D.Weekdays,{"data-animated-weekdays":t.animate?"true":undefined,className:S[g.UI.Weekdays],style:q?.[g.UI.Weekdays]},B&&n.createElement(D.WeekNumberHeader,{"aria-label":eI(E.options),className:S[g.UI.WeekNumberHeader],style:q?.[g.UI.WeekNumberHeader],scope:"col"},$()),eC.map(e=>n.createElement(D.Weekday,{"aria-label":eY(e,E.options,E),className:S[g.UI.Weekday],key:String(e),style:q?.[g.UI.Weekday],scope:"col"},X(e,E.options,E)))),n.createElement(D.Weeks,{"data-animated-weeks":t.animate?"true":undefined,className:S[g.UI.Weeks],style:q?.[g.UI.Weeks]},e.weeks.map(e=>{return n.createElement(D.Week,{className:S[g.UI.Week],key:e.weekNumber,style:q?.[g.UI.Week],week:e},B&&n.createElement(D.WeekNumber,{week:e,style:q?.[g.UI.WeekNumber],"aria-label":ek(e.weekNumber,{locale:T}),className:S[g.UI.WeekNumber],scope:"row",role:"rowheader"},Z(e.weekNumber,E)),e.days.map(e=>{const{date:r}=e;const a=ed(e);a[g/* .DayFlag.focused */.pL.focused]=!a.hidden&&Boolean(ep?.isEqualTo(e));a[g/* .SelectionState.selected */.wc.selected]=el?.(r)||a.selected;if((0,I/* .isDateRange */.oM)(eu)){// add range modifiers
const{from:e,to:t}=eu;a[g/* .SelectionState.range_start */.wc.range_start]=Boolean(e&&t&&E.isSameDay(r,e));a[g/* .SelectionState.range_end */.wc.range_end]=Boolean(e&&t&&E.isSameDay(r,t));a[g/* .SelectionState.range_middle */.wc.range_middle]=(0,Y/* .rangeIncludesDate */.R)(eu,r,true,E)}const i=(0,p/* .getStyleForModifiers */.J)(a,q,t.modifiersStyles);const o=(0,s/* .getClassNamesForModifiers */.k)(a,S,t.modifiersClassNames);const d=!eM&&!a.hidden?eb(r,a,E.options,E):undefined;return n.createElement(D.Day,{key:`${e.isoDate}_${e.displayMonthId}`,day:e,modifiers:a,className:o.join(" "),style:i,role:"gridcell","aria-selected":a.selected||undefined,"aria-label":d,"data-day":e.isoDate,"data-month":e.outside?e.dateMonthId:undefined,"data-selected":a.selected||undefined,"data-disabled":a.disabled||undefined,"data-hidden":a.hidden||undefined,"data-outside":e.outside||undefined,"data-focused":a.focused||undefined,"data-today":a.today||undefined},!a.hidden&&eM?n.createElement(D.DayButton,{className:S[g.UI.DayButton],style:q?.[g.UI.DayButton],type:"button",day:e,modifiers:a,disabled:!a.focused&&a.disabled||undefined,"aria-disabled":a.focused&&a.disabled||undefined,tabIndex:ef(e)?0:-1,"aria-label":eg(r,a,E.options,E),onClick:eS(e,a),onBlur:eH(e,a),onFocus:eO(e,a),onKeyDown:eN(e,a),onMouseEnter:eF(e,a),onMouseLeave:eK(e,a)},G(r,E.options,E)):!a.hidden&&G(e.date,E.options,E))}))}))))})),t.footer&&n.createElement(D.Footer,{className:S[g.UI.Footer],style:q?.[g.UI.Footer],role:"status","aria-live":"polite"},t.footer)))}},10782:function(e,t,r){r.d(t,{UI:()=>n,X5:()=>o,pL:()=>a,wc:()=>i});/**
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
 */var i;(function(e){/** The day is at the end of a selected range. */e["range_end"]="range_end";/** The day is at the middle of a selected range. */e["range_middle"]="range_middle";/** The day is at the start of a selected range. */e["range_start"]="range_start";/** The day is selected. */e["selected"]="selected"})(i||(i={}));/**
 * Enum representing different animation states for transitioning between
 * months.
 */var o;(function(e){/** The entering weeks when they appear before the exiting month. */e["weeks_before_enter"]="weeks_before_enter";/** The exiting weeks when they disappear before the entering month. */e["weeks_before_exit"]="weeks_before_exit";/** The entering weeks when they appear after the exiting month. */e["weeks_after_enter"]="weeks_after_enter";/** The exiting weeks when they disappear after the entering month. */e["weeks_after_exit"]="weeks_after_exit";/** The entering caption when it appears after the exiting month. */e["caption_after_enter"]="caption_after_enter";/** The exiting caption when it disappears after the entering month. */e["caption_after_exit"]="caption_after_exit";/** The entering caption when it appears before the exiting month. */e["caption_before_enter"]="caption_before_enter";/** The exiting caption when it disappears before the entering month. */e["caption_before_exit"]="caption_before_exit"})(o||(o={}))},69133:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(30922);/**
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
 */class n{constructor(e,t){this.days=t;this.weekNumber=e}}},30922:function(e,t,r){r.d(t,{VA:()=>z,i0:()=>U});/* import */var n=r(2832);/* import */var a=r(56187);/* import */var i=r(59099);/* import */var o=r(46199);/* import */var s=r(19636);/* import */var d=r(42878);/* import */var l=r(9970);/* import */var c=r(56190);/* import */var u=r(78307);/* import */var v=r(48606);/* import */var p=r(17193);/* import */var f=r(547);/* import */var h=r(66146);/* import */var m=r(1896);/* import */var g=r(72642);/* import */var b=r(1261);/* import */var _=r(14646);/* import */var y=r(62311);/* import */var w=r(74085);/* import */var x=r(61736);/* import */var A=r(20443);/* import */var Y=r(13851);/* import */var k=r(6903);/* import */var I=r(39896);/* import */var D=r(8153);/* import */var C=r(98843);/* import */var M=r(47593);/* import */var E=r(58050);/* import */var T=r(5758);/* import */var S=r(16925);/* import */var O=r(910);/* import */var H=r(36662);/* import */var N=r(48011);/* import */var F=r(14308);/* import */var K=r(26969);/* import */var L=r(83566);/**
 * A wrapper class around [date-fns](http://date-fns.org) that provides utility
 * methods for date manipulation and formatting.
 *
 * @since 9.2.0
 * @example
 *   const dateLib = new DateLib({ locale: es });
 *   const newDate = dateLib.addDays(new Date(), 5);
 */class U{/**
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
         */this.addMonths=(e,t)=>{return this.overrides?.addMonths?this.overrides.addMonths(e,t):(0,i/* .addMonths */.P)(e,t)};/**
         * Adds the specified number of weeks to the given date.
         *
         * @param date The date to add weeks to.
         * @param amount The number of weeks to add.
         * @returns The new date with the weeks added.
         */this.addWeeks=(e,t)=>{return this.overrides?.addWeeks?this.overrides.addWeeks(e,t):(0,o/* .addWeeks */.J)(e,t)};/**
         * Adds the specified number of years to the given date.
         *
         * @param date The date to add years to.
         * @param amount The number of years to add.
         * @returns The new date with the years added.
         */this.addYears=(e,t)=>{return this.overrides?.addYears?this.overrides.addYears(e,t):(0,s/* .addYears */.e)(e,t)};/**
         * Returns the number of calendar days between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar days between the dates.
         */this.differenceInCalendarDays=(e,t)=>{return this.overrides?.differenceInCalendarDays?this.overrides.differenceInCalendarDays(e,t):(0,d/* .differenceInCalendarDays */.m)(e,t)};/**
         * Returns the number of calendar months between the given dates.
         *
         * @param dateLeft The later date.
         * @param dateRight The earlier date.
         * @returns The number of calendar months between the dates.
         */this.differenceInCalendarMonths=(e,t)=>{return this.overrides?.differenceInCalendarMonths?this.overrides.differenceInCalendarMonths(e,t):(0,l/* .differenceInCalendarMonths */.U)(e,t)};/**
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
         */this.endOfBroadcastWeek=e=>{return this.overrides?.endOfBroadcastWeek?this.overrides.endOfBroadcastWeek(e):(0,K/* .endOfBroadcastWeek */.O)(e,this)};/**
         * Returns the end of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The end of the ISO week.
         */this.endOfISOWeek=e=>{return this.overrides?.endOfISOWeek?this.overrides.endOfISOWeek(e):(0,v/* .endOfISOWeek */.g)(e)};/**
         * Returns the end of the month for the given date.
         *
         * @param date The original date.
         * @returns The end of the month.
         */this.endOfMonth=e=>{return this.overrides?.endOfMonth?this.overrides.endOfMonth(e):(0,p/* .endOfMonth */.p)(e)};/**
         * Returns the end of the week for the given date.
         *
         * @param date The original date.
         * @returns The end of the week.
         */this.endOfWeek=(e,t)=>{return this.overrides?.endOfWeek?this.overrides.endOfWeek(e,t):(0,f/* .endOfWeek */.$)(e,this.options)};/**
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
         */this.format=(e,t,r)=>{const n=this.overrides?.format?this.overrides.format(e,t,this.options):(0,m/* .format */.GP)(e,t,this.options);if(this.options.numerals&&this.options.numerals!=="latn"){return this.replaceDigits(n)}return n};/**
         * Returns the ISO week number for the given date.
         *
         * @param date The date to get the ISO week number for.
         * @returns The ISO week number.
         */this.getISOWeek=e=>{return this.overrides?.getISOWeek?this.overrides.getISOWeek(e):(0,g/* .getISOWeek */.s)(e)};/**
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
         */this.setMonth=(e,t)=>{return this.overrides?.setMonth?this.overrides.setMonth(e,t):(0,M/* .setMonth */.Z)(e,t)};/**
         * Sets the year of the given date.
         *
         * @param date The date to set the year on.
         * @param year The year to set.
         * @returns The new date with the year set.
         */this.setYear=(e,t)=>{return this.overrides?.setYear?this.overrides.setYear(e,t):(0,E/* .setYear */.i)(e,t)};/**
         * Returns the start of the broadcast week for the given date.
         *
         * @param date The original date.
         * @returns The start of the broadcast week.
         */this.startOfBroadcastWeek=(e,t)=>{return this.overrides?.startOfBroadcastWeek?this.overrides.startOfBroadcastWeek(e,this):(0,L/* .startOfBroadcastWeek */.l)(e,this)};/**
         * Returns the start of the day for the given date.
         *
         * @param date The original date.
         * @returns The start of the day.
         */this.startOfDay=e=>{return this.overrides?.startOfDay?this.overrides.startOfDay(e):(0,T/* .startOfDay */.o)(e)};/**
         * Returns the start of the ISO week for the given date.
         *
         * @param date The original date.
         * @returns The start of the ISO week.
         */this.startOfISOWeek=e=>{return this.overrides?.startOfISOWeek?this.overrides.startOfISOWeek(e):(0,S/* .startOfISOWeek */.b)(e)};/**
         * Returns the start of the month for the given date.
         *
         * @param date The original date.
         * @returns The start of the month.
         */this.startOfMonth=e=>{return this.overrides?.startOfMonth?this.overrides.startOfMonth(e):(0,O/* .startOfMonth */.w)(e)};/**
         * Returns the start of the week for the given date.
         *
         * @param date The original date.
         * @returns The start of the week.
         */this.startOfWeek=(e,t)=>{return this.overrides?.startOfWeek?this.overrides.startOfWeek(e,this.options):(0,H/* .startOfWeek */.k)(e,this.options)};/**
         * Returns the start of the year for the given date.
         *
         * @param date The original date.
         * @returns The start of the year.
         */this.startOfYear=e=>{return this.overrides?.startOfYear?this.overrides.startOfYear(e):(0,N/* .startOfYear */.D)(e)};this.options={locale:F/* .enUS */.c,...e};this.overrides=t}/**
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
     */getMonthYearOrder(){const e=this.options.locale?.code;if(!e){return"month-first"}return U.yearFirstLocales.has(e)?"year-first":"month-first"}/**
     * Formats the month/year pair respecting locale conventions.
     *
     * @since 9.11.0
     */formatMonthYear(e){const{locale:t,timeZone:r,numerals:n}=this.options;const a=t?.code;if(a&&U.yearFirstLocales.has(a)){try{const t=new Intl.DateTimeFormat(a,{month:"long",year:"numeric",timeZone:r,numberingSystem:n});const i=t.format(e);return i}catch{// Fallback to date-fns formatting below.
}}const i=this.getMonthYearOrder()==="year-first"?"y LLLL":"LLLL y";return this.format(e,i)}}U.yearFirstLocales=new Set(["eu","hu","ja","ja-Hira","ja-JP","ko","ko-KR","lt","lt-LT","lv","lv-LV","mn","mn-MN","zh","zh-CN","zh-HK","zh-TW"]);/** The default locale (English). *//**
 * The default date library with English locale.
 *
 * @since 9.2.0
 */const z=new U;/**
 * @ignore
 * @deprecated Use `defaultDateLib`.
 */const P=/* unused pure expression or super */null&&z},3191:function(e,t,r){r.d(t,{$:()=>a});/* import */var n=r(41594);/**
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
 */function a(e){const{day:t,modifiers:r,...a}=e;const i=n.useRef(null);n.useEffect(()=>{if(r.focused)i.current?.focus()},[r.focused]);return n.createElement("button",{ref:i,...a})}},62266:function(e,t,r){r.d(t,{m:()=>i});/* import */var n=r(41594);/* import */var a=r(10782);/**
 * Render a dropdown component for navigation in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{options:t,className:r,components:i,classNames:o,...s}=e;const d=[o[a.UI.Dropdown],r].join(" ");const l=t?.find(({value:e})=>e===s.value);return n.createElement("span",{"data-disabled":s.disabled,className:o[a.UI.DropdownRoot]},n.createElement(i.Select,{className:d,...s},t?.map(({value:e,label:t,disabled:r})=>n.createElement(i.Option,{key:e,value:e,disabled:r},t))),n.createElement("span",{className:o[a.UI.CaptionLabel],"aria-hidden":true},l?.label,n.createElement(i.Chevron,{orientation:"down",size:18,className:o[a.UI.Chevron]})))}},70089:function(e,t,r){r.d(t,{z:()=>a});/* import */var n=r(41594);/**
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
 */function a(e){return n.createElement("div",{...e})}},95597:function(e,t,r){r.d(t,{l:()=>i});/* import */var n=r(41594);/* import */var a=r(79209);/**
 * Render a dropdown to navigate between months in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Dropdown,{...e})}},53026:function(e,t,r){r.d(t,{s:()=>o});/* import */var n=r(41594);/* import */var a=r(10782);/* import */var i=r(79209);/**
 * Render the navigation toolbar with buttons to navigate between months.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function o(e){const{onPreviousClick:t,onNextClick:r,previousMonth:o,nextMonth:s,...d}=e;const{components:l,classNames:c,labels:{labelPrevious:u,labelNext:v}}=(0,i/* .useDayPicker */.w)();const p=(0,n.useCallback)(e=>{if(s){r?.(e)}},[s,r]);const f=(0,n.useCallback)(e=>{if(o){t?.(e)}},[o,t]);return n.createElement("nav",{...d},n.createElement(l.PreviousMonthButton,{type:"button",className:c[a.UI.PreviousMonthButton],tabIndex:o?undefined:-1,"aria-disabled":o?undefined:true,"aria-label":u(o),onClick:f},n.createElement(l.Chevron,{disabled:o?undefined:true,className:c[a.UI.Chevron],orientation:"left"})),n.createElement(l.NextMonthButton,{type:"button",className:c[a.UI.NextMonthButton],tabIndex:s?undefined:-1,"aria-disabled":s?undefined:true,"aria-label":v(s),onClick:p},n.createElement(l.Chevron,{disabled:s?undefined:true,orientation:"right",className:c[a.UI.Chevron]})))}},36170:function(e,t,r){r.d(t,{i:()=>i});/* import */var n=r(41594);/* import */var a=r(79209);/**
 * Render the button to navigate to the next month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Button,{...e})}},92142:function(e,t,r){r.d(t,{c:()=>a});/* import */var n=r(41594);/**
 * Render an `option` element.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function a(e){return n.createElement("option",{...e})}},83673:function(e,t,r){r.d(t,{u:()=>i});/* import */var n=r(41594);/* import */var a=r(79209);/**
 * Render the button to navigate to the previous month in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Button,{...e})}},96291:function(e,t,r){r.d(t,{b:()=>a});/* import */var n=r(41594);/**
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
 */function a(e){return n.createElement("tbody",{...e})}},95528:function(e,t,r){r.d(t,{w:()=>i});/* import */var n=r(41594);/* import */var a=r(79209);/**
 * Render a dropdown to navigate between years in the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */function i(e){const{components:t}=(0,a/* .useDayPicker */.w)();return n.createElement(t.Dropdown,{...e})}},63869:function(e,t,r){r.r(t);r.d(t,{Button:()=>/* reexport safe */n.$,CaptionLabel:()=>/* reexport safe */a.$,Chevron:()=>/* reexport safe */i.c,Day:()=>/* reexport safe */o.L,DayButton:()=>/* reexport safe */s.x,Dropdown:()=>/* reexport safe */d.m,DropdownNav:()=>/* reexport safe */l.z,Footer:()=>/* reexport safe */c.w,Month:()=>/* reexport safe */u.f,MonthCaption:()=>/* reexport safe */v.P,MonthGrid:()=>/* reexport safe */p.D,Months:()=>/* reexport safe */f.i,MonthsDropdown:()=>/* reexport safe */h.l,Nav:()=>/* reexport safe */m.s,NextMonthButton:()=>/* reexport safe */g.i,Option:()=>/* reexport safe */b.c,PreviousMonthButton:()=>/* reexport safe */_.u,Root:()=>/* reexport safe */y.b,Select:()=>/* reexport safe */w.l,Week:()=>/* reexport safe */x.j,WeekNumber:()=>/* reexport safe */k.u,WeekNumberHeader:()=>/* reexport safe */I.t,Weekday:()=>/* reexport safe */A.B,Weekdays:()=>/* reexport safe */Y.S,Weeks:()=>/* reexport safe */D.m,YearsDropdown:()=>/* reexport safe */C.w});/* import */var n=r(3191);/* import */var a=r(66403);/* import */var i=r(49412);/* import */var o=r(92521);/* import */var s=r(64561);/* import */var d=r(62266);/* import */var l=r(70089);/* import */var c=r(7012);/* import */var u=r(92469);/* import */var v=r(68819);/* import */var p=r(55037);/* import */var f=r(43584);/* import */var h=r(95597);/* import */var m=r(53026);/* import */var g=r(36170);/* import */var b=r(92142);/* import */var _=r(83673);/* import */var y=r(96291);/* import */var w=r(53267);/* import */var x=r(36207);/* import */var A=r(5133);/* import */var Y=r(17096);/* import */var k=r(66234);/* import */var I=r(1139);/* import */var D=r(12266);/* import */var C=r(95528)},50075:function(e,t,r){r.d(t,{G:()=>i,w:()=>a});/* import */var n=r(30922);/**
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
 */const i=a},15143:function(e,t,r){r.d(t,{i:()=>a});/* import */var n=r(30922);/**
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
 */function a(e,t,r){return(r??new n/* .DateLib */.i0(t)).format(e,"cccccc")}},93369:function(e,t,r){r.d(t,{D:()=>i,e:()=>a});/* import */var n=r(30922);/**
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
 */const i=a},61032:function(e,t,r){r.r(t);r.d(t,{formatCaption:()=>/* reexport safe */n.w,formatDay:()=>/* reexport safe */a.i,formatMonthCaption:()=>/* reexport safe */n.G,formatMonthDropdown:()=>/* reexport safe */i.Z,formatWeekNumber:()=>/* reexport safe */s.n,formatWeekNumberHeader:()=>/* reexport safe */d.U,formatWeekdayName:()=>/* reexport safe */o.Z,formatYearCaption:()=>/* reexport safe */l.D,formatYearDropdown:()=>/* reexport safe */l.e});/* import */var n=r(50075);/* import */var a=r(15143);/* import */var i=r(90970);/* import */var o=r(40812);/* import */var s=r(93712);/* import */var d=r(61189);/* import */var l=r(93369)},83803:function(e,t,r){r.d(t,{A:()=>o});/* import */var n=r(10782);var a;(function(e){e[e["Today"]=0]="Today";e[e["Selected"]=1]="Selected";e[e["LastFocused"]=2]="LastFocused";e[e["FocusedModifier"]=3]="FocusedModifier"})(a||(a={}));/**
 * Determines if a day is focusable based on its modifiers.
 *
 * A day is considered focusable if it is not disabled, hidden, or outside the
 * displayed month.
 *
 * @param modifiers The modifiers applied to the day.
 * @returns `true` if the day is focusable, otherwise `false`.
 */function i(e){return!e[n/* .DayFlag.disabled */.pL.disabled]&&!e[n/* .DayFlag.hidden */.pL.hidden]&&!e[n/* .DayFlag.outside */.pL.outside]}/**
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
 */function o(e,t,r,o){let s;let d=-1;for(const l of e){const e=t(l);if(i(e)){if(e[n/* .DayFlag.focused */.pL.focused]&&d<a.FocusedModifier){s=l;d=a.FocusedModifier}else if(o?.isEqualTo(l)&&d<a.LastFocused){s=l;d=a.LastFocused}else if(r(l.date)&&d<a.Selected){s=l;d=a.Selected}else if(e[n/* .DayFlag.today */.pL.today]&&d<a.Today){s=l;d=a.Today}}}if(!s){// Return the first day that is focusable
s=e.find(e=>i(t(e)))}return s}},36612:function(e,t,r){r.d(t,{x:()=>i});/* import */var n=r(10782);/* import */var a=r(9723);/**
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
 */function i(e,t,r,i,o){const{disabled:s,hidden:d,modifiers:l,showOutsideDays:c,broadcastCalendar:u,today:v=o.today()}=t;const{isSameDay:p,isSameMonth:f,startOfMonth:h,isBefore:m,endOfMonth:g,isAfter:b}=o;const _=r&&h(r);const y=i&&g(i);const w={[n/* .DayFlag.focused */.pL.focused]:[],[n/* .DayFlag.outside */.pL.outside]:[],[n/* .DayFlag.disabled */.pL.disabled]:[],[n/* .DayFlag.hidden */.pL.hidden]:[],[n/* .DayFlag.today */.pL.today]:[]};const x={};for(const t of e){const{date:e,displayMonth:r}=t;const n=Boolean(r&&!f(e,r));const i=Boolean(_&&m(e,_));const h=Boolean(y&&b(e,y));const g=Boolean(s&&(0,a/* .dateMatchModifiers */.k)(e,s,o));const A=Boolean(d&&(0,a/* .dateMatchModifiers */.k)(e,d,o))||i||h||// Broadcast calendar will show outside days as default
!u&&!c&&n||u&&c===false&&n;const Y=p(e,v);if(n)w.outside.push(t);if(g)w.disabled.push(t);if(A)w.hidden.push(t);if(Y)w.today.push(t);// Add custom modifiers
if(l){Object.keys(l).forEach(r=>{const n=l?.[r];const i=n?(0,a/* .dateMatchModifiers */.k)(e,n,o):false;if(!i)return;if(x[r]){x[r].push(t)}else{x[r]=[t]}})}}return e=>{// Initialize all the modifiers to false
const t={[n/* .DayFlag.focused */.pL.focused]:false,[n/* .DayFlag.disabled */.pL.disabled]:false,[n/* .DayFlag.hidden */.pL.hidden]:false,[n/* .DayFlag.outside */.pL.outside]:false,[n/* .DayFlag.today */.pL.today]:false};const r={};// Find the modifiers for the given day
for(const r in w){const n=w[r];t[r]=n.some(t=>t===e)}for(const t in x){r[t]=x[t].some(t=>t===e)}return{...t,// custom modifiers should override all the previous ones
...r}}}},26969:function(e,t,r){r.d(t,{O:()=>i});/* import */var n=r(1425);/* import */var a=r(83566);/**
 * Returns the end date of the week in the broadcast calendar.
 *
 * The broadcast week ends on the last day of the last broadcast week for the
 * given date.
 *
 * @since 9.4.0
 * @param date The date for which to calculate the end of the broadcast week.
 * @param dateLib The date library to use for date manipulation.
 * @returns The end date of the broadcast week.
 */function i(e,t){const r=(0,a/* .startOfBroadcastWeek */.l)(e,t);const i=(0,n/* .getBroadcastWeeksInMonth */.I)(e,t);const o=t.addDays(r,i*7-1);return o}},1425:function(e,t,r){r.d(t,{I:()=>i});const n=5;const a=4;/**
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
 */function i(e,t){// Get the first day of the month
const r=t.startOfMonth(e);// Get the day of the week for the first day of the month (1-7, where 1 is Monday)
const i=r.getDay()>0?r.getDay():7;const o=t.addDays(e,-i+1);const s=t.addDays(o,n*7-1);const d=t.getMonth(e)===t.getMonth(s)?n:a;return d}},76447:function(e,t,r){r.d(t,{k:()=>a});/* import */var n=r(10782);/**
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
 */function a(e,t,r={}){const i=Object.entries(e).filter(([,e])=>e===true).reduce((e,[a])=>{if(r[a]){e.push(r[a])}else if(t[n/* .DayFlag */.pL[a]]){e.push(t[n/* .DayFlag */.pL[a]])}else if(t[n/* .SelectionState */.wc[a]]){e.push(t[n/* .SelectionState */.wc[a]])}return e},[t[n.UI.Day]]);return i}},47088:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(63869);/**
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
 */function n(e,t,r,n){const a=e[0];const i=e[e.length-1];const{ISOWeek:o,fixedWeeks:s,broadcastCalendar:d}=r??{};const{addDays:l,differenceInCalendarDays:c,differenceInCalendarMonths:u,endOfBroadcastWeek:v,endOfISOWeek:p,endOfMonth:f,endOfWeek:h,isAfter:m,startOfBroadcastWeek:g,startOfISOWeek:b,startOfWeek:_}=n;const y=d?g(a,n):o?b(a):_(a);const w=d?v(i):o?p(f(i)):h(f(i));// If maxDate is set, clamp the grid to the end of that week.
const x=t&&(d?v(t):o?p(t):h(t));// Pick the earliest week end between the displayed months and the constraint.
const A=x&&m(w,x)?x:w;const Y=c(A,y);const k=u(i,a)+1;const I=[];for(let e=0;e<=Y;e++){const t=l(y,e);I.push(t)}// If fixed weeks is enabled, add the extra dates to the array
const D=d?35:42;const C=D*k;if(s&&I.length<C){const e=C-I.length;for(let t=0;t<e;t++){const e=l(I[I.length-1],1);I.push(e)}}return I}},73495:function(e,t,r){r.d(t,{_:()=>n});/**
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
 */function n(e,t,r,n){const{numberOfMonths:a=1}=r;const i=[];for(let r=0;r<a;r++){const a=n.addMonths(e,r);if(t&&a>t){break}i.push(a)}return i}},81790:function(e,t,r){r.d(t,{l:()=>n});/**
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
 */function n(e,t,r,n,a,i,o){const{ISOWeek:s,broadcastCalendar:d}=i;const{addDays:l,addMonths:c,addWeeks:u,addYears:v,endOfBroadcastWeek:p,endOfISOWeek:f,endOfWeek:h,max:m,min:g,startOfBroadcastWeek:b,startOfISOWeek:_,startOfWeek:y}=o;const w={day:l,week:u,month:c,year:v,startOfWeek:e=>d?b(e,o):s?_(e):y(e),endOfWeek:e=>d?p(e):s?f(e):h(e)};let x=w[e](r,t==="after"?1:-1);if(t==="before"&&n){x=m([n,x])}else if(t==="after"&&a){x=g([a,x])}return x}},3591:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(61032);/**
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
 */function n(e,t,r,n){const{month:a,defaultMonth:i,today:o=n.today(),numberOfMonths:s=1}=e;let d=a||i||o;const{differenceInCalendarMonths:l,addMonths:c,startOfMonth:u}=n;if(r&&l(r,d)<s-1){const e=-1*(s-1);d=c(r,e)}if(t&&l(d,t)<0){d=t}return u(d)}},36004:function(e,t,r){r.d(t,{L:()=>n});/**
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
 */function n(e,t,r,n,a){const{startOfMonth:i,startOfYear:o,endOfYear:s,eachMonthOfInterval:d,getMonth:l}=a;const c=d({start:o(e),end:s(e)});const u=c.map(e=>{const o=n.formatMonthDropdown(e,a);const s=l(e);const d=t&&e<i(t)||r&&e>i(r)||false;return{value:s,label:o,disabled:d}});return u}},59807:function(e,t,r){r.d(t,{S:()=>o});/* import */var n=r(69133);/* import */var a=r(24971);/* import */var i=r(76465);/**
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
 */function o(e,t,r,o){const{addDays:s,endOfBroadcastWeek:d,endOfISOWeek:l,endOfMonth:c,endOfWeek:u,getISOWeek:v,getWeek:p,startOfBroadcastWeek:f,startOfISOWeek:h,startOfWeek:m}=o;const g=e.reduce((e,g)=>{const b=r.broadcastCalendar?f(g,o):r.ISOWeek?h(g):m(g);const _=r.broadcastCalendar?d(g):r.ISOWeek?l(c(g)):u(c(g));/** The dates to display in the month. */const y=t.filter(e=>{return e>=b&&e<=_});const w=r.broadcastCalendar?35:42;if(r.fixedWeeks&&y.length<w){const e=t.filter(e=>{const t=w-y.length;return e>_&&e<=s(_,t)});y.push(...e)}const x=y.reduce((e,t)=>{const i=r.ISOWeek?v(t):p(t);const s=e.find(e=>e.weekNumber===i);const d=new n/* .CalendarDay */.P(t,g,o);if(!s){e.push(new a/* .CalendarWeek */.j(i,[d]))}else{s.days.push(d)}return e},[]);const A=new i/* .CalendarMonth */.j(g,x);e.push(A);return e},[]);if(!r.reverseMonths){return g}else{return g.reverse()}}},61921:function(e,t,r){r.d(t,{J:()=>n});/**
 * Returns the start and end months for calendar navigation.
 *
 * @param props The DayPicker props, including navigation and layout options.
 * @param dateLib The date library to use for date manipulation.
 * @returns A tuple containing the start and end months for navigation.
 */function n(e,t){let{startMonth:r,endMonth:n}=e;const{startOfYear:a,startOfDay:i,startOfMonth:o,endOfMonth:s,addYears:d,endOfYear:l,newDate:c,today:u}=t;// Handle deprecated code
const{fromYear:v,toYear:p,fromMonth:f,toMonth:h}=e;if(!r&&f){r=f}if(!r&&v){r=t.newDate(v,0,1)}if(!n&&h){n=h}if(!n&&p){n=c(p,11,31)}const m=e.captionLayout==="dropdown"||e.captionLayout==="dropdown-years";if(r){r=o(r)}else if(v){r=c(v,0,1)}else if(!r&&m){r=a(d(e.today??u(),-100))}if(n){n=s(n)}else if(p){n=c(p,11,31)}else if(!n&&m){n=l(e.today??u())}return[r?i(r):r,n?i(n):n]}},44917:function(e,t,r){r.d(t,{O:()=>o});/* import */var n=r(69133);/* import */var a=r(9723);/* import */var i=r(81790);/**
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
 */function o(e,t,r,s,d,l,c,u=0){if(u>365){// Limit the recursion to 365 attempts
return undefined}const v=(0,i/* .getFocusableDate */.l)(e,t,r.date,s,d,l,c);const p=Boolean(l.disabled&&(0,a/* .dateMatchModifiers */.k)(v,l.disabled,c));const f=Boolean(l.hidden&&(0,a/* .dateMatchModifiers */.k)(v,l.hidden,c));const h=v;const m=new n/* .CalendarDay */.P(v,h,c);if(!p&&!f){return m}// Recursively attempt to find the next focusable date
return o(e,t,m,s,d,l,c,u+1)}},66847:function(e,t,r){r.d(t,{Q:()=>n});/**
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
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:i=1}=r;const{startOfMonth:o,addMonths:s,differenceInCalendarMonths:d}=n;const l=a?i:1;const c=o(e);if(!t){return s(c,l)}const u=d(t,e);if(u<i){return undefined}return s(c,l)}},70267:function(e,t,r){r.d(t,{E:()=>n});/**
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
 */function n(e,t,r,n){if(r.disableNavigation){return undefined}const{pagedNavigation:a,numberOfMonths:i}=r;const{startOfMonth:o,addMonths:s,differenceInCalendarMonths:d}=n;const l=a?i??1:1;const c=o(e);if(!t){return s(c,-l)}const u=d(c,t);if(u<=0){return undefined}return s(c,-l)}},66220:function(e,t,r){r.d(t,{J:()=>a});/* import */var n=r(10782);/**
 * Returns the computed style for a day based on its modifiers.
 *
 * This function merges the base styles for the day with any styles associated
 * with active modifiers.
 *
 * @param dayModifiers The modifiers applied to the day.
 * @param styles The base styles for the calendar elements.
 * @param modifiersStyles The styles associated with specific modifiers.
 * @returns The computed style for the day.
 */function a(e,t={},r={}){let i={...t?.[n.UI.Day]};Object.entries(e).filter(([,e])=>e===true).forEach(([e])=>{i={...i,...r?.[e]}});return i}},55223:function(e,t,r){r.d(t,{c:()=>n});/**
 * Generates a series of 7 days, starting from the beginning of the week, to use
 * for formatting weekday names (e.g., Monday, Tuesday, etc.).
 *
 * @param dateLib The date library to use for date manipulation.
 * @param ISOWeek Whether to use ISO week numbering (weeks start on Monday).
 * @param broadcastCalendar Whether to use the broadcast calendar (weeks start
 *   on Monday, but may include adjustments for broadcast-specific rules).
 * @returns An array of 7 dates representing the weekdays.
 */function n(e,t,r,n){const a=n??e.today();const i=r?e.startOfBroadcastWeek(a,e):t?e.startOfISOWeek(a):e.startOfWeek(a);const o=[];for(let t=0;t<7;t++){const r=e.addDays(i,t);o.push(r)}return o}},32923:function(e,t,r){r.d(t,{C:()=>n});/**
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
 */function n(e,t,r,a,i=false){if(!e)return undefined;if(!t)return undefined;const{startOfYear:o,endOfYear:s,eachYearOfInterval:d,getYear:l}=a;const c=o(e);const u=s(t);const v=d({start:c,end:u});if(i)v.reverse();return v.map(e=>{const t=r.formatYearDropdown(e,a);return{value:l(e),label:t,disabled:false}})}},83566:function(e,t,r){r.d(t,{l:()=>n});/**
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
 */function a(e,t){const[r,a]=(0,n.useState)(e);const i=t===undefined?r:t;return[i,a]}},7332:function(e,t,r){r.r(t);r.d(t,{labelCaption:()=>/* reexport safe */a.t,labelDay:()=>/* reexport safe */n.Z,labelDayButton:()=>/* reexport safe */n.n,labelGrid:()=>/* reexport safe */a.b,labelGridcell:()=>/* reexport safe */i.P,labelMonthDropdown:()=>/* reexport safe */o.a,labelNav:()=>/* reexport safe */s.y,labelNext:()=>/* reexport safe */d.s,labelPrevious:()=>/* reexport safe */l.o,labelWeekNumber:()=>/* reexport safe */u.k,labelWeekNumberHeader:()=>/* reexport safe */v.N,labelWeekday:()=>/* reexport safe */c.n,labelYearDropdown:()=>/* reexport safe */p.n});/* import */var n=r(94926);/* import */var a=r(43350);/* import */var i=r(43950);/* import */var o=r(91859);/* import */var s=r(22913);/* import */var d=r(98531);/* import */var l=r(67683);/* import */var c=r(18146);/* import */var u=r(17587);/* import */var v=r(71722);/* import */var p=r(62574)},94926:function(e,t,r){r.d(t,{Z:()=>i,n:()=>a});/* import */var n=r(30922);/**
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
 */function a(e,t,r,a){let i=(a??new n/* .DateLib */.i0(r)).format(e,"PPPP");if(t.today)i=`Today, ${i}`;if(t.selected)i=`${i}, selected`;return i}/**
 * @ignore
 * @deprecated Use `labelDayButton` instead.
 */const i=a},43350:function(e,t,r){r.d(t,{b:()=>a,t:()=>i});/* import */var n=r(30922);/**
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
 */const i=a},43950:function(e,t,r){r.d(t,{P:()=>a});/* import */var n=r(30922);/**
 * Generates the label for a day grid cell when the calendar is not interactive.
 *
 * @param date - The date to format.
 * @param modifiers - Optional modifiers providing context for the day.
 * @param options - Optional configuration for the date formatting library.
 * @param dateLib - An optional instance of the date formatting library.
 * @returns The label for the day grid cell.
 * @group Labels
 * @see https://daypicker.dev/docs/translation#aria-labels
 */function a(e,t,r,a){let i=(a??new n/* .DateLib */.i0(r)).format(e,"PPPP");if(t?.today){i=`Today, ${i}`}return i}},91859:function(e,t,r){r.d(t,{a:()=>n});/**
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
 */function a(e,t){const{selected:r,required:a,onSelect:i}=e;const[o,s]=(0,n/* .useControlledValue */.j)(r,i?r:undefined);const d=!i?o:r;const{isSameDay:l}=t;const c=e=>{return d?.some(t=>l(t,e))??false};const{min:u,max:v}=e;const p=(e,t,r)=>{let n=[...d??[]];if(c(e)){if(d?.length===u){// Min value reached, do nothing
return}if(a&&d?.length===1){// Required value already selected do nothing
return}n=d?.filter(t=>!l(t,e))}else{if(d?.length===v){// Max value reached, reset the selection to date
n=[e]}else{// Add the date to the selection
n=[...n,e]}}if(!i){s(n)}i?.(n,e,t,r);return n};return{selected:d,select:p,isSelected:c}}},95379:function(e,t,r){r.d(t,{f:()=>s});/* import */var n=r(15148);/* import */var a=r(75749);/* import */var i=r(85052);/* import */var o=r(79796);/**
 * Hook to manage range selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected range, a function to select a
 *   range, and a function to check if a date is within the range.
 */function s(e,t){const{disabled:r,excludeDisabled:s,selected:d,required:l,onSelect:c}=e;const[u,v]=(0,n/* .useControlledValue */.j)(d,c?d:undefined);const p=!c?u:d;const f=e=>p&&(0,o/* .rangeIncludesDate */.R)(p,e,false,t);const h=(n,o,d)=>{const{min:u,max:f}=e;const h=n?(0,a/* .addToRange */.M)(n,p,u,f,l,t):undefined;if(s&&r&&h?.from&&h.to){if((0,i/* .rangeContainsModifiers */.P)({from:h.from,to:h.to},r,t)){// if a disabled days is found, the range is reset
h.from=n;h.to=undefined}}if(!c){v(h)}c?.(h,n,o,d);return h};return{selected:p,select:h,isSelected:f}}},12764:function(e,t,r){r.d(t,{G:()=>a});/* import */var n=r(15148);/**
 * Hook to manage single-date selection in the DayPicker component.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns An object containing the selected date, a function to select a date,
 *   and a function to check if a date is selected.
 */function a(e,t){const{selected:r,required:a,onSelect:i}=e;const[o,s]=(0,n/* .useControlledValue */.j)(r,i?r:undefined);const d=!i?o:r;const{isSameDay:l}=t;const c=e=>{return d?l(d,e):false};const u=(e,t,r)=>{let n=e;if(!a&&d&&d&&l(e,d)){// If the date is the same, clear the selection.
n=undefined}if(!i){s(n)}if(a){i?.(n,e,t,r)}else{i?.(n,e,t,r)}return n};return{selected:d,select:u,isSelected:c}}},8755:function(e,t,r){r.d(t,{s:()=>v});/* import */var n=r(41594);/* import */var a=r(10782);const i=e=>{if(e instanceof HTMLElement)return e;return null};const o=e=>[...e.querySelectorAll("[data-animated-month]")??[]];const s=e=>i(e.querySelector("[data-animated-month]"));const d=e=>i(e.querySelector("[data-animated-caption]"));const l=e=>i(e.querySelector("[data-animated-weeks]"));const c=e=>i(e.querySelector("[data-animated-nav]"));const u=e=>i(e.querySelector("[data-animated-weekdays]"));/**
 * Handles animations for transitioning between months in the DayPicker
 * component.
 *
 * @private
 * @param rootElRef - A reference to the root element of the DayPicker
 *   component.
 * @param enabled - Whether animations are enabled.
 * @param options - Configuration options for the animation, including class
 *   names, months, focused day, and the date utility library.
 */function v(e,t,{classNames:r,months:i,focused:v,dateLib:p}){const f=(0,n.useRef)(null);const h=(0,n.useRef)(i);const m=(0,n.useRef)(false);(0,n.useLayoutEffect)(()=>{// get previous months before updating the previous months ref
const n=h.current;// update previous months ref for next effect trigger
h.current=i;if(!t||!e.current||// safety check because the ref can be set to anything by consumers
!(e.current instanceof HTMLElement)||// validation required for the animation to work as expected
i.length===0||n.length===0||i.length!==n.length){return}const g=p.isSameMonth(i[0].date,n[0].date);const b=p.isAfter(i[0].date,n[0].date);const _=b?r[a/* .Animation.caption_after_enter */.X5.caption_after_enter]:r[a/* .Animation.caption_before_enter */.X5.caption_before_enter];const y=b?r[a/* .Animation.weeks_after_enter */.X5.weeks_after_enter]:r[a/* .Animation.weeks_before_enter */.X5.weeks_before_enter];// get previous root element snapshot before updating the snapshot ref
const w=f.current;// update snapshot for next effect trigger
const x=e.current.cloneNode(true);if(x instanceof HTMLElement){// if this effect is triggered while animating, we need to clean up the new root snapshot
// to put it in the same state as when not animating, to correctly animate the next month change
const e=o(x);e.forEach(e=>{if(!(e instanceof HTMLElement))return;// remove the old month snapshots from the new root snapshot
const t=s(e);if(t&&e.contains(t)){e.removeChild(t)}// remove animation classes from the new month snapshots
const r=d(e);if(r){r.classList.remove(_)}const n=l(e);if(n){n.classList.remove(y)}});f.current=x}else{f.current=null}if(m.current||g||// skip animation if a day is focused because it can cause issues to the animation and is better for a11y
v){return}const A=w instanceof HTMLElement?o(w):[];const Y=o(e.current);if(Y?.every(e=>e instanceof HTMLElement)&&A&&A.every(e=>e instanceof HTMLElement)){m.current=true;const t=[];// set isolation to isolate to isolate the stacking context during animation
e.current.style.isolation="isolate";// set z-index to 1 to ensure the nav is clickable over the other elements being animated
const n=c(e.current);if(n){n.style.zIndex="1"}Y.forEach((i,o)=>{const s=A[o];if(!s){return}// animate new displayed month
i.style.position="relative";i.style.overflow="hidden";const c=d(i);if(c){c.classList.add(_)}const v=l(i);if(v){v.classList.add(y)}// animate new displayed month end
const p=()=>{m.current=false;if(e.current){e.current.style.isolation=""}if(n){n.style.zIndex=""}if(c){c.classList.remove(_)}if(v){v.classList.remove(y)}i.style.position="";i.style.overflow="";if(i.contains(s)){i.removeChild(s)}};t.push(p);// animate old displayed month
s.style.pointerEvents="none";s.style.position="absolute";s.style.overflow="hidden";s.setAttribute("aria-hidden","true");// hide the weekdays container of the old month and only the new one
const f=u(s);if(f){f.style.opacity="0"}const h=d(s);if(h){h.classList.add(b?r[a/* .Animation.caption_before_exit */.X5.caption_before_exit]:r[a/* .Animation.caption_after_exit */.X5.caption_after_exit]);h.addEventListener("animationend",p)}const g=l(s);if(g){g.classList.add(b?r[a/* .Animation.weeks_before_exit */.X5.weeks_before_exit]:r[a/* .Animation.weeks_after_exit */.X5.weeks_after_exit])}i.insertBefore(s,i.firstChild)})}})}},57391:function(e,t,r){r.d(t,{_:()=>f});/* import */var n=r(41594);/* import */var a=r(4047);/* import */var i=r(73495);/* import */var o=r(26511);/* import */var s=r(1102);/* import */var d=r(59807);/* import */var l=r(61921);/* import */var c=r(66847);/* import */var u=r(70267);/* import */var v=r(32923);/* import */var p=r(15148);/**
 * Provides the calendar object to work with the calendar in custom components.
 *
 * @private
 * @param props - The DayPicker props related to calendar configuration.
 * @param dateLib - The date utility library instance.
 * @returns The calendar object containing displayed days, weeks, months, and
 *   navigation methods.
 */function f(e,t){const[r,f]=(0,l/* .getNavMonths */.J)(e,t);const{startOfMonth:h,endOfMonth:m}=t;const g=(0,s/* .getInitialMonth */.Z)(e,r,f,t);const[b,_]=(0,p/* .useControlledValue */.j)(g,// initialMonth is always computed from props.month if provided
e.month?g:undefined);// biome-ignore lint/correctness/useExhaustiveDependencies: change the initial month when the time zone changes.
(0,n.useEffect)(()=>{const n=(0,s/* .getInitialMonth */.Z)(e,r,f,t);_(n)},[e.timeZone]);/** The months displayed in the calendar. */// biome-ignore lint/correctness/useExhaustiveDependencies: We want to recompute only when specific props change.
const{months:y,weeks:w,days:x,previousMonth:A,nextMonth:Y}=(0,n.useMemo)(()=>{const n=(0,o/* .getDisplayMonths */.o)(b,f,{numberOfMonths:e.numberOfMonths},t);const s=(0,a/* .getDates */.Y)(n,e.endMonth?m(e.endMonth):undefined,{ISOWeek:e.ISOWeek,fixedWeeks:e.fixedWeeks,broadcastCalendar:e.broadcastCalendar},t);const l=(0,d/* .getMonths */.S)(n,s,{broadcastCalendar:e.broadcastCalendar,fixedWeeks:e.fixedWeeks,ISOWeek:e.ISOWeek,reverseMonths:e.reverseMonths},t);const p=(0,v/* .getWeeks */.C)(l);const h=(0,i/* .getDays */._)(l);const g=(0,u/* .getPreviousMonth */.E)(b,r,e,t);const _=(0,c/* .getNextMonth */.Q)(b,f,e,t);return{months:l,weeks:p,days:h,previousMonth:g,nextMonth:_}},[t,b.getTime(),f?.getTime(),r?.getTime(),e.disableNavigation,e.broadcastCalendar,e.endMonth?.getTime(),e.fixedWeeks,e.ISOWeek,e.numberOfMonths,e.pagedNavigation,e.reverseMonths]);const{disableNavigation:k,onMonthChange:I}=e;const D=e=>w.some(t=>t.days.some(t=>t.isEqualTo(e)));const C=e=>{if(k){return}let t=h(e);// if month is before start, use the first month instead
if(r&&t<h(r)){t=h(r)}// if month is after endMonth, use the last month instead
if(f&&t>h(f)){t=h(f)}_(t);I?.(t)};const M=e=>{// is this check necessary?
if(D(e)){return}C(e.date)};const E={months:y,weeks:w,days:x,navStart:r,navEnd:f,previousMonth:A,nextMonth:Y,goToMonth:C,goToDay:M};return E}},79209:function(e,t,r){r.d(t,{S:()=>a,w:()=>i});/* import */var n=r(41594);/** @ignore */const a=(0,n.createContext)(undefined);/**
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
 */function i(){const e=(0,n.useContext)(a);if(e===undefined){throw new Error("useDayPicker() must be used within a custom component.")}return e}},83237:function(e,t,r){r.d(t,{i:()=>o});/* import */var n=r(41594);/* import */var a=r(83803);/* import */var i=r(44917);/**
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
 */function o(e,t,r,o,s){const{autoFocus:d}=e;const[l,c]=(0,n.useState)();const u=(0,a/* .calculateFocusTarget */.A)(t.days,r,o||(()=>false),l);const[v,p]=(0,n.useState)(d?u:undefined);const f=()=>{c(v);p(undefined)};const h=(r,n)=>{if(!v)return;const a=(0,i/* .getNextFocus */.O)(r,n,v,t.navStart,t.navEnd,e,s);if(!a)return;if(e.disableNavigation){const e=t.days.some(e=>e.isEqualTo(a));if(!e){return}}t.goToDay(a);p(a)};const m=e=>{return Boolean(u?.isEqualTo(e))};const g={isFocusTarget:m,setFocused:p,focused:v,blur:f,moveFocus:h};return g}},35055:function(e,t,r){r.d(t,{C:()=>o});/* import */var n=r(79479);/* import */var a=r(95379);/* import */var i=r(12764);/**
 * Determines the appropriate selection hook to use based on the selection mode
 * and returns the corresponding selection object.
 *
 * @template T - The type of DayPicker props.
 * @param props - The DayPicker props.
 * @param dateLib - The date utility library instance.
 * @returns The selection object for the specified mode, or `undefined` if no
 *   mode is set.
 */function o(e,t){const r=(0,i/* .useSingle */.G)(e,t);const o=(0,n/* .useMulti */.N)(e,t);const s=(0,a/* .useRange */.f)(e,t);switch(e.mode){case"single":return r;case"multiple":return o;case"range":return s;default:return undefined}}},75749:function(e,t,r){r.d(t,{M:()=>a});/* import */var n=r(30922);/**
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
 */function a(e,t,r=0,i=0,o=false,s=n/* .defaultDateLib */.VA){const{from:d,to:l}=t||{};const{isSameDay:c,isAfter:u,isBefore:v}=s;let p;if(!d&&!l){// the range is empty, add the date
p={from:e,to:r>0?undefined:e}}else if(d&&!l){// adding date to an incomplete range
if(c(d,e)){// adding a date equal to the start of the range
if(r===0){p={from:d,to:e}}else if(o){p={from:d,to:undefined}}else{p=undefined}}else if(v(e,d)){// adding a date before the start of the range
p={from:e,to:d}}else{// adding a date after the start of the range
p={from:d,to:e}}}else if(d&&l){// adding date to a complete range
if(c(d,e)&&c(l,e)){// adding a date that is equal to both start and end of the range
if(o){p={from:d,to:l}}else{p=undefined}}else if(c(d,e)){// adding a date equal to the the start of the range
p={from:d,to:r>0?undefined:e}}else if(c(l,e)){// adding a dare equal to the end of the range
p={from:e,to:r>0?undefined:e}}else if(v(e,d)){// adding a date before the start of the range
p={from:e,to:l}}else if(u(e,d)){// adding a date after the start of the range
p={from:d,to:e}}else if(u(e,l)){// adding a date after the end of the range
p={from:d,to:e}}else{throw new Error("Invalid range")}}// check for min / max
if(p?.from&&p?.to){const t=s.differenceInCalendarDays(p.to,p.from);if(i>0&&t>i){p={from:e,to:undefined}}else if(r>1&&t<r){p={from:e,to:undefined}}}return p}},13854:function(e,t,r){r.d(t,{t:()=>o});/* import */var n=r(14916);/* import */var a=r(45636);function i(e,t){if(typeof e==="boolean"||typeof e==="function"){return e}if(e instanceof Date){return(0,n/* .toTimeZone */.v)(e,t)}if(Array.isArray(e)){return e.map(e=>e instanceof Date?(0,n/* .toTimeZone */.v)(e,t):e)}if((0,a/* .isDateRange */.oM)(e)){return{...e,from:e.from?(0,n/* .toTimeZone */.v)(e.from,t):e.from,to:e.to?(0,n/* .toTimeZone */.v)(e.to,t):e.to}}if((0,a/* .isDateInterval */.m4)(e)){return{before:(0,n/* .toTimeZone */.v)(e.before,t),after:(0,n/* .toTimeZone */.v)(e.after,t)}}if((0,a/* .isDateAfterType */.RE)(e)){return{after:(0,n/* .toTimeZone */.v)(e.after,t)}}if((0,a/* .isDateBeforeType */.Ue)(e)){return{before:(0,n/* .toTimeZone */.v)(e.before,t)}}return e}/**
 * Convert any {@link Matcher} or array of matchers to the specified time zone.
 *
 * @param matchers - The matcher or matchers to convert.
 * @param timeZone - The target IANA time zone.
 * @returns The converted matcher(s).
 * @group Utilities
 */function o(e,t){if(!e){return e}if(Array.isArray(e)){return e.map(e=>i(e,t))}return i(e,t)}},9723:function(e,t,r){r.d(t,{k:()=>o});/* import */var n=r(30922);/* import */var a=r(79796);/* import */var i=r(45636);/**
 * Checks if a given date matches at least one of the specified {@link Matcher}.
 *
 * @param date - The date to check.
 * @param matchers - The matchers to check against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date matches any of the matchers, otherwise `false`.
 * @group Utilities
 */function o(e,t,r=n/* .defaultDateLib */.VA){const s=!Array.isArray(t)?[t]:t;const{isSameDay:d,differenceInCalendarDays:l,isAfter:c}=r;return s.some(t=>{if(typeof t==="boolean"){return t}if(r.isDate(t)){return d(e,t)}if((0,i/* .isDatesArray */.Hg)(t,r)){return t.includes(e)}if((0,i/* .isDateRange */.oM)(t)){return(0,a/* .rangeIncludesDate */.R)(t,e,false,r)}if((0,i/* .isDayOfWeekType */.OE)(t)){if(!Array.isArray(t.dayOfWeek)){return t.dayOfWeek===e.getDay()}return t.dayOfWeek.includes(e.getDay())}if((0,i/* .isDateInterval */.m4)(t)){const r=l(t.before,e);const n=l(t.after,e);const a=r>0;const i=n<0;const o=c(t.before,t.after);if(o){return i&&a}else{return a||i}}if((0,i/* .isDateAfterType */.RE)(t)){return l(e,t.after)>0}if((0,i/* .isDateBeforeType */.Ue)(t)){return l(t.before,e)>0}if(typeof t==="function"){return t(e)}return false})}/**
 * @private
 * @deprecated Use {@link dateMatchModifiers} instead.
 */const s=/* unused pure expression or super */null&&o},46413:function(e,t,r){r.d(t,{g:()=>a});/* import */var n=r(30922);/**
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
 */function a(e,t,r=n/* .defaultDateLib */.VA){const i=!Array.isArray(t)?[t]:t;let o=e.from;const s=r.differenceInCalendarDays(e.to,e.from);// iterate at maximum one week or the total days if the range is shorter than one week
const d=Math.min(s,6);for(let e=0;e<=d;e++){if(i.includes(o.getDay())){return true}o=r.addDays(o,1)}return false}},85052:function(e,t,r){r.d(t,{P:()=>l});/* import */var n=r(30922);/* import */var a=r(9723);/* import */var i=r(46413);/* import */var o=r(79796);/* import */var s=r(39965);/* import */var d=r(45636);/**
 * Checks if a date range contains dates that match the given modifiers.
 *
 * @since 9.2.2
 * @param range - The date range to check.
 * @param modifiers - The modifiers to match against.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the range contains matching dates, otherwise `false`.
 * @group Utilities
 */function l(e,t,r=n/* .defaultDateLib */.VA){const c=Array.isArray(t)?t:[t];// Defer function matchers evaluation as they are the least performant.
const u=c.filter(e=>typeof e!=="function");const v=u.some(t=>{if(typeof t==="boolean")return t;if(r.isDate(t)){return(0,o/* .rangeIncludesDate */.R)(e,t,false,r)}if((0,d/* .isDatesArray */.Hg)(t,r)){return t.some(t=>(0,o/* .rangeIncludesDate */.R)(e,t,false,r))}if((0,d/* .isDateRange */.oM)(t)){if(t.from&&t.to){return(0,s/* .rangeOverlaps */.G)(e,{from:t.from,to:t.to},r)}return false}if((0,d/* .isDayOfWeekType */.OE)(t)){return(0,i/* .rangeContainsDayOfWeek */.g)(e,t.dayOfWeek,r)}if((0,d/* .isDateInterval */.m4)(t)){const n=r.isAfter(t.before,t.after);if(n){return(0,s/* .rangeOverlaps */.G)(e,{from:r.addDays(t.after,1),to:r.addDays(t.before,-1)},r)}return(0,a/* .dateMatchModifiers */.k)(e.from,t,r)||(0,a/* .dateMatchModifiers */.k)(e.to,t,r)}if((0,d/* .isDateAfterType */.RE)(t)||(0,d/* .isDateBeforeType */.Ue)(t)){return(0,a/* .dateMatchModifiers */.k)(e.from,t,r)||(0,a/* .dateMatchModifiers */.k)(e.to,t,r)}return false});if(v){return true}const p=c.filter(e=>typeof e==="function");if(p.length){let t=e.from;const n=r.differenceInCalendarDays(e.to,e.from);for(let e=0;e<=n;e++){if(p.some(e=>e(t))){return true}t=r.addDays(t,1)}}return false}},79796:function(e,t,r){r.d(t,{R:()=>a});/* import */var n=r(30922);/**
 * Checks if a given date is within a specified date range.
 *
 * @since 9.0.0
 * @param range - The date range to check against.
 * @param date - The date to check.
 * @param excludeEnds - If `true`, the range's start and end dates are excluded.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the date is within the range, otherwise `false`.
 * @group Utilities
 */function a(e,t,r=false,i=n/* .defaultDateLib */.VA){let{from:o,to:s}=e;const{differenceInCalendarDays:d,isSameDay:l}=i;if(o&&s){const e=d(s,o)<0;if(e){[o,s]=[s,o]}const n=d(t,o)>=(r?1:0)&&d(s,t)>=(r?1:0);return n}if(!r&&s){return l(s,t)}if(!r&&o){return l(o,t)}return false}/**
 * @private
 * @deprecated Use {@link rangeIncludesDate} instead.
 */const i=(e,t)=>a(e,t,false,defaultDateLib)},39965:function(e,t,r){r.d(t,{G:()=>i});/* import */var n=r(30922);/* import */var a=r(79796);/**
 * Determines if two date ranges overlap.
 *
 * @since 9.2.2
 * @param rangeLeft - The first date range.
 * @param rangeRight - The second date range.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the ranges overlap, otherwise `false`.
 * @group Utilities
 */function i(e,t,r=n/* .defaultDateLib */.VA){return(0,a/* .rangeIncludesDate */.R)(e,t.from,false,r)||(0,a/* .rangeIncludesDate */.R)(e,t.to,false,r)||(0,a/* .rangeIncludesDate */.R)(t,e.from,false,r)||(0,a/* .rangeIncludesDate */.R)(t,e.to,false,r)}},14916:function(e,t,r){r.d(t,{v:()=>a});/* import */var n=r(2832);/**
 * Convert a {@link Date} or {@link TZDate} instance to the given time zone.
 * Reuses the same instance when it is already a {@link TZDate} using the target
 * time zone to avoid extra allocations.
 */function a(e,t){if(e instanceof n/* .TZDate */.BB&&e.timeZone===t){return e}return new n/* .TZDate */.BB(e,t)}},45636:function(e,t,r){r.d(t,{Hg:()=>d,OE:()=>s,RE:()=>i,Ue:()=>o,m4:()=>n,oM:()=>a});/**
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
 */function i(e){return Boolean(e&&typeof e==="object"&&"after"in e)}/**
 * Checks if the given value is of type {@link DateBefore}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DateBefore}, otherwise `false`.
 * @group Utilities
 */function o(e){return Boolean(e&&typeof e==="object"&&"before"in e)}/**
 * Checks if the given value is of type {@link DayOfWeek}.
 *
 * @param value - The value to check.
 * @returns `true` if the value is a {@link DayOfWeek}, otherwise `false`.
 * @group Utilities
 */function s(e){return Boolean(e&&typeof e==="object"&&"dayOfWeek"in e)}/**
 * Checks if the given value is an array of valid dates.
 *
 * @private
 * @param value - The value to check.
 * @param dateLib - The date utility library instance.
 * @returns `true` if the value is an array of valid dates, otherwise `false`.
 */function d(e,t){return Array.isArray(e)&&e.every(t.isDate)}}}]);