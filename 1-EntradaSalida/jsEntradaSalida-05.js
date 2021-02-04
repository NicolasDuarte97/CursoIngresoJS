/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Nombre;
	var Edad; 


    Nombre = document.getElementById('txtIdNombre').value; //   html Id      //
    Edad =document.getElementById('txtIdEdad').value; //   html Id      //



	alert(' Usted de llama ' + Nombre + ' Y tiene: ' + Edad + ' años ');
}

