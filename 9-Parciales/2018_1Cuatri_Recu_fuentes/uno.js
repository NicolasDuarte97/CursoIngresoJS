/*Enunciado:1

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos*/
function mostrar()
{
	var NombreProducto;
	var TipoProducto;
	var Precio;
	var CantidadUnidades;
	var TipoInfamable;
	var i;


	for(i = 0; i < 5 ; i++)
	{
		NombreProducto = prompt("Ingrese NombreProducto: ");

		TipoProducto = prompt("Ingrese el Tipo de producto")
		while(isNaN(TipoProducto) == false || tipo!="alcohol" && tipo!= "iac" && tipo!= "quat")
		{
			TipoProducto = prompt("Error ingrese tipo valido");

		}
		Precio = parseInt(prompt("Ingrese precio mayor a 100 y menor a 300"));
		while(isNaN(Precio)== true || Precio < 100 || Precio > 300)

		{
			Precio = parseInt(prompt(" ERROR Ingrese precio mayor a 100 y menor a 300"));

		}
		CantidadUnidades = parseInt(prompt("Ingrese cantidad de unidades no puede ser menor a 0 y mayor a 1000"));
		while(isNaN(CantidadUnidades)== true || CantidadUnidades < 0 || CantidadUnidades > 1000)
		{
		   CantidadUnidades = parseInt(prompt("ERROR Ingrese cantidad de unidades"));


	}



}