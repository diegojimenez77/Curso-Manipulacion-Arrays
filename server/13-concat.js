const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = [...elements]; // IMPORTANTE split operation elimina referencias en memoria clonando el array original
for (let index = 0; index < otherElements.length; index++) {
    const element = otherElements[index];
    newArray.push(element);
}

console.log('for',newArray);

const rta = elements.concat(otherElements);
console.log('concat', rta);

//concatenar usando split operation
const rta2 = [...elements, ...otherElements];
console.log('... usando elmenentos clonados', rta2);

const rta3 = [...elements, ...'random'];
console.log('elements clonado con un string de elementos', rta3);

//en el siguiente ejemplo mutaremos el array original
elements.push(...otherElements);
console.log('elements mutado', elements);
