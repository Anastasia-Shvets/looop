// guess number

var myNumber = Math.round(Math.random()) * (5 - 1) + 1;
var yourNumber;

do {
    yourNumber = prompt("Угадайте число");
} while (yourNumber !== null && yourNumber != myNumber) 

if (yourNumber !== null) {
    alert('Вы выиграли')
}


var myNumber = Math.round(Math.random()) * (5 - 1) + 1, yourNumber

for (; yourNumber !== null && yourNumber != myNumber;) { 
    yourNumber = prompt("Угадайте число");
}

if (yourNumber !== null) {
    alert('Вы выиграли')
}



// multiple number

let number = +prompt('Кратному которому вывести числа?')

if (Number.isNaN(Number(number))) {
    alert('Вы ввели не число')
} else {
    typeof number === 'number' && number !== 0
}

let quantity = +prompt('Сколько чисел вывести?')

if (Number.isNaN(Number(quantity))) {
    alert('Вы ввели не число')
} else {
    typeof quantity === 'number' && quantity !== 0
}

for (let i = 1; i <= quantity; i++) { 
    console.log(number * i);
  }