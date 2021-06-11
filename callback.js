let NumbersArray=[23,45,99];
console.log(NumbersArray);
let sqrtRootArray=NumbersArray.map(function(num){
    return Math.sqrt(num);
});
let countArray=[12,33,12];
let resultenArray=countArray.map(x=>x*5);
console.log(resultenArray);

//How to user map () for objects
let users=[
    {firstName:"Johny",lastname:"Sins"},
    {firstName:"Catherine",lastname:"madharchod"},
    {
        firstName:"Harry",lastname:"lauda"
    }
];
let getUserFullName=users.map(function(person){
    return `${person.firstName} ${person.lastname}`;
})
console.log(getUserFullName);


console.log("```````````````````````````````````````````");
// filter 
let students=[
    {firstName:"Johny",age:23,lastname:"Sins"},
    {firstName:"Catherine",age:24,lastname:"madharchod"},
    {
        firstName:"Harry",age:29,lastname:"lauda"
    }
];
let ageFilter=students.filter(students=>students.age<=25);
console.log(ageFilter);



console.log("``````````````````````````````````````");
// reduce function

var myPrice=[100,200,564];
var totalAmountToBepaid=myPrice.reduce(function(total,amount)
{
    return total+amount;
});
console.log(totalAmountToBepaid);