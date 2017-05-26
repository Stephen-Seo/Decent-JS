<template>
  <div id="sidebar">
    <button id="login" v-if="!api_token" @click="open_login">Login</button>
    <login-modal ref="login_modal"i v-if="!api_token" @login="login"/>

    <div id="userbar" v-show="api_token" @click="toggle_menu">
      <span id="user">{{this.username}}@home</span>
      <span id="cents">0</span>
    </div>
    <div id="user-menu" v-if="api_token":class="{open: open_menu}">
      <ul>
        <li>Profile <icon name="user"/></li>  
        <li>Inbox <icon name="envelope-o"/></li>  
        <li>Settings <icon name="cog"/></li>  
        <li @click="logout">Logout <icon name="times"/></li>  
      </ul>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'sidebar',
  data () {
    return {
      name: 'sidebar',
      open_menu: false,
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
    logout () {
      this.open_menu = false
      this.username = ''
      this.api_token = ''
    },
    open_login () {
      this.$refs.login_modal.open()
    },
    toggle_menu () {
      this.open_menu = !this.open_menu
    }
  }
}
</script>
