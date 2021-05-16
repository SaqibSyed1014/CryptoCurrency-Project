<template>
<div class="main-wrapper">
  <div class="menu">
    <nav-bar @openmodal="openModal" @loginmodal="openLoginModal"/>
  </div>
  <div class="body-wrapper">
    <background-video/>
    <div class="content-body text-center my-3">
      <content-headings class="my-5"/>
      <btn/>
      <social-icons/>
    </div>
  </div>
  <simple-footer/>

  <div id="myModal" class="modal" >

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal2">&times;</span>
      <Form @closing="closeModal"></Form>
    </div>

  </div>

  <div id="myModal2" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeSecondModal">&times;</span>
      <line-chart id="chart" v-if="loaded"></line-chart>
    </div>

  </div>

  <div id="myLoginModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeLoginModal">&times;</span>
      <login-form/>
    </div>
  </div>

</div>
</template>

<script>
import Form from "@/components/Form";
import lineChart from "@/components/line-chart";
import navBar from './components/nav-bar'
import backgroundVideo from './components/background-video'
import contentHeadings from './components/content-headings'
import btn from './components/btn'
import socialIcons from './components/social-icons'
import simpleFooter from './components/simple-footer'
import loginForm from './components/login-form'

export default {
  name: 'App',
  components: {
    navBar,
    backgroundVideo,
    contentHeadings,
    btn,
    socialIcons,
    simpleFooter,
    lineChart,
    Form,
    loginForm
  },
  data(){
    return{
      loaded : false,
      chartData: {},
      dataOptions: {},
    }
  },
  methods: {
    openModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    openLoginModal(){
      var login = document.getElementById("myLoginModal")
      login.style.display = "block"
    },
    closeLoginModal(){
      var login = document.getElementById("myLoginModal")
      login.style.display = "none"
    },
    closeModal2(){
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      this.loaded = !this.loaded
      console.log('loaded is now: ', this.loaded)
      if(this.loaded === false){
        this.loaded = true
      }
      var modal2 = document.getElementById("myModal2");
      modal2.style.display = "block";
    },
    closeSecondModal(){
      var modal2 = document.getElementById("myModal2");
      modal2.style.display = "none";
    }
  }
}
</script>

<style scoped>
.body-wrapper{
  position: relative;
}
.content-body{
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
}
@media screen and (max-width: 1120px) {
  .content-body{

  }
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 111; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.7); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 30px;
  font-weight: bold;
  width: min-content;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
