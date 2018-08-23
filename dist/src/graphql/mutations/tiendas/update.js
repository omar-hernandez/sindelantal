'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _tiendas = require('../../../models/tiendas');

var _tiendas2 = _interopRequireDefault(_tiendas);

var _tiendas3 = require('../../types/tiendas');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _tiendas3.TiendasType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_tiendas3.TiendasInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _tiendas2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (tienda) {
            return tienda;
        }).catch(function (erre) {
            return Error('Error al hacer el update');
        });
    }
};