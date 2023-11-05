import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { fileURLToPath, URL } from 'node:url'
import Unocss from 'unocss/vite'

// unocss
// import presetUno from '@unocss/preset-uno'
import { presetUno, presetAttributify, presetIcons } from "unocss";

//svg
import path from 'path'
function resolve(dir) {
  return path.join(__dirname, dir)
}
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [resolve("src/assets/icon/svg")], // icon存放的目录
      symbolId: '[name]', // symbol的id
    }) ,
    Unocss({
    presets: [
    //  presetUno()
    presetUno(), presetAttributify(), presetIcons()
   ]
   }),
   vue()],
   resolve: {
  	// resolve.alias属性配置文件自定义路径。如下：设置‘@’代替‘./src’
    extensions: ['.js','.vue'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})

