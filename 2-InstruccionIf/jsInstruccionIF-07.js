// NICOLAS DUARTE
/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'*/
function mostrar()
{ 
	var Edad;
	var estado;

    estado = estadoCivil.value;
	Edad = txtIdEdad.value;
	Edad = parseInt(Edad);

	if(Edad < 18 && estado != "Soltero")

	{
      alert( ' Es muy pequeño para no ser soltero ');
	}
	
	


}// txtIdEdad ,