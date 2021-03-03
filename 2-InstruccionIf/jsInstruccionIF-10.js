// NICOLAS DUARTE
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()

{ 
	var NotaAlumno;

	NotaAlumno = Math.floor(Math.random() * 10 );  // 

	NotaAlumno = parseInt(NotaAlumno);

	console.log(NotaAlumno);

	if(NotaAlumno < 4 )
	{

          alert(' Tu nota es: ' + NotaAlumno +' Vamos, la proxima se pude ');
	}

	else

	{
		if ( NotaAlumno > 8)
			
		{

          alert(' Tu nota es: ' + NotaAlumno + ' EXCELENTE ');

		}

		else
		{

		  alert(' Tu nota es: ' + NotaAlumno +' APROBÓ  ');

		}



	}


}