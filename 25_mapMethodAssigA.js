

const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`Step 1==> Add 10 in each element`);
const addition = arrayNumbers.map((currentValue)=>{
    return currentValue + 10;

})
console.log(addition);

console.log(`==========================================`);
console.log(`Step 2==> Cube the each array element`);

const cubeNumber = arrayNumbers.map((currentValue)=>{
    return currentValue*currentValue*currentValue;

})
console.log(cubeNumber);

console.log(`==========================================`);
console.log(`Step 3==> Add the index value into its corresponding each array element`);

const addIndex = arrayNumbers.map((currentValue,index)=>{
    return currentValue + index;
})
console.log(addIndex);