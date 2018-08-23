'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TiendasInputType = exports.TiendasType = exports.CalificacionType = undefined;

var _graphql = require('graphql');

var _tipoRest = require('./tipoRest');

var _tipoRest2 = require('../../models/tipoRest');

var _tipoRest3 = _interopRequireDefault(_tipoRest2);

var _productos = require('./productos');

var _productos2 = require('../../models/productos');

var _productos3 = _interopRequireDefault(_productos2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CalificacionType = exports.CalificacionType = new _graphql.GraphQLObjectType({
    name: "Calificaciones",
    description: "Calificaciones de las tiendas",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            comentario: {
                type: _graphql.GraphQLString
            },
            estrellas: {
                type: _graphql.GraphQLInt
            }
        };
    }
});

var TiendasType = exports.TiendasType = new _graphql.GraphQLObjectType({
    name: 'Tiendas',
    description: 'Tiendas de la base de datos',
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            nombre: {
                type: _graphql.GraphQLString
            },
            direccion: {
                type: _graphql.GraphQLString
            },
            correo: {
                type: _graphql.GraphQLString
            },
            tipo: {
                type: _tipoRest.TipoRestType,
                resolve: function resolve(tienda) {
                    var xxx1 = tienda.xxx1;

                    return _tipoRest3.default.findById(xxx1).exec();
                }
            },
            telefono: {
                type: _graphql.GraphQLInt
            },
            calificacion: {
                type: new _graphql.GraphQLList(CalificacionType)
            },
            productos: {
                type: new _graphql.GraphQLList(_productos.ProductoType),
                resolve: function resolve(producto) {
                    var productos = producto.productos;

                    return _productos3.default.find({ _id: { $in: productos } }).exec();
                }
            },
            horario: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            foto_tiendas: {
                type: _graphql.GraphQLString
            },
            nivel_precio: {
                type: _graphql.GraphQLInt
            }
        };
    }
});

var TiendasInputType = exports.TiendasInputType = new _graphql.GraphQLInputObjectType({
    name: "addTiendas",
    description: "Mutation para agregar tiendas",
    fields: function fields() {
        return {
            nombre: {
                type: _graphql.GraphQLString
            },
            direccion: {
                type: _graphql.GraphQLString
            },
            correo: {
                type: _graphql.GraphQLString
            },
            tipo: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            telefono: {
                type: _graphql.GraphQLInt
            },
            productos: {
                type: new _graphql.GraphQLList(_graphql.GraphQLID)
            },
            horario: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            foto_tiendas: {
                type: _graphql.GraphQLString
            },
            nivel_precio: {
                type: _graphql.GraphQLInt
            }
        };
    }
});