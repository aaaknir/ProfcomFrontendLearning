<template>
  <div id="main">
    <button id="to" @click="changeState">To Do</button>
    <button id="co" @click="changeState">Контакты</button>
    <main-screen-to-do v-if="this.block_state === 'to-do'"></main-screen-to-do>
    <main-screen-contacts v-else-if="this.block_state === 'contacts'"></main-screen-contacts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      block_state: 'to-do'
    }
  },
  methods: {
    changeState() {
      if (this.block_state === 'to-do') {
        this.block_state = 'contacts';
        document.getElementById('co').style.background = '#8C74D0';
        document.getElementById('to').style.background = '#BAB0D6';
      } else if (this.block_state === 'contacts') {
        this.block_state = 'to-do';
        document.getElementById('to').style.background = '#8C74D0';
        document.getElementById('co').style.background = '#BAB0D6';
      }
    }
  }
}
</script>

<style scoped>
  button {
    width: 596px;
    height: 50px;
    border-radius: 20px 20px 0px 0px;
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;
    color: #FFFFFF;
  }
  button#to {
    background: #8C74D0;
  }
  button#co {
    background: #BAB0D6;
  }

</style>
