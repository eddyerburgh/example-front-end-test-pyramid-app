<template>
  <button
    @click="toggleModal"
    class="button"
  >
    Open modal
  </button>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'button-component',
  methods: mapActions([
    'toggleModal'
  ])
}
</script>
