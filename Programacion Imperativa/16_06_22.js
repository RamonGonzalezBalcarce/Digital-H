
// Obtener en un nuevo array las edades menores a 18.
// Obtener en un nuevo array las edades mayor o igual a 18.
// Obtener en un nuevo array las edades igual a 18.

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
const menores = []
const adultos = []
const adultos2 = []


const mayoriaEdad = listaEdades =>{

    for (let index = 0; index < listaEdades.length; index++) {
        if (listaEdades[index] > 18){
            adultos.push(listaEdades[index])
        }
        else if (listaEdades[index] < 18){
            menores.push(listaEdades[index])
        }
        else if (listaEdades[index] == 18){
            adultos2.push(listaEdades[index])
        }
    }
}
// Obtener el menor.
// Obtener el menor.
let obtenerMenor = ( arr )=>{

    let elMenor = arr[0]
    for (let i = 1; i < arr.length; i++) {
        
        if( arr[i] < elMenor){
            elMenor = arr[i]
        }
        
    }

    return elMenor
}
console.log( obtenerMenor(edades) )
// Obtener el mayor. 
// Obtener el promedio de edades.
// Incrementar en 1 todas las edades
let edadesMayores = mayoriaEdad(edades)
console.log(adultos)
console.log(menores)
console.log(adultos2)


let promedio = x => {
    total = 0;
    for (let index = 0; index < x.length; index++) {
        total += x[index];
    }
    return total / x.length;

}
console.log(promedio(edades))

let incrementar = x => {
    for (let index = 0; index < x.length; index++) {
        x[index] += 1;
    }
    return x;
}

const arrayCuentas =
[
    {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente"
    },
    {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo"
    },
    {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo"
},
{
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente"
}
]

// Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
// Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
// Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
// Obtener la cuenta con el titular de la misma más joven.
// Obtener un nuevo array por cada tipo de cuenta.
// Obtener un nuevo array con las cuentas habilitadas.
// Obtener un nuevo array con las cuentas deshabilitadas.
// Obtener la cuenta con el menor saldo.
// Obtener la cuenta con el mayor saldo.

let edadCuentaMenor= []
let edadCuentaMayor= []
let edadCuentaIgual= []

const edadesCuentas = x =>{

    for (let index = 0; index < x.length; index++) {
        if (x[index].edadTitular > 30){
            edadCuentaMayor.push(x[index])
        }
        else if (x[index].edadTitular < 30){
            edadCuentaMenor.push(x[index])
        }
        else if (x[index].edadTitular == 30){
            edadCuentaIgual.push(x[index])
        }
    }
}

edadesCuentas(arrayCuentas)


let obtenerMenor2 = ( arr )=>{

    let elMenor = arr[0]
    for (let i = 1; i < arr.length; i++) {
        
        if( arr[i].edadTitular < elMenor.edadTitular){
            elMenor = arr[i]
        }
        
    }

    return elMenor
}

console.log(obtenerMenor2(arrayCuentas));

// Obtener un nuevo array por cada tipo de cuenta (corriente, sueldo, etc). en Array de cuentas.
let cuentasPorTipo = []
let cuentasPorTipo2 = []
let cuentasPorTipo3 = []
let tipoCuenta = () =>{
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].tipoCuenta == "corriente"){
            cuentasPorTipo.push(arrayCuentas[index])
        }
        else if (arrayCuentas[index].tipoCuenta == "sueldo"){
            cuentasPorTipo2.push(arrayCuentas[index])
        }
        else if (arrayCuentas[index].tipoCuenta == "ahorros"){
            cuentasPorTipo3.push(arrayCuentas[index])
        }
    }
}
tipoCuenta(arrayCuentas)
console.log(cuentasPorTipo)

// #Obtener un nuevo array con las cuentas habilitadas. Obtener un nuevo array con las cuentas deshabilitadas. arraycuentas.
let cuentasHabilitadas = []
let cuentasDeshabilitadas = []
let cuentasHabilitadas2 = () =>{
    for (let index = 0; index < arrayCuentas.length; index++) {
        if (arrayCuentas[index].estaHabilitada == true){
            cuentasHabilitadas.push(arrayCuentas[index])
        }
        else if (arrayCuentas[index].estaHabilitada == false){
            cuentasDeshabilitadas.push(arrayCuentas[index])
        }
    }
}
cuentasHabilitadas2(arrayCuentas)
console.log(cuentasHabilitadas)

// #  Obtener la cuenta con el menor saldo. ArrayCuentas.
let cuentaMenorSaldo = []
let menorSaldo = x =>{
    let elMenor = x[0]
    for (let i = 1; i < x.length; i++) {
        if( x[i].saldo < elMenor.saldo){
            elMenor = x[i]
        }
    }
    return elMenor
}
console.log(menorSaldo(arrayCuentas))

// Obtener la cuenta con el mayor saldo. ArrayCuentas.
let cuentaMayorSaldo = []
let mayorSaldo = x =>{
    let elMayor = x[0]
    for (let i = 1; i < x.length; i++) {
        if( x[i].saldo > elMayor.saldo){
            elMayor = x[i]
        }
    }
    return elMayor
}
console.log(mayorSaldo(arrayCuentas))












