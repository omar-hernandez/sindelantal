'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tipoRest = require('../../../models/tipoRest');

var _tipoRest2 = _interopRequireDefault(_tipoRest);

var _tipoRest3 = require('../../types/tipoRest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _tipoRest3.TipoRestType,
    args: {
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletetipoRest = _tipoRest2.default.findByIdAndRemove(params.id).exec();
        if (!deletetipoRest) throw Error('Error al borrar el tipo de restaurante');
        return deletetipoRest;
    }
};