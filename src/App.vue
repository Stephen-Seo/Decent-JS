<template>
  <div id="decent">
    <nav-view @toggle-subs="toggle_subs"/>
    <subsbar ref="subs_bar"/>
    <sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  name: 'Decent',
  methods: {
    toggle_subs () {
      this.$refs.subs_bar.toggle()
    }
  }
}
</script>

<style src="./assets/decent.css"/>
