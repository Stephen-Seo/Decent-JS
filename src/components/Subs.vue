<template>
  <div id="subsbar" :class="{open: open_subs}">
    <div id="sub-search">
      <input :value="sub_query" placeholder="Search Subs"/>
      <icon name="search"/>
    </div>
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
    }
  }
}
</script>
