<template>
  <div id="contacts">
    <div id="photo"></div>
    <div id="about"></div>
  </div>
</template>

<script>
export default {
name: "Contacts"
}
</script>

<style scoped>
  div#contacts {
    width: 1200px;
    height: 750px;
    background: #EEECEC;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 0px 0px 20px 20px;
  }
  div#photo {
    width: 458px;
    height: 654px;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: inline-block;
  }
  div#about {
    width: 598px;
    height: 654px;
    background: #FFFFFF;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    display: inline-block;
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
