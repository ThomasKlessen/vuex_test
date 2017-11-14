<template>
  <div id="app">
    <action-view></action-view>
    <user-list-view></user-list-view>
  </div>
</template>

<script>
import ActionView from './components/ActionView.vue'
import UserListView from './components/UserListView.vue'

export default {
  components: {
    UserListView,
    ActionView
  },
  name: 'app'
}
</script>
