// En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.

let participantes = [
    { user: 'Pepito', nomFoto: 'Foto 1', likes: 10 },
    { user: 'Juan', nomFoto: 'Foto 2', likes: 20 },
    { user: 'Maria', nomFoto: 'Foto 3', likes: 25 },
    { user: 'Ruben', nomFoto: 'Foto 4', likes: 89 },
    { user: 'Lucas', nomFoto: 'Foto 5', likes: 105 },
    { user: 'Eze', nomFoto: 'Foto 6', likes: 60 },
    { user: 'Ignacio', nomFoto: 'Foto 7', likes: 70 }
]

const bubbleSortPorLikes = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].likes > arr[j + 1].likes) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}

// console.log(bubbleSortPorLikes(participantes))

let primerPuesto = participantes[participantes.length - 1]
let segundoPuesto = participantes[participantes.length - 2]
let tercerPuesto = participantes[participantes.length - 3]
let ultimoPuesto = participantes[0]

// console.log(primerPuesto)
// console.log(segundoPuesto)
// console.log(tercerPuesto)
// console.log(ultimoPuesto)

// Ejercicio 2
// El servicio meteorológico, para llevar el control diario de temperatura, utiliza un objeto temperatura donde registra día —valor numérico del día—, mes —valor numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho día. Las temperaturas —objeto temperatura— están cargados en un array.

let temperaturas = [
    { dia: 1, mes: 1, maxima: 10, minima: 2 },
    { dia: 2, mes: 1, maxima: 12, minima: 7 },
    { dia: 3, mes: 1, maxima: 11, minima: 6 },
    { dia: 4, mes: 1, maxima: 15, minima: 9 },
    { dia: 5, mes: 1, maxima: 13, minima: 6 }
]

// a) Ordenar por temperatura mínima de menor a mayor.

const bubbleSortPorMinima = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].minima > arr[j + 1].minima) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}

// console.log(bubbleSortPorMinima(temperaturas))

// b) Ordenar por temperatura máxima de mayor a menor.

const bubbleSortPorMaxima = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j].maxima < arr[j + 1].maxima) {
                let aux = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = aux
            }
        }
    }
    return arr
}

// console.log(bubbleSortPorMaxima(temperaturas))
