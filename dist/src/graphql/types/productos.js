'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ProductoInputType = exports.ProductoType = undefined;

var _graphql = require('graphql');

var _tiendas = require('./tiendas');

var _tiendas2 = require('../../models/tiendas');

var _tiendas3 = _interopRequireDefault(_tiendas2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductoType = exports.ProductoType = new _graphql.GraphQLObjectType({
    name: 'Producto',
    description: 'Productos de la base de datos',
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            nombre: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            precio: {
                type: _graphql.GraphQLInt
            },
            tienda: {
                type: new _graphql.GraphQLList(_tiendas.TiendasType),
                resolve: function resolve(pedido) {
                    var tiendas = pedido.tiendas;

                    return _tiendas3.default.find({ _id: { $in: tiendas } }).exec();
                }
            },
            fotos_producto: {
                type: _graphql.GraphQLString
            },
            tipo_producto: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var ProductoInputType = exports.ProductoInputType = new _graphql.GraphQLInputObjectType({
    name: "addProducto",
    description: "Mutation para agregar productos",
    fields: function fields() {
        return {
            nombre: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            precio: {
                type: _graphql.GraphQLInt
            },
            tienda: {
                type: new _graphql.GraphQLList(_graphql.GraphQLID)
            },
            fotos_producto: {
                type: _graphql.GraphQLString
            },
            tipo_producto: {
                type: _graphql.GraphQLString
            }
        };
    }
});