<template>
  <div>
    我是home
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    return {}
  },
}
</script>

<style lang="scss" scoped>
</style>