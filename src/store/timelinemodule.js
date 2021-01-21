import { createHelpers } from "vuex-map-fields";
import moment from "moment"
const { getTimelineField, updateTimelineField } = createHelpers({
    getterType: "getTimelineField",
    mutationType: "updateTimelineField"
});
export default{
  namespaced:true,
  state:{
    timeline:{
      id:1,
      groups: [{
        id: 0,
        content: ''
      }],
      items: [],
      options: {
        //stack: false,
        orientation: {
          axis: "top",
          item: "top"
        },
        //zoomMax: 31536000000, // just one year
        zoomMax: 87600900, // 10,000 years is maximum possible
        zoomMin: 10000000 // 10ms
      }
    }
  },
  mutations:{
    updateTimelineField,
    setItems(state,data){
      console.log("FECHA: ",data.fecha);
      console.log("Hora inicio:",data.desde);

      var fecha = moment(data.fecha).format('YYYY-MM-DD').concat(" ").concat(data.desde);
      var fechaFin = moment(data.fecha).format('YYYY-MM-DD').concat(" ").concat(data.hasta);

      var newItem = {
        id: data.id,
        group:0,
        content: "Reserva "+data.id,
        start: fecha,
        end:fechaFin,
      }
      state.timeline.items.push(newItem)
    },
    setIncrementId(state){
      state.timeline.id++;
    }
  },
  actions:{
    addItemsTimeline(ctx,data){
      ctx.commit("setItems",data);
      ctx.commit("setIncrementId")
    }
  },
  getters:{
    getTimelineField
  }
}
