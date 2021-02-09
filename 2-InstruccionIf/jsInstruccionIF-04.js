// Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

function mostrar()
{
	var Edad;

	Edad = txtIdEdad.value;
	Edad = parseInt(Edad);

	if( Edad > 12 && Edad < 18 )
	{
     
      alert(' Sos adolescente ');
	}

	else
	{
      
      alert( ' No sos adolescente ' );
	}

	

}

