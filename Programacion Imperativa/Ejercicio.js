// Dada una matriz, recorrer sus valores y sumar solo los números que estén por encima 
// o sean iguales a 10, pero menores que 1000.


let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */
const suma = array =>{
    
    let acc = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            
            console.log(i,j);
            
            if(array[i][j] >= 10 && array[i][j] < 1000){
                acc += array[i][j]
            }
            
        }
    
    }
    return acc

}
//console.log(suma(numeros));

let gastos3 = [
    // EMPEZAREMOS A CONTAR LOS DIAS DESDE EL DIA LUNES
    // EL MES ES FEBRERO QUE TIENE 28 DIAS
    [1135, 2500, 900, 1600, 2800, 3650, 1100], // semana 1
    [1750, 1890, 1900, 1300, 898, 1750, 2800], // semana 2
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],// semana 3
    [800, 1250, 1430, 2100, 1980, 1270, 950],  // semana 4
  ];

  
  // CALCULAR EL GASTO TOTAL DE CADA SEMANA Y MOSTRARLO EN CONSOLA
  // CREAR UN ARRAY CON EL TOTAL DE CADA SEMANA
  const gastoSemana = array =>{
    let accSem=0
    let arrayGastoSem = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            
            accSem += array[i][j]
        }
        //console.log(`Gasto de la semana ${i+1} es de ${accSem}`);
        arrayGastoSem.push(accSem)
        accSem=0
    }
    return arrayGastoSem
  }
  //console.log(gastoSemana(gastos3));
      
  // REPORTAR CUAL FUE LA SEMANA EN QUE MAS SE GASTO y DE CUANTO FUE
let gastosSemanales = gastoSemana(gastos3)

let gastoMax = gastosSemanales[0]
let semana = 0
for (let i = 1; i < gastosSemanales.length; i++) {
    
    if(gastoMax < gastosSemanales[i]){
        gastoMax= gastosSemanales[i]
        semana=i
    }
}
//console.log(`La semana que mas se gasto fue la semana ${semana} y fue de ${gastoMax}`);
  
  
// CALCULAR CUAL FUE EL DIA QUE MAS SE GASTO Y DE CUANTO FUE
// SI HAY MAS DE UN DIA CON EL MAYOR GASTO RETORNAR LA PRIMER COINCIDENCIA

const diaMasGasto = array =>{
    let diaMax = array[0][0]
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if(diaMax < array[i][j]){
                diaMax = array[i][j]
            }
        }
        
    }
    return diaMasGasto

}
let maxGasto=diaMasGasto(gastos3)
console.log(`El dia que mas se gasto fue de ${maxGasto}`);