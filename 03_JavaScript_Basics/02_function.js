function calculatePrice (num1){
    return num1;
}
 console.log(calculatePrice(10,399,342)); // 10

 function calculatePrice1 (...num1){
    return num1;
}
 console.log(calculatePrice1(10,399,342));

 function calculatePrice2 (val1,val2,...num1){
    return num1;
}
 console.log(calculatePrice2(10,399,342));

 const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
 };

 function handleObject(anyobject){
    console.log(`usernaem is ${anyobject.username} and password is ${anyobject.password}`);
 }
 handleObject(user);

 handleObject({
    username: 'saktiman',
    password: 'Alfred1960ROCKS!',
    });

    const myNewArray = [1,2,3,4,5,6,7,8,9,10];
    function returnSecondValue(getArray){
        return getArray[1];
    }
    console.log(returnSecondValue(myNewArray));
     console.log(returnSecondValue([1,2,3,4,5,6,7,8,9,10]));