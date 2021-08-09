const readline = require(`readline`);

console.log(`Hello, world`);

const firstName = `Christopher`;

let age = 25;

// console.log(firstName, age);

let isCool = true;

// console.log(isCool);

isCool = false; 
// console.log(isCool);

let height 

// console.log(height);

let x = 4; 
let y = 10;
let z = 10 + 4;
let sum = x + y;

console.log(x,y,z, sum);

let str = `String`;
let str2 = `String`;
let str3 = String;

console.log(str, str2, str3)

const lastName = ` Vazquez`;
const chris = `${firstName} ${lastName}`;

console.log(chris);

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question(`Howdy, what's your name?`, function(answer) {
    console.log(`hi ${answer}`);
});
