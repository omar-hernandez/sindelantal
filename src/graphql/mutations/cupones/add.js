import {
    GraphQLNonNull
} from 'graphql'

import Cupones from '../../../models/cupones'
import {CuponesType,CuponesInputType} from '../../types/cupones'

export default {
    type:CuponesType,
    args:{
        data:{
            type: new GraphQLNonNull(CuponesInputType)
        }
    },
    resolve(root,params){
        const cupon = new Cupones(params.data);
        const newCupon = cupon.save();
        if (!newCupon) throw Error("Error al crear el cupon");
        return newCupon
    }
}