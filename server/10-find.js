// find devuelve el objeto que cumple con la condicion y el primero que encuentre.
// si no encuentra el valor, regresa undefined\

const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 30) {
        rta = element;
        break;
    }
}
console.log('for', rta);
const rta2 = numbers.find(item => item === 30);
console.log('find', rta2);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Papas",
      price: 34,
      id: '🍟'
    },
    {
      name: "Manzana",
      price: 355,
      id: '🍎'
    },
  ];

  const rta3 = products.find(item => item.id === '🍔');
  console.log('find', rta3);

  //findIndex encuantra la posicion del elemento o item dentro del objeto, si no encuentra el elemento devuelve un -1
  const rta4 = products.findIndex(item => item.id === '🍔');
  console.log('findIndex', rta4);

  