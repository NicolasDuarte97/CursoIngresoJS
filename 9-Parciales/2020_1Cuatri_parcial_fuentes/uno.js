	/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/
	function mostrar()
{
	var tipoProductos;
	var contadorProductos;
	var precioIngresado;
	var marcaIngresada;
	var fabricante;
	var unidades;
	var contadorAlcohol;
	var acumuladorAlcohol;
	var contadorAlcohol;
	var contadorBarbijo;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var promedio;
	var sumaAlcohol;
	var sumaJabon;
	var sumaBarbijo;
	var cantidadAlcohoBarato;

	contadorBarbijo = 0; //inicalizar variables
	contadorJabon = 0;
	contadorAlcohol = 0;                                      //CONTADOR PARA CANTIDAD !!
	contadorProductos = 0;
	precioIngresado = 0;
	marcaIngresada = 0;
	tipoProductos = 0;
	unidades = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;                                 //ACUMULADOR 
	acumuladorJabon = 0;
	promedio = 0;
	sumaAlcohol = 0;
	sumaBarbijo = 0;
	sumaJabon = 0;
	cantidadAlcohoBarato = 0;

	

	while(contadorProductos < 3)
	{
		tipoProductos = prompt("Ingrese su producto: barbijo, jabon, alcohol.");
		while(isNaN(tipoProductos) == false || tipoProductos != "barbijo" && tipoProductos != "jabon" && tipoProductos != "alcohol")
		{
			tipoProductos = prompt ("Reingrese un producto valido.");
		}


		precioIngresado = prompt("Ingrese el precio: ");
		precioIngresado = parseInt(precioIngresado);
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{
			precioIngresado = prompt ("Reingrese un precio valido");
			precioIngresado = parseInt(precioIngresado);
		}

		marcaIngresada = prompt("Ingrese una marca: ");
		fabricante = prompt("Ingrese un fabricante");
		

		
		unidades = prompt("Ingrese una cantidad de unidades");
		unidades = parseInt(unidades);
		while(isNaN(unidades) == true || unidades < 0 || unidades > 1000)
		{
			unidades = prompt ("Reingrese una cantidad de unidades validas");
			unidades = parseInt(unidades);
		}	

		contadorProductos++;
	}
	
	

	switch(tipoProductos)
	{
		case "alcohol":
			if(contadorAlcohol == 0 || precioIngresado < alcoholBarato)
			{
				alcoholBarato = precioIngresado;
				cantidadAlcohoBarato = unidades;
				alcoholBaratoFabricante = fabricante;				
			}
			acumuladorAlcohol = acumuladorAlcohol + unidades;
			sumaAlcohol = sumaAlcohol + (precioIngresado * unidades);
			break;
			
		case "jabon":	
				acumuladorJabon = acumuladorJabon + unidades;	
				sumaJabon = sumaJabon + (precioIngresado * unidades);			
				break;
			
		
		case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + unidades;
				sumaBarbijo = sumaBarbijo + (precioIngresado * unidades);				
				break;	
	}
	contadorProductos++;

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		promedio = sumaAlcohol / acumuladorAlcohol;
	}

	if(acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo)
	{
		promedio = sumaJabon / acumuladorJabon; 
	}

	if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon)
	{
		promedio = sumaBarbijo / acumuladorBarbijo;
	}	
	document.write("La cantidad de alcohol barato es " + acumuladorAlcohol + " y el fabricante es " + fabricante + "." + "<br>");
	document.write("El promedio por compra con mas unidades es " + promedio + "." + "<br>");
	document.write("El total de jabones es " + acumuladorJabon + "." + "<br>");
	
}




