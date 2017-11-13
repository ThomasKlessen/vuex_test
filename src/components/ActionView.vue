<template>
  <v-layout>
    <v-btn v-on:click="addUser">User hinzufügen</v-btn>
    <v-btn v-on:click="addItem">Item hinzufügen</v-btn>
  </v-layout>
</template>

<script>
  export default {
    name: 'ActionView',
    methods: {
      addUser () {
        let id = Math.floor(Math.random() * 10000)
        this.$store.commit('addUser', {
          id: id,
          name: 'User ' + id
        })
      },
      addItem () {
        let id = Math.floor(Math.random() * 10000)
        let userId = this.$store.getters.getRandomUserId
        this.$store.commit('addItem', {
          id: id,
          userId: userId,
          name: 'Item ' + id
        })
      }
    }
  }
</script>
