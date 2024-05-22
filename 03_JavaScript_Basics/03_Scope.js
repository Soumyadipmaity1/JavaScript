let a =10;
const b=20
var c=30;

{}  // scope


if(true){
    let a = 100;
    const b = 200;    //inside the block is block scope
    var c = 300;
    console.log(a,b,c);
}