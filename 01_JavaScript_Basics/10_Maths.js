console.log(Math);
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.SQRT2); // 1.4142135623730951
console.log(Math.abs(-10)); // 10
console.log(Math.abs(-4)); 
console.log(Math.abs(0)); // 0
console.log(Math.ceil(10.1)); // 11
console.log(Math.ceil(10.9)); // 11
console.log(Math.floor(10.5)); // 10
console.log(Math.floor(10.9)); // 10
console.log(Math.round(10.1)); // 10
console.log(Math.round(10.5)); // 11
console.log(Math.max(10,9,4,5,67,8,9,0,1,2,3,4,5,6,7,8,9,10)); // 67
console.log(Math.min(10,9,4,5,67,8,9,0,1,2,3,4,5,6,7,8,9,10)); // 0
console.log(Math.pow(2,3)); // 8
console.log(Math.sqrt(25)); // 5    
console.log(Math.cbrt(8)); // 2

console.log(Math.random());
console.log((Math.random()*10)+1); 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1))+min);