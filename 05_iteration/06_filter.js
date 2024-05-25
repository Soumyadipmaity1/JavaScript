const number =[1,2,3,4,5,6,7,8,9,10];
// const newNumber = number.filter((num) => num > 5);
// console.log(newNumber); // [6, 7, 8, 9, 10]

const newnums = number.filter( (num) => {
    return num > 5;
} )
console.log(newnums); // [6, 7, 8, 9, 10]



const newNumber = []
number.forEach((num) => {
    if(num > 5){
        newNumber.push(num);
    }
})
console.log(newNumber); // [6, 7, 8, 9, 10]



const books=[
{
    title: "JavaScript",
     publish: 2015,
        rating: 4.5
},
{
    title: "Python",
     publish: 2016,
        rating: 4.7
},
{
    title: "Java",
     publish: 2017,
        rating: 4.3
},
{
    title: "C++",
     publish: 2018,
        rating: 4.9
},
{
    title: "Ruby",
     publish: 2019,
        rating: 4.1
},
{
    title: "PHP",
     publish: 2020,
        rating: 4.2
}
]

const goodbooks = books.filter((books) => books.rating > 4.5);
const publishbooks = books.filter((books) => books.publish >= 2017 && books.rating > 4.5);

// console.log(goodbooks);
console.log(publishbooks);