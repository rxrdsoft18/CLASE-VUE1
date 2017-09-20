 var app=new Vue({
	el:'#app',
	data:{
		mensaje:'Hola estoy empezando en Vue.js'
	}
});
/*=========================================================*/
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});
/*=========================================================*/
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
});
/*=========================================================*/
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' },
      { text: 'Learn stack MEAN'}
    ]
  }
});
/*=========================================================*/
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
/*=========================================================*/
var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

/*=========================================================*/
Vue.component('todo-item',{
	props: ['todo'],
	template: '<li>{{todo.text}}</li>'
});

var app7= new Vue({
	el:'#app-7',
	data:{
		groceryList:[
			{ text: 'Vegetables' },
      		{ text: 'Cheese' },
      		{ text: 'Whatever else humans are supposed to eat' }
		]
	}
});
/*=========================================================*/

new Vue({
	el:'#app8',
	data:{
		nuevaTarea:'',
		tareas:[
			{ texto:'Limpiar tu cuarto'},
			{ texto:'Aprender Vue.js'},
			{ texto:'Repasar Backend'},
		],
	},

	methods:{
		agregarTarea:function(tarea){
			if(tarea.trim()){
				this.tareas.push({texto:tarea});
				this.nuevaTarea='';
			}
			else{
				alert("Ingre un Nombre para la tarea");
			}
		},
		eliminarTarea:function(tarea,index){
			if(confirm("Deseas eliminar"+tarea.texto+"?"+index)){
				this.tareas.splice(index,1);}
		}
	}
});
/*=========================================================*/

new Vue({
	el:'#app9',
	data:{
		mensaje:''
	}
});
/*=========================================================*/

new Vue({
	el:'#app10',
	data:{
		nombre:'',
		edad:'',
		sexo:'',
		correo:''
	},

	methods:{
		enviarDatos:function(){
			if (this.nombre && this.edad && this.sexo && this.correo) {
				alert("Enviando mensaje......");
			}
			else{
				alert("Llenar todos los campos");
			}
		}
	},

	computed:{
		camposLlenos:function(){
			return this.nombre && this.edad && this.sexo && this.correo;
		}
	}

});
/*=========================================================*/

new Vue({
	el:'#app11',
	data:{
		menSaludo:''
	},

	methods:{
		saludar:function(men){
			alert("Hola "+men+" como estas?");
		},
		enviar:function(){
			alert("Enviando....");
		},
		abrir:function(e){
			alert("Abriendo enlace...");
			console.log(e);
		},
		teclaPulsada:function(e){
			console.log(e.code);
		}
	}

});
/*=========================================================*/

new Vue({
 	el:'#app12',
 	data:{
 		//Objeto
 		persona:{
 			nombre:'Richard',
 			profesion:'dev',
 			ciudad:'Lima'
 		},
 		//matriz simple
 		numeros:[
 			1,2,3,4,5
 		],
 		//matris de objetos
 		semana:[
 			{dia:"Lunes",numero:1},
 			{dia:"Martes",numero:2},
 			{dia:"Miercoles",numero:3},
 			{dia:"Jueves",numero:4},
 			{dia:"Viernes",numero:5},
 			{dia:"Sabado",numero:6},
 			{dia:"Domingo",numero:7},
 		]
 	}
});
/*=========================================================*/

new Vue({
	el:'#app13',

	data:{
		// objeto
		colorT:true,
		subrayadoT:true,
		// objeto sintaxis directa
		objetoDirecto:{
			'azul':false,
			'subrayado':true
		},
		// sintaxis de array
		objetoDeClases:{
			colorT:'azul',
			subrayadoT:'subrayado'
		},
		//estilos de objeto
		letra:'green',
		tamano:'40px',
		//estilo directo objeto
		estiloDirecto:{
			color:'red',
			fontSize:'25px'
		},
		otroObjetoEstilo:{
			textDecoration:'underline',
			transform:'rotate(-10deg)'
		},
		pintarColor:'',
	}
});
/*=========================================================*/

