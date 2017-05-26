<template>
  <div id="sidebar">
    <button id="login" v-if="!api_token" @click="open_login">Login</button>
    <login-modal ref="login_modal"i v-if="!api_token" @login="login"/>
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
