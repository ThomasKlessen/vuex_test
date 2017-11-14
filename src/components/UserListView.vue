<template>
  <v-list>
    <template v-for="user in getUsers">
      <v-subheader v-text="user.name"></v-subheader>
      <item-list-view
        :user="user"
      ></item-list-view>
    </template>
  </v-list>
</template>

<script>
import ItemListView from './ItemListView.vue'

export default {
  components: {ItemListView},
  name: 'UserListView',
  computed: {
    getUsers () {
      return this.$store.getters['getUsers']
    }
  }
}
</script>
