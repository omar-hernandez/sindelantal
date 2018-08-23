'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _productos = require('../../../models/productos');

var _productos2 = _interopRequireDefault(_productos);

var _productos3 = require('../../types/productos');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _productos3.ProductoType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_productos3.ProductoInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _productos2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (producto) {
            return producto;
        }).catch(function (erre) {
            return Error('Error al hacer el update');
        });
    }
};