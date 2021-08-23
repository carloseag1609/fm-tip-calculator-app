<template>
  <div class="form-section">
    <div class="form-section__labels">
      <label class="form-section__label">Bill</label>
      <span class="form-section__error" v-if="error">Can't be zero</span>
    </div>
    <div class="form-group">
      <img class="form-group__icon" src="@/assets/icon-dollar.svg" alt="Icon dollar">
      <input class="form-group__input" :class="error && 'form-group__input--error'" type="number" min="0" v-model="bill">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "SelectBill",
  data() {
    return {
      bill: 0,
      error: false
    }
  },
  methods: {
    ...mapMutations(['setBill'])
  },
  watch: {
    bill(value) {
      if(Number(value) <= 0) {
        this.error = true
      } else {
        this.error = false
        this.setBill(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>