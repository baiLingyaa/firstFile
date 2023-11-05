<template>
  <!-- :fill="props.color" :width="width" :height="height" -->
  <svg :class="svgClass" aria-hidden="true" class="svg-icon" >
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  iconName: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: ''
  },
  // size: {
  //   type: String,
  //   default: '1em'
  // },
  // width: {
  //   type: String
  // },
  // height: {
  //   type: String
  // },
  // color: {
  //   type: String,
  //   default: 'currentColor'
  // }
})
const symbolId = computed(() => `#${props.iconName}`)
     
const svgClass = computed(() => {
  if (props.className) {
    return 'svg-icon ' + props.className
  } else {
    return 'svg-icon'
  }
})
// const width = computed(() => (props.width ? props.width : props.size))
// const height = computed(() => (props.height ? props.height : props.size))
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>