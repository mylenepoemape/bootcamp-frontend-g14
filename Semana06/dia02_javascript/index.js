console.log("Hola Javascript")

/*
* 👋 Bienvenido a RunJS 🚀
*
* Para comenzar, intente escribir algo de código
*
* Por ejemplo, aquí hay una función que devuelve una cadena:
*/
const holaMundo = () => '¡Hola, Mundo! 🌎'

// Cuando se llama a la función, el resultado se muestra a la derecha 👉
holaMundo()

/*
* Active RunJS para hacer cosas aún más sorprendentes, como:
* - instalando paquetes NPM
* - abrir múltiples pestañas
* - verificar tipos de parámetros
* - autocompletar
* - fragmentos de código
* - y apoyar el desarrollo 😀
*
* ¡Disfrutar! 🎉
*/


// comentario

/* Este es un comentario */

// tipo de datos basicos
// undefine
let nombre;
console.log(nombre);
console.log(typeof nombre);

// null
let apellido = null;
console.log(apellido);
console.log(typeof apellido);

// boolean: false or true
let descuento = false;
console.log(descuento);

// number
const number1 = 20;
const number2 = 20.50;
const number3 = -38;
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);

// string
const alumna = 'Mylene';
const alumno = 'Mylene';
const numero1 = '200';
const numero2 = 200;

console.log(typeof alumna);
console.log(typeof alumno);
console.log(typeof numero1);
console.log(typeof numero2);

// object
// funtion
// bigint
// Symbol

// Variables y constantes

// var 
// const, let ES6 (lo recomendable)

const edad = 55;
//edad = 22;
console.log(edad);

let edad2= 24;
edad2=18;
edad2=24;
console.log(edad2);

// operaciones matemáticas
console.log(1 + 2);
console.log(1 - 2);
console.log(1 * 2);
console.log(1 / 2);
console.log(8 % 5); // residuo
console.log(2 ** 5);

// operador de asignación =
const genero = 'femenino';

// operadores de comparación
// -------------------------
// operador de igualdad no estricta
1==2;
1==1;
1=='1';
1!=1;

// operador de igualdad estricta
1 === 2;
1 === 1;
1 === '1';
1 !== 1;

// Otros operadores
8 > 5;
5 < 8;
8 >= 5;
8 >= 5;

// operadores lógicos {AND, OR, NEGACION}
true && false; // and
true || false; // or
!false; // negación

// Operadores de cadena
const saludo1 = 'Hola, ';

const nombreCompleto = 'Victor' + ' - ' + 'Villazon'
const saludoamigo = saludo1 + nombreCompleto

console.log(nombreCompleto);
console.log(saludoamigo);

// operadores ternario
const edad1 = 14
const soymayoromenor = edad1 > 18 ? 'mayor' : 'menor';
console.log(soymayoromenor);

// EJERCICIOS
// 1. Retorna True si  dos strings tienen la misma longitud sino devolver False
const cade1 = 'cadena12'
const cade2 = 'valore1'
console.log(cade1.lenght===cade2.lenght ? true : false);

// 2. Retornar True si un numero es menor que 40 sino devolver False
const valor11 = 10
const valor12 = 20
const valort1 =  valor11 < valor12 ? true : false;
console.log(valort1);

// 3. Retornar True si un numero es menor que 60 sino devolver False
const valor21 = 60
const valor22 = 45
const valort2 =  valor22 < valor21 ? true : false;
console.log(valort2);

// 4. Retornar True si un numero es par sino devolver False
const valor31 = 44
const valor32 = 2
const valort3 = (valor31 % valor32) == 0 ? true : false;
console.log(valort3);

// 5. Retornar True si un numero es impar sino devolver False
const valor41 = 44
const valor42 = 2
const valort4 = (valor41 % valor42) == 1 ? true : false;
console.log(valort4);

const base = 4
const alt = 3
console.log((base * alt)/2)
console.log(base * alt/2)

// Condicionales
if (true) {
    // verdadero
}
const esPar = false

if (esPar) {
  console.log('Este numero es par')
}

if (esPar) {
  console.log('Este numero es par')
} else {
  console.log('Este numero es impar')
}

const heroe = 'Superman'

if (heroe === 'Batman') {
  console.log('Soy Batman')
} else if (heroe=== 'Spiderman') {
  console.log('Soy Spiderman')
} else if (heroe=== 'Iroman') {
  console.log('Soy Iroman')
} else {
  console.log('No soy heroe')
}

switch (heroe) {
  case 'Batman':
    console.log('Soy Batman')
    break
  case 'Spiderman' :
    console.log('Soy Spiderman')
    break
  case 'Iroman' :
    console.log('Soy Ironman')
    break
  default:
    console.log('Soy Ironman')
}

// estructuras repetitivas
// for
for (let i = 0; i < 10; i++) {
  console.log(i)
}
// while
let j = 0
while (j<4){
  console.log(j)
  j++
}

// Do while
let k = 0
do {
  console.log(k)
  k++
} while (k<3)
  
function imprimeMiNombre (nombre, apellido) {
  console.log('Hola soy ' + nombre + ' ' + apellido)
}

imprimeMiNombre('Victor','Villazon')

// EJERCICIOS
  
// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'
const edad41 = 32
function esMayorDeEdad (edad) {
if (edad >= 18) {
  console.log('Mayor de edad')
} else {
  console.log('Menor de edad')
  }
}
esMayorDeEdad(edad41)


// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
const idioma = 'inglésas';
switch (idioma) {
  case 'español': 
    console.log('Hola')
    break
  case 'inglés':
    console.log('Hello')
    break
  case 'aymara':
    console.log('kamisaraki')
    break
  default:
    console.log('no hay saludo')
}

// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número

// Funciones

// definiendo una función
//function nombreDeLaFuncion() {
//}

// 4. REtornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10
