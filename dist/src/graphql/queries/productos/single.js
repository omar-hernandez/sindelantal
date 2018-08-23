'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _productos = require('../../../models/productos');

var _productos2 = _interopRequireDefault(_productos);

var _productos3 = require('../../types/productos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleProducto = {
    type: _productos3.ProductoType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var producto = _productos2.default.findById(params.id).exec();
        return producto;
    }
};

exports.default = querySingleProducto;