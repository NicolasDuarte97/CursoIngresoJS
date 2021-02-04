/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var Sueldo;
	var Descuento;
	var resultado;


	Sueldo = txtIdImporte.value;

	Sueldo = parseInt(importe);


     resultado = Sueldo - 25/100


	 txtIdResultado = resultado;


}
