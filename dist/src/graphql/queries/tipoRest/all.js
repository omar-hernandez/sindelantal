'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _tipoRest = require('../../../models/tipoRest');

var _tipoRest2 = _interopRequireDefault(_tipoRest);

var _tipoRest3 = require('../../types/tipoRest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllTipoRest = {
    type: new _graphql.GraphQLList(_tipoRest3.TipoRestType),
    resolve: function resolve() {
        var tipoRests = _tipoRest2.default.find().exec();
        return tipoRests;
    }
};

exports.default = queryAllTipoRest;