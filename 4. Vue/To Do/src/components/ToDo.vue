<template>
  <div id="to-do">
    <!-- Form's of adding todos -->
    <form id="new-todo" @submit.prevent="addNewTodo()">
      <label><input v-model="new_todo" type="text" placeholder="What do you need to do?" id="new-todo-name" form="new-todo"></label>
      <label><input type="date" placeholder="Deadline" v-model="new_todo_date" id="new-todo-date" form="new-todo"></label>
      <label><select v-model="new_todo_priority" id="new-todo-priority" form="new-todo">
        <option>!!!</option>
        <option>!!</option>
        <option>!</option>
        <option>none</option>
      </select></label>
      <button type="submit" name="button" id="add-button"><span>+</span></button>
    </form>

    <div class="filter-panel">
      <span>Choose</span>
      <button type="button" :class="{active: filter === 'all'}" @click="filter = 'all'" class="button button-large">ALL</button>
      <button type="button" :class="{active: filter === 'done'}" @click="filter = 'done'" class="button button-large">DONE</button>
      <button type="button" :class="{active: filter === 'active'}" @click="filter = 'active'" class="button button-large">ACTIVE</button>
      <button type="button" :class="{active: filter === '!!!'}" @click="filter = '!!!'" class="button button-small important">!!!</button>
      <button type="button" :class="{active: filter === '!!'}" @click="filter = '!!'" class="button button-small middle">!!</button>
      <button type="button" :class="{active: filter === '!'}" @click="filter = '!'" class="button button-small easy">!</button>
      <button type="button" :class="{active: filter === 'none'}" @click="filter = 'none'" class="button button-small">none</button>
      <button type="button" :class="{active: filter === 'date'}" @click="filter = 'date'" class="button button-large">DATE</button>
    </div>

    <div class="todos-panel" v-if="this.todos != null">
      <div class="todo" v-for="todo in todoFiltered()" :key="todo.id">
        <div class="todo-short">
          <label><input type="checkbox" v-model="todo.done" @click="show = (snow)"></label>
          <span class="block-card-short">{{todo.title}}</span>
          <button class="date" type="button">{{todo.date}}</button>
          <button class="priority" type="button">{{todo.priority}}</button>
          <button @click="removeNewTodo(todo)" class="remove" type="button"><span>x</span></button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AppBlockScreen",
  data() {
    return {
      new_todo: '',
      new_todo_date: '',
      new_todo_priority: '',
      filter: 'all',
      todos: []
    }
  },
  methods: {
    todoFiltered () {
      switch (this.filter) {
        case 'all': return this.todos;
        case 'active': return this.todos.filter(todo => !todo.done);
        case 'done': return this.todos.filter(todo => todo.done);
        case '!!!': return this.todos.filter(todo => todo.priority === this.filter);
        case '!!': return this.todos.filter(todo => todo.priority === this.filter);
        case '!': return this.todos.filter(todo => todo.priority === this.filter);
        case 'none': return this.todos.filter(todo => todo.priority === this.filter);
        case 'date': return this.todos.filter(todo => todo.date);
        default: return this.todos;
      }
    },
    addNewTodo() {
      let monthes = ["Jan", "Feb", "Mar", 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      if (this.new_todo && this.new_todo_date && this.new_todo_priority) {
        let str = this.new_todo_date;
        let date = Number(str[8] + str[9]) + " " + monthes[Number(str[5] + str[6])];
        this.todos.push({
          title: this.new_todo,
          date: date,
          priority: this.new_todo_priority,
          done: false
        });
        this.new_todo = '';
        this.new_todo_date = '';
        this.new_todo_priority = '';
      }
    },
    removeNewTodo(todo) {
      const todo_index = this.todos.indexOf(todo);
      this.todos.splice(todo_index, 1);
    }
  }
}
</script>

<style scoped>
#to-do {
  width: 1200px;
  height: 750px;
  background: #FFFFFF;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
#to-do form {
  width: 1100px;
  height: 198px;
  background: #8C74D0;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
#to-do form button#add-button {
  width: 200px;
  height: 30px;
  margin-left: 77px;
  background: #4AD991;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
}
#to-do form input#new-todo-name {
  width: 1010px;
  height: 50px;
  margin-left: 45px;
  margin-top: 42px;
  background: #FFF4E5;
  padding-left: 34px;
  font-family: 'Red Hat Display', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #8B8A8A;
}
#to-do form input#new-todo-date, #to-do form select#new-todo-priority {
  width: 330px;
  height: 50px;
  margin-top: 14px;
  background: #FFF4E5;
  padding-left: 34px;
  font-family: 'Red Hat Display', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  color: #8B8A8A;
}

#to-do form input#new-todo-date {
  margin-left: 45px;
}

#to-do form select#new-todo-priority {
  width: 245px;
  height: 56px;
  margin-left: 20px;
}
#to-do .filter-panel {
  width: 1100px;
  height: 50px;
  margin-left: 50px;
  margin-top: 25px;
  background:  #E4E1E1;
  border-radius: 5px 5px 0 0;
  padding-left: 45px;
  font-family: 'Red Hat Display', sans-serif;
}
#to-do .filter-panel span {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
}
#to-do button.button {
  height: 30px;
  margin-left: 23px;
  margin-top: 11px;
  background: #83C3FF;
  border-radius: 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  line-height: 19px;
  text-align: center;
  color: #E8E7FF;
  box-shadow: none;
}
#to-do button.button-large {
  width: 128px;
}
#to-do  button.button-small {
  width: 64px;
}
#to-do  button.important {
  color: #FF7285;
}
#to-do  button.easy {
  color: #24A464;
}
#to-do  button.middle {
  color: #FFCA83;
}
#to-do button.button:hover {
  cursor: pointer;
}
#to-do button.button:focus {
  background: #689cd0;
  outline: #8280FF;
}
#to-do .todos-panel {
  width: 1100px;
  height: 392px;
  margin-left: 50px;
  background: #F7F7F1;
  border: 1px solid #DBDADA;
  box-sizing: border-box;
  border-radius: 0 0 5px 5px;
  overflow: auto;
  overflow-x: hidden;
}
#to-do .todos-panel .todo-short {
  margin-top: 25px;
  width: 1038px;
  height: 54px;
  background: #83C3FF;
  font-style: normal;
  font-weight: bold;
  margin-left: 33px;
}
#to-do .todos-panel input[type=checkbox] {
  width: 23px;
  height: 18px;
  margin-top: 18px;
  margin-left: 12px;
}
#to-do .todos-panel .block-card-short {
  margin-left: 27px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #ECEBFF;
}
#to-do .todos-panel .remove {
  float: right;
  width: 40px;
  height: 30px;
  margin-right: 12px;
  margin-top: 11px;
  background: #FF7285;
  border-radius: 5px;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: #E8E7FF;
  justify-content: space-around;
}
#to-do .todos-panel .date {
  float: right;
  margin-right: 26px;
  margin-top: 11px;
  font-size: 16px;
  line-height: 21px;
  color: #DAF7E8;
  width: 92px;
  height: 30px;
  background: #4AD991;
  border-radius: 5px;
}
#to-do .todos-panel .priority {
  float: right;
  width: 30px;
  height: 30px;
  margin-left: 26px;
  background: #FFCA83;
  border-radius: 5px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #FFF4E5;
}
</style>
