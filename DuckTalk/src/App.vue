<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LoginView from './components/LoginView.vue'
import SignupView from './components/SignupView.vue';
</script>

<template>
  <div class="w-100 p-4 d-flex align-items-center justify-content-center" >
    <div class="row mt-4 pt-4">
      <div class="col">
        <img class="d-block mx-auto" alt="DuckTalk Logo" src="./assets/besticon.png" width="250" height="250" />
        <img class="d-block mx-auto" alt="DuckTalk Titel" src="./assets/ducktalk2.png" />
      </div>
      <div class="col p-5 d-flex align-items-center"> 
          <SignupView />
      </div>
    </div>
  </div>
</template>