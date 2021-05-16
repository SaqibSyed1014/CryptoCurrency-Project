<template>
  <div class="login-form-wrapper">
    <h3 class="text-center mb-5">Login Form</h3>
    <div class="form-group row mb-4">
      <label for="UserName" class="col-5 col-form-label text-center">Enter Email: </label>
      <div class="col-7">
        <input v-model="userName" class="form-control w-75" type="email" id="userName">
      </div>
    </div>
    <div class="form-group row mb-4">
      <label for="password" class="col-5 col-form-label text-center">Enter Password: </label>
      <div class="col-7">
        <input v-model="password" class="form-control w-75" type="password" id="password">
      </div>
    </div>
    <h4 class="errorMsg text-center" v-if="error">You have entered invalid credentials!</h4>
    <div class="text-center my-4">
      <button type="button" @click="submittingLogInForm" class="btn btn-dark">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  data(){
    return{
      userName: '',
      password: '',
      error: false
    }

  },
  methods: {
    submittingLogInForm(){
      this.$store.dispatch('login', {
        userName: this.userName,
        password: this.password
      })
      var loginLocal = localStorage.getItem('login-error')
      if(loginLocal !='' ){
        this.error = true
        return false
      }
      console.log('token in vuex', this.$store.state.authModule.token)
      this.$emit('closeloginmodal', 1)
    }
  }
}
</script>

<style scoped>

</style>