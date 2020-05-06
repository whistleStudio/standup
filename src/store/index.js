import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    percent: 100,
    timerIdP: 0,
    testNum: 10,
  },
  mutations: {
    _playM(state, ctd) {
      let ratio = 0.2/ctd*100
      state.percent = state.percent-ratio<=0 ? 0 : parseFloat((state.percent-ratio).toFixed(2))
      // console.log(state.percent)
    },
    _freshM(state) {
      state.percent = 100
    },
  },
  actions: {
    _playA(context, ctd) {
      context.state.timerIdP = setInterval(() => {
        if(context.state.percent <= 0){
          clearInterval(context.state.timerIdP)
        }else context.commit("_playM", ctd)
      }, 200)
    }
  }
})