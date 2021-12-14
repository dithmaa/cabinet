import * as axios from 'axios';


//second part of API to get users

const instanse = axios.create({
    
    baseURL: 'https://my-json-server.typicode.com/dithmaa/demoapi/'
    // baseURL: 'http://localhost:3000/'

});


export const usersAPI = { 
    
    getUsers(){
        return(
            instanse.get(`people`).then(response=>{
                return(
                    response.data
                )
            })
        )
        
    },
    addUser(userData){
        return(
            instanse.post(`people`, {
                name: userData.name,
                avatar: userData.avatar 
            })
        )
    },
    removeUser(userId){
        return(
            instanse.delete(`people/${userId}`)
        )
    }
}



//second part of API for Auth


const instanseAuth = axios.create({
    
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "eee580e9-41e0-4287-85f4-dd8d66773124"
    }

});

export const profileAPI = { 
    getProfile (id) {
        return (
            instanseAuth.get(`profile/` + id)
            .then((response) => {
                return(
                    response.data
                );
            })
        )
    }
}

export const authAPI = {
    authMe () { 
        return (
            instanseAuth.get(`auth/me`)
            .then((response) => {
                return(
                    response.data
                );
            })
        )
    }, 
    login (email,password,rememberMe = false){
        return (
            instanseAuth.post(`auth/login`, { email,password,rememberMe }).then((response) => {
                return(
                    response.data
                );
            })
        )
    },
    logout (){
        return (
            instanseAuth.delete(`auth/login`).then((response) => {
                return(
                    response.data
                );
            })
        )
    },
}