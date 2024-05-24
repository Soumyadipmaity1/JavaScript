const coding = ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP"];

// coding.forEach(function (element){
//     console.log(element);
// })

// coding.forEach((element) => {
//     console.log(element);
// }
// )

// function print(element){
//     console.log(element);
// }

// coding.forEach(print);

coding.forEach((element, index, arr) => {
    console.log(element, index, arr);
});

const mycoding = [
    {
        language: "JavaScript",
        type: "interpreted"
    },
    {
        language: "Python",
        type: "interpreted"
    },
    {
        language: "Java",
        type: "compiled"

    },
    {
        language: "C++",
        type: "compiled"
    },
    {
        language: "Ruby",
        type: "interpreted"
    },
    {
        language: "PHP",
        type: "interpreted"
    },
];
mycoding.forEach((element) => {
    console.log(element.language);
})