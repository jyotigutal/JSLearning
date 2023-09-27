
console.log(`===================== Step 1=========================`);
function squareOfWordLength(str){
    var lengthOfStr = str.length;
    var squareOfStr = lengthOfStr*lengthOfStr;
    //return lengthOfStr;
    return squareOfStr;
}
var result = squareOfWordLength("JavaScript");
console.log(`Given string is "JavaScript" and its Square of Length is: ${result}`);

console.log(`==========================================================`);
var result = squareOfWordLength("Google Chrome");
console.log(`Given string is "Google Chrome" and its Square of Length is: ${result}`);

console.log(`===========================================================`);
var result = squareOfWordLength("Developer Smart");
console.log(`Given string is "Developer Smart" and its Square of Length is: ${result}`);

console.log(`========================= Step 2 ============================`);

function uiDeveloper(){

    givenStr = `I am Angular Developer`;
    var result = givenStr.length;
    console.log(`The length of given string "I am Angular Developer" is: ${result}`);

    var totalWords = givenStr.split(" ");
    console.log(`Total Words of given String is: ${totalWords.length}`);

    console.log(`======================================================`);
    var countWords= totalWords.length;
    var divideResult = result/countWords;
    console.log(`The string length and divide by total number of words: ${divideResult}`);

    var multipleResult = result*countWords;
    console.log(`The string length and multiple by total number of words: ${multipleResult}`);

}
uiDeveloper();

