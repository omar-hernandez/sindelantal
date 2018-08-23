import {
    GraphQLList
} from 'graphql'

import Tiendas from '../../../models/tiendas'
import {TiendasType} from '../../types/tiendas'

const queryAllTiendas = {
    type: new GraphQLList(TiendasType),
    resolve(){
        const tienda = Tiendas.find().exec()
        return tienda
    }
}

export default queryAllTiendas;