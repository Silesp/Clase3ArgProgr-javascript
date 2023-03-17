//1. Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato que es.//

var dato;
function mostrarTipo(dato){
console.log("El tipo de dato ingresado es:" + typeof (dato));
}
var dato = 15;
llamarFuncion = mostrarTipo(dato);

//2. Dado dos números ingresados por el usuario, se pide realizar una función que devuelve la resta de ambos números. Mostrar el resultado por la consola//

function Restar(){
	return resultadoOperacion;
	}
	 dato1 = prompt("Introduce primer número ", "0");
	 num1 = parseInt(dato1);
	 dato2 = prompt("Introduce segundo número ", "0");
	 num2 = parseInt(dato2);
	 let resultadoOperacion = num1 - num2;
	 alert('La resta es '  +resultadoOperacion );
	
	 console.log('La resta es:' +(resultadoOperacion));

//3. Generar una función que le ingresen por parámetro dos valores distintos en dosvariables a y b,//
// luego el valor ingresado en a pasarlo a b y el valor Ingresado en b, Pasarlo a a y mostrarlos.//

function intercambioAB() {
	let a = prompt("Ingrese un valor");
	let b = prompt("Ingrese otro valor");
	
	console.log("El valor antes del cambio de 'a' es : " +a+ " y el valor de 'b' es: "+b);
	
	let c = a;
	a = b;
	b = c
	
	console.log("El valor de 'a' es: " +a+ " y el valor de 'b' es: " + b);
	}
	intercambioAB();

//4. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
// calcular su perímetro, su superficie, e informar los mismos en consola//

function perimetroCuadrado(lado){
    return lado * 4;
}

let lado;
        lado = prompt('Ingrese medida del lado: ');
        var perimetro;
        perimetro = parseInt(lado) * 4;
        document.write('Su perímetro es: ');
        document.write(perimetro);


 function superficieCuadrado(lado){
            return lado * lado;
        }
        
         lado = prompt('Ingrese medida del lado: ');
         var perimetro;
         superficie = parseInt(lado) * lado;
         document.write( 'Su superficie es: ');
         document.write(superficie);

// 5. Generar una función que dada una temperatura en grados fahrenheit los convierta a grados celsius.//

function convertirCelcius(temperaturaFahrenheit) {
   return (temperaturaFahrenheit - 32) * 5/9; 
}
console.log(convertirCelcius(70));


//6. Realizar una función que calcule el factorial de un número ingresado por el usuario (el
//número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la consola.//

function factorialdeunNumero(num) {
	if (num === 0 || num === 1)
	  return 1;
	for (var i = num - 1; i >= 1; i--) {
	  num *= i;
	}
	return num;
  }
  
  num = prompt('Ingrese un número '); 
  
  console.log(factorialdeunNumero(num));
  

//7. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos//

var cadena = prompt("Introduce un Texto para Comprobar si es un Palíndromo:");
	var numchar = cadena.length;
 
	cadena = cadena.toLowerCase();
	var j;
	var car;
	var salida = "";
	var cadena_espac = "";
	var cadena_reves = "";
       
	for (i = 0; i < numchar; i++) {
		car = cadena.charAt(i);
               
		if (car != " ") {
			cadena_espac += car;
			cadena_reves = car + cadena_reves;
		}
	}
	if (cadena_espac == cadena_reves) {
		document.write("El texto es un palíndromo");
	}
	else {
		document.write("El texto No es un palíndromo");
	}


	//8. Se pide que un usuario ingrese una cadena de caracteres. Se pide que el usuario ingrese una cadena de caracteres. Se pide que el usuario ingrese una cadena de caracteres. Se pide que el usuario ingrese una cadena de caracteres. Se pide que el usuario ingrese una cadena de caracteres. Se pide que el usuario ingrese una cadena de caracteres
	
	var cadena = prompt("Introduce un texto");
	
	console.log(cadena.toUpperCase());
	
	console.log(cadena.toLowerCase());


//   9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la calificación resultante según la nota ingresada:
//0-3: Muy deficiente//
//3-5: Insuficiente//
//5-6: Suficiente//
//6-7: Bien//
//7-9: Notable//
//9-10: Sobresaliente//

do {
	
	var nota = prompt("Introduce tu nota");
	
	if (Number(nota) == nota) {
		
		if (nota > 0 && nota <= 10) {
			if (nota < 3) {
				alert("Muy deficiente");
			}
			else if (nota < 5) {
				alert("Insuficiente");
			}
			else if (nota < 6) {
				alert("Suficiente");
			}
			else if (nota < 7) {
				alert("Bien");
			}
			else if (nota < 9) {
				alert("Notable"); 5
			}
			else if (nota >= 9) {
				alert("Sobresaliente");
			}
		}
		
		else {
			alert("Nota errónea");
		}
	}

    else {
		
		if (nota != undefined) {	
			alert("Introduce un número valido");
		}
	}

} while (nota != undefined);


//10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y devuelve si ese mes tiene 30 o 31 días.//

let dia, mes, año;
mes = prompt('Introduzca el número del mes:' , '');
mes = parseInt(mes);

if (mes ==1  || mes==3 || mes ==5  || mes==7 || mes ==9  || mes==10 ||mes ==12)
{
    document.write('Este mes tiene 31 días');
}
else 
{
    if  (mes ==2)
    document.write('Este mes puede tener 30 días.');
    else
    document.write('Este mes tiene 30 días');
}


//11. Crear un script que genere una pirámide como el ejemplo con los números del 1 al número que ingrese el usuario (no puede ser mayor de 10, realizar la validación)://
//1//
//12//
//123//
//1234//
//12345//
//123456//

var num = prompt("Introduce un número");

if (Number(num) == num) {
   
    if (num > 0 && num <= 10) {
        var rep,i;
  
        for (i = 0; i <=num; i++) {
    
            for (rep = 1; rep <= i; rep++) {
                document.write(rep);
            }
            document.write("<br>");
        }
    } 
    else {
        alert("El número introducido no es válido");
    }
} 

//12. Generar una función donde ingresen dos números, el primero corresponde a la
//cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
//colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
//disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.

function calculoCajas(bultosEnStock, bultosXCaja) {
    const cajasCompletas = bultosEnStock // bultosPorCaja;
    const bultosSueltos = bultosEnStock % bultosXCaja;
    console.log("Se pueden llenar "+ cajasCompletas + " cajas completas y quedan "+ bultosSueltos + " bultos sueltos.");
  }
console.log(calculoCajas(10,15));


//13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
//Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
//Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
//través de su código y el script saca el descuento correspondiente por la consola.

let marca,modelo = 0;
   marca = prompt("Marca", "0");
   modelo = prompt("Modelo", "0");

   if ((marca=="ford")  || (modelo =="fiesta")){
    console.log(('Su descuento es el 5'));
   } else if ((marca=="ford")  || (modelo =="focus")){;
    console.log(('Su descuento es el 10'));  
   }
  