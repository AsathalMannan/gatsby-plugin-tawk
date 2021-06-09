"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

exports.onRenderBody = function (_ref, _ref2) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  var tawkId = _ref2.tawkId,
      tawkKey = _ref2.tawkKey;
  var source = "https://embed.tawk.to/".concat(tawkId, "/").concat(tawkKey);
  return setPostBodyComponents([/*#__PURE__*/_react["default"].createElement("script", {
    key: "gatsby-plugin-tawk.to",
    src: source
  })]);
};