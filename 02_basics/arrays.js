const myArr = [0,1,2,3,4,5,6]
console.log(myArr[0]);
const myHeros = ["Hanuman" , "Shaktiman"]
const myArr2 = new Array (1,2,3,4)


// Array method 
myArr.push(10)
console.log(myArr)
myArr.pop()
console.log(myArr);
// myArr.unshift(9)//put at first
console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()
console.log(myArr);
console.log(typeof  newArr);


// Slice,Splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);

