<template>
<div class="modal-mask" v-show="show" transition="modal" @click="close">
  <div class="modal-container" @click.stop>
    <div class="tabs">
      <span class="tab" :class="{ active: tab == 'login' }" @click="login">Login</span>
      <span class="tab" :class="{ active : tab == 'register' }" @click="register">Register</span>
    </div>
    <div id="register-form" v-show="tab == 'register'">
        <div id="title">Register New Account</div>
        <input id="uname" v-model="username" placeholder="Username"/>
        <input type="password" id="password" v-model="password" placeholder="Password"/>
        <input type="password" id="passconf" v-model="pass_conf" placeholder="Repeat Password"/>
        <button id="submit" @click="submit">Register</button>
    </div>
    <div id="login-form" v-show="tab == 'login'">
        <div id="title">Login</div>
        <input id="uname" v-model="username" placeholder="Username"/>
        <input type="password" id="password" v-model="password" placeholder="Password"/>
        <button id="submit" @click="submit">Login</button>
      
    </div>
  </div>
</div>
</template>

<script>
module.exports = {
  data () {
    return {
      show: true,
      tab: 'login',
      username: '',
      password: '',
      pass_conf: ''
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
    },
    check_user_avail (uname) {

    },
    error () {
      console.log('Error')
    },
    success () {
      console.log('Success')
    },
    submit () {
      if (this.tab === 'register') {
        if (this.password === this.pass_conf) {
          this.$http.post('localhost:5000/authenticate', {
            username: this.username,
            password: this.password
          }).then(this.success, this.error)
        }
      }
    }
  }
}
</script>
