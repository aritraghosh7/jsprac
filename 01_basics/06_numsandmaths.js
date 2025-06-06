const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3));//priority decimal k pehla ka milta hai

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ************ Maths **********
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.floor(4.2));
console.log(Math.ceil(4.2));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());//value always in between 0 to 1
console.log(Math.floor(Math.random()*10)+1);//value will be in between 0 to 9

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // value will be always greater than min for this formula






