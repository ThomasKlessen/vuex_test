export default {
  name: 'items',
  state: {
    items: {
      1: {
        id: 1,
        userId: 1,
        name: 'Item 1'
      }
    },
    itemList: [1]
  },
  mutations: {
    addItem (state, item) {
      state.itemList.push(item.id)
      state.items[item.id] = item
    }
  },
  getters: {
    getItems (state) {
      return state.itemList.map((id) => state.items[id])
    }
  }
}
