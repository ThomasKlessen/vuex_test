export default {
  name: 'users',
  state: {
    users: {},
    userList: []
  },
  mutations: {
    addUser (state, user) {
      state.userList.push(user.id)
      state.users[user.id] = user
    }
  },
  getters: {
    getUsers (state) {
      return state.userList.map((id) => state.users[id])
    },
    getRandomUserId (state) {
      return () => state.userList[Math.floor(Math.random() * state.userList.length)]
    }
  }
}
