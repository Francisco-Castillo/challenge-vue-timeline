import { createHelpers } from "vuex-map-fields";

const { getReservaField, updateReservaField } = createHelpers({
    getterType: "getReservaField",
    mutationType: "updateReservaField"
});

export default{
  namespaced:true,
  state:{
    labels:{
      nombre:"Nombre",
      fecha:"Fecha",
      desde: "Desde",
      hasta: "Hasta",
      btnGuardar: "Guardar"
    },
    form:{
      id:0,
      nombre:"",
      fecha:new Date(),
      desde:"",
      hasta:""
    },
    table:{
      fields:[
        {key:'nombre', label:"Nombre", class:"text-left",tdClass: 'font-weight:bold'},
        {key:'horario', label:"Horario",class:"text-right",sortable: true,sortDirection:"asc"},
        {key:'accion', class:"text-right",label:"Acción"}
      ],
      items:[],
      isBusy:false
    }
  },
  mutations:{
    updateReservaField,

    setItems(state,data){
      var newItem = {
        id: data.id,
        nombre: data.nombre,
        desde: data.desde,
        hasta: data.hasta,
        fecha: data.fecha
      }
      state.table.items.push(newItem)
    },

    setTablaBusy (state, data) {
      state.table.isBusy = data;
    },

    setIncrementId(state){
      state.form.id++;
    },
    setDeleteItem(state, data){
      state.table.items = state.table.items.filter(val=>val.id !== data.id);
    }
  },
  actions:{
    addItems(ctx,data){
      ctx.commit("setItems",data);
      ctx.commit("setIncrementId");
    },
    deleteItem(ctx, data){
      ctx.commit("setDeleteItem",data);
    }
  },
  getters:{
    getReservaField,
  }
}
