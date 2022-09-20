// como crear un nuevo array con un for
const letters = [ 'a', 'b', 'c'];
const newArray = [];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + '++');
}
console.log('original', letters);
console.log('new', newArray);

// como crear un array con el metodo map, el metodo map, mapea cada elemento de un array y lo copia a un arreglo nuevo, no modifica el arreglo original
const letters2 = [ 'a', 'b', 'c' ];
const newArray2 = letters2.map(item => item + '++');
console.log('original', letters2);
console.log('nuevo', newArray2);

// repaso de lo que se vio en la clase 5 convertir o transformar un array

// vimos como recorrer un array con un for y como crear un nuevo array con el metodo push
const arreglo = [1,2,3,4,5,6];
const nuevoArreglo = [];

for (let index = 0; index < arreglo.length; index++) {
    const element = arreglo[index];
    nuevoArreglo.push (element*2);
};
console.log(nuevoArreglo);

// tambien vimos como transfornar un array con el metodo map
const arreglo2 = [1,2,3,4,5,6];
const nuevoArreglo2 = arreglo2.map(item => item*2);
console.log(nuevoArreglo2);
