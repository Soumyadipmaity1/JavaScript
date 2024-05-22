// Object Literals

const person = {} // Empty Object
console.log(person)

const mySymbol = Symbol("key1")

const Juser = {
    name: 'Soumyadip',
    age: 21,
    [mySymbol]: 'key123',    //important
    email: 'soumyadipmaityjee1@gmail.com',
    isLoggedin : false,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}

// console.log(Juser);
// console.log(Juser.name);
// console.log(Juser.email);
// console.log(Juser["email"]);
// console.log(Juser[mySymbol]);
// console.log(typeof Juser[mySymbol]);

// changing the value of the object

// Juser.email = '22053029@kiit.ac.in'
// console.log(Juser.email);
// Object.freeze(Juser) // This will freeze the object and we can't change the value of the object
// Juser.email = 'abcd@google.com'
// console.log(Juser.email);


Juser.greeting2 = function(){
    console.log("Hello" );
}
 
// console.log(Juser.greeting());
console.log(Juser.greeting2());
console.log(Juser.greeting2);


Juser.greeting1 = function(){
    console.log(`Hello, I am ${this.name}`  );
}

console.log(Juser.greeting1());
