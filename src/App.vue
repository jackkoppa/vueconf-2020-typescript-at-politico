<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App'
})
</script>

<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">Intro</router-link> |
      <router-link to="/comparisons">JS Pain Points &amp; TS Wins </router-link> |
      <router-link to="/codegen">Tools: Type-Safe API Codegen</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app,
button {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  border: none;
  cursor: pointer;
}

.nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
