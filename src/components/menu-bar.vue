<template>
  <section class="smart-scroll">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-md navbar-dark">
        <a class="navbar-brand heading-black" href="#">
          Knight
        </a>
        <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                aria-label="Toggle navigation">
          <span data-feather="grid"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#" @click="openModal">Listing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link page-scroll" href="#blog">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
  <div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <Form></Form>
    </div>

  </div>
</template>

<script>
import Form from "@/components/Form";
export default {
name: "menuBar",
  components: {
  Form
  },
  methods: {
    openModal(event) {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      if (event.target == modal) {
        modal.style.display = "none";
      }
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }
  }
  }
</script>

<style scoped>
@import "../assets/default.css";
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
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>