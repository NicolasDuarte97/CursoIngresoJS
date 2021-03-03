
// SIMULACRO DE PARCIAL
/*"super chino" :
Se pide el ingreso de mercadería de un supermercado , hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
TipoDeStock("Pedido","sin stock", "con stock")
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY 


a)  el NOMBRE del  mas barato de los elaborados
b)  de los Productos nacionales con stock , el promedio de precio
c)  el porcentaje de productos elaborados por sobre el total
d)  De los tipos de stock , cual tiene mas productos nacionales

*/
/*contador para contar!!!!!
acumulador para sumar variables!!!!

CUANDO TE PIDEN:
CUANTAS
CANTIDAD
VOY A NECESITAR UN CONTADOR PARA CONTARLO*/
function mostrar()
{

    var tipo;
	var limpieza;
	var comestible;
	var otros;
	var NombreDelProducto;
	var ImporteDelProducto;
	var TipoDeStock;
	var prosedencia;
	var Pedido;
	var Importe;
	var Nacionalidad
	var Elaborado;
	var PesoDeProducto;
	var respuesta;
	var MasBarato;
	var Acumuladorlimpieza;
	var Acumuladorcomestible;
	var Acumuladorotros;
	var Contadorlimpieza;
	var Contadorcomestible;
	var Contadorotros;



	Acumuladorlimpieza = 0;
	Acumuladorcomestible = 0;
    Acumuladorotros = 0;
    Contadorlimpieza = 0;
	Contadorcomestible = 0;
	Contadorotros = 0;
	ImporteDelProducto = 0;
	peso = 0;

	respuesta = "si" // SI INGRESA "SI" REPITE LA SENTENCIA DE NUEVO. SI SABEMOS CUANTOS BUCLES QUIER HACER, HACER FOR. 


     while(respuesta == "si")
        {
    NombreDelProducto = prompt("ingrese nombre del producto");

	tipo = prompt("Ingrese tipo de producto: limpieza , comestible , otros");

	while(isNaN(tipo) == false && tipo != "limpieza" && tipo != "comestible" && tipo != "otros" )
	{
		tipo = prompt("Error ingrese tipo de producto");
	}

	ImporteDelProducto = prompt("Ingrese importe no mayor a 1000"); // PRECIO/IMPORTE
	while(ImporteDelProducto < 0 || ImporteDelProducto > 1000)
	{
		ImporteDelProducto = prompt("Error ingrese importe menor a 1000");
	}
	TipoDeStock = prompt("ingrese stock pedido: sin stock o con stock");
	while(isNaN (TipoDeStock) == false && TipoDeStock !="pedido" &&  TipoDeStock != "sin stock" && TipoDeStock != "con stock")
	{
		TipoDeStock = prompt("Error ingrese tipo de stock");
	}
	procedencia = prompt("ingrese procedencia: importado , nacional , elaborado");
	while(isNaN(procedencia) == false && procedencia != importado && procedencia != "nacional" && procedencia != "elaborado")
	{
		procedencia = prompt("Error ingrese bien la procedencia");
	}
	PesoDeProducto = parseInt(prompt("Ingrese el peso del producto no mayor a 30kg"));
	while(isNaN(PesoDeProducto) == true || PesoDeProducto < 0 || PesoDeProducto > 30 )
	{
		PesoDeProducto = parseInt(prompt("Error Ingrese el peso del producto no mayor a 30kg"));
	}


    }
		switch(procedencia)
		{
			case "importado":

				break;

			case "nacional":
				{
					if(tipoStock == "con stock") //B) de los Productos nacionales con stock, el promedio de precio
					{
						acumuladorNacionalesConStock += importeProducto;
						contadorNacionalConStock++;														
					}
					else
					{
						if(tipoStock == "pedido")
						{
							contadorNacionalPedido++;
						}
						else
						{
							contadorNacionalSinStock++;
						}
					}
					contadorNacional++;					
				}
				break;
				
			case "elaborado": //A) el NOMBRE del  mas barato de los elaborados
				if (contadorMasBarato == 0 || importeProducto < importeProductoMasBarato)
				{
					importeProductoMasBarato = importeProducto;
					nombreProductoMasBarato = nombreProducto;
				}
				contadorMasBarato++;
				break;					
		}

		respuesta = prompt("Desea continuar comprando");
		tipoProducto++; 
	}

	promedio = acumuladorNacionalesConStock / contadorNacionalConStock;
	porcentajeElaborados = (contadorElaborados / tipoProducto) * 100; // C) el porcentaje de productos elaborados por sobre el total

	if(contadorNacional != 0)
	{
		if(contadorNacionalConStock > contadorNacionalPedido && contadorNacionalConStock > contadorNacionalSinStock)
		{
			document.write ("Del tipo nacional con stock tiene mas <br>");
		}
		else
		{
			if(contadorNacionalPedido > contadorNacionalConStock && contadorNacionalPedido > contadorNacionalSinStock)
			{
				document.write ("Del tipo nacional de pedido tiene mas <br>");
			}
			else
			{
				document.write ("Del tipo sin stock de pedido tiene mas <br>");
			}
		}
	}
	
	
	document.write ("El nombre de los productos mas baratos elaborados son " + nombreProductoMasBarato + "<br>");
	document.write ("De los productos nacionales con stock, su promedio es: " + promedio + "<br>");
	document.write ("El porcentaje de productos elaborados por sobre el total es: " + porcentajeElaborados + "<br>");





 // EjERCICIO DE COMPAÑERO:
