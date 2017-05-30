<template>
  <div id="create-sub-modal" class="modal-mask" v-show="show" @click="close">
    <div class="modal-container" @click.stop>
      <div id="title"> Create A New Sub </div>
      <div id="createsub-form">
        <input placeholder="New Sub Name"></input>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'CreateSub',
  data () {
    return {
      show: false
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

    }
  }
}
</script>
