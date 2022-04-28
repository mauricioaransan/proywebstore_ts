<template>
  <v-col class="pa-0 atencion" >
      <p class="titulo_footer"> {{titulo}} </p>
      <p>Lunes a sábado de 8AM - 10PM</p>
      <p>Domingo de 8AM - 7PM</p>
      <v-row class="ma-0 my-3 numero">
          <v-icon> {{icono}} </v-icon>
          <span>{{num_telf}}</span>
      </v-row>
  </v-col>
</template>

<script>
export default {
    props:{
        titulo: String,
        icono: String,
        num_telf: String
    } 
}
</script>

<style>

</style>