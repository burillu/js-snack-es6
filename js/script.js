



const tableVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin'];

//ciclo su ogni nome e lo aggiungo all'oggetto tavolo

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