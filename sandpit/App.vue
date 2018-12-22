<template>
  <div>
    <HelloComponent name="Vouge" />
    <img
      src="http://localhost:8080/assets/vouge_80px.png"
      alt=""
    >
  </div>
</template>

<script>
import HelloComponent from '@/components/HelloComponent.vue'

export default {
  components: {
    HelloComponent
  }
}
</script>
