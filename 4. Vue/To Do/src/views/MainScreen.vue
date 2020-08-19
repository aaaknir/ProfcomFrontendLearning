<template>
    <div id="main">
        <button id="button-to-do" @click="changeState">To Do</button>
        <button id="button-contacts" @click="changeState">Контакты</button>
        <to-do v-if="page_state.state === 'to-do'"></to-do>
        <contacts v-if="page_state.state === 'contacts'"></contacts>
    </div>
</template>

<script>
    import ToDo from '@/components/ToDo';
    import Contacts from "@/components/Contacts";

    export default {
        components: {
            ToDo,
            Contacts
        },
        data() {
            return {
                page_state: {
                    states: [ 'to-do', 'contacts' ],
                    state: 'to-do'
                }
            }
        },
        methods: {
            activeStyleButton (elem) {
                elem.style.background = '#7957d5';
                elem.style.borderColor = 'transparent';
                elem.style.color = 'white';
            },
            passiveStyleButton (elem) {
                elem.style.background = 'white';
                elem.style.borderColor = '#7957d5';
                elem.style.color = '#7957d5';
            },
            changeState(event) {
                if (this.page_state.state === 'to-do' && event.target.id === 'button-contacts') {
                    this.page_state.state = 'contacts';
                    this.activeStyleButton(document.getElementById('button-contacts'));
                    this.passiveStyleButton(document.getElementById('button-to-do'));
                } else if (this.page_state.state === 'contacts' && event.target.id === 'button-to-do') {
                    this.page_state.state = 'to-do';
                    this.activeStyleButton(document.getElementById('button-to-do'));
                    this.passiveStyleButton(document.getElementById('button-contacts'));
                }
            }
        }
    }
</script>

<style scoped>
    button {
        width: 596.5px;
        height: 50px;
        border-radius: 20px 20px 0 0;
        border-bottom: 0;
        font-weight: 300;
        font-size: 30px;
        line-height: 35px;
        outline: none;
        cursor: pointer;
    }
    button#button-to-do {
        background: #7957d5;
        border-color: transparent;
        color: white;
    }
    button#button-contacts{
        border-color: #7957d5;
        background: white;
        color: #7957d5;
    }
    div#to-do, div#contacts {
        padding-top: 30px;
        width: 1200px;
        height: 750px;
        background: #EEECEC;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
        border-radius: 0 0 20px 20px;
    }
</style>
