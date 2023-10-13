

console.log(`=============Factorial Number =================`);

function factorial(num) {
    let fact =1;
    for (let index = 1; index <= num; index++) {
         fact = fact * index;
        
    }  
    console.log(`Factorial of ${num} : ${fact}`);
}
factorial(4);
factorial(5);



// 3! = 1 * 2 * 3 ==> 6
// 3! = 3 * 2 * 1 ==> 6
// 4! = 4 * 3 * 2 * 1 ==> 24
// 5! = 5 * 4 * 3 * 2 * 1 ==> 120 

// function factorial(num){
//     let factNum = 1; // 60 
//     for (let index = num; index >=1; index--) {
//         factNum = factNum * index;
//     }
//     console.log(`Factorial of ${num} is ${factNum} `);
// }
// factorial(5);
// factorial(7);
// factorial(10);

console.log(`============ Prime or Not ====================`);

function isPrime(num) {
    let flag =true;
    for (let index = 2; index <num; index++) {
        if(num % index ==0){
            flag= false;
            break;
        }
    }
    if(flag == true){
        console.log(`${num} Number is Prime`);
    }
    else{
        console.log(`${num} Number is Not Prime`);
    }
}

isPrime(11);
isPrime(15);
isPrime(6);
isPrime(3);


