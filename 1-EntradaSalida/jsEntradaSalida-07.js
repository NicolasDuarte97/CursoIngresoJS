/* NICOLAS DUARTE
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	  var unNumero;
    var otroNumero;
    var suma;
// entradas
   unNumero = txtIdNumeroUno.value; //   html Id      
   otroNumero = txtIdNumeroDos.value; //   html Id      
// converciones

   unNumero = parseInt(unNumero);       //  parseInt, floatInt   
   otroNumero = parseInt(otroNumero);
   


   suma = unNumero + otroNumero;  // +,-,*,/,%


    alert('La suma es: ' + suma );

}

function restar()

{
	  var unNumero;
    var otroNumero;
    var restar;

   unNumero = txtIdNumeroUno.value;
   otroNumero = txtIdNumeroDos.value;


   unNumero = parseInt(unNumero);
   otroNumero = parseInt(otroNumero);
   


   restar = unNumero - otroNumero;  


    alert('La suma es: ' + restar );

}

function multiplicar()

{ 
	  var unNumero;
    var otroNumero;
    var multiplicar;

   unNumero = txtIdNumeroUno.value;
   otroNumero = txtIdNumeroDos.value;


   unNumero = parseInt(unNumero);
   otroNumero = parseInt(otroNumero);
   


   multiplicar = unNumero * otroNumero; 

    alert('La suma es: ' + multiplicar );

}

function dividir()

{
	
  var unNumero;
  var otroNumero;
  var dividir;

   unNumero = txtIdNumeroUno.value;
   otroNumero = txtIdNumeroDos.value;


   unNumero = parseInt(unNumero);
   otroNumero = parseInt(otroNumero);
   


   dividir = unNumero / otroNumero; 


    alert('La suma es: ' + dividir );
}


