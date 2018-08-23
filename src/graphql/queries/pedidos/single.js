import {GraphQLNonNull,GraphQLID} from 'graphql'

import Pedidos from '../../../models/pedidos'
import {PedidosType} from '../../types/pedidos'

const querySinglePedido = {
    type:PedidosType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const pedido = Pedidos.findById(params.id).exec()
        return pedido
    }
}

export default querySinglePedido;