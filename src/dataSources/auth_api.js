const { RESTDataSource } = require('apollo-datasource-rest'); //lee la fuente de datosde rest
const serverConfig = require('../server'); //trae los servers en donde estan los backend

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.auth_api_url;
    }
    //Como van a llamar microservicios se declara el metodo como async y se consume el servicio web 
    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post('/user/', user)
    }
    async getUser(userId) {
        return await this.get(`/user/${userId}/`);
    }

    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
        }

    async refreshToken(token) {
        token = new Object(token);
        return await this.post(`/refresh/`, token);
    }

    async createRol(rol) {
        rol = new Object(JSON.parse(JSON.stringify(rol)));
        return await this.post(`/rol/`, rol);

    }
    async getRol(idRol) {
        return await this.get(`/rol/${idRol}/`);
    }

}
module.exports = AuthAPI;
