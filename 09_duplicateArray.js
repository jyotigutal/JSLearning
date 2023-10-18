

function FirstAndLast(str) {
  var string = str.split("");

  for (let index = 0; index < string.length; index++) {
    var k = index; // k stores index of first character and index is going to store index of last character.

    while (index < string.length && string[index] != " ") index++;
    // Check if the character is a small letter
    // If yes, then Capitalize
    string[k] = String.fromCharCode(string[k] >= "a" && string[k] <= "z" ? string[k].charCodeAt(0) - 32 : string[k].charCodeAt(0));

    string[index - 1] = String.fromCharCode(string[index - 1] >= "a" && string[index - 1] <= "z" ? string[index - 1].charCodeAt(0) - 32 : string[index - 1].charCodeAt(0));
  }
  return string.join("");
}

var str = "How are you mate";
const result = FirstAndLast(str);
console.log(result);

console.log(`=========== Remove duplicate elements from array using Set() ===================`);
var arrayNum =[11,3,4,11,4,7,3];

var arraySet = [...new Set(arrayNum)];
console.log(arraySet);

console.log(`=========== Remove duplicate elements from array using for loop=================`);

function removeDuplicate(str) 
{
    var s = [];
    for (const i of str) {
        if(s.indexOf(i)===-1){
            s.push(i);
        }     
    }   
    console.log(s);
}

var arrayNum =[11,3,4,11,4,7,3];
removeDuplicate(arrayNum);