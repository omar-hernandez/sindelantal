'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tiendas = require('../../../models/tiendas');

var _tiendas2 = _interopRequireDefault(_tiendas);

var _tiendas3 = require('../../types/tiendas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _tiendas3.TiendasType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_tiendas3.TiendasInputType)
        }
    },
    resolve: function resolve(root, params) {
        var tienda = new _tiendas2.default(params.data);
        var newTienda = tienda.save();
        if (!newTienda) throw Error("Error al crear la tienda");
        return newTienda;
    }
};