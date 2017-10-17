<template>
  <div>
  <section class="section">
    <div class="container">
    <h1 class="title">The front-end test pyramid</h1>
<h2 class="subtitle">An example app for the Medium article</h2>
</div>
  </section>
  <section class="section">
  <div class="container">
    <button-component />
    <modal-component />
  </div>
</section>
</div>
</template>

<script>
import ButtonComponent from './components/ButtonComponent'
import ModalComponent from './components/ModalComponent'

export default {
  name: 'app',
  components: {
    ButtonComponent,
    ModalComponent
  }
}
</script>
