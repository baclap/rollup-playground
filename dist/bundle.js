'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = { "wrap": "_wrap_13bcb_1", "blue": "_blue_13bcb_4" };

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

console.log(styles);

var Component = React.Component;
var PropTypes = React.PropTypes;

var Button = function (_Component) {
    inherits(Button, _Component);

    function Button() {
        classCallCheck(this, Button);
        return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    createClass(Button, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: styles.wrap },
                React.createElement(
                    'button',
                    { onClick: this.props.onClick, className: styles.blue },
                    this.props.children
                )
            );
        }
    }]);
    return Button;
}(Component);

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

var styles$1 = { "red": "_red_suhqf_1" };

var Component$1 = React.Component;
var PropTypes$1 = React.PropTypes;

var Button2 = function (_Component) {
    inherits(Button2, _Component);

    function Button2() {
        classCallCheck(this, Button2);
        return possibleConstructorReturn(this, (Button2.__proto__ || Object.getPrototypeOf(Button2)).apply(this, arguments));
    }

    createClass(Button2, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.props.onClick, className: styles$1.red },
                this.props.children
            );
        }
    }]);
    return Button2;
}(Component$1);

Button2.propTypes = {
    onClick: PropTypes$1.func,
    children: PropTypes$1.node.isRequired
};

exports.Button = Button;
exports.Button2 = Button2;
