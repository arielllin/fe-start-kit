<template>
  <div class="home">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/help">Help</router-link> |
      <router-link to="/infinite-scroll">infinite-scroll</router-link> |
    </div>
    <img alt="Vue logo" src="@/assets/images/logo.png">
    <h1>聞人雅士 vue cli 3.11.0 腳手架你派</h1>
    <h2>dependency</h2>
    <div v-for="(dependency,idx) in dependenciesArray" :key="`save-${idx}`">{{ dependency.name }} - {{ dependency.version }}</div>
    <h2>devDependency</h2>
    <div v-for="(devDependency,idx) in devDependenciesArray" :key="`dev-${idx}`">{{ devDependency.name }} - {{ devDependency.version }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
const _package = require('../../../package.json')
console.log('package', _package)
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      version: `V ${process.env.VERSION}`,
      dependencies: _package.dependencies,
      devDependencies: _package.devDependencies
    }
  },
  computed: {
    dependenciesArray() {
      return Object.keys(this.dependencies).map(key => {
        return { name: key, version: this.dependencies[key] }
      })
    },
    devDependenciesArray() {
      return Object.keys(this.devDependencies).map(key => {
        return { name: key, version: this.devDependencies[key] }
      })
    }
  }
}
</script>
