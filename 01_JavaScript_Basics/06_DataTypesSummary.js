
let Id = Symbol("1234");
let anotherId = Symbol("1234");

console.log(Id === anotherId); //false
console.log(typeof anotherId);  //symbol


// ReferenceType/Non-premitive:

// Array , objectt, function

let arr = [1,2,3,4,5];
let obj = {
    name: "John", 
    age: 30
};
let myFunction = function(){
    console.log("Hello");
}

console.log(typeof arr); // object
console.log(typeof obj); // object
console.log(typeof myFunction); // function