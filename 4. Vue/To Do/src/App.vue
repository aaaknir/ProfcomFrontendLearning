<template>
  <div id="app">
    <start-screen @open='openForm'></start-screen>
    <start-form @correct='openMain'></start-form>
    <main-screen></main-screen>
  </div>
</template>

<script>
export default {
  data () {

  },
  methods: {
    openForm () {
      document.getElementById('start').style.display = 'none';
      document.getElementById('form').style.display = 'block';
    },
    openMain () {
      document.getElementById('form').style.display = 'none';
      document.getElementById('main').style.display = 'block';
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    font-style: normal;
    text-align: center;
  }
  div#app {
    width: 1200px;
    min-height: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  #form, #main {
    display: none;
  }
</style>
