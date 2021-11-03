<template>
    <v-slider
      step="1"
      v-model="level"
      color="#0b3341"
      :max="max"
      tick-size=10
      :tick-labels="ticksLabels"
    ></v-slider>
</template>

<script>
export default {
  props: [
    'max',
    'color',
  ]
}
</script>
