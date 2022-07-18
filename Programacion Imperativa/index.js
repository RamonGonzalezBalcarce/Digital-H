// Grupo 1 -
// Agustina Mastricola - Malena Grande - Esteban Cequeira - Lucas Diaz - Federico Baigorria

/**
 * Crear una función que imprima todos
 * los dígitos decimales, del 0 al 9,
 * usando un ciclo For.
 */

function mostrarDecimales() {
  for (let i = 0; i <= 9; i++) {
    console.log(i);
  }
}

// invoca tu funcion aqui
mostrarDecimales();

function mostrarDecimales() {
  for (let i = 5; i <= 25; i += 3) {
    console.log(i);
  }
}

// invoca tu funcion aqui
mostrarDecimales();

function sumatoria() {
  let acc = 0;
  for (let i = 0; i <= 100; i++) {
    acc += i;
    //console.log(i)
  }
  return acc;
}

// invoca tu funcion aqui
console.log(sumatoria());

/**
 * Crear una función que reciba un
 * string y luego imprimir la
 *  cantidad de vocales que se
 *  encuentran en dicha frase.
 */

const vocal = (cadena) => {
  let cont = 0;
  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena[i] === "a" ||
      cadena[i] === "e" ||
      cadena[i] === "i" ||
      cadena[i] === "o" ||
      cadena[i] === "u"
    ) {
      cont++;
    }
  }

  return cont;
};

console.log(vocal("esta es una prueba"));

/**
 * Realizar una función que, dada
 *  una lista, devuelva una nueva lista
 *  cuyo contenido sea igual a la
 *  original pero invertida.
 */

const invertir = (cadena) => {
  let cadenaInvertida = [];
  for (let i = cadena.length - 1; i >= 0; i--) {
    cadenaInvertida.push(cadena[i]);
  }

  return cadenaInvertida;
};

console.log(invertir("perro"));

/**
 * Realiza una función que escriba
 *  una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666
…….
 */

const piramide = () => {
  let piso;
  for (let i = 1; i <= 6; i++) {
    piso = "";
    for (let j = 0; j < i; j++) {
      piso += i;
    }
    console.log(piso);
  }
};

piramide();
