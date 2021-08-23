<template>
  <Title />
  <div class="main-container">
    <div class="selections-container">
      <SelectBill />
      <SelectTip />
      <SelectPeople />
    </div>
    <div class="results-container">
      <Result />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  components: {
    Title: defineAsyncComponent(() => import('./components/Title')),
    SelectBill: defineAsyncComponent(() => import('./components/SelectBill')),
    SelectTip: defineAsyncComponent(() => import('./components/SelectTip')),
    SelectPeople: defineAsyncComponent(() => import('./components/SelectPeople')),
    Result: defineAsyncComponent(() => import('./components/Result'))
  }
}
</script>


<style lang="scss" scoped>
.main-container {
  background-color: $white;
  border-radius: 2rem 2rem 0 0;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  @include for-desktop {
    border-radius: 2rem;
    flex-direction: row;
    gap: 3rem;
    margin: 0 auto;
    width: 70%;
    height: 55vh;
  }
}
.results-container {
  background-color: $very-dark-cyan;
  margin-top: 2rem;
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 1.8rem;
  @include for-desktop {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem;
  }
}
.selections-container, .results-container {
  @include for-desktop {
    margin-top: 0;
    width: 50%;
    height: 100%;
  }
}
</style>
