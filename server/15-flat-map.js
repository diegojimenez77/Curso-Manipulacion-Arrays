const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]
//como crear un array unicamente con los atributos del objeto con .map
const rta = users.map(item => item.attributes);
console.log('.map', rta);

//una vez creado el array aplanarlo a un solo arreglo con .flat()
const rta2 = users.map(item => item.attributes).flat();
console.log('.map.flat', rta2);

//Mismo preceos usando unicamente .flatMap
const rta3 = users.flatMap(item => item.attributes);
console.log('.flatmap', rta3);


const calendars = {
    primaryCalendar:[
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15,30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
    ],
    secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
}

//crear un array solo con las fechas de inicio
const rta4 = calendars.primaryCalendar.map(item => item.startDate);
console.log(rta4);
const rta5 = calendars.secondaryCalendar.map(item => item.startDate);
console.log(rta5);

const rta6 = Object.keys(calendars);
console.log(rta6);

//Object.values convierte un objet a un array o en este caso un array de arrays
//flat map tiene la restriccion de aplanar solo hasta un nivel
const rta7 = Object.values(calendars).flatMap(item => {
  return item.map(date => date.startDate);
  });
console.log(rta7);