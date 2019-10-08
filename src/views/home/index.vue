<template>
  <div class="home">
    <img alt="Vue logo" :src="logo">
    <h1>聞人雅士 vue cli 3.11.0 腳手架你派</h1>

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
const logo = '@/assets/images/logo.png'

export default {
  name: 'Home',
  data() {
    return {
      version: `V ${process.env.VERSION}`,
      logo
    }
  }
}
</script>
