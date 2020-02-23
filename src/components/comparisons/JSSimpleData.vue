<script>
import axios from 'axios'

export default {
  name: 'JSSimpleData',
  data () {
    return { candidates: [] }
  },
  async created () {
    const response = await axios.get('https://vueconf-2020-ts-api-demo.herokuapp.com/candidates')
    this.candidates = response.data
  }

}
</script>

<template>
    <div>
      <section v-for="candidate in candidates" :key="candidate.id">
        <h3>{{ candidate.firstName }} {{ candidate.lastName }}</h3>
      </section>
    </div>
</template>

<style scoped lang="scss">
</style>
