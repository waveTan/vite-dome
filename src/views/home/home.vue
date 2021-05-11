<template>
  <div>
    home
  </div>
</template>

<script lang="ts">
  import {ref, defineComponent} from 'vue'

  export default defineComponent({
    name: 'Home',
    props: {},
    setup: () => {
      const count = ref(0);
      return {count}
    }
  })
</script>

<style scoped>

</style>
