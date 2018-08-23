import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInputObjectType
} from 'graphql'

import {TiendasType} from './tiendas'
import Tiendas from '../../models/tiendas'

export const ProductoType = new GraphQLObjectType({
    name:'Producto',
    description:'Productos de la base de datos',
    fields: ()=>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        precio:{
            type:GraphQLInt
        },
        tienda:{
            type: new GraphQLList(TiendasType),
            resolve(pedido){
                const {tiendas} = pedido
                return Tiendas.find({_id:{$in:tiendas}}).exec()
            }
        },
        fotos_producto:{
            type:GraphQLString
        },
        tipo_producto:{
            type:GraphQLString
        },
    })
});

export const ProductoInputType = new GraphQLInputObjectType({
    name:"addProducto",
    description:"Mutation para agregar productos",
    fields: () => ({
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        precio:{
            type:GraphQLInt
        },
        tienda:{
            type: new GraphQLList(GraphQLID),
        },
        fotos_producto:{
            type:GraphQLString
        },
        tipo_producto:{
            type:GraphQLString
        },
    })
})