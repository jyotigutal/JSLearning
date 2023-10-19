
let string = "How are you mate";

const FirstAndLast = (string) => {
     let lastCharUpperCase = string.split(" ").map((element)=> {        
        element = element.toLowerCase();
         return element.replace(element[element.length - 1], element[element.length - 1].toUpperCase())
        
    })

     return lastCharUpperCase.join(" ");
}

console.log(FirstAndLast(string))

console.log(`==================================`);

const words = string.split(" ");

for (let i = 0; i < words.length; i++) {
     words[i] = words[i][0].toUpperCase() + words[i].substr(1);

}

console.log(words.join(" "));
