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
        <span>Пожелания</span>
        <b-collapse :open="false" aria-id="contentIdForA11y1">
            <button
                    class="button is-primary"
                    slot="trigger"
                    aria-controls="contentIdForA11y1">Вадиму</button>
            <div class="notification">
                <div class="content">
                    <p></p>
                </div>
            </div>
        </b-collapse>
        <b-collapse :open="false" aria-id="contentIdForA11y1">
            <button
                    class="button is-primary"
                    slot="trigger"
                    aria-controls="contentIdForA11y1">Юре</button>
            <div class="notification">
                <div class="content">
                    <h3>
                        Subtitle
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                    </p>
                </div>
            </div>
        </b-collapse>
        <b-collapse :open="false" aria-id="contentIdForA11y1">
            <button
                    class="button is-primary"
                    slot="trigger"
                    aria-controls="contentIdForA11y1">Роде</button>
            <div class="notification">
                <div class="content">
                    <h3>
                        Subtitle
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                    </p>
                </div>
            </div>
        </b-collapse>
    </div>
  </div>
</template>

<script>
export default {
name: "Contacts",
    data() {
        return {
            rounded: true,
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
      height: 70%;
      margin: 40px auto 0;
  }
  div#links {
      padding-top: 0;
      margin: 0 auto;
  }
  div#links img {
      height:100px;
      padding: 5px;
  }
  span {
      color: #7957d5;
      font-size: 40px;
  }
</style>
