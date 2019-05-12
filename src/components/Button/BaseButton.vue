<template>
  <component
    :is="tag"
    v-bind="handleBind"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'a'
    }
  },

  computed: {
    handleBind () {
      return {
        ...this.$attrs,
        class: `button ${this.$attrs.class ? this.$attrs : ''}`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "../../css/variables";

    .button {
        padding: ;
    }
</style>
