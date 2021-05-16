export default {
    token(state){
        return state.token
    },
    isAutheticated(state){
        return !!state.token
    }
}