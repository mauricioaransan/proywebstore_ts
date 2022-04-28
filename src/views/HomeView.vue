<template>

  <v-carousel :show-arrows="true" class="carousel_principal mt-1" cycle="true" interval="4000" hide-delimiters="true">
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
        <v-row class="ma-0 mt-5" >
          <ListCard :productsArray="productsArray" />
        </v-row>
      </v-sheet>
    </v-col>
  </v-row>


</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
import { productoServicios } from "../services/ProductoServicios";
import productModel from "../models/productModel";
import ListCard from "../components/cards/ListCard.vue";

export default defineComponent({
  name: "HomeView",
  components: { ListCard, },
  setup() {
    let interval = ref({});
    let value = ref(60);
    let min = ref(59);
    let horas = ref(23);
    const fotos = ref([
      { src: require("/src/assets/carusel/Big_Banner_Desktop_Preciazos-05.jpg")},
      { src: require("../assets/carusel/Big-Banner-camas-06.04.jpg")},
      { src: require("../assets/carusel/Big-Banner-Desktop-Preciazos-DORM.jpg")},
      { src: require("../assets/carusel/Big-Banner-Licores-06.04.jpg")},
      { src: require("../assets/carusel/Big-Banner-Limpieza-04.04.jpg")},
      { src: require("../assets/carusel/Semana-Santa-Big-banner-parrilla-06.04.jpg")},
    ]);

    const card = ref([
      { src: require("../assets/home/9f70d363-1504-4896-8d25-52ecfa4f102c.png")},
      { src: require("../assets/home/SXH-LENOVO.jpeg")},
      { src: require("../assets/home/SXH-SAMSUNG-TV.jpeg")},
      { src: require("../assets/home/sxh3.png")},
      { src: require("../assets/home/WC_SXH_PRECIAZOS-ABRIL-08-IMACO.jpeg")},
    ]);

    const productsArray: Ref<productModel | null> = ref(null);
    const getProducts = async () => {
      const resp = await productoServicios.getProductos();
      productsArray.value = new productModel(resp);
    };
    onMounted(() => {
      getProducts();
    });

    return { productsArray, interval, fotos, card, value, min, horas};
  },

  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 0) {
        return (this.value = 60), (this.min -= 1);
      }
      if (this.min === 0) {
        return (this.min = 59), (this.horas -= 1);
      }
      if (this.horas === 0) {
        return (this.horas = 23);
      }
      this.value -= 1;
    }, 1000);
  },
});
</script>

<style>
.cuerpo .imagen {
  border-radius: 10px;
}

.row_card_5 .v-sheet {
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.row_offert .oferton {
  font-size: 35px;
  font-weight: bolder;
  color: white;
}
</style>
