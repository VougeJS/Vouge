<template>
  <component
    :is="as"
    v-bind="handleBind"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
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
    }
</style>
