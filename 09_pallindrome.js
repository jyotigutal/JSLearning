
console.log(`==========Check Pallindrome or Not`);
function pallin(num) {
    let numStr =num.toString();
    let result = numStr.split('').reverse().join('');
    if (numStr == result) {
        console.log(`${num} is a Pallindrome`);
    }
    else{
        console.log(`${num} is Not a Pallindrome`);
    }
}

pallin("saas");
pallin("java");
pallin(1221);
pallin(123);


console.log(`========== Reverse the String or Number=========`);

function reverse(str) {
    let numStr = str.toString();
    let result =numStr.split('').reverse().join('');

    console.log(result); 
}

reverse(1234);
reverse("Morning");


const company = "Codemind Technology";
// const company= "Hello World";
let char ='';
for (let index = company.length-1; index >=0; index--) {
     char = char + company.charAt(index);
     
    if(company.charAt(index) ==' '){
        break;
    }    
}
console.log(char);
console.log(`=========================================`);
// let arrayDuplicate =[11,22,55,77,55,33,22];

// for (let index = 0; index <= arrayDuplicate.length; index++) {
//     let char =arrayDuplicate.length ;
//     if(arrayDuplicate[index] != arrayDuplicate.indexOf(index) ){
//         break;
//     }
//      console.log(char);
// }


function removeDuplicate( str , strLength) 
{
    var s = new Set();
    for (var i = 0;i<strLength;i++)
        s.add(str[i]);

    for (const v of s) {
        console.log(v);
}
}
     var str = ["geeks","for","geeks","hello"];
    // var str =[11,22,55,44,77,55,22,11]
    var strLength = str.length;

    removeDuplicate(str, strLength);
