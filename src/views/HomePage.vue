<script lang="ts">
import Vue from 'vue'

import Intro from '@/components/Intro.vue'

export default Vue.extend({
  name: 'HomePage',
  components: {
    Intro
  }
})
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Intro />
  </div>
</template>
