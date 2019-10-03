<template>
  <div>
    <template v-if="!loginStatus">
      <form>
        <div>Try it:</div>
        <div>username: test</div>
        <div>password: 123456</div>
        <p>
          <label for="username">username </label>
          <input
            id="username"
            v-model="username"
            type="text"
            name="username"
          >
        </p>

        <p>
          <label for="password">password </label>
          <input
            id="password"
            v-model="password"
            type="text"
            name="password"
          >
        </p>
        <p>
          <button @click.prevent="Login">Login</button>
        </p>
      </form>
    </template>
    <template v-else>
      <div>You are logged!</div>
      <button @click.prevent="Logout">Logout</button>
    </template>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['loginStatus'])
  },
  methods: {
    ...mapActions({
      PostLogin: 'PostLogin',
      PostLogOut: 'PostLogOut'
    }),
    Login() {
      this.PostLogin({ username: this.username, password: this.password })
    },
    Logout() {
      this.PostLogOut()
    }
  }
}
</script>

<style scoped>

</style>
