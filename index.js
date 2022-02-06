// Code your solutions in this file
const names = [];

function writeCards(names, event) {
    const newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}
// console.log(writeCards(["Michael"], "birthday")); 

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--
        debugger;
    }
}
console.log(countDown(15));