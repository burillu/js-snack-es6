

//Snack 1

console.log('***********************************************************************************/n Snack 1')

const tableVip = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//ciclo su ogni nome e lo aggiungo all'array segnaposto

const placeholderList = [];
tableVip.forEach((name, index) => {
    const newGuest = {
        TableName: 'V.I.P.',
        guestName: name,
        place: index + 1
    }
    placeholderList.push(newGuest);
})
console.log(placeholderList);

/******************************************************************************** */

//Snack 2


/* 
Id  Name                Grades
213 Marco della Rovere      78
110 Paola Cortellessa       96
250 Andrea Mantegna         48
145 Gaia Borromini          74
196 Luigi Grimaldello       68
102 Piero della Francesca   50
120 Francesca da Polenta    84

*/
console.log('***********************************************************************************/n Snack 2')

const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
]

const nameUpperCase = [];
students.forEach((student) => {
    nameUpperCase.push(student.name.toUpperCase())
})
console.log(nameUpperCase);


const grades70 = students.filter((stud) => stud.grades > 70);

const studentGrades70id120 = students.filter((stud) => (stud.grades > 70 && stud.id > 120));


console.log(students);
console.log(grades70);
console.log(studentGrades70id120);



/******************************************************************************** */

//Snack 3

console.log('***********************************************************************************/n Snack 3')

const bikes = [];
while (bikes.length < 10) {
    const bike = { name: '', weight: '' };
    bike.name = 'Atala'+ getRndInteger(1,8).toString();
    bike.weight = getRndInteger(10, 25);
    bikes.push(bike);
}
const lighterBike= [];

bikes.forEach((bike, index)=>{
    const bikesConf = [...bike]

})






console.log(bikes);