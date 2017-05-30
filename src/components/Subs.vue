<template>
  <div id="subsbar" :class="{open: open_subs}">
    <button id="create-sub" @click="create_sub">
      <icon name="plus"/>
      Create Sub
    </button>
    <div id="sub-search">
      <input :value="sub_query" placeholder="Search Subs"/>
      <icon name="search"/>
    </div>
    <create-sub-modal ref="create_sub_modal"/>
    <ul>
      <li id="subs-list" v-for="sub in subs">
        {{ sub }}
      </li>
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
  methods: {
    toggle () {
      this.open_subs = !this.open_subs
    },
    create_sub () {
      this.$root.test = 'test'
      this.$refs.create_sub_modal.open()
    },
    update_subs () {
      this.axios.get('http://192.168.0.122:8080/list_subvoats')
        .then(this.loaded_subs).catch(this.error)
    },
    loaded_subs (r) {
      if (r.data.error) {
        console.log('Failed to load subs,', r.data.error)
      } else {
        this.subs = r.data.result
        console.log('Queried for subs, got', r.data.result.length)
      }
    },
    error (e) {
      console.log('Failed to query for subs,', e)
    }
  },
  created () {
    this.update_subs()
    this.$on('update_subs', this.update_subs)
  }
}
</script>
