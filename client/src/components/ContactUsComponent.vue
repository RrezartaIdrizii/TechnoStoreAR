
<template>
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }">
    <br>
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-whitee">
              Work with an amazing <span class="text-whitee" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>team</h1>
              <h1>store</h1>
              <h1>tool</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8"><b>
              We're constantly trying to express ourselves and actualize our
              dreams. If you have the opportunity to play this game
            </b></p>
            <br>
            <br>
            <button type="submit" class="btn bg-white text-dark"><a href="http://localhost:8080/register" style="color: white;">
              Create Account
            </a></button>
            <br>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <div class="container">
    <h1>Contact Us</h1>
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" rows="5" v-model="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  </div>
</template>


<script setup>
import { onMounted, onUnmounted } from "vue";
import bg0 from "@/assets/image3.jpg";
import Typed from "typed.js";
const body = document.getElementsByTagName("body")[0];

onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    async submitForm() {
      const response = await fetch('/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message
        })
      });
      const responseData = await response.text();
      console.log(responseData);
    }
  }
}
</script>


<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  text-align: center;
}

.contact-form {
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0069d9;
}
.text-whitee {
  color:#fff !important;
}
</style>