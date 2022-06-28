import { defineNuxtModule, addPlugin } from '@nuxt/kit'
import { resolve } from 'pathe'

export default defineNuxtModule({
  setup(moduleOptions, nuxt) {
    addPlugin(resolve(__dirname, 'plugin.js'))
  }
})
