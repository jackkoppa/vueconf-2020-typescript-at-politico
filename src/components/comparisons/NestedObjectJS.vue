<script>
export default {
  name: 'NestedObjectJS',
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
