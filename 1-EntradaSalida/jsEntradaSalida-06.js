/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
  var unNumero;
  var otroNumero;
  var suma;
// entradas
   unNumero = txtIdNumeroUno.value; //   html Id      //
   otroNumero = txtIdNumeroDos.value; //   html Id      //
// converciones

   unNumero = parseInt(unNumero);
   otroNumero = parseInt(otroNumero);
   


   suma = unNumero + otroNumero;  // +,-,*,/,%

// Resultado

    alert('La suma es: ' + suma );

   

	 
	 
}


//txtIdNumeroUno txtIdNumeroDos


