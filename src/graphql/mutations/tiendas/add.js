import {
    GraphQLNonNull
} from 'graphql'

import Tiendas from '../../../models/tiendas'
import {TiendasType,TiendasInputType} from '../../types/tiendas'

export default {
    type:TiendasType,
    args:{
        data:{
            type: new GraphQLNonNull(TiendasInputType)
        }
    },
    resolve(root,params){
        const tienda = new Tiendas(params.data);
        const newTienda = tienda.save();
        if (!newTienda) throw Error("Error al crear la tienda");
        return newTienda
    }
}