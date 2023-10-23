

const array = [99,34,23,45,20,56,76,11,33,87];

const string = ["Hii","My", "Name" ,"Is", "Jyoti"];

let arrayLength = string.length;
console.log(arrayLength);

array.forEach((elements)=>{  return elements;
})
console.log(array);

console.log(`===============================`);
for (const elements of array) {
    console.log(array[1]);
}

console.log(`===============================`);
for (let index = array.length-1; index >=0 ; index--) {
    const element = array[index];
    console.log(element);
}

console.log(`===============================`);
for (let index = string.length-1; index >=0 ; index--) {
    const element = string[index];
    console.log(element);
}

console.log(`===========Reverse only Technology =========`);


const str ="CodeMind Technology";

let char ='';
for (let index = str.length-1; index >=0; index--) {
     char = char +str.charAt(index);
     if (str.charAt(index) == ' ') {
        break;
     
    }    
}
console.log(char);
console.log(`=====================`);

const arr1 = [99,34,11,33,87,34,55,33,11];
const arr2 = [23,99,11,56,76];

const s3 = ["H" ,"A","B","H","B"];

var arrayMerge = arr1+ `,` +arr2;
console.log(arrayMerge);

const newSet =[...new Set(arr1)];
//  newSet.add(33);
console.table(newSet);
console.log(`==============================`);

console.log(`remove duplicate using for of loop`);
let s=[];
for (const i of s3) {
    if(s.indexOf(i)=== -1){
        s.push(i);
    }
}

console.log(s);

const s1 = "Good ";
const s2 = "Evening";

const result = s1+s2;
console.log(result);

let word ='';
for (let index = result.length-1; index >=0; index--) {
    word = word + result.charAt(index); 
}
console.log(word);

console.log(`===============================`);

function FirstAndLast(str) {
    return str.split(" ").map((word)=> word.charAt(0).toUpperCase() +
    (word.length > 2 ? word.substring(1,word.length-1) : "" ) +
    (word.length > 1 ? word.charAt(word.length-1).toUpperCase() : "" )).join( " ");
  }
  
  var strWord = "How are you mate";
  console.log(`Given String is==> ${strWord}`);

  const resultCapital = FirstAndLast(strWord);
  console.log(`The first and last character is capital of word==> ${resultCapital}`);




