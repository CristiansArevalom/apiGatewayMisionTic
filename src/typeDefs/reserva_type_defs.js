const { gql} = require('apollo-server')

const reservaTypeDefs = gql `
    type Reserva{
        id:String!
        idInmueble:String!
        propietario:String!
        inquilino:String!
        fechaInicio:String!
        fechaFin:String!
        precioTotal:Float!
        fechaReserva:String!
    }

    input ReservaInput{
        idInmueble:String!
        inquilino:String!
        fechaInicio:String!
        fechaFin:String!
    }

    input ReservaUpdate{
        id:String!
        idInmueble:String!
        fechaInicio:String!
        fechaFin:String!
    }

    extend type Query{
        reservaByOwner(username:String!):[Reserva]
        reservaByUser(username:String!):[Reserva]
        reservaById(id:String!):Reserva
    }

    extend type Mutation {
        createReserva(Reserva:ReservaInput!):Reserva
        updateReserva(Reserva:ReservaUpdate!):Reserva
        deleteReserva(Reserva:String!):String
    }
`;
module.exports = reservaTypeDefs;