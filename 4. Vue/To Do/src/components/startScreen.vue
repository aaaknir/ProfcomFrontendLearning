<template>
  <div id="start">
    <div id="hello">
      <span>Приветствую, дорогой друг!</span>
    </div>
    <div id="enter-form">
      <button type="button" @click="openForm">Вход</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      openForm () {
        this.$emit('open');
      }
    }
  }
</script>

<style scoped>
  div#start {
    display: grid;
    grid-template-columns: 33% 66%;
    min-height: 800px;
  }
  div#hello {
    background: #DAD1F3;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px 0px 20px;
    padding-top: 353px;
  }
  div#hello span {
    font-weight: 300;
    font-size: 40px;
    line-height: 47px;
  }
  div#enter-form {
    padding-top: 368px;
    background: #EEECEC;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    border-radius: 0px 20px 20px 0px;
  }
  div#enter-form button {
    width: 333px;
    height: 65px;
    background: #69569F;
    border-radius: 20px;
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;
    color: #E4DBD9;
  }
  div#enter-form button:hover, div#enter-form button:active{
    background: rgba(120, 100, 159, 0.85);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  }
</style>
