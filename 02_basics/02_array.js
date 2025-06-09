const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros);

// console.log(marvel_heros); // Arrays k andar array aayega

// SPREAD Operation //
const all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Aritra"))
console.log(Array.from("Aritra"));

console.log(Array.from({name : "Aritra"})) // important intervieew question // []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
