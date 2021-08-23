<template>
  <div class="form-section">
    <div class="form-section__labels">
      <label class="form-section__label">Number of people</label>
      <span class="form-section__error" v-if="error">Can't be zero</span>
    </div>
    <div class="form-group">
      <img class="form-group__icon" src="@/assets/icon-person.svg" alt="Icon person">
      <input class="form-group__input" :class="error && 'form-group__input--error'" type="number" min="0" v-model="people">
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "SelectPeople",
  data() {
    return {
      people: 0,
      error: false
    }
  },
  methods: {
    ...mapMutations(['setPeople']),
  },
  watch: {
    people(value) {
      if(Number(value) <= 0) {
        this.error = true
      } else {
        this.error = false
        this.setPeople(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>