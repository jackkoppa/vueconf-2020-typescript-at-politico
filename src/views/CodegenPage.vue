<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CodegenPaage'
})
</script>

<template>
  <div>
      <div class="nav">
        <router-link to="/codegen">Intro</router-link> |
        <router-link to="/codegen/movies">External API: NY Times Movie Reviews</router-link> |
        <router-link to="/codegen/candidates">Custom API: Mock Presidential Candidate</router-link>
    </div>
    <router-view/>
  </div>
</template>
