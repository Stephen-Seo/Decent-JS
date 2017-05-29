<template>
  <div class="modal-mask" v-show="show" @click="close">
    <div class="modal-container" @click.stop>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'CreateSub',
  data () {
    return {
      show: true
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

    }
  }
}
</script>
