// 1.let and const 
const ma = 'Janu';
let myPhone = 'simphoney';
myPhone = 'vivo';
// 2. defult perameter 

//3.templeat string
const myNotes = `I am zerin of ${ma} i have no ${myPhone} `;
console.log(myNotes);
// 4.  arrow function 

const square = x => x * x;
console.log(square(9));

//5.sprade or ... dots
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}