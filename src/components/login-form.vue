<template>
  <div class="login-form-wrapper">
    <h3 class="text-center mb-5">Login Form</h3>
    <div class="form-group row mb-4">
      <label for="UserName" class="col-5 col-form-label text-center">Enter Username: </label>
      <div class="col-7">
        <input class="form-control w-75" type="text" id="userName">
      </div>
    </div>
    <div class="form-group row mb-4">
      <label for="password" class="col-5 col-form-label text-center">Enter Password: </label>
      <div class="col-7">
        <input class="form-control w-75" type="password" id="password">
      </div>
    </div>
    <div class="text-center my-4">
      <button type="button" @click="submittingLogInForm" class="btn btn-dark">Log In</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  methods: {
    submittingLogInForm(){

    }
  }
}
</script>

<style scoped>
</style>