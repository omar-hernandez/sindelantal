import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Productos from '../../../models/productos'
import {ProductoType} from '../../types/productos'

export default {
    type: ProductoType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteProducto=  Productos.findByIdAndRemove(params.id).exec()
        if (!deleteProducto) throw Error('Error al borrar el producto')
        return deleteProducto
    }
}