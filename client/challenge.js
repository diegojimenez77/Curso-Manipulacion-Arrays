const array1 = [2,4,5,6];

function solution(a){
 return a.map(item => item*2);
};

console.log(solution(array1));

// si utilizamos un for, no necesariamente genera un array, solo recorre el arreglo, el metodo map so genera un arreglo nuevo.
for (let index = 0; index < array1.length; index++) {
    const element = array1[index];
    console.log(array1[index]*2);
};