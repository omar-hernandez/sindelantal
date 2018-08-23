import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLInputObjectType
} from 'graphql'

export const TipoRestType = new GraphQLObjectType({
    name:'TipoRest',
    description:'Tipos de restaurantes',
    fields: ()=>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        }
    })
});

export const TipoRestInputType = new GraphQLInputObjectType({
    name:"addTipoRest",
    description:"Mutation para agregar tipos de restaurantes",
    fields: () => ({
        nombre:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        }
    })
})