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
    margin: 0px;
  }
  #nav-bar {
    width: 100%;
    height: 80px;
    background: #222;  
  }
  #nav-bar #logo {
    margin: 0px 20px;
    height: 80px;
  }

 </style>
