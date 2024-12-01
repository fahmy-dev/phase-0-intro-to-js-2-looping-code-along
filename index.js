// Code your solutions in this file
const name = ["Guadalupe", "Ollie", "Aki"];

function writeCards(name, word) {
    const cards = [];
    for (let i = 0; i < name.length; i++) {
        cards.push(`Thank you, ${name[i]}, for the wonderful ${word} gift!`)
    }
    return cards;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
    let i = number;
    while (number >= 0) {
        console.log(number);
        number--
        //debugger;
    }
    return number;
}

console.log(countDown(10));