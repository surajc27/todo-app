<template>
  <div id="app" class="main-app">
    <!-- Use of Element-ui Switch component -->
    <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" @change="darkMode"></el-switch>
    <!-- Use of props for comunicating between components -->
    <HelloWorld msg="Welcome to Todo App" />
    <List />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  data() {
    return {
      value: false,
      stateValue: "InActive"
    };
  },
  components: {
    HelloWorld,
    List
  },
  methods: {
    darkMode(value) {
      if (value) {
        document
          .getElementsByClassName("main-app")[0]
          .classList.add("dark-mode-on");
        this.stateValue = "Active";
      } else {
        document
          .getElementsByClassName("main-app")[0]
          .classList.remove("dark-mode-on");
        this.stateValue = "InActive";
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
// Use of scss
.dark-mode-on {
  background: #1f2125 !important;
  input {
    background: #1f2125;
    border-color: #555;
  }
  .text,
  h1 {
    color: white;
  }
}
</style>
