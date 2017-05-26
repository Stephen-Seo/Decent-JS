<template>
  <div id="nav-bar">
        <button id="subs-button" @click="toggle_subs">
          <icon name="bars"/>
        </button>
  	<img id="logo" src="../assets/Decent-logo-green-pink.png"/>
  </div>


</template>

<script>
module.exports = {
  name: 'navbar',
  data () {
    return {
    }
  },
  methods: {
    toggle_subs () {
      this.$emit('toggle-subs')
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
