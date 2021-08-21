<template>
  <Title />
  <main class="main-container">
    asdasd
  </main>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    Title: defineAsyncComponent(() => import('@/components/Title'))
  }
}
</script>


<style lang="scss" scoped>
.main-container {
  background-color: $white;
  border-radius: 2rem 2rem 0 0;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
}
</style>
