<template>
  <router-link to="/carrito">
    <v-card
      elevation="0"
      :style = "{'border':borde}"
      :class= visible
    >
      <v-avatar size="40" v-if="cantidad == 0">
        <v-icon color="green">mdi-cart-variant</v-icon>
      </v-avatar>
      <v-badge
        v-else
        color="success"
        :content="cantidad"
        :value="cantidad"
        overlap
      >
        <v-avatar size="40">
          <v-icon color="green">mdi-cart-variant</v-icon>
        </v-avatar>
      </v-badge>
    </v-card>
  </router-link>
</template>

<script>
export default {
    props: [
        "cantidad", "borde", "visible"
    ]

};
</script>

<style>
/*.icon_carrito {
  border: 1px solid green !important;
}*/
a {
  text-decoration: none;
} 


</style>
