const reservaResolver = {
    Query: {
        reservaByOwner: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username = usernameToken)
                return await dataSources.inmuebleyReservaAPI.reservaByOwner(username);
            else
                return null;
        },
        reservaByUser: async (_, { username }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            if (username = usernameToken)
                return await dataSources.inmuebleyReservaAPI.reservaByUser(username);
            else
                return null;
        },
        reservaById: async (_, { id }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            const reserva = await dataSources.inmuebleyReservaAPI.reservaById(id);
            usernameInquilino = reserva.inquilino
            usernamePropietario = reserva.propietario
            if ((usernameToken = usernameInquilino) || (usernameToken = usernamePropietario)) {
                return reserva
            } else {
                return null;
            }
        }
    },
    Mutation: {
        createReserva: async (_, { reservaInput }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username //Trae a parir del token del usuario el username y valida si su token corresponde
            if (reservaInput.inquilino == usernameToken)
                return await dataSources.inmuebleyReservaAPI.createReserva(reservaInput);
            else
                return null;
        },
        updateReserva: async (_,{ reservaUpdate },{ dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username //Trae a parir del token del usuario el username y valida si su token corresponde
            usernameReserva = (await dataSources.inmuebleyReservaAPI.reservaById(reservaUpdate.id)).inquilino
            if (usernameToken = usernameReserva) {                
                return await dataSources.inmuebleyReservaAPI.updateReserva(reservaUpdate);
            } else
                return null;
        },
        deleteReserva: async (_, { id }, { dataSources, userIdToken }) => {
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameReserva = (await dataSources.inmuebleyReservaAPI.reservaById(id)).inquilino
            if (usernameToken = usernameReserva)
                return await dataSources.inmuebleyReservaAPI.deleteReserva(id);
            else
                return null;
        }
    }
};
module.exports = reservaResolver;

