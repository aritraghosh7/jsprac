var c = 300 // Global scope 
let a = 300

if (true) {
  let a = 10; //local  scope
  const b = 20;
  console.log("INNER: ", a);
  
}

 console.log(a);
// console.log(b);
// console.log(c);
