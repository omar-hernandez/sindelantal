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
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteProducto = _productos2.default.findByIdAndRemove(params.id).exec();
        if (!deleteProducto) throw Error('Error al borrar el producto');
        return deleteProducto;
    }
};