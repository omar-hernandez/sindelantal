import {
    GraphQLList
} from 'graphql'

import TipoRest from '../../../models/tipoRest'
import {TipoRestType} from '../../types/tipoRest'

const queryAllTipoRest = {
    type: new GraphQLList(TipoRestType),
    resolve(){
        const tipoRests = TipoRest.find().exec()
        return tipoRests
    }
}

export default queryAllTipoRest;