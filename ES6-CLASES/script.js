/*ES5*/

var Persona=function(nombre,apellido,ciudad){
	this.nombre=nombre;
	this.apellido=apellido;
	this.ciudad=ciudad;
};
Persona.prototype.saludar=function(){
	console.log('Hola como estas');
};
let richard=new Persona('richard','Inga','Lima');
let jans=new Persona('jans','Aliaga','Peru');
console.log(richard);
richard.saludar();
console.log(jans);



/*ES6*/
 class Humano{
 	constructor(nombre,apellido,ciudad){
 		this.nombre=nombre;
		this.apellido=apellido;
		this.ciudad=ciudad;
 	}
 	saludar(){
 		console.log('Soy: '+this.nombre+' de '+this.ciudad);
 	}
 	get nombreCompleto(){
 		return this.nombre+' '+this.apellido;
 	}
 	set cambiarCiudad(ciudad){
 		this.ciudad=ciudad;
 	}
 	 caminar(){/*static para acceder sin una instancia Humano.caminar()*/
 		console.log('Estoy caminando...');
 	}
 }

let p1=new Humano('LUIS','SAN','CAJAMARCA');
console.log(p1);
p1.ciudad='Piura';
console.log(p1);
p1.caminar();
console.log(p1.nombreCompleto);

/*Usando extends Clase padre--clase hija*/

class Aleman extends Humano{
	hablar(){
		console.log('ich spreche');
	}
	saludar(){
		console.log('Sie sprachen von der deutschen Klasse');
	}
}

let pa=new Aleman('Rovich','zhevesh','Munich');
console.log(pa);
pa.hablar();
pa.saludar();

/*=========== TEMPLATE STRIGS===============*/
let name='Richard';
let templateString=`<h1>Hola que tal<span>${name}</span></h1>`;

console.log(templateString);


/*=========== PARAMETROS POR DEFECTO===============*/

function comprarTicket(destino,fecha=fechaActual()){
	/* var fechaa=fecha || new Date();*/
	 console.log(destino,fecha);
}
comprarTicket('Lima');

function fechaActual(){
	return new Date().toLocaleDateString();
}