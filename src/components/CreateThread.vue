<template>
  <div id="create-thread-modal" class="modal-mask" v-show="show" @click="close">
    <div class="modal-container" @click.stop>
      <div id="title"> Create A New Thread </div>
      <div id="createthread-form">
        <input v-model="new_thread_title" placeholder="New Thread Title"></input>
        <textarea v-model="new_thread_body"></textarea>
        <button id="submit" @click="submit">Create Thread</button>
      </div>
      <div id="status" class="error" v-if="thread_error">{{thread_error}}</div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'CreateThread',
  data () {
    return {
      show: false,
      new_thread_title: '',
      new_thread_body: '',
      thread_error: ''
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.authenticated
    }
  },
  methods: {
    open () {
      this.show = true
    },
    close () {
      this.show = false
    },
    submit () {
      if (this.new_thread_name !== '') {
        this.axios.post(this.$store.getters.server + '/submit_thread', {
          subvoat_name: this.$route.params.sub_name,
          title: this.new_thread_title,
          body: this.new_thread_body,
          username: this.$store.getters.username,
          api_token: this.$store.getters.api_token
        }).then(this.success).catch(this.error)
      }
    },
    success (r) {
      if (r.data.error) {
        this.$store.dispatch('notify', {
          type: 'error',
          message: r.data.error
        })
        this.thread_error = r.data.error
      } else {
        console.log('Thread created')
        this.show = false
        this.$parent.$emit('update_threads')
      }
    },
    error (e) {
      this.$store.dispatch('notify', {
        type: 'error',
        message: e
      })
    }
  }
}
</script>
