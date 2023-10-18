

// overriding means whatever implementation having already in parent class it just modify the change within the child class

class Bank{
    roi(){
        return 0;
    }
}

class AXIS extends Bank{
   roi(){
    return 10.5;
   } 
}
class SBI extends Bank{
    roi(){
        return 12.5
    }
}

let sbi = new SBI();
console.log(sbi.roi());

let axis = new AXIS();
console.log(axis.roi());

let bank = new Bank();
console.log(bank.roi());