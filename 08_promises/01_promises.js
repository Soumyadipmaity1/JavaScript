// fetch ('https://api.chucknorris.io/jokes/random').then().catch().finaly()

// Making promises

const promise1 = new Promise(function (resolve, reject) {
  // do all async task
  //DB  calls , cryotography

  setTimeout(function () {
    console.log("Async task completed");
  }, 3000);
});

promise1.then(function () {
  console.log("promise consumed");
});

//2nd promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed");
    resolve();
  }, 3000);
}).then(function () {
  console.log("async 2 task completed");
});

// 3rd promise

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed");
    resolve({ username: "Soumyadip", password: "1234" });
  }, 3000);
});
promise3.then(function (user) {
  console.log(user);
});

// 4th promise

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "soumyadip", password: "1234" });
    } else {
      reject("Error occured");
    }
  }, 1000);
});

promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=> console.log("Promise completed"));


// Promise 5

const promise5 = new Promise((resolve, reject) =>{
    setTimeout(function () {
        let error = true;
        if (!error) {
          resolve({ username: "Soumya", password: "1234" });
        } else {
          reject("Error occured");
        }
      }, 1000);
})

async function fetchData(){
    try{
        const user = await promise5;
        console.log(user);
    }catch(error){
        console.log(error);
    }
}
fetchData();
// async function fetchData(){
//     const response = await promise5
//     console.log(response);
// }
