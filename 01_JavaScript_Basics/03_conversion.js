let score = "100424aadfds";
let score1 = null;
let score2 = undefined;
let score3 = 0;
let score4 = true;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN
console.log(Number(score1)); //0
console.log(Number(score2)); // NaN
console.log(Number(score3)); ///0 
console.log(Number(score4));      //1
console.log(String(score1));  //null
console.log(String(score2));  //undefined
console.log(String(score3));  //0
console.log(String(score4));  //true