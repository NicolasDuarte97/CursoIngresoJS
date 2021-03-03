/* una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche */

function mostrar()
{
	var Destino;
	var Estacion;

	Destino = txtIdDestino.value;
	Estacion = txtIdEstacion.value;



	switch(Estacion)

	 {
	    case "Bariloche":
	    alert("Se viaja");

	    case "Verano":	        
	    case "Otoño":
	    case "Primavera":
	    alert("No se viaja");
	    break;
	    
	  
     }


   


	
	

}//FIN DE LA FUNCIÓN
// estacion = txtIdEstacion.value
//destino = txtIdDestino