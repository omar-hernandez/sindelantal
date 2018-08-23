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
        data: {
            type: new _graphql.GraphQLNonNull(_tipoRest3.TipoRestInputType)
        }
    },
    resolve: function resolve(root, params) {
        var tipoRest = new _tipoRest2.default(params.data);
        var newtipoRest = tipoRest.save();
        if (!newtipoRest) throw Error("Error al crear el tipo de restaurante");
        return newtipoRest;
    }
};