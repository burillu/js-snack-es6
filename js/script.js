

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
        const { weight } = bike
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
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/653px-Logo_of_AC_Milan.svg.png'
    },
    {
        name: 'Cagliari',
        points: 0,
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/it/thumb/8/88/Cagliari_calcio.svg/1200px-Cagliari_calcio.svg.png'
    },
    {
        name: 'Torino',
        points: 0,
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/it/0/04/Torino_FC_logo.svg'
    },
    {
        name: 'Como',
        points: 0,
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Logo_Como_1907_2019.png/464px-Logo_Como_1907_2019.png'
    },
    {
        name: 'Sampdoria',
        points: 0,
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/U.C._Sampdoria_logo.svg/1200px-U.C._Sampdoria_logo.svg.png'
    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/S.S._Lazio_badge.svg/1200px-S.S._Lazio_badge.svg.png'
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRv5Z-XNJx6dRHiS62fEGaORHCH25EMBQZx8YC2PEu&s'
    },
    {
        name: 'Atalanta',
        points: 0,
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/it/thumb/8/81/Logo_Atalanta_Bergamo.svg/1200px-Logo_Atalanta_Bergamo.svg.png'
    },
    {
        name: 'Palermo',
        points: 0,
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/it/thumb/6/66/Palermo_Football_Club_logo.svg/1200px-Palermo_Football_Club_logo.svg.png'
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/SSC_Napoli.svg/1200px-SSC_Napoli.svg.png'
    }

]
//console.log(teamSerieA);



teamSerieA.forEach((team) => {
    team.points = getRndInteger(0, 83);
    team.fouls = getRndInteger(0, 20);
})
//console.log(teamSerieA)
const seasonResult = teamSerieA.map((team) => {
    const { name, fouls } = team;
    return `Team : ${name} , has received ${fouls} fouls`
})
//console.log(seasonResult);


// Cards constructor
class Card {
    title;
    text;
    image = 'https://clicktrans.it/bundles/app/images/picture-default.png';
    container;
    constructor(title, text, image, container) {
        this.title = title,
            this.text = text,
            this.image = image,
            this.container = container
    }
    printCardTeam() {
        const divCol = document.createElement('div');
        divCol.classList.add('col-12');
        divCol.classList.add('col-sm-6');
        divCol.classList.add('col-lg-4');
        let template = `
        <div class="card my-card">
        <div class="my-img-container" id="">
            <img src="${this.image}" class="card-img-top" alt="${this.image}">
        </div>
            
            <div class="card-body">
                <h5 class="card-title">${this.title} </h5>
                <p class="card-text">${this.text}</p>
            </div>
        </div>
        `;
        divCol.innerHTML = template;
        this.container.append(divCol);
    }
}

const divCards = document.getElementById('show-cards');

teamSerieA.forEach((element) => {
    const { name, fouls, image } = element;
    let msg = `Team : ${name} , has received ${fouls} fouls`
    const card = new Card(name, msg, image, divCards);
    
    

    card.printCardTeam();

})


