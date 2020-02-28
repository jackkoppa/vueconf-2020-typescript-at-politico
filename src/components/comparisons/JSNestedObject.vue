<script>
export default {
  name: 'JSNestedObject',
  props: {
    nestedObj: { type: Object }
  },
  computed: {
    deeplyNestedProp() {
      return this.nestedObj.maybeThisProp.andHopefullyThis
    }
  }
}
</script>
