<template>
    <div class="container">
      <h2 class="row">Login</h2>
      <form @submit.prevent="handleSubmit">
        <label class="row" for="email">Email:</label>
        <input class="row" type="email" id="email" v-model="email" required>
        <label class="row" for="password">Password:</label>
        <input class="row" type="password" id="password" v-model="password" required>
        <button class="row btn button bg-secondary" type="submit" >Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      handleSubmit() {
        // Do something with email and password values
        console.log(`Email: ${this.email}, Password: ${this.password}`);
      }
    }
  };
  </script>
