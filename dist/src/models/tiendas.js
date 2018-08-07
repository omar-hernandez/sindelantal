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

var TiendaSchema = new Schema({
    "nombre": {
        type: String,
        required: true
    },
    "dirección": {
        type: String,
        required: true
    },
    "correo": {
        type: String,
        required: true
    },
    "tipo": {
        type: Schema.Types.ObjectId,
        ref: 'TipoRest',
        required: true
    },
    "telefono": {
        type: Number,
        required: true
    },
    "calificacion": {
        type: [{
            'comentario': String,
            "estrellas": Number
        }],
        required: true
    },
    "productos": [{
        type: Schema.Types.ObjectId,
        ref: 'Productos',
        required: true
    }],
    "horario": {
        type: String,
        required: true
    },
    "descripcion": {
        type: String,
        required: true
    },
    "foto_tiendas": {
        type: String,
        default: "http://3.bp.blogspot.com/-B3Vx7FEOs0M/UwYbYkB0-eI/AAAAAAAAABI/ghmD7BU5Rrg/s1600/tienda+rusa+barcelona+(1).JPG"
    },
    "nivel_precio": {
        type: Number,
        required: true
    }
}, { collection: "Tiendas", timestamps: true });

exports.default = _mongoose2.default.model('Tiendas', TiendaSchema);