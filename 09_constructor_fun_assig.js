

function Bank(bankName,location,ifscCode,branchCode) {
    this.bankName =bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;

}

console.log(`=============Step 2 ===============`);
const yesBank = new Bank("Yes Bank","Pune","IFSC989890",5764);
console.log(`Bank Name : ${yesBank.bankName} | Location : ${yesBank.location} | IFSC code : ${yesBank.ifscCode} | Branch Code : ${yesBank.branchCode}`);

const sbiBank = new Bank("SBI Bank","Mumbai","IFSC786756",6578);
console.log(`Bank Name : ${sbiBank.bankName} | Location : ${sbiBank.location} | IFSC code : ${sbiBank.ifscCode} | Branch Code : ${sbiBank.branchCode}`);

const mahBank = new Bank("Maha Bank","Indapur","IFSC675654",7865);
console.log(`Bank Name : ${mahBank.bankName} | Location : ${mahBank.location} | IFSC code : ${mahBank.ifscCode} | Branch Code : ${mahBank.branchCode}`);

const axisBank = new Bank("Axis Bank","Solapur","IFSC546765",6574);
console.log(`Bank Name : ${axisBank.bankName} | Location : ${axisBank.location} | IFSC code : ${axisBank.ifscCode} | Branch Code : ${axisBank.branchCode}`);


// console.log(`=============Step 3 and 4 Add prototype ===============`);

Bank.prototype.openTime = "9 AM IST ";
Bank.prototype.closeTime = "6 PM IST ";

console.log(`======Step 5 log the openTime and closeTime ========`);

console.log(`The Opening Time of  SBI Bank is : ${sbiBank.openTime}`);
console.log(`The Closing Time of SBI Bank is : ${sbiBank.closeTime}`);

console.log(`======Step 6 log the bankName and closeTime ========`);

console.log(`The Bank Name is : ${axisBank.bankName} and its closing time is : ${axisBank.closeTime}`);

console.log(`======Step 7 log the bankName, branchCode and openTime ========`);

console.log(`The Bank Name is :${yesBank.bankName} | Branch Code :${yesBank.branchCode} and Opening Time :${yesBank.openTime}`);