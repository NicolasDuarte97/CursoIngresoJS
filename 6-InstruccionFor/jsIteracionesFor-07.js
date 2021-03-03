/*al presionar el botón pedir un número. x
mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.*/

function mostrar()
{
	var NumeroIngresado;
	var contadordedivisores;
	var i;
	var CantidaddeDivisor;
	
	
	NumeroIngresado = prompt("Ingrese numero");
	NumeroIngresado = parseInt(NumeroIngresado);



	for(i=0; i < NumeroIngresado; i++)
	{
		if(NumeroIngresado % i == 0)
		{
			contadordedivisores = 1;
			CantidadDivisor++;
			console.log("El numero divisor es:" + i);


		}
		

	}	

	console.log("Se encontre" + CantidaddeDivisor + "divisores encontrados");

}//FIN DE LA FUNCIÓN