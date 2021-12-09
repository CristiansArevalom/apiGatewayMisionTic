//se llama todos los typeDefs
const authTypeDefs = require('./auth_type_defs')
const inmuebleTypeDefs = require('./inmueble_type_defs')
const reservaTypeDefs = require('./reserva_type_defs');

const schemasArrays = [authTypeDefs,inmuebleTypeDefs,reservaTypeDefs]
module.exports = schemasArrays;