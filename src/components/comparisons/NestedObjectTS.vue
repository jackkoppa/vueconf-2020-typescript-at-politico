<script lang="ts">
import Vue from 'vue'
import { Movie } from '@/api/timesmovies'

export default Vue.extend({
  name: 'NestedObjectTS',
  props: {
    nestedObj: { type: Object as () => Movie }
  },
  computed: {
    deeplyNestedProp(): string {
      return this.nestedObj.link?.type ?? ''
    }
  }
})
</script>
