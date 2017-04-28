'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Skills = require('../helpers/Skills');

var _Skills2 = _interopRequireDefault(_Skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Stat = function (_React$Component) {
  (0, _inherits3.default)(Stat, _React$Component);

  function Stat(props) {
    (0, _classCallCheck3.default)(this, Stat);
    return (0, _possibleConstructorReturn3.default)(this, (Stat.__proto__ || (0, _getPrototypeOf2.default)(Stat)).call(this, props));
  }

  (0, _createClass3.default)(Stat, [{
    key: 'render',
    value: function render() {
      console.log(_Skills2.default.acrobatics);
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'column' },
          this.props.name
        ),
        _react2.default.createElement(
          'div',
          { className: 'column' },
          this.props.value
        )
      );
    }
  }]);
  return Stat;
}(_react2.default.Component);

Stat.propTypes = {
  name: _react2.default.PropTypes.string,
  bonus: _react2.default.PropTypes.number,
  governingAttribute: _react2.default.PropTypes.string,
  hasProficiency: _react2.default.PropTypes.bool,
  isDoubled: _react2.default.PropTypes.bool,
  override: _react2.default.PropTypes.object
};
exports.default = Stat;