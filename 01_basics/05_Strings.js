const name = "aritra"
const repoCount = 50

// console.log(name + repoCount + "Value") //Outdated

console.log(`Hello my name is ${name} and my RepoCount is ${repoCount}`); // New Technique


const gameName = new String('aritraag')
console.log(gameName[0]);//a
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));


const url = "https://aritra.com/aritra%20ghosh"
console.log(url.replace('%20','--'))

console.log(url.includes('aritra'))

console.log(gameName.split('-'));
