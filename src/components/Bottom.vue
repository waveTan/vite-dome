<template>
  <div class="bottom">
    <div class="info">
      bottom
    </div>
  </div>
</template>

<script lang="ts">
  import {ref, defineComponent} from 'vue'

  export default defineComponent({
    name: 'Bottom',
    props: {
      /* msg: {
         type: String,
         required: true
       }*/
    },
    setup: () => {
      const count = ref(0);
      return {count}
    }
  })
</script>

<style lang="scss">
  .bottom {
    width: 100%;
    height: 20px;
    border-color: #c1c1c1;
    position: fixed;
    bottom: 0;
    .info {
      width: 80%;
      background-color: #909090;
      text-align: center;
    }
  }
</style>
