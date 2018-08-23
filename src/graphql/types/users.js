import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

export const UserType = new GraphQLObjectType({
    name:'Usuarios',
    description:'Usuarios de la base de datos',
    fields: ()=>({
        _id:{
            type:GraphQLNonNull(GraphQLID)
        },
        nombre:{
            type:GraphQLString
        },
        apellidos:{
            type:GraphQLString
        },
        correo:{
            type:GraphQLString
        },
        fecha_nacimiento:{
            type:GraphQLString
        },
        username:{
            type:GraphQLString
        },
        foto:{
            type:GraphQLString
        },
        telefono:{
            type:GraphQLInt
        },
        direcciones:{
            type:GraphQLList(GraphQLString),
        }
    })
});