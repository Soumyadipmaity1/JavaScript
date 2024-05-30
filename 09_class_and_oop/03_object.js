function multiply(num){
    return num * 2;
}

multiply.power = 2;

console.log(multiply(3)); // 6
console.log(multiply.power); // 2
console.log(multiply.prototype);

function CreateUser(Username, score) {
    this.Username = Username;
    this.score = score++;
    
}

CreateUser.prototype.increment= function(){
    this.score++;
}
CreateUser.prototype.printMe= function(){
    console.log(`score is ${this.score}`);
}
const chai = new CreateUser("Soumyadip", 10);

chai.printMe()