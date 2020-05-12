<template>
  <div class="list">
    <!-- Use of Element-ui for UI designing components -->
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="6">
            <el-input placeholder="Enter New todos" v-model="newTodo" clearable></el-input>
          </el-col>
          <el-col :span="2">
            <el-button @click="createNewTodo">Add Todo</el-button>
          </el-col>
          <el-col :span="12">
            <el-row v-for="todo in todoList" :key="todo.id" class="row-bg" justify="start">
              <!-- Use of Filter for text transformation -->
              <el-col :span="20" class="text" :class="{done : todo.done}">{{todo.text | upperCase}}</el-col>
              <el-col :span="2">
                <el-button type="success" icon="el-icon-check" circle @click="checkTodo(todo.id)"></el-button>
              </el-col>
              <el-col :span="1">
                <el-button type="danger" icon="el-icon-delete" circle @click="deleteTodo(todo.id)"></el-button>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "List",
  data() {
    return {
      newTodo: ""
    };
  },
  computed: {
    ...mapGetters({
      // Use of Getter for getting store data
      todoList: "getTodoList"
    })
  },
  filters: {
    upperCase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  methods: {
    createNewTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }
      this.$store.dispatch("addTodo", { newTodo: this.newTodo });
      this.newTodo = "";
    },
    checkTodo(id) {
      this.$store.dispatch("checkTodo", { id: id });
    },
    deleteTodo(id) {
      // Use of Element-ui message-box component for warning popup
      this.$confirm(
        "This will permanently delete the todo. Continue?",
        "Warning",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      )
        .then(() => {
          this.$store.dispatch("deleteTodo", { id: id });
          this.$message({
            type: "success",
            message: "Delete completed"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled"
          });
        });
    }
  }
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.text.done {
  text-decoration: line-through;
}
.row-bg {
  padding: 3px 5px;
  border-bottom: 1px solid #42b983;
}
</style>
