//la lista de clientes.
let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

let banco = {

  clientes: arrayCuentas,

  consultarCliente:  function(nombre){

    for(let i=0; i<arrayCuentas.length; i++){
      if(arrayCuentas[i].titularCuenta == nombre){
        return arrayCuentas[i]
      }
    }
  },

  deposito: function(cliente,monto){
    for(let i=0; i<arrayCuentas.length; i++){
      if(arrayCuentas[i].titularCuenta == cliente){
        arrayCuentas[i].saldoEnPesos += monto
        console.log("Deposito realizado su nuevo saldo es :"+arrayCuentas[i].saldoEnPesos)
      }
    }
  },
  
  extraccion: function(cliente,monto){
    for(let i=0; i<arrayCuentas.length; i++){
      if(arrayCuentas[i].titularCuenta == cliente){
        
        if((arrayCuentas[i].saldoEnPesos-monto)<0){
          console.log("fondos insuficientes")
          return 
        }else{
          arrayCuentas[i].saldoEnPesos -= monto
          console.log("Extracción realizada correctamente su nuevo saldo es "+arrayCuentas[i].saldoEnPesos)
        }

      }
    }
  }, 

  //Para mejorar
  buscarCliente: function(){

  }

}

//console.log(banco)
//let clienteEncontrado = banco.consultarCliente("Ansel Ardley")
//console.log(clienteEncontrado)

//let depositoPesos = banco.deposito("Ansel Ardley",15000)
//let extraccionPesos = banco.extraccion("Ansel Ardley",15000)

//EXTRASSSS

let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ]


propiedadUnica(array, “edad”) debe retornar [ { edad: 27 }, { edad: 49 } ]



