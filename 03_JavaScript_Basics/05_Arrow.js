const user = {
    username:"Soumyadip",
    price : 100,

    welcomeMessage: function(){
        console.log(`Welcome to the website ${this.username}`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="Dip";
// user.welcomeMessage();

console.log(this);

function chai(){
    let username = "Soumyadip";
    console.log(this.username);
}
// chai();

// const chai  = () => {
//     let username = "Soumyadip";
//     console.log(this.username);
// }

// chai();

// const addTwo = (num1, num2) => {                 //explicit return
//     return num1 + num2;                     
// }
 
// console.log(addTwo(2,3));

// const addTwo = (num1, num2) => num1 + num2;
// const addTwo = (num1, num2) => (num1 + num2); //implicit return

const result=(num1, num2) => ({result: "soumyadip"}); //returning object

console.log(result(2,3));

