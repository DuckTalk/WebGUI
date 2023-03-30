<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LoginView from './components/LoginView.vue'
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <img class="d-block mx-auto" alt="DuckTalk Logo" src="./assets/besticon.png" width="250" height="250" />
        <img class="d-block mx-auto" alt="DuckTalk Titel" src="./assets/ducktalk2.png" />
      </div>
      <div class="col"> 
          <LoginView />
      </div>
    </div>
  </div>
</template>