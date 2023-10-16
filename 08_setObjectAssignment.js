

class Bank {
    bank_name
    location
    account_no
    ifsc
    interest_rate
    constructor(bank_name,location,account_no,ifsc,interest_rate){
        this.bank_name =bank_name;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }

}

// console.log(`Step B==> Bank Objects `);
const axisBank = new Bank("Axis Bank","Mumbai","98765678","axis9898",12);
 console.log(`Bank Name ==>${axisBank.bank_name} | Location ==> ==>${axisBank.location} | Account No==> ${axisBank.account_no} |  IFSC ==>${axisBank.ifsc} | Interest Rate ==>${axisBank.interest_rate} `);

const sbiBank = new Bank("SBI Bank","Pune","67897654","sbi8899",10);
 console.log(`Bank Name ==>${sbiBank.bank_name} | Location ==> ==>${sbiBank.location} | Account No==> ${sbiBank.account_no} |  IFSC ==>${sbiBank.ifsc} | Interest Rate ==>${sbiBank.interest_rate} `);

const iciciBank = new Bank("ICICI Bank","Solapur","56784567","icici8234",8);
console.log(`Bank Name ==>${iciciBank.bank_name} | Location ==> ==>${iciciBank.location} | Account No==> ${iciciBank.account_no} |  IFSC ==>${iciciBank.ifsc} | Interest Rate ==>${iciciBank.interest_rate} `);

const kotakBank = new Bank("Kotak Bank","Baramati","77884567","kotak3422",12);
 console.log(`Bank Name ==>${kotakBank.bank_name} | Location ==> ==>${kotakBank.location} | Account No==> ${kotakBank.account_no} |  IFSC ==>${kotakBank.ifsc} | Interest Rate ==>${kotakBank.interest_rate} `);


const hdfcBank = new Bank("HDFC Bank","Indapur","56456177","hdfc3134",10);
console.log(`Bank Name ==>${hdfcBank.bank_name} | Location ==> ==>${hdfcBank.location} | Account No==> ${hdfcBank.account_no} |  IFSC ==>${hdfcBank.ifsc} | Interest Rate ==>${hdfcBank.interest_rate} `);

const punjabBank = new Bank("Punjab Bank","Pandharpur","773354678","punjab2134",14);
 console.log(`Bank Name ==>${punjabBank.bank_name} | Location ==> ==>${punjabBank.location} | Account No==> ${punjabBank.account_no} |  IFSC ==>${punjabBank.ifsc} | Interest Rate ==>${punjabBank.interest_rate} `);

 console.log(`==================================================`);
console.log(`Step C==> Add all Object elements in a set and traverse it`);

const bankSet = new Set();
bankSet.add(axisBank);
bankSet.add(sbiBank);
bankSet.add(iciciBank);
bankSet.add(hdfcBank);
bankSet.add(kotakBank);
bankSet.add(punjabBank);

 console.log(bankSet);
for (const element of bankSet) {
     console.log(`Bank Name ==> ${element.bank_name} | Location ==> ${element.location} `);
}
