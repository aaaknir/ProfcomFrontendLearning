<template>
    <div id="start" v-if="page_state.state === 'start'">
        <div id="hello">
            <span>Приветствую, дорогой друг!</span>
        </div>
        <div id="enter-form">
            <div class="buttons">
                <b-button type="is-primary" size="is-large" outlined @click="openForm">Вход</b-button>
            </div>
        </div>
    </div>
    <start-form v-else-if="page_state.state === 'form'"></start-form>
    <div v-else>
        <h1>Ошибочное состояние</h1>
    </div>
</template>

<script>
    import StartForm from '../components/StartForm';

    export default {
        components: {
            StartForm
        },
        data() {
            return {
                page_state: {
                    states: [ 'start', 'form' ],
                    state: 'start'
                }
            }
        },
        methods: {
            openForm () {
                this.page_state.state = 'form';
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
        box-shadow: 0 4px 50px rgba(0, 0, 0, 0.25);
        border-radius: 20px 0 0 20px;
        padding-top: 353px;
    }
    div#hello span {
        font-weight: 300;
        font-size: 40px;
        line-height: 47px;
    }
    div#enter-form {
        padding: 368px;
        background: #EEECEC;
        box-shadow: 0 4px 50px rgba(0, 0, 0, 0.25);
        border-radius: 0 20px 20px 0;
    }
</style>
