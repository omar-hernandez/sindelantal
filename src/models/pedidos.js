import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema

const PedidosSchema = new Schema ({
    "productos":[{
        type:Schema.Types.ObjectId,
        ref:'Productos',
        required:true
    }],  
    "monto":{
        type:Number,
        required:true,
        default:0
    },
    "cupon":{
        type:Schema.Types.ObjectId,
        ref:'Cupones',
        required:true
    },
    "status_pago":{
        type:Boolean,
        required:true
    },
    "status_pedido":{
        type:Number,
        required:true
    },
    "direccion_usuario":{
        type:Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    "usuario":{
        type:Schema.Types.ObjectId,
        ref:'Users',
        required:true
    },
    "tienda":{
        type:Schema.Types.ObjectId,
        ref:'Tiendas',
        required:true
    }
  
},{collection:"Pedidos",timestamps:true});

export default mongoose.model('Pedidos',PedidosSchema)