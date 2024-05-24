const userEmail = "example@gmail.com"

if (userEmail) {
    console.log("user email is present");
    }
    else{
        console.log("user email is not present");
    }


    // Falsey values in JavaScript:

    // false 
    // 0
    // -0
    // ''
    // null
    // undefined
    // NaN
    // BigInt(0)

    // Truthy values in JavaScript:
    
    // true
    // 1
    // -1
    // '0'
    // 'false'
    // []
    // {}
    // function() {}


    if (userEmail.length ===0){
        console.log("user email is not present");
    }


    // Nullish coalescing operator (??): It is used to assign a default value to a variable if the variable is null or undefined.
    let val1;
    val1= 5??10;
    console.log(val1);
    val1= 0??10;
    console.log(val1);
    val1= null??10;
    console.log(val1);
    val1= undefined??10;
    console.log(val1);



    //Ternary Opeartor

    // condition ? expression1 : expression2

    const age = 20;
    const ageGroup = age < 18 ? "child" : "adult";
    console.log(ageGroup);