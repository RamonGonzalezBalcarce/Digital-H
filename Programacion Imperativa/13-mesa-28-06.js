const edades = [33, 27, 34, 30, 34, 25]

// Desarrollar una función que ordene internamente de forma ascendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}

// console.log(bubbleSort(edades))

// Desarrollar una función que ordene internamente de forma descendente las edades, la misma deberá retornar él array ordenado , es decir deberíamos obtener resultado como él siguiente.
const bubbleSortDesc = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}

// console.log(bubbleSortDesc(edades))

const letras = ['C', 'A', 'D', 'E', 'H', 'Z', 'J', 'L']

// ¿Cómo pudieras ordenar el array anterior, alfabéticamente?

// console.log(bubbleSort(letras))

const arrayCuentas = [
    {
        titular: 'Arlene Barr',
        estaHabilitada: false,
        saldo: 3253.4,
        edadTitular: 33,
        tipoCuenta: 'sueldo'
    },
    {
        titular: 'Roslyn Torres',
        estaHabilitada: false,
        saldo: 3229.45,
        edadTitular: 27,
        tipoCuenta: 'sueldo'
    },
    {
        titular: 'Cleo Lopez',
        estaHabilitada: true,
        saldo: 1360.19,
        edadTitular: 34,
        tipoCuenta: 'corriente'
    },
    {
        titular: 'Daniel Malone',
        estaHabilitada: false,
        saldo: 3627.12,
        edadTitular: 30,
        tipoCuenta: 'sueldo'
    },
    {
        titular: 'Ethel Leon',
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: 'sueldo'
    },
    {
        titular: 'Harding Mitchell',
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: 'corriente'
    }
]

// Desarrollar una función que ordene internamente de forma ascendente según él saldo de cada cuenta, la misma deberá retornar él array ordenado .

const bubbleSortSaldo = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].saldo > arr[j + 1].saldo) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}

// console.log(bubbleSortSaldo(arrayCuentas))

// Desarrollar una función que ordene internamente de forma ascendente según la edad del titular de cada cuenta, la misma deberá retornar él array ordenado.

const bubbleSortEdad = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].edadTitular > arr[j + 1].edadTitular) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}

// console.log(bubbleSortEdad(arrayCuentas))
