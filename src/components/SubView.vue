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
      threads: []
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.authenticated
    }
  },
  watch: {
    '$route' () {
      this.get_threads()
    }
  },
  methods: {
    get_threads () {
      this.axios.post(this.$store.getters.server + '/get_threads', {
        subvoat_name: this.$route.params.sub_name
      }).then((r) => {
        if (r.data.error) {
          this.$store.dispatch('notify', {
            type: 'error',
            message: r.data.error
          })
          return
        }
        this.threads = r.data.result
      }).catch((e) => {
        this.$store.dispatch('notify', {
          type: 'error',
          message: e
        })
      })
    },
    create_thread () {
      this.$refs.create_thread_modal.open()
    }
  },
  created () {
    this.$on('update_threads', this.get_threads)
  }
}
</script>
