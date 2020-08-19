<template>
  <div id="contacts">
    <div id="photo">

    </div>
    <div id="about">
        <b-collapse :open="false" aria-id="contentIdForA11y1">
            <button
                    class="button is-primary"
                    slot="trigger"
                    aria-controls="contentIdForA11y1">Click me!</button>
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
                    aria-controls="contentIdForA11y1">Click me!</button>
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
                    aria-controls="contentIdForA11y1">Click me!</button>
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
name: "Contacts"
}
</script>

<style scoped>
  div#photo {
    width: 458px;
    height: 654px;
    background: #FFFFFF;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: inline-block;
  }
  div#about {
    width: 500px;
    height: 654px;
    background: #FFFFFF;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: inline-block;
      margin-left: 50px;
  }
  div #status {
    display: block;
    padding: 5px;
    opacity: 0.8;
    max-height: 100%;
    max-width: 100%;
    background-color: lightgrey;
    text-align: center;
    transform: translate(0, -70px);
    color: black;
    border: 5px solid transparent;
  }
</style>
