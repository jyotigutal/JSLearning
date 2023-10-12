

let bankSbi = {
    name : "SBI Bank",
    address : "Dattanagar",
    branch : "Indapur",
    city : "Pune",
}
let bankLocation ={
    street : "M G Road",
    city : "Mumbai",
    pin : 413110,
}

console.log(`Step 3==>The clone of object 'bankSbi' and 'bankLocation' using object.assign() `);
const bankSbiClone = Object.assign({},bankSbi);
console.log(bankSbiClone);

const bankLocationClone = Object.assign({},bankLocation);
console.log(bankLocationClone);

console.log(`Step 3==>The clone of object 'bankSbi' and 'bankLocation' using spread operator `);

let sbiBank = {...bankSbi};
sbiBank.name ="Bank of SBI";
console.log(`Updated name of SBI Bank : ${sbiBank.name}`);

let location = {...bankLocation};
location.pin = 456755;
console.log(`Updated pin of location is: ${location.pin}`);

console.log(`Step 4 ==> rateOfInterest using object literals with properties`);
let rateOfInterest ={
    homeLoanInterest : 12,
    personalLoanInterest:10,
    dueInterest : 8
}
console.table(rateOfInterest);

console.log(`Step 5==>Merge the step1, step2 and step 4 objects into new object sbiDetails`);
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
    console.log(key,`-`, element);  
}
