

//Snack 1

console.log('***********************************************************************************\n Snack 1')

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
console.log('***********************************************************************************\nSnack 2')

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

console.log('***********************************************************************************\nSnack 3')

const bikes = [
    { name: 'Atala10', weight: 22 },


    { name: 'Atala8', weight: 25 },


    { name: 'Atala1', weight: 14 },


    { name: 'Atala3', weight: 19 },


    { name: 'Atala11', weight: 18 },


    { name: 'Atala82', weight: 13 },


    { name: 'Atala31', weight: 11 },


    { name: 'Atala4', weight: 21 },


    { name: 'Atala47', weight: 13 },


    { name: 'Atala80', weight: 15 }
];

/* PRIMA SOLUZIONE**************************************
console.log(bikes)
const bikeWeight = [];

bikes.forEach((bike) => {
    //const bikesConf = [...bike]
    const { weight } = bike;
    bikeWeight.push(weight);
})
bikeWeight.sort((a, b) => a - b);
const lighterBike = bikes.filter((bike, index) => {
    return bike.weight === bikeWeight[0];
})
console.log(`La bici più leggera è :${lighterBike[0].name}`);*/

const ligtherBike = sortBy(bikes);

function sortBy(array, prop) {
    let bikeSample = bikes[0];
    array.forEach((bike) => {
        const {weight}= bike
        if (bikeSample.weight > weight) {
            bikeSample = bike
        }
    })
    return bikeSample
}
console.log(`La bici più leggera è : ${ligtherBike.name}, con un peso di ${ligtherBike.weight} kg.`);






//console.log(bikeWeight.sort((a, b) => a - b));

/******************************************************************************** */

//Snack 4

console.log('***********************************************************************************\n Snack 4')



const teamSerieA = [
    {
        name: 'Milan',
        points: 0,
        fouls: 0
    },
    {
        name: 'Cagliari',
        points: 0,
        fouls: 0
    },
    {
        name: 'Torino',
        points: 0,
        fouls: 0
    },
    {
        name: 'Como',
        points: 0,
        fouls: 0
    },
    {
        name: 'Sampdoria',
        points: 0,
        fouls: 0
    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0
    },
    {
        name: 'Atalanta',
        points: 0,
        fouls: 0
    },
    {
        name: 'Palermo',
        points: 0,
        fouls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0
    }

]
console.log(teamSerieA);



teamSerieA.forEach((team) => {
    team.points = getRndInteger(0, 83);
    team.fouls = getRndInteger(0, 20);
})
//console.log(teamSerieA)
const seasonResult = teamSerieA.map((team) => {
    const { name, fouls } = team;
    return `Team : ${name} , has received ${fouls} fouls`
})
console.log(seasonResult);


// // Team constructor
// class Team {
//     name;
//     points;
//     fouls;
//     constructor(name, points, fouls) {
//         this.name = name,
//             this.points = 0,
//             this.fouls = 0
//     }
// }
// const milan = new Team('milan');
// console.log(milan);
