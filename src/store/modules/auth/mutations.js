export default {
    setUser(state, payload){
        state.token = payload.token;
        console.log('inside setuser mutation', state.token)
        localStorage.setItem('token', state.token)
    }

}