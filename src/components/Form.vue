<template>
<div>
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
</div>
</template>

<script>
export default {
  name: "Form"
}
</script>

<style scoped>
.col-form-label{
  color: black;
}
</style>