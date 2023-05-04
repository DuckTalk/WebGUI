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
          <div class="field has-addons">
            <div class="control is-expanded">
              <input v-if="showPassword" type="text" class="form-control" id="password" v-model="password" required>
              <input v-else type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <div class="control">
              <button class="button" @click="toggleShow"><span class="icon is-small is-right">
                <i class="fas" :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"></i>
              </span>
              </button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="confirm_password">Confirm Password:</label>
          <input type="password" class="form-control" id="confirm_password" v-model="confirm_password" required>
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
        password: '',
        confirm_password: '',
        showPassword: false,
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
      },
      toggleShow() {
        this.showPassword = !this.showPassword;
      },
    },
    computed: {
      buttonLabel() {
        return (this.showPassword) ? "Hide" : "Show";
      },
    },
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
  