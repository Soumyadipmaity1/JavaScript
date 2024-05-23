// Immediately Invoked Function Expression (IIFE)  => it will help to avoid global scope pollution

function connect (){
    console.log('Connected');
}

connect();

(function connect1 (){      //it will execute the function immediately after the function is defined

    console.log('Connected');
})();    //   SHOULD BE SEMICOLOR FOR IIFE and run the next function
(
    () =>{
        console.log('Connected');
    }
) ();

(
    (name) =>{
        console.log(`Connected ${name}`);
    }
)  ('Soumyadip');

