
function stringHandsOn() {
    
}

stringHandsOn();

var givenString = "   Hey you are doing good, keep it up    ";

console.log(`Step 1==> The given string is: ${givenString}`);
console.log(`Step 2==> The length of string is: ${givenString.length}`);

var result = givenString.trim(); 
console.log(`Step 3==> The removing extra spaces from string is: ${result.length}`);

var spaces = result.length;
// console.log(`${spaces}`);
var stringCount = givenString.length;
var spaceCount= stringCount - spaces;
console.log(`Step 4==> The removed extra spaces count is: ${spaceCount}`);

var charAt0 = result.charAt(0);
var charAtLast = result.charAt(result.length-1);
// console.log(`${charAtLast}`);
 console.log(`Step 5==> The first and last character is: ${charAt0} and ${charAtLast}`);

 var countWords = result.split(" ");
 console.log(`Step 6==> The count of total words is: ${countWords.length}`);

 var resultIndex = result.indexOf('good');
 console.log(`Step 7==> Index of word "good" is: ${resultIndex}`);

 var subStringResult = result.substring(22);
 var subStringResult1 = result.slice(22);
 console.log(`Step 8==>The substring starting from index 22 is: ${subStringResult1} `);

 var isString = result.includes("up");
 console.log(`Step 9==> Is string ends with word "up": ${isString}`);

 var isWord = result.includes("Hey");
 console.log(`Step 10==> Is string start with word "Hey": ${isWord}`);