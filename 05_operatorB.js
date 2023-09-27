
console.log(`========================= Step 1 Greater Number ========================`);
function greaterNumber(num1,num2){
    var greaterNum = num1 > num2 ? num1:num2; 
    console.log(`The greater number from "${num1} and ${num2}" is: ${greaterNum} `);
}
 var result=  greaterNumber(10,-10);
 var greaterNum= greaterNumber(800,899);
 
 console.log(`========================= Step 2 Even or Odd ========================`);

 function isEvenOrOddNum(num1) {
    var result = num1%2==0 ? "Given number is Even" : "Given number is Odd";
    console.log(`The given number "${num1}" is : ${result}`);
 }
    isEvenOrOddNum(29);
    isEvenOrOddNum(44);
    isEvenOrOddNum(0);
    isEvenOrOddNum(101);


    console.log(`========================= Step 3 word is Even or Odd ========================`);

    function wordLength(str1) {
        var strLength = str1.length;
        // console.log(`The length of given string "${str1}" is: ${strLength}`);
        var result = strLength %2==0 ? "EVEN" : "ODD";
        console.log(`The given string "${str1}" is: ${result}`);
            return result;
        
    }

    var result = wordLength("JavaScript");
    var result = wordLength("Developer");
    var result = wordLength("Google");
   