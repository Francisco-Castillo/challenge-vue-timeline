<template>
<div>
  <b-container class="mt-30">
    <b-row>
      <b-col lg="12">
        <FormAgendarReserva />
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col lg="12">
        <Timeline/>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col lg="12">
        <ListaReservas />
      </b-col>
    </b-row>
  </b-container>
</div>
</template>
<script>
import FormAgendarReserva from "@/components/formularios/FormAgendarReserva.vue"
import ListaReservas from "@/components/listados/ListaReservas.vue"
import Timeline from "@/components/timeline/Timeline.vue"

export default {
components:{
  FormAgendarReserva,
  ListaReservas,
  Timeline
},

}
</script>
<style scoped>
.mt-30{
  margin-top:30px;
}
</style>
