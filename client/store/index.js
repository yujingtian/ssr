import Vuex from "vuex"

import state from "./states/index"
import actions from "./actions/index"
import getters from "./getters/index"
import mutations from "./mutations/index"


export default () => {
  return new Vuex.Store({
    state,
    actions,
    getters,
    mutations
  })
}