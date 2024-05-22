
const user1 = new Object();  // singleton object
const user2 ={}   /// 

user2.name = 'Soumyadip';
user2.age = 21;
 
// console.log(user2);


const user3 = {
    email: "soumyadipmaityjee1@gmail.com",
    fullname:{
        userfullname:{
            firstname: 'Soumyadip',
            lastname: 'Maity'
        }
    }
} 

// console.log(user3);
// console.log(user3.fullname);
// console.log(user3.fullname.userfullname);
// console.log(user3.fullname.userfullname.firstname);
// console.log(user3.fullname.userfullname.lastname);


// Objects Methods

const obj1 = {1: 'a', 2: 'b', 3: 'c'};
const obj2 = {4: 'd', 5: 'e', 6: 'f'};


const obj3 = {obj1, obj2};
// console.log(obj3);

const obj4 = Object.assign(obj1, obj2);
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);

// using spread operator 

const obj6 = {...obj1, ...obj2};
console.log(obj6);

const user =[
    {
        name: 'John',
        age: 21,
        
    },
    {
        name: 'Soumyadip',
        age: 21,
        
    },
    {
        name: 'Soumyadip',
        age: 21,
        
    },
    {
        name: 'Soumyadip',
        age: 21,
        
    }
]

console.log(user[1].name);

console.log(Object.keys(user3));
console.log(Object.values(user3));
console.log(Object.entries(user3));

console.log(user3.hasOwnProperty('email'));
