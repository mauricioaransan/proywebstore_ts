<template>
  <v-container fluid class="pa-0">
    <!-- Inicio imagenes verdes (sin completar) -->
    <a href="http://www.tottus.com.pe" target="_blank">
    <v-card height="60" color="success" class="termi d-none d-lg-flex mb-0">
     
        <v-row justify="center" align="center" :class="texto4">
          <h1 class="text-uppercase font-weight-bold">
            * Aplican términos y condiciones
          </h1>
          <v-col cols="2" class="pt-2" align="center">
            <v-card height="35" width="200">
              <h3>VER MÁS</h3>
            </v-card>
          </v-col>
        </v-row>
      


     <v-row justify="center" align="center" :class="texto3">
          <h1 class="text-uppercase font-weight-bold">
            Por compras mayores a s/. 350.00
          </h1>
        </v-row>

     <v-row justify="center" align="center" :class="texto2">
          <h1 class="text-uppercase font-weight-bold">
           Te regalamos s/ 50.00 en tu 1ra compra
          </h1>          
        </v-row>

     <v-row justify="center" align="center" :class="texto1">
          <h1 class="text-uppercase font-weight-bold">
          Ya empezó el CYBER WOW!!
          </h1>          
        </v-row>
     
    </v-card>
    </a>
    <!-- Fin imagenes verdes -->

    <!-- Inicio enlaces externos -->
    <v-card
      class="mb-7 card-enlaces d-none d-lg-flex"
      height="24"
      elevation="0"
    >
      <v-row justify="space-between" class="px-6 ma-0">
        <v-col cols="5" class="py-0">
          <v-row class="ma-0 enlaces">
            <a href="https://www.cmrpuntos.pe/" target="_blank">CMRPuntos</a>
            <a
              href="https://www.bancofalabella.pe/"
              target="_blank"
              class="mx-2"
              >Banco</a
            >
            <a
              href="https://www.viajesfalabella.com.pe/"
              target="_blank"
              class="mx-2"
              >Viajes</a
            >
            <a
              href="https://web.segurosfalabella.com/pe/"
              target="_blank"
              class="mx-2"
              >Seguros</a
            >
            <a
              href="https://www.sodimac.com.pe/sodimac-pe/"
              target="_blank"
              class="mx-2"
              >Sodimac</a
            >
            <a
              href="https://www.falabella.com.pe/falabella-pe"
              target="_blank"
              class="mx-2"
              >Falabella</a
            >
            <a href="https://www.linio.com.pe/" target="_blank" class="mx-2"
              >Linio</a
            >
          </v-row>
        </v-col>
        <v-col cols="4">
          <v-row class="pa-0" justify="end">
            <v-btn size="x-small" class="btn-icon">
              <v-icon start> mdi-phone </v-icon>
              <span class="hidden-sm-and-down">513-3355</span>
            </v-btn>
            <v-btn size="x-small" class="btn-icon">
              <v-icon start> mdi-map-marker </v-icon>
              <span class="hidden-sm-and-down">Tiendas Cercanas</span>
            </v-btn>
            <v-btn size="x-small" class="btn-icon">
              <v-icon start> mdi-help-circle-outline </v-icon>
              <span class="hidden-sm-and-down">Centro de ayuda</span>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-card>
    <!-- Fin enlaces externos -->

    <!-- inicio row buscador -->
    <v-row class="d-none d-lg-flex">
      <v-col cols="12" class="pa-0 px-3">
        <v-row align="center" class="mb-5 px-7" justify="space-between">
          <!-- Inicio Logo tottus-->
          <router-link to="/" class="mr-1 ml-3">
            <v-img
              src="@/assets/tottus.png"
              alt="Logo Tottus"
              aspect-ratio="1.7"
              contain
              height="52"
              width="170"
            >
            </v-img>
          </router-link>
          <!-- Fin Logo tottus-->

          <!-- Inicio Buscador -->
          <v-sheet width="650" class="buscador ml-6 py-1">
            <v-card width="600" variant="outlined" class="card_buscador">
              <v-row align="center" class="pr-3">
                <v-col cols="3" class="pr-0 py-5 col-card_buscador">
                  <v-select
                    density="compact"
                    :items="items"
                    dense
                    variant="plain"
                  ></v-select>
                </v-col>
                <v-col class="config pl-6 col-2-card_buscador">
                  <v-row justify="center" align="center" class="pl-8">
                    <!-- @keyup="procesarInput" -->
                    <v-text-field
                      class="text-field"
                      placeholder="¿Qué estás buscando?"
                      persistent-placeholder
                      variant="plain"
                      
                      v-model="texto"
                    ></v-text-field>
                    <v-btn color="white" size="small">
                      <v-icon size="25">mdi-magnify</v-icon>
                    </v-btn>
                  </v-row>
                </v-col>
              </v-row>
            </v-card>
          </v-sheet>
          <!-- fin Buscador -->

          <!-- Inicio Boton Lugar -->
          <v-col xl=4 lg=2 class="pa-0 btn_regist d-none d-lg-flex d-xl-flex" align="center">
            <v-row justify="space-between" class="align-content-start " >
              <v-btn
                variant="outlined"
                class="pl-3 pr-16 d-none d-lg-none d-xl-flex"                
                height="47"
              >
                <v-row class="ma-0" align="center" justify="start">
                 <v-icon class="mr-6">
                   mdi-store
                 </v-icon>
                  <span> Tottus Atocongo </span>
               </v-row>
              </v-btn>
              
              <!-- Fin botón lugar -->

              <!-- Inicio boton Login -->

              <v-btn-toggle divided class="">
                <v-btn color="success">Iniciar Sesion</v-btn>
                <v-btn>Registrarse</v-btn>
              </v-btn-toggle>
            </v-row>
            <!-- Fin Boton Login -->
          </v-col>

          <!-- Inicio icon carrito -->

            <BtnCarrito  :borde ="borde" :visible="'d-none d-lg-flex'"/>

          <!-- Fin icon Carrito -->
        </v-row>
      </v-col>
    </v-row>
    <!-- Fin row buscador -->

    <!-- Inicio filtros internos -->

    <!-- ************ UTITLIZAR EL DIALOG COMPONENT , quitar el justify************ -->
    
    <v-row justify="space-around" class="ma-0 d-none d-lg-flex">
      <router-link :to="`/filtroview/${item.filtro}`" v-for="(item, index) in filtros" :key="index">
       <v-btn
          class="pa-0"
          variant="text"
          @click="dialog = !dialog"
        >
       
          {{item.title}}
      </v-btn>      
        </router-link>

    <!-- mostrar el dialogo 
     <v-dialog
      v-model="dialog"
    >
      <CardF/>
    </v-dialog> -->
    </v-row>
    <!-- Fin filtros internos -->

    <v-sheet height="50" color="" class="d-md-flex d-lg-none">
      <v-row
        class="ma-0 "
        justify="space-between"
        align="center"
      >
        <v-icon> mdi-menu</v-icon>
        <router-link to="/" class="mr-1 ml-3">
          <v-img
            src="@/assets/tottus.png"
            alt="Logo Tottus"
            aspect-ratio="1.7"
            contain
            height="52"
            width="170"
          >
          </v-img>
        </router-link>
        <v-sheet color="transparent">
          <v-row class="ma-0">
             <BtnCarrito  :borde ="'0'" :visible="'icon_carrito d-md-flex d-lg-none'"/>

           <v-avatar size="40">
                  <v-icon color="green">mdi-account</v-icon>
                </v-avatar>
          </v-row>
        </v-sheet>
      </v-row>
    </v-sheet>

    <v-sheet height="50" class="d-md-flex d-lg-none buscar-reponsive">
      <v-text-field
      variant="plain"
      prepend-icon="mdi-magnify"
        counter="25"
        hint="This field uses counter prop"
      ></v-text-field>
    </v-sheet>

    <v-sheet height="50" class="d-md-flex d-lg-none">
      <v-btn
        variant="text"
        block
      >
       <v-row justify="space-between">
         <v-col cols="8">
            <v-row class="ma-0" justify="start">
              <v-icon class="mr-5">mdi-store</v-icon>
              Tottus Atocongo
            </v-row>
         </v-col>
         <v-col cols="1" align=end>
           <v-icon>mdi-chevron-right</v-icon>
         </v-col>
       </v-row>
      </v-btn>
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import BtnCarrito from "@/components/botones/BtnCarrito.vue";
//import CardF from "./CardF.vue";

