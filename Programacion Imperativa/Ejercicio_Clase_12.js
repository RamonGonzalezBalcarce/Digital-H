const alicia = [10,80,75]
const bob = [90,20,25]

function encontrarGanador(partA, partB){
    // Inicializamos las variables
    let puntosPartA = 0
    let puntosPartB = 0
    let resultadoCertamen = []
    let ganadorEtapa =[] 
    
    // Recorremos los array  para ver quien gano cada Etapa
    for (let i=0; i < partA.length; i++){

        if (partA[i] > partB[i]){
            puntosPartA += 1
            ganadorEtapa.push(`Ganador de la Etapa ${i}: A`)
        }else if(partA[i] < partB[i]){
            puntosPartB += 1
            ganadorEtapa.push(`Ganador de la Etapa ${i}: B`)
        }else{
            console.log (`Empataron en la Etapa ${i}`)
            ganadorEtapa.push("Empataron")
        }
    }
    
    // Nos fijamos quien gano el Certamen
    if (puntosPartA > puntosPartB){
        ganadorTotal= "Ganador Certamen A"
    }else if(puntosPartA < puntosPartB){
        ganadorTotal= "Ganador Certamen B"
    }else{
        console.log("Terminaron empatados los Participantes")
    }
    
    resultadosCertamen = [ganadorTotal, ganadorEtapa]

    return resultadosCertamen
}

// Creamos el objeto Concurso
let a
let b
let Concurso = {
    etapas:[],
    ganador:"",
    buscarGanador:encontrarGanador,
    
}


let datosConcurso= Concurso.buscarGanador(alicia, bob)
//console.log(datosConcurso[0]);
Concurso.etapas = datosConcurso[1]
Concurso.ganador=datosConcurso[0]
//console.log(Concurso)

// digitalHouse()
const digitalHouse = (n1, n2) =>{
    for (let i = 1; i <= 100; i++){
        if (i%n1===0 && i%n2===0){
            console.log(i,"Digital House");
        }else if (i%n1===0){
            console.log(i,"Digital");
        }else if(i%n2===0){
            console.log(i,"House")
        }else{
            console.log(i);
        }
    }
}
//digitalHouse(4,44)

// sumArray()... Reloaded
const sumArray = lista =>{
    let acc=0
    for(let i = 0; i<lista.length; i++){
        acc=acc+lista[i]
    }
    return acc
}
let listNum=[1,2,3,4,5]
//console.log(sumArray(listNum));

const join = lista =>{
    let palabra=""
    for(let i = 0; i<lista.length; i++){
        palabra=palabra+lista[i]
    }
    return palabra
}
let listLetr=['h','o','l','a']
console.log(join(listLetr));