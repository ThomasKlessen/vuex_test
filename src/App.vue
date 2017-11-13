<template>
  <div id="app">
    <action-view></action-view>
    <router-view></router-view>
  </div>
</template>

<script>
import ActionView from './components/ActionView.vue'

export default {
  components: {ActionView},
  name: 'app'
}
</script>
