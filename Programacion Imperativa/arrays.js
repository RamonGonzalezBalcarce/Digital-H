// Ejercicio 1
let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length - 1]);

let str = "un string cualquiera";
let arrayAleatorio = ["Digital", "House", true, "string", "123", "false", 54, str];
console.log(arrayAleatorio[arrayAleatorio.length - 1]);
console.log(arrayAleatorio);

// ejercicio 2
let peliculas = [ "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

const peliculasMayusculas = (peliculas) => {
for (let i = 0; i < peliculas.length; i++) {
    peliculas[i] = peliculas[i].toUpperCase();
    }
};
console.log(peliculas);
peliculasMayusculas(peliculas);
console.log(peliculas);
