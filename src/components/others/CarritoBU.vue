<template>
  <v-sheet class="pt-6 px-6">
    <!-- Cambiar tamaños -->
    <v-row>
      <!-- Inicio Card Izquierdo -->
      <v-col cols="9" class="carrito">
        <v-card elevation="3">
          <v-card elevation="0" class="my-5 px-4">
            <v-row>
              <v-col class="pb-0 pt-7 pl-6">
                <p class="text-mi-carrito">Mi Carrito</p>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="">
              <v-col cols="6" class="py-0 pl-6">
                <p class="text-canti-prods">{{ totalcanti }} productos</p>
              </v-col>
              <v-col cols="3" class="py-0 pl-6 pr-6" align="end">
                <v-btn variant="text">
                  <span class="hidden-sm-and-down">Agregar a las listas</span>
                  <v-icon end> mdi-menu </v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-divider class="mt-1"></v-divider>

            <v-row justify="space-between">
              <v-col cols="8" class="pb-0 pl-6">
                <v-row justify="start">
                  <v-col cols="3">
                    <div class="text-mi-carrito_sub">
                      Criterio de sustitución
                    </div>
                  </v-col>
                  <v-col cols="5" class="seleccion">
                    <v-card elevation="0" class="pa-2">
                      <v-select variant="plain" :items="items" outlined>
                      </v-select>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="3" align="end" class="pl-6 pr-6 sin-color">
                <router-link to="/">
                  <v-btn variant="text" class="text_seguir_comprando">
                    <span class="titulo">Seguir Comprando</span>
                    <v-icon end> mdi-cart-outline</v-icon>
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
          </v-card>
          <v-sheet height="16" color="#EEEEEE" class="pa-0 ma-0"></v-sheet>
          <v-card class="pb-3" elevation="0">
            <ListCarrito />
          </v-card>
        </v-card>
      </v-col>
      <!-- Fin Card Izquierdo -->

      <!-- Inicio Card Derecho -->
      <v-col cols="3" class="">
        <v-card elevation="10" class="card_resumen_orden">
          <!-- Inicio Cupon -->
          <v-sheet elevation="1" class="my-3 ">
            <v-row class="pa-0 ma-0" justify="start" align="center"> 
              <v-col cols="10" align="start" class="pr-0 py-0 cupon">
                <v-sheet class="card_cupon">
                  <v-text-field
                    variant="plain"
                    prepend-inner-icon="mdi-ticket-percent"
                    class="pa-0"
                    placeholder="¿Tienes un cupón de descuento?"
                    persistent-placeholder
                  ></v-text-field>
                </v-sheet>
              </v-col>
              <v-col cols="1" align="center" class="pl-4" justify=center>
                <p class="text-titulo">Ingrésalo</p>
              </v-col>
            </v-row>
          </v-sheet>
          <!-- Fin Cupon -->

          <!-- Inicio resumen Orden -->
          <v-card elevation="10" class="mb-5">
            <v-col cols="12">
              <v-row>
                <!-- Inicio Titulo -->
                <v-col cols="12" class="">
                  <div class="text-h6 text-resumen-orden ">Resumen de mi Orden</div>
                  <div class="text-resumen-orden_sub">
                    {{ totalcanti }}
                    <span v-if="totalcanti > 1">Productos</span>
                    <span v-else>Producto</span>
                  </div>
                </v-col>
                <!-- Fin Titulo -->
              </v-row>
              <v-divider color="black"></v-divider>
                <!-- Inicio Total -->
              <v-row justify="space-between">
                <v-col cols="5" class="pb-2">
                  <div class="text_total">Total:</div>
                </v-col>
                <v-col cols="6"  class="pb-2" align="end">
                  <div class="text_canti_total">S/. {{ totalpreci }}</div>
                </v-col>
              </v-row>
              <v-row justify="space-between"> 
                <v-col cols="5" class="pt-2">
                  <div class="text_total_desc">
                    Total con CMR:
                  </div>
                </v-col>
                <v-col cols="6" class="pt-2">
                  <v-row justify="end">
                    <v-col cols="4">
                      <v-img src="../assets/ceemeverde.png" alt="Logo Tottus">
                      </v-img>
                    </v-col>
                    <v-col cols="6" align="end" class="pl-0">
                      <div class="text_canti_total_desc">
                        S/. {{ totalDesc }}
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
              <!-- Fin Total -->
              <v-row>
                <v-col cols="12">
                  <v-btn color="success" block height="48">
                    <div class="text-comprar-carrito">
                      Comprar carrito
                    </div>
                  </v-btn>
                </v-col>
              </v-row>
              <v-row justify="center">
                <v-col cols="5" align="center">
                  <v-btn variant="text" @click="eliminarCar" width="180">
                    <div class="text_vaciar_carrito">Vaciar Carrito</div>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
        </v-card>
      </v-col>
      <!-- Fin Card Derecho -->
    </v-row>
  </v-sheet>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import ListCarrito from "../components/ListCarrito.vue";

