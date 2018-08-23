import {
    GraphQLNonNull
} from 'graphql'

import TipoRest from '../../../models/tipoRest'
import {TipoRestType,TipoRestInputType} from '../../types/tipoRest'

export default {
    type:TipoRestType,
    args:{
        data:{
            type: new GraphQLNonNull(TipoRestInputType)
        }
    },
    resolve(root,params){
        const tipoRest = new TipoRest(params.data);
        const newtipoRest = tipoRest.save();
        if (!newtipoRest) throw Error("Error al crear el tipo de restaurante");
        return newtipoRest
    }
}