import {
    GraphQLNonNull
} from 'graphql'

import Pedidos from '../../../models/pedidos'
import {PedidosType,PedidosInputType} from '../../types/pedidos'

export default {
    type:PedidosType,
    args:{
        data:{
            type: new GraphQLNonNull(PedidosInputType)
        }
    },
    resolve(root,params){
        const pedido = new Pedidos(params.data);
        const newPedido = pedido.save();
        if (!newPedido) throw Error("Error al crear el pedido");
        return newPedido
    }
}