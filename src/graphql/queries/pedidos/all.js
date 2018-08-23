import {
    GraphQLList
} from 'graphql'

import Pedidos from '../../../models/pedidos'
import {PedidosType} from '../../types/pedidos'

const queryAllPedidos = {
    type: new GraphQLList(PedidosType),
    resolve(){
        const pedido = Pedidos.find().exec()
        return pedido
    }
}

export default queryAllPedidos;