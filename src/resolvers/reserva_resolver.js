const reservaResolver = {
    Query:{
        reservaByOwner: async (_,{username},{dataSources,userIdToken}) =>{
            console.log("Entro1");
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            console.log(usernameToken)
            if (username = usernameToken)
                return await dataSources.inmuebleyReservaAPI.reservaByOwner(username);
            else
                return null;
        },
        reservaByUser: async (_,{username},{dataSources,userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username = usernameToken)
                return await dataSources.inmuebleyReservaAPI.reservaByUser(username);
            else
                return null;
        },
        reservaById: async (_,{idReserva},{dataSources,userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            const reserva = await dataSources.inmuebleyReservaAPI.reservaById(idReserva);
            usernameInquilino = reserva.inquilino
            usernamePropietario = reserva.propietario
            if((usernameToken = usernameInquilino) || (usernameToken = usernameInquilino))
                return reserva
            else
                return null;
        }
    },
    Mutation : {
        createReserva: async (_,{reserva},{dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username //Trae a parir del token del usuario el username y valida si su token corresponde
            if(reserva.inquilino ==usernameToken )
                return await dataSources.inmuebleyReservaAPI.createReserva(reserva);
            else
                return null;
            },
        updateReserva: async(_,{reserva},{dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username //Trae a parir del token del usuario el username y valida si su token corresponde
            usernameReserva = (await dataSources.inmuebleyReservaAPI.reservaById(reserva.id)).inquilino
            if(usernameToken = usernameReserva)
                return await dataSources.inmuebleyReservaAPI.updateReserva(reserva);
            else
                return null;
        },
        deleteReserva: async (_,{idReserva},{dataSources, userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameReserva = (await dataSources.inmuebleyReservaAPI.reservaById(idReserva)).inquilino
            if(usernameToken = usernameReserva)
                return await dataSources.inmuebleyReservaAPI.deleteReserva(idReserva);
            else
                return null;
        }
    }
};
module.exports = reservaResolver;

