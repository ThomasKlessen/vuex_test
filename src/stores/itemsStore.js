export default {
  name: 'items',
  state: {
    items: {},
    itemList: []
  },
  mutations: {
    addItem (state, item) {
      state.itemList.push(item.id)
      state.items[item.id] = item
    },
    changeItemName (state, changeObject) {
      // Vue.set(state.items[changeObject.id], 'name', changeObject.name)

      state.items[changeObject.id].name = changeObject.name
    }
  },
  getters: {
    getItems (state) {
      return state.itemList.map((id) => state.items[id])
    },
    getRandomItemId (state) {
      return () => state.itemList[Math.floor(Math.random() * state.itemList.length)]
    }
  }
}
