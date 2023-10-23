

const arrayRollNumbers =[113,45,56,11,32,45,109,799,56,45];
console.log(`Given array: ${arrayRollNumbers}`);

console.log(`Step 1 ==> Reverse the given array`);
console.log(arrayRollNumbers.reverse());

console.log(`Step 2 ==> Use the sort() for given array`);
console.log(arrayRollNumbers.sort());

console.log(`Step 3 ==> Sort the given array in ascending order by custom logic`);
const arrayAscending = arrayRollNumbers.sort((a,b)=>{
    return a>b ? 1 : -1;

});
console.log(arrayAscending);

console.log(`Step 4 ==> The greatest number form the given array`);
const greatestNumber = arrayAscending[arrayAscending.length-1];
console.log(greatestNumber);

console.log(`Step 5 ==> The smallest number form the given array`);
const smallestNumber = arrayAscending[0];
console.log(smallestNumber);

console.log(`Step 6 ==> Remove duplicates from array`);
let s =[];
     arrayRollNumbers.sort((element)=>{
    for (const element of arrayRollNumbers) {
        if(s.indexOf(element) === -1){
           return s.push(element);
        }
    }
})
console.log(s);
