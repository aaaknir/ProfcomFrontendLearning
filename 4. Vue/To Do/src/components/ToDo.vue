<template>
    <div id="to-do">
        <form id="new-todo">
            <b-field><b-input placeholder="Название задачи" id="new-todo-name" v-model="new_todo" form="new-todo"></b-input></b-field>
            <b-field><b-datepicker placeholder="Дедлайн" icon="calendar-today" editable v-model="new_todo_date" id="new-todo-date" form="new-todo"></b-datepicker></b-field>
            <b-field><b-select placeholder="Приоритетность" v-model="new_todo_priority" id="new-todo-priority" form="new-todo">
                <option>!!!</option>
                <option>!!</option>
                <option>!</option>
                <option>none</option>
            </b-select></b-field>
            <div class="buttons">
                <b-button @click="addNewTodo" type="is-success" name="button" id="add-button" outlined>Добавить</b-button>
            </div>
        </form>

        <div class="filter-panel">
            <button type="button" :class="{active: filter === 'all'}" @click="filter = 'all'" class="button button-large start">ALL</button>
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
                    <button @click="removeNewTodo(todo)" class="remove" type="button"><span>x</span></button>
                    <button class="priority" type="button">{{todo.priority}}</button>
                    <button class="date" type="button">{{todo.date}}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toDo",
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
                if (this.new_todo && this.new_todo_date && this.new_todo_priority) {
                    this.todos.push({
                        title: this.new_todo,
                        date: this.new_todo_date,
                        priority: this.new_todo_priority,
                        done: false
                    });
                    this.new_todo = '';
                    this.new_todo_date = '';
                    this.new_todo_priority = '';
                } else {
                    this.$buefy.dialog.alert('Необходимо заполнить все поля!');
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
    #to-do form {
        width: 1100px;
        height: 198px;
        background: #8C74D0;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        padding-left: 45px;
        padding-top: 42px;
        margin-left: 50px;
    }
    div.field div.is-clearfix {
        width: 1010px;
        height: 50px;
    }
    div.field div.datepicker {
        width: 330px;
        height: 50px;
    }
    #to-do .filter-panel {
        width: 1100px;
        height: 50px;
        margin-top: 25px;
        background:  #FFFFFF;
        border-radius: 5px 5px 0 0;
        padding-left: 45px;
        margin-left: 50px;
    }
    #to-do .filter-panel button.button {
        height: 30px;
        margin-left: 20px;
        margin-top: 11px;
        border-color: #7957d5;
        border-radius: 5px;
        font-weight: bold;
        font-size: 14px;
        outline: none;
        line-height: 19px;
        color: #7957d5;
        background: #f8f8ff;
        box-shadow: none;
    }
    #to-do .filter-panel button.button-large {
        width: 128px;
    }
    #to-do  .filter-panel button.button-small {
        width: 64px;
    }
    #to-do  .filter-panel button.important {
        color: #FF7285;
    }
    #to-do  .filter-panel button.easy {
        color: #24A464;
    }
    #to-do  .filter-panel button.middle {
        color: #FFCA83;
    }
    #to-do .filter-panel button.button:hover {
        cursor: pointer;
    }
    #to-do .filter-panel button.button:focus {
        background: #7957d5;
        outline: transparent;
        color: #F8F8FF;
    }
    #to-do .todos-panel {
        width: 1100px;
        height: 392px;
        background: #F7F7F1;
        border: 1px solid #DBDADA;
        box-sizing: border-box;
        border-radius: 0 0 5px 5px;
        overflow: auto;
        overflow-x: hidden;
        margin-left: 50px;
    }
    #to-do .todos-panel .todo-short {
        margin-top: 25px;
        width: 1038px;
        height: 54px;
        border: 1px solid #7957d5;
        font-weight: bold;
        margin-left: 33px;
        background: white;
    }
    #to-do .todos-panel input[type=checkbox] {
        width: 23px;
        height: 18px;
        margin-top: 18px;
    }
    #to-do .todos-panel .block-card-short {
        margin-left: 27px;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 21px;
        color: #7957d5;
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
        margin-right: 12px;
        margin-top: 11px;
        font-size: 16px;
        line-height: 21px;
        color: #DAF7E8;
        width: 200px;
        height: 30px;
        background: #4AD991;
        border-radius: 5px;
    }
    #to-do .todos-panel .priority {
        float: right;
        width: 60px;
        height: 30px;
        margin-right: 12px;
        margin-top: 11px;
        background: #FFCA83;
        border-radius: 5px;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #FFF4E5;
        border: 0;
    }
</style>
