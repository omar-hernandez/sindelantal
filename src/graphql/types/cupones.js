import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLInputObjectType
} from 'graphql'

export const CuponesType = new GraphQLObjectType({
    name:'Cupones',
    description:'Los cupones a registrar',
    fields: ()=>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        cupon:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        descuento:{
            type:GraphQLInt
        }
    })
});

export const CuponesInputType = new GraphQLInputObjectType({
    name:"addCupones",
    description:"Mutation para agregar cupones",
    fields: () => ({
        cupon:{
            type:GraphQLString
        },
        descripcion:{
            type:GraphQLString
        },
        descuento:{
            type:GraphQLInt
        }
    })
})