

const arrayNumbers= [20,31,40,25,23,11,29,9,60,2,11];

console.log(`===Step 1 Total elements length===============`);
var totalElements = arrayNumbers.length;
console.log(`The length of given array : ${totalElements}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 2 First and Last elements ===============`);
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index == 0){
        console.log(`The first element is: ${arrayNumbers[index]}`);
    }
    
}
console.log(`The last element is: ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 3 Third last elements ===============`);
var lastThird = arrayNumbers.length-3;
console.log(`The last third element is: ${arrayNumbers[lastThird]}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 4 Even Numbers ===============`);

for (const index in arrayNumbers) {
   if(arrayNumbers[index] %2==0){  
        console.log(`The even numbers are : ${arrayNumbers[index]}`);
   } 
   
}

console.log(`-----------------------------------------------`);
console.log(`===Step 5 Odd Numbers ===============`);
for (const index in arrayNumbers) {
    if(arrayNumbers[index] %2!=0){  
         console.log(`The odd numbers are : ${arrayNumbers[index]}`);
    } 
    
 }

 console.log(`-----------------------------------------------`);
console.log(`===Step 6 Sum of all Even positioned numbers ===============`);
var sum=0;
for (let index = 0; index <= arrayNumbers.length; index=index+2) {
     sum = sum + arrayNumbers[index];
    
}
console.log(`The sum of even positioned elements are: ${sum}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 7 Sum of all odd positioned numbers ===============`);
var sum1=0;
for (let index = 1; index < arrayNumbers.length; index=index+2) {
     sum1 = sum1 + arrayNumbers[index];
}
console.log(`The sum of odd positioned elements are: ${sum1}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 8 Sum of all numbers ===============`);

var sum1=0;
for (let index = 0; index < arrayNumbers.length; index++) {
     sum1 = sum1 + arrayNumbers[index];
}
console.log(`The sum of all elements are: ${sum1}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 9 Multiple of 5 ===============`);

for (let index = 0; index < arrayNumbers.length; index++) {
    if (arrayNumbers[index] %5==0) {
        console.log(`The multiple of 5 is:${arrayNumbers[index]}`);
    }
    
}

console.log(`-----------------------------------------------`);
console.log(`===Step 10 Is number 115 available===============`);

var result = arrayNumbers.includes(115);
console.log(`The number 115 is available :${result}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 11 Is number 23 available===============`);

var result = arrayNumbers.includes(23);
console.log(`The number 23 is available :${result}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 12 Insert 55,66 before index 3 ===============`);
console.log(`The given array is :${arrayNumbers}`);
var addElements = arrayNumbers.splice(3,0,55,66);
console.log(`Inserted 55,66 before index 3 is: ${arrayNumbers}`);

console.log(`-----------------------------------------------`);
console.log(`===Step 13 Delete elements ===============`);
console.log(`The given array is :${arrayNumbers}`);
var deleteElements = arrayNumbers.splice(4,3);
console.log(`Deleting 3 elements starting index from 4 is: ${arrayNumbers}`);


