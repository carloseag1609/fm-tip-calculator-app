<template>
  <div class="form-section">
    <label class="form-section__label">Select Tip %</label>
    <div class="button-grid">
      <button
          v-for="(tip, i) in tips"
          :key="i"
          class="button"
          :class="selectedTip === tip && 'button--selected'"
          @click="selectTip(tip)"
      >{{ tip }}%</button>
      <input type="number" v-model="customTip" class="form-group__input" placeholder="Custom">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "SelectTip",
  data() {
    return {
      tips: [5, 10, 15, 25, 50],
      customTip: 'Custom',
      selectedTip: null
    }
  },
  methods: {
    ...mapMutations(['setTip']),
    selectTip(tip) {
      this.selectedTip = Number(tip)
      this.setTip(Number(tip))
    }
  }
}
</script>

<style lang="scss" scoped>
.button-grid {
  @include grid(2, 3, 1.5rem);
}
.input-custom {

}
</style>