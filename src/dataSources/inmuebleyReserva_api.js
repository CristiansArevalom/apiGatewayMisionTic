const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class InmuebleyReservaAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.reserva_inmueble_api_url;
    }
    async createInmueble(inmueble) {
        inmueble = new Object(JSON.parse(JSON.stringify(inmueble)));
        return await this.post('/publicarEspacio', inmueble);
    }
    async inmuebleById(inmueblesID) {
        return await this.get(`/inmueblesID/${inmueblesID}`);
    }
    async getInmuebles(){
        return await this.get('/inmuebles');
    }
    async inmueblesByOwner(username) {
        return await this.get(`/misEspacios/${username}`);
    }
    async inmuebleByCity(city) {
        return await this.get(`/inmueblesCiudad/${city}`);
    }
    async updateInmueble(inmueble) {
        inmueble = new Object(JSON.parse(JSON.stringify(inmueble)));
        return await this.put('inmueble/update', inmueble)
    }
    async deleteInmueble(inmueblesID) {
        return await this.delete(`/inmueble/delete/${inmueblesID}`);
    }
    async createReserva(reserva) {
        reserva = new Object(JSON.parse(JSON.stringify(reserva)));
        return await this.post('/reservas', reserva);
    }
    async reservaByOwner(usernameArrendador) {
        console.log("Entro2");
        return await this.get(`/misBalances/${usernameArrendador}`);
    }
    async reservaByUser(usernameArrendatario) {
        return await this.get(`/misReservas/${usernameArrendatario}`);
    }
    async reservaById(id) {
        return await this.get(`/reserva/${id}`);
    }
       
    async updateReserva(reserva) {
        reserva = new Object(JSON.parse(JSON.stringify(reserva)));
        return await this.put('/misReservas/update', reserva)
    }
    async deleteReserva(reservaId) {
        return await this.delete(`/misReservas/delete/${reservaId}`);
    }

}
module.exports = InmuebleyReservaAPI;
