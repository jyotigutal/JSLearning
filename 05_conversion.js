

// var n1 = "20";
// var n2 = 20;
// console.log(n1==n2); 

// console.log(n1, typeof n1);
// n1=+n1;
// console.log(n1, typeof n1);
console.log(`===================== Implicit Conversion ===================`);
var result;
result = '3'+ 2;
console.log(`It automatically converts the '3' string into number and then + operator concat it, result: ${result}`);

result = '3' + true;
console.log(`It automatically converts the '3' string into number and then + operator concat it, result: ${result}`);

result = '3' + undefined;
console.log(`It automatically converts the '3' string into number and then + operator concat it, result: ${result}`);

result = '3' + null;
console.log(`It automatically converts the '3' string into number and then + operator concat it, result: ${result}`);

console.log(`===================== Implicit boolean Conversion to Number ===================`);

result = '4' - true;
console.log(`It automatically converts the '4' string into number and boolean true value is 1 , result is: ${result}`);

result = '4' + true;
console.log(`It automatically converts the '4' string into number and concat with true bcoz + operator , result is: ${result}`);

result = 4 + false;
console.log(`It automatically perform the addition of '4 + 0' and result is: ${result}`);

console.log(`===================== Explicit Conversion ========================`);

console.log(`===================== Convert String to Number ===================`);

result = Number('324');
console.log(`The given string '324' is converted into number : ${result}`);

result = Number('324e-1');
console.log(`The given string '324e-1' is converted into number : ${result}`);

console.log(`===================== Convert Boolean to Number ===================`);

result = Number(true);
console.log(`The boolean type true gives :${result}`);

result = Number(false);
console.log(`The boolean type false gives :${result}`);







