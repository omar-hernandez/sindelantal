'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _pedidos = require('../../../models/pedidos');

var _pedidos2 = _interopRequireDefault(_pedidos);

var _pedidos3 = require('../../types/pedidos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _pedidos3.PedidosType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletePedido = _pedidos2.default.findByIdAndRemove(params.id).exec();
        if (!deletePedido) throw Error('Error al borrar el pedido');
        return deletePedido;
    }
};