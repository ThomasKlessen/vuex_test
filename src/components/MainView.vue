<template>
  <v-card>
    <v-list two-line>
      <template v-for="user in getUsers">
        <v-subheader v-text="user.name"></v-subheader>
        <item-list-view
          :user="user"
        ></item-list-view>
      </template>
    </v-list>
  </v-card>
</template>

<script>
import ItemListView from './ItemListView.vue'

export default {
  components: {ItemListView},
  name: 'MainView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  computed: {
    getUsers () {
      return this.$store.getters['getUsers']
    }
  }
}
</script>
