// using arrow function
let exvalue=(x,y)=>x;
console.log(exvalue(2,3));

// arrow function with no arguments
greetlearners=()=>console.log("Board Infinity");

// arrow function with one arguments
let greet=value=>console.log(value);
greet("hello world");
let age =30;

// arrow function with expression
let welcome=(age<18)?()=>console.log("young"):()=>console.log("Adult");
welcome();

// arrow function with multiline
let sum=(a,b)=>{
    let result=a+b;
    return result;
}
console.log(sum(10,10));