/*function mostrar()
{
	var tipoProducto;
	var nombreProducto;
	var importeProducto;
	var tipoStock;
	var procedencia;
	var peso;
	var respuesta;

	var importeProductoMasBarato;
	importeProductoMasBarato = 0;

	var contadorMasBarato;
	contadorMasBarato = 0;

	var nombreProductoMasBarato;

	var acumuladorNacionalesConStock;
	acumuladorNacionalesConStock = 0;

	//var cantidadProductos;

	var promedio;

	var contadorNacional;
	contadorNacional = 0;

	var contadorNacionalConStock;
	contadorNacionalConStock = 0;

	var contadorNacionalPedido;
	contadorNacionalPedido = 0;

	var contadorNacionalSinStock;
	contadorNacionalSinStock = 0;

	var contadorElaborados;
	contadorElaborados = 0;

	var porcentajeElaborados;
	porcentajeElaborados = 0;

	respuesta = "si";
	
	while(respuesta == "si") //bucle repetitivo while y dentro valido
	{
	tipoProducto = prompt("Ingrese un producto para realizar su compra: limpieza, comestible u otros");
		  while(tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros")
		  {
			tipoProducto = prompt ("Reingrese un producto valido: limpieza, comestible u otros");
		  }
  
	 		nombreProducto = prompt ("Ingrese el nombre del producto:");
  
	 	 	importeProducto = prompt ("Ingrese un precio de 1 a 1000: ");
	 		importeProducto = parseInt(importeProducto);
		 	while(isNaN(importeProducto) == true || importeProducto > 1000)
  
		  {
			importeProducto = prompt ("Reingrese un precio valido");
			importeProducto = parseInt(importeProducto);
		  } 

		 	tipoStock = prompt("Ingrese el stock: pedido, sin stock o con stock");
			while(tipoStock != "pedido" && tipoStock != "sin stock" && tipoStock != "con stock")
		  {
			tipoStock = prompt ("Reingrese un stock valido: pedido, sin stock o con stock");
		  }

		  	procedencia = prompt("Ingrese la porcedencia: importado, nacional o elaborado");
		 	while(procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado")
		  {
			procedencia = prompt ("Reingrese una procedencia valida:  importado, nacional o elaborado");
		  }

		  	peso = prompt ("Ingrese un peso hasta 30 KG:");
	  		peso = parseInt(peso);
		  	while(isNaN(peso) == true || peso > 29)
  
		  {
			peso = prompt ("Reingrese un peso valido");
			peso = parseInt(peso);
		  } 

		  
		switch(procedencia)
		{
			case "importado":

				break;

			case "nacional":
				{
					if(tipoStock == "con stock") //B) de los Productos nacionales con stock, el promedio de precio
					{
						acumuladorNacionalesConStock += importeProducto;
						contadorNacionalConStock++;														
					}
					else
					{
						if(tipoStock == "pedido")
						{
							contadorNacionalPedido++;
						}
						else
						{
							contadorNacionalSinStock++;
						}
					}
					contadorNacional++;					
				}
				break;
				
			case "elaborado": //A) el NOMBRE del  mas barato de los elaborados
				if (contadorMasBarato == 0 || importeProducto < importeProductoMasBarato)
				{
					importeProductoMasBarato = importeProducto;
					nombreProductoMasBarato = nombreProducto;
				}
				contadorMasBarato++;
				break;					
		}

		respuesta = prompt("Desea continuar comprando");
		tipoProducto++; 
	}

	promedio = acumuladorNacionalesConStock / contadorNacionalConStock;
	porcentajeElaborados = (contadorElaborados / tipoProducto) * 100; // C) el porcentaje de productos elaborados por sobre el total

	if(contadorNacional != 0)
	{
		if(contadorNacionalConStock > contadorNacionalPedido && contadorNacionalConStock > contadorNacionalSinStock)
		{
			document.write ("Del tipo nacional con stock tiene mas <br>");
		}
		else
		{
			if(contadorNacionalPedido > contadorNacionalConStock && contadorNacionalPedido > contadorNacionalSinStock)
			{
				document.write ("Del tipo nacional de pedido tiene mas <br>");
			}
			else
			{
				document.write ("Del tipo sin stock de pedido tiene mas <br>");
			}
		}
	}
	
	
	document.write ("El nombre de los productos mas baratos elaborados son " + nombreProductoMasBarato + "<br>");
	document.write ("De los productos nacionales con stock, su promedio es: " + promedio + "<br>");
	document.write ("El porcentaje de productos elaborados por sobre el total es: " + porcentajeElaborados + "<br>");*/







