<template>
  <v-layout>
    <v-btn v-on:click="addUser">Add User</v-btn>
    <v-btn v-on:click="addItem">Add Item</v-btn>
    <v-btn v-on:click="changeItemName">Change Item Name</v-btn>
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
        let userId = this.$store.getters['getRandomUserId']()
        this.$store.commit('addItem', {
          id: id,
          userId: userId,
          name: 'Item ' + id + ' - ' + userId
        })
      },
      changeItemName () {
        let itemId = this.$store.getters['getRandomItemId']()
        this.$store.commit('changeItemName', {
          id: itemId,
          name: 'Yippy'
        })
      }
    }
  }
</script>
