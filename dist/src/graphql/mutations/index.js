"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _cupones = require("./cupones");

var _cupones2 = _interopRequireDefault(_cupones);

var _tipoRest = require("./tipoRest");

var _tipoRest2 = _interopRequireDefault(_tipoRest);

var _tiendas = require("./tiendas");

var _tiendas2 = _interopRequireDefault(_tiendas);

var _productos = require("./productos");

var _productos2 = _interopRequireDefault(_productos);

var _pedidos = require("./pedidos");

var _pedidos2 = _interopRequireDefault(_pedidos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _cupones2.default, _tipoRest2.default, _tiendas2.default, _productos2.default, _pedidos2.default);