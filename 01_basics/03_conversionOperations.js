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
