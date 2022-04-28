<template>
  <v-card width="190" height="387" elevation="0" class="pa-2 card_principal_producto">
    <!-- Inicio Imagen --> 
    <v-sheet width="170" height="145" class="mx-auto pt-1 pb-3" right>
      <router-link :to="`/detalle/${produ.getId()}&${produ.getTipo()}`">
        <v-img
          width="150"
          :src="produ.getImg()"
          alt="Imagen"
          cover="">
        </v-img>
      </router-link>      
    </v-sheet>
    <!--Fin imagen-->
    
    <!-- Inicio Cuerpo -->
    <v-sheet width="170" height="140">
      <v-sheet height="60">
        <p class="ma-0 card_titulo">{{ produ.getNombre() }}</p>
      <p class="ma-0 card_subtitulo">{{ produ.getMarca() }} - {{ produ.getTipo() }}</p>
      </v-sheet>
      <v-sheet height="60" >
        <p v-if="produ.getDescuentoCMR()" class="ma-0 card_precio_cmr">
        <v-row class="ma-0" align="center" >
          s/. {{ produ.getDescuentoCMR() }} UN  
          <v-col cols="4" class="pa-0 ml-2">
            <v-img src="@/assets/cmr-debito.svg" class="imgs" width="60"></v-img>
          </v-col>
        </v-row>
      </p>
      <p :class="produ.getDescuentoCMR() ? 'card_precio_principal ma-0': 'card_precio_cmr ma-0'">s/. {{ produ.getPrecio() }} UN</p>  
      <p v-if="produ.getDescuento()" class="card_precio_descuento ma-0">s/. {{ produ.getDescuento() }} UN</p> 
      </v-sheet>
    </v-sheet>
      <v-row class="ma-0">
        <v-sheet height="26">
        
        <v-icon v-if="produ.getTienda()" class="delivery"> mdi-domain </v-icon>
        <v-icon v-else class="delivery_off"> mdi-domain-off </v-icon>
        
        <v-icon v-if="produ.getDespacho()" class="delivery"> mdi-truck-delivery-outline </v-icon>
        <v-icon v-else class="delivery_off"> mdi-car-off </v-icon>
        </v-sheet>
      </v-row>
        <v-sheet height="30">
          <v-btn     
          @click="setProdCarrito(produ)"     
          class="mt-3 mb-2"
          color="success"
          >
          Agregar carrito
          </v-btn>          
        </v-sheet>
        
    <!-- Fin Cuerpo-->

  </v-card>
</template>

<script lang="ts">
import Producto from "@/interfaces/Producto";
import productItemmodel from "@/models/productItemModel";
import carritoModel from "@/models/carritoModel";
import { defineComponent, onMounted } from "@vue/runtime-core";
import { ref, Ref } from "vue";

export default defineComponent ({
    props: {  
      produ:
        { 
          type: Object as () => Array<productItemmodel>
        }
    },
    setup(){
      const prodCarritoArray: Ref<carritoModel | null> = ref(null);
      var   prodArray : Producto[]|any = []
      var   objetoProd :{}|any = {}
      
      onMounted( () => {
      })
       
      var setProdCarrito = (producto: Producto|any) =>{
        objetoProd[producto.id] = producto

        //prodCarritoArray.value = new carritoModel(objetoProd);
        console.log(objetoProd)
      }

      return {setProdCarrito}
    }
  
    
})
</script>


<style>
.v-img:hover {
  cursor: pointer;
}
.card_principal_producto:hover{
  border: 1px solid #c4c3c3;
  box-shadow: 1px 1px 5px#c4c3c3 !important;
}
.card_principal_producto{
  border: 1px solid transparent;
}
.card_principal_producto .card_titulo{
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  text-align: initial;
  text-transform: uppercase;
}
.card_principal_producto .card_subtitulo{
  font-size: 10px;
  font-weight: 500;
  color:#6b6d7e;
  text-align: initial;
  text-transform: uppercase;
}

.card_principal_producto .card_precio_cmr{
  color: red;
  font-size: 16px;
  font-weight: 400;
  text-align: initial;
  height: 16px;
}
.card_principal_producto .card_precio_principal{
  color: black;
  font-size: 16px;
  font-weight: 400;
  text-align: initial;
  height: 16px;
}
.card_principal_producto .card_precio_descuento{
  color: #6b6d7e;
  font-size: 10px;
  font-weight: 400;
  text-align: initial;
  height: 10px;
  text-decoration: line-through #6b6d7e;
}
.card_principal_producto .delivery{
  font-size: 25px;
  margin-right: 20px;
  color: #4caf50 !important;
}
.card_principal_producto .delivery_off{
  font-size: 25px;
  margin-right: 20px;
  color: grey !important;
}
</style>