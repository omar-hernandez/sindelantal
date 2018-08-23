'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tiendas = require('../../../models/tiendas');

var _tiendas2 = _interopRequireDefault(_tiendas);

var _tiendas3 = require('../../types/tiendas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllTiendas = {
    type: new _graphql.GraphQLList(_tiendas3.TiendasType),
    resolve: function resolve() {
        var tienda = _tiendas2.default.find().exec();
        return tienda;
    }
};

exports.default = queryAllTiendas;