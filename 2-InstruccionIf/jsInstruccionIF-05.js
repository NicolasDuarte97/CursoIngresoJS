// Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	var Edad 
	Edad = txtIdEdad.value;

	Edad = parseInt(Edad)

	if( Edad > 17)
	{
		alert(' No es adolescente ');
	}

}// txtIdEdad