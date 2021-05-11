<template>
  <div>
    assets
  </div>
</template>

<script lang="ts">
  import {ref, defineComponent} from 'vue'

  export default defineComponent({
    name: 'Assets',
    props: {},
    setup: () => {
      const count = ref(0);
      return {count}
    }
  })
</script>

<style scoped>

</style>
