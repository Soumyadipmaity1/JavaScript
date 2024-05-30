const user ={
    name:"Soumyadip",
    loginCount: 10,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got user details");
console.log(`Username: ${this.name}`);
    }
}
console.log(user.name);
console.log(user.getUserDetails());

const promse1 = new Promise()
const date = new Date();

function  user(name, loginCount, signedIn){
    this.name = name;
    this.loginCount = loginCount;
    this.signedIn = signedIn;
    // this.getUserDetails = function(){
    //     console.log(`Username: ${this.name}`);
    // }
    return this
}
const user1 = user("Soumyadip", 10, true);
const user2 = user("Maity", 10, true);
console.log(user1.constructor);

// console.log(user1);


