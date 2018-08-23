'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _pedidos = require('../../../models/pedidos');

var _pedidos2 = _interopRequireDefault(_pedidos);

var _pedidos3 = require('../../types/pedidos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllPedidos = {
    type: new _graphql.GraphQLList(_pedidos3.PedidosType),
    resolve: function resolve() {
        var pedido = _pedidos2.default.find().exec();
        return pedido;
    }
};

exports.default = queryAllPedidos;