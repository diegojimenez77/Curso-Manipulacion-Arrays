const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}
console.log('for', newArray);

const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray2 = [];
for (let k = 0; k < matriz2.length; k++) {
    const array2 = matriz2[k];
    for (let l = 0; l < array2.length; l++) {
        const element2 = matriz2[k][l];
        newArray2.push(element2);
    }
}
console.log('for', newArray2);
const rta = matriz2.flat();
console.log('flat', rta);
const rta2 = matriz2.flat(2);
console.log('flat nivel 2', rta2);
const rta3 = matriz2.flat(3);
console.log('flat nivel 3', rta3);