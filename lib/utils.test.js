"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = require("./utils");

test("is a function", function () {
  expect(typeof _utils.getCurrentTime === "undefined" ? "undefined" : _typeof(_utils.getCurrentTime)).toBe("function");
});