const authResolver = {
    Query:{
        userDetailByid: async (_,{userId},{dataSources,userIdToken}) =>{
            //se valida que el id de usuario sea el mismo que el desencriptado en el token
            if(userId == userIdToken)
                return await dataSources.authAPI.getUser(userId);
            else
                return null;
        },
        rolDetailById: async (_,{idRol},{dataSources})=>{
            return await dataSources.authAPI.getRol(idRol);
        },
    },
    Mutation : {
        signUpUser: async (_,{userInput},{dataSources})=>{
            const userinput = {
            username:userInput.username,
            password:userInput.password,
            name:userInput.name,
            last_name:userInput.last_name,
            cedula:userInput.cedula,
            email:userInput.email,
            rol:userInput.rol
        }
         return await dataSources.authAPI.createUser(userinput)
        },
        login: async (_,{credentials}, {dataSources})=>{        
           return await dataSources.authAPI.authRequest(credentials);
        },
        refreshToken: async(_,{token},{dataSources} )=>{
            return await dataSources.authAPI.refreshToken(token)
        },
        
        createRol: async(_,{Rol},{dataSources})=>{
            const rolInput= {
                name:Rol.name,
                description:Rol.description
            }
            return await dataSources.authAPI.createRol(rolInput)
        }
    }

};
module.exports = authResolver;