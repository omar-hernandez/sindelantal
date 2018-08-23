import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Pedidos from '../../../models/pedidos'
import {PedidosType,PedidosInputType} from '../../types/pedidos'

export default {
    type: PedidosType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name:'data',
            type: new GraphQLNonNull(PedidosInputType)
        }
    },
    resolve(root,params){
        return Pedidos.findByIdAndUpdate(params.id,{$set:{...params.data}},{new:true})
            .then(pedido => pedido)
            .catch(erre =>  Error('Error al hacer el update'))
    }
}