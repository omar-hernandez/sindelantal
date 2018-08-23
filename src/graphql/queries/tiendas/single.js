import {GraphQLNonNull,GraphQLID} from 'graphql'

import Tiendas from '../../../models/tiendas'
import {TiendasType} from '../../types/tiendas'

const querySingleTienda = {
    type:TiendasType,
    args:{
        id:{
            name:'ID',
            type:GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const tienda = Tiendas.findById(params.id).exec()
        return tienda
    }
}

export default querySingleTienda;