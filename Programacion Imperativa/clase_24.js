// Si tenemos un array con objetos Persona, las personas tienen nombre, apellido, edad, estado civil.
let personas = [
        {
            nombre: 'Juan',
            apellido: 'Perez',
            edad: 20,
            estadoCivil: 'Casado'
        },
        {
            nombre: 'Pedro',
            apellido: 'Perez',
            edad: 30,
            estadoCivil: 'Soltero'
        },
        {
            nombre: 'Maria',
            apellido: 'Perez',
            edad: 40,
            estadoCivil: 'Casada'
        }
    ];


// Dado un apellido, mostrar toda la información de la persona.
const buscarPersonaPorApellido = (personas, apellido) => {
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].apellido === apellido) {
            return personas[i];
        }
    }
}
console.log(buscarPersonaPorApellido(personas, 'Perez'));
// Dada un estado civil, verificar cuantas personas hay con ese estado civil y mostrar el resultado obtenido.
const buscarPersonasPorEstadoCivil = (personas, estadoCivil) => {
    let contador = 0;
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].estadoCivil === estadoCivil) {
            contador++;
        }
    }
    return contador;
}
console.log(buscarPersonasPorEstadoCivil(personas, 'Casado'));
