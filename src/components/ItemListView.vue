<template>
  <v-card>
    <v-list two-line>
      <template v-for="item in getItems">
        <v-subheader v-text="item.name"></v-subheader>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'ItemListView',
    props: ['user'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js PWA'
      }
    },
    computed: {
      getItems () {
        let items = this.$store.getters['getItems']
        return items.filter((item) => item.userId === this.$props.user.id)
      }
    }
  }
</script>
