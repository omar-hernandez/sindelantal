import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql'

import Cupones from '../../../models/cupones'
import {CuponesType} from '../../types/cupones'

export default {
    type: CuponesType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root,params){
        const deleteCupon=  Cupones.findByIdAndRemove(params.id).exec()
        if (!deleteCupon) throw Error('Error al borrar el cupon')
        return deleteCupon
    }
}