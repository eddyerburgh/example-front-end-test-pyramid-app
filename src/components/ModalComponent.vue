<template>
    <div class="modal" :class="{'is-active': displayModal}">
      <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">The front-end test pyramid</p>
            <button class="delete" aria-label="close" @click="toggleModal"></button>
          </header>
          <section class="modal-card-body">
            The front-end test pyramid is a guide for organizing test suites.
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success" @click="toggleModal">Ok</button>
          </footer>
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'modal-component',
  computed: mapGetters([
    'displayModal'
  ]),
  methods: mapActions([
    'toggleModal'
  ])
}
</script>
