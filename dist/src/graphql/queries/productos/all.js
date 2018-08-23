'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _productos = require('../../../models/productos');

var _productos2 = _interopRequireDefault(_productos);

var _productos3 = require('../../types/productos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllProductos = {
    type: new _graphql.GraphQLList(_productos3.ProductoType),
    resolve: function resolve() {
        var producto1 = _productos2.default.find().exec();
        return producto1;
    }
};

exports.default = queryAllProductos;