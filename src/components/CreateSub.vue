<template>
  <div id="create-sub-modal" class="modal-mask" v-show="show" @click="close">
    <div class="modal-container" v-if="authenticated" @click.stop>
      <div id="title"> Create A New Sub </div>
      <div id="createsub-form">
        <input v-model="new_sub_name" placeholder="New Sub Name"></input>
        <button id="submit" @click="submit">Create Sub</button>
      </div>
      <div id="status" class="error" v-if="sub_error">{{sub_error}}</div>
    </div>
    <div class="modal-container" v-else @click.stop>
      <div id="title">Please login to create a new sub.</div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'CreateSub',
  data () {
    return {
      show: false,
      new_sub_name: '',
      sub_error: ''
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.authenticated
    }
  },
  methods: {
    open () {
      console.log(this.$root.test)
      this.show = true
    },
    close () {
      this.show = false
    },
    submit () {
      if (this.new_sub_name !== '') {
        this.axios.post('http://192.168.0.122:8080/create_subvoat', {
          subvoat_name: this.new_sub_name,
          username: this.$store.getters.username,
          api_token: this.$store.getters.api_token
        }).then(this.success).catch(this.error)
      }
    },
    success (r) {
      if (r.data.error) {
        console.log('Failed to create sub,', r.data.error)
        this.sub_error = r.data.error
      } else {
        console.log('Sub created')
        this.show = false
        this.$parent.$emit('update_subs')
      }
    },
    error (e) {
      console.log('Failed to create sub,', e)
      this.sub_error = e
    }
  }
}
</script>
