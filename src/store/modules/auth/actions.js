export default {
    login(){},
    signup(context, payload){
        var axios = require('axios');
        var data = JSON.stringify({
            "api_key": payload.userApiKey,
            "secret_key": payload.userSecretKey,
            "user": {
                "password": payload.password,
                "email": payload.email,
                "first_name": payload.firstName,
                "last_name": payload.lastName
            }
        });
        console.log('sending data')
        var config = {
            method: 'post',
            url: 'http://51.143.8.209:8000/register/',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };
        let responseData = JSON.stringify(config.data)
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log('commiting setuser action')
        context.commit('setUser', {
            token: responseData.token,
            userId: responseData.userId,
            tokenExpiration: responseData.expiresIn
        })
    }
}