'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var PedidosSchema = new Schema({
    "productos": [{
        type: Schema.Types.ObjectId,
        ref: 'Productos',
        required: true
    }],
    "monto": {
        type: Number,
        required: true,
        default: 0
    },
    "cupon": {
        type: Schema.Types.ObjectId,
        ref: 'Cupones',
        required: true
    },
    "status_pago": {
        type: Boolean,
        required: true
    },
    "status_pedido": {
        type: Number,
        required: true
    },
    "direcciones": {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    "usuario": {
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    "tienda": {
        type: Schema.Types.ObjectId,
        ref: 'Tiendas',
        required: true
    }

}, { collection: "Pedidos", timestamps: true });

exports.default = _mongoose2.default.model('Pedidos', PedidosSchema);