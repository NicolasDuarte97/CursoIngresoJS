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

	Sueldo = parseInt(sueldo);


      // 1) Descuento = Sueldo * 25/100;
      // 2) Descuento = Sueldo * 0.25;
      // 3)resultado = sueldo - (sueldo * 0.25);

     resultado = Sueldo * 0.75;


	 txtIdResultado.value = resultado;

}
