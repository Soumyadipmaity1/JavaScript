
/*

Memory:

- stack => primitive data types 
- heap => reference/nonpremitive data types

Defination of stack memory: 
- Stack memory is used to store the values of the primitive data types.
- It copies the value of the variable and stores it in the stack memory.
- It is a temporary memory that is used to store the values of the variables.

Defination of heap memory: 
- Heap memory is used to store the reference data types.
- It stores the reference of the variable in the heap memory.
- It is a permanent memory that is used to store the reference of the variables.



*/

//stack memory do not change the original value just give the copy and then change it

let myName = "Soumyadip Maity"
let myFavFood = myName;
myFavFood = "Biriyani"

console.log(myName); // Soumyadip Maity
console.log(myFavFood); // Biriyani

// heap memory just give the reference so it will change the both values.

let userOne = {
    name: "John",
    age: 30
}

let userTwo = userOne;
userTwo.name = "Soumyadip";
userTwo.age = 20;

console.log(userOne.name); // Jane
console.log(userTwo.name); // Jane
console.log(userOne.age); // 20
console.log(userTwo.age); // 20
