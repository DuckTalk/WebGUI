<template>
    <div id="signup" class="border p-4">
      <h2 class="mb-4">Signup</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="confirm password">Confirm Password:</label>
          <input type="confirm password" class="form-control" id="confirm password" v-model="password" required>
        </div>
        <button class="btn btn-primary" type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        username: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Call the get_responds method when the form is submitted
        this.get_responds();
        
        // Do something with email, username, and password values
        console.log(`Email: ${this.email}, Username: ${this.username}, Password: ${this.password}`);
      },
      get_responds() {
        axios.get('/api/home')
          .then((response) => {
            console.log("Axios Response: ", response);
            console.log("Test");
          })
          .catch(function (error) {
            console.error("Axios Error", error);
          });
      }
    }
  };
  </script>

  <style>
  #signup {
    border: 1px !important;
    border-radius: 10px !important;
    border-color: grey !important;
    border-style: solid !important;
  }
  </style>