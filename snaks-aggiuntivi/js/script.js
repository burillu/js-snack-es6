/* 

Snack 2
A partire da un array di stringhe, crea un secondo array formattando le
stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

console.log('***************************************************\n JSNACK 2')

const general = ['pippo', 'PLUTO', 'Paperino'];


let generalCapital = toCapitalFirst(general);

// funzione per trasformare prima lettera in maiuscola
function toCapitalFirst(arrayName) {

    const generalSplit = arrayName.map((name) => {
        return name.toLowerCase().split(' ');
    });
    let nameCapital = generalSplit.map((word) => {
        //console.log(word)
        let wordStr = word.toString();
        //console.log(wordStr);
        let result = '';
        for (let index = 0; index < wordStr.length; index++) {
            const element = wordStr[index];
            //console.log(element)
            if (index === 0) {
                result = element.toUpperCase();
            } else {
                result += element;
            }

        }//console.log(result);
        return result

    })



    return nameCapital
}



console.log(generalCapital);



/*
**********************************************************************************************************************

- Snak 3

Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
{ nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi. */


console.log('***************************************************\n JSNACK 3')

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi'
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli'
    },
    {
        nome: 'lupo',
        famiglia: 'canidi',
        classe: 'mammiferi'
    },
    {
        nome: 'leone',
        famiglia: 'felid',
        classe: 'mammiferi'
    },
    {
        nome: 'topo',
        famiglia: 'roditori',
        classe: 'mammiferi'
    },
]


const mammiferi = animals.filter((animal)=> animal.classe==='mammiferi');
console.log(mammiferi);
/*
**********************************************************************************************************************

- Snak 4

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
nome e cognome e l’indicazione se può guidare, in base all’età. 

*/