export default defineComponent ({
  components: { BtnCarrito
  },

  setup() {
    var texto1 = ref("d-flex");
    var texto2 = ref("d-none");
    var texto3 = ref("d-none");
    var texto4 = ref("d-none");
    var time = ref (16);
    const texto = ref("");
    const borde = "1px solid green !important"    
    const filtros:{} = [
        {filtro: "comida",title: "Comida"},
        {filtro: "bebida",title: "Bebida"},
        {filtro: "computo",title: "Cómputo"},
        {filtro: "all",title: "Todos"}]
    //const select:string = "Todas las categorías"
    const select:{}|any = ["todas las cateogiras"]
    const items:{}|any = ["Todas las categorías","Supermercado","Semana Santa","Bebé y Niños","Electrodomésticos","Tecnología","Dormitorio","Hogar","Deportes","Ropa","Preciazos",]
    const items_botton:{}|any = ["Supermercado","Semana Santa","Bebé y Niños","Electrodomésticos","Tecnología","Dormitorio","Hogar","Deportes","Ropa","Preciazos",]
    return { texto,  borde, filtros,items, items_botton,select,texto1,texto2,texto3,texto4,time};
  },

    mounted() {
    setInterval(() => {
      if(this.time == 12) {
          this.texto1   = "d-none";
          this.texto2  = "d-flex";
          this.texto3  = "d-none";
          this.texto4  = "d-none";
      }
      if(this.time===8){
          this.texto1   = "d-none";
          this.texto2  = "d-none";
          this.texto3  = "d-flex";
          this.texto4  = "d-none";
      }
      if(this.time===4){
          this.texto1   = "d-none";
          this.texto2  = "d-none";
          this.texto3  = "d-none";
          this.texto4  = "d-flex";
          
      }
      if(this.time===0){
          this.texto1   = "d-flex";
          this.texto2  = "d-none";
          this.texto3  = "d-none";
          this.texto4  = "d-none";
          this.time   = 17
      }
       this.time -= 1
    }, 500)
  },


  data() {
    return {
      
      overlay: false,
       dialog: false,  
      
    };
  },
  
});
</script>

<style>
v-toolbar {
  padding: 0 !important;
}
.card-enlaces {
  background-color: #eeeeee;
  border-radius: 0;
}
.card-enlaces .btn-icon {
  height: 24px !important;
  font-size: 12px;
  border-radius: 0;
  text-transform: capitalize;
}
.card-enlaces .btn-icon:hover {
  opacity: 0.4;
  background-color: #eeeeee;
}

.enlaces a {
  text-decoration: none;
  color: black;
  font-size: 14px;
}
.enlaces a:hover {
  opacity: 0.4;
}
.buscador .v-field__field {
  padding: 0 !important;
  min-height: 20px !important;
  width: 200px !important;
}

.buscador .v-field__input {
  color: #0b0c4e !important;
  width: 300px !important;
  padding-inline-end: 0 !important;
  padding-top: 0 !important;
}
.buscador .v-input__details {
  padding: 0 !important;
  margin: 0 !important;
  grid-area: null !important; /* verificar esto*/
}
.buscador .v-input__append {
  align-content: center !important;
  padding-top: 0 !important;
  margin: 0px !important;
}
.buscador .v-input--horizontal {
  grid-template-areas: 0 !important;
  grid-template-columns: 0 !important;
  grid-template-rows: 0 !important;
}

.buscador .v-input--horizontal {
  grid-template-areas: none !important;
}
.config .v-input {
  display: block;
}
.config .v-input .v-input__details {
  min-height: 0px !important;
  height: 0px !important;
}
.config .v-btn {
  background-color: #4caf50;
  height: 45px !important;
  width: 30px !important;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0 !important;
  margin: 0 !important;
}

.btn_regist .v-btn-group .v-btn {
  background-color: #4caf50;
  color: white;
  padding-left: 8px;
  padding-right: 8px;
}
.boton .v-btn__overlay {
  text-align: left !important;
}

.v-sheet .v-card {
  color: #4caf50;
}

.v-sheet .v-card .v-field__append-inner .mdi-menu-down {
  color: #0b0c4e;
}

.termi .v-card {
  background-color: #1b5e20;
  color: white !important;
}



.card_buscador .v-messages {
  min-height: 0px;
}
.card_buscador .v-field__append-inner {
  margin: 0 !important;
  padding: 0 !important ;
  height: 24px !important;
}
.card_buscador .v-field {
  padding-right: 0 !important;
  border-right: 1px solid rgb(198, 199, 196);
}

.card_buscador .v-field__field {
  width: 150px !important;
}
.card_buscador .col-card_buscador {
  padding-top: 23px !important;
  padding-bottom: 22px !important;
}
.card_buscador .col-card_buscador .v-field__input input {
  size: 0 !important;
  height: 0 !important;
}
.card_buscador .col-card_buscador .v-select__selection-text {
  font-size: 14px;
  padding-left: 5px;
  height: 18px !important;
  text-align: center !important;
}

.card_buscador .col-2-card_buscador .v-field__input input {
  width: 300px !important;
}


.buscar-reponsive {
  border: 1px solid #4caf50;
  border-radius: 10px;
}
.buscar-reponsive .v-input__prepend{
  padding-top: 12px;
  padding-left: 5px;
}

.buscar-reponsive .v-messages{
  min-height: 0 !important;
}
.buscar-reponsive .v-field{
  height: 30px;
  width: 600px;
  padding-top: 10px;
}
.buscar-reponsive .v-input .v-input__details{
  min-height: 0 !important;
  margin: 0 !important;
  height: 0 !important;
  padding-top: 0;
}
.buscar-reponsive .v-field__field{
  width: 600px;
  min-height: 30px !important;
  padding-top: 0;
  padding-bottom: 0;
}
.buscar-reponsive .v-field__input{
  width: 600px !important;
  padding-top: 0;
  height: 30px;
}
</style>
