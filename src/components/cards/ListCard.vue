<template>
    <!-- explicacion de esto por favor -->
    <div v-if="!productsArray">
        loading..
    </div>
    <v-row v-else>
      <div class="px-5 py-5" v-for="produ in productsArray.getProductArray()" :key="produ.id">
        <CardView :produ="produ" />
      </div>
    </v-row>
    
</template>

<script lang="ts">
import CardView from './CardView.vue'
import { defineComponent, onMounted } from 'vue';
import productItemmodel from '@/models/productItemModel';
import { ProductoServicios } from '@/services/ProductoServicios';


export default defineComponent ({
  props: {
    productsArray:
        { 
          type: Object as () => Array<productItemmodel>
        },
    setup() {
      
      return{
        model: ProductoServicios
      }
    }
  },
    components:{
        CardView
    },


})
</script>

<style>

</style>