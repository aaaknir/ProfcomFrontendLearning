<template>
    <form id="form" onsubmit="return false">
        <b-field label="Введите кодовое слово">
            <b-input size="is-medium" v-model="input_word"></b-input>
        </b-field>
        <div class="buttons">
            <button class="button is-medium is-primary" @click="validateForm">Отправить</button>
        </div>
    </form>
</template>

<script>
    const SPECIAL_WORD = 'привет';

    export default {
        name: "startForm",
        data() {
            return {
                input_word: '',
            }
        },
        methods: {
            validateForm () {
                if (this.input_word === SPECIAL_WORD) {
                    this.$router.push('MainScreen');
                } else {
                    this.$buefy.dialog.alert(`Ты не пройдешь! Кодовое слово: ${SPECIAL_WORD}`);
                }
            }
        }
    }
</script>

<style scoped>
    form {
        margin: 200px auto;
        padding: 100px;
        width: 868px;
        min-height: 340px;
        background: #EEECEC;
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
        border-radius: 20px;
        font-size: 25px;
        line-height: 33px;
    }
    .buttons {
        margin-left: 250px;
    }
</style>
