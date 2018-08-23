'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _cupones = require('../../../models/cupones');

var _cupones2 = _interopRequireDefault(_cupones);

var _cupones3 = require('../../types/cupones');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllCupones = {
    type: new _graphql.GraphQLList(_cupones3.CuponesType),
    resolve: function resolve() {
        var cupon = _cupones2.default.find().exec();
        return cupon;
    }
};

exports.default = queryAllCupones;