

//Snack 1

const tableVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//ciclo su ogni nome e lo aggiungo all'array segnaposto

const placeholderList = [];
tableVip.forEach((name,index)=>{
    const newGuest= { 
        TableName : 'V.I.P.',
        guestName : name,
        place : index + 1
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

const students = [
    {
        id:213,
        name:'Marco della Rovere',
        grades:78
    },
    {
        id:110,
        name:'Paola Cortellessa',
        grades:96
    },
    {
        id:250,
        name:'Andrea Mantegna',
        grades:48
    },
    {
        id:145,
        name:'Gaia Borromini',
        grades:74
    },
    {
        id:196,
        name:'Luigi Grimaldello',
        grades:68
    },
    {
        id:102,
        name:'Piero della Francesca',
        grades:50
    },
    {
        id:120,
        name:'Francesca da Polenta',
        grades:84
    },
]
