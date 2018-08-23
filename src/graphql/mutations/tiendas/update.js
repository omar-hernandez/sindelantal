import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Tiendas from '../../../models/tiendas'
import {TiendasType,TiendasInputType} from '../../types/tiendas'

export default {
    type: TiendasType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(TiendasInputType)
        }
    },
    resolve(root,params){
        return Tiendas.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(tienda => tienda)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}