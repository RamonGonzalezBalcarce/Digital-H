const prompt = require("prompt-sync")({sigint: true});

// 1. Crear una función que convierta pulgadas en centímetros.

const conversion = pulgada => pulgada * 2.54

console.log(conversion(2))

// 2. Crear una función que recibe un string y lo convierte en una URL.

const link = (palabra) => `http://www.${palabra}.com`

console.log(link('pepito'))

// 3. Crear una función que recibe un string y devuelve la misma frase pero con admiración.

const admiracion = palabra => `${palabra}!`

console.log(admiracion('pepito'));

// 4. Crear una función que calcule la edad de los perros, considerando que 1 año

const edadPerro = edad => edad * 7

console.log(edadPerro(4));

// 5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu sueldo mensual como parámetro.

const horaTrabajo = sueldo => sueldo / 40

console.log("el valor de tu hora de trabajo es: " + horaTrabajo(1500))

// 6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en kilogramos y calcule el IMC de una persona. Luego, ejecutar la función probando diferentes valores.

const calculadorIMC = (peso, metros) => peso / (metros**2) 

console.log(calculadorIMC(60, 1.60));

// 7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas y lo retorne.

const mayuscula = palabra => console.log(palabra.toUpperCase())

mayuscula('hola mundo')

// 8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.

const tipoDato = dato => console.log(typeof(dato))

tipoDato(3)
tipoDato('a')
tipoDato(true)

// para los chicos de mi grupo cambie dato.typeof() por typeof(dato) y se soluciono :)

// 9. Crear una función que le pasamos el radio de un círculo y nos devuelve la circunferencia.


