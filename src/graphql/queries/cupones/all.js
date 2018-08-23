import {
    GraphQLList
} from 'graphql'

import Cupones from '../../../models/cupones'
import {CuponesType} from '../../types/cupones'

const queryAllCupones = {
    type: new GraphQLList(CuponesType),
    resolve(){
        const cupon = Cupones.find().exec()
        return cupon
    }
}

export default queryAllCupones;