<template>
  <div id="form">
    <form>
      <label>Введите кодовое слово</label><input type="text" v-model="input_word" required>
      <button type="submit" @click="validateForm">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "startForm",
  data() {
    return {
      input_word: '',
      special_word: 'привет'
    }
  },
  methods: {
    validateForm () {
      if (this.input_word === this.special_word) {
        this.$emit('correct');
      } else {
        alert("Ты не пройдешь! Кодовое слово: привет");
      }
    }
  }
}
</script>

<style scoped>
 div#form {
    padding: 166px;
    min-height: 468px;
    background: #EEECEC;
    box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  form {
    padding-top: 129px;
    width: 868px;
    height: 339px;
    background: #DAD1F3;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
  }
  form input {
    margin-top: 53px;
    margin-bottom: 80px;
    width: 676px;
    height: 74px;
    background: #FDFDFD;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-weight: normal;
    font-size: 25px;
    line-height: 33px;
  }
 form button {
   width: 333px;
   height: 65px;
   background: #69569F;
   border-radius: 20px;
   font-weight: 300;
   font-size: 30px;
   line-height: 35px;
   color: #E4DBD9;
 }
 form button:hover, form button:active{
   background: rgba(120, 100, 159, 0.85);
   box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
 }
 form label {
   font-weight: 300;
   font-size: 30px;
   line-height: 35px;
   text-align: center;
 }
</style>
