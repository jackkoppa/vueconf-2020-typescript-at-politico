<script lang="ts">
import Vue from 'vue'
import { candidateApi } from '@/api'
import { Candidate } from '@/api/candidate'

export default Vue.extend({
  name: 'TSSimpleData',
  data () {
    return { candidates: [] as Candidate[] }
  },
  async created () {
    const response = await candidateApi.getCandidates()
    this.candidates = response.data
  }
})
</script>

<template>
    <div>
      <section v-for="candidate in candidates" :key="candidate.id" class="candidate">
        <span>{{ candidate.firstName }} {{ candidate.lastName }}</span>
      </section>
    </div>
</template>

<style scoped lang="scss">
.candidate {
  margin-right: 10px;
}
</style>
