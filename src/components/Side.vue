<template>
  <div id="sidebar">
    <button id="login" v-if="!api_token" @click="open_login">Login</button>
    <login-modal ref="login_modal"i v-if="!api_token" @login="login"/>

    <div id="userbar" v-show="api_token">
      <span id="user">{{this.username}}@home</span>
      <span id="cents">0</span>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'sidebar',
  data () {
    return {
      name: 'sidebar',
      username: '',
      api_token: ''
    }
  },
  methods: {
    login (e) {
      this.$refs.login_modal.close()
      this.username = e.username
      this.api_token = e.token
    },
    open_login () {
      this.$refs.login_modal.open()
    }
  }
}
</script>
