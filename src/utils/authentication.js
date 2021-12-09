const { ApolloError } = require('apollo-server'); //Permite manejar errores
const serverConfig = require('../server');
const fetch = require('node-fetch');

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    if (token == '')
        return { userIdToken: null }
    else {
        try { //RequestOptions realiza la configuracion de la peticion (como si fuera Postman)
            let requestOptions = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token }),
                redirect: 'follow' //Si hay un erro
            };

            let response = await fetch(
                `${serverConfig.auth_api_url}/verifyToken/`,
                requestOptions)

            if (response.status != 200) {
                console.log(response)
                throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401) //401 es status no autorizado
            }
            return { userIdToken: (await response.json()).UserId };
        }
        catch (error) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }
    }
}
module.exports = authentication; //Permite que se pueda llamar en cualquier lado
