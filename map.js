//jodi cai akta array er man gulo double kore dekaite
const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(num){
//     return num*2
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);
//loop nisi
// element diye function ke call korsi 
//result ekta array er modde push korsi
const output = numbers.map(x => x * 2);
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares);