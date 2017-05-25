<template>
  <div :id="name">
    <nav-view/>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  name: 'Voat'
}
</script>

<style>
body {
  background: #333;
}
#Voat {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
