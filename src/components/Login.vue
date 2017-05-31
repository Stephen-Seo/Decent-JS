<template>
<div class="modal-mask" v-show="show && !authenticated" transition="modal" @click="close">
  <div class="modal-container" @click.stop>
    <div class="tabs">
      <span class="tab" :class="{ active: tab == 'login' }" @click="login">Login</span>
      <span class="tab" :class="{ active : tab == 'register' }" @click="register">Register</span>
    </div>
    <div id="register-form" v-show="tab == 'register'">
        <div id="title">Register New Account</div>
	<div id="status" :class="status">{{status_msg}}</div>
        <input id="uname" v-model="username" placeholder="Username"/>
        <input type="password" id="password" v-model="password" placeholder="Password"/>
        <input type="password" id="passconf" v-model="pass_conf" placeholder="Repeat Password"/>
        <button id="submit" @click="submit">Register</button>
    </div>
    <div id="login-form" v-show="tab == 'login'">
        <div id="title">Login</div>
        <div id="status" :class="status">{{status_msg}}</div>
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
      show: false,
      tab: 'login',
      status: 'none',
      status_msg: '',
      username: '',
      password: '',
      pass_conf: '',
      keypair: require('../keypair')
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.authenticated
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
    check_user_avail (uname) {},
    submit () {
      if (this.tab === 'register') {
        if (this.password === this.pass_conf) {
          this.axios.post(this.$store.getters.server + '/register', {
            username: this.username,
            password: this.password
          }).then(this.success).catch(this.error)
        }
      } else if (this.tab === 'login') {
        this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })
      }
    }
  }
}
</script>
