import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Pedidos from '../../../models/pedidos'
import {PedidosType} from '../../types/pedidos'

export default {
    type: PedidosType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deletePedido=  Pedidos.findByIdAndRemove(params.id).exec()
        if (!deletePedido) throw Error('Error al borrar el pedido')
        return deletePedido
    }
}