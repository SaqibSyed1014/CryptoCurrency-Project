<template>
<div>
  <form @submit.prevent="submitForm">
    <div class="form-group row">
      <label for="StartingDate" class="col-2 col-form-label text-center">Starting Date</label>
      <div class="col-10">
        <input class="form-control" type="date" value="2020-05-15" id="StartingDate">
      </div>
    </div>
    <div class="form-group row">
      <label for="EndingDate" class="col-2 col-form-label text-center">Ending Date</label>
      <div class="col-10">
        <input class="form-control" type="date" value="2020-05-15" id="EndingDate">
      </div>
    </div>
    <div class="text-right">
      <button type="submit" class="btn btn-dark">Submit</button>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: "Form",
  methods: {
    submitForm(){
      this.$emit('closing', 1)
    }
  }
}
</script>

<style scoped>
.col-form-label{
  color: black;
  font-size: 14pt;
}
</style>