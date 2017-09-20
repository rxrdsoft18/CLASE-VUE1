/*new Vue({
  el:'#app25',
  created(){
    this.$http.get('http://sw14200042.esy.es/sesiones/obtiene_usuario_id.php')
    .then(function(respuesta){
      //console.log(respuesta);
      this.empleados=respuesta.body;
    })
  },
  data:{
    id:'',
    name:'',
    ape:'',
    correo:'',
    empleados:[]
  },
  methods:{
    anadir(id,personal,ape,correo){
      this.empleados.unshift(
        {
          id:id,
          nombre:personal,
          apellido:ape,
          correo:correo
        }
        );
      this.id='';
      this.name='';
      this.ape="";
      this.correo="";
    },
    eliminar(index){
      this.empleados.splice(index,1);
    }
  },
  computed:{
    filterItems(){
      var self=this;
      return this.empleados.filter(function(item){
        return item.nombre.indexOf(self.name)>-1;
      });
    }
  }
});
*/
new Vue({
  el:'#app2',
  created(){
    this.$http.get('http://sw14200042.esy.es/sesiones/mostrarUsu.php')
        .then(respuesta=>{
          this.usuarios=respuesta.body;
        })
  },
  data:{
    name:"",
    usuarios:[],
  },
  computed:{
    filterItems(){
      var self=this;
      return this.empleados.filter(function(item){
        return item.nombre.indexOf(self.name)>-1;
      });
    }
  }
})
