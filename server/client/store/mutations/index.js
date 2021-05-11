export default {
  changeName(state, { newName }){
    state.username = newName
  },
  changeUserName(state, username){
    state.username = username
  },
}