//includeInArray devuelve true o false dependiendo si encuentra o no el elemento dentro del arreglo
const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'dog'){
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);

// includes devuelve true o false si encuentra un elemento dentro de un array
const rta2 = pets.includes(item => item === 'dog');
console.log('includes', rta2);

// hay que tener cuidado dado que includes no recibe un arrow function, el siguiente es el ejemplo correcto
// tambien funciona con strings
const rta3 = pets.includes('dog');
console.log('includes', rta3);