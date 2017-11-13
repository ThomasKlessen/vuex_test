<template>
  <v-card>
    <v-list>
      <template v-for="item in getItems">
        <h5 v-text="item.name"></h5>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    name: 'ItemListView',
    props: ['user'],
    computed: {
      getItems () {
        let items = this.$store.getters['getItems']
        return items.filter((item) => item.userId === this.$props.user.id)
      }
    }
  }
</script>
