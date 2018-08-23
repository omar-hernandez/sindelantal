'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _graphql = require('graphql');

var _cupones = require('../../../models/cupones');

var _cupones2 = _interopRequireDefault(_cupones);

var _cupones3 = require('../../types/cupones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _cupones3.CuponesType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_cupones3.CuponesInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _cupones2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }, { new: true }).then(function (cupon) {
            return cupon;
        }).catch(function (erre) {
            return Error('Error al hacer el update');
        });
    }
};