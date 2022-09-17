const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);

const data = [
    {
        name:"Nicolas",
        level:"low",
    },
    {
        name:"Andrea",
        level:"medium",
    },
    {
        name:"Zulema",
        level:"high",
    },
    {
        name:"Santiago",
        level:"low",
    },
    {
        name:"Valentina",
        level:"medium",
    },
    {
        name:"Lucia",
        level:"high",
    },
]

// aqui lo que le estoy diciendo es creame un array solo con los niveles de cada jugador
const nuevo = data.map(item => item.level);
console.log(nuevo);

// aqui lo que le estoy pidiendo es del array nuevo reducene a los elementos repetidos comparandolos y sumandolos
const final = nuevo.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(final);

// imprime el siguiente resultado
// notar que al correr el metodo map me crea un arreglo con los elementos soliciatdos
// al correr reduce me crea un objeto {}

// [ 'low', 'medium', 'high', 'low', 'medium', 'high' ]
// { low: 2, medium: 2, high: 2 }

//Challenge

const intervalos = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]
const filt = intervalos.filter(item => item <=5);
const filt2 = intervalos.filter(item => item >5 && item <= 8);
const filt3 = intervalos.filter(item => item >8 && item<=10);

console.log(filt);
console.log(filt2);
console.log(filt3);

const final3 = filt.reduce((sum,item) => sum+1, 0)
console.log(final3);
const final4 = filt2.reduce((sum,item) => sum+1, 0)
console.log(final4);
const final5 = filt3.reduce((sum,item) => sum+1, 0)
console.log(final5);

const final2 = filt.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(final2);

const final6 = intervalos.reduce((obj, item) => {
    if(obj[item]<=5) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(final6);

//respuesta de la clase
// primero crea un arreglo de 10 numeros random de 0 a 10
// liego reduce ese arreglo contando los numeros que caen dentro de 3 rangos.

const list = [];

for (let index = 0; index < 10; index++) {
   list.push(Math.floor(Math.random()*11));
}

const rst = list.reduce((obj, value) => {
    if (value < 5) obj["1-4"] += 1;
    else if (value < 9) obj["5-8"] +=1;
    else obj["9-10"] += 1;

    return obj
}, {
    "1-4": 0,
    "5-8": 0,
    "9-10": 0,
});
console.log(list);
console.log(rst);