export default {
  components: {
    ListCarrito,
  },
  setup() {
    const store = useStore();
    const totalcanti = computed(() => store.getters.totalCantidad);
    const totalpreci = computed(() => store.getters.totalPrecio);
    const totalDesc = computed(() => store.getters.totalDescuento);
    const eliminarCar = () => store.commit("eliminarCarrito");
    return { totalcanti, totalpreci, totalDesc, eliminarCar };
  },
  data() {
    return {
      items: ["Reemplazar, Criterio Tottus", "No reemplazar"],
    };
  },
};
</script>

<style>
.text-mi-carrito {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 8px;
  color: rgb(0, 0, 0);
}
.text-mi-carrito_sub {
  font-size: 20px;
  color: black;
}
.text-canti-prods {
  font-size: 16px;
  color: black;
}
.carrito .v-btn {
  height: 20px;
  text-transform: none;
  color: green;
}
.sin-color .text_seguir_comprando .titulo {
  color: grey;
  text-decoration: underline grey !important;
}
.sin-color .text_seguir_comprando .mdi-cart-outline::before {
  font-size: 25px;
  color: grey;
}

.carrito .v-btn span {
  text-decoration: underline green;
}
.carrito .v-btn .mdi-menu::before {
  text-decoration: none !important;
  font-size: 25px;
}
.seleccion .v-input{
  grid-template-areas: none;
}
.seleccion .v-select .v-field__append-inner {
  padding: 0;
}
.seleccion .v-select .v-input__details .v-messages {
  min-height: 0px !important;
}
.seleccion .v-select__selection-text {
  color: black !important;
  font-size: 14px;
  text-align: start;
}
.seleccion .v-input__details{
  height: 0px;
  min-height: 0px;
}
.seleccion .v-field__input, .seleccion .v-field__field{
  height: 10px;
  min-height: 10px;
  padding: 0;
}
.seleccion .v-field__field {
  width: 220px !important;
}
.seleccion .v-field__overlay {
  background-color: transparent !important;
}

.seleccion .v-card {
  border: 1px solid grey;
}

.card_resumen_orden  .v-input--horizontal{
  grid-template-areas: none !important;
}
.card_resumen_orden .v-field {
  width: 300px;
}
.card_resumen_orden .v-field .v-field__field {
  width: 200px !important;
  padding: 0;
}
.card_resumen_orden .v-field .v-field__input {
  font-size: 12px;
  color: black;
  font-weight: bold;
}/*
.card_resumen_orden .v-field .v-field__input input{
  color:black 
}*/
.card_resumen_orden .v-input .v-input__details {
  grid-area: none !important;
}
.card_resumen_orden .v-input .v-input__details .v-messages {
  min-height: 0 !important;
  height: 0 !important;
  margin: 0 !important;
}

.card_cupon {
  border: 1px solid black !important;
  border-radius: 15px;
}

.card_resumen_orden .text-titulo{
  color: black;
  font-size: 12px;
  text-decoration: underline black;
  margin-bottom: 0 !important;
}

.text-resumen-orden{
  color: black !important;
  font-size: 21px;
}
.text-resumen-orden_sub{
  color: #53565A !important;
  font-size: 14px;
}

.text_canti_total, .text_canti_total_desc{
  color: black;
  font-size: 17px;
  
  font-weight: bold;
}
.text_canti_total_desc{
  color: red;
}
.text_total_desc, .text_total{
  color: black;
  font-weight: bold;
  font-size: 15px;
  }
.text_total_desc{
  text-decoration: underline black;
}

.text_vaciar_carrito{
color: #53565A;
font-size: 16px !important;
text-transform: capitalize;
}
.text-comprar-carrito{
font-size: 16px;
font-weight: 600;
}
</style>
