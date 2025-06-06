let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);//object // interview question


let myCreatedDate = new Date(2025,0,23)
let myCreatedDatetime = new Date(2025,0,23,15,12)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDatetime.toLocaleString());

let myNew = new Date ("2025-10-23") // yyyy-mm-dd
console.log(myNew.toLocaleString());


let mysecondnew=new Date("10-23-2025") // mm-dd-yyyy
console.log(mysecondnew.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp); // milisecond value
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // convert in seconds



let newDate = new Date()
console.log(newDate);


newDate.toLocaleString('default',{
    weekday: "long",
})
