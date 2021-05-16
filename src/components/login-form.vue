<template>
  <div class="form-group row my-3">
    <label for="UserName" class="col-5 col-form-label text-center">Enter Username: </label>
    <div class="col-7">
      <input class="form-control w-75" type="text" id="userName">
    </div>
  </div>
  <div class="form-group row my-3 " >
    <label for="password" class="col-5 col-form-label text-center">Enter Password: </label>
    <div class="col-7">
      <input class="form-control w-75" type="password" id="password">
    </div>
  </div>
  <div class="form-group row my-3">
    <label for="apiKey" class="col-5 col-form-label text-center">Enter API Key: </label>
    <div class="col-7">
      <input class="form-control w-75" type="text"  id="apiKey">
    </div>
  </div>
  <div class="form-group row my-3">
    <label for="secretKey" class="col-5 col-form-label text-center">Enter Secret Key: </label>
    <div class="col-7">
      <input class="form-control w-75" type="text" id="secretKey">
    </div>
  </div>
</template>

<script>
export default {
name: "loginForm"
}
</script>

<style scoped>
label{
  /*font-size: 13pt;*/
}
</style>