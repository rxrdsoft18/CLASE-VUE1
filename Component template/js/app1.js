Vue.component('app-persona',{
	template:'#template-ganador',
	props:['person'],

	methods:{
		elegirGanador:function(){
			let cantidad=this.participantes.length;
			let indice=Math.floor((Math.random()*cantidad));
			this.ganador=this.participantes[indice-1];
		}
	},
	data:function(){
		return{
			ganador:false,
			participantes:this.person
		};
	}
});


new Vue({
	el:'#app',
	data:{
		personas:[
			'Richard',
			'Jans',
			'Jorge',
			'Michael',
			'Kely',
			'Xiomara'
		]
	}
});
/*=====================================================================*/

Vue.component('app-tarea',{
	template:'#template-tareas',
	props:['job'],
	data:function(){
		return{
			insertarTarea:'',
			editandoTarea:'',
		};
	},

	methods:{
		addTarea:function(tarea){
			if (tarea.trim()) {
				this.job.unshift({titulo:tarea,completado:false});
				this.insertarTarea="";
				/*unshit=añade al inicio y push=añade al final*/
			}
			else{
				alert("Escribir alguna tarea");
			}
		},
		removerTarea:function(tarea,index){
			if(confirm("Desea eliminar "+tarea.titulo +"?"))
			this.job.splice(index,1);
		},
		editarTarea:function(tare){
			console.info(tare);
		}
	}
});


new Vue({
	el:'#app24',
	data:{
		
		tareas:[
			{titulo:'Aprender VueJS & FireBase',completado:false},
			{titulo:'Aprender Angular js',completado:false},
			{titulo:'Repasar PHP',completado:false},
			{titulo:'Repasar Jquery',completado:false},
			{titulo:'Aprender Node js',completado:false},
		]
	},
	
});
/*=====================================================================*/