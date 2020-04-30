import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    percent: 10,
    timerIdP: 0,
    testNum: 10,
  },
  mutations: {
    _playM(state) {
      state.percent = state.percent-0.2<=0 ? 0 : parseFloat((state.percent-0.2).toFixed(2))
      console.log(state.percent)
    },
    _freshM(state) {
      state.percent = 10
    }
  },
  actions: {
    _playA(context) {
      context.state.timerIdP = setInterval(() => {
        if(context.state.percent <= 0){
          clearInterval(context.state.timerIdP)
        }else context.commit("_playM")
      }, 200)
    }
  }
})