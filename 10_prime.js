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

function isPrimeNumber(array) {
  // console.log(array);
  let res = [];
  let res1=[];
  for (let e1 of array) {
    if (e1 == 2) {
      res.push(e1);
    } else {
      let flag = true;
      for (let i = 2; i < e1; i++) {
        if (e1 % i == 0) {
          flag = false;
          break;
        }
      }
      if (flag == true && e1 != 1) {
        res.push(e1);
        
      }
      if (flag == false) {
        res1.push(e1);
        
      }
    }
  }
//    return res;
console.log(`Prime no :${res}`);
console.log(`Not Prime no :${res1}`);
}

const array = [11, 3, 6, 10, 43, 29, 50];
var res = isPrimeNumber(array);
// console.log(`Prime no :${res}`);
