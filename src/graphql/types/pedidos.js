import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLString,
    GraphQLInputObjectType
} from 'graphql'

import {ProductoType} from './productos'
import Productos from '../../models/productos'
import {CuponesType} from './cupones'
import Cupones from '../../models/cupones'
import {UserType} from './users'
import User from '../../models/users'
import {TiendasType} from './tiendas'
import Tiendas from '../../models/tiendas'

export const PedidosType = new GraphQLObjectType({
    name:'Pedidos',
    description:'pedidos de los users',
    fields: ()=>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        productos:{
            type: new GraphQLList(ProductoType),
            resolve(tienda){
                const {productos} = tienda
                return Productos.find({_id:{$in:productos}}).exec()
            }
        },
        monto:{
            type:GraphQLInt
        },
        cupon:{
            type:CuponesType,
            resolve(producto){
                const {cupon} = producto
                return Cupones.findById(cupon).exec()
            }
        },
        status_pago:{
            type:GraphQLBoolean
        },
        status_pedido:{
            type:GraphQLInt
        },
        direcciones:{
            type:GraphQLString
        },
        usuario:{
            type:UserType,
            resolve(pedido){
                const {user} = pedido
                return Users.findById(user).exec()
            }
        },
        tienda:{
            type:TiendasType,
            resolve(producto){
                const {tienda} = producto
                return Tiendas.findById(tienda).exec()
            }
        },
    })
});

export const PedidosInputType = new GraphQLInputObjectType({
    name:"addPedidos",
    description:"Mutation para agregar pedidos",
    fields: () => ({
        productoss:{
            type: new GraphQLList(GraphQLID),
        },
        monto:{
            type:GraphQLInt
        },
        cupon:{
            type:GraphQLNonNull(GraphQLID)
        },
        status_pago:{
            type:GraphQLBoolean
        },
        status_pedido:{
            type:GraphQLInt
        },
        direcciones:{
            type:GraphQLNonNull(GraphQLID)
        },
        usuario:{
            type:GraphQLNonNull(GraphQLID)
        },
        tienda:{
            type:GraphQLNonNull(GraphQLID)
        },
    })
})