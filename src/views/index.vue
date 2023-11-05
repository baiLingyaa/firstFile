<template>
  <main>
    <spread />
    <el-backtop :right="50" :bottom="50" />
  </main>
</template>

<script>
import spread from '@/components/spread/index.vue'
import { ElBacktop } from 'element-plus'
import 'element-plus/theme-chalk/el-backtop.css'
import 'element-plus/theme-chalk/base.css'

export default {
  name: 'HomeView',
  components: {
    hes,
    spread,
    design,
    ElBacktop
  }
}
</script>
