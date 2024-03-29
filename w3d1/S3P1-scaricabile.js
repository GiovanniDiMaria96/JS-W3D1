/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let int1 = parseFloat(prompt("primo numero"))
let int2 = parseFloat(prompt("secondo numero"))
function crazySum (int1, int2) {
    if(int1 === int2){
        console.log((int1 + int2)*3)
    }
    else{
        console.log(int1 + int2)
    }
}

crazySum(int1, int2)
*/


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let int1 = prompt("inserisci un numero")

function boundary(int1){
    if (int1 >= 20 && int1<= 100 || int1 == 400 ){
    return true
    }
    else{
        return false
    }
}
console.log(boundary(int1))
*/


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let stringa = prompt("Inserisci una stringa")

function reverseString(stringa){

    let stringaInversa=""; 
    for (let i = stringa.length - 1; i >= 0; i--) {
        stringaInversa += stringa[i];
    }
    return stringaInversa;
}

console.log(reverseString(stringa))

*/


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let stringa = prompt("Ciao, come ti chiami?")

function upperFirst (stringa){
let stringaOutput= ""
let primalettera = true;
for (let i = 0; i<stringa.length; i++){
    if (stringa[i] !== " " && primalettera){
        stringaOutput += stringa[i].toUpperCase()
        }
        else{
            stringaOutput += stringa[i]
        }
    primalettera = stringa[i] === " "
    
}
return stringaOutput
}
console.log(upperFirst(stringa))
*/



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let n = prompt("Inserisci un numero da 1 a 10")

function giveMeRandom(n){
    let array= []
    for(let i= 0; i<n; i++){
        const random= Math.floor(Math.random()* 10)
        array.push(random)
    }   
    return array
}
console.log(giveMeRandom(n))

*/


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let l1= parseFloat(prompt("Inserisci la base del rettangolo in cm:"))
let l2= parseFloat(prompt("Inserisci l'altezza del rettangolo in cm:")) 

function area(l1, l2){
   let areaRettangolo = l1*l2
    return areaRettangolo
}
console.log(area(l1,l2))

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let input= parseFloat(prompt("Inserisci un numero"))

function crazyDiff(input){
    let differenza= Math.abs(input - 19)
    if (differenza > 19){
        differenza= differenza * 3
    }
    return differenza
}

console.log(crazyDiff(input))

*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let input = prompt("Scrivi un codice che non inizi con la parola code:")

function codify(input) {
    if (input.startsWith("code")) {
        return input
    } else {
        return "code" + input
    }
}
console.log(codify(input))

*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/*
let input = parseFloat(prompt("Inserisci un numero positivo:"))

function check3and7(input){
    if (input % 3 === 0 || input % 7 === 0){
        return true
    } else if(input < 0){
        return false
    } else{
        return false
    }
}
console.log(check3and7(input))

*/


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*

let input = prompt("Inserisci una stringa:")

function cutString(input) {
    let stringaModificata = ""
    if (input !== null || input !== NaN) {
        stringaModificata = input.slice(1, -1)
    }
    return stringaModificata
}

console.log(cutString(input))

*/