Vue.component('cita', {

  template:'<section class="citaEstilo">'+
            '<h1>{{ citaElegida }}</h1>'+
            '<h2 v-if="votos > 0">{{ votos }}</h2>'+
            '<button type="button" class="btn btn-default" v-on:click="like">Like</button>'+
            '<button type="button" class="btn btn-danger" v-on:click="dislike">Dislike</button>'+
            '</section>',

  mounted: function(){
    this.elegirCita();
  },

  data: function() { //Data DEBE ser una funcion
    return {
      votos: 0,
      citaElegida: '',
      citas: ['"Solo hay una felicidad en la vida – amar y ser amado" - George Sand.',
      '"Siempre es temprano para rendirse" - Norman Vincent Peale.',
      '"La fortuna favorece al valiente" - Virgilio.',
      '"Tienes que hacer que ocurra" - Denis Diderot.',
      '"Ser un buen perdedor es aprender cómo ganar" - Carl Sandburg. ',
      '"La vida no es un problema a ser resuelto, sino una realidad a experimentar" - Soren Kierkegaard.',
      '"Cuanto más hacemos, más podemos hacer" - William Hazlitt.',
      '"Nos convertimos en lo que pensamos" - Earl Nightingale.',
      '"Cualquier cosa que la mente del hombre puede concebir y creer, puede ser conseguida" - Napoleon Hill.',
      '"Cáete siete veces y levántate ocho" - proverbio japones.']
    };
  },

  methods: {
    elegirCita: function() {
      var cita = this.citas[Math.floor(Math.random() * this.citas.length)];
      this.citaElegida = cita;
    },
    like: function() {
      this.votos += 1;
    },
    dislike: function() {
      if(this.votos > 0){
        this.votos -= 1;
      }
    },

  },
});

new Vue({
  el: '#app14',
});
/*=========================================================*/
Vue.filter('mayusculas',function(value){
	return value.toUpperCase();
});
/*Nom me funciona custom filter*/
Vue.filter('formal',function(value,usted){
	var esUd= usted ? 'Sr.':'Sra.';
	return esUd+value.split(' ').reverse().join(',');
});

new Vue({
	el:'#app15',
	data:{
		myName:'Richard Jans',
		persona:{
			nombre:'Richard',
			profesion:'dev'
		}
	}
});
/*=========================================================*/

new Vue({
	el:'#app16',
	data:{
		show:true
	}
});
/*=========================================================*/
new Vue({
	el:'#app17',
	data:{
		shows:true
	}
});
/*=========================================================*/

new Vue({
	el:'#app18',
	data:{
		mostrar:true
	}
});
/*=========================================================*/

new Vue({
	el:'#app19',
	data:{
		show:false
	},

	methods:{
		beforeEnter: function (el) {
      		el.style.opacity = 0;
    	},
   		enter: function (el, done) {
      		Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 600 });
     		Velocity(el, { fontSize: '1em' }, { complete: done });
   		 },
    	leave: function (el, done) {
      		Velocity(el, { translateX:'15px',rotateZ:'50deg'}, {duration: 600});
      		Velocity(el, { rotateZ:'100deg'}, {loop:2});
      		Velocity(el, { rotateZ:'45deg',translateY:'30px',translateX:'30px',opacity:0},{complete: done });
    	}
  	}	
	
});

/*=========================================================*/
new Vue({
	el:'#app20',
	data:{
		message:'',
		check:true,
		nombreCheck:[],
		mensaje:'',
		seleccion:"",
		selected:'',
		selected1:'',
		seleccionado:"Estudiar Vue js",
		aprender:[
			{texto:'Estudiar Vue js', valor:'Estudiar Vue js'},
			{texto:'Estudiar Angular js', valor:'Estudiar Angular js'},
			{texto:'Estudiar PHP', valor:'Estudiar PHP'},
		]
	}
});
/*=========================================================*/

var urlAPI="https://randomuser.me/api/?results=50";
new Vue({
	el:'#app21',

	created:function(){
		this.consultarAPI();
	},

	data:{
		personas:[]
	},
	methods:{
		consultarAPI:function(){
			this.$http.get(urlAPI).then(function(respuesta){
				this.personas=respuesta.data.results;
			});
		}
	}
});
/*=========================================================*/

var urlAPI="http://jsonplaceholder.typicode.com/todos";
new Vue({
	el:'#app22',

	created:function(){
		this.consultarAPI();
	},

	data:{
		busqueda:'',
		todos:[]
	},
	methods:{
		consultarAPI:function(){
			this.$http.get(urlAPI).then(function(respuesta){
				this.todos=respuesta.data;
			});
		}
	},

	computed:{
		filterItems:function(){
			var self=this;
			return this.todos.filter(function(item){
				return item.title.indexOf(self.busqueda)>-1;
			});
		}
	}
});
/*=========================================================*/
var urlAPI="http://jsonplaceholder.typicode.com/users";
new Vue({
	el:'#app23',

	created:function(){
		this.consultarAPI();
	},

	data:{
		busqueda:'',
		users:[]
	},
	methods:{
		consultarAPI:function(){
			this.$http.get(urlAPI).then(function(respuesta){
				this.users=respuesta.data;
			});
		}
	},

	components:{
		'usuarios':{
			template:'usuario-template',
			props:['lista']
		}
	}
});
/*=========================================================*/
  var config = {
    apiKey: "AIzaSyBrQ-M9xLaDFDFHIbdBPp0inZ1mQHUvJ6o",
    authDomain: "vuefire-8c3c9.firebaseapp.com",
    databaseURL: "https://vuefire-8c3c9.firebaseio.com",
    storageBucket: "vuefire-8c3c9.appspot.com",
    messagingSenderId: "369029071648"
  };
  firebase.initializeApp(config);

  var rtdb=firebase.database(),
  	  auth=firebase.auth(),
  	  proveedor = new firebase.auth.GoogleAuthProvider();

Vue.component('app-tarea',{
	template:'#tareas-template',
	props:['tar','autentificado','usuarioActivo'],
	data:function(){
		return{
			insertarTarea:'',
			editandoTarea:'',
		};
	},

	methods:{
		addTarea:function(tarea){
			if (tarea.trim()) {
				/*this.tar.unshift({titulo:tarea,completado:false});
				this.insertarTarea="";
				/*unshit=añade al inicio y push=añade al final*/
				rtdb.ref('tareas/').push({
					titulo:tarea, 
					completado:false,
					nombre:vm.usuarioActivo.displayName,
					avatar:vm.usuarioActivo.photoURL,
					uid:vm.usuarioActivo.uid
					});
				this.insertarTarea="";
			}
			else{
				alert("Escribir alguna tarea");
			}
		},
		removerTarea:function(tarea){
			if(confirm("Desea eliminar "+tarea.titulo +"?")){
				/*this.tar.splice(index,1);*/
			rtdb.ref('tareas/'+tarea['.key']).remove();
			}
			
		},
		editarTarea:function(tare){
			rtdb.ref('tareas/'+tare['.key']).update({
				titulo:tare.titulo
			});
		},
		estadoTarea:function(tarea,estado){
			rtdb.ref('tareas/'+tarea['.key']).update({
				completado:estado? true : false
			});
		}
	}
});


var vm=new Vue({
	el:'#app24',
	mounted:function(){
		/*RT DATABASE*/
		rtdb.ref('tareas/').on('value',function(snapshot){
			/*vm.tareas=snapshot.val();*/
			vm.tareas=[];
			var objeto=snapshot.val();
			for(var propiedad in objeto){
				vm.tareas.unshift({
					'.key':propiedad,
					completado:objeto[propiedad].completado,
					titulo:objeto[propiedad].titulo,
					nombre:objeto[propiedad].nombre,
					avatar:objeto[propiedad].avatar,
					uid:objeto[propiedad].uid
				});
			}
		});

		/*Auth*/
		auth.onAuthStateChanged(function(user) {
 		 	if (user) {
   		 		console.info('Conectado',user);
   		 		vm.auntentificado=true;
   		 		vm.usuarioActivo=user;
 		 	} else {
    			console.warn('No Conectado');
    			vm.auntentificado=false;
   		 		vm.usuarioActivo=null;
  		 	}
		});
	},

	data:{
		
		/*tareas:[
			{titulo:'Aprender VueJS & FireBase',completado:false},
			{titulo:'Aprender Angular js',completado:false},
			{titulo:'Repasar PHP',completado:false},
			{titulo:'Repasar Jquery',completado:false},
			{titulo:'Aprender Node js',completado:false},
		]*/
		tareas:[],
		auntentificado:false,
		usuarioActivo:null
	},
	methods:{
		conectarUser:function(){
			auth.signInWithPopup(proveedor).catch(function(error) {
 			console.error('Error haciendo logIn',error);
			});
		},
		desconectarUser:function(){
			auth.signOut().catch(function(error) {
 			 console.error('Error haciendo logOut',error);
			});
		}
	}
});

/*=========================================================*/

