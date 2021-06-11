function personDetails(){
    this.name="Marry";
    this.age=24;
    this.sayName=function()
    {
        console.log(this.age);
        function innerFunction(){
            console.log(this.age); // this line will give you undefined because in this scope this.age is not defined. If you want to get that value you will have to use the arrow function.
        }
        innerFunction();
    }
}
let personObject=new personDetails();
personObject.sayName();

function newPerson(){
    this.name="Williams";
    this.age=40;
    this.callName = function(){
        console.log(this.age);
        // here we are using arrow function so here we can access that value
        let innerFunc=()=>{
            console.log(`innerfn called : ${this.age}`);
        }
        innerFunc();
    }
}
let newPersonObject=new newPerson();
newPersonObject.callName();