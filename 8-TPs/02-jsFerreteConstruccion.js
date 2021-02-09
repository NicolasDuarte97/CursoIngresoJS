//Nicolas Duarte
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{ 
	var Largo;
	var Hancho;
	var Perimetro;

	Largo = txtIdLargo.value;
	Hancho = txtIdAncho.value;	

	Largo = parseFloat(Largo);
	Hancho = parseFloat(Hancho);
	
	Perimetro = (Largo + Hancho) * 3

	alert( ' Se debe alamabrar con: ' + Perimetro + ' hilos de alambre ');


}

function Circulo () 
{ 
  
  var Radio;
  var Area;
  var alambre;

    Radio = txtIdRadio.value;

    Radio = parseFloat(Radio);


     Area = 2 * Math.PI * Radio;

     alambre = Area * 3;



    alert(' La cantidad de alambre es: ' + alambre);


}

function Materiales () 
{
 
    var Largo; 
	var Altura;
	var Cemento;
	var Cal;
	var Area;


	Largo = txtIdLargo.value;
	Altura = txtIdAncho.value;

	Largo = parseFloat(Largo);
	Altura = parseFloat(Altura);


	Area = Largo * Altura;

	Cemento = Area * 3;
	Cal = Area * 2;

	alert('Para un contrapiso de: ' + Area + ' Necesito ' + Cemento + ' Bolsas de ' + Cal):



	

}
