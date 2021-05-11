<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="home">home</el-menu-item>
      <el-menu-item index="assets">assets</el-menu-item>
      <el-menu-item index="other2"><a href="https://www.ele.me" target="_blank">other2</a></el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
  import {ref, defineComponent} from 'vue'

  export default defineComponent({
    name: 'Header',
    props: {
      /*msg: {
        type: String,
        required: true
      }*/
    },
    setup: () => {
      const count = ref(0);
      return {count}
    },
    data() {
      return {
        activeIndex: 'home',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if (key !== 'other2') {
          this.$router.push({
            name: key
          })
        }
      }
    }
  })
</script>

<style scoped>

</style>
