import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import TipoRest from '../../../models/tipoRest'
import {TipoRestType} from '../../types/tipoRest'

export default {
    type: TipoRestType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deletetipoRest=  TipoRest.findByIdAndRemove(params.id).exec()
        if (!deletetipoRest) throw Error('Error al borrar el tipo de restaurante')
        return deletetipoRest
    }
}