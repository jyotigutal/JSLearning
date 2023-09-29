

var square = function(num1) {
    var num = num1*num1;
    console.log(`The square of ${num1} is: ${num}`);
}

console.log(`======================= Step 1========================`);

 square(5);
 square(6);
 square(25);
 square(100);
 square(67);
 square(89);
 square(59);

 console.log(`======================= Step 2========================`);

 var name = function(){

 } 
 console.log(`The type of variable 'name' is: ${typeof(name)} `);

 console.log(`======================= Step 3========================`);

 var areaOfRectangle = function(length,width){
        var result = length*width;
        return result;
 }
    var ans = areaOfRectangle(499,917);
    console.log(`The area of rectangle is: ${ans}`);

    console.log(`======================= Step 4========================`);

    var swapValues = function(str1,str2){
        console.log(`Values before swapping are : ${str1} and ${str2}`);
        var temp = str1;
        str1 = str2;
        str2 = temp;
        console.log(`Values after swapping are : ${str1} and ${str2}`);
    }

    swapValues("Mahi","Raina");
    swapValues(55,77);

    console.log(`======================= Step 5========================`);

    var string = "JS the most popular language of internet";
    console.log(`A==> The total character of given string is : ${string.length}`);

    var charAtString6 = string.charAt(6);
    console.log(`B==> The character of index 6 is : ${charAtString6}`);

    var charAtString11 = string.charAt(11);
    console.log(`C==> The character of index 11 is : ${charAtString11}`);

    var lastChar = string.charAt(string.length-1);
    console.log(`D==> The last character is : ${lastChar}`);

    var firstChar = string.charAt(0);
    console.log(`E==> The first character is : ${firstChar}`);

    var lastChar3 = string.charAt(string.length-3);
    console.log(`F==> The last 3rd character is : ${lastChar3}`);

    var words = string.split(" ");
    var totalWords = words.length;
     var squareOfWords = totalWords * totalWords;
    console.log(`G==> The square of total words(${totalWords}) is :${squareOfWords}`);


