const { gql } = require('apollo-server')

const inmuebleTypeDefs = gql`
    type Inmueble {
        id:String!
        propietario:String!
        ubicacionCiudad:String!
        ubicacionBarrio:String!
        habitaciones:Int!
        numeroBanios:Int!
        dimension:Float!   
        tipoInmueble:String!
        descripcion:String!
        precioDia:Float!
        disponible: String!
    }

    input InmuebleInput {
        propietario:String!
        ubicacionCiudad:String!
        ubicacionBarrio:String!
        habitaciones:Int!
        numeroBanios:Int!
        dimension:Float!
        tipoInmueble:String!
        descripcion:String!
        precioDia:Float!
        disponible:String!
    }
    input InmuebleUpdate {
        id:String!
        ubicacionCiudad:String!
        ubicacionBarrio:String!
        habitaciones:Int!
        numeroBanios:Int!
        dimension:Float!
        tipoInmueble:String!
        descripcion:String!
        precioDia:Float!
        disponible:String!
    }

    extend type Query {
        inmuebleById(idInmueble:String!):Inmueble!
        getInmuebles:[Inmueble]!
        inmueblesByOwner(username:String!):[Inmueble]!
        inmuebleByCity(city:String!):[Inmueble]!
    }
    
    extend type Mutation {
        createInmueble(Inmueble:InmuebleInput!): Inmueble!
        updateInmueble(Inmueble:InmuebleUpdate!): Inmueble!
        deleteInmueble(idInmueble:String!): String!
    }

`;
module.exports = inmuebleTypeDefs;