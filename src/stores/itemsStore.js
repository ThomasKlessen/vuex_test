import Vue from 'vue'

export default {
  name: 'items',
  state: {
    items: {},
    itemList: [],
    testObject: {
      name: 'Test me'
    }
  },
  mutations: {
    addItem (state, item) {
      state.itemList.push(item.id)
      Vue.set(state.items, item.id, item)
    },
    changeItemName (state, changeObject) {
      // Vue.set(state.items[changeObject.id], 'name', changeObject.name)

      state.items[changeObject.id].name = changeObject.name
    },
    changeTestObject (state, name) {
      state.testObject.name = name
    }
  },
  getters: {
    getItems (state) {
      return state.itemList.map((id) => state.items[id])
    },
    getRandomItemId (state) {
      return () => state.itemList[Math.floor(Math.random() * state.itemList.length)]
    },
    getTestObjectName (state) {
      return state.testObject.name
    }
  }
}
