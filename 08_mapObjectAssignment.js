

class Bank {
    bankName
    location
    accountNo
    ifsc
    interestRate
    constructor(bankName,location,accountNo,ifsc,interestRate){
        this.bankName =bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }

}

// console.log(`Step B==> Bank Objects `);
const axisBank = new Bank("Axis Bank","Mumbai","98765678","axis9898",12);

const sbiBank = new Bank("SBI Bank","Pune","67897654","sbi8899",10);

const iciciBank = new Bank("ICICI Bank","Solapur","56784567","icici8234",8);

const kotakBank = new Bank("Kotak Bank","Baramati","77884567","kotak3422",12);

const hdfcBank = new Bank("HDFC Bank","Indapur","56456177","hdfc3134",10);

const punjabBank = new Bank("Punjab Bank","Pandharpur","77335468","punjab2134",14);

const bankMap = new Map();

bankMap.set(98765678,axisBank);
bankMap.set(67897654,sbiBank);
bankMap.set(56784567,iciciBank);
bankMap.set(77884567,kotakBank);
bankMap.set(56456177,hdfcBank);
bankMap.set(77335468,punjabBank);

// console.log(bankMap);

// console.log(`=============================================`);
const totalKeys = bankMap.keys();
console.log(totalKeys);
for (const key of totalKeys) {
    const keyValue = bankMap.get(key);
    console.log(`Bank Name ==> ${keyValue.bankName} | Account No==> ${keyValue.accountNo} | Interest Rate ==> ${keyValue.interestRate}`);
    
}

