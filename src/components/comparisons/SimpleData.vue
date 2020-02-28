<script lang="ts">
import Vue from 'vue'

import JSSimpleData from './JSSimpleData.vue'
import TSSimpleData from './TSSimpleData.vue'

const githubDirectoryUrl = 'https://github.com/jackkoppa/vueconf-2020-typescript-at-politico/blob/master/src/components/comparisons'

const links = {
  js: `${githubDirectoryUrl}/JSSimpleData.vue`,
  ts: `${githubDirectoryUrl}/TSSimpleData.vue`
}

export default Vue.extend({
  name: 'SimpleData',
  components: {
    JSSimpleData,
    TSSimpleData
  },
  data() { return { links } }
})
</script>

<template>
    <div>
        <h2>JavaScript Component (<a :href="links.js">View Code</a>)</h2>
        <JSSimpleData />
        <br/>
        <hr>
        <br/>
        <h2>TypeScript Component (<a :href="links.ts">View Code</a>)</h2>
        <TSSimpleData />
    </div>
</template>
