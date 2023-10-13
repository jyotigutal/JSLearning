

// const num = 7;
// function isPrimeNumber(num){
//     for (let index = 2; index < num; index++) {
//         if (num%index==0) {
//             return false;
//         }
//     }
//     return true;
// }
// const result = isPrimeNumber(11);
// console.log(`Is Number Prime: ${result}`);




function isPrimeNumber(array){
    let flag =true;
    // let i =6;
    let arrStr ="";
    for (let index = 0,i=0; index <=array.length-1; index++, i++) {
      
        if (array[i]% index==0) {
            // flag= false;
            
            console.log(`${array[i]} Number is Not Prime`); // break;
        }
        else{
            console.log(`${array[i]} Number is Prime`);
        }
      
       
    }
   
    if(flag == true){
        // console.log(`${array[i]} Number is Prime`);
    }
    else{
        // console.log(`${array[i]} Number is Not Prime`);
    }
    
    
}

const array =[11,3,6,10,43,29,50];
const result = isPrimeNumber(array);





