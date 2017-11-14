<template>
  <v-layout>
    <v-btn v-on:click="createData">Create Data</v-btn>
    <v-btn v-on:click="addUser">Add User</v-btn>
    <v-btn v-on:click="addItem">Add Item</v-btn>
    <v-btn v-on:click="changeItemName">Change Item Name</v-btn>
    {{testObjectName}}
  </v-layout>
</template>

<script>
  export default {
    name: 'ActionView',
    computed: {
      testObjectName () {
        return this.$store.getters['getTestObjectName']
      }
    },
    methods: {
      createData () {
        for (let i = 0; i < 6; i++) {
          let id = Math.floor(Math.random() * 10000)
          this.$store.commit('addUser', {
            id: id,
            name: 'User ' + id
          })
        }
        for (let i = 0; i < 16; i++) {
          let id = Math.floor(Math.random() * 10000)
          let userId = this.$store.getters['getRandomUserId']()
          this.$store.commit('addItem', {
            id: id,
            userId: userId,
            name: 'Item ' + id + ' - ' + userId
          })
        }
      },
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
        this.$store.commit('changeTestObject', 'Jippy')
      }
    }
  }
</script>
