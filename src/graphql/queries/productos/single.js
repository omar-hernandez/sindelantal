import {GraphQLNonNull,GraphQLID} from 'graphql'

import Productos from '../../../models/productos'
import {ProductoType} from '../../types/productos'

const querySingleProducto = {
    type:ProductoType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const producto = Productos.findById(params.id).exec()
        return producto
    }
}

export default querySingleProducto;