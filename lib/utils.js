"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var linear = exports.linear = function linear(currentTime, startValue, changeInValue, duration) {
  return changeInValue * currentTime / duration + startValue;
}; // http://gizma.com/easing/

var easeIn = exports.easeIn = function easeIn(currentTime, startValue, changeInValue, duration) {
  currentTime /= duration;
  return changeInValue * currentTime * currentTime * currentTime + startValue;
};

var easeOut = exports.easeOut = function easeOut(currentTime, startValue, changeInValue, duration) {
  currentTime /= duration;
  currentTime--;
  return changeInValue * (currentTime * currentTime * currentTime + 1) + startValue;
};

var easeInOut = exports.easeInOut = function easeInOut(currentTime, startValue, changeInValue, duration) {
  currentTime /= duration / 2;
  if (currentTime < 1) return changeInValue / 2 * currentTime * currentTime * currentTime + startValue;
  currentTime -= 2;
  return changeInValue / 2 * (currentTime * currentTime * currentTime + 2) + startValue;
};

var getCurrentTime = exports.getCurrentTime = function getCurrentTime() {
  return new Date().valueOf();
};