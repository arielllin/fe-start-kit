export default {
  data() {
    return {
      meta: {
        i18n: ''
      }
    }
  },
  created() {
    this.$options.prefix
      ? this.setComponmentPrefix(this.$options.prefix)
      : this.findPrefix()
  },
  computed: {
    nt() {
      return function(props = '', ...otherArgs) {
        return this.$t(`${this.meta.i18n}.${props}`, ...otherArgs)
      }
    }
  },
  methods: {
    findComponents(components, name) {
      return Object.values(components).some(component => {
        if (component.name === name) {
          return true
        }
        if (
          component.components &&
          Object.keys(component.components).length > 0
        ) {
          return this.findComponents(component.components, name)
        }
        return false
      })
    },
    findParentName(component, name) {
      if (component.$options.name.toLowerCase() === name.toLowerCase()) {
        return true
      }
      if (component.$parent && component.$parent.$options.name) {
        return this.findParentName(component.$parent, name)
      }
      return false
    },
    setComponmentPrefix(prefix) {
      this.meta.i18n = prefix
    },
    findPrefix() {
      const {
        meta: { i18n }
      } = this.$route.matched.find(item => {
        return this.findComponents(item.components, this.$options.name)
      })
      if (typeof i18n !== 'string') {
        this.meta.i18n =
          i18n[
            Object.keys(i18n).find(item => {
              return this.findParentName(this, item)
            })
          ]
      } else {
        this.meta.i18n = i18n
      }
    }
  }
}
