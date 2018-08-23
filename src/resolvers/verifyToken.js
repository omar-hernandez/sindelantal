import jwt from 'jsonwebtoken'
import User from '../models/users'

const secret = 'ejemplosindelantal33'
const tokenPrefix = 'JWT'

export const verifyToken=(token)=>{
    const [prefix,receivedToken] = token.split(' ')
    let user = null

    if(!receivedToken){
        throw new Error('No Token')
    }
    if(prefix != tokenPrefix){
        throw new Error ('Header Invalido')
    }

    jwt.verify(receivedToken,secret,(err,payload)=>{
        if(err) throw new Error ('Token inválido')
        console.log(payload)
        user = User.findById(payload.id).exec()
    })

    if(!user) throw new Error('Usuario no existe')
    return user

}