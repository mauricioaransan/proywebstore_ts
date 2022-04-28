<template>
  <v-carousel :show-arrows="true" class="carousel_principal mt-1" cycle interval="4000" hide-delimiters>
    <v-carousel-item v-for="(item, i) in fotos" :key="i" cover :src="item.src">
    </v-carousel-item>
  </v-carousel>
  <v-row justify="center">
    <v-col align="center">
      <v-sheet width="1160" class="cuerpo pt-6">
        <!-- Inicio primeras imágenes -->
        <v-row>
          <v-col cols="4" class="pa-2">
            <a href="#">
              <v-img class="imagen" src="../assets/home/SUPERDEAL_CUADRADO_PRECIAZOS-ABRIL-PIQUEO.jpeg"></v-img>
            </a>
          </v-col>
          <v-col cols="4" class="pa-2">
            <a href="#">
              <v-img class="imagen" src="../assets/home/image__70_.png"> </v-img>
            </a>
          </v-col>
          <v-col cols="4" class="pa-2">
            <a href="#">
              <v-img class="imagen" src="../assets/home/SUPERDEAL_CUADRADO_PRECIAZOS-ABRIL-PARAISO.jpeg" ></v-img>
            </a>
          </v-col>
        </v-row>
        <!-- Fin primeras imágenes -->

        <!-- Inicio Card Imágenes -->
        <v-row class="row_card_5 mt-5">
          <v-col cols="12">
            <v-sheet height="60" color="green">
              <v-row justify="space-between" align="center" class="row_offert">
                <v-col cols="5" align="left" class="pl-10 pt-1">
                  <p class="text-uppercase oferton ma-0"> Solo x h<span><v-icon>mdi-alarm</v-icon></span>y </p>
                </v-col>
                <v-col cols="2">
                  <v-row>
                    <v-card color="black" elevation="0" width="50" class="font-weight-bold mr-3">{{ horas }}</v-card>
                    <v-card color="black" elevation="0" width="50" class="font-weight-bold mr-3">{{ min }}</v-card>
                    <v-card color="black" elevation="0" width="50" class="font-weight-bold mr-3">{{ value }}</v-card>                    
                  </v-row>
                </v-col>
              </v-row>
            </v-sheet>
            <v-row class="ma-0 mt-4 px-0" justify="space-between">
              <v-card width="230" elevation="0" v-for="(item, i) in card" :key="i">
                <a href="#">
                  <v-img class="imagen" :src="item.src"> </v-img>
                </a>
              </v-card>
            </v-row>
          </v-col>
        </v-row>

        <!-- Slide Group -->
        <v-row class="ma-0 mt-5">
          <ListCard :productsArray="productsArray" />
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    var model: {} = {};

    return { model };
  },
  props: ["valor"],
});
</script>

<style></style>
