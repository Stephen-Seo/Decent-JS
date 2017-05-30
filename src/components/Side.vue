<template>
  <div id="sidebar">
    <button id="login" v-if="!authenticated" @click="open_login">Login</button>
    <login-modal ref="login_modal"i v-if="!authenticated"/>

    <div id="userbar" v-show="authenticated" @click="toggle_menu">
      <span id="user">{{this.$store.state.username}}@{{this.$store.state.server_address}}</span>
      <span id="cents">0</span>
    </div>
    <div id="user-menu" v-if="authenticated":class="{open: open_menu}">
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
      open_menu: false
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.authenticated
    }
  },
  methods: {
    logout () {
      this.open_menu = false
      this.$store.dispatch('logout')
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
