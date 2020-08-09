<template>
  <van-popup
    v-model="visible"
    position="bottom"
  >
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="onConfirmDate"
    />
  </van-popup>
</template>

<script>
export default {
  name: 'DatePickerPopup',
  data() {
    return {
      visible: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date()
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    },
    onConfirmDate() {
      const endDate = new Date() // TODO 假裝end Date 選好了
      this.$emit('confirm-date', this.currentDate, endDate)
      this.toggle() // Close popup
    }
  }
}
</script>

<style scoped>

</style>
