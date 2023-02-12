import { createStore } from "vuex";
import { IRootState } from "./types";

const store = createStore<IRootState>({
  state() {
    return {
      name: "coderycs",
    };
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {},
});

export default store;
