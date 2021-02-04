/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
// txtIdPrecioUno txtIdPrecioDos txtIdPrecioTres
function Sumar () 
{
	var Precio1; 
	var Precio2;
	var Precio3;
	var suma;

	Precio1 = txtIdPrecioUno.value;
	Precio2 = txtIdPrecioDos.value;
	Precio3 = txtIdPrecioTres.value;

	Precio1 = parseInt(Precio1);
	Precio2 = parseInt(Precio2);
    Precio3 = parseInt(Precio3);


    suma = Precio1 + Precio2 + Precio3;



	alert(' La suma es: ' + suma);
	
}
function Promedio () 
{
	var Precio1; 
	var Precio2;
	var Precio3;
	var Promedio;

	Precio1 = txtIdPrecioUno.value;
	Precio2 = txtIdPrecioDos.value;
	Precio3 = txtIdPrecioTres.value;


   Precio1 = parseFloat(Precio1);
   Precio2 = parseFloat(Precio2);
   Precio3 = parseFloat(Precio3);


    promedio = Precio1 + Precio2 + Precio3 / 3;



	alert(' El promedio de los mismos es:  ' + promedio);

	

	
}
function PrecioFinal () 
{
	var Precio1; 
	var Precio2;
	var Precio3;
	var Final;

	Precio1 = txtIdPrecioUno.value;
	Precio2 = txtIdPrecioDos.value;
	Precio3 = txtIdPrecioTres.value;


   Precio1 = parseFloat(Precio1);
   Precio2 = parseFloat(Precio2);
   Precio3 = parseFloat(Precio3);


    Final = Precio1 * Precio2 * Precio3 / 21*100;



	alert(' El porcentaje final es de:  ' + Final);

}