// NICOLAS DUARTE
/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) 
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/
function mostrar()
{ 
	var Edad;
	Edad = txtIdEdad.value;
	Edad = parseInt(Edad);

	if( Edad > 17)

	{

     alert(' Sos mayor de edad ')

	}

	else
	{
		if(Edad > 12)
		{
         alert(' Sos adolescente ');
		}

		else
		{
			alert(' Sos Niño ');

		}
	}

	



}//txtIdEdad