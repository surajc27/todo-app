import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    addNewTodo (state, data) {
      state.todoList.push({
        text: data.newTodo,
        done: false,
        id: state.todoList.length === 0 ? 1 : state.todoList.length + 1
      });
    },
    checkTodo (state, data) {
      state.todoList.map(item => {
        item.id === data.id ? item.done = true : item.done = item.done;
        return item;
      });
    },
    deleteTodo (state, data) {
      state.todoList = state.todoList.filter(item => item.id !== data.id);
    }
  },
  actions: {
    addTodo ({ commit }, data) {
      commit('addNewTodo', data);
    },
    checkTodo ({ commit }, data) {
      commit('checkTodo', data);
    },
    deleteTodo ({ commit }, data) {
      commit('deleteTodo', data);
    }
  },
  modules: {},
  getters: {
    getTodoList: state => {
      return state.todoList;
    }
  }
});
