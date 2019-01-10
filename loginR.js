//Create the log in screen for the website 
'use strict';

var _this2 = this;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var loginContainer = function (_React$Component) {
    _inherits(loginContainer, _React$Component);

    function loginContainer(props) {
        _classCallCheck(this, loginContainer);

        var _this = _possibleConstructorReturn(this, (loginContainer.__proto__ || Object.getPrototypeOf(loginContainer)).call(this, props));

        _this.state = {
            username: String,
            password: String
        };
        return _this;
    }

    _createClass(loginContainer, [{
        key: "render",
        value: function render() {
            return e(React.createElement(
                "div",
                { align: "center" },
                React.createElement("img", { id: "LoginTitle",
                    src: "./Graphical_Assets/Logo/Uassist Black.png" })
            ));
        }
    }]);

    return loginContainer;
}(React.Component);

;

var Buttons = function Buttons(props) {
    return React.createElement("button", { key: _this2.props.key, type: "submit",
        placeholder: _this2.props.placeholder, "class": "btn-block"
    });
};