<template>
    <div id="contacts">
        <div id="about">
            <img id="mine" src="../assets/mine.jpg" alt="Моя фотография">
            <div id="links">
                <a href="https://vk.com/katerinka.dmitrievna"><img src="../assets/vk.png" alt="Вконтакте"></a>
                <a href="https://www.instagram.com/kate_aknir/"><img src="../assets/instagram.png" alt="Instagram"></a>
                <a href="tel:89060906479"><img src="../assets/tel.jpg" alt="Телефон"></a>
                <a href="mailto:katepetrusova2012@gmail.com"><img src="../assets/mail.png" alt="Почта"></a>
            </div>
        </div>
        <div id="wishes">
            <span>На создание дизайна данного приложения меня вдохновили творения Хаяо Миядзаки, поэтому каждому из вас я напишу теплые слова и цитату.</span>
            <div id="warm" v-for="wish in wishes" :key="wish.id">
                <b-collapse :open="false" aria-id="contentIdForA11y1">
                    <button class="button is-primary" slot="trigger" aria-controls="contentIdForA11y1">{{wish.name}}</button>
                    <div class="notification">
                        <div class="content">
                            <p>{{wish.word}}</p>
                            <p>{{wish.phrase}}</p>
                        </div>
                    </div>
                </b-collapse>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "Contacts",
    data() {
        return {
            rounded: true,
            wishes: [
                {
                    name: 'Вадиму',
                    word: 'Спасибо за Профком и поддержку!',
                    phrase: '«Каждый из нас должен найти свой источник вдохновения. И порой это бывает непросто»'
                },
                {
                    name: 'Юре',
                    word: 'Спасибо за твоё трудолюбие и упорство!',
                    phrase: '«Одним волшебством-то много не сделаешь»'
                },
                {
                    name: 'Роде',
                    word: ' Спасибо за советы, подбадривания и ответы на все "глупые" вопросы!',
                    phrase: '«Есть такая штука — судьба. Плачь, не плачь — с ней ничего не сделать»'
                }
            ]
        }
    }
}
</script>

<style scoped>
    div#contacts {
        display: grid;
        grid-template-columns: 50% 50%;
        padding-left: 60px;
    }
    div#about, div#wishes {
        width: 500px;
        height: 654px;
        background: #FFFFFF;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
        border-radius: 15px;
    }
    div#about img#mine {
        border-radius: 100px;
        height: 80%;
        margin: 40px auto 0;
    }
    div#links {
        padding-top: 0;
        margin: 0 auto;
    }
    div#links img {
        height:50px;
        padding: 5px;
    }
    div#wishes {
        padding: 15px;
    }
    div#wishes span {
        color: #7957d5;
        font-size: 18px;
    }
    div#wishes div#warm {
        margin-top: 5px;
    }
    div#wishes div#warm button {
        width: 250px;
        font-size: 20px;
    }
</style>
