const fruits = ['apple', 'banana', 'orange', 'grape', 'melon'];
const vegitables = ['carrot', 'tomato', 'broccoli', 'cabbage', 'onion'];

// fruits.push(vegitables);
// console.log(fruits);
// console.log(fruits.length);

// const allFoods = fruits.concat(vegitables);
// console.log(allFoods);

const allFoods1 = [...fruits, ...vegitables];
// console.log(allFoods1);

const allFoods2 = [1,2,3,4,[4,5,6],7,[4,5]];
console.log(allFoods2);

const realFoods=allFoods2.flat(Infinity);
// console.log(realFoods);

// console.log(Array.from('Soumyadip'));
console.log(Array.from({name: 'Soumyadip'}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
