<template>
  <div id="decent">
    <nav-view @toggle-subs="toggle_subs"/>
    <subsbar ref="subs_bar"/>
    <sidebar @login="login"/>
    <div id="content-panel">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'Decent',
  data () {
    return {
      api_token: '',
      username: ''
    }
  },
  methods: {
    toggle_subs () {
      this.$refs.subs_bar.toggle()
    },
    login (e) {
      this.api_token = e.token
      this.username = e.username
      console.log('caught login event')
    }
  }
}
</script>

<style src="./assets/decent.css"/>
