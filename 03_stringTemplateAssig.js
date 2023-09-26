
function stringTemplateAssign(){
    
}
stringTemplateAssign();

console.log("===================Step 1====================");
var strCompanyName = "Tech Mahindra";
console.log(`My dream company is : ${strCompanyName}`);

console.log("===================Step 2.1====================");
var h1 = "Reading", h2="Traveling", h3="Programming";
console.log(`My Hobbies are : ${h1}, ${h2}, ${h3} `);

console.log("===================Step 2.2====================");
var totalChars = h1.concat(h2).concat(h3);
console.log(`Concat the hobbies in one string : ${totalChars}`);
