'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CuponesInputType = exports.CuponesType = undefined;

var _graphql = require('graphql');

var CuponesType = exports.CuponesType = new _graphql.GraphQLObjectType({
    name: 'Cupones',
    description: 'Los cupones a registrar',
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            cupon: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            descuento: {
                type: _graphql.GraphQLInt
            }
        };
    }
});

var CuponesInputType = exports.CuponesInputType = new _graphql.GraphQLInputObjectType({
    name: "addCupones",
    description: "Mutation para agregar cupones",
    fields: function fields() {
        return {
            cupon: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            },
            descuento: {
                type: _graphql.GraphQLInt
            }
        };
    }
});