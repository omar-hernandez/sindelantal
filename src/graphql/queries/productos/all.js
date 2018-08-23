import {
    GraphQLList
} from 'graphql'

import Productos from '../../../models/productos'
import {ProductoType} from '../../types/productos'

const queryAllProductos = {
    type: new GraphQLList(ProductoType),
    resolve(){
        const producto1 = Productos.find().exec()
        return producto1
    }
}

export default queryAllProductos;