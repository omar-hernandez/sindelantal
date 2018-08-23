'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _cupones = require('../../../models/cupones');

var _cupones2 = _interopRequireDefault(_cupones);

var _cupones3 = require('../../types/cupones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _cupones3.CuponesType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_cupones3.CuponesInputType)
        }
    },
    resolve: function resolve(root, params) {
        var cupon = new _cupones2.default(params.data);
        var newCupon = cupon.save();
        if (!newCupon) throw Error("Error al crear el cupon");
        return newCupon;
    }
};