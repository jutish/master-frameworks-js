/*var nombre = "Esteban";
var altura = 200;
var concat = nombre + " " + altura;
var datos = document.getElementById("datos");
datos.innerHTML = `
	<h1>Hola soy la caja de datos</h1>
	<h2>Mi nombre es ${nombre} y mi altura es de ${altura} cms.</h2>

	`;

if(altura > 190){
	datos.innerHTML += "<h2>Eres una persona alta</h2>"
}else{
	datos.innerHTML += "<h2>No eres tan alto</h2>"
}

for(var i = 2010; i<2020; i++){
	datos.innerHTML += `<p>Estamos en el año: ${i}</p>` 
}*/

function muestraNombre(nombre,altura){
	var datos = `
	<h1>Hola soy la caja de datos</h1>
	<h2>Mi nombre es ${nombre} y mi altura es de ${altura} cms.</h2>

	`;

	return datos;
};

function imprimo(){
	var datos = document.getElementById("datos");
	datos.innerHTML = muestraNombre("Esteban",171);
}

imprimo();
nombres = ['Esteban','Alfonsina','Matilde']
for (var i = nombres.length - 1; i >= 0; i--) {
	document.write(nombres[i] + '<br/>') ;
}

nombres.forEach(function(nombre){
	document.write(nombre + '<br/>');
});

nombres.forEach((nombre)=>{
	document.write(nombre + '<br/>');
});
