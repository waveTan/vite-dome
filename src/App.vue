<template>
  <Header>
  </Header>
  <router-view>
  </router-view>
  <Bottom>
  </Bottom>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import Header from './components/Header.vue'
  import Bottom from './components/Bottom.vue'

  export default defineComponent({
    name: 'App',
    components: {
      Header, Bottom
    }
  })
</script>

<style>

</style>
