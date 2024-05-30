function setUsername(username){
    this.username = username;
    console.log("called");
}
function createUser(username, email, password){
    // setUsername(username)
    // setUsername.call(username);
    setUsername.call(this, username);
    this.email = email,
    this.password = password
}

const hello = new createUser("Soumyadip", "soumyadip@google.com", "1234"); 
console.log(hello);