'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _Ability = require('./Ability');

var _Ability2 = _interopRequireDefault(_Ability);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AbilityList = function (_React$Component) {
  (0, _inherits3.default)(AbilityList, _React$Component);

  function AbilityList(props) {
    (0, _classCallCheck3.default)(this, AbilityList);
    return (0, _possibleConstructorReturn3.default)(this, (AbilityList.__proto__ || (0, _getPrototypeOf2.default)(AbilityList)).call(this, props));
  }

  (0, _createClass3.default)(AbilityList, [{
    key: 'renderAbilities',
    value: function renderAbilities() {
      var _this2 = this;

      var abilities = this.props.character;
      return abilities.map(function (ability, i) {
        return _react2.default.createElement(_Ability2.default, {
          className: "characters",
          name: (0, _keys2.default)(ability)[0],
          value: (0, _values2.default)(ability)[0],
          key: i,
          bonus: _this2.calcBonus((0, _values2.default)(ability)[0])
        });
      });
    }
  }, {
    key: 'calcBonus',
    value: function calcBonus(stat) {
      return Math.floor((stat - 10) / 2);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'abilities column small-6' },
          this.renderAbilities()
        )
      );
    }
  }]);
  return AbilityList;
}(_react2.default.Component);

AbilityList.propTypes = {
  abilities: _react2.default.PropTypes.array
};
exports.default = AbilityList;