<script lang="ts">
import Vue from 'vue'

import SimpleDataJS from './SimpleDataJS.vue'
import SimpleDataTS from './SimpleDataTS.vue'

const githubDirectoryUrl = 'https://github.com/jackkoppa/vueconf-2020-typescript-at-politico/blob/master/src/components/comparisons'

const links = {
  js: `${githubDirectoryUrl}/JSSimpleData.vue`,
  ts: `${githubDirectoryUrl}/TSSimpleData.vue`
}

export default Vue.extend({
  name: 'SimpleData',
  components: {
    SimpleDataJS,
    SimpleDataTS
  },
  data() { return { links } }
})
</script>

<template>
    <div>
        <h2>JavaScript Component (<a :href="links.js">View Code</a>)</h2>
        <SimpleDataJS />
        <br/>
        <hr>
        <br/>
        <h2>TypeScript Component (<a :href="links.ts">View Code</a>)</h2>
        <SimpleDataTS />
    </div>
</template>
