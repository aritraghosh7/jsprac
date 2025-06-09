// singleton
//Object.create
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aritra",
    [mySym]: "mySymbol",
    age: "20",
    location: "Kolkata",
    email: "ag@gmail.com",
    isLoggedIn:false,
    lastLoggedIn: ["Monday"," Friday"]
}

console.log(JsUser.email);// method 1
console.log(JsUser["email"]) // method 2


console.log(JsUser[mySym]);
console.log(typeof(mySym));

// value change // 
JsUser.email = "aritra@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "ghosh@gmail.com"
console.log(JsUser);

// function add //

JsUser.greeting = function(){
    console.log("Hello World");
    console.log(`Hello user ,${this.name} `);// interpolation
    
}
console.log(JsUser.greeting());

