<template>
  <div id="nav-bar">
    <div id="site-logo">
      <span class="site-logo-front">DE</span><span class="site-logo-back">CENT</span>
    </div>
	<button id="login" @click="open_login">Login</button>
  	<login-modal ref="login_modal"/>
  </div>


</template>

<script>
module.exports = {
  name: 'Nav',
  data () {
    return {
      name: 'Navtest',
      show_login: true
    }
  },
  methods: {
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
