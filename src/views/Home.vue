<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images/logo.png">
    <HelloWorld msg="聞人雅士 vue cli 3.11.0 腳手架你派" />

    <h6>--save</h6>
    <div>vuex</div>
    <div>vue-router</div>
    <div>axios</div>
    <div>js-cookie</div>
    <div>vue-i18n</div>
    <div>moment</div>

    <h6>--save-dev</h6>
    <div>cross-env</div>
    <div>svg-sprite-loader</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      version: `V ${process.env.VERSION}`
    }
  }
}
</script>
