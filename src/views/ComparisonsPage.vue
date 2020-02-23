<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CodegenPaage'
})
</script>

<template>
  <div>
      <div class="nav">
        <router-link to="/comparisons">Intro</router-link> |
        <router-link to="/comparisons/simple-data">Simple Data Retrieval</router-link>
    </div>
    <router-view/>
  </div>
</template>
