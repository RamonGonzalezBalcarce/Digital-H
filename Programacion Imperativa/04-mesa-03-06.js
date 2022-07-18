// incluir prompt sync
const prompt = require('prompt-sync')({ sigint: true })

//-----------------------------------------------------------

// Imprimir Frase
const imprimirFrase = () => {
    frase = prompt('Ingrese una frase: ')
    console.log(frase)
}

// imprimirFrase(frase)

//-----------------------------------------------------------

// Imprimir saludo de bienvenida
const imprimirSaludo = () => {
    let nombre = prompt('Ingrese su nombre: ')
    return console.log(`Hola ${nombre} bienvenido al sitio`)
}

// imprimirSaludo()

//-----------------------------------------------------------

const sumaDosNumeros = () => {
    let numero1 = prompt('Ingrese el primer numero: ')
    let numero2 = prompt('Ingrese el segundo numero: ')
    return console.log(`La suma de los numeros es: ${parseInt(numero1) + parseInt(numero2)}`)
}

//sumaDosNumeros()

//-----------------------------------------------------------
// Pedir año de nacimiento y devolver la edad
const calcularEdad = () => {
    let anioNacimiento = prompt('Ingrese su año de nacimiento: ')
    let anioActual = 2022
    return console.log(`La edad es: ${anioActual - anioNacimiento}`)
}

//calcularEdad()

//-----------------------------------------------------------
// Adivinar un numero aleatorio entre 1 y 100
const adivinarNumero = () => {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1
    //console.log(numeroAleatorio)
    let numero = prompt('Ingrese un numero: ')
    if (numero == numeroAleatorio) {
        return console.log('Felicidades, adivinaste el numero')
    } else {
        return console.log('Lo siento, no adivinaste el numero')
    }
}

//let numeroAleatorio = Math.random()
//console.log(numeroAleatorio)
//let numeroModificado = numeroAleatorio * 10
//console.log(numeroModificado)
//console.log(Math.floor(numeroModificado) + 1)

// adivinarNumero()

//-----------------------------------------------------------

// imprimir pares del 1 al 100
const imprimirPares = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

//imprimirPares()

//-----------------------------------------------------------
//  ingresar un numero - si ese numero es mayor a 500 se debe calcular y mostrar en pantalla el 18% de este.
const calcular18Porciento = () => {
    let numero = prompt('Ingrese un numero: ')
    if (numero > 500) {
        return console.log(`El 18% de ${numero} es: ${numero * 0.18}`)
    } else {
        return console.log('El numero es menor a 500')
    }
}

//calcular18Porciento()

// Escribí una función llamada elemento que recibe un arreglo como parámetro. La función debe devolver el valor que se encuentra en la tercera posición. Si el arreglo no tiene al menos 3 elementos deberá retornar -1.
const elemento = arreglo => {
    if (arreglo.length >= 3) {
        return console.log(arreglo[2])
    } else {
        return console.log(-1)
    }
}

elemento([1, 2, 3, 4, 5])
