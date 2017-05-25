<template>
  <div id="nav-bar">
  	<img id="logo" src="../assets/Voat-logo.png"/>
	<button id="login">Login</button>
  </div>


</template>

<script>
module.exports = {
  name: 'Nav',
  data () {
    return {
      name: 'Navtest'
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
<style>
