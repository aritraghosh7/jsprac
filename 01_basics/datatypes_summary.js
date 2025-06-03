// ### Primitive Datatypes ### --> they all are call by value bcz hum log jab value copy karte hai then original value ka reference diya nhi jta uska copy diya jta hai & changes happen on the copy

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// JavaScript is a dynamically typed language. This means that the type of a variable is checked during runtime, not during compile time.


const score = 100
const scoreValue = 100.3

const isLoggedIn=false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol ('123')
const anotherId = Symbol('123')
console.log(id=== anotherId);//false

const bigNumber = 1234444465565657789n

// ### Non-Premitive Datatypes (Reference type) ###

// Arrays, Objects, Functions

const heros = ["hanuman", "shaktiman", "ironman", "batman"]


let myObj ={
    name:"aritra",
    age: 18,
}

const myFunction= function(){
    console.log("Hello World");
}
console.log(typeof myFunction);//function
console.log(typeof heros);//object

