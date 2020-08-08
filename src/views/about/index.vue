<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <li>
        SVG ICON :
        <svg-icon icon-class="check" />
      </li>
      <li>Version : {{ version }}</li>
      <li>BUILD_CONFIG : {{ BUILD_CONFIG }}</li>
      <li>BASE_API : {{ BASE_API }}</li>
      <li>map getter test : {{ appTest }}</li>
      <li>i18n test : {{ nt('title') }} {{ nt('international') }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import i18nHelper from '@/mixins/i18nHelper'

export default {
  name: 'Home',
  components: {},
  mixins: [i18nHelper],
  data() {
    return {
      version: `V ${process.env.VERSION}`,
      BUILD_CONFIG: process.env.BUILD_CONFIG,
      BASE_API: process.env.BASE_API
    }
  },
  computed: {
    ...mapGetters(['appTest'])
  },
  created() {
    this.test()
  },
  methods: {
    test() {
      const a = new Set([1, 2, 2, 2, 3, 49, 20983, 993, 9, 5])
      console.log(a)
      a.forEach((x, idx) => {
        console.log('idx', idx, x)
      })
    }
  }
}
</script>
