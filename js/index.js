//Declarar variables
let nombreUsuario = "John Faber";
let saldoCuenta = 50000;
let limiteExtraccion = 500;
let claveCorrecta = 0000;

function iniciarSesion() {
	let clave = prompt("Digite su clave");
	if (clave == claveCorrecta) {
		alert("Bienvenido "+nombreUsuario);
		document.body.style.display = "block";
		window.onload = function(){
			cargarNombreEnPantalla();
			saldo();
			limite();
		}
	}else{
		saldoCuenta = 50000;
		alert("Su saldo se ha actualizado a cero por seguridad");
	}
}

iniciarSesion();

//Funciones para actualizar el valor de las variables HTML
function cargarNombreEnPantalla(){
	document.getElementById("nombre").innerHTML = "Bienvenido/a "+nombreUsuario;
}
function saldo(){
	document.getElementById("saldo-cuenta").innerHTML = "$ "+saldoCuenta;
}
function limite(){
	document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $"+limiteExtraccion;
}

