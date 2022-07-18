//Loop de pares
//Deberás crear una función llamada loopDePares que reciba 
//como parámetro un número y haga un loop de 0 a 100 mostrando en
//la consola cada número del loop. En caso de que el número de la 
//iteración sumado con el número pasado por parámetro sea par, mostrará en la 
//consola: “El número X es par”.

let loopDePares = numero =>{
    for(let i = 0; i <= 100; i++){
        console.log(i);
        
        if((i+numero) % 2 == 0){
            console.log("El numero "+i+numero+" es par");
        }
    }
}

//Loop de impares con palabra
//Deberás crear una función llamada loopDeImpares que reciba como parámetro un número y una palabra, 
//y haga un loop de 0 a 100 mostrando en la consola cada número del loop. Luego, modificar el código
// para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la 
//consola la palabra pasada por parámetro.

let loopDeImpares = (numero, palabra) =>{
    for(let i=0; i<=100; i++){
        console.log(i);
        if((numero+i) % 2 !== 0){
            console.log(palabra);
        }

    }
}

//Sumatoria
//Deberás crear una función llamada sumatoria que reciba un número como parámetro 
//y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo. Ejemplo:
// sumatoria(3) debe retornar 6 porque hace (1+2+3)

let sumatoria = numero =>{
    let resultado=0
    for(i=numero; i>0; i--){
        resultado = resultado+i
        
    }
    console.log(resultado);
}
// Nuevo arreglo
// Deberás crear una función llamada nuevoArreglo que reciba un número como parámetro y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado. Ejemplo:
// nuevoArreglo(5) debe retornar [1,2,3,4,5]
// nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]

let nuevoArreglo = numero =>{
    nuevaLista=[]
    for(let i = 1; i<=numero; i++){
        nuevaLista.push(i)
    }
    return nuevaLista
}

// Similar String.split()
// Deberás crear una función llamada split que reciba un string y simule el comportamiento de la función original. Si no estás seguro de cómo funciona, Google puede ayudarte. Importante: no podés usar el String.split(). Ejemplo:
// split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
// split(“chau”) debe retornar [“c”,”h”,”a”,”u”]

let split = palabra =>{
    listaPalabra=[]
    for(let i = 0; i < palabra.length; i++){
        listaPalabra.push(palabra[i])
    }
    return listaPalabra
}
split("hola")
// Manejando dos arreglos
// Deberás crear una función llamada arrayHandler que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”. Ejemplo:
// arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 
// Soy 1 y yo soy h
// Soy 2 y yo soy o
// Soy 3 y yo soy l
// Soy 4 y yo soy a

let arrayHandler = (lista1, lista2) =>{
    for(let i = 0; i < lista1.length; i++){
        console.log(`Soy ${lista1[i]} y yo soy ${lista2[i]}`);
    }
}
let a = [1,2,3,4]
let b = ['h','o','l','a']

// Palíndromo
// Deberás crear una función llamada palindromo que indique si una palabra es palíndroma o no. Debe retornar “true” en caso de que lo sea, y “false” en caso de que no. Ejemplo:
// palindromo(“anilina”) debe retornar true
// palindromo(“Ana”) debe retornar true
// palindromo(“Enrique”) debe retornar false

let palindromo = palabra =>{
    let palabraVerre=""
    for(let i = palabra.length - 1; i>=0; i--){
        palabraVerre=palabraVerre + palabra[i]
    }
    if (palabra === palabraVerre){
        return true
    }else{
        return false
    }
    
}
console.log(palindromo("juancito"))