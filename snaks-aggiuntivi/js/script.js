/* 

Snack 2
A partire da un array di stringhe, crea un secondo array formattando le
stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const general = ['pippo', 'PLUTO', 'Paperino'];
const generalSplit = general.map((name) => {
    return name.toLowerCase().split(' ');
});
let nameCapital = generalSplit.map((word)=>{
    console.log(word)
    let wordStr= word.toString();
    //console.log(wordStr);
    let result= '';
    for (let index = 0; index < wordStr.length; index++) {
        const element = wordStr[index];
        //console.log(element)
        if (index === 0) {
            result=element.toUpperCase();
        }else{
            result+=element;
        }
        
    }console.log(result);
    return result
     //word.forEach((char)=>{
       // result += char[0].toUpperCase();
        //result += char;
        //result.push(char[0].toUpperCase());
    })
    
    //word.replace(char[0], char[0].toUpperCase());
console.log(nameCapital);



//let nameCapital = [];
//generalSplit.forEach((char, i) => {
//    console.log(char)


    //char.replace(0, char[0].toUpperCase())
    //nameCapital.push(char);
    // if (i === 0) {
    //     nameCapital.push(char[i].toUpperCase());
    //     console.log(char[i].toUpperCase())
    // } //else{
    // nameCapital.push(char[i].toLowerCase());
    // console.log(char[i].toLowerCase())
//})






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


/*
**********************************************************************************************************************

- Snak 4

Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
nome e cognome e l’indicazione se può guidare, in base all’età. 

*/