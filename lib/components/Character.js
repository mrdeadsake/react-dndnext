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

var _reactDataActions = require('react-data-actions');

var _characterDetailsActions = require('../actions/characterDetailsActions');

var _characterActions = require('../actions/characterActions');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Character = function (_React$Component) {
  (0, _inherits3.default)(Character, _React$Component);

  function Character() {
    var _ref;

    (0, _classCallCheck3.default)(this, Character);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Character.__proto__ || (0, _getPrototypeOf2.default)(Character)).call.apply(_ref, [this].concat(args)));

    _this.state = {};
    _this.calculate = _this.calculate.bind(_this);
    _this.filterByCurrentChapter = _this.filterByCurrentChapter.bind(_this);
    _this.filterByCharacter = _this.filterByCharacter.bind(_this);
    _this.renderDetails = _this.renderDetails.bind(_this);
    _this.updateStuff = _this.updateStuff.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Character, [{
    key: 'calculate',
    value: function calculate() {
      var details = this.props.details;
      var allowed = details.filter(this.filterByCurrentChapter);
      var next = allowed.filter(this.filterByCharacter);
      this.setState({ d: next });
      this.renderDetails(next);
      // next is a list of all details that are for the current character
      // allowed is a list of all the chapters that are up to the current

      // return all details where the chapter_id is found in allowed
    }
  }, {
    key: 'renderDetails',
    value: function renderDetails(next) {
      return next.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { className: "row", key: i },
          _react2.default.createElement(
            'div',
            { className: "row__cell--fixed chapter_id " + (i !== next.length - 1 ? "bottom " : "") },
            item.number
          ),
          _react2.default.createElement(
            'div',
            { className: "row__cell details " + (i !== next.length - 1 ? "bottom " : "") },
            item.details
          )
        );
      });
    }
  }, {
    key: 'renderButton',
    value: function renderButton() {
      // return (
      //   <button onClick={this.updateStuff}>Update info</button>
      // )
    }
  }, {
    key: 'filterByCurrentChapter',
    value: function filterByCurrentChapter(chapter) {
      if (chapter.number <= this.props.chapter.number) return true;
    }
  }, {
    key: 'filterByCharacter',
    value: function filterByCharacter(detail) {
      if (detail.character_id == this.props.character.id) return true;
    }
  }, {
    key: 'updateStuff',
    value: function updateStuff() {
      var details = { character_id: 2, chapter_id: 8, details: 'Kaladin does stuff', location: 'some place' };
      this.props.update(details);
      //this.props.show);
    }
  }, {
    key: 'renderCharacter',
    value: function renderCharacter() {
      if (this.props.character != undefined) {
        var details = this.props.details;
        var allowed = details.filter(this.filterByCurrentChapter);
        var next = allowed.filter(this.filterByCharacter);
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: "table-outline" },
            this.renderDetails(next)
          ),
          this.renderButton()
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'row__cell' },
        'details'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderCharacter()
      );
    }
  }], [{
    key: 'connectedActions',
    value: function connectedActions(props) {
      return {
        //update: characterActions.createAction(),
        //show: characterActions.indexAction()
      };
    }
  }]);
  return Character;
}(_react2.default.Component);

Character.propTypes = {
  character: _react2.default.PropTypes.object.isRequired,
  details: _react2.default.PropTypes.array,
  chapter: _react2.default.PropTypes.object
};
exports.default = (0, _reactDataActions.connect)(Character);