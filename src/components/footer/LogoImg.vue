<template>
  <v-sheet class="img_libro mr-2" :width="ancho" :height="alto" color="transparent">
    <v-img class="mt-4" cover :src="imagen_logo"> </v-img>
</v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
    props : {
        alto:Number,
        ancho:Number,
        imagen_logo:String
    }
})
</script>

<style>

</style>