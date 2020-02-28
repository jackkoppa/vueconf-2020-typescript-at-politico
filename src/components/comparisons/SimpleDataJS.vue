<script>
import axios from 'axios'

export default {
  name: 'SimpleDataJS',
  data() {
    return { candidates: [] }
  },
  computed: {
    democrats() {
      return this.candidates
        .filter(candidate => candidate.party === 'DEMOCRAT')
    }
  },
  async created() {
    const response = await axios.get('https://vueconf-2020-ts-api-demo.herokuapp.com/candidates')
    this.candidates = response.data
  }
}
</script>

<template>
    <div>
      <section v-for="candidate in democrats" :key="candidate.id" class="candidate">
        <span>{{ candidate.firstName }} {{ candidate.lastName }}</span>
      </section>
    </div>
</template>

<style scoped lang="scss">
.candidate {
  margin-right: 10px;
}
</style>
