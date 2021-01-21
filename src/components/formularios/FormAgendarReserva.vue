<template>
<div>
  <b-card>
    <h5 class="title">{{titleCard}}</h5>
   <div>
     <b-form id="frm-reservas" class="mt-4">
       <b-form-row>
         <b-col lg="4">
           <label for="input-nombre">{{label.nombre}}</label>
           <b-form-input id="input-nombre" class="mb-2 mr-sm-2 mb-sm-0" v-model="$v.form.nombre.$model"/>
         </b-col>
         <b-col lg="2">
           <label for="input-fecha">{{label.fecha}}</label>
           <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
              <b-form-datepicker id="input-fecha" placeholder="30/9/2019" v-model="$v.form.fecha.$model" :min="min" :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" class="mb-2"/>
           </b-input-group>
         </b-col>
         <b-col lg="2">
           <label for="input-desde">{{label.desde}}</label>
           <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-timepicker id="input-desde" v-model="$v.form.desde.$model" minutes-step="15" locale="es" placeholder="12:00"/>
           </b-input-group>
         </b-col>
         <b-col lg="2">
           <label for="input-hasta">{{label.hasta}}</label>
           <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
             <b-form-timepicker id="input-hasta" v-model="$v.form.hasta.$model" minutes-step="15" locale="es" placeholder="13:00" dropright/>
           </b-input-group>
         </b-col>
         <b-col lg="1">
           <label for="btn-guardar"> </label>
            <b-input-group class="mb-0 mr-sm-2 mb-sm-0 mt-2">
              <b-button id="btn-guardar" @click="agendar()" :disabled="$v.$invalid">{{label.btnGuardar}}</b-button>
            </b-input-group>
         </b-col>
       </b-form-row>

   </b-form>

   </div>
 </b-card>
</div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { mapActions} from "vuex";
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "ReservaModule/getReservaField",
  mutationType: "ReservaModule/updateReservaField"
});

export default {
  computed:{
    ...mapFields({form :"form", label:"labels"})
  },
  data(){
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    return{
      titleCard : "RESERVAR",
      min: minDate,
    }
  },
  validations:{
    form:{
      nombre: {
        required,
      },
      fecha: {
        required,
      },
      desde: {
        required,
      },
      hasta: {
        required,
      },
    }
  },
  methods:{
    ...mapActions("ReservaModule", ["addItems"]),
    ...mapActions("TimelineModule",["addItemsTimeline"]),
    clearForm(){
      this.form.nombre="",
      this.form.fecha=null,
      this.form.desde="",
      this.form.hasta=""
    },
    agendar(){
      this.addItems(this.form);
      this.addItemsTimeline(this.form);
      this.clearForm();
    },

  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
.title{
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #138d75 ;
}

#btn-guardar{
  background-color: #16a085;
  color:white;
}
</style>
