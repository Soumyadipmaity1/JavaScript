
let MyDates = new Date();
console.log(MyDates);
console.log(typeof MyDates); // object
console.log(MyDates.__proto__); // {}

console.log(MyDates.toString()); // Tue May 21 2024 06:20:41 GMT+0000 (Coordinated Universal Time)
console.log(MyDates.toDateString()); // Tue May 21 2024
console.log(MyDates.toLocaleDateString()); // 5/21/2024 
console.log(MyDates.toLocaleString()); // 5/21/2024, 11:50:41 AM
console.log(MyDates.toTimeString()); // 06:20:41 GMT+0000 (Coordinated Universal Time)
console.log(MyDates.toISOString()); // 2024-05-21T06:20:41.000Z


let myCreateDate = new Date(2024, 5, 24);
console.log(myCreateDate); // 2024-06-23T18:30:00.000Z
console.log(myCreateDate.toDateString()); // Mon Jun 24 2024

let myCreateDates = new Date(2024, 5, 24 , 5, 3);
console.log(myCreateDates); //2024-06-24T05:03:00.000Z
console.log(myCreateDates.toDateString());  //Mon Jun 24 2024
console.log(myCreateDates.toLocaleDateString());  //6/24/2024
console.log(myCreateDates.toLocaleString());  //6/24/2024  5:03:00 AM

let myCreateDate1 = new Date('2024-06-24');
console.log(myCreateDate1); // 2024-06-23T18:30:00.000Z
console.log(myCreateDate1.toDateString()); // Mon Jun 24 2024
console.log(myCreateDate1.toLocaleDateString()); // 6/24/2024
console.log(myCreateDate1.toLocaleString()); // 6/24/2024, 12:00:00 AM

console.log(myCreateDate1.getTime()); // 1716662400000

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1716273290136
console.log(Math.floor(Date.now()/1000)); //1716273290

let newDate= new Date();
console.log(newDate); // 2024-05-21T06:20:41.036Z
console.log(newDate.getFullYear()); // 2024
console.log(newDate.getMonth()+1); 
console.log(newDate.getDay()); 
console.log(newDate.getDate());

console.log(newDate.toLocaleString('default', {
    month: 'long',
    weekday: 'long',
    day:"numeric"

}));


