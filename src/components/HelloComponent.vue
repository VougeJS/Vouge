<template>
  <h1 class="SuperbElement">
    Hello {{ name }}
  </h1>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      require: true,
      default: 'World'
    }
  }
}
</script>

<style lang="scss" scoped>
$background-color: #6A7ACC;

.SuperbElement {
  padding: 1rem 2rem;
  color: white;
  background-color: $background-color;
  border-radius: 30px;
}
</style>
