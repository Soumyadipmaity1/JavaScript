  let  myName = "Soumyadip    ";
  let myName2 = "Maity";
    // console.log(myName.trim().length);

    let myHeroes = ["Ironman", "Spiderman", "Thor", "Hulk"];

    Array.prototype.soumyadip = function(){
        console.log("Hey I am Soumyadip");
    }
    myHeroes.soumyadip();

    //inheritance 

    const Teacher ={
        isAvailable: true,
    }
    const student = {
name: "Soumyadip",

}

    const TASupport = {
        makeAssignment: 'Js Assignment',
        __proto__: Teacher,
        fullTime: true,

    }

    Teacher.__proto__ = student;

    //modern syntax

    Object.setPrototypeOf(TASupport, Teacher);

    let user1 = "Soumyadip     "     ;
    String.prototype.trueLength = function(){
        console.log(`${this}`);
         console.log(`name is ${this.name}`);
         console.log(`True length is ${this.trim().length}`);
    }
    // user1.trueLength();
    "Soumyadip".trueLength();
    "Maity".trueLength();
     
