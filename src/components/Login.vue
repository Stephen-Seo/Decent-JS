<template>
<div class="modal-mask" v-show="show" transition="modal" @click="close">
  <div class="modal-container" @click.stop>
    <div class="tabs">
      <span class="tab" :class="{ active: tab == 'login' }" @click="login">Login</span>
      <span class="tab" :class="{ active : tab == 'register' }" @click="register">Register</span>
    </div>
  </div>
</div>
</template>

<script>
module.exports = {
  data () {
    return {
      show: true,
      tab: 'login'
    }
  },
  methods: {
    close () {
      this.show = false
      console.log('Closed login modal')
    },
    open () {
      this.show = true
      console.log('Opened login modal')
    },
    toggle () {
      this.show = !this.show
    },
    login () {
      this.tab = 'login'
    },
    register () {
      this.tab = 'register'
    }
  }
}
</script>
