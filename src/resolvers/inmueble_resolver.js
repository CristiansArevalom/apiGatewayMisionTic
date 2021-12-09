const inmuebleResolver = {
    Query:{
        inmuebleById: async (_,{idInmueble},{dataSources,userIdToken}) =>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            const inmueble = await dataSources.inmuebleyReservaAPI.inmuebleById(idInmueble);
            usernameInmueble = inmueble.propietario
            if(usernameToken = usernameToken )
                return inmueble;
            else 
                return null;
        },
        getInmuebles: async (_,{dataSources}) =>{
            console.log("Entro1");
            return await dataSources.inmuebleyReservaAPI.getInmuebles();
        },
        inmueblesByOwner: async (_,{username},{dataSources,userIdToken}) =>{ 
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username //Trae a parir del token del usuario el username y valida si su token corresponde
            if (username = usernameToken)
                return await dataSources.inmuebleyReservaAPI.inmueblesByOwner(username);
            else
                return null;    
        },
        inmuebleByCity: async (_,{city},{dataSources}) =>{
            return await dataSources.inmuebleyReservaAPI.inmuebleByCity(city);
        }

    },
    Mutation : {
        createInmueble: async(_,{inmueble},{dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username //Trae a parir del token del usuario el username y valida si su token corresponde
            if(inmueble.propietario ==usernameToken )
                return await dataSources.inmuebleyReservaAPI.createInmueble(inmueble);
            else
                return null;
        },
        updateInmueble: async (_,{inmueble},{dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username //Trae a parir del token del usuario el username y valida si su token corresponde
            usernameInmueble = (await dataSources.inmuebleyReservaAPI.inmuebleById(inmueble.id)).propietario
            if(usernameToken = usernameInmueble)
                return await dataSources.inmuebleyReservaAPI.updateInmueble(inmueble);
            else
                return null;
        },
        deleteInmueble: async (_,{idInmueble},{dataSources, userIdToken})=>{
            usernameToken = (await dataSources.authAPI.getUser(userIdToken)).username
            usernameInmueble = (await dataSources.inmuebleyReservaAPI.inmuebleById(idInmueble)).propietario
            if(usernameToken = usernameInmueble)
                return await dataSources.inmuebleyReservaAPI.deleteInmueble(idInmueble);
            else
                return null;
        }
    }
};
module.exports = inmuebleResolver;