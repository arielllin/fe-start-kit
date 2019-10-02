<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li>SVG ICON : <svg-icon icon-class="check" /></li>
      <li>Version : {{ version }}</li>
      <li>BUILD_CONFIG : {{ BUILD_CONFIG }}</li>
      <li>BASE_API : {{ BASE_API }}</li>
      <li>map getter test : {{ appTest }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      version: `V ${process.env.VERSION}`,
      BUILD_CONFIG: process.env.BUILD_CONFIG,
      BASE_API: process.env.BASE_API
    }
  },
  computed: {
    ...mapGetters(['appTest'])
  }
}
</script>
