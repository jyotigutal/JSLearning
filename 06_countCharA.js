

var count =0;
var countCharA = function(str) {
    for (let index = 0; index < str.length; index++) {
        if (str.charAt(index)=="a" || str.charAt(index)== "A") {
            count = count +1;
        }
        
    } 
    console.log(`The given String is : ${str}`);   
    console.log(`The total count of 'a' & 'A' is: ${count}`);
}

countCharA("I AM Learning JavaScript, The Language of Internet");
console.log(`========================================`);

var count1 = 0;
var countCharA1 = function(str1) {
    for (let index = 0; index < str1.length; index++) {
        if (str1.charAt(index)=="a" || str1.charAt(index)== "A") {
            count1 = count1 +1;
        }
        
    } 
    console.log(`The given String is : ${str1}`);    
    console.log(`The total count of 'a' & 'A' is: ${count1}`);
}
countCharA1("My Favorite movie LAggAn");