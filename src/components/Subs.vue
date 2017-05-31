<template>
  <div id="subsbar" :class="{open: open_subs}">
    <button id="create-sub" @click="create_sub" v-if="authenticated">
      <icon name="plus"/>
      Create Sub
    </button>
    <div id="sub-search">
      <input :value="sub_query" placeholder="Search Subs"/>
      <icon name="search"/>
    </div>
    <create-sub-modal ref="create_sub_modal" v-if="authenticated"/>
    <ul id="subs-list">
      <router-link v-for="sub in subs" :key="sub" :to="{name: 'SubView', params: {sub_name: sub}}">
        <li class="sub">
          {{ sub }}
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
module.exports = {
  name: 'Subs',
  data () {
    return {
      open_subs: true,
      sub_query: '',
      subs: []
    }
  },
  computed: {
    authenticated () {
      return this.$store.getters.authenticated
    }
  },
  methods: {
    toggle () {
      this.open_subs = !this.open_subs
    },
    create_sub () {
      this.$root.test = 'test'
      this.$refs.create_sub_modal.open()
    },
    update_subs () {
      this.axios.get(this.$store.getters.server + '/list_subvoats')
        .then(this.loaded_subs).catch(this.error)
    },
    loaded_subs (r) {
      if (r.data.error) {
        this.$store.dispatch('notify', {
          type: 'error',
          message: r.data.error
        })
      } else {
        this.subs = r.data.result
        console.log('Queried for subs, got', r.data.result.length)
      }
    },
    error (e) {
      this.$store.dispatch('notify', {
        type: 'error',
        message: e
      })
    }
  },
  created () {
    this.update_subs()
    this.$on('update_subs', this.update_subs)
  }
}
</script>
