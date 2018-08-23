'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _productos = require('../../../models/productos');

var _productos2 = _interopRequireDefault(_productos);

var _productos3 = require('../../types/productos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _productos3.ProductoType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_productos3.ProductoInputType)
        }
    },
    resolve: function resolve(root, params) {
        var producto = new _productos2.default(params.data);
        var newProducto = producto.save();
        if (!newProducto) throw Error("Error al crear el producto");
        return newProducto;
    }
};