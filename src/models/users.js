import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT = 10;
const Schema = mongoose.Schema

const UserSchema = new Schema ({
    "nombre":{
        type:String,
        required:true
        },
    "apellidos":{
        type:String,
        required:true
    },
    "correo":{
        type:String,
        required:true
    },
    "fecha_nacimiento":{
        type:Date
    },
    "password":{
        type:String,
        required:true
        },
    "username":{
        type:String,
        required:true,
        unique:true
        },
    "foto":{
        type:String,
        default:"https://articles-images.sftcdn.net/wp-content/uploads/sites/3/2016/01/wallpaper-for-facebook-profile-photo.jpg"
    },
    "user_pay":{
        type:String,
    },
    "telefono":{
        type:Number,
        },
    "direcciones":[{
        type:String,

    }],
},{collection:"Users",timestamps:true});

UserSchema.pre('save',function(next){
    let user = this;
    if(!user.isModified('password')){return next();}
    bcrypt.genSalt(SALT,(err,salt)=>{
        if (err) return netx(err);
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if (err) return netx(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(inputPassword,cb){
    bcrypt.compare(inputPassword,this.password, function(err,isMatch){
        cb(null,isMatch)
    })
}


export default mongoose.model('Users',UserSchema)
