let participantes =  [{
    nombre:'Alicia',
    etapas: [10, 50, 60],
    ganador: false
},
{
    nombre: 'Bob',
    etapas: [90, 50, 40],
    ganador: false
}]

let concurso = {
    participante:  participantes,
    encontrarGanador: function (a, b) {
        let contA = 0
        let contB = 0
        for(i=0; i < a.etapas.length; i++ ){
            if(a.etapas[i] > b.etapas[i]){
                contA++
            }
            else if(a.etapas[i] < b.etapas[i]){ 
                contB++
            }
        }
        if (contA > contB){
            a.ganador = true
            return `Ganador ${a.nombre}`
        }
        else if (contA < contB){
            b.ganador = true
            return `Ganador ${b.nombre}`
        }
        else{
            return `No hubo ganador`
        }
    }
}

console.log(concurso.encontrarGanador(participantes[0], participantes[1]));
console.log(participantes);

// digitalHouse()
// Creá la función digitalHouse() que recibirá 2 números como parámetros. La función deberá imprimir por pantalla los números del 1 al 100, pero teniendo en cuenta los siguientes criterios:
//     ● Si el número a imprimir es múltiplo del primer parámetro que se ingresó, deberá mostrar el string "Digital" en lugar del número.
//     ● Si el número a imprimir es múltiplo del segundo parámetro ingresado, deberá mostrar el string "House" en su lugar del número.
//     ● Si el número a imprimir es múltiplo de ambos parámetros, deberá mostrar el string "Digital House" en lugar del número. */

const digitalHouse = (num1, num2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 === 0 && i % num2 === 0) {
            console.log('Digital House')
        } else if (i % num1 === 0) {
            console.log('Digital')
        } else if (i % num2 === 0) {
            console.log('House')
        } else {
            console.log(i)
        }
    }
}
digitalHouse(2, 3)


/* sumArray()... Reloaded
Vamos a retomar el ejercicio sumArray() que hicimos en la clase de arrays, pero esta vez lo modificaremos para que pueda recibir un array de números de cualquier cantidad de elementos.
Si no recordás el enunciado original: deberás crear una función sumaArray que acepte un arreglo de números y devuelva la suma de todos ellos.
Ejemplo:
    ● sumArray([1,2,3]) // 6
    ● sumArray([10, 3, 10, 4]) // 27
    ● sumArray([-5,100]) // 95
Ya que estamos retocando funciones, hagamos lo propio con la función del ejercicio simulación join(). Deberás modificar la función join() de manera que pueda recibir un array de strings de cualquier cantidad de elementos.
Importante: no podés usar el método Array.join() original.
Por ejemplo:
join(["h","o","l","a"]) debe retornar el string "hola".
join(["c","h","a,"u"]) debe retornar el string "chau". */

const sumaArray = array => {
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}
console.log(sumaArray([1, 2, 3]))
