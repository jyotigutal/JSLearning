

const bankSbi = {
    name : "SBI Bank",
    address : "Dattanagar",
    branch : "Indapur",
    city : "Pune",
}
 
const bankLocation ={
    street : "M G Road",
    city : "Mumbai",
    pin : 413110,
}
console.log(`Step 1==> The object bankSbi`);
 console.log(bankSbi);

console.log(`Step 2==> The object bankLocation`);
 console.log(bankLocation);

console.log(`Step 3==>The clone of object 'bankSbi' and 'bankLocation' is `);
const bankSbiClone = Object.assign({},bankSbi);
console.log(bankSbiClone);

const bankLocationClone = Object.assign({},bankLocation);
console.log(bankLocationClone);

console.log(`Step 4 ==> rateOfInterest using object literals with properties`);
let rateOfInterest ={
    homeLoanInterest : 12,
    personalLoanInterest:10,
    dueInterest : 8
}
console.table(rateOfInterest);

console.log(`Merge the step1, step2 and step 4 objects into new object sbiDetails`);
let sbiDetails ={
    name : "SBI Bank",
    address : "Dattanagar",
    branch : "Indapur",
    city : "Pune",
}
 Object.assign(sbiDetails,bankLocation,rateOfInterest);
console.table(sbiDetails);

console.table(`Step 6 ==> Traverse the merged object using for in loop`);
for (const key in sbiDetails) {
    const element = sbiDetails[key];
    console.log(key,element);  
}

