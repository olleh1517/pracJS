//https://www.youtube.com/watch?v=W6NZfCO5SIk&list=LL&index=12&t=1s
// https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=182s
// ECMAScript--specifiction 
// JavaScrip--programming language
//editors sort - VSCode, Sublime Text, Atom
console.log("hello world");
alert('welcome practiceJs website')
//1. variables
let name = 'Mosh';
console.log(name);
//cant be reserved keyword
//shoud be meaningful
//cant start num(ex:1name)
//cnat contain spcae or hyphen

let firstName=20;
let FirstName=200;
console.log(firstName);
console.log(FirstName);

//2. constants -- cant reallocation
// const interestRate=0.3;
// interestRate = 1;
// console.log(interestRate); -- make error

//3. primitive types
let age = 30;//number
let title = 'hello';//string
let isApproved = false;//boolean
let lastName = undefined;
let selectedColor = null;

//4. dynamic typing
//typeof


//reference type : object, array, function
//5. objects
// let email = 'google'
// let grade = 2

let person = {
    name: 'gogle',
    age: 2
};

//dot notation
person.name = 'john';

//bracket notation
let selection = 'name';
person[selection] = 'mary'

console.log(person.name);

//6. arrays
// let selectedColors = [];//emtpy array
let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[1] = 1// 1 replace blue
console.log(selectedColors);
console.log(selectedColors[0]);//output 'red'

//7. function
function greet(){
    console.log('hello world');
}

greet();


function meetJon(name){
    console.log('hello '+name);
}

meetJon('jon');

// function square(number){
//     return number*number;
// }

// let number = square(2);
// console.log(number);

function square(number){
    return number*number;
}

console.log(square(1.5));//output 2.25