<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <h1>Welcome to Balloon Krewe</h1>
          <RouterLink to="/">Events</RouterLink> |
          <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?&family=Wix+Madefor+Display:wght@400..800&display=swap');

#layout {
  font-family: Wix Madefor Display, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
