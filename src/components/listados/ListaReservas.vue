<template>
<div>
  <b-table hover :fields="tabla.fields" :items="tabla.items" responsive :busy="tabla.isBusy">
    <template #table-busy>
      <div class="text-center text-danger my-2">
        <b-spinner class="align-middle"></b-spinner>
        <strong>Cargando...</strong>
      </div>
    </template>
    <!-- A custom formatted column -->
    <template #cell(nombre)="data">
      <b>{{ data.item.nombre }}</b>
    </template>
    <!-- A custom formatted column -->
    <template #cell(horario)="data">
      de {{ data.item.desde }} a {{data.item.hasta}}
    </template>
    <template #cell(accion)="row">
      <b-button id="btn-remover" size="sm" @click="remover(row.item, row.index, $event.target)">
        <b-icon-trash />
      </b-button>
    </template>


  </b-table>
</div>
</template>
<script>
import {
  createHelpers
} from "vuex-map-fields";
const {
  mapFields
} = createHelpers({
  getterType: "ReservaModule/getReservaField",
  mutationType: "ReservaModule/updateReservaField"
});

export default {
  computed: {
    ...mapFields({
      tabla: "table"
    })
  },
  data() {
    return {

    }
  },
  methods: {
    remover(item, index, event) {
      console.log(item, index, event)
      this.$swal({
        icon: 'warning',
        title: 'Atención',
        text: `¿Desea eliminar la reserva de ${item.nombre}?`,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No',
        confirmButtonText: 'Si, eliminarla!',
      }).then((result)=>{
        if (result.isConfirmed) {
          this.$swal({
            icon: 'success',
            title: 'Eliminación exitosa!',
          })
        }
      })
    }
  }
}
</script>
<style scoped>
#btn-remover {
  background-color: transparent;
  border-color: transparent;
  color: black;
}
</style>
