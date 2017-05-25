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

<style src="./assets/voat.css"/>
