// Single line arrow function
console.log(`Step 1 ==> With no args and no return value using arrow function`);
 let arrowFun = () =>  console.log(`Good Morning, Today is Wednesday`);

arrowFun();

console.log(`======================================`);
console.log(`Step 2 ==> With 3 args & no return value using arrow function`);

let multi = (n1,n2,n3=1)=>{
let result = n1*n2*n3;
console.log(`The Multiplication of ${n1},${n2} & ${n3} is : ${result}`);

}
multi(5,5,2);
multi(10,4);

console.log(`======================================`);
console.log(`Step 3 ==> With 5 args & return value using arrow function`);

let addition = (a1,a2,a3,a4,a5)=>{
 let result = a1+a2+a3+a4+a5;
 return result;
}
let result = addition(100,100,200,349,756);
let result1 = addition("I am ","learning ","ES6 ","features ","in depth");
console.log(`The addition of 5 no's is : ${result}`);
console.log(`The addition of 5 words is : ${result1}`);