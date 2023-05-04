<template>
  <div class="container">
    <h2 class="row">Login</h2>
    <form @submit.prevent="handleSubmit">
      <label class="row" for="email">Email:</label>
      <input class="row" type="email" id="email" v-model="email" required>
      <label class="row" for="password">Password:</label>
      <input class="row" type="password" id="password" v-model="password" required>
      <button class="row btn button bg-secondary" type="submit">Login</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      // Call the get_responds method when the form is submitted
      this.get_responds();
      
      // Do something with email and password values
      console.log(`Email: ${this.email}, Password: ${this.password}`);
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