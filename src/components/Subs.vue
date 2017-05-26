<template>
  <div id="subsbar" :class="{open: open_subs}">

  </div>
</template>

<script>
module.exports = {
  name: 'Subs',
  data () {
    return {
      open_subs: true
    }
  },
  methods: {
    toggle () {
      this.open_subs = !this.open_subs
    }
  }
}
</script>
