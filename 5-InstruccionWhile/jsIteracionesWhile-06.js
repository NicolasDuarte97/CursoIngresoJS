
function mostrar()
{
	var numero;
	var acumulador;
	var promedio;
	var i;


	i = 0;

	acumulador = 0;

	

	while(i < 5)
	{

		numero = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + numero;

		i++;

	}

	promedio = acumulador / 5;

	 
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;

	
}
	