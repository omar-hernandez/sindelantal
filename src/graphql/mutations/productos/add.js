import {
    GraphQLNonNull
} from 'graphql'

import Productos from '../../../models/productos'
import {ProductoType,ProductoInputType} from '../../types/productos'

export default {
    type:ProductoType,
    args:{
        data:{
            type: new GraphQLNonNull(ProductoInputType)
        }
    },
    resolve(root,params){
        const producto = new Productos(params.data);
        const newProducto = producto.save();
        if (!newProducto) throw Error("Error al crear el producto");
        return newProducto
    }
}