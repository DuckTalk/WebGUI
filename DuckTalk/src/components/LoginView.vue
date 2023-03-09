<template>
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="handleSubmit">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
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
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #333;
    font-family: Arial, sans-serif;
  }
  
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  
  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  input[type="email"],
  input[type="password"] {
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 1.2rem;
  }
  
  button[type="submit"] {
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    background-color: #0077cc;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  
  button[type="submit"]:hover {
    background-color: #005fa3;
  }
  </style>
  