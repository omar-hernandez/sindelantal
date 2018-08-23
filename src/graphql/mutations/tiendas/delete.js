import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Tiendas from '../../../models/tiendas'
import {TiendasType} from '../../types/tiendas'

export default {
    type: TiendasType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteTienda=  Tiendas.findByIdAndRemove(params.id).exec()
        if (!deleteTienda) throw Error('Error al borrar la tienda')
        return deleteTienda
    }
}