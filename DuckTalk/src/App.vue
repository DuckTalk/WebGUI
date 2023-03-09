<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import LoginView from './components/LoginView.vue'
</script>

<template>
  <header>
    <img alt="DuckTalk Titel" class="logo" src="./assets/ducktalk2.png"/>
    <img alt="DuckTalk Logo" class="logo" src="./assets/besticon.png" width="300" height="300" />
  </header>

  <main>
    <LoginView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  font-size: xx-large;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.body{
  background-color: #333;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
