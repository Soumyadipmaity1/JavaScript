// for loop 

for (let i = 0; i <=10; i++) {
    const element =i;
    if (element==5){
        console.log("5 is the best number");
    }
    console.log(element);
}
// nested for loop
for (let i = 0; i <=10; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <=10; j++) {
        // console.log(`i is ${i} and j is ${j}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}

let array = ["bat", "ball", "gloves", "helmet", "pads"];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}