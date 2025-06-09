const tinderUser = new Object() //singleton Object

tinderUser.id = "123abc"
tinderUser.name = "Ari"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "ari@gmail.com",
    fullname: {
        usefulname:{
            firstname:"aritra",
            lastname: "ghosh"
        }
    }
}
console.log(regularUser.fullname.usefulname.firstname);


const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}

// const obj3= {obj1,obj2}

const obj3 = Object.assign({},obj1, obj2)
console.log(obj3); // (target, source)

// Spread // 
const obj5 = {...obj1,...obj2}
console.log(obj5);


const users = [{
    id: 1,
    email: "ari@gmail.com"
},
{
    id: 3,
    email: "ari@gmail.com"
},
{
    id: 2,
    email: "aritra@gmail.com"
},
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// *** Destructuring ***

const course = {
    coursename: "kuch nhi",
    price: "999",
    courseInstructor: "Jonny Sins"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

// const navbar = ({company}) => {

// }
// navbar(company = "OYO")

// {
//     name: "Ari",
//     coursename: "kuch nhi part 2",
//     "price": "free"
// }