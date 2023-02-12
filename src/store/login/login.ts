import { Module } from "vuex";
import { ILoginState } from "./types";
import { IRootState } from "../types";

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
    };
  },
  getters: {},
  mutations: {},
  actions: {},
};

export default loginModule;
