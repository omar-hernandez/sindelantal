'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TipoRestInputType = exports.TipoRestType = undefined;

var _graphql = require('graphql');

var TipoRestType = exports.TipoRestType = new _graphql.GraphQLObjectType({
    name: 'TipoRest',
    description: 'Tipos de restaurantes',
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
            }
        };
    }
});

var TipoRestInputType = exports.TipoRestInputType = new _graphql.GraphQLInputObjectType({
    name: "addTipoRest",
    description: "Mutation para agregar tipos de restaurantes",
    fields: function fields() {
        return {
            nombre: {
                type: _graphql.GraphQLString
            },
            descripcion: {
                type: _graphql.GraphQLString
            }
        };
    }
});