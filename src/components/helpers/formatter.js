export default{
  methods:{
    fecha: function(value) {
            return `${moment(value).format("DD/MM/YYYY")}`;
        },
  }
}
