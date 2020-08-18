import Vue from 'vue'
import App from './App.vue'
import startScreen from "./components/startScreen";
import startForm from "./components/startForm";
import mainScreen from "./components/mainScreen";
import toDo from "./components/toDo";
import Contacts from "./components/Contacts";

Vue.component('start-screen', startScreen);
Vue.component('start-form', startForm);
Vue.component('main-screen', mainScreen);
Vue.component('main-screen-to-do', toDo);
Vue.component('main-screen-contacts', Contacts);

new Vue({
  el: '#app',
  render: h => h(App)
})
