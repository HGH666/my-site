import { getSetting } from "@/api/options";

export default {
  namespaced: true,
  state:{
    comOptions: null
  },
  mutations:{
    SET_COMOPTIONS(state,value){
      state.comOptions = value
    },
  },
  actions: {
    async set_comOptions(state){
      const res = await getSetting()
      state.commit('SET_COMSTATE', res)
    }
  }
}