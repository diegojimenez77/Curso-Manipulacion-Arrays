const totals = [1,2,3,4];

let sum = 0;

for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

// el metodo reduce, reduce el array a un solo valor
// esta funcion utiliza 2 parametros
// el primer parametro es el acumulador sum con un arrow funtion que suma cada uno de los items
// el segundo parametro es el valor con el que inicia el acumulador en este caso es 0
const rta = totals.reduce((sum,element) => sum + element, 0);
console.log(rta);

// en este caso solo hice la prueba para saber si fucionaba sustituyendo la palabra element por item
// y cambiando el valor inicial del acumulador
const rta2 = totals.reduce((sum,item) => sum + item, 10);
console.log(rta2);
console.log(totals);