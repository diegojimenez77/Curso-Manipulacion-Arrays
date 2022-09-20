// join une elementos dentro de un array

const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for', rtaFinal);

const rta2 = elements.join('--')
console.log('join', rta2);

//Split separa un array en elementos dolo hay que definir el elemento separador en este caso es un espacio ' '
const title = 'Curso de manipulacion de Arrays';
const rta3 = title.split(' ');
console.log('split', rta3);

const rta4 = rta3.join('-');
console.log(rta4);