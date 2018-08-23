import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Cupones from '../../../models/cupones'
import {CuponesType,CuponesInputType} from '../../types/cupones'

export default {
    type: CuponesType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(CuponesInputType)
        }
    },
    resolve(root,params){
        return Cupones.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(cupon => cupon)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}