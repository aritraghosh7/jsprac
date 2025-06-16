
function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("R");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(Number1, Number2) {
//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2) {
    let result = (Number1 + Number2);
    return result   //return k baad kuch kaam nhi hoga
}

const result =addTwoNumbers(3,4)

console.log("Result: ",result);

function loginUserMessage(username) {
    if (!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(val1,val2,...num1){ //rest operator(...)
    return num1
}
console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "aritra",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
