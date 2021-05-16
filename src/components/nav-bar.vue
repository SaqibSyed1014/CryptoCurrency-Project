<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ name }}</a>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ms-auto mx-5 my-3">
          <li class="nav-item dropdown px-3">
            <a class="nav-link dropdown-toggle text-white" href="#" data-bs-toggle="dropdown">  Listing Strategies  </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" @click="$emit('openmodal')"> BTC </a></li>
              <li><a class="dropdown-item" href="#" @click="$emit('openmodal')"> ETH </a></li>
              <li><a class="dropdown-item" href="#" @click="$emit('openmodal')"> EOS </a></li>
              <li><a class="dropdown-item" href="#" @click="$emit('openmodal')"> XPR </a></li>
            </ul>
          </li>
          <li class="nav-item px-3" v-if="isLoggedIn">
            <a class="nav-link text-white" href="#" @click="loggingOut">Log Out</a>
          </li>
          <li class="nav-item px-3" v-if="!isLoggedIn">
            <a class="nav-link text-white" href="#" @click="$emit('loginmodal')">Log In</a>
          </li>
          <li class="nav-item px-3" v-if="!isLoggedIn">
            <a class="nav-link text-white" href="#" @click="$emit('signupmodal')">Sign Up</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>

export default {
  name: "navBar",
  data(){
    return{
      name: '',
      login: true,
      logout: false
    }
  },
  computed: {
    isLoggedIn(){
      console.log('inside isloggedin')
      var localtoken=localStorage.getItem('token')
      console.log('local storage token', localtoken)
      if( localtoken != ''){
        console.log('in local token', localtoken)
        return this.$store.getters.isAutheticated;
      }
      else {
        return false
      }
    }
  },
  methods: {
    loggingOut(){
      this.$store.dispatch('logout')
      localStorage.removeItem('token')
      this.isLoggedIn = false
      location.reload()
    },
  }
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
ul .nav-item{
  font-size: 15pt;
}
</style>