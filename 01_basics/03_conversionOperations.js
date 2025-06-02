let score = "Aritra"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber); 

// ------- NOTES-------
// "33" => 33 //easily converted
// "33abc" => NaN // easily not converted // But the type of NaN is also a Number
//true =>1 ; false => 0
// undefined => NaN

let isLoggedIn = "aritra"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// --------NOTES-------

// 1 => true; 0 => false
// "" => false
// "name" => true

let someNumber = 33
let stringNumber = String (someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) // return string although it's looks like number



// ***********Operations ***********

let value = 3
let negValue = -value
console.log(negValue);


let str1 = "hello"
let str2 = " world"
let str3 = str1 + str2
console.log (str3)

console.log ("1" + 2);//12
console.log (1 + "2");//12
console.log ("1" + 2 +2);//122
console.log (1+2+"2");//32
console.log ((3+4)*5%3);

console.log(+true);//1
// console.log(true+);//Error
console.log(+"");//0


let num1 , num2 , num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);//101


