'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var CuponesSchema = new Schema({
    "cupon": {
        type: String,
        required: true
    },
    "descripcion": {
        type: String,
        required: true
    },
    "descuento": {
        type: Number,
        required: true
    }
}, { collection: "Cupones", timestamps: true });

exports.default = _mongoose2.default.model('Cupones', CuponesSchema);