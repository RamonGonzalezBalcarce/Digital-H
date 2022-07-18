const prompt = require("prompt-sync")({sigint: true});

// SUMA
let sumar = (n1,n2) => n1 + n2

// RESTA
let restar = (n1,n2) => n1 - n2

// MULTIPLICACION
let multiplicar = (n1,n2) => n1 * n2

// DIVISION
let dividir = (n1,n2) => n1 / n2

// POTENCIA
let cuadradoDeUnNumero = n1 => multiplicar(n1,n1)

// PROMEDIO
let promedioDeTresNumeros = (n1,n2,n3) => dividir(sumar(sumar(n1,n2),n3),3)

// PORCENTAJE
let calcularPorcentaje = (n1,n2) => dividir(multiplicar(n1,n2),100)

// GENERADOR DE PORCENTAJE
let generadorDePorcentaje = (n1,n2) => dividir(multiplicar(n1,100),n2)


// -----------------------------------//

console.log("-------------- Testeo de Operaciones / Calculadora --------------")

// PEDIMOS AL USUARIO QUE INGRESE 2 VALORES
let numero_1 = prompt("Ingresar el primer numero: ")
let numero_2 = prompt("Ingresar el segundo numero: ")
let numero_3 = prompt("Ingresar el tercer numero: ")

console.log("")

// RESULTADO DE LA SUMA
console.log("El resultado de la suma es: "+sumar(parseInt(numero_1), parseInt(numero_2)))

// RESULTADO DE LA RESTA
console.log("El resultado de la resta es: "+restar(parseInt(numero_1), parseInt(numero_2)))

// RESULTADO DE LA MULTIPLICACION
console.log("El resultado de la multiplicacion es: "+multiplicar(parseInt(numero_1), parseInt(numero_2)))

// RESULTADO DE LA DIVISION
console.log("El resultado de la division es: "+dividir(parseInt(numero_1), parseInt(numero_2)))

// RESULTADO DE LA POTENCIA
console.log("El resultado de la potencia es: "+cuadradoDeUnNumero(parseInt(numero_1)))

// RESULTADO DEL PROMEDIO
console.log("El resultado del promedio es: "+promedioDeTresNumeros(parseInt(numero_1), parseInt(numero_2), parseInt(numero_3)))

// RESULTADO DEL PORCENTAJE
console.log("El resultado del porcentaje es: "+calcularPorcentaje(parseInt(numero_1), parseInt(numero_2)))

// RESULTADO DEL GENERADOR DEL PORCENAJE
console.log("El resultado del porcentaje es: "+generadorDePorcentaje(parseInt(numero_1), parseInt(numero_2)))