
export default {
    login(context, payload){
        var axios = require('axios');
        var data = JSON.stringify({
            "password": payload.password,
            "username": payload.userName
        });

        var config = {
            method: 'post',
            url: 'http://51.143.8.209:8000/login/',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };
        console.log('sent login info')
        axios(config)
            .then(function (response) {
                const Token = JSON.stringify(response.data.token)
                console.log('login response',Token);
                context.commit('setUser', {
                    token: Token,
                })
            })
            .catch(function (error) {
                console.log(error);
                localStorage.setItem('login-error', error)
            });

    },
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
        })
    },
    logout(){
        var axios = require('axios');
        var config = {
            method: 'post',
            url: 'http://51.143.8.209:8000/logout/',
            headers: {
                'Authorization': 'Token ' + localStorage.getItem('token').slice(1, -1)
            }
        };
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                console.log('log out resp',this.logOutResponse = JSON.stringify(response.data))

            })
            .catch(function (error) {
                console.log(error);
            });

    }

}