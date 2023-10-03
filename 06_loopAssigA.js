
console.log(`Step 1 ==> Count total number of vowels=================`);
var vowelsCap = "AEIOU";
// var vowelsLower = "aeiou";
var str = "I am very good IT Developer";
var count =0;
for (let index = 0; index <= str.length-1 ; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count =count+1;
    }
    
}
console.log(`Total number of vowels count is: ${count}`);

console.log(`Step 2 ==> Sum of cube of numbers from 1 to 5=================`);
console.log(`1*1*1 + 2*2*2 + 3*3*3 + 4*4*4 +5*5*5`);

var count =0;
for (let index = 1; index <= 5; index++) {
    count = count + index * index * index;
}
console.log(`The sum of cube of given numbers is:${count}`);

console.log(`Step 3 ==> Show Odd positioned characters =================`);

var result ="";
function oddPositionedChars(string) {
    for (let index = 0; index <= string.length-1; index++) {
        if(index %2!=0 && string.charAt(index) !=" "){
         result = result + string.charAt(index);
        }
        
}

 console.log(`The Given string has odd positioned characters are : ${result} `);
}
var result1 ="";
function oddPositionedChars1(string) {
    for (let index = 0; index <= string.length-1; index++) {
        if(index %2!=0 && string.charAt(index) !=" "){
         result1 = result1 + string.charAt(index);
        }
        
}

 console.log(`The Given string has odd positioned characters are : ${result1} `);
}

oddPositionedChars("Hard work always pays back");
console.log(`==================================================`);
oddPositionedChars1("Soon I will be UI IT Champ");
