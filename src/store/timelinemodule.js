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
      id:0,
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
      var fecha = moment(data.fecha).format('YYYY-MM-DD').concat(" ").concat(data.desde);
      var fechaFin = moment(data.fecha).format('YYYY-MM-DD').concat(" ").concat(data.hasta);

      var newItem = {
        id: data.id-1,
        group:0,
        content: "Reserva "+ (data.id-1),
        start: fecha,
        end:fechaFin,
      }
      state.timeline.items.push(newItem)
    },
    setIncrementId(state){
      state.timeline.id++;
    },
    setDeleteItemTimeline(state, data){
      state.timeline.items = state.timeline.items.filter(val=>val.id !== data.id);
    }
  },
  actions:{
    addItemsTimeline(ctx,data){
      ctx.commit("setItems",data);
    },
    deleteItemTimeline(ctx, data){
      ctx.commit("setDeleteItemTimeline",data);
    }
  },
  getters:{
    getTimelineField
  }
}
