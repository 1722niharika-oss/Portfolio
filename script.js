//data types

// Primitive

// 7 types - String , number, boolean , null , bigint,  undefines , sumbol

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 2343233453n

//non primitive

//arrays , functions , objects

const heros = ["shaktiman ", "nagraj" , "doga"]
let myObj = {
  name: "hitesh",
  age: 23,
}

const myFunction = function(){
  console.log("hello world");
}

console.log(typeof outsideTemp)

//************ 


//memory - stack(primitive) and heap(non-primitive)

let myYoutubename = "niharikaJain"
let anothername = myYoutubename

anothername = "Nishu"
console.log(anothername);

let userOne ={
  email: "user@google.com",
  upi: "user@bl"
}
 
let userTwo = userOne

userTwo.email = "nishu@google.com"


console.log(userOne.email);
console.log(userTwo.email);


//strings

const gamename = new String('Jaadu')

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.indexOf('d'));

const newString = gamename.substring(0,3) 
console.log(newString);

const anotherString = gamename.slice(-8,4)
console.log(anotherString);

const newStringOne = '    nishu  '
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11&t=1024s"

console.log(url.replace('%20', '_'))

console.log(url.includes('sundar'))

console.log(gamename.split('_'));

//number and maths in javascript

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 34.83
console.log(otherNumber.toPrecision(2));

//maths

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4,6));
// console.log(Math.ceil(3.6));
// console.log(Math.floor(4.6));
// console.log(Math.min(2,3,4,5));
// console.log(Math.max(5,4,7,8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() *(max - min +1)) +min)

