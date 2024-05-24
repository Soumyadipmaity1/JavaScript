// syntax--->
// if (condition) {

// }

// if (condition) {

// } else {

// }

// example--->

// if (2==2){
//     console.log('2 is equal to 2');
// }

// if ("2"===2){
//     console.log('2 is equal to 2');
// }

// if (temp < 30) {
//   console.log("It is cold outside");
// } else {
//   console.log("It is hot outside");
// }

const score = 300;

if (score > 200) {
  let power = "fly";
  console.log(`your score is ${score} and your power is ${power}`);
}
// console.log(`your score is ${score} and your power is ${power}`); // power is not defined because power is block scope variable

// nested if else

if (balance < 400) {
  console.log("balance is less than 400");
} else if (balance < 500) {
  console.log("balance is less than 500");
} else {
  console.log("balance is greater than 500");
}


//course purchase example

const userloggedin = true;
const dabitcard = true;
const loggedinFromGoogle = false;
const loggedinFromEmail = true;

if(userloggedin && dabitcard &&2==3){
    console.log('you can purchase the course');
}
if(loggedinFromGoogle || loggedinFromEmail){
    console.log('you logged in');
}