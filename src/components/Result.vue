<template>
  <div class="results">
    <div class="tip">
      <div class="texts">
        <p>Tip Amount</p>
        <p>/ person</p>
      </div>
      <p class="quantity">${{ getTipAmountByPerson }}</p>
    </div>
    <div class="total">
      <div class="texts">
        <p>Total</p>
        <p>/ person</p>
      </div>
      <p class="quantity">${{ getTotalByPerson }}</p>
    </div>
  </div>
  <button
      class="button button--cyan button--block button--uppercase"
      @click="reset"
      :disabled="isEmptyState"
  >Reset</button>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: "Result",
  computed: {
    ...mapGetters(['getTipAmountByPerson', 'getTotalByPerson', 'isEmptyState'])
  },
  methods: {
    ...mapMutations(['resetState']),
    reset() {
      this.resetState()
    }
  }
}
</script>

<style lang="scss" scoped>
.tip, .total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  @include for-desktop {
    margin-bottom: 2rem;
  }
  & .quantity {
    color: $strong-cyan;
    font-size: 3rem;
    font-weight: bold;
  }
}
.texts p {
  margin: 0;
  font-weight: bold;
  &:first-child {
    color: $white;
  }
  &:last-child {
    color: $darker-grayish-cyan;
  }
}
</style>