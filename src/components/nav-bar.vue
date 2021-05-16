<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ms-auto mx-5">
          <li class="nav-item dropdown px-3">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">  Listing Strategies  </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="openModal"> BTC </a></li>
              <li><a class="dropdown-item" href="#" @click="openModal"> ETH </a></li>
              <li><a class="dropdown-item" href="#" @click="openModal"> EOS </a></li>
              <li><a class="dropdown-item" href="#" @click="openModal"> XPR </a></li>
            </ul>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#" @click="openLoginModal">Log In</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>

export default {
  name: "navBar",
  components: {

  },
  methods: {
    openModal() {
      this.$emit('openmodal')
    },
    openLoginModal(){
      this.$emit('loginmodal')
    }
  },

}
</script>

<style scoped>
.navbar .nav-item .dropdown-menu{
  display: none;
}
.navbar .nav-item:hover .dropdown-menu{
  display: block;
}
.navbar .nav-item .dropdown-menu{
  margin-top:0;
}
</style>