import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// In production code or large applications this code will be modularied.Actions,Mutations,Getter,State will be in separate files.
export default new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    // Changes to state should be only in mutations
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
  getters: {
    // Use of getter for getting data to components
    getTodoList: state => {
      return state.todoList;
    }
  }
});
