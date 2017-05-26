<template>
  <div class="container">
    <div class="row text-center">
      <h3>Pulsado: {{ $store.state.count }} veces, contador es {{ ParOImpar }}</h3>

      <button class="btn btn-success" @click="sumar">+</button>
      <button class="btn btn-danger" @click="restar">-</button>

      <button class="btn" @click="sumarSiImpar">Sumar si es impar</button>
      <button class="btn" @click="sumarAsync">Sumar asíncrono</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  computed: mapGetters([
    'ParOImpar'
  ]),
  methods: mapActions([
    'sumar',
    'restar',
    'sumarSiImpar',
    'sumarAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
