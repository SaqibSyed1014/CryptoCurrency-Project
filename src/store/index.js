import { createStore } from 'vuex'
import authModule from './modules/auth/index'

export default createStore({
  modules: {
    authModule
  }
})
