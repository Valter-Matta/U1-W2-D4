/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const poligon = function (l1, l2) {
  area = l1 * l2
  return area
}
console.log(poligon(6, 6))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (num1, num2) {
  let somma
  let x3
  if (num1 !== num2) {
    somma = num1 + num2
    return somma
  } else if (num1 === num2) {
    x3 = (num1 + num2) * 3
    return x3
  }
  somma = num1 + num2
}
console.log(crazySum(6, 5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (num1) {
  let absolutDiff = num1 - 19
  if (num1 <= 19) {
    let absolutDiff = num1 - 19
    return absolutDiff
  } else {
    let diffX3
    diffX3 = absolutDiff * 3
    return diffX3
  }
}
console.log(crazyDiff(30))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true
  } else {
    return 'nada'
  }
}

console.log(boundary(101))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  if (str === 'EPICODE') {
    return 'EPICODE'
  } else if (str !== 'EPICODE') {
    const idEpicode = 'Epicode' + str
    return idEpicode
  }
}
console.log(epify('ciao'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (positive) {
  if (positive % 3 === 0 || positive % 7 === 0) {
    return 'il resto è 0'
  } else {
    return 'il numero indicato non è divisibile per 3 o per 7'
  }
}
console.log(check3and7(5))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('hello'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperfirst(string) {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
console.log(upperfirst('ciao io sono Valter'))

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (cut) {
  let nuova = cut.substring(1, cut.length - 1)
  return nuova
}
console.log(cutString('ciao'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
let numberArray = []

const giveMeRandom = function () {
  for (let i = 0; i < 6; i++) {
    const diceResult = Math.floor(Math.random() * 10)
    numberArray.push(diceResult)
  }
  return numberArray
}
console.log(giveMeRandom())
