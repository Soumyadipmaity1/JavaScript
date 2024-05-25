const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((num) => num * 2);
// console.log(newNumbers); // [2, 4, 6, 8, 10]
const newNumbers1 = numbers.map((num) => {
  return num + 10;
});
// console.log(newNumbers1); // [2, 4, 6, 8, 10]

const newNums = numbers.map((num) => num + 10).map((num) => num * 2).filter((num) => num >25)

console.log(newNums); // [22, 24, 26, 28, 30]