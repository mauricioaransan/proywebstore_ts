<template>  
<v-sheet v-if="!productos" class="cargador">
    <v-overlay  model-value class="align-center justify-center">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </v-sheet>
  <v-row v-else >  
    <v-col  md=3 lg=2>
      <v-card class="my-4 ml-0 pa-2 pl-4">
        <div class="text-caption">Tecnología</div>
        <div class="text-title font-weight-bold text-uppercase">
          {{ productos.getProductArray()[0].tipo }}
        </div>
        <div class="text-caption">({{ productos.getProductArray().length}} Resultados)</div>
      </v-card>
      <v-card class="my-4 ml-0 pa-2 pl-4">
        <div class="text-title font-weight-bold text-uppercase">filtro</div>
      </v-card>
   
      <v-card class="my-4 ml-0 pa-2 pl-4 overflow-auto" height="500" >        
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title> Marca </v-expansion-panel-title>
            <v-expansion-panel-text v-for="(marca,i) in marcas " :key="i" class="pa-o  ">
              <v-btn block variant="text" class="pa-0 btn_marca">
                <v-row class="ma-0" justify="start" align="start">
                  <v-icon class="mr-1">mdi-square</v-icon>
                  <span class="texto_marca">{{marca.marca}} - {{marca.cantidad}}</span>
                </v-row>
              </v-btn>
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-title> Item </v-expansion-panel-title>
            <v-expansion-panel-text v-for="(marca,i) in marcas " :key="i" class="pa-o">
              <v-btn block variant="text" class="pa-0 btn_marca">
                <v-row class="ma-0" justify="start" align="start">
                  <v-icon class="mr-1">mdi-square</v-icon>
                  <span class="texto_marca">{{marca.marca}} - {{marca.cantidad}}</span>
                </v-row>
              </v-btn>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-col>

    <v-col  md=9 lg=10  >
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 mt-4 ml-0 mr-2">
            <v-row align="center">
               <!-- cambiar esto de los COLS -->
              <v-col cols="5">
                <v-row align="center">
                  <v-col cols="2" class="icono_swap_vertical px-0" align=end>
                    <v-icon>mdi-swap-vertical</v-icon>
                  </v-col>
                  <v-col cols="9" class="buscador_filtro">
                    <div class="text-subtitle-2">Ordenar por</div>
                    <v-select :items="itemsSelect"> </v-select>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="pa-3 mt-4 ml-0 mr-2">
            <v-row>
              <div
                v-for="prodList in productos.getProductArray()"
                :key="prodList.id"
                class="px-5 py-5"
              >
                <CardView :produ="prodList" />
              </div>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-col>

  </v-row>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import { Ref, ref } from "vue";
import CardView from "@/components/cards/CardView.vue";
import { productoServicios } from "@/services/ProductoServicios";
import { useRoute } from "vue-router";
import  productModel  from "@/models/productModel";
export default defineComponent({
  components: {
    CardView,
  },
  setup() {
    const select = ref("Seleccionado");
    const itemsSelect = ref([
      "Recomendados",
      "Favoritos",
      "Popularidad",
      "Relevancia",
      "Mas Nuevos",
      "Precio de menor a mayor",
      "Precio de mayor a menos",
    ]);
    const items = ref([
      { text: "Dashboard", disabled: false, href: "breadcrumbs_dashboard" },
      { text: "Link 1", disabled: false, href: "breadcrumbs_link_1" },
      { text: "Link 2", disabled: true, href: "breadcrumbs_link_2" },
    ]);

    const productos: Ref<productModel|null> = ref(null);
    const marcas: Ref<any> = ref(null);
    const { tipo } = useRoute().params;

    const getProductosFiltro = async () => {
      var resp = null;
      var marca = null;
      if (tipo !== "all") {
        resp = await productoServicios.getComplementos(tipo);
        marca = await productoServicios.getMarcaProd(tipo);
      } else {
        resp = await productoServicios.getProductos();
        marca = await productoServicios.getAllMarcasProd();
      }
      marcas.value = marca;
      productos.value = new productModel(resp);
    };
    onMounted(() => {
      getProductosFiltro();
    });

    return { items, tipo, productos, marcas, itemsSelect, select };
  },
});
</script>

<style>
.buscador_filtro .v-input {
  height: 30px;
  
}
.buscador_filtro .v-input .v-input__control {
  height: 30px !important;
  min-height: 30px !important;
}
.buscador_filtro .v-field {
  height: 30px !important;  
  background-color: white !important;
}
.buscador_filtro .v-field--active {
  background-color: white !important;
}
.buscador_filtro .v-field__field {
  height: 30px !important;
  min-height: 30px !important;
  padding: 0;
}

.buscador_filtro .v-field__append-inner {
  padding: 0 !important;
  padding-top: 2px !important;
}
.buscador_filtro .v-input__details {
  padding: 0 !important;
  margin: 0 !important;
  min-height: 0 !important;
  background-color: white !important;
}
.buscador_filtro .v-input__details .v-messages {
  height: 0 !important;
  min-height: 0 !important;
}


.btn_marca .texto_marca {
  font-size: 12px !important;
  padding-top: 4px;
}



.icono_swap_vertical {
  font-size: 25px;
}
</style>
