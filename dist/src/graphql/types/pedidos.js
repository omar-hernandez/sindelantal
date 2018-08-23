'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PedidosInputType = exports.PedidosType = undefined;

var _graphql = require('graphql');

var _productos = require('./productos');

var _productos2 = require('../../models/productos');

var _productos3 = _interopRequireDefault(_productos2);

var _cupones = require('./cupones');

var _cupones2 = require('../../models/cupones');

var _cupones3 = _interopRequireDefault(_cupones2);

var _users = require('./users');

var _users2 = require('../../models/users');

var _users3 = _interopRequireDefault(_users2);

var _tiendas = require('./tiendas');

var _tiendas2 = require('../../models/tiendas');

var _tiendas3 = _interopRequireDefault(_tiendas2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PedidosType = exports.PedidosType = new _graphql.GraphQLObjectType({
    name: 'Pedidos',
    description: 'pedidos de los users',
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            productos: {
                type: new _graphql.GraphQLList(_productos.ProductoType),
                resolve: function resolve(tienda) {
                    var productos = tienda.productos;

                    return _productos3.default.find({ _id: { $in: productos } }).exec();
                }
            },
            monto: {
                type: _graphql.GraphQLInt
            },
            cupon: {
                type: _cupones.CuponesType,
                resolve: function resolve(producto) {
                    var cupon = producto.cupon;

                    return _cupones3.default.findById(cupon).exec();
                }
            },
            status_pago: {
                type: _graphql.GraphQLBoolean
            },
            status_pedido: {
                type: _graphql.GraphQLInt
            },
            direcciones: {
                type: _graphql.GraphQLString
            },
            usuario: {
                type: _users.UserType,
                resolve: function resolve(pedido) {
                    var user = pedido.user;

                    return Users.findById(user).exec();
                }
            },
            tienda: {
                type: _tiendas.TiendasType,
                resolve: function resolve(producto) {
                    var tienda = producto.tienda;

                    return _tiendas3.default.findById(tienda).exec();
                }
            }
        };
    }
});

var PedidosInputType = exports.PedidosInputType = new _graphql.GraphQLInputObjectType({
    name: "addPedidos",
    description: "Mutation para agregar pedidos",
    fields: function fields() {
        return {
            productoss: {
                type: new _graphql.GraphQLList(_graphql.GraphQLID)
            },
            monto: {
                type: _graphql.GraphQLInt
            },
            cupon: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            status_pago: {
                type: _graphql.GraphQLBoolean
            },
            status_pedido: {
                type: _graphql.GraphQLInt
            },
            direcciones: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            usuario: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            tienda: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            }
        };
    }
});