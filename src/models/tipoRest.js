import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema

const TipoRestSchema = new Schema ({
    "nombre":{
        type:String,
        required:true
        },
    "descripcion":{
        type:String,
        required:true
    }    
},{collection:"TipoRest",timestamps:true});


export default mongoose.model('TipoRest',TipoRestSchema)
