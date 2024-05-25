const numbers = [1, 2, 3, 4, 5];

// numbers.reduce((acc, currvalue) => acc + currvalue, 0);
console.log(numbers.reduce((acc, currvalue) => acc + currvalue, 0)); // 15`

const shoppingCard = [
    {
        product: "laptop",
        price: 1000,
        count: 3
    },
    {
        product: "desktop",
        price: 1500,
        count: 2
    },
    {
        product: "phone",
        price: 500,
        count: 4
    }
];

const total = shoppingCard.reduce((acc, currvalue) => {
    return acc + currvalue.price * currvalue.count;
},0)

console.log(total); // 8000