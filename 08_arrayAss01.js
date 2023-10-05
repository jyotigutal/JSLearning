
let arrayNumbers = [22,11,44,55,77,33];
console.log(`Step 1 ==> Even positioned numbers==========`);

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element %2==0) {
        console.log(`The even number is: ${element}`);
    }
    
}

var sum =0;
console.log(`Step 2 ==> Sum the array element==========`);
for (let index = 0; index < arrayNumbers.length; index++) {
    sum= sum + arrayNumbers[index];
    
}
console.log(`The sum of array elements: ${sum}`);

