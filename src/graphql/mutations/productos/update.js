import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Productos from '../../../models/productos'
import {ProductoType,ProductoInputType} from '../../types/productos'

export default {
    type: ProductoType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(ProductoInputType)
        }
    },
    resolve(root,params){
        return Productos.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(producto => producto)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}