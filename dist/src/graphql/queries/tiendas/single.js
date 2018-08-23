'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tiendas = require('../../../models/tiendas');

var _tiendas2 = _interopRequireDefault(_tiendas);

var _tiendas3 = require('../../types/tiendas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleTienda = {
    type: _tiendas3.TiendasType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var tienda = _tiendas2.default.findById(params.id).exec();
        return tienda;
    }
};

exports.default = querySingleTienda;