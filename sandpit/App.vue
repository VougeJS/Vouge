<template>
  <div>
    <base-button @click="handleClick">
      Blah
    </base-button>
  </div>
</template>

<script>
import BaseButton from '../src/components/Button/BaseButton.vue'

export default {
  components: {
    BaseButton
  },

  methods: {
    handleClick () {
      console.log('test')
    }
  }
}
</script>
