<template>
<div class="modal-mask" v-show="show" transition="modal" @click="close">
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
      show: true,
      tab: 'login',
      status: 'none',
      status_msg: '',
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
    check_user_avail (uname) {},
    error (e) {
      this.status = 'error'
      this.status_msg = e
      console.log('Error')
    },
    success (r) {
      console.dir(r)
      console.log(this.tab)
      if (this.tab === 'login') {
        if (r.data.error) {
          console.log('REST Error')
          this.error(this._.startCase(r.data.error))
          return
        }
        this.status = 'success'
        if (r.data.result) {
          this.status_msg = 'Logged in as ' + r.data.result.username
          this.$emit('login', {
            username: r.data.result.username,
            token: r.data.result.api_token
          })
        }
      } else if (this.tab === 'register') {
        this.status = 'success'
        this.status_msg = r.data.success
      }
      console.log('Success')
    },
    submit () {
      if (this.tab === 'register') {
        if (this.password === this.pass_conf) {
          this.axios.post('http://192.168.0.122:8080/register', {
            username: this.username,
            password: this.password
          }).then(this.success).catch(this.error)
        }
      } else if (this.tab === 'login') {
        this.axios.post('http://192.168.0.122:8080/authenticate', {
          username: this.username,
          password: this.password
        }).then(this.success).catch(this.error)
      }
    }
  }
}
</script>
