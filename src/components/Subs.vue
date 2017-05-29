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
  </div>
</template>

<script>
module.exports = {
  name: 'Subs',
  data () {
    return {
      open_subs: true,
      sub_query: ''
    }
  },
  methods: {
    toggle () {
      this.open_subs = !this.open_subs
    },
    create_sub () {
      this.$root.test = 'test'
      this.$refs.create_sub_modal.open()
    }
  }
}
</script>
