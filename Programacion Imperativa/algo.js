// Grupo 4: Agustina Mastricola - Fabricio Daniel Turrina - Marcelo Betancor - Martin Elias Dellugo - Santiago Abraham - Lucas Diaz

/**
 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 */

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

//fizzBuzz()

// Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; var index = 1;
// Visiten este sandbox para escribir su código.
// https://codesandbox.io/s/busqueda-en-array-025me?file=/src/index.js

let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100]
let index = 1

const mostar = (array, index) => {
    console.log(array[index])
}

// mostar(array, index)

// Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.
// https://codesandbox.io/s/dias-del-mes-jb0f2?file=/src/index.js

const diasMes = mes => {
    if (mes === 2) {
        return 28
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
        return 30
    } else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
        return 31
    }
    return 'Ingrese un mes válido'
}

// console.log(diasMes(10))

// Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.
// https://codesandbox.io/s/inverter-jfwm7?file=/src/index.js

const invertirNum = numero => {
    let numeroInvertido = ''
    let num = numero.toString()
    for (let i = num.length; i > 0; i--) {
        numeroInvertido += num[i - 1]
    }
    return numeroInvertido
}

// console.log(invertirNum(32443))

// OTRA MANERA
// numInv += num % 10 => ultimo dígito 3
// num = num / 10 => numero sin el ultimo digito 3244
// while (numero > 0) {
//      numeroInvertido += numero %10
//      numero = Math.floor(numero/10)
//}

/**
 * Escribir una función que reciba una array
 *  y solo imprima los valores que se repiten.
 *  Por ejemplo, dada la siguiente array e índice,
 *  la función imprimirá '6,23,33,100'.
 * let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
 */

const imprimirRepetidos = array => {
    let repetidos = []
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                repetidos.push(array[i])
            }
        }
    }
    return repetidos
}

console.log(imprimirRepetidos(array))
