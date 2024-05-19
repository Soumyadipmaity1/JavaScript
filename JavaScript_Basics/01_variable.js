const accountId = 12345;
let balance = 1000;   // prefer to use let instead of var for block scope and function scope.
var firstName = 'John';
lastname = 'Doe';
let accountState;

// accountId=1342; not allowed

balance = 2000;
firstName= 'Soumyadip';
lastname = 'Maity';

console.log(accountId);
console.log(balance);
console.log(firstName);
console.log(lastname);

console.table([accountId, balance, firstName, lastname, accountState]);