const authResolver=require('./auth_resolver');
const inmuebleResolver=require ('./inmueble_resolver');
const reservaResolver=require ('./reserva_resolver');
const lodash=require('lodash')

const resolvers=lodash.merge(authResolver,inmuebleResolver,reservaResolver);
module.exports=resolvers;