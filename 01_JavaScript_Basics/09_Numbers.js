const score = 100;
console.log(score); // 100

const balance1 = new Number(1000);
const balance2 = new Number(1000.981);

console.log(balance1); // [Number: 1000]

console.log(balance1.toString().length); // 1000
console.log(balance1.valueOf()); // 1000
console.log(balance1.toFixed(2)); // 1000.00
console.log(balance1.toPrecision(2)); // 1e+3
console.log(balance1.toExponential(2)); // 1.00e+3
console.log(balance1.toPrecision(3)); // 1000
console.log(balance1.toExponential(3)); // 1.000e+3

console.log(balance2);  //[Number: 1000.981]
console.log(balance2.toString().length); // 9
console.log(balance2.valueOf()); // 1000.981
console.log(balance2.toFixed(2)); // 1000.98
console.log(balance2.toPrecision(2)); // 1.0e+3
console.log(balance2.toExponential(2)); // 1.00e+3
console.log(balance2.toPrecision(3)); // 1000
console.log(balance2.toExponential(3)); // 1.001e+3
console.log(balance2.toPrecision(4)); // 1001

const balance3 = 10000000.981;
console.log(balance3); // 10000000.981
console.log(balance3.toString); 
console.log(balance3.toString().length); // 13
console.log(balance3.toLocaleString()); // 10,000,000.981