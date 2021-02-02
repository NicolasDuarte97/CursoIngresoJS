/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var Nombre;
	var Edad; 


    Nombre = document.getElementById('txtIdNombre').value;
    Edad =document.getElementById('txtIdEdad').value;



	alert(' Usted de llama ' + Nombre + ' Y tiene: ' + Edad + ' años ');
}

