// 01
/**
 * Mostrar en consola los números del 100 al 0 utilizando la estructura while, for y do while
 */

// SOLUCION CON WHILE
let numero = 100;

while (numero <= 100 && numero >= 0) {
    console.log(numero);
    numero--;
}


// SOLUCION CON FOR 
for (let i = 100; (i <= 100 && i >= 0); i--) {
    console.log(i);
}


// SOLUCION CON DO WHILE
let i = 100;

do {
    console.log(i);
    i--;
} while (i <= 100 && i >= 0);


// ----------------------------------------------------
 // 02
 /**
  * Mostrar en consola los números pares del 0 al 1000 utilizando la estructura while, for y do while
  */ 

// SOLUCION CON WHILE
let numero = 0;

while (numero <= 1000) {
   console.log(numero);
   numero+= 2;
}

// SOLUCION CON FOR
for (let i = 0; i <= 1000; i+= 2) {
    console.log(i);
}


// SOLUCION CON DO WHILE
let i = 0;

do {
    console.log(i);
    i+= 2;
} while (i < 1000);

  
// ----------------------------------------------------

// 03
/**
 * Mostrar en consola la suma parcial de todos los números 
 * que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

// SOLUCION CON WHILE
let numero = 0;
let suma = 0;

while (numero <= 1000) {
    numero++;
    suma += numero;
    console.log(suma);
}


// SOLUCION CON FOR
let suma = 0;

for (let i = 0; i <= 1000; i++) {
    suma += i;
    console.log(suma);
}

// SOLUCION CON DO WHILE
let suma = 0;
let i = 0;

do {
    suma += i;
    console.log(suma);
    i++;
} while (i <= 1000)

// ----------------------------------------------------

// 04
/**
 * Mostrar en consola la suma parcial de todos los 
 * números impares que van desde 0 hasta 1000 utilizando la estructura while, for y do while
 */

// SOLUCION CON WHILE
let numero = 1;
let suma = 0;

while (numero <= 1000) {
    suma += numero;
    numero+= 2;
    console.log(suma);
}


// SOLUCION CON FOR
let suma = 0;

for (let i = 1; i <= 1000; i+=2) {
    suma += i;
    console.log(suma);
}


// SOLUCION CON DO WHILE
let i = 1;
let suma = 0;

do {
    suma += i;
    console.log(suma);
    i+=2
} while (i <= 1000)

// ----------------------------------------------------

// 05
/**
 * Mostrar en consola el siguiente dibujo utilizando la estructura while, for y do while
 */
/*
*
**
***
****
*****
******
*******
********
*********
**********
***********
************
*************
*/

// SOLUCION CON WHILE
let numero = 0;
let asterisco = "*";

console.log(asterisco);

while (numero <= 12) {
    asterisco = asterisco + "*"
    console.log(asterisco);
    numero++;
}


// SOLUCION CON FOR
let asterisco = "*";

for (let i = 0; i <= 12; i++) {
    console.log(asterisco);
    asterisco = asterisco + "*"
}


// SOLUCION CON DO WHILE
let asterisco = "*";
let i = 0;

do {
    console.log(asterisco);
    asterisco = asterisco + "*"
    i++
} while (i <= 12)

// ----------------------------------------------------

// 06
/**
 * Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000 usando for
 */

for (let i = 0; i <=10000; i+=10) {
     console.log(i)
}

// ----------------------------------------------------

// 07
/**
 * Mostrar en consola los números desde el 1000 hasta el 0
 * Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero** */

for (let i = 1000; (i <= 1000 && i >= 0); i--) {
    if ((i % 10) === 0) {
        console.log(`**${i}**`);
    }
    else {
        console.log(i);
    }
}

// ----------------------------------------------------