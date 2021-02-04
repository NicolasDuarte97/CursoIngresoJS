/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 

{
	var temperaturaF;
	var centígrados;
	
	temperaturaF = txtIdTemperatura.value;

	temperaturaF = parseInt(temperaturaF);

	centígrados = ((temperaturaF - 32) * 5/9).toFixed(2);



	alert( temperaturaF + ' Fahrenheit son  ' + centígrados  + ' centígrados '  );


}

function CentigradosFahrenheit () 

{

	var temperaturaF;
	var centígrados;
	
	centígrados = txtIdTemperatura.value;

	centígrados = parseInt(centígrados);

	temperaturaF = (centígrados * 9/5) + 32;

	         

	alert( centígrados + ' Centigrados son  ' + temperaturaF  + ' Fahrenheit ' );


}
