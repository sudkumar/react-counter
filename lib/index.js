"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Counter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require("./polyfills");

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _utils = require("./utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var raf = window.requestAnimationFrame;

var Counter = exports.Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter() {
    var _ref;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      count: 0
    };
    var easeFn = _this.props.easeFn;

    switch (easeFn) {
      case "linear":
        _this.easeFn = _utils.linear;
        break;
      case "ease-in":
        _this.easeFn = _utils.easeIn;
        break;
      case "ease-out":
        _this.easeFn = _utils.easeOut;
        break;
      case "ease-in-out":
        _this.easeFn = _utils.easeInOut;
        break;
      default:
        console.warn("Unhandled tyep of ease function: ", easeFn, ". Using linear");
        _this.easeFn = _utils.linear;
        break;
    }
    return _this;
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.incrementCounter();
    }
  }, {
    key: "incrementCounter",
    value: function incrementCounter() {
      var _this2 = this;

      var counter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var _props = this.props,
          value = _props.value,
          duration = _props.duration;

      if (this.state.count < value) {
        this.setState(function (_ref2) {
          var number = _ref2.count;
          return {
            count: _this2.easeFn(counter, 0, value, duration)
          };
        }, function () {
          var timeBeforeRag = (0, _utils.getCurrentTime)();
          raf(function () {
            var timeAtInc = (0, _utils.getCurrentTime)();
            _this2.incrementCounter(counter + timeAtInc - timeBeforeRag);
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var render = this.props.render;
      var count = this.state.count;

      return render(count);
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  value: 0,
  easeFn: "ease-out",
  duration: 1500,
  render: function render(value) {
    return React.createElement(
      "span",
      null,
      value
    );
  }
};
exports.default = Counter;