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
        data: {
            type: new _graphql.GraphQLNonNull(_pedidos3.PedidosInputType)
        }
    },
    resolve: function resolve(root, params) {
        var pedido = new _pedidos2.default(params.data);
        var newPedido = pedido.save();
        if (!newPedido) throw Error("Error al crear el pedido");
        return newPedido;
    }
};