// let edad = 25

// if(edad > 0) {
//     if(edad < 18) {
//         console.log("No puede pasar al bar. ")
//     } else if (edad < 21){
//         console.log("Puede pasar al bar, pero no puede tomar alcohol.")
//     } else if(edad === 21){
//         console.log("Felicitaciones por tu mayoria de edad!")
//         console.log("Puede pasar al bar y tomar alcohol.")
//     } else {
//         console.log("Puede pasar al bar y tomar alcohol.")
//     }
//     console.log( edad%2 != 0 ? "Sabias que tu edad es impar?" : "")
// } else {
//     console.log("Error, edad inválida. Por favor ingrese un número válido.")
// }

let precioPorLitro = 0

const totalAPagar = (vehiculo, litrosConsumidos) => {
    switch(vehiculo){
        case "coche":
            precioPorLitro = 86
            break
        case "moto":
            precioPorLitro = 70
            break
        case "autobus":
            precioPorLitro = 55
            break
    }

    let extra = litrosConsumidos > 25 ? 25 : 50
    console.log((precioPorLitro * litrosConsumidos) + extra)
}

totalAPagar("coche", 10)

let sandwichPollo = 150
let sandwichCarne = 200
let sandwichVegano = 100

let panBlanco = 50
let panNegro = 60
let panSinGluten = 75

let queso = 20
let tomate = 15
let lechuga = 10
let cebolla = 15
let mayonesa = 5

const armarSandwich = (tipo, pan, queso, tomate, lechuga, cebolla, mayonesa) => {
    
}