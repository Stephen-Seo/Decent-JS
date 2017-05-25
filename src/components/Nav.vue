<template>
  <div id="nav-bar">
  	{{name}}
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
#nav-bar {
  width: 100%;
  height: 80px;
  background: #f00;
}
<style>
