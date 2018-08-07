import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema

const CuponesSchema = new Schema ({
    "cupon":{
        type:String,
        required:true
        },
    "descripcion":{
        type:String,
        required:true
    },  
    "descuento":{
        type:Number,
        required:true
    }
},{collection:"Cupones",timestamps:true});


export default mongoose.model('Cupones',CuponesSchema)