<template>
    <v-app>
      
        <v-app-bar height="205" class="pa-0">
        <Buscador/> 
      </v-app-bar>
        <v-main>
          <router-view/>
        </v-main>

      <v-footer class="pa-0">
        <Footer />
      </v-footer>
    </v-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import Buscador from '@/components/appbar/Buscador.vue'
import Footer from '@/components/footer/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Buscador,Footer
  },
  
  data () {
    return {
      //
    }
  },
})
</script>

<style>
header{
  height: 210px !important;
}
.v-toolbar__content{
  padding-top: 0 !important;
}
.cargador {
  height: 100vh;
}
</style>