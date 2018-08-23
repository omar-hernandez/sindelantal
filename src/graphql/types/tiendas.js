import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLInputObjectType
} from 'graphql'

import {TipoRestType} from './tipoRest'
import TipoRest from '../../models/tipoRest'

import {ProductoType} from './productos'
import Producto from '../../models/productos'

export const CalificacionType = new GraphQLObjectType({
    name:"Calificaciones",
    description: "Calificaciones de las tiendas",
    fields: ()=>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        comentario:{
            type:GraphQLString
        },
        estrellas:{
            type:GraphQLInt
        }
    })    
});

export const TiendasType = new GraphQLObjectType({
    name:'Tiendas',
    description:'Tiendas de la base de datos',
    fields: ()=>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        direccion:{
            type:GraphQLString
        },
        correo:{
            type:GraphQLString
        },
        tipo:{
            type:TipoRestType,
            resolve(tienda){
                const {xxx1} = tienda
                return TipoRest.findById(xxx1).exec()
            }
        },
        telefono:{
            type:GraphQLInt
        },
        calificacion:{
            type: new GraphQLList(CalificacionType)
        },
        productos:{
            type: new GraphQLList(ProductoType),
            resolve(producto){
                const {productos} = producto
                return Producto.find({_id:{$in:productos}}).exec()
            }
        },
        horario:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        foto_tiendas:{
            type:GraphQLString
        },
        nivel_precio:{
            type:GraphQLInt
        },
    })
});

export const TiendasInputType = new GraphQLInputObjectType({
    name:"addTiendas",
    description:"Mutation para agregar tiendas",
    fields: () => ({
        nombre:{
            type:GraphQLString
        },
        direccion:{
            type:GraphQLString
        },
        correo:{
            type:GraphQLString
        },
        tipo:{
            type:GraphQLNonNull(GraphQLID),
        },
        telefono:{
            type:GraphQLInt
        },
        productos:{
            type: new GraphQLList(GraphQLID),
        },
        horario:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        foto_tiendas:{
            type:GraphQLString
        },
        nivel_precio:{
            type:GraphQLInt
        },
    })
})