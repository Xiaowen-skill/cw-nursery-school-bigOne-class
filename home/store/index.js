import Vue from "vue";
import Vuex from "vuex";
// 模块
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
	  user
  }
});