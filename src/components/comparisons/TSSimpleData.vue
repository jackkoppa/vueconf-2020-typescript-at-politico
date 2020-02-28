<script lang="ts">
import Vue from 'vue'
import { candidateApi } from '@/api'
import { Candidate, CandidatePartyEnum } from '@/api/candidate'

export default Vue.extend({
  name: 'TSSimpleData',
  data() {
    return { candidates: [] as Candidate[] }
  },
  computed: {
    democrats(): Candidate[] {
      return this.candidates
        .filter(candidate => candidate.party === CandidatePartyEnum.DEMOCRAT)
    }
  },
  async created() {
    const response = await candidateApi.getCandidates()
    this.candidates = response.data
  }
})
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
