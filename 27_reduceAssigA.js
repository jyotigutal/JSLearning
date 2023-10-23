

const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`The given array is : ${array_numbers}`);

console.log(`Step 1 ==> The sum of all numbers using reduce()`);
const arrayReduceSum =  array_numbers.reduce((runningTotal, value)=>{
        return runningTotal + value ;

})
console.log(arrayReduceSum);

console.log(`Step 2 ==> The numbers multiple of 5 and sum it`);
 const arrayFilter = array_numbers.filter((currentValue)=>{
        return currentValue % 5 == 0 ;

   })
   console.log(arrayFilter);
   const sum = arrayFilter.reduce((runningTotal,value)=>{
        return runningTotal + value;
   })
   console.log(`The sum is : ${sum} `);
   
