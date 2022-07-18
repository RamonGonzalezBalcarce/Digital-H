// Loop de pares
// Deberás crear una función llamada loopDePares que reciba como 
// parámetro un número y haga un loop de 0 a 100 mostrando en la consola 
// cada número del loop. En caso de que el número de la iteración sumado 
// con el número pasado por parámetro sea par, mostrará en la 
// consola: “El número X es par”.

const loopDePares = x =>{
    for (let i = 0; i <= 10; i++) {
        if ((i + x) % 2 === 0){
            console.log(`El número ${(i+x)} es par`);
        }
        console.log(i);
    }
}
//loopDePares(3)


// Loop de impares con palabra
// Deberás crear una función llamada loopDeImpares que reciba como 
// parámetro un número y una palabra, y haga un loop de 0 a 100 mostrando 
// en la consola cada número del loop. Luego, modificar el código para que, 
// en caso de que ese número sumado con el número pasado por parámetro sea 
// impar, muestre en la consola la palabra pasada por parámetro.
const loopDeImpares = (x, palabra) =>{
    for (let i = 0; i <= 10; i++) {
        if ((i + x) % 2 !== 0){
            console.log(`${(palabra)}`);
        }
        console.log(i);
    }
}
//loopDeImpares(3, 'test')

// Sumatoria
// Deberás crear una función llamada sumatoria que reciba un número como 
// parámetro y que devuelva la sumatoria de todos sus números anteriores, 
// incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)
// sumatoria(8) debe retornar 36
const sumatoria = x => {
    let num = 0
    for (let i = 0; i <= x; i++) {
        num += i
    }
    return num
}
console.log(sumatoria(8));

// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número 
// como parámetro y que devuelva un nuevo arreglo con tantos elementos 
// como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
const nuevoArreglo = x =>{
    let arreglo = []
    for (let i = 0; i < x; i++) {
        arreglo[i] = i+1
    }
    return console.log(arreglo);
}
nuevoArreglo(5)

// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento 
// de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. 
// Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
const split = x =>{
    array = []
    for (let i = 0; i < x.length; i++) {
        array[i] = x.slice(i,i+1)
    }
    return console.log(array);
}

split("Niko")

// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo 
// como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy 
// {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

const arrayHandler = (a, b) =>{
    for (let i = 0; i < a.length; i++) {
        console.log(`Soy ${a[i]} y yo soy ${b[i]}`);
    }
}
arrayHandler([1,2,3,4], ['h','o','l','a'])



// // Palíndromo
// // Deberás crear una función llamada palindromo que indique si una palabra 
// // es palíndroma o no. Debe retornar “true” en caso de que lo sea, 
// // y “false” en caso de que no. Ejemplo:
// // palindromo(“anilina”) debe retornar true
// // palindromo(“Ana”) debe retornar true
// // palindromo(“Enrique”) debe retornar false
const palindromo = palabra =>{
    palabra = palabra.toLowerCase();
    let palCom = [] 
    let pal = []
    let flag = true
    for (let i = 0; i < palabra.length; i++) {
        pal[i] = palabra[i]
        palCom[i] = palabra.slice(palabra.length-1-i, palabra.length-i)
        if (pal[i] === palCom[i]){
            flag = true
        }
        else{
            flag = false
        }
    }
    if (flag){
        console.log('Es palindroma');  
    }
    else{
        console.log('No es palindroma');   
    }
}

palindromo('hola')




// console.log(silaba1);


// let palabraArray = []
// let primeraMitad = []
// let segundaMitad = []

// // Creo una funcion que divida un array en dos partes iguales, dependiendo si la longitud es par o impar.
// const dividirArray = array => {
//     if (array.length % 2 !== 0) {
//         primeraMitad = palabraArray.slice(0, (array.length - 1) / 2)
//         segundaMitad = palabraArray.slice((array.length + 1) / 2, array.length)
//         console.log(primeraMitad, segundaMitad);
//     } else{
//         primeraMitad = palabraArray.slice(0, (array.length + 1) / 2)
//         segundaMitad = palabraArray.slice((array.length + 1) / 2, array.length)
//         console.log(primeraMitad, segundaMitad);
//     }
// }

// // creo la funcion palindromo, que recibe una palabra por parametro, la convierte en un array.

// // y despues compara los valores de ambos arrays.
// const palindromo = (palabra) => {
    
//     for (let i = 0; i < palabra.length; i++) { 
//         palabraArray.push(palabra.slice(i, i+1))
//     }
//     console.log(palabraArray);
// // Llama a la funcion Dividir para que la divida

// dividirArray(palabraArray)

// //compara los valores del primero con el ultimo array[i] === array[array.length - 1] 
//     for (let i = 0; i < primeraMitad.length; i++) {
        
//         if (primeraMitad[i] === segundaMitad[i + (segundaMitad.length -1)]) {
//             return true
//         } else {
//             return false
//         }
//     }
// }
// console.log(palindromo("aela"))




// const palindroma = palabra => {
//     let bandera = true
//     for (let i=0; i < palabra.length ; i++){
//         if (palabra.charAt(i) !== palabra.charAt(palabra.length-(i+1))){
//             bandera = false
//         }
//     }
//     if(bandera){
//         console.log("Palindroma")
//     }
// }
// palindroma('neuquen')


// const palindroma = palabra => {
//     palabra = palabra.toLowerCase()
//     let bandera = true
//     for (let i=0; i < palabra.length ; i++){
//         if (palabra[i] !== palabra[palabra.length-(i+1)]){
//             bandera = false
//         }
//     }
//     if(bandera){
//         console.log("Palindroma")
//     }
// }

// palindroma("neuquen")

