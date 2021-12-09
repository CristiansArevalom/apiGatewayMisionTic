//gql. graphql
const { gql } = require('apollo-server');
/***Aqui se colocan los datos de entrada y salida para todos los CRud
 * Tokens: Cuando se da la rta de los tokensen django, retorna un token de refresh y de acceso (ej cuando se crea el usuario retorna estos dos tokens)
 * Access: es cundo se usa /refresh del MS autenticacion, en donde se renueva el token de acceso enviando el tkn de refresh
 * LoginInput:Datos que recibe para el login de un usuario
 * RegisterInput: Datos que recibe para registrar un usuario
 * 
*/
const authTypeDefs = gql`
type Tokens {
    refresh: String!
    access: String!  
}
type Access {
    access:String!
}
input Refresh {
    refresh:String!
}
input LoginInput{
    username:String!
    password:String!
}
input SignUpInput{
    username:String!
    password:String!
    name:String!
    last_name:String!
    cedula:String!
    email:String!
    rol:Int!
}
type Rol{
    name:String!
    description:String!
}
input RolInput{
    name:String!
    description:String!
}

type UserDetail{
    username:String!
    password:String!
    name:String!
    last_name:String!
    cedula:String!
    email:String!
    rol:Rol!
}

type Query {
    userDetailByid(userId:Int!): UserDetail!
    rolDetailById(idRol:Int!): Rol
}

type Mutation {
    signUpUser(userInput:SignUpInput): Tokens!
    login(credentials:LoginInput!): Tokens!
    refreshToken(token:Refresh!): Access!
    createRol(Rol:RolInput!): Rol
}
`;
module.exports = authTypeDefs;