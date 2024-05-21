const myArr =[1,2,3,4,5,6,7,8,9,10];
console.log(myArr);
console.log(myArr.length);
console.log(myArr[0]);


// Array Methods


// 1. push() - Add an element at the end of the array

myArr.push(11);
console.log(myArr);

// 2. pop() - Remove an element from the end of the array

myArr.pop();
console.log(myArr);


// 3. shift() - Remove an element from the beginning of the array
 
myArr.shift();
console.log(myArr);

// 4. unshift() - Add an element at the beginning of the array

myArr.unshift(1);
console.log(myArr);

// 5. splice() - Add or remove elements from the array

myArr.splice(2,0,2.5);
console.log(myArr);

// 6. slice() - Extract a portion of the array

let myArr1 = myArr.slice(2,5);
console.log(myArr1);

// 7. concat() - Merge two or more arrays

let myArr2 = [11,12,13,14,15];
let myArr3 = myArr.concat(myArr2);
console.log(myArr3);

// 8. reverse() - Reverse the array

myArr.reverse();
console.log(myArr);

// 9. sort() - Sort the array

myArr.sort();
console.log(myArr);

// 10. indexOf() - Find the index of an element

console.log(myArr.indexOf(5));

// 11. lastIndexOf() - Find the last index of an element

console.log(myArr.lastIndexOf(5));

// 12. includes() - Check if an element exists in the array

console.log(myArr.includes(5));

// 13. join() - Join all the elements of the array

console.log(myArr.join());

// 14. toString() - Convert the array to a string

console.log(myArr.toString());

// 15. isArray() - Check if an object is an array

console.log(Array.isArray(myArr));

// 16. fill() - Fill the elements of an array

console.log(myArr.fill(0,2,5));

// 17. find() - Find the first element that satisfies the condition

console.log(myArr.find((element) => element > 5));

// 18. findIndex() - Find the index of the first element that satisfies the condition

console.log(myArr.findIndex((element) => element > 5));

// 19. filter() - Create a new array with elements that satisfy the condition

console.log(myArr.filter((element) => element > 5));

// 20. map() - Create a new array by performing a function on each element

console.log(myArr.map((element) => element * 2));


// 21. reduce() - Reduce the array to a single value

console.log(myArr.reduce((total, element) => total + element));

// 22. reduceRight() - Reduce the array from right to left

console.log(myArr.reduceRight((total, element) => total + element));

// 23. every() - Check if all elements satisfy the condition

console.log(myArr.every((element) => element > 5));

// 24. some() - Check if any element satisfies the condition

console.log(myArr.some((element) => element > 5));

// 25. forEach() - Execute a function for each element

myArr.forEach((element) => console.log(element));

// 26. entries() - Return an iterator object that contains key/value pairs

let myArr4 = myArr.entries();
console.log(myArr4.next().value);

// 27. keys() - Return an iterator object that contains keys

let myArr5 = myArr.keys();
console.log(myArr5.next().value);

// 28. values() - Return an iterator object that contains values

let myArr6 = myArr.values();
console.log(myArr6.next().value);

// 29. from() - Create an array from an object

let myArr7 = Array.from('Hello');
console.log(myArr7);

// 30. of() - Create an array from the arguments
// 31. copyWithin() - Copy elements within the array
// 32. flat() - Flatten the array
// 33. flatMap() - Flatten and map the array
// 34. lastItem() - Get the last item of the array
// 35. firstItem() - Get the first item of the array
// 36. removeDuplicates() - Remove duplicates from the array
// 37. removeFalsy() - Remove falsy values from the array
// 38. removeItems() - Remove items from the array
// 39. shuffle() - Shuffle the array
// 40. sum() - Calculate the sum of the array
// 41. average() - Calculate the average of the array
// 42. min() - Find the minimum value in the array
// 43. max() - Find the maximum value in the array
// 44. copy() - Copy the array
// 45. swap() - Swap two elements in the array
// 46. rotate() - Rotate elements in the array
// 47. move() - Move an element to a different position
// 48. partition() - Partition the array into two arrays
// 49. union() - Find the union of two arrays
// 50. intersection() - Find the intersection of two arrays
// 51. difference() - Find the difference of two arrays
// 52. symmetricDifference() - Find the symmetric difference of two arrays  
// 53. zip() - Create an array of grouped elements
// 54. unzip() - Create an array of ungrouped elements     




