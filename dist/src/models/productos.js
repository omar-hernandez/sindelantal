"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var ProductosSchema = new Schema({
    "nombre": {
        type: String,
        required: true
    },
    "descripcion": {
        type: String,
        required: true
    },
    "precio": {
        type: Number,
        required: true
    },
    "fotos_producto": [{
        type: String
    }],
    "tienda": [{
        type: Schema.Types.ObjectId,
        ref: 'Tiendas',
        required: true
    }],
    "tipo_producto": {
        type: String,
        required: true
    }
}, { collection: "Productos", timestamps: true });

exports.default = _mongoose2.default.model('Productos', ProductosSchema);