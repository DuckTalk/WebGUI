<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LoginView from './components/LoginView.vue'
import SignupView from './components/SignupView.vue';
import LandingView from './components/LandingView.vue';
</script>

<template>
  <div class="w-100 p-4 d-flex" >
    <div class="row mt-4 pt-4">
      <div class="col p-5 d-flex"> 
          <LoginView/>
      </div>
    </div>
  </div>
</template>