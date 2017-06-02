<template>
  <div id="sub-view">
    <button id="create-thread" @click="create_thread" v-if="authenticated">
      Create thread
    </button>
    <create-thread-modal ref="create_thread_modal" v-if="authenticated"/>
    <div class="thread" v-for="thread, index in threads" :class="(index % 2 == 0) ? 'even' : 'odd'">
      <span id="title">{{thread.title}}</span>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'SubView',
  data () {
    return {
      valid: false,
      threads: []
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.authenticated
    }
  },
  created () {
    this.get_threads()
  },
  watch: {
    '$route' () {
      this.get_threads()
    }
  },
  methods: {
    update () {
      console.log(this.valid)
      if (this.valid) {
        this.$store.commit('setView', 'sub')
        this.$store.commit('setPageInfo', {
          title: this.$route.params.sub_name,
          subscibers: 0,
          description: '',
          sidebar: ''
        })
        // Debug
        this.$store.dispatch('notify', {
          type: 'success',
          message: 'sub is valid'
        })
      } else {
        this.$store.dispatch('notify', {
          type: 'error',
          message: 'Sub does not exist'
        })
      }
    },
    get_threads () {
      this.axios.post(this.$store.getters.server + '/get_threads', {
        subvoat_name: this.$route.params.sub_name
      }).then((r) => {
        if (r.data.error) {
          this.$store.dispatch('notify', {
            type: 'error',
            message: r.data.error
          })
          this.valid = false
          this.threads = []
          return
        }

        this.threads = r.data.result
        // Debug
        this.$store.dispatch('notify', {
          type: 'success',
          message: 'Found ' + this.threads.length + ' Threads'
        })
        this.valid = true
        this.update()
      }).catch((e) => {
        this.$store.dispatch('notify', {
          type: 'error',
          message: e
        })
        this.valid = false
        this.threads = []
      })
    },
    create_thread () {
      this.$refs.create_thread_modal.open()
    }
  }
}
</script>
