//Calcula y agrega una nueva propiedad a un array
// Tienes un array de productos con los siguientes atributos:

// name
// price
// stock
// Debes agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base.

// Por ejemplo si aplicamos el 19% de impuestos para un producto con precio de $1000 el resultado de los "taxes" será $190, debes tener en cuenta que como resultado se debe dejar un valor entero sin decimales.

// La solución debería tener un input y output como los siguientes:

 const solution2 = ([
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
  ]);

const newArray = solution2.map(item => item + 'taxes');
console.log(newArray);
console.log(solution2);


function solution(array) {
    return array.map(item => ({ ...item, 'taxes': Math.trunc( item.price * .19 ) }))
}; 
solution(solution2);
