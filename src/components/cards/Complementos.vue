<template>
  <v-card width="280" height="257" class="ma-2 card-comple-items">
    <!-- titulo -->
    <v-sheet height="95" class="pl-3">
        <v-row class="ma-0 pt-4">
        <v-sheet width="70" height="70">
            <router-link :to="`/detalle/${prod_Complem.id}&${prod_Complem.tipo}`"> <!-- Arreglar esto -->
                <v-img :src="prod_Complem.img"></v-img>
            </router-link>
        </v-sheet>
        <v-col cols="8" class="pt-0">
            <p class="comp_title pa-0 ma-0">{{ prod_Complem.nombre }}</p>
            <p class="comp_desc button pa-0 ma-0">{{ prod_Complem.tipo }}</p>
        </v-col>
        </v-row>
    </v-sheet>
    <v-sheet height="60" class="pl-3">       
            <p v-if="prod_Complem.descuento_cmr" class="mb-0 prec-desc">
              <v-row class="ma-0">
                S/ {{prod_Complem.descuento_cmr}} UN
                <v-col cols="4" class="pa-0">
                  <v-img src="@/assets/cmr-debito.svg" class="ml-3" width="50"></v-img>
                </v-col>
              </v-row>
            </p> 
            <p :class="prod_Complem.descuento_cmr ? 'mb-0 prec-gen' : 'mb-0 prec-desc' ">S/ {{prod_Complem.precio}} UN</p>
    </v-sheet>
    <v-row class="ma-0 pl-3">
        <v-icon v-if="prod_Complem.despacho" class="delivery"> mdi-truck-delivery-outline </v-icon>
        <v-icon v-else class="delivery_off"> mdi-car-off </v-icon>
        <v-icon v-if="prod_Complem.tienda" class="delivery"> mdi-domain </v-icon>
        <v-icon v-else class="delivery_off"> mdi-domain-off </v-icon>
    </v-row>
    <v-sheet height="40" class="px-3 mt-3">
      <!-- Arreglar esto -->
         <v-btn
          block
          color="success"
          class="text-uppercase font-weight-bold"
          @click="agregar(prod_Complem)"
        >
          agregar
        </v-btn>
    </v-sheet>
    
  </v-card>
</template>

<script>

export default {
  props: ["prod_Complem"],
  setup() {
    

    return { };
  },
};
</script>

<style>
.card-comple-items {
  border-radius: 10px;
}
.card-comple-items .comp_title {
  font-size: 14px;
  text-transform: uppercase;
  color: black;
  font-weight: 500;
}
.card-comple-items .comp_desc {
  font-size: 12px;
  color: #6b6d7e;
}
.card-comple-items .prec-desc {
  font-size: 14px;
  color: red;
  font-weight: 600;
}
.card-comple-items .prec-gen {
  font-size: 12px;
  color: #6b6d7e;
  text-decoration: line-through black   ;
}

.card-comple-items .delivery{
    font-size: 32px;
    margin-right: 20px;
    color: #4caf50 !important;
}
.card-comple-items .delivery_off{
  font-size: 32px;
  margin-right: 20px;
  color: grey !important;
}
</style>
