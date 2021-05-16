<template>
<div>
  <form >
    <div class="form-group row my-3">
      <label for="StartingDate" class="col-2 col-form-label text-center">Starting Date</label>
      <div class="col-10">
        <input class="form-control" type="date" value="2020-05-15" id="StartingDate">
      </div>
    </div>
    <div class="form-group row my-3">
      <label for="EndingDate" class="col-2 col-form-label text-center">Ending Date</label>
      <div class="col-10">
        <input class="form-control" type="date" value="2020-05-15" id="EndingDate">
      </div>
    </div>
    <div class="text-center ">
      <button type="button" @click="submitForm" class="btn btn-dark">Submit</button>
    </div>
  </form>
</div>
</template>

<script>
// import lineChart from './line-chart'

export default {
  name: "Form",
  components: {

  },
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