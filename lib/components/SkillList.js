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

var _Skill = require('./Skill');

var _Skill2 = _interopRequireDefault(_Skill);

var _Skills = require('../helpers/Skills');

var _Skills2 = _interopRequireDefault(_Skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkillList = function (_React$Component) {
  (0, _inherits3.default)(SkillList, _React$Component);

  function SkillList(props) {
    (0, _classCallCheck3.default)(this, SkillList);
    return (0, _possibleConstructorReturn3.default)(this, (SkillList.__proto__ || (0, _getPrototypeOf2.default)(SkillList)).call(this, props));
  }

  (0, _createClass3.default)(SkillList, [{
    key: 'renderAbilities',
    value: function renderAbilities() {
      var abilities = this.props;
      return abilities.map(function (ability, i) {
        return _react2.default.createElement(_Skill2.default, { className: "characters", name: (0, _keys2.default)(ability), value: (0, _values2.default)(ability), key: i });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(_Skills2.default.acrobatics);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'abilities column small-6' },
          this.props.name
        )
      );
    }
  }]);
  return SkillList;
}(_react2.default.Component);

SkillList.propTypes = {
  character: _react2.default.PropTypes.object
};
exports.default = SkillList;