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
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteCupon = _cupones2.default.findByIdAndRemove(params.id).exec();
        if (!deleteCupon) throw Error('Error al borrar el cupon');
        return deleteCupon;
    }
};