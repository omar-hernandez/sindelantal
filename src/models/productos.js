import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProductosSchema = new Schema ({
    "nombre":{
        type:String,
        required:true
        },
    "descripcion":{
        type:String,
        required:true
    },  
    "precio":{
        type:Number,
        required:true
    },
    "fotos_producto":[{
        type:String,
    }],
    "tienda":[{
        type:Schema.Types.ObjectId,
        ref:'Tiendas',
        required:true
    }],
    "tipo_producto":{
        type:String,
        required:true
    },  
},{collection:"Productos",timestamps:true});


export default mongoose.model('Productos',ProductosSchema)