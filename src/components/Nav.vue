<template>
  <div id="nav-bar">
  	<img id="logo" src="../assets/Decent-logo-green-pink.png"/>
	<div id="userbar">
  	  <login-modal ref="login_modal"i v-if="!api_token" @login="login"/>
	  <div v-if="api_token">
	    <span id="username">{{this.username}}@home</span>
	    <icon name="cog"/>
	  </div>
	</div>
  </div>


</template>

<script>
module.exports = {
  name: 'navbar',
  data () {
    return {
      show_login: false,
      username: '',
      api_token: ''
    }
  },
  methods: {
    login (e) {
      console.log('Nav: Caught Login Event')
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

<style scoped>
.nav-bar {
  width: 100%;
  height: 80px;
  background: #f00;
}
img {
  height: 80px;
}
</style>
