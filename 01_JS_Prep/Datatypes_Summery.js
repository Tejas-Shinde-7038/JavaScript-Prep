//Primitive
// 1)Number
// 2)String
// 3)Boolean
// 4)undefined
// 5)null
// 6)BigInt
// 7)Symbol  //use to make a value unique



//Non-Primitive
// 1)Array
// 2)Object
// 3)Funtions 





// JavaScript is a dynamically typed language.
// This means that:
// Type checking occurs at runtime:
// The data type of a variable is determined when the code is executed, not during compilation.
// Variables can hold values of different types:
// You can assign a number to a variable, then later reassign a string or an object to the same variable without explicit type declarations.
// Flexibility in development:
// This allows for quicker prototyping and less rigid code structure compared to statically typed languages.



const id = Symbol('123')
const anotherId = Symbol('123')        //They both are different value only look same 
console.log(id===anotherId);


let arr = ['Tejas','Kaustubh','Sid']    //Array

let myObj = {                           //Object
    name:'Tejas',
    City:'Pune'
}
console.log(myObj);


const fun =()=>{                        //Function with Arrow Function
    console.log("Tejas");
    
}