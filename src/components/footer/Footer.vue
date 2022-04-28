<template>
<v-card  color="#25262d" class="card_footer">
    <v-row class="ma-0">
    <v-col xl=4 lg=4 md=6 sm=6 cols=12 class="pa-6 d-block">
       <p class="titulo_footer"> Nuestra Empresa</p>       
       <v-col cols="12" class="pa-0 columna" justify=center v-for="(enlace, i) in nuestraEmpresa" :key=i>
          <a class="enlace" :href="enlace.href" target="_blank"> {{enlace.titulo}}</a>           
       </v-col>
       <p class="titulo_footer"> Certificaciones</p>
       <LogoImg :alto="60" :ancho="90" :imagen_logo="require('@/assets/footer/logo-bh-small.png')" />
    
    </v-col>
     <v-col xl=4 lg=4 md=6 sm=6 cols=12 class="pa-6">
        <p class="titulo_footer"> Tottus</p>       
       <v-col cols="12" class="pa-0" v-for="(enlace, i) in tottus" :key=i>
          <a class="enlace" :href="enlace.href" target="_blank"> {{enlace.titulo}}</a>           
       </v-col>
       <v-row class="ma-0">
          <LogoImg :alto="24" :ancho="40" :imagen_logo="require('@/assets/footer/amex-card_v3.jpeg')" />  
          <LogoImg :alto="24" :ancho="40" :imagen_logo="require('@/assets/footer/cmr-card.svg')" />  
          <LogoImg :alto="24" :ancho="40" :imagen_logo="require('@/assets/footer/visa-card.jpeg')" /> 
          <LogoImg :alto="24" :ancho="40" :imagen_logo="require('@/assets/footer/master-card.svg')" /> 
          <LogoImg :alto="24" :ancho="40" :imagen_logo="require('@/assets/footer/logo-fpay-1.png')" /> 
       </v-row>
    </v-col>
   <v-col xl=4 lg=4 md=6 sm=6 cols=12 class="pa-6 d-display-block">
       <AtCliente :icono="'mdi-phone-in-talk'" :num_telf="'513 - 3355'" :titulo="'Atención por Teléfono'"/>
       <AtCliente :icono="'mdi-whatsapp'" :num_telf="'+51 994999666'" :titulo="'Atención por WhatsApp'"/>
       <LogoImg :alto="60" :ancho="100" :imagen_logo="require('@/assets/footer/libro-de-reclamaciones.png')" />       
    <v-row class="ma-0 mt-4">
        <v-btn variant=outlined size=small icon="mdi-facebook" class="mr-3"></v-btn>
        <v-btn variant=outlined size=small icon="mdi-twitter" class="mr-3"></v-btn>
        <v-btn variant=outlined size=small icon="mdi-youtube" class="mr-3"></v-btn>
        <v-btn variant=outlined size=small icon="mdi-instagram" class="mr-3"></v-btn>              
    </v-row>
    </v-col>
</v-row>
</v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import AtCliente from "./AtCliente.vue"
import LogoImg from "./LogoImg.vue"

export default defineComponent({
    components:{
        AtCliente,LogoImg
    },    
    setup(){
        const nuestraEmpresa= ref([
            {titulo: "Código de Ética", href:"http://www.tottus.com.pe"},
            {titulo: "Política de Prevención de Delitos", href:"http://www.tottus.com.pe"},
            {titulo: "Compra Segura", href:"http://www.tottus.com.pe"},
            {titulo: "Políticas de Privacidad", href:"http://www.tottus.com.pe"},
            {titulo: "Políticas de Cookies", href:"http://www.tottus.com.pe"},
            {titulo: "Términos y Condiciones", href:"http://www.tottus.com.pe"},
            {titulo: "Condiciones de Campañas", href:"http://www.tottus.com.pe"},
            {titulo: "Informativo Videovigilancia", href:"http://www.tottus.com.pe"},
        ])  
        const tottus= ref([
            {titulo: "Venta Empresa", href:"http://www.tottus.com.pe"},
            {titulo: "¿Quienes Somos?", href:"http://www.tottus.com.pe"},
            {titulo: "Reporte de Sostenibilidad", href:"http://www.tottus.com.pe"},
            {titulo: "Canal de Integridad", href:"http://www.tottus.com.pe"},
            {titulo: "Preguntas Frecuentes", href:"http://www.tottus.com.pe"},
            {titulo: "Mis Comprobantes Electrónicos", href:"http://www.tottus.com.pe"},
            {titulo: "Responde nuestra encuesta", href:"http://www.tottus.com.pe"},
            {titulo: "Últimos Ganadores", href:"http://www.tottus.com.pe"},
            {titulo: "Bases y condiciones del concurso", href:"http://www.tottus.com.pe"},
            {titulo: "Cyber Wow", href:"http://www.tottus.com.pe"},
            {titulo: "Medida Cautelar Indecopi - Panetones", href:"http://www.tottus.com.pe"},
            {titulo: "Medida Cautelar Indecopi - Helados", href:"http://www.tottus.com.pe"},
        ])  


        return { nuestraEmpresa, tottus}
    }
})
</script>

<style>
 .card_footer {
     width: 100%;
     color: white;
 }
 .card_footer .titulo_footer {
     
     color: rgb(100, 167, 11);
     font-weight:bold;
     font-size: 16px;
     margin-bottom: 8px;
     margin-top: 5px;
 } 
 .card_footer  .enlace , .card_footer .atencion{
     color: white;
     font-size: 14px;    
 }
 .card_footer .img_logo_bh {
     border-radius: 5px;
 }
.card_footer .numero{
    font-size: 21px;
}
</style>