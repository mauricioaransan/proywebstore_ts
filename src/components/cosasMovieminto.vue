<template>
<v-col lg="5" md="12" align=center>
              <v-card elevation="14" class="card_detalle_prod" height="634" width="550">
                <!-- Redes Sociales -->
                <v-row class="ma-0 row_icons" justify="end">
                  <v-icon class="mx-1">mdi-facebook</v-icon>
                  <v-icon class="mx-1">mdi-twitter</v-icon>
                  <v-icon class="mx-1">mdi-email</v-icon>
                </v-row>

                <!-- Inicio Caract Producto -->
                <v-col align=start>
                  <p class="titulo_prod font-weight-bold text-uppercase mb-0">
                  {{ product.getProductArray()[0].getNombre() }}
                </p>
                <p class="subtitulo_prod">
                  {{ product.getProductArray()[0].getMarca() }} - {{ product.getProductArray()[0].getTipo() }}
                </p>
                <v-sheet height="90" >
                  <p v-if="product.getProductArray()[0].getDescuentoCMR()" class="precio_cmr_prod  ma-0 ml-5">
                    <v-row class="ma-0" align="center">
                      S/. {{ product.getProductArray()[0].getDescuentoCMR() }} UN
                      <v-col cols="4" class="pa-0">
                        <v-img src="@/assets/cmr-debito.svg" class="ml-3" width="60"></v-img>
                      </v-col>
                    </v-row>
                  </p>
                  <p :class="product.getProductArray()[0].getDescuentoCMR()?'precio_prod ma-0 ml-5' :'precio_cmr_prod ma-0 ml-5'">S/. {{ product.getProductArray()[0].getPrecio() }} UN</p>
                  <p v-if="product.getProductArray()[0].getDescuento()" class="precio_desc_prod ml-5">S/. {{ product.getProductArray()[0].getDescuento() }} UN</p>
                </v-sheet>
                </v-col>
                <!-- Fin Caract Producto -->

                <v-divider class="mb-1"></v-divider>

                <!-- Inicio Botones-->
                <v-row class="ma-0">
                  <v-col cols="8" class="pl-5">
                    <v-btn
                      
                      height="70"
                      class="boton_add_carrito"
                      color="success"
                      block
                    >
                      Agregar al carrito
                    </v-btn>
                    <!-- <v-row v-else class="ma-0" align="center">
                      <v-col cols="4" class="pa-0 ma-0">
                        <v-btn
                          height="70"
                          elevation="4"
                          block=""
                          color="success"
                          @click="restar(productDetail.id)"
                        >
                          <v-icon v-if="productDetail.cantidad > 1" size="60"
                            >mdi-chevron-left</v-icon
                          >
                          <v-icon v-else size="50">mdi-delete-outline</v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="4" class="pa-0 ma-0" align="center">
                        <span>{{ productDetail.cantidad }} UN</span>
                      </v-col>
                      <v-col cols="4" class="pa-0 ma-0">
                        <v-btn
                          height="70"
                          block=""
                          elevation="4"
                          color="success"
                          @click="sumar(productDetail.id)"
                        >
                          <v-icon size="60">mdi-chevron-right</v-icon>
                        </v-btn>
                      </v-col>
                    </v-row> -->
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      color="success"
                      variant="text"
                      height="70"
                      class="boton_carrito_details"
                    >
                      <v-icon>mdi-heart-plus</v-icon>
                    </v-btn>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      color="success"
                      variant="text"
                      height="70"
                      class="boton_carrito_details"
                    >
                      <v-icon>mdi-menu</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <!-- Fin Botones-->

                <v-divider></v-divider>

                <!-- Extras -->

                <v-sheet>
                  <p class="titulo_entrega ml-5">tipo de entrega</p>
                  <!-- 1er Row -->
                  <v-row class="ma-0">
                    <v-col cols="6" align=left>
                      <v-card
                        elevation="0"
                        outlined
                        shaped
                        height="80"
                        class="card_izquierda"
                      >
                        <v-card-text class="card_texto">
                          <v-row align="center">
                            <v-col cols="2" class="pa-0" align="center">                          
                              <v-icon v-if="product.getProductArray()[0].getDespacho()" large> mdi-truck-delivery-outline </v-icon>
                              <v-icon v-else large color="grey"> mdi-car-off </v-icon>
                            </v-col>
                            <v-col cols="10">
                              <p class="ma-0 despacho">Despacho a Domicilio</p>
                              <p v-if="product.getProductArray()[0].getDespacho()" class='ma-0 disponible'>Disponible</p>
                              <p v-else class='ma-0 no_disponible'>No Disponible</p>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="6" align=left>
                      <v-card elevation="0" shaped height="80" class="card_derecha">
                        <v-card-text class="card_texto">
                          <v-row align="center">
                            <v-col cols="2" class="pa-0" align="center">
                              <v-img src="../assets/ceemeverde.png"></v-img>
                            </v-col>
                            <v-col cols="10" class="pt-0 pr-0">
                              <p class="ma-0">
                                Tus compras con CMR o Banco Falabella acumulan
                                puntos
                              </p>
                              <p class="ma-0 promocion">Ver promociones</p>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>

                  <!-- 2do row -->
                  <v-row class="ma-0" align="center">
                    <v-col cols="6" align=left>
                      <v-card
                        elevation="0"
                        outlined
                        shaped
                        height="80"
                        class="card_izquierda"
                      >
                        <v-card-text class="card_texto">
                          <v-row align="center">
                            <v-col cols="2" class="pa-0" align="center">
                              <v-icon v-if="product.getProductArray()[0].getTienda()" large> mdi-domain </v-icon>
                              <v-icon v-else large color="grey"> mdi-domain-off </v-icon>
                            </v-col>
                            <v-col cols="10">
                              <p class="ma-0 despacho">Retiro en tienda</p>
                              <p v-if="product.getProductArray()[0].getTienda()" class='ma-0 disponible'>Disponible</p>
                              <p v-else class='ma-0 no_disponible'>No Disponible</p>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    <v-col cols="6" align=left>
                      <v-card elevation="0" shaped height="80" class="card_derecha">
                        <v-card-text class="card_texto">
                          <v-row align="center" class="ma-0">
                            <v-col cols="2" class="pa-0" align="center">
                              <v-img src="../assets/ceemeverde.png"></v-img>
                            </v-col>
                            <v-col cols="10" class="pa-0 pl-3">
                              <p class="ma-0">¿Aun no tienes tu CMR Visa?</p>
                              <p class="ma-0 subtitulo">
                                ¡Pídela ahora y obtén S/80 de descuento!
                              </p>
                            </v-col>
                          </v-row>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-card>
            </v-col>
</template>

<script>
export default {

}
</script>

<style>

</style>