/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */
let matriz = [
    [1,4,7,2,5],
    [8,3,6,9,1],
    [1,5,9,2,6],
    [3,5,7,2,4],
    [1,7,9,3,5]
]
/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */
const sumaTotal = x => {
    let suma = 0
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
             suma += x[i][j];
        }
    }
    return suma
}
//console.log(sumaTotal(matriz));

// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números.

const crearMatriz = () =>{
    let matriz = []
    for (let i = 0; i < 10; i++) {
        matriz[i] = []
        for (let j = 0; j < 10; j++) {
            matriz[i].push(j+1+(i*10))    
        }
    }
    return matriz;
}
//console.table(crearMatriz())

// Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal marcada en rojo.
// b) La otra va a marcar los valores de la diagonal marcada en verde.
// Ambas funciones deben devolver un resultado único.

const diagonal = x => {
    let suma = 0
    for (let i = 0; i < x.length; i++) {
        suma += x[i][i]
    }
    return suma
}

const diagonalInversa = x => {
    let suma = 0
    for (let i = 0; i < x.length; i++) {
        suma += x[9-i][9-i]
    }
    return suma
}

console.log(diagonal(crearMatriz()));
console.log(diagonalInversa(crearMatriz()));
console.table(crearMatriz())
