// el metodo every al contrario del metodo some, valida que todos los elementos del arreglo cumplan con la condicion, si un elemento no cumple la condicion da false.
const numbers = [1, 30, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if ( element >= 40) {
        rta = false
    }
}
console.log('for', rta);
const rta2 = numbers.every(item => item <= 49);
console.log('every', rta2);

// reto, todos beben ser menores de 15 anios

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];

const rta3 = team.every(item => item.age < 15);
console.log('todos son menores de 15?', rta3